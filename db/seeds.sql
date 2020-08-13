-- create job tables
INSERT INTO job (job_name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

-- create resume tables
INSERT INTO resume (resume_name, resume_link)
VALUES
('Sales Lead Resume', 'www.google.com'),
('Lead Engineer Resume', 'www.facebook.com'),
('Finance Resume', 'www.gmail.com');

-- create interview tables
INSERT INTO interview (interview_date, job_id)
VALUES
('3/7/1991', 1),
('7/12/1984', 2)