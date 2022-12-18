-- Prefill with data
INSERT INTO department (dept_name)
VALUES  ("Operations"),
        ("Marketing"),
        ("HR");
    -- Add these for test
        -- ("Development")
        -- ("Finance");


INSERT INTO role (id, title, salary, department_id)
VALUES  (1, "CEO", "500,000", 1),
        (2,"Director of Operations", "250,000", 1),
        (3,"Director of Marketing", "250,000", 2),
        (4,"Director of HR", "200,000", 3),
        -- ("Director of Development","250,000", 4),
        -- ("Director of Finance","250,000", 5)
        (5,"Operations manager", "150,000", 1),
        (6,"Project manager", "150,000", 1)
        (7,"Operations engineer", "100,000", 1),
        (8,"Brand strategist", "80,000", 2),
        (9,"Marketing Coordinater","60,000", 2),
        (10,"HR Generalist", "50,000", 3);

INSERT INTO role (id, first_name, last_name, role_id, manager_id)
VALUES  (001, "Rhea", "Seiros", 1, null),
        (002, "Jeralt", "Eisner", 4, 001),
        (003, "Catherine", "Charon", 10, 002),
        (004, "Shamir", "Nevrand", 10, 002),
        (005, "Seteth", "Cichol", 2, 001),
        (006, "Byleth", "Eisner", 5, 005),
        (007, "Manuela", "Casagranda", 5, 005),
        (008, "Manuela", "Casagranda", 6, 005),
        

