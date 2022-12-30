
INSERT INTO department (dept_name)
VALUES  ("Operations"),
        ("Marketing"),
        ("HR");


INSERT INTO roles (title, id_from_dept, salary)
VALUES  ("CEO", 1, 500000),
        ("Director of Operations", 1, 250000),
        ("Director of Marketing", 2, 250000),
        ("Brand Strategist",2, 150000);

INSERT INTO employee (first_name, last_name, id_from_roles, manager_id)
VALUES  ("Rhea", "Seiros", 1, 1),
        ("Jeralt", "Eisner", 2, 1),
        ("Catherine", "Charon", 3, 2),
        ("Shamir", "Nevrand", 3, 3);


        

