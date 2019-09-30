ALTER TABLE events_att RENAME TO _events_att_old;

CREATE TABLE events_att (
  event_id INTEGER PRIMARY KEY,
  event_date TEXT NOT NULL,
  library TEXT NOT NULL,
  adults INTEGER NOT NULL,
  children TEXT NOT NULL,
  category TEXT NOT NULL,
  max_no INTEGER,
  notes TEXT,
  funded_by TEXT,
  delivered_by INTEGER,
  project TEXT,
  title TEXT,
  charge REAL, 
  staff TEXT,
  year_of_learning INTEGER,
  arts_council_funded TEXT,
  theme TEXT
);

INSERT INTO 

events_att 
(event_id, event_date, library, adults, children, category,
 max_no, notes, funded_by, delivered_by, project, title, charge,
 staff, arts_council_funded, theme)
  SELECT 
  event_id,
  event_date,
  library,
  adults,
  children,
  category,
  max_no,
  notes,
  funded_by,
  delivered_by,
  project,
  title,
  charge,
  staff,
  arts_council_funded,
  theme
  FROM _events_att_old;