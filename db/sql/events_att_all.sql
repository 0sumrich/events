select 
events_att.event_id as 'id',
events_att.event_date as 'Date',
libraries.full_name as Library,
events_att.adults as Adults, 
events_att.children as Children,
event_cat.category as Category,
events_att.notes as Notes,
delivered_by.team as 'Delivered By',
events_att.charge as Charge
from events_att
join event_cat on
events_att.category = event_cat.cat_id
join libraries on
events_att.library = libraries.code
join delivered_by on
events_att.delivered_by = delivered_by.id
order by events_att.event_date;