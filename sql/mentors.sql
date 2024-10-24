DROP database mentors_db;
CREATE DATABASE mentors_db;
USE mentors_db;

CREATE TABLE mentors(
	mentorID INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    mentorName VARCHAR(100) NOT NULL,
    mentorEmail NVARCHAR(320) UNIQUE NOT NULL
);

CREATE TABLE mentorEvidence(
	mentorID INT,
    evidenceID INT,
    FOREIGN KEY(mentorID) REFERENCES mentors(mentorID)
);