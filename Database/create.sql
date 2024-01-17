create database pet_clinic_db;

CREATE TABLE Owners (
    ownerID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(20)
);

CREATE TABLE Pets (
    petID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    breed VARCHAR(100),
    age INT,
    ownerID INT,
    FOREIGN KEY (ownerID) REFERENCES Owners(ownerID)
);

CREATE TABLE Visits (
    visitID INT AUTO_INCREMENT PRIMARY KEY,
    petID INT,
    dateOfVisit DATE NOT NULL,
    reasonOfVisit TEXT,
    treatmentNotes TEXT,
    FOREIGN KEY (petID) REFERENCES Pets(petID)
);

