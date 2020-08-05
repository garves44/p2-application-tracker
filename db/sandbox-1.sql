-- these are queries we can use for sandboxing/testing with ease
use jobs_db;

-- ========[ Debugging ]=================
show exable_table;

desc exable_table;
desc exable_table;
desc exable_table;
desc exable_table;

select * from exable_table;
select * from exable_table;
select * from exable_table;
select * from exable_table;

-- ____________________ CAREFUL BELOW _______________________
-- SET FOREIGN_KEY_CHECKS = 0; 
-- truncate table exable_table;
-- truncate table exable_table;
-- truncate table exable_table;
-- truncate table exable_table;
-- SET FOREIGN_KEY_CHECKS = 1;

-- drop table if exists exable_table;
-- drop table if exists exable_table;
-- drop table if exists exable_table;
-- drop table if exists exable_table;

-- drop database if exists jobs_db;
-- create database if not exists jobs_db;

