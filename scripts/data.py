from get_df import dfs, df_from_excel
import os, sys, pdb
import pandas as pd
import sqlite3

def read_sql(fn):
  filepath = sys.path[0] + '/sql/' + fn
  file = open(filepath, 'r')
  string = ""
  for line in file:
    string += line
  return string

def run_sql_simple(query):
  conn = sqlite3.connect('.data/main.db')
  c = conn.cursor()
  c.execute(query)
  conn.commit()
  conn.close()

def run_sql_args(query, args):
    conn = sqlite3.connect('.data/main.db')
    c = conn.cursor()
    c.execute(query, args)
    conn.commit()
    conn.close()
  
def query_2_df(query):
  conn = sqlite3.connect('.data/main.db')
  df = pd.read_sql(query, conn)
  print(df)
  return df

def create_delivered_by():
  multiline_sql('create_delivered_by.sql')
  query_2_df('select * from delivered_by;')

def create_tables():
  run_sql_simple(read_sql('create_events_att.sql'))
  run_sql_simple(read_sql('create_event_cat.sql'))
  run_sql_simple(read_sql('create_libraries.sql'))
  create_delivered_by()
  print('TABLES CREATED')

def upload_events_att_excel(fn):
  df = df_from_excel(fn)
  df['Event Date']=df['Event Date'].astype(str)
  cols = list(df)
  fstring = ('(' + '?,' * (len(cols)))[:-1] +')'
  query = 'INSERT INTO events_att VALUES ' + fstring
  tuples = list(df.itertuples(name=None))
  conn = sqlite3.connect('.data/main.db')
  c = conn.cursor()
  for row in tuples:
    c.execute(query, row[1:])
  conn.commit()
  conn.close()

def upload_event_cat(fn):
  df = df_from_excel(fn)
  query = 'INSERT INTO event_cat VALUES (?,?,?)'
  data = list(df.itertuples(name=None))
  conn = sqlite3.connect('.data/main.db')
  c = conn.cursor()
  for row in data:
    c.execute(query, row)
  conn.commit()
  conn.close()
  
def upload_libraries(fn):
  df = df_from_excel(fn)
  query = 'INSERT INTO libraries VALUES (?,?,?,?,?)'
  data = list(df.itertuples(name=None))
  conn = sqlite3.connect('.data/main.db')
  c = conn.cursor()
  for row in data:
    c.execute(query, row)
  conn.commit()
  conn.close()

def delete_all():
  sql = read_sql('delete_all.sql').splitlines()
  for line in sql:
    run_sql_simple(line)
  print('DELETED ALL')

def upload():
  upload_events_att_excel('Event Attendance 20190820.xlsx')
  upload_event_cat('Regular Events.xlsx')
  upload_libraries('Libraries.xlsx')
  print('Uploaded data')

def multiline_sql(fn):
  sql = read_sql(fn).split(';')
  for q in sql:
    query = q + ';'
    run_sql_simple(query)

def update_cols():
  multiline_sql('update_cols.sql')

def drop_cols():
  multiline_sql('drop_cols.sql')

def convert_event_ids():
  df = query_2_df('select * from event_cat')
  tuples = list(df.itertuples(name=None, index=None))
  for tup in tuples:
    id = tup[0]
    cat = tup[1]
    sql = """
      update events_att
      set category = ?
      where category = ?
    """
    run_sql_args(sql, (id, cat, ))
    

def ammend():
  update_cols()
  drop_cols()
  run_sql_simple('drop table _events_att_old;')
  convert_event_ids()

def drop_all_tables():
  tables = list(query_2_df("SELECT name FROM sqlite_master WHERE type='table'")['name'])
  for table in tables:
    run_sql_simple('drop table %s' %table)

def run():
  drop_all_tables()
  create_tables()
  upload()
  ammend()

run()

