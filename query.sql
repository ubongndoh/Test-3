SELECT * FROM Users;

SELECT * FROM Users WHERE Department = 'Accounting';

SELECT * FROM Users WHERE Status = 'Pending';   

SELECT * FROM Users WHERE ID BETWEEN 1 AND 5;  

SELECT * FROM Users WHERE Age BETWEEN 19 AND 25;

SELECT * FROM Users WHERE created_dt = '02-01-2020';

SELECT * FROM Users WHERE Created_dt >= '2020-01-04' AND Created_dt <= '2020-01-06';

UPDATE Users SET Status = 'Activated' WHERE Name IN ('Tim', 'Tolu', 'Ade');

UPDATE Users SET Name = 'Timothy' WHERE ID = 2

SELECT COUNT(id), department FROM Users GROUP BY department;
