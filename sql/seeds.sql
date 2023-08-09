-- seeds initial example data into business_db

-- seeds departments table
INSERT INTO departments (department_name) 
VALUES 
    ("Department of Injustice"),
    ("Department of Nuisances"),
    ("Department of Vulgarity"),
    ("Wretched Department"),
    ("Unholy Department"),
    ("Department of Carnal Wants"),
    ("Department of Secrets");

-- seeds roles table
INSERT INTO roles (title, salary, department_id)
VALUES
("Flesh Eater", 99.99, "6"),
("Secret Keeper", 83.00, "7"),
("Brutalizer", 25.00, "4"),
("Assembly Programmer", 5.00, "3");