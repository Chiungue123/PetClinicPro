INSERT INTO Owners (firstName, lastName, email, phone) VALUES ('John', 'Doe', 'john.doe@example.com', '555-1234');
INSERT INTO Owners (firstName, lastName, email, phone) VALUES ('Jane', 'Smith', 'jane.smith@example.com', '555-5678');
INSERT INTO Owners (firstName, lastName, email, phone) VALUES ('Emily', 'Johnson', 'emily.j@example.com', '555-9012');

INSERT INTO Pets (name, breed, age, ownerID) VALUES ('Buddy', 'Golden Retriever', 3, 1);
INSERT INTO Pets (name, breed, age, ownerID) VALUES ('Max', 'Beagle', 5, 2);
INSERT INTO Pets (name, breed, age, ownerID) VALUES ('Bella', 'Labrador', 4, 3);

INSERT INTO Visits (petID, dateOfVisit, reasonOfVisit, treatmentNotes) VALUES (1, '2023-01-20', 'Annual Checkup', 'Vaccinations updated');
INSERT INTO Visits (petID, dateOfVisit, reasonOfVisit, treatmentNotes) VALUES (2, '2023-02-15', 'Limping in right hind leg', 'Sprained leg, rest and mild painkillers prescribed');
INSERT INTO Visits (petID, dateOfVisit, reasonOfVisit, treatmentNotes) VALUES (3, '2023-03-10', 'Regular grooming', 'Nails trimmed, fur groomed');

