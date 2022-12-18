
INSERT INTO department (dept_name)
VALUES  ("Operations"),
        ("Marketing"),
        ("HR");


INSERT INTO roles (title, salary, department_id)
VALUES  ("CEO", "500000", 1),
        ("Director of Operations", "250000", 1),
        ("Director of Marketing", "250000", 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (001, "Rhea", "Seiros", 1, null),
        (002, "Jeralt", "Eisner", 2, 001),
        (003, "Catherine", "Charon", 3, 001);

        

