/* Database creation */
Create database previous_projects;

/* Initiation of column and their tyoes */
CREATE TABLE project_schema.previous_projects (
  yearSemester varchar(50) DEFAULT NULL,
  class varchar(3) DEFAULT NULL,
  teamNumber int DEFAULT NULL,
  teamName varchar(100) NOT NULL,
  projectTitle varchar(100) DEFAULT NULL,
  organization varchar(350) DEFAULT NULL,
  industry varchar(80) DEFAULT NULL,
  abstract varchar(5000) DEFAULT NULL,
  studentNames varchar(500) DEFAULT NULL,
  checkBox tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`teamName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
    
/* imported google sheet given by stefano as our dataset */

/* Query to view all data in table projectlist  */
SELECT * FROM project_schema.previous_projects;

-- DROP TABLE project_schema.previous_projects;

/* Look through columns and search for keyword with any placement. */
SELECT * 
FROM project_schema.previous_projects
WHERE yearSemester  LIKE '%keyword%' or class LIKE '%keyword%' 
or teamNumber = '%keyword%' or teamName LIKE '%keyword%' 
or projectTitle LIKE '%keyword%' or organization LIKE '%keyword%' 
or industry LIKE '%keyword%' or abstract LIKE '%keyword%' or studentNames LIKE '%keyword%';

/* Combine result tables to become one, without any duplicates */
SELECT * 
FROM table1
UNION DISTINCT 
SELECT * 
FROM table2;

/* Cloning table with stucture and data to make a table that the user can edit so no real data will be lost from database */
CREATE TABLE new_table AS SELECT * FROM old_table;

/* Deleting a specific row from table */
DELETE FROM new_table WHERE teamName ='#1Team';

/* Output all the rows that were checked by user */ 
SELECT * 
FROM project_schema.previous_projects
WHERE checkBox = 1;
