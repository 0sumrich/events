import pandas as pd
import os, pdb, sys

def dfs():
  cd = sys.path[0]
  excels_dir = cd + '/excels/'
  files = os.listdir(excels_dir)
  dfs = []

  for file in files:
    dfs.append(pd.read_excel(excels_dir + file))
  return dfs

def df_from_excel(filename):
  cd = sys.path[0]
  excels_dir = cd + '/excels/'
  return pd.read_excel(excels_dir + filename)