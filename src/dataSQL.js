export let DataSQL = [
  {
    cycle: 1,
    title: `Display the department names in the lower case but the initial must be in uppercase. `,
    code: `SELECT INITCAP (DNAME) "DNAME"
        FROM DEPT;`,
  },
  {
    cycle: 1,
    title: `Determine the ‘ename’, ‘job’, ‘sal’ rename the title as Job-sal the output must be
        Job-Sal as SMITH[CLERKRS.2000]`,
    code: `SELECT ENAME || ' [ ' || JOB || 'RS.' || SAL || '] ' AS JOB_SAL
        FROM EMPLOYEE;`,
  },
  {
    cycle: 1,
    title: `Count the number of times S occurs in department names`,
    code: ` SELECT DNAME, LENGTH (DNAME)-LENGTH (REPLACE (DNAME,'S')) as
        LENGTH_AFTER_REPLACING_S
         FROM DEPT
         GROUP BY DNAME;`,
  },
  {
    cycle: 1,
    title: `Write a query to display the department name which does not contains any employees`,
    code: `SELECT E.DEPTNO, DNAME
        FROM EMPLOYEE E, DEPT D
        WHERE E.DEPTNO (+) =D.DEPTNO AND EMPNO IS NULL`,
  },
  {
    cycle: 1,
    title: `Write a query to display all employee details where employee was joined in year date
        wise 1980 and 1990 and 2nd week of every month
       `,
    code: `SELECT ENAME, HIREDATE
        FROM EMPLOYEE
        WHERE (TO_CHAR (HIREDATE,'YYYY') BETWEEN 1980 AND 1990) AND
        (TO_CHAR (HIREDATE,'DD') BETWEEN 7 AND 14);`,
  },
  {
    cycle: 1,
    title: `Write an SQL statement to convert the current date to new date picture ex: MONDAY 10th
        2005 10:30.00 PM`,
    code: `SELECT TO_CHAR(SYSDATE,'DAY DDth YYYY HH:MI:SS pm') "DATE"
        FROM DUAL;
       `,
  },
  {
    cycle: 1,
    title: `Write a query to display all employee details who joined last week Wednesday of every month
        and experience should be greater than 20 months.`,
    code: `SELECT ENAME, HIREDATE
        FROM EMPLOYEE
        WHERE TO_CHAR ( HIREDATE, 'DD' ) BETWEEN 23 AND 31 AND
        ((SYSDATE-HIREDATE)/30) > 20;`,
  },
  {
    cycle: 1,
    title: `Write a query to calculate the length of time of any employee who has been with the company.
        `,
    code: `SELECT ENAME, HIREDATE, ROUND ((SYSDATE-HIREDATE)/365)
        "SERVICE_IN_YEARS" FROM EMPLOYEE;`,
  },
  {
    cycle: 1,
    title: "Write a query that will display all different job types.",
    code: `SELECT UNIQUE JOB
        FROM EMPLOYEE;
       `,
  },
  {
    cycle: 1,
    title: `Write a query that will display list of employees and their salary and the comments as
        follows.
       If the salary is more than 1500 then display “above target”
       If the salary is equal to 1500 then display “on the target”
       If the salary is less than 1500 then display “below the target”`,
    code: `SELECT ENAME, DECODE (SIGN (1500-SAL), 1 ,'BELOW THE TARGET',
        0, 'ON THE TARGET', ' ABOVE THE TARGET ' ) "TARGET"
        FROM EMPLOYEE; `,
  },
  {
    cycle: 1,
    title: `Display all employee names, employee number, department names & salary grades for all
        employees who are working in department 30.`,
    code: `SELECT ENAME, EMPNO, DNAME, GRADE
        FROM DEPT, EMPLOYEE E, SALGRADE
        WHERE E.DEPTNO=DEPT.DEPTNO AND E.DEPTNO=30 AND
        SAL BETWEEN LOSAL AND HISAL;`,
  },
  {
    cycle: 1,
    title: `Display only those jobs where the maximum salary is greater than or equal to $3000.`,
    code: `SELECT JOB, MAX(SAL)
        FROM EMPLOYEE
        GROUP BY JOB
        HAVING MAX(SAL)>=3000;
       `,
  },
  {
    cycle: 1,
    title: `Find all departments which have more than 3 employees`,
    code: `SELECT DEPTNO, COUNT(*)
        FROM EMPLOYEE
        GROUP BY DEPTNO
        HAVING COUNT(*)>=3;`,
  },
  {
    cycle: 1,
    title: `Display the time of day`,
    code: `SELECT TO_CHAR(SYSDATE,’HH:MI:SS’) FROM DUAL;`,
  },
  {
    cycle: 1.5,
    title: `Find all employees who earn a salary greater than the average salary of their departments`,
    code: `SELECT ENAME, SAL
        FROM EMPLOYEE E
        WHERE SAL > (SELECT AVG (SAL) FROM EMPLOYEE
        WHERE DEPTNO = E.DEPTNO );`,
  },
  {
    cycle: 1.5,
    title: `Write a query to sort names of employees in department 10 & 20 in alphabetical order`,
    code: `SELECT ENAME, DEPTNO
        FROM EMPLOYEE
        WHERE DEPTNO=10 OR DEPTNO=20 ORDER BY ENAME ASC;`,
  },
  {
    cycle: 1.5,
    title: `Write a query to display all job types`,
    code: `SELECT UNIQUE JOB
        FROM EMPLOYEE;
       `,
  },
  {
    cycle: 1.5,
    title: `Calculate the number of employees and average salary of each department.`,
    code: `SELECT DEPTNO, COUNT (EMPNO) AS NOOFEMPLOYEES, AVG (SAL)
        FROM EMPLOYEE
        GROUP BY DEPTNO;
       `,
  },
  {
    cycle: 1.5,
    title: `Write a query to find the name of the manager and number of sub-ordinates.`,
    code: ` SELECT S.ENAME, COUNT (*) "NOOFSUBORDINATES"
        FROM EMPLOYEE S, EMPLOYEE E
        WHERE E.MGR=S.EMPNO
        GROUP BY S.ENAME;`,
  },
  {
    cycle: 1.5,
    title: `Write a query to find out the manager having Maximum number of sub-ordinates.
        `,
    code: ` SELECT S.ENAME, COUNT (*) "NOOFSUBORDINATES"
        FROM EMPLOYEE S, EMPLOYEE E
        WHERE E.MGR=S.EMPNO
        GROUP BY S.ENAME
        HAVING COUNT (*) IN (SELECT MAX (COUNT (*))
                            FROM EMPLOYEE E, EMPLOYEE S
                            WHERE E.MGR=S.EMPNO
                            GROUP BY S.ENAME);
       `,
  },
  {
    cycle: 1.5,
    title: `Write a query to find out the top three earners.
        `,
    code: ` SELECT ENAME, SAL
        FROM EMPLOYEE E
        WHERE 3>= (SELECT COUNT (*) FROM EMPLOYEE F WHERE F.SAL<E.SAL);`,
  },
  {
    cycle: 1.5,
    title: `Write a query to find out the least three earners.`,
    code: `SELECT ENAME, SAL
        FROM EMPLOYEE E
        WHERE 3> (SELECT COUNT (*) FROM EMPLOYEE F WHERE F.SAL<E.SAL);`,
  },
  {
    cycle: 1.5,
    title: `Display the average, monthly salary bill for each job type with in department.`,
    code: `SELECT DEPTNO, JOB, AVG (SAL) "AVGSAL", SUM (SAL)"SUMSAL"
        FROM EMPLOYEE
        GROUP BY DEPTNO, JOB;`,
  },
  {
    cycle: 1.5,
    title: `Find all employees whose dept is not in dept table.`,
    code: `SELECT EMPNO, ENAME
        FROM EMPLOYEE
        WHERE DEPTNO NOT IN ( SELECT DEPTNO FROM DEPT );`,
  },
  {
    cycle: 1.5,
    title: `Write a query to find out the employees who have joined before their managers.`,
    code: `SELECT E.ENAME, E.HIREDATE, M.ENAME "MGRNAME", M.HIREDATE
        "MGRHIREDATE"
        FROM EMPLOYEE E, EMPLOYEE M
        WHERE E.MGR=M.EMPNO AND E.HIREDATE<M.HIREDATE;`,
  },
  {
    cycle: 1.5,
    title: `Write a query to find out the year, where most people join in the company displays the
        year and No. Of Employees.`,
    code: `SELECT TO_CHAR (HIREDATE,'YYYY') "YEAR", COUNT (*)"NOOFEMPL"
        FROM EMPLOYEE
        GROUP BY TO_CHAR (HIREDATE,'YYYY')
        HAVING COUNT (*) IN(SELECT MAX(COUNT(*))
        FROM EMPLOYEE
        GROUP BY TO_CHAR (HIREDATE,'YYYY'));`,
  },
  {
    cycle: 1.5,
    title: `List the department names of each employee.`,
    code: `SELECT EMPNO, ENAME, E.DEPTNO, DNAME
        FROM EMPLOYEE E, DEPT D
        WHERE E.DEPTNO=D.DEPTNO;`,
  },
  {
    cycle: 1.5,
    title: `Find all employees who earn lowest salary in each department.`,
    code: `SELECT ENAME, SAL
        FROM EMPLOYEE
        WHERE SAL IN (SELECT MIN (SAL)
        FROM EMPLOYEE
        GROUP BY DEPTNO);`,
  },
  {
    cycle: 1.5,
    title: `Display all employees who earn more than the lowest salary of department 30.`,
    code: `SELECT ENAME, SAL, JOB, DEPTNO
        FROM EMPLOYEE
        WHERE SAL> (SELECT MIN (SAL) FROM EMPLOYEE WHERE DEPTNO=30);`,
  },
  {
    cycle: 1.5,
    title: `Display all departments, which have the average salary more than average salary of
        department.`,
    code: `SELECT DEPTNO, AVG (SAL)
        FROM EMPLOYEE
        GROUP BY DEPTNO
        HAVING AVG(SAL)=(SELECT MAX(AVG(SAL))
        FROM EMPLOYEE
         GROUP BY DEPTNO);`,
  },
  {
    cycle: 1.5,
    title: `Write a query which will return the DAY of the week.(ie. MONDAY), for any date entered in
        theformat : DD.MM.YY.`,
    code: `SELECT TO_CHAR(TO_DATE('&ENTER_THE_DATE','DD:MM:YY'),'DAY')
        FROM DUAL;`,
  },
  {
    cycle: 1.5,
    title: `Find the job that was filled in the second half of 1981, and the same job that was filled during
        the same period in 1980.`,
    code: `SELECT JOB FROM EMPLOYEE
        WHERE HIREDATE BETWEEN ’01-JUL-1981’ AND ’31-DEC-1981’
        INTERSECT
        SELECT JOB FROM EMPLOYEE
        WHERE HIREDATE BETWEEN ’01-JUL-1980’ AND ’31-DEC-1980’;`,
  },
  {
    cycle: 1.5,
    title: `List all departments where there are no employees. (Using a join).`,
    code: `SELECT D.DNAME,D.DEPTNO
        FROM employee e, department d
       where e.deptno(+) = d.deptno and e.empno is null;`,
  },
  {
    cycle: 1.5,
    title: `Write a query to display the first three rows of employee table`,
    code: ` select * from employee where rownum<=3;`,
  },
  {
    cycle: 2,
    title: `Find the names of all instructors in the Computer Science department who have salary greater than 70,000`,
    code: `select name
        from instructor
        where dept name = ’Comp. Sci.’ and salary > 70000;`,
  },
  {
    cycle: 2,
    title: `2.Find the names of all departments whose building name includes the substring ‘Watson’`,
    code: `select dept name
        from department
        where building like ’%Watson%’;`,
  },
  {
    cycle: 2,
    title: `WAQ to list in alphabetic order all instructors in the Physics department`,
    code: `select name
        from instructor
        where dept name = ’Physics’
        order by name;`,
  },
  {
    cycle: 2,
    title: `Find all instructors whose salary is null.`,
    code: `select name
        from instructor
        where salary is null;`,
  },
  {
    cycle: 2,
    title: `Find the names of instructors with salary amounts between 90,000 and 1,00,000`,
    code: `select name
        from instructor
        where salary between 90000 and 100000;`,
  },
  {
    cycle: 2,
    title: `Find the average salary of all instructors.`,
    code: `select avg (salary)
        from instructor;`,
  },
  {
    cycle: 2,
    title: `Find the average salary in each department.`,
    code: `select dept name, avg (salary) as avg salary
        from instructor
        group by dept name;`,
  },
  {
    cycle: 2,
    title: `Find the average salary of instructors in the Computer Science department.`,
    code: `SELECT DEPT_NAME,AVG(SALARY)
        FROM INSTRUCTOR
        GROUP BY DEPT_NAME
        HAVING AVG(SALARY)=(SELECT AVG(SALARY)
        FROM INSTRUCTOR
        WHERE DEPT_NAME='COMP. SCI.')`,
  },
  {
    cycle: 2,
    title: `Dispaly only those departments where the average salary of the instructors is more than 42,000`,
    code: `select dept name, avg (salary) as avg salary
        from instructor
        group by dept name
        having avg (salary) > 42000;`,
  },
  {
    cycle: 2,
    title: `Find the total number of instructors who teach a course in the Spring 2010 semester`,
    code: `select semestet,year,count (distinct id)
        from teaches
        where semester = ’spring’ and year = 2010
        group by semester,year;`,
  },
  {
    cycle: 2,
    title: `Find the set of all courses taught either in Fall 2009 or in Spring 2010`,
    code: `(select course id
            from section
            where semester = ’Fall’ and year= 2009)
            union
            (select course id
            from section
            where semester = ’Spring’ and year= 2010);`,
  },
  {
    cycle: 2,
    title: `Find the set of all courses taught in the Fall 2009 as well as in Spring 2010`,
    code: `(select course id
            from section
            where semester = ’Fall’ and year= 2009)
            intersect
            (select course id
            from section
            where semester = ’Spring’ and year= 2010);`,
  },
  {
    cycle: 2,
    title: `Find all courses taught in the Fall 2009 semester but not in the Spring 2010 semester`,
    code: `(select course id
            from section
            where semester = ’Fall’ and year= 2009)
            minus
            (select course id
            from section
            where semester = ’Spring’ and year= 2010);`,
  },
  {
    cycle: 2,
    title: `Find all instructors earning the highest salary`,
    code: `select name,salary
        from instructor
        where salary=(select MAX(salary) from instructor);`,
  },
  {
    cycle: 2,
    title: `Find the titles of courses in the Comp. Sci. department that have 3 credits. `,
    code: `Select title
        from course
        where dept-name='Comp.sci.' and credits=3;`,
  },
  {
    cycle: 2,
    title: `Find the IDs of all students who were taught by an instructor named Einstein; make sure there are no duplicates in the result.`,
    code: `Select Distinct(ta.ID)
        from takes  ta, teaches  te, instructor i,student s
        where s.id=ta.id and ta.course-id=te.course-id and te.id=i.id and i.iname='Einstein';`,
  },
  {
    cycle: 2,
    title: `Find the enrollment of each section that was offered in Autumn 2009`,
    code: `select t.sec_id, t.course_id,count(t.id)
        from section s , takes t
        where s.sec_id=t.sec_id and s.course_id=t.course_id and s.semester=t.semester 
        and t.year=s.year and t.semester='FALL' and t.year=2009
        group by t.sec_id,t.course_id`,
  },
  {
    cycle: 2,
    title: `Find the sections that had the maximum enrollment in Autumn 2009`,
    code: `select t.sec_id, t.course_id,count(t.id)
        from section s , takes t
        where s.sec_id=t.sec_id and s.course_id=t.course_id and s.semester=t.semester 
        and t.year=s.year and t.semester='FALL' and t.year=2009
        group by t.sec_id,t.course_id
        having count(*)  =  (select t.sec_id, t.course_id,count(t.id)
                            from section s , takes t
                            where s.sec_id=t.sec_id and s.course_id=t.course_id and 
                            s.semester=t.semester and t.year=s.year and t.semester='FALL'
                            and t.year=2009
                            group by t.sec_id,t.course_id)`,
  },
  {
    cycle: 2.5,
    title: `WAQ to display the Increase in the salary of each instructor in the Comp. Sci. department by 10%`,
    code: `Select NAME,DEPT_NAME,SALARY+(SALARY*0.10) AS INCREASED_SALARY
        from instructor
        where DEPT_NAME='COMP.SCI.'`,
  },
  {
    cycle: 2.5,
    title: `Find the names of all students who have taken at least one Comp. Sci. course;`,
    code: `SELECT DISTINCT(S.NAME)
        FROM STUDENT S,COURSE C, TAKES T,DEPARTMENT1 D
        WHERE T.ID=S.ID AND T.COURSE_ID=C.COURSE_ID AND
        C.DEPT_NAME=D.DEPT_NAME AND D.DEPT_NAME='COMP.SCI.'`,
  },
  {
    cycle: 2.5,
    title: `For each department, find the maximum salary of instructors in that department.`,
    code: `SELECT DEPT_NAME,MAX(SALARY) 
        FROM INSTRUCTOR 
        GROUP BY DEPT_NAME;`,
  },
  {
    cycle: 2.5,
    title: `Retrieve the names  of all instructors, along with their department names and department building name`,
    code: `SELECT I.NAME,I.DEPT_NAME,D.BUILDING
        FROM INSTRUCTOR I,DEPARTMENT D
        WHERE I.DEPT_NAME=D.DEPT_NAME;`,
  },
  {
    cycle: 2.5,
    title: `For all instructors in the university who have taught some course, find their names and the course ID, course names of all courses they taught.`,
    code: `SELECT I.NAME, T.COURSE_ID, C.TITLE,T.SEC_ID
        FROM INSTRUCTOR I, TEACHES T,COURSE C
        WHERE I.ID= T.ID AND T.COURSE_ID=C.COURSE_ID`,
  },
  {
    cycle: 2.5,
    title: `Find the  names of all instructors whose salary is greater than at least one instructor in the Biology department.`,
    code: `SELECT DISTINCT I.NAME
        FROM INSTRUCTOR I, INSTRUCTOR B
        WHERE I.SALARY > B.SALARY AND B.DEPT_NAME = 'BIOLOGY';`,
  },
  {
    cycle: 2.5,
    title: `Display a list of all course sections offered by the Physics department in the Fall 2009 semester, with the building and room number of each section.`,
    code: `SELECT COURSE.COURSE_ID, SEC_ID, BUILDING, ROOM_NUMBER
        FROM COURSE, SECTION
        WHERE COURSE.COURSE_ID = SECTION.COURSE_ID
            AND COURSE.DEPT_NAME = 'PHYSICS' AND SECTION.SEMESTER = 'FALL'
            AND SECTION.YEAR = '2009'`,
  },
  {
    cycle: 2.5,
    title: `WAQ to display prerequisite course ID, names for each Course.`,
    code: `SELECT P.COURSE_ID,C.TITLE,P.PREREQ_ID,C1.TITLE AS PREREQ_COURSE_NAME
        FROM COURSE C,PREREQ P,COURSE C1
        WHERE P.COURSE_ID=C.COURSE_ID AND P.PREREQ_ID=C1.COURSE_ID`,
  },
  {
    cycle: 2.5,
    title: `WAQ to display courses offered by each department in descending order`,
    code: `SELECT D.DEPT_NAME,C.COURSE_ID,C.TITLE
        FROM DEPARTMENT1 D,COURSE C
        WHERE D.DEPT_NAME=C.DEPT_NAME
        ORDER BY D.DEPT_NAME DESC`,
  },
  {
    cycle: 2.5,
    title: `WAQ to display instructors details along with building details.`,
    code: `SELECT I.ID,I.NAME,I.DEPT_NAME,D.BUILDING
        FROM INSTRUCTOR I,DEPARTMENT1 D
        WHERE I.DEPT_NAME=D.DEPT_NAME;`,
  },
  {
    cycle: 2.5,
    title: `WAQ to display the course titles taught for each instructor.`,
    code: `SELECT I.ID,I.NAME,T.COURSE_ID,C.TITLE,T.SEC_ID
        FROM INSTRUCTOR I,TEACHES T,COURSE C
        WHERE T.COURSE_ID=C.COURSE_ID AND T.ID=I.ID`,
  },
  {
    cycle: 2.5,
    title: `WAQ to display the names of the students who have earned credits more than 100.`,
    code: `SELECT NAME
        FROM STUDENT
        WHERE TOT_CRED>100`,
  },
  {
    cycle: 2.5,
    title: `WAQ to display the names of the students attended in section 2 and earned more than 50 credits.`,
    code: `SELECT S.NAME,T.SEC_ID,S.TOT_CRED
        FROM STUDENT S , TAKES T
        WHERE S.ID=T.ID AND T.SEC_ID=2 AND S.TOT_CRED>50;`,
  },
  {
    cycle: 2.5,
    title: `WAQ to display the details of the courses completed by each student.`,
    code: `SELECT T.ID,S.NAME,T.COURSE_ID,C.TITLE,T.GRADE
        FROM STUDENT S,TAKES T,COURSE C
        WHERE S.ID=T.ID AND  T.COURSE_ID=C.COURSE_ID AND T.GRADE!='F' AND T.GRADE IS NOT NULL`,
  },
  {
    cycle: 2.5,
    title: `WAQ to display the names of the students along with course titles and grades obtained.`,
    code: `SELECT S.NAME,T.COURSE_ID,C.TITLE,T.GRADE
        FROM STUDENT S,TAKES T,COURSE C
        WHERE S.ID=T.ID AND T.COURSE_ID=C.COURSE_ID`,
  },
  {
    cycle: 2.5,
    title: `Create a view physics_fal_ 2009   that lists all course sections offered by the Physics department in the Fall 2009 semester with the building and room number of each section.`,
    code: `CREATE VIEW PHYSICS_FAL_2009 AS  SELECT COURSE.COURSE_ID, SEC_ID, BUILDING, 							
        	                                                ROOM_NUMBER
                                                    FROM COURSE, SECTION
                                                        WHERE COURSE.COURSE_ID = SECTION.COURSE_ID
                                                        AND COURSE.DEPT_NAME ='PHYSICS'
                                                        AND SECTION.SEMESTER ='FALL' 
                                                        AND SECTION.YEAR =2009`,
  },
  {
    cycle: 2.5,
    title: `Display the details of view physics_fal_ 2009.`,
    code: `SELECT * FROM PHYSICS_FAL_2009;`,
  },
  {
    cycle: 3,
    title: `. Create an table employee with (ENO, NAME,      BASIC,        HRA,         DA,         PF,         IT,      GROSS,        NET ) attributes  and insert values only for eno,ename,basic attributes for  3 to 4 records and  write a PL/SQL block to calculate the Gross salary & Net salary for an entered employee for the following conditions:
            	HRA is 15% of basic.
            	DA  is 62% of basic.
            	PF is 780/- if gross salary exceeds 8000, otherwise 600/-.
            	Professional tax is 2% of basic.
                 And then print the employee no, name, hra, da, pf, ptax, gross salary & net salary 	for that employee.
            `,
    code: ` SQL>create table empp(eno number,name varchar2(30),basic number,hra number,da number,pf number,it number,gross number,net number);
                SQL>insert into empp(eno,name,basic) values(1,'manu',5000)
                SQL>insert into empp(eno,name,basic) values(2,'ravi',6000)
                -----------------------open file asdf.sql----------------------------
    
                                    declare
                    teno empp.eno%type :=&employeenumber;
                    thra number;
                    tda number;
                    tename empp.name%type;
                    tpf number;
                    tit number;
                    tbasic empp.basic%type;
                    tgross number;
                    tnet number;
                    begin
                    select name,basic into tename,tbasic from empp where eno=teno;
                            thra:=tbasic*.15;
                            tda:=tbasic*.62;
                            tgross:=tbasic+thra+tda;
                    if tgross>8000 then
                            tpf:=780;
                    else
                            tpf:=600;
                    end if;
                            tit:=tgross*.02;
                            tnet:=tgross-tpf-tit;
                    update empp set hra=thra,da=tda,gross=tgross,pf=tpf,it=tit,net=tnet where eno=teno;
                    dbms_output.put_line('....EMPLOYEE DETAILS....');
                    dbms_output.put_line('Employee Name  :'||tename);
                    dbms_output.put_line('BASIC          :'||tbasic);
                    dbms_output.put_line('HRA            :'||thra);
                    dbms_output.put_line('DA             :'||tda);
                    dbms_output.put_line('Gross salary   :'||tgross);
                    dbms_output.put_line('PF             :'||tpf);
                    dbms_output.put_line('Income tax     :'||tit);
                    dbms_output.put_line('Net salary     :'||tnet);
                    exception
                    when No_data_found then
                    dbms_output.put_line('no such record');
                    end;
                    ----------------------------------------------------------
                    @+paste the file path in sql+
                    click enter and press /
    
                    Output :
                    SQL> /
                    Enter value for employeenumber: 2
                    SQL> select * From empp;
                    `,
  },
  {
    cycle: 3,
    title: `Write a PL/SQL program using cursors to load data from one table into another table based on condition.`,
    code: ` SQL>create table emp1(name varchar2(30),salary number);
                -----------------------open file asdf.sql----------------------------
                DECLARE
                sal_limit NUMBER (4);
                my_ename emp.ename%TYPE;
                my_sal emp.sal%TYPE;
                CURSOR my_cursor IS SELECT ename,sal
                            FROM emp
                            WHERE sal>sal_limit ;
                BEGIN
                sal_limit  := 3000 ;
                OPEN   my_cursor;
                LOOP
                FETCH my_cursor INTO my_ename , my_sal;
                EXIT  WHEN my_cursor%NOTFOUND ;
                INSERT INTO emp1 VALUES (my_ename , my_sal);
                END LOOP ;
                CLOSE my_cursor ;
                COMMIT ;
                END ;
                -----------------------------------------------------
                @+paste the file path in sql+
                    click enter and press /
    
                    Output :
                    SQL> /
                    SQL> select * From emp1;
        `,
  },
  {
    cycle: 3,
    title: ` Write a PL/SQL Program to count the number of Records using CURSORS.`,
    code: `
            -----------------------open file asdf.sql----------------------------
            Declare
            cursor c is select * from employee;
            Details employee%rowtype;
            Begin
            Open c;
            Loop
            Fetch c into details;
            Exit when c%notfound;
           End loop;
           dbms_output.put_line('The no of records in employee table are '||c%rowcount);
           End;
           -------------------------------------------------
           @+paste the file path in sql+
           click enter and press /
    
            SQL> /
            The no of records in employee table are 8
          
        `,
  },
  {
    cycle: 3,
    title: ` Write a PL/SQL programs to demonstrate Pre-defined exception`,
    code: `
            -----------------------open file asdf.sql----------------------------
            declare
            a number:=&a;
            b number:=&b;
            c number;
            begin
               c:=a/b;
            dbms_output.put_line('the result is'||c);
            exception
            when  zero_divide  then
            dbms_output.put_line('DIVISION BY ZERO IS NOT POSSIBLE');
            end;
            -------------------------------------------------------------------
            @+paste the file path in sql+
            click enter and press /
     
            Output :
            Enter value for a: 4
            Enter value for b: 2
            The result is   2
         
        `,
  },
  {
    cycle: 3,
    title: `User-defined exception( for this Create a table called sales with the following structure salesman no, name , target & actual. Accept a salesman no and find whether that particular salesperson received the commission or not depends upon the following condition. 
            	If the actual amount is greater than that of the target, commission is receivable otherwise raise the exception ‘commission is not receivable)
            `,
    code: `
            SQL>create table sales_man(sno number,name varchar2(20),target number,actual number);
            SQL>  insert into sales_man values(1,'manu',2000,3000);
            SQL> insert into sales_man values(2,'hari',1500,1000);
            
            -----------------------open file asdf.sql----------------------------
            declare
            tsno sales_man.sno%type;
            tr sales_man.target%type;
            ta sales_man.actual%type;
            error exception;
            begin
            tsno:=&salesman_number;
            select sno,target,actual into tsno,tr,ta 
            from sales_man 
            where sno=tsno;
            if ta<tr then
            raise error;
            else
            dbms_output.put_line('...Commission Received...');
            end if;
            exception
            when error then
            dbms_output.put_line('...Commission is not Received...');
            when no_data_found then
            dbms_output.put_line('Entered salesman not there in a table');
            end;
            -------------------------------------------------------------------
            @+paste the file path in sql+
            click enter and press /
            
            output:
            Enter value for salesman_number: 1
        `,
  },
  {
    cycle: 3,
    title: ` Write a  PL/SQL Program to demonstrate functions.`,
    code: `
            SQL> create table emp(empno number,ename varchar2(10),salary number,commission number);
            SQL> insert into emp values(&empno,'&ename',&salary,'&commission');
            SQL> insert into emp values(1,'manu',5000,'');
            SQL> insert into emp values(2,'hari',4000,'4000');
            SQL> select * From emp;
    
    
            Function code :
                create or replace function review(empid number) return number is
                incr number;
                net number;
                vempno number%type;
                vsal number;
                vcomm emp.commission%type;
                begin
                select empno,salary,nvl(commission,0) into vempno,vsal,vcomm from emp where empno=empid;
                net:=vsal+vcomm;
                if net<=5000 then
                incr:=net*0.20;
                elsif net>=8000 and vsal<=10000 then
                incr=net*0.50;
                else
                incr:=net*0.40;
                end if;
                return(incr);
                end review;
    
            PL/SQL block :
                declare
                incr_sal number(7,2);
                begin
                incr_sal:=review(1);
                dbms_output.put_line('the increment is'||incr_sal);
                end;
    
        `,
  },
  {
    cycle: 3,
    title: `Write a  PL/SQL Program to demonstrate stored procedures.`,
    code: `
            SQL> create table emp7(empno number,ename varchar2(5),basic number,netsal number);
                Table created.
            SQL> insert into emp7(empno,ename,basic) values(1,'Manu',9000);
            SQL> select * from emp7;
    
            Stored Procedure :
                create or replace procedure inc_sal(no in number,basic in number,msal out number,m out number)  as 
                teno number;
                s number;
                begin
                    select empno into teno from emp7 where empno=no;
                    if sql%found then
                            s:=basic+(basic*0.05);
                            msal:=s;
                            m:=1;
                    else
                            m:=0;
                    end if;
                end;
                /
                PL/SQL Block :
    
                declare
                teno number:=&empnumber;
                tbasic number;
                msal number;
                m number;
                begin
                select empno,basic into teno,tbasic from emp7 where empno=teno;
                inc_sal(teno,tbasic,msal,m);
                if m=1 then
                            update emp7 set netsal=msal where empno=teno;
                    end if;
                exception
                when No_data_found then
                dbms_output.put_line('no such record');
                end;
    
                / 
                Enter value for empnumber: 1
                SQL> select * from emp7;
                `,
  },
];
