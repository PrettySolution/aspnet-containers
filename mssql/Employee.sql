create database EmployeeDB

create table EmployeeDB.dbo.Department(
    DepartmentId int identity(1,1),
    DepartmentName varchar(50)
)

create table EmployeeDB.dbo.Employee(
    EmployeeId int identity(1,1),
    EmployeeName varchar(50),
    Department varchar(50),
    DateOfJoining date,
    PhotoFileName varchar(50)
)

insert into EmployeeDB.dbo.Department values ('IT')

insert into EmployeeDB.dbo.Department values ('Support')

insert into EmployeeDB.dbo.Employee values ('Sam', 'IT', '2020-01-01', 'test.jpeg')

select * from EmployeeDB.dbo.Employee
