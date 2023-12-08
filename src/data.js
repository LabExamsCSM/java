export const Data = [
  {
    title: `Design a simple HTML form.`,
    type: "html",
    code: `<!DOCTYPE html>

      <html>
      
      <head>
      
          <title>Simple Form</title>
      
      </head>
      
      <body>
      
          <form action="/submit" method="post">
      
              <label for="username">Username:</label>
      
              <input type="text" id="username" name="username" required>
      
              <br>
              <label for="password">Password:</label>
      
              <input type="password" id="password" name="password" required>
      
              <br>
      
              <input type="submit" value="Submit">
      
          </form>
      
      </body>
      
      </html>`,
  },
  {
    title: `Develop a Student registration form using HTML Form elements.`,
    type: "html",
    code: `<!DOCTYPE html>
      <html>
      
      <head>
          <title>Student Registration Form</title>
      </head>
      
      <body>
      
          <form action="/submit" method="post">
              <label for="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" required>
      
              <br>
      
              <label for="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" required>
      
              <br>
      
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required>
      
              <br>
      
              <label for="dob">Date of Birth:</label>
              <input type="date" id="dob" name="dob" required>
      
              <br>
      
              <label for="gender">Gender:</label>
              <select id="gender" name="gender" required>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
              </select>
      
              <br>
      
              <input type="submit" value="Submit">
          </form>
      
      </body>
      
      </html>`,
  },
  {
    title: `Demonstrate any six HTML form elements with suitable example.`,
    type: "html",
    code: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <title>HTML Form Elements</title>
      </head>
      
      <body>
      
          <form action="/submit" method="post">
              <label for="firstName">1. Text Input:</label>
              <input type="text" id="firstName" name="firstName" required>
      
              <br>
      
              <label for="email">2. Email Input:</label>
              <input type="email" id="email" name="email" required>
      
              <br>
      
              <label for="password">3. Password Input:</label>
              <input type="password" id="password" name="password" required>
      
              <br>
      
              <label for="birthdate">4. Date Input:</label>
              <input type="date" id="birthdate" name="birthdate" required>
      
              <br>
      
              <label for="country">6. Dropdown (Select) Menu:</label>
              <select id="country" name="country" required>
                  <option value="usa">United States</option>
                  <option value="canada">Canada</option>
                  <option value="uk">United Kingdom</option>
              </select>
      
              <br>
      
              <label>7. Checkbox:</label>
              <input type="checkbox" id="subscribe" name="subscribe" value="yes">
              <label for="subscribe">Subscribe to Newsletter</label>
      
              <br>
      
              <input type="submit" value="Submit">
          </form>
      
      </body>
      
      </html>`,
  },
  {
    title: `Write table and list elements in HTML5.`,
    type: "html",
    code: `TABLE:

      <!DOCTYPE html>
      <html ">
      <head>
          <title>HTML5 Table Example</title>
      </head>
      <body>
      
          <h2>Sample Table</h2>
      
          <table border=1>
              <thead>
                  <tr>
                      <th>Header 1</th>
                      <th>Header 2</th>
                      <th>Header 3</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Row 1, Cell 1</td>
                      <td>Row 1, Cell 2</td>
                      <td>Row 1, Cell 3</td>
                  </tr>
                  <tr>
                      <td>Row 2, Cell 1</td>
                      <td>Row 2, Cell 2</td>
                      <td>Row 2, Cell 3</td>
                  </tr>
                  <tr>
                      <td>Row 3, Cell 1</td>
                      <td>Row 3, Cell 2</td>
                      <td>Row 3, Cell 3</td>
                  </tr>
              </tbody>
          </table>
      
      </body>
      </html>
      
      LIST 
      
      <!DOCTYPE html>
      <html >
      <head>
          <title>HTML5 List Examples</title>
      </head>
      <body>
      
          <h2>Unordered List (ul)</h2>
          <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
          </ul>
      
          <h2>Ordered List (ol)</h2>
          <ol>
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
          </ol>
      
          <h2>Definition List </h2>
          <dl>
              <dt>Term 1</dt>
              <dd>Definition 1</dd>
              
              <dt>Term 2</dt>
              <dd>Definition 2</dd>
              
              <dt>Term 3</dt>
              <dd>Definition 3</dd>
          </dl>
      
      </body>
      </html>`,
  },
  {
    title: `Write inline, internal and external CSS with suitable examples`,
    type: "css",
    code: `INLINE:

      <!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Inline CSS Example</title>
      </head>
      
      <body>
      
          <h1 style="color: blue; text-align: center;">This is a Heading with Inline CSS</h1>
          <p style="font-size: 18px; color: green;">This is a paragraph with inline styling.</p>
      
      </body>
      
      </html>
      
      INTERNAL:
      
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
          <title>Internal CSS Example</title>
      </head>
      
      <body>
      
          <h1>This is a Heading with Internal CSS</h1>
          <p>This is a paragraph with internal styling.</p>
      
          <style>
              h1 {
                  color: blue;
                  text-align: center;
              }
      
              p {
                  font-size: 18px;
                  color: green;
              }
          </style>
      
      </body>
      
      </html>
      
      
      EXTERNAL :
      
      <!DOCTYPE html>
      <html>
      
      <head>
          <title>External CSS Example</title>
          <link rel="stylesheet" href="styles.css">
      </head>
      
      <body>
      
          <h1>This is a Heading with External CSS</h1>
          <p>This is a paragraph with external styling.</p>
      
      </body>
      
      </html>
      
      
      
      /* styles.css */
      
      h1 {
      color: blue;
      text-align: center;
      }
      
      p {
      font-size: 18px;
      color: green;
      }`,
  },
  {
    title: `Write different types of CSS selectors with examples.`,
    type: "css",
    code: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <title>CSS Selectors Example</title>
      
          <style>
              /* Universal Selector */
              * {
                  margin: 0;
                  padding: 0;
              }
      
              /* Type Selector (Element Selector) */
              p {
                  color: blue;
              }
      
              /* Class Selector */
              .highlight {
                  background-color: yellow;
              }
      
              /* ID Selector */
              #header {
                  font-size: 24px;
              }
      
              /* Descendant Selector */
              ul li {
                  list-style-type: square;
              }
      
              /* Child Selector */
              nav>.nav-item {
                  font-weight: bold;
              }
      
              /* Attribute Selector */
              a[href^="https://"] {
                  color: green;
              }
      
              /* Pseudo-class Selector */
              p:first-child {
                  font-weight: bold;
              }
          </style>
      
      </head>
      
      <body>
      
          <div id="header">Header</div>
      
          <ul>
              <li class="nav-item">Item 1</li>
              <li class="nav-item">Item 2</li>
              <li class="nav-item">Item 3</li>
          </ul>
      
          <p>This is a paragraph with a <span class="highlight">highlighted</span> word.</p>
      
          <a href="https://example.com">Visit Example</a>
      
      </body>
      
      </html>`,
  },
  {
    title: `Demonstrate CSS boarder and background properties with examples`,
    type: "css",
    code: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
      
          <title>CSS Border and Background Example</title>
      
          <style>
              /* Border and Background for Header */
              header {
                  background-color: #333;
                  color: white;
                  text-align: center;
                  padding: 10px;
                  border-bottom: 2px solid #fff;
              }
      
              /* Border and Background for Main Content */
              main {
                  padding: 20px;
                  border: 1px solid #ddd;
                  background-color: #f8f8f8;
              }
      
              /* Border and Background for Button */
              button {
                  padding: 10px;
                  border: 2px solid #4CAF50;
                  background-color: #4CAF50;
                  color: white;
                  cursor: pointer;
                  border-radius: 5px;
              }
          </style>
      </head>
      
      <body>
      
          <header>
              <h1>CSS Border and Background Example</h1>
          </header>
      
          <main>
              <p>This is the main content with a background and border.</p>
              <button>Click me</button>
          </main>
      
      </body>
      
      </html>`,
  },
  {
    title: `Demonstrate background and text properties of CSS.`,
    type: "css",
    code: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
      
          <title>CSS Background and Text Properties Example</title>
      
          <style>
              /* Background and Text for Body */
              body {
                  background-color: #f4f4f4;
                  color: #333;
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  line-height: 1.6;
              }
      
              /* Background and Text for Header */
              header {
                  background-color: #333;
                  color: white;
                  text-align: center;
                  padding: 20px;
              }
      
              /* Background and Text for Main Content */
              main {
                  padding: 20px;
                  background-color: #fff;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
      
              /* Background and Text for Paragraph */
              p {
                  background-color: #e0f7fa;
                  padding: 10px;
                  border: 1px solid #4CAF50;
              }
          </style>
      </head>
      
      <body>
      
          <header>
              <h1>CSS Background and Text Properties Example</h1>
          </header>
      
          <main>
              <p>This is the main content with a white background, box shadow, and green-bordered paragraphs.</p>
              <p>Another paragraph with a different background color and border.</p>
          </main>
      
      </body>
      
      </html>`,
  },
  {
    title: `Write a JavaScript to find the sum of n numbers.`,
    type: "js",
    code: `<!DOCTYPE html>
      <html>
      
      <head>
          <title>Sum of n Numbers</title>
          <script>
              function calculateSum() {
                  // Prompt the user for the value of n
                  var n = parseInt(prompt("Enter the number of values (n):"));
      
                  // Validate if n is a positive integer
                  if (isNaN(n) || n <= 0) {
                      alert("Please enter a valid positive integer for n.");
                      return;
                  }
      
                  var sum = 0;
      
                  // Prompt the user to enter n numbers and calculate the sum
                  for (var i = 1; i <= n; i++) {
                      var number = parseFloat(prompt("Enter number " + i + ":"));
      
                      // Validate if the entered value is a number
                      if (isNaN(number)) {
                          alert("Please enter valid numbers.");
                          return;
                      }
      
                      sum += number;
                  }
      
                  // Display the sum
                  alert("The sum of the entered numbers is: " + sum);
              }
          </script>
      </head>
      
      <body>
      
          <h2>Sum of n Numbers</h2>
      
          <button onclick="calculateSum()">Calculate Sum</button>
      
      </body>
      
      </html>`,
  },
  {
    title: `Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.`,
    type: "js",
    code: `<!DOCTYPE html>
      <html>
      
      <head>
          <title>Count Occurrences of Letter</title>
          <script>
              function countOccurrences(str, letter) {
                  // Convert both the string and letter to lowercase for case-insensitive comparison
                  str = str.toLowerCase();
                  letter = letter.toLowerCase();
      
                  var count = 0;
      
                  // Loop through each character in the string
                  for (var i = 0; i < str.length; i++) {
                      // Check if the current character is equal to the specified letter
                      if (str[i] === letter) {
                          count++;
                      }
                  }
      
                  // Display the result
                  alert("The letter '" + letter + "' occurs " + count + " times in the string.");
              }
          </script>
      </head>
      
      <body>
      
          <h2>Count Occurrences of Letter</h2>
      
          <!-- Example usage: -->
          <script>
              // Call the function with a string and a letter
              countOccurrences("Hello, Woorld!", "o");
          </script>
      
      </body>
      
      </html>`,
  },
  {
    title: `Write a recursive function with suitable example`,
    type: "js",
    code: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <title>Recursive Function Example</title>
          <script>
              function factorial(n) {
                  // Base case: factorial of 0 or 1 is 1
                  if (n === 0 || n === 1) {
                      return 1;
                  } else {
                      // Recursive case: n! = n * (n-1)!
                      return n * factorial(n - 1);
                  }
              }
      
              // Example usage:
              document.addEventListener("DOMContentLoaded", function () {
                  const number = 4;
                  const result = factorial(number);
                  alert(\`The factorial of \${number} is: \${result}\`);
              });
          </script>
      </head>
      
      <body>
      
          <h2>Recursive Function Example</h2>
      
      </body>
      
      </html>`,
  },
  {
    title: `Write a java script program to display squares and cubes of 1 to 10 numbers in table format`,
    type: "js",
    code: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <title>Squares and Cubes Table</title>
          <style>
              table {
                  border-collapse: collapse;
                  width: 50%;
                  margin: 20px auto;
              }
      
              th,
              td {
                  border: 1px solid #ddd;
                  padding: 10px;
                  text-align: center;
              }
      
              th {
                  background-color: #f2f2f2;
              }
          </style>
      </head>
      
      <body>
      
          <h2>Squares and Cubes Table</h2>
      
          <table>
              <thead>
                  <tr>
                      <th>Number</th>
                      <th>Square</th>
                      <th>Cube</th>
                  </tr>
              </thead>
              <tbody id="table-body"></tbody>
          </table>
      
          <script>
              document.addEventListener("DOMContentLoaded", function () {
                  // Get the table body element
                  const tableBody = document.getElementById("table-body");
      
                  // Generate rows for numbers 1 to 10 and their squares and cubes
                  for (let i = 1; i <= 10; i++) {
                      const square = i ** 2;
                      const cube = i ** 3;
      
                      // Create a new row
                      const row = document.createElement("tr");
      
                      // Add cells for number, square, and cube
                      row.innerHTML = \`
                          <td>\${i}</td>
                          <td>\${square}</td>
                          <td>\${cube}</td>
                      \`;
      
                      // Append the row to the table body
                      tableBody.appendChild(row);
                  }
              });
          </script>
      
      </body>
      
      </html>`,
  },
  {
    title: `Write a java script function to display the factorial of a given number.`,
    type: "js",
    code: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <title>Factorial Calculator</title>
          <style>
              body {
                  text-align: center;
                  margin: 50px;
              }
          </style>
      </head>
      <body>
      
          <h2>Factorial Calculator</h2>
      
          <label for="number">Enter a number:</label>
          <input type="number" id="number">
          <button onclick="calculateFactorial()">Calculate Factorial</button>
      
          <p id="result"></p>
      
          <script>
              function calculateFactorial() {
                  // Get the user input
                  const userInput = document.getElementById("number").value;
      
                  // Convert the input to a number
                  const number = parseInt(userInput);
      
                  // Check if the input is a valid positive integer
                  if (isNaN(number) || number < 0) {
                      alert("Please enter a valid positive integer.");
                      return;
                  }
      
                  // Call the factorial function
                  const result = factorial(number);
      
                  // Display the result
                  document.getElementById("result").innerText = \`The factorial of \${number} is: \${result}\`;
              }
      
              function factorial(n) {
                  // Base case: factorial of 0 or 1 is 1
                  if (n === 0 || n === 1) {
                      return 1;
                  } else {
                      // Recursive case: n! = n * (n-1)!
                      return n * factorial(n - 1);
                  }
              }
          </script>
      
      </body>
      </html>
      `,
  },
  {
    title: `Demonstrate different types of mouse events with example.`,
    type: "js",
    code: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <title>Mouse Events Example</title>
          <style>
              div {
                  width: 200px;
                  height: 200px;
                  background-color: lightblue;
                  margin: 20px;
                  padding: 10px;
                  text-align: center;
              }
          </style>
      </head>
      
      <body>
      
          <h2>Mouse Events Example</h2>
      
          <div id="mouseEventDemo" onmouseover="handleMouseOver()" onmouseout="handleMouseOut()" onclick="handleClick()">Hover
              over me</div>
      
          <script>
              function handleMouseOver() {
                  document.getElementById("mouseEventDemo").innerHTML = "Mouse Over!";
                  document.getElementById("mouseEventDemo").style.backgroundColor = "lightgreen";
              }
      
              function handleMouseOut() {
                  document.getElementById("mouseEventDemo").innerHTML = "Hover over me";
                  document.getElementById("mouseEventDemo").style.backgroundColor = "lightblue";
              }
      
              function handleClick() {
                  alert("Mouse Clicked!");
              }
          </script>
      
      </body>
      
      </html>`,
  },
  {
    title: `Demonstrate event bubbling with example`,
    type: "js",
    code: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
      
          <title>Event Bubbling Example</title>
          <style>
              div {
                  padding: 20px;
                  margin: 10px;
                  border: 1px solid #333;
              }
          </style>
      </head>
      
      <body>
      
          <h2>Event Bubbling Example</h2>
      
          <div id="outer" onclick="handleEvent('outer')">
              Outer
              <div id="middle" onclick="handleEvent('middle')">
                  Middle
                  <div id="inner" onclick="handleEvent('inner')">
                      Inner
                  </div>
              </div>
          </div>
      
          <script>
              function handleEvent(element) {
                  alert(\`Event bubbled from \${element} element.\`);
              }
          </script>
      
      </body>
      
      </html>`,
  },
  {
    title: `Write a function to sort array elements`,
    type: "js",
    code: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Array Sorting Example</title>
      </head>
      
      <body>
      
          <h2>Array Sorting Example</h2>
          <p>unsortedArray: [5, 2, 8, 1, 7]</p>
          <p id="sortedArrayTag"></p>
          <script>
              function sortArray(arr) {
                  // Use the Array.sort() method to sort the array
                  arr.sort(function (a, b) {
                      return a - b; // Compare function for ascending order
                      // For descending order, use: return b - a;
                  });
      
                  return arr; // Return the sorted array
              }
      
              // Example usage:
              const unsortedArray = [5, 2, 8, 1, 7];
              const sortedArray = sortArray(unsortedArray);
      
              console.log("Original Array:", unsortedArray);
              console.log("Sorted Array:", sortedArray);
              document.getElementById('sortedArrayTag').innerHTML = "Sorted array: [" + sortedArray + "]"
          </script>
      
      </body>
      
      </html>`,
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
