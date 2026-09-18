CSE 340: Web Backend Development

Course Home
Browse the course content below:

Week 01: Server-side Fundamentals

Week 01: Server-side Fundamentals
Getting Started
W01 Setup: Tools

W01 Setup: Tools
Overview
In this activity, you will set up the necessary tools and environment for the CSE 340 course. This includes installing software, configuring settings, and ensuring that everything is working correctly. By the end of this activity, you should have a fully functional development environment ready for the course assignments and projects.

Instructions
Follow these steps to complete the setup activity:

Install VS Code
Visual Studio Code (VS Code) is the application you will use to write your project code during this course. If you have already installed it in a previous course you may move to the next step.

Download and install VS Code: VS Code Download Page
Enable AI assisted coding
In this course, you are encouraged to use AI to assist you in writing code. Just like in industry, you should understand every line of code that you commit to your GitHub repository. For this reason, you are encouraged to use the line-by-line autocomplete rather than having an AI chat generate whole files at a time.

Enable inline code suggestions:

Open VS Code
Click on the gear icon in the lower left corner to open the Settings menu.
Select "Settings" from the menu.
In the search bar at the top of the Settings tab, type "Inline suggest" and press Enter.
Look for the setting named "Editor > Inline Suggest: Enabled".
Check the box next to this setting to enable inline code suggestions.
Close the Settings tab. Inline code suggestions should now be enabled in your VS Code editor.
Create your Course GitHub Repository
Git is a version control system that allows you to track changes in your code and collaborate with others. GitHub is the web-based Git platform that you will use in this course.

If you have not already installed it in a previous course, download and install Git: Git Download Page
In a web browser, navigate to GitHub.com and sign in to your account (you should create an account if you do not already have one).
Create your course repository:
Click the "+" icon in the upper right corner and select "New repository".
Choose a name for your repository (for example, cse340-course-repo).
Make sure your repository is public so your teacher, grader, and team members can see it.
Add a README file.
For a .gitignore file, select Node.
You may choose a license if desired, or simply leave it as No License.
Click Create repository.
Clone your repository to your local machine:
Open VS Code.
If it does not open to the welcome screen, select File > New Window.
On the VS Code Welcome Screen, select Clone Git Repository...
Enter the URL of your GitHub repository and select a local folder to clone it to.
If prompted, enter your GitHub credentials.
Click Select as Repository Destination and follow any additional prompts to clone the repository or open it.
Install Node.js and NPM
Node.js is a JavaScript runtime that allows you to run JavaScript code outside of a web browser. NPM (Node Package Manager) is a package manager for Node.js that allows you to install and manage libraries and tools for your projects.

Download and install Node.js (which includes NPM): Node.js Download Page
Verify the installation:
Open a terminal or command prompt.
Type node -v and press Enter. You should see the version number of Node.js.
Type npm -v and press Enter. You should see the version number of NPM.
If prompted on the terminal, run the command to update to the latest version of these tools.
Install PG Admin
PG Admin is the application you will use to manager your PostgreSQL databases during this course and run queries.

Download and install PG Admin: PG Admin Download Page
Verify that PG Admin is working by opening the application on your computer.
Verify your installation
Make sure that you have completed every step of these instructions. If you ran into trouble please post a message to Microsoft Teams or contact your instructor in Canvas.

Submission
When you have completed the instructions listed above:

Return to Canvas and submit the associated quiz.


W01 Setup: Team Sign-up

W01 Setup: Team Sign-up
Overview
Learning to work with a team is critical in Software Development. It is one of the most common traits that employers say they look for when they are hiring.

In addition, a fundamental principle of the BYU-Idaho Learning Model is to Love, Serve, and Teach One Another. As you teach and learn from one another, you will learn the material more deeply yourself, and you will develop as a Skilled Collaborator.

For these reasons, all the courses in the Software Development program contain a significant amount of teach one another opportunities. These are carefully designed so that you can teach and learn from one another, but still ensure that you are responsible for your own learning and that you are assessed on your individual mastery of the course outcomes.

Past students often say that coordinating group gatherings was one of the more difficult parts of the course, but they also consistently say that these gatherings were one of the most important parts of the course as well.

Small Group Gatherings
This course requires synchronous weekly gatherings of small groups. These meetings are designed to take approximately one hour. During the meetings, you will follow the steps of a team activity to help each other learn and apply the principle of the week.

You will gather virtually using video sharing software (Microsoft Teams) and are encouraged to share your video as much as possible so that you can get to know each other. Please use Microsoft Teams as the video sharing software for a consistent experience for all team members and so that your teacher can also monitor attendance or join meetings on occasion.

During the first week of the course, you will sign up for a group by choosing your gathering time. Then, you will begin meeting with your group for the first time during Week 02.

Instructions
Complete the following steps to sign up for a group:

Sign into Microsoft Teams
Install and sign into Microsoft Teams by following these instructions: Introduction to Microsoft Teams.
A Microsoft Teams organization has been set up for this course, and you have been added as a course-wide member. To access it, you need to install Microsoft Teams and sign in with your university account.
Sign into Microsoft Teams using your university account.
Find the Microsoft Teams organization that matches this course name ("CSE 340").
Verify that you can see the general channel.
Join a Group
Sign into Canvas.
Navigate to this course and select the People tab.
Sign up for a group based on your preferred meeting time.
The times are shown in UTC-0 (Greenwich Mean Time), and you will need to account for your timezone.
If your desired time is full or you would like to propose another time, you may contact your instructor.
Find and join the channel for your group in Microsoft Teams.
The group channel that matches your Canvas group will be shown among the hidden channels at the bottom of the list.
Find the appropriate channel and select Show for that channel.
You will use this channel for all your group communication for the course.
Introduce yourself to the other people in your group by posting a message in your group channel.
Share with your group members where you are from and something you like to do.
Feel free to respond to the others in your group as they post their introduction messages.
Submission
When you have completed the instructions listed above:

Return to Canvas and submit the associated quiz.





CSE 340: AI Policy
Middle of Week
W01 Learning Activities
JavaScript

W01 Learning Activity: JavaScript
Overview
In this activity, you will learn about key JavaScript concepts and syntax to ensure you have a solid foundation for the upcoming server-side development topics.

Make sure to go through this material in detail, because some of it may be new for you.

Preparation Material
The Evolution of JavaScript
Where It All Began
In 1995, Netscape Communications, a leading company in the early days of the internet, set out to make websites more interactive. To achieve this, they assigned Brendan Eich, a skilled programmer, the task of developing a new scripting language for their browser. Working under tight constraints, Eich created the foundation of what we now know as JavaScript in just 10 days. Originally named Mocha, the language was later renamed LiveScript. However, with Java being the most popular programming language at the time, Netscape's marketing team decided to rebrand it as JavaScript to capitalize on Java's widespread recognition. Despite the name, JavaScript and Java are distinct languages with different purposes and functionalities.

What is ECMAScript Modules (ESM)?
By the late 1990s, JavaScript was gaining popularity, but there was a problem: each browser implemented JavaScript slightly differently, which caused chaos for developers. To solve this, JavaScript was standardized under the name ECMAScript (ES), named after the organization ECMA International, a European body that creates technical standards. Every browser (e.g., Chrome, Firefox) implements these standards to ensure that JavaScript works consistently across the web. We refer to these standards as ECMAScript versions, such as ES6 (2015), ES7 (2016), and so on. Today, we generalize these standards under the term ECMAScript Modules (ESM).

Key Technical Changes in JavaScript's Evolution
Variable Declarations (ES6 - 2015)
Originally, JavaScript only had var to declare variables. This worked, but it had serious problems that caused bugs and confusion in larger programs.

The first problem with var is hoisting. You can reference a variable before you declare it, and instead of getting an error, JavaScript returns undefined:


    console.log(myVariable); // undefined (should be an error!)
    var myVariable = "Hello World";
The second and bigger problem is scope. Scope determines where in your code a variable can be accessed. Variables declared with var are function-scoped, meaning they're accessible anywhere within the entire function, even outside blocks like if statements:


function example() {
    if (true) {
        var leaksOut = "I escape the block";
    }
    console.log(leaksOut); // "I escape the block" - accessible here!
}
This scope behavior often caused unexpected bugs because variables would be accessible in places where you didn't intend them to be. ES6 (2015) introduced let and const to fix these problems by providing block scope instead of function scope.

Modern JavaScript uses let and const:


let y = 20;   // Block-scoped, can be changed
const z = 30; // Block-scoped, cannot be changed
With block scope, variables stay inside their blocks (the curly braces where they're declared):


function example() {
    if (true) {
        let staysInside = "I'm contained";
        const alsoStaysInside = "Me too";
    }
    console.log(staysInside); // ReferenceError - not accessible here
}
Use const when the value won't change, and let when it will:


const pi = 3.14159;  // This means `pi` never changes
let counter = 0;     // This allows `counter` to be updated
counter = 1;         // `counter` updated to 1
pi = 3.14;           // TypeError: Assignment to constant variable `pi`
Arrow Functions and this Behavior (ES6 - 2015)
Originally, JavaScript only had traditional function declarations and expressions. These worked fine for basic tasks, but they had a confusing problem with the this keyword that caused many bugs.

Here's how functions used to be written:


// Traditional function declaration
function greet(name) {
    return "Hello, " + name;
}

// Traditional function expression
const greet = function(name) {
    return "Hello, " + name;
};
The problem with traditional functions is that this changes depending on how the function is called, not where it's defined. This often caused unexpected behavior:


const person = {
    name: "Alice",
    greet: function() {
        console.log("Hello, I'm " + this.name);
    },
    delayedGreet: function() {
        setTimeout(function() {
            console.log("Hello, I'm " + this.name); // this.name is undefined!
        }, 1000);
    }
};

person.greet();        // "Hello, I'm Alice" ✓
person.delayedGreet(); // "Hello, I'm undefined" ✗
The callback function inside setTimeout loses the original this value, causing bugs. ES6 introduced arrow functions to solve this problem by inheriting this from their surrounding context:


const person = {
    name: "Alice",
    greet: function() {
        console.log("Hello, I'm " + this.name);
    },
    delayedGreet: function() {
        setTimeout(() => {
            console.log("Hello, I'm " + this.name); // this.name works correctly!
        }, 1000);
    }
};

person.greet();        // "Hello, I'm Alice" ✓
person.delayedGreet(); // "Hello, I'm Alice" ✓
Arrow functions also provide cleaner syntax for simple functions:


// Traditional function
const greet = function(name) {
    return "Hello, " + name;
};

// Arrow function - shorter and cleaner
const greet = (name) => "Hello, " + name;
String Template Literals (ES6 - 2015)
Originally, JavaScript built strings by combining pieces together using string concatenation. Concatenation means joining multiple strings into one by using the plus (+) operator.

Here's how strings used to be built:


const name = "JavaScript";
const version = 6;
const message = "Hello, " + name + "! ES" + version + " is great.";
This concatenation approach became messy and error-prone with longer strings. It was easy to forget spaces, mix up quotes, or make syntax errors:


const user = "Alice";
const score = 95;
const time = "2:30";

// This gets hard to read and maintain:
const result = "Congratulations " + user + "! You scored " + score + "% in " + time + " minutes.";
ES6 introduced template literals to make string building cleaner and easier. Instead of regular quotes, you use backticks (`) and insert variables directly with ${}:


const user = "Alice";
const score = 95;
const time = "2:30";

// Much cleaner and easier to read:
const result = `Congratulations ${user}! You scored ${score}% in ${time} minutes.`;
Template literals also support multi-line strings without needing special characters:


// Old way required \n for new lines
const oldMessage = "Line 1\nLine 2\nLine 3";

// Template literals preserve line breaks naturally
const newMessage = `Line 1
Line 2
Line 3`;
Handling Asynchronous Code
JavaScript evolved from using callbacks to Promises and eventually Async/Await for handling asynchronous tasks like fetching data from a server.

Callbacks (Pre-ES6)
Using callbacks often led to deeply nested code, commonly referred to as callback hell, making it difficult to read and maintain.


fetchData((data) => {
    processData(data, (result) => {
        displayResult(result);
    });
});
Promises (ES6 - 2015)
Promises were introduced to address callback hell by providing a cleaner, more readable way to handle asynchronous operations.


fetchData()
    .then(processData)
    .then(displayResult)
    .catch(handleError);
Async/Await (ES8 - 2017)
Async/Await further simplified asynchronous code, making it look and behave more like synchronous code, thus improving readability and maintainability.


async function fetchAndProcess() {
    try {
        const data = await fetchData();
        const result = await processData(data);
        displayResult(result);
    } catch (error) {
        handleError(error);
    }
}
Modules for Cleaner Code Organization (ES6 - 2015)
Modules allow developers to organize code into separate files, making it easier to manage, reuse, and scale projects. Instead of writing all functionality in one large file, developers can split code into smaller, self-contained pieces, each handling a specific task.

With modules, a file can export functions, objects, or variables using the export keyword. Other parts of the application can then import only what they need using the import keyword. This modular approach improves readability, maintainability, and reusability, making it easier for teams to collaborate and for projects to grow without becoming messy or difficult to manage.


// math.js - Module exporting multiple functions
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => b !== 0 ? a / b : 'Cannot divide by zero';

// app.js - Importing specific functions from math.js
import { add, subtract, multiply, divide } from './math.js';

console.log("Addition:", add(2, 3));            // Output: 5
console.log("Subtraction:", subtract(5, 2));    // Output: 3
console.log("Multiplication:", multiply(3, 4)); // Output: 12
console.log("Division:", divide(10, 2));        // Output: 5
console.log("Division by zero:", divide(5, 0)); // Output: Cannot divide by zero
JavaScript Today and Tomorrow
Today, JavaScript is everywhere, powering a vast array of applications from frontend development to backend systems, mobile applications, and even AI tools. The language has evolved significantly since its inception, and it now follows a yearly update cycle, introducing incremental improvements rather than dramatic changes. This approach ensures that developers can adopt new features gradually without facing major disruptions.

In recent years, the naming convention has shifted away from referencing specific ECMAScript versions like ES6. Instead, updates are simply referred to by the year they are released, such as ECMAScript 2023 (ES14). This change reflects the continuous and steady evolution of the language.

Looking ahead, there are ongoing discussions about splitting JavaScript into two parts: JS0 and JSSugar. JS0 would focus on the core language features, while JSSugar would include syntactic sugar and higher-level abstractions. This proposal aims to reduce the burden on JavaScript engines and improve performance. However, it has sparked debate among developers regarding potential complexity and increased tooling dependency.

(Not required) Selected Works Cited
GeeksforGeeks: History of JavaScript
Provides an overview of JavaScript's origin and major milestones, detailing how it was created by Brendan Eich at Netscape and its evolution over the years.

W3Schools: JavaScript History
Offers a concise timeline of JavaScript's development, highlighting key events and versions that have shaped the language.

GeeksforGeeks: Callback and Callback Hell
Explains asynchronous programming in JavaScript, the challenges of callback hell, and the evolution to modern practices like Promises and Async/Await.

Caolan's Notes: JS0 and JSSugar
Discusses the proposed split of JavaScript into two layers: JS0 for core language features and JSSugar for syntactic sugar and higher-level abstractions, and the implications of this proposal.

Activity Instructions
Practice your knowledge of JavaScript by answering the following questions.

What are the differences between var, let, and const in JavaScript?
Answer (click to expand)
var is function-scoped and can be redeclared and updated. It is hoisted, meaning it can be used before its declaration, but will be undefined until assigned. let is block-scoped, can be updated but not redeclared within the same scope, and is not hoisted in the same way as var. const is also block-scoped, cannot be updated or redeclared, and must be initialized at the time of declaration.

What is the syntax for an arrow function that accepts two parameters, adds them together and returns the result?
Answer (click to expand)
The syntax for an arrow function that accepts two parameters and returns their sum is:


const add = (a, b) => a + b;
How do you export a function from a module using modern, ESM syntax?
Answer (click to expand)
To export a function from a module using ESM syntax, you can use the export keyword before the function declaration. For example:


const myFunction = () => {
  // function body
};

export { myFunction };
How do you import that function into another module using modern, ESM syntax?
Answer (click to expand)
To import a function from another module using ESM syntax, you can use the import keyword followed by the function name in curly braces and the path to the module. For example:


import { myFunction } from './path/to/module.js';
What are template literals, and how do they differ from regular strings in JavaScript?
Answer (click to expand)
Template literals are string literals that allow embedded expressions and multi-line strings. They are enclosed by backticks ` instead of single or double quotes. Template literals can include placeholders for variables or expressions using the ${} syntax. This differs from regular strings, which require concatenation using the plus (+) operator and do not support multi-line strings without special characters.

Explain the difference between Promises and Async/Await in handling asynchronous code in JavaScript.
Answer (click to expand)
Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They use .then() and .catch() methods to handle success and error cases. Async/Await is syntactic sugar built on top of Promises that allows writing asynchronous code in a more synchronous-looking manner. The async keyword is used to declare a function as asynchronous, and the await keyword is used to pause execution until a Promise is resolved or rejected, making the code easier to read and maintain.


File and URL Paths
Server-side Fundamentals

W01 Learning Activity: Server-side Fundamentals
Overview
In this activity, you will learn the fundamentals of server-side development, including how servers handle requests and responses.

Preparation Material
Request response lifecycle
The Request-Response Life Cycle is the fundamental process by which web applications work. It describes how a user's request is sent to a server and how the server processes and responds to that request. At a high level, clients (like web browsers) send out a request to a server, which then processes the request and sends back a response (like an HTML page). This is what it looks like in a simple diagram:

The Request Response Lifecycle
The Request-Response Lifecycle
A Deeper Dive
The request-response cycle is a foundational concept in web development. It defines how users interact with web applications and how servers deliver the appropriate content. Understanding this process is essential, as it forms the basis for everything you will build and debug in this course.

The following are the key steps involved in the request-response cycle:

User Makes a Request
A user interacts with a web application (for example, by clicking a link or submitting a form).
The browser sends an HTTP request to the web server which includes information including:
The URL.
HTTP method (such as GET or POST).
Any data being sent.
Server Processes the Request
The web server software receives the request and determines how to handle it (This server software could be Apache, Nginx, or Node.js, or others).
If necessary, the server may interact with a database or other services to gather data.
The server prepares a response (for example, an HTML page, JSON data, or an error message).
Response is Sent Back
The server sends an HTTP response back to the user's browser.
The response may contain HTML, CSS, JavaScript, or other content.
Browser Displays the Response
The browser receives and renders the response, updating the webpage accordingly.
The steps of the Request Response Lifecycle
The steps of the Request-Response Lifecycle
HTTP Request and Response Headers
HTTP headers are key-value pairs sent between the client and server that provide essential information about the request or response. They help both parties understand how to process the data being exchanged.

Common HTTP request headers include:

Host: Specifies the domain name of the server (for example, www.example.com).
User-Agent: Identifies the client software making the request (for example, browser type and version).
Accept: Indicates the types of content the client can process (for example, text/html, application/json).
Content-Type: Specifies the media type of the request body (for example, application/json for JSON data).
Common HTTP response headers include:

Content-Type: Indicates the media type of the response body (for example, text/html for HTML content).
Content-Length: Specifies the size of the response body in bytes.
Set-Cookie: Used to send cookies from the server to the client.
Cache-Control: Directives for caching mechanisms in both requests and responses.
HTTP Verbs and Status Codes
HTTP verbs (also known as methods) indicate the desired action to be performed on a resource. The following are the most common HTTP verbs:

GET: Retrieve data from the server.
POST: Submit data to be processed to the server.
PUT: Update an existing resource on the server.
DELETE: Remove a resource from the server.
HTTP status codes are three-digit codes returned by the server to indicate the result of the request. Common status codes include the following:

200 OK: The request was successful.
201 Created: A new resource has been created successfully.
400 Bad Request: The server could not understand the request due to invalid syntax.
401 Unauthorized: Authentication is required to access the resource.
404 Not Found: The requested resource could not be found.
500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.
The Job of the Server
The server's primary job is to handle incoming requests from clients, process those requests, and send back appropriate responses. In the most simple case, this could be locating a file on the server and sending it back to the client. In more complex scenarios, however, the server will be running a program that generates the page to send back. This could involve querying a database, processing user input, or performing calculations.

In your previous courses, almost everything you did with servers was focused on retrieving files. This course will be very different. In this course you will learn how to run programs on the server to generate the content that is returned.

Running Programs to Generate Content
This course will focus on running programs on the server that will generate content to return to the client.

You will use JavaScript as the programming language and Node.js is the engine that will run your JavaScript programs on the server.

It is critical to understand that your JavaScript programs will run on the server, and then they will be finished. The client will never see your JavaScript files. They will only see the output of those files.

Activity Instructions
For this activity, you will use the developer tools of your browser to learn more about the requests and responses that your browser is sending and receiving as you browse the web.

Complete the following steps:

Open your web browser (such as Chrome, Firefox, or Edge).
Navigate to any website of your choice.
Open the developer tools in your browser. This is usually done by right-clicking on the page and selecting "Inspect" or by pressing F12.
Go to the "Network" tab in the developer tools.
Refresh the webpage to see all the network requests being made.
Click on one of the requests in the list to view its details.
Examine the request headers and response headers to see what information is being sent and received.
Look for the HTTP method used (GET, POST, etc.) and the status code returned by the server (200, 404, etc.).
Take note of any interesting headers or information you find.
Repeat the process for a few different requests to get a better understanding of how the request-response cycle works.



Node.js

W01 Learning Activity: Node.js
Overview
In previous activities you learned more about JavaScript and the principles of server-side web development. In this activity you will learn about Node.js, the server application you will be using throughout the course. You will learn how to setup Node.js to run on your local machine.

Activity Instructions
Complete each of the following steps to set up a Node.js server on your computer.

Install Node.js and NPM
If you have not already done so, you must install Node.js and NPM (the Node Package Manager). This was covered previously in the W01 Setup: Tools activity.

Open VS Code and navigate to your project directory
In the W01 Setup: Tools activity you should have created a new repository for this course and cloned it to your computer. If you have not done this yet, stop and complete this task before continuing.

Open VS Code.
Select File > Open Folder... from the menu.
Navigate to the folder where you cloned your course repository and select it.
Open a new terminal in VS Code by selecting Terminal > New Terminal from the menu. This will open a terminal window at the bottom of VS Code.
Verify your .gitignore file
Before proceeding, make sure your project folder contains a file named .gitignore. This file tells Git which files and folders to ignore when you make commits to your repository. It is important to ensure that certain files, such as node_modules and environment variable files, are not included in your repository.

In the VS Code file explorer, look for a file named .gitignore in the root of your project folder.
If the file does not exist, create a new file named .gitignore in the root of your project folder (notice the dot "." at the beginning of this filename).
Verify (or add if they are not present) the following lines to your .gitignore file:
node_modules/
.env
Save the .gitignore file.
Create your first Node.js application
As mentioned previously, Node.js is the server application you will run to listen for requests and send back responses.

Create a new node application in your project folder by completing the following steps:

In the terminal, run the command npm init to create a new package.json file. This package.json file defines your node application. You can press the Enter key to accept the default values for each prompt except for the following:
When prompted for the entry point, enter server.js instead of the default index.js.
When prompted for the type, enter module instead of the default commonjs.
Create a new file named server.js in the root of your project folder.
Add the following code to server.js:
console.log("Hello, Node.js!");
Run your server.js program, by typing the following at the terminal: node server.js . You should see the text, "Hello, Node.js" display at the terminal.
At this point, your program is just like a Python program or anything else that you may have written, it simply runs code and displays a result. The next step is to make your program list for HTTP requests so that it works as a web server.

Complete the following steps to import the Express library and use it to listen for HTTP requests.

Install the Express framework by running the command npm install express. This will download the express library from the node package repository, and it will add it to your package.json file, to indicate that your application depends on this library.
Update your server.js file to replace the previous code with the following:
import express from 'express';

const NODE_ENV = 'production';
const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
  console.log(`Environment: ${NODE_ENV}`);
});
Run your server.js program again by typing the following at the terminal: node server.js . You should see the text, "Server is running at http://127.0.0.1:3000" display at the terminal.
Open a web browser and navigate to http://127.0.0.1:3000. You should see the text, "Hello from Express!" displayed in the browser.
When you are ready to stop your server, in the terminal, press Control C to break or stop the process.
This is amazing! With just those few lines of code, you have created a simple web server!

What is happening here?
Consider the following lines of code:

import express from 'express';

...

const app = express();
These lines import the Express library and create a new Express application instance. Throughout the rest of this file, you will use the variable app to use many things from the framework.

Consider the following lines of code:

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});
These lines define a route handler for GET requests to the root URL ("/"). When a user navigates to this URL in their browser, the server responds with the text "Hello from Express!". The req parameter represents the incoming request, and the res parameter is used to send a response back to the client.

You will learn how to do many more things with these route handlers in later activities.

Consider the following lines of code:

app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
  console.log(`Environment: ${NODE_ENV}`);
});
These lines start the server and make it listen for incoming requests on the specified port (3000 in this case). When the server is successfully started, it logs a message to the console indicating that it is running and provides the URL where it can be accessed.

Make sure these steps work before moving on
It is very important to make sure your server is working and listening for requests at this point. If it is not, you should stop here and resolve the problem before moving on.

Please post any questions or problems you have to the course Microsoft Teams channel.

Optional Video Walkthrough
While the following video may be helpful to see the steps in action, make sure to walk through the written instructions directly because there may be important steps that are not covered in the video.

Direct link: Your First Node.js Application


Install Nodemon for Development
When you are developing your Node.js application, it is helpful to have the server automatically restart whenever you make changes to your code. This saves you from having to manually stop and restart the server each time you make a change.

To accomplish this, you will install a tool called nodemon. Nodemon is a utility that monitors for any changes in your source code and automatically restarts your Node.js application.

Complete the following steps to install and configure nodemon:

Install nodemon as a development dependency by running the following command in your terminal: npm install --save-dev nodemon . (The save-dev flag adds this to a list of dependencies for development only, because it will not be needed in the production environment.)
Create a new file nodemon.json and copy the following configuration settings into this file to tell node the starring command to execute and which file extensions should trigger an update:
{
    "ext": "js css ejs env",
    "exec": "node server.js",
    "ignore": [
        ".git",
        "node_modules"
    ]
}
Update your package.json file to add a new script for starting your server in development mode. Replace your scripts section with the following:
"scripts": {
  "dev": "nodemon",
  "start": "node server.js"
},
This adds a new script named dev that uses nodemon to start your server. The start script will run node as normal for production use.

Now, instead of running your server with node server.js, you start it in development mode by running the command: npm run dev . (If you would like to run it in production mode, you run the command: npm run start .)
Run your application by typing npm run dev in the terminal. Then, with nodemon running, try making a change to your server.js file (for example, change the response text in the route handler). Save the file, and you should see nodemon automatically restart the server in the terminal.
Refresh your web browser to see the changes reflected.
Optional Video Walkthrough
While the following video may be helpful to see the steps in action, make sure to walk through the written instructions directly because there may be important steps that are not covered in the video.

Direct link: Dev Tool: Nodemon


Add Environment Variables
Environment variables allow you to store configuration settings outside of your code, making it easier to manage different settings for development and production environments.

In the case of your application, you will have a set of variables to use when it is running on your computer, and a different set to use when it is running in the cloud. Environment variables are the perfect way to store those variables so that the source code can be the same in both cases, but the app can behave differently based on these variables.

Complete the following steps:

Create a new file named .env in the root of your project folder.
Add the following code to the .env file:
PORT=3000
NODE_ENV=development
Update your server.js file to include the following code right after the import statement.
Replace these lines of code:

const NODE_ENV = 'production';
const PORT = 3000;
With these lines of code:

// Define the application environment
const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || 'production';

// Define the port number the server will listen on
const PORT = process.env.PORT || 3000;
Notice that these lines of code try to get the value from the environment variable first, but then fall back to other hardcoded values ('production' and 3000) if the environment variables are not found.

In order for your Node.js server to get the information from your .env file, you need to pass that file to it when you start the server. Update your nodemon.json file. Change the "exec": "node server.js", line to be the following:
"exec": "node --env-file=.env server.js",
This ensures that when the server is run in development mode, the .env file will be passed to it.

Run your application again by typing npm run dev in the terminal.
Verify that it displays on the console:
Server is running at http://127.0.0.1:3000
Environment: development
If your console says "Environment: production" it is not correctly reading in the information from your .env file.

Optional Video Walkthrough
While the following video may be helpful to see the steps in action, make sure to walk through the written instructions directly because there may be important steps that are not covered in the video.

Direct link: Environment Variables


Complete Code Files (Click to expand)
The following are the complete files at this point:

server.js

import express from 'express';

// Define the application environment
const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || 'production';

// Define the port number the server will listen on
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
  console.log(`Environment: ${NODE_ENV}`);
});
.env

PORT=3000
NODE_ENV=development
nodemon.json

{
    "ext": "js css ejs env",
    "exec": "node --env-file=.env server.js",
    "ignore": [
        ".git",
        "node_modules"
    ]
}
package.json (The text [your repo here] should contain your actual GitHub repository. And the versions of libraries may be slightly different for you.

{
  "name": "cse340-hw",
  "version": "1.0.0",
  "description": "",
  "homepage": "[your repo here]",
  "bugs": {
    "url": "[your repo here]"
  },
  "repository": {
    "type": "git",
    "url": "git+[your repo here]"
  },
  "license": "ISC",
  "author": "",
  "type": "module",
  "main": "server.js",
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^5.2.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.11"
  }
}



Express and Routing

W01 Learning Activity: Express and Routing
Overview
In this assignment, you will change your server.js file, so that instead of sending back a hardcoded message, it will send back static HTML files for different routes.

Course Project
Throughout this course, you will be developing a system similar to JustServe.org. It will have pages and database entries for the following:

Home Page
Partner Service Organizations
Services Projects
Categories
Volunteers
In this activity you will create the initial pages for this site.

Activity Instructions
Introduction to Routing
In this activity, you will build a simple 3-page website using Express. You will create and serve static HTML files for the Home, Partner Service Organizations, and Service Projects.

To serve these files, you will create a route for each of them. The route maps a URL pattern to an action, in this case serving of a file. For this example, you will set up routes that match the following:

/ – serves home.html
/organizations – serves organizations.html
/projects – serves projects.html
This will be done in Express using res.sendFile().

In future assignments, you will learn about more advanced routing techniques and use a templating engine. But at this point, your app will send files back directly.

Project Structure
Your project will have two main folders that serve different purposes:

public/: Contains static files that browsers can access directly (CSS, images, client-side JavaScript)
src/views/: Contains HTML files that Express serves through routes
This separation reflects how modern web applications work. Files in public/ are served exactly as they exist on your server—no processing, no security checks, no logic. They are perfect for assets that never change: stylesheets, images, fonts, and client-side JavaScript files. Anyone can request these directly by typing the URL.

Files in src/views/, on the other hand, are served through your application logic. Your Express app decides whether to serve them, can modify them before serving, can apply security checks, and can even generate them dynamically. This gives you complete control over what users see and when they see it.

Directory Structure
At the end of this activity, your directory structure will look as follows:

[project-root]
├── public/
│   ├── css/
│   │   └── main.css
│   └── images/
│       └── cse340-service-network.png
│       └── brightfuture-logo.png
│       └── greenharvest-logo.png
│       └── unityserve-logo.png
├── src/
│   └── views/
│       ├── home.html
│       ├── organizations.html
│       └── projects.html
├── .env
└── server.js
Create your main CSS
Complete the follows steps to create your main CSS file.

Create a public directory at the root of your project, and create a css subdirectory within it.
Create a file named main.css inside the css directory with the following content:
html, body {
    background-color: lightblue;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}

body {
    nav {
        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            display: inline;
            margin-right: 15px;
        }

        a {
            text-decoration: none;
            color: #333;
            font-weight: bold;

            &:hover {
                color: #0066cc;
            }
        }
    }
}                
Update server.js to serve static files
Static files are assets that do not change when served to users, such as CSS files, images, and client-side JavaScript. Express provides a simple way to serve these files using the express.static middleware. This built-in function lets you serve your static files directly to the browser without any processing.

Before you can serve files, you need to understand how JavaScript handles file paths. In traditional CommonJS modules (using require()), Node.js automatically provided two special variables: __dirname and __filename. These variables solved a critical problem in server applications: how do you reliably find files when you don't know where your application will be running?

__dirname contains the absolute path to the directory containing the current JavaScript file. __filename contains the absolute path to the current JavaScript file itself. These are essential because they provide consistent references regardless of where someone runs your application from. Without them, if someone ran your server from a different directory, all your file paths would break.

However, using the modern ES modules (which you are using with import statements) it does not automatically provide these variables. Instead, you must create them yourself using the newer ES module system. Add these imports to the top of your server.js file:

import { fileURLToPath } from 'url';
import path from 'path';
Then, in your server.js file, directly after the environment variables, add the following code to create the __dirname and __filename variables:

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
In this code, import.meta.url gives the URL of the current module, fileURLToPath() converts that URL to a file system path, and path.dirname() extracts just the directory portion. This recreates the same functionality that CommonJS provided automatically.

Next, add the following middleware to your server.js file after your variable declarations but before any routes:


/**
  * Configure Express middleware
  */

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
This code tells Express that any file in your public directory should be accessible directly through your website. For example, your CSS file at public/css/main.css will be available at http://127.0.0.1:3000/css/main.css. Notice that the public part is not included in the URL.

Understanding Static File Serving
The express.static middleware automatically maps the contents of your public directory to the root of your website. This keeps your URLs clean and makes it easy to organize static assets. When someone requests /css/main.css, Express looks for public/css/main.css and serves it if found.

Static File Serving and the request-response lifecycle
The Request Response Lifecycle
The Request-Response Lifecycle
As you think about the request-response lifecycle diagram shown above, in the case of static files, when the client requests a static file, Express sends it directly to the client, no further processing is needed.

Create HTML files
Now create a src directory at the root of your project, and create a views subdirectory within it. Then, create the following three HTML files in the src/views directory. These files will serve as the content for your different pages:

home.html – The main home page for the site.
organizations.html – A page to list the partner organizations.
projects.html – A page to list all the service projects that are currently available.
When you create each file, use the code below for the content of these files, replacing the two [PAGE TITLE] placeholders with appropriate content for each page ("Home", "Organizations", or "Service Projects").:


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[PAGE TITLE]</title>
    <link rel="stylesheet" href="/css/main.css">
</head>
<body>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/organizations">Organizations</a></li>
            <li><a href="/projects">Projects</a></li>
        </ul>
    </nav>
    <main>
        <h1>[PAGE TITLE]</h1>
        <p>Coming Soon!</p>
    </main>
</body>
</html>
Notice how the CSS file is linked using a root-relative path (/css/main.css). This works because Express serves everything in your public directory from the root URL of your website.

Create route handlers for the html files
Because your html files are not in the public directory, Express will not serve them automatically. Instead, you need to create route handlers (or simply, routes, for short) that tell Express how to respond when someone visits specific URLs.

A route is a rule that says "when someone visits this URL, send them this content." It's like a receptionist who knows which office to direct visitors to.

Add these three routes to your server.js file after your middleware (make sure to delete the existing route for "/" that sends back a hardcoded message):


/**
  * Routes
  */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/home.html'));
});

app.get('/organizations', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/organizations.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/projects.html'));
});
Looking closely at the first route, you can understand how each of these work:

app.get('/', ...) tells Express "when someone visits the homepage (just the domain with no path), do the following"
(req, res) => { ... } is the function that runs when someone visits that URL. req contains information about what they requested, res lets you send a response back
res.sendFile(...) sends an HTML file to their browser
path.join(__dirname, 'src/views/home.html') creates the complete path to your HTML file
So when you type http://127.0.0.1:3000/ in your browser, Express finds the first route, runs the function, and sends you the home.html file.

The same thing happens for the other routes:

http://127.0.0.1:3000/organizations → sends organizations.html
http://127.0.0.1:3000/projects → sends projects.html
Notice that the URL is just /organizations not /organizations.html. The application will decide what to do with that request. Right now, it will find and send back the organizations.html file, but in the future, you will do something different to handle that route.

Why Not Just Put HTML Files in Public?
You might wonder why you can't just put your HTML files in the public directory like our CSS. The reason is control. Routes let you do things before sending the file, such as check if the user is logged in, customize the content, or redirect them somewhere else. Static files in public are sent directly with no opportunity for your code to intervene.

One Important Detail: You need to use path.join(__dirname, ...) instead of just writing 'src/views/home.html' because you need the complete, absolute path to the file. __dirname gives you the directory where server.js lives, and path.join() properly combines it with the rest of the path. This ensures the file is found no matter where someone runs your application.

Route Handling and the request-response lifecycle
The steps of the Request-Response Lifecycle
The steps of the Request-Response Lifecycle
Referring back again to the more detailed steps of the request-response lifecycle shown above, routing is the first step the server takes as it handles the request. The routing step determines how to process the request. In the case of sending back html files as you are doing here, the work to process the request is quite simple, your code simply sends the html file back.

In future activities, you will add more processing, including database interaction, but the overall idea is the same—the route directs the request to the right place to produce html to send back to the client.

Optional Video Walkthrough
While the following video may be helpful to see the steps in action, make sure to walk through the written instructions directly because there may be important steps that are not covered in the video.

Direct link: Express and Routing


Test your app
Run your app by typing npm run dev in the terminal and visit the page in your browser. Make sure you can see each of the three pages (you should be able to click the links in the nav bar). Also, make sure the CSS file is rendering correctly (you should see a blue background).

http://127.0.0.1:3000/ should display your home page
http://127.0.0.1:3000/organizations should display your partner organizations page
http://127.0.0.1:3000/projects should display your service projects page
Verify that each page shows its correct content, the navigation works, and the CSS styles are applied.
If any of these things are not working, stop here and fix them before moving on to the next step.

Running a local server
Remember, in order for these links to work, you will need to have your local server running. The address 127.0.0.1 is the local IP address of your computer, so when you go to that link in the browser, it is looking for a web server running on you computer.

Add placeholder content to your html pages
Right now, each of your pages just says "Coming Soon!" You need to add some placeholder content to each page so that when you view them in the browser, they look more complete. Update each HTML file as follows:

Home page
On the home.html page, replace the Coming Soon! content with the following code:


<h2>Welcome to the CSE 340 Service Network!</h2>
<p>Our mission is to promote service across the world by connecting volunteers with service opportunities in their community.</p>

<img class="main-logo" src="images/cse340-service-network.png" alt="CSE 340 Service Network Logo">
This code snippet references an image, so you need to do the following to make the image work:

Create an images subdirectory inside your public directory.
Download the following image file: CSE 340 Service Network Logo
Save the image file into the public/images directory, and make sure it is named cse340-service-network.png .
Referencing Images in HTML
The image files are static files that will be served in the same way the CSS files are served. Also, just like with the CSS files, even though the file is in the public/images/ directory in your project, the relative path to your file is images/cse340-service-network.png (notice that public is not included in the html path to the file.

Partner Service Organizations page
On the organizations.html page, replace the Coming Soon! content with the following code:


<p>Here are a few of our partner organizations:</p>
<ul>
    <li><img src="/images/brightfuture-logo.png" alt="BrightFuture Builders logo"><strong>BrightFuture Builders</strong>: info@brightfuture.org</li>
    <li><img src="/images/greenharvest-logo.png" alt="GreenHarvest Growers logo"><strong>GreenHarvest Growers</strong>: contact@greenharvest.org</li>
    <li><img src="/images/unityserve-logo.png" alt="UnityServe Volunteers logo"><strong>UnityServe Volunteers</strong>: hello@unityserve.org</li>
</ul>
This code also references images, so you will need to download the following images and save them to your public/images directory as well.

BrightFuture Builders Logo
GreenHarvest Growers Logo
UnityServe Volunteers Logo
Service Projects page
On the projects.html page, replace the Coming Soon! content with the following code:


<h2>Upcoming Service Projects</h2>
<ul>
    <li>Park Cleanup - Join us to clean up local parks and make them beautiful!</li>
    <li>Food Drive - Help collect and distribute food to those in need.</li>
    <li>Community Tutoring - Volunteer to tutor students in various subjects.</li>
</ul>
Test each page
After updating each page, refresh your browser and verify that you can see the new content including the images.

Final server.js content
At the end of this activity your server.js file should look as follows:


import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

// Define the application environment
const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || 'production';

// Define the port number the server will listen on
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/**
  * Configure Express middleware
  */

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

/**
  * Routes
  */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/home.html'));
});

app.get('/organizations', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/organizations.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/projects.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
  console.log(`Environment: ${NODE_ENV}`);
});

Key Concepts Summary
This assignment introduced several fundamental concepts:

Static Files: Assets like CSS and images that are served directly to users without processing
Middleware: Functions that process requests before they reach your routes
Routing: Mapping URLs to specific responses or content
File Organization: Separating static assets (public/) from server-rendered content (src/views/)
Path Handling: Using path.join() to create reliable file paths across different operating systems


EJS Templates

W01 Learning Activity: EJS Templates
Overview
In this activity, you will transform your static HTML website into a dynamic, maintainable application using the EJS templating engine. You'll learn why templating engines are essential for modern web development, how to create reusable components called partials, and how to organize your views for better maintainability.

Preparation Material
The Problem with Static HTML
Your current Express application works, but it has several limitations that become more visible as websites grow larger. Consider what happens when you want to make a simple change, like updating your navigation menu or changing the copyright year in your footer.

If you are using static HTML files, you would need to open every single HTML file and make the same change in each one. If you miss one file, and your site becomes inconsistent. If you add ten more pages, you would have ten more places where changes must be made perfectly. This approach does not scale and leads to maintenance nightmares.

Static HTML also cannot adapt to different situations. You cannot change content based on who's visiting, what time it is, or data from a database. Every visitor sees exactly the same thing, which severely limits what your application can do.

Templating engines solve these problems by separating your content from your layout, allowing you to create reusable components and generate dynamic content. This activity will show you the way to do this.

Understanding Templating Engines
A templating engine is a tool that combines templates (HTML with special syntax) and data to produce final HTML that gets sent to the browser. You provide a template with placeholders, and the engine fills in those placeholders with actual data.

EJS (Embedded JavaScript) is one of many templating engines available for Express. It allows you to embed JavaScript directly in your HTML using special tags, making it easy to create dynamic content without having to learn a different language.

This process works as follows: when someone visits your website, Express finds the appropriate EJS template, combines it with any data you provide, processes the special EJS syntax, and sends the resulting HTML to the user's browser. The user never sees the EJS code – only the final HTML.

Basic EJS Syntax
EJS template files look just like HTML files. But whenever you want to use EJS features you place code inside <% %> tags.

There are three main types of EJS tags you will use:

<%= %>: Outputs the value of a variable into the HTML (escaped for security)
<%- %>: Outputs the value of a variable without escaping (useful for including HTML content)
<% %>: Runs JavaScript code without outputting anything (useful for loops and conditionals)
For example, if you want to include the content of the variable title inside of an h1 tag, you would use this code:

<h1><%= content %></h1>
Activity Instructions
Install and Configure EJS
Complete the following steps to set up EJS in your application.

Install the EJS templating engine using npm, by running the following command in the terminal (in your project root directory):
npm install ejs
Configure Express to use EJS by adding these lines to your server.js file. This code should go in your middleware configuration section just after your public static directory configuration:
// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Tell Express where to find your templates
app.set('views', path.join(__dirname, 'src/views'));
The first line tells Express to use EJS for processing templates. The second line specifies where your template files are located. Express will automatically look for .ejs files in this directory when you render views.

Configuration Order Matters
These configuration calls must come before your routes because Express needs to know about the templating engine before it tries to render any templates.

Create header and footer EJS partials
An EJS partial is a reusable template fragment that contains code you want to use in multiple places. Think of partials as the template equivalent of functions in programming – they let you write something once and use it everywhere.

For example, instead of copying your navigation menu into every page template, you create one navigation partial and include it wherever you need it. You only have to change the navigation in one place and it will be updated everywhere automatically.

Complete the following:

Create a partials directory inside your src/views directory. This is where you will store your reusable template components.
Create the header partial by creating a new file src/views/partials/header.ejs with the following content:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
    <link rel="stylesheet" href="/css/main.css">
</head>
<body>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/organizations">Organizations</a></li>
            <li><a href="/projects">Projects</a></li>
        </ul>
    </nav>
Notice the <%= title %> syntax. This is EJS telling the template engine to insert the value of a variable called title. The <%= %> tags mean "output this value into the HTML."

Create the Footer partial by creating a new file src/views/partials/footer.ejs with this content:

    <footer>
        <p>&copy; <%= new Date().getFullYear() %> CSE 340 Service Network.</p>
    </footer>
</body>
</html>
Notice that in this case, the footer makes a call to standard JavaScript to get the current year dynamically, with <%= new Date().getFullYear() %>. It is important to realize that this JavaScript will run on the server (not in the browser). When the browser receives the HTML from the server it will see the year as a static value, and not even be aware that it was dynamically generated.

The header and footer partials provide the complete HTML structure that every page needs, but they leave room in between them for page-specific content.

Convert static pages to EJS templates
Now comes the transformation. You will convert your static HTML files into dynamic EJS templates that use the partials you just created.

Complete the following steps:

Rename your .html files to use the .ejs extension. You should rename each of the following files in your src/views directory:
home.html → home.ejs
organizations.html → organizations.ejs
projects.html → projects.ejs
Replace the content of each .ejs file to use this simple structure:

<%- include('partials/header') %>
<main>
    <h1><%= title %></h1>
    <!-- Put your page-specific content here -->
</main>
<%- include('partials/footer') %>
The <%- include() %> syntax tells EJS to insert the contents of another template file. The %- syntax (notice the use of the - hyphen rather than the = equals sign) means you want to include this content directly, without escaping it or looking for variables. You would not want to do this with any content that may have come from a user or from the database, but since these are templates that you have written, you do not have to worry about escaping this content.

For example, your home.ejs should look as follows:

<%- include('partials/header') %>

<main>
    <h1><%= title %></h1>

    <h2>Welcome to the CSE 340 Service Network!</h2>
    <p>Our mission is to promote service across the world by connecting volunteers with service opportunities in their community.</p>

    <img class="main-logo" src="images/cse340-service-network.png" alt="CSE 340 Service Network Logo">

</main>

<%- include('partials/footer') %>
Notice that both the header partial and the main page use the <%= title %> replacement variable. When you render the page, you will make sure this variable is passed correctly, and then it will be filled in, in both places.

Complete the updates for the organizations and projects pages in the same way. Don't forget to replace the <h1> ... </h1> line in each template to use the new <%= title %> syntax.
Don't Duplicate HTML Structure
When converting your files, remove all the HTML structure elements like <!DOCTYPE html>, <html>, <head>, <body>, etc. These are now handled by your header partial. Include only the unique content for each page within the <main> tags.

Update your routes to use templates
Next, update your routes to have Node render EJS templates instead of sending static HTML files. The key change is switching from res.sendFile() to res.render().

Update your routes in server.js to look like this:


/**
 * Routes
 */
app.get('/', async (req, res) => {
    const title = 'Home';
    res.render('home', { title });
});

app.get('/organizations', async (req, res) => {
    const title = 'Our Partner Organizations';
    res.render('organizations', { title });
});

app.get('/projects', async (req, res) => {
    const title = 'Service Projects';
    res.render('projects', { title });
});
Here is what has changed with this new version:

res.render() instead of res.sendFile(): This tells Express to process an EJS template to use rather than send a static file. It will apply the EJS engine to generate the final HTML.
Template name without extension: Notice that you are only supplying home in the res.render call, rather than specifying home.ejs and you also do not supply the directory name. Express will automatically look for home.ejs in your views directory.
Data object: The second parameter, in this case { title }, provides data that the template can use. Here, you are passing an object with a property title that the template can access using the <%= title %> syntax. In the future, you will pass other data as well.
Understanding Data Passing
When you write res.render('home', { title }), you're passing an object with a title property to the template. Inside the EJS template, <%= title %> outputs the value of that property. The property names in your data object must match the variable names used in your templates.

Test your templated application
Your project structure should now look like this:

[project-root]
├── public/
│   ├── css/
│   │   └── main.css
│   └── images/
│       └── cse340-service-network.png
│       └── brightfuture-logo.png
│       └── greenharvest-logo.png
│       └── unityserve-logo.png
├── src/
│   └── views/
│       ├── partials/
│       │   ├── header.ejs
│       │   └── footer.ejs
│       ├── home.ejs
│       ├── organizations.ejs
│       └── projects.ejs
├── .env
└── server.js
Start your server with npm run dev and test each page:

Verify that the page titles appear correctly in the browser tab
Check that the navigation works on all pages
Confirm that your CSS styles are still applied
Make sure the footer appears on every page
Commit and push your code
Once you have verified that everything is working correctly, make sure to commit your changes and push them to your GitHub repository.

The request-response lifecycle
Using EJS templates is a great way to understand the request-response lifecycle.

The steps of the Request Response Lifecycle
The steps of the Request-Response Lifecycle
In this case, when the client makes a GET request to /organizations, the following Express route is matched:

app.get('/organizations', async (req, res) => {
    const title = 'Our Partner Organizations';
    res.render('organizations', { title });
});
The EJS view engine is then used to render the response. Express finds the organizations.ejs file in the src/views directory. The template sections for the header and footer are included and the variable for the title is also filled in. (No database interaction was needed yet.) The result is finished HTML that is then streamed back to the client to view in the browser.

The client does not see any of the EJS syntax or any of the processing that happened along the way. From their perspective, it could have just as easily been a static HTML file that was requested and streamed back.

This ability to generate HTML on demand and send it back to the client shows the power of server-side programming.

To see this for yourself, on your web page, view the page source in your browser (for example, right-click and select "View Page Source" or use the browser's developer tools). You will see that this looks like a standard HTML page without any EJS syntax.

Optional Video Walkthrough
While the following video may be helpful to see the steps in action, make sure to walk through the written instructions directly because there may be important steps that are not covered in the video.

Direct link: Express and Routing

W01 Learning Activity: Deploy your site
Overview
In this activity, you will deploy your web application to a cloud hosting service so that it can be accessed over the internet.

Activity Instructions
Complete the steps of this activity to create and deploy your site to Render.com, the free cloud hosting service you will use for this course.

Sign up for a Render.com account
Complete the following steps:

In a web browser, navigate to Render.com.
Click the Get Started button (likely in the top right corner) to register for a new account.
For your account type, select GitHub. By using the GitHub login method it will connect your Render.com and GitHub accounts together and make the deployment steps easier later.
You should see a prompt to authorize Render to access your GitHub identity. Follow the steps in this screen to authorize your GitHub account to be used.
You should then arrive at the Render.com dashboard.
Create a new Web Service
Complete the following steps:

Return to Render.com and sign in to arrive at the dashboard page.
Click the option create a new Web Service (New Web Service ->).
You should arrive at the Source Code setting with the Git Provider tab selected.
If no repositories are found, click the GitHub button to configure GitHub to allow Render to access your repositories.
You may select All repositories so that Render can access any repository you create, or you may select the specific repository you created for this course.
Click the Install button.
On the Git Provider tab at Render, select the repository for this course.
Fill out the form as follows:
Name: Add a unique name for the service. This is a label that will help you distinguish it from others. It should be simple and descriptive, such as cse340 or perhaps add your initials after it.
Language: select Node.
Branch: Leave as the default of main.
Region: Select the region that is nearest to you in the world. This is important because this is where your service will be created.
Root directory: Leave this empty.
Build Command: Leave this as npm install .
Start Command: Change this to npm start .
Instance type: Select Free.
Environment Variables: Set a variable named NODE_ENV with the value production .
Auto Deploy: Expand the Advanced section to find this setting. Leave this set to On Commit so that future changes to your repository will automatically update your deployed site.
Click the Deploy Web Service button when you have set all the settings as described.
Wait for the deployment process to complete. This may take several minutes as Render installs dependencies and starts your application.
Select Events from the Render dashboard to see the progress and any logs related to your deployment.
Verify your deployment
Once the deployment is complete, on the Events tab on the Render dashboard, you should see a green check mark indicating that your service is live and that the latest deployment has succeeded. Complete the following steps:

From the Render dashboard, click on your newly created web service to open its details page.
Locate the URL provided for your web service. It should look something like https://cse340-a6v0.onrender.com.
Click on the URL to open your deployed web application in a new browser tab.
Verify that your application is functioning as expected. Navigate through the pages and test any interactive features to ensure everything is working correctly.
Optional Video Walkthrough
While the following video may be helpful to see the steps in action, make sure to walk through the written instructions directly because there may be important steps that are not covered in the video.

Direct link: Deploying to Render


Submission
Congratulations! You have now completed all of the learning activities for this week.

To submit this activity, return to Canvas and submit the associated quiz there.

Deploy your site
End of Week
W01 Assignment: Initial Site Creation

W01 Assignment: Initial Site Creation
Overview
This assignment will build on the learning activities for the week. You will complete the initial version of your site.

Instructions
Complete the following:

Complete Learning Activities
Before you continue to the next step, make sure you have completed every step of the following activities:

W01 Setup: Tools
W01 Learning Activities
At this point you should have a functioning site with the following characteristics:

Node.js and Express server running locally.
EJS pages for home, organizations, and service projects.
A navigation bar with links to each page.
EJS partials used for the header and footer information on your EJS pages.
A site CSS stored in the public/css folder.
Images stored in the public/images folder and rendered on the organization page.
All source content stored at GitHub.
Private information, such as the .env file is not stored at GitHub.
Deployed to Render and accessible online.
All of these will be required for this submission, so if any of these are not yet complete, you should complete them now before moving on.

Add Service Project Categories
Follow the same pattern from the learning activities to add a new EJS page for Service Project Categories.

Create a new categories.ejs page.
Add the following placeholder categories to your categories page:
Environmental
Educational
Community Service
Health and Wellness
Make sure to use the same partials for the header and footer that you did for the other EJS pages.
Update your site navigation in the header partial to include a link for Categories.
Add a route to your Express server (/categories) to serve the new categories page. Make sure to follow all naming conventions defined in the learning activities.
Test your site locally and make sure everything is working correctly.
Deploy your updated site to Render.com and test it online.
Can I use AI?
Yes! You are welcome to use AI tools to help you create the EJS page and any other code you need for this assignment. But remember that you must understand every line of the code that you submit, so carefully review any generated code and ask AI questions about anything you are not completely comfortable with.

In addition, remember that your code must strictly match the requirements and naming conventions described in the learning activities. You may need to clean up AI generated code to follow these guidelines.

For more information on AI-use, please review the CSE 340: AI Policy.

Make your site look professional
Now that you have the basic functionality, the next step is to make your site look professional.

Complete the following:

Use AI to generate a professional layout for your site. Replace your old stylesheet in your public/css directory.
You may use any AI tool you would like.
You may find it helpful to include the HTML content of one of your pages in your prompt so that it can know the elements and classes you have defined. To get the complete HTML for your site, when you view your rendered EJS page in a browser, right-click and select View Page Source to get all of the HTML at once
The new CSS should be responsive and look good on both desktop and mobile devices.
Make sure the colors, fonts, and layout are professional and visually appealing.
Make sure the site meets accessibility standards (e.g., sufficient color contrast, readable fonts, etc.).
Look carefully at the CSS code that was generated. Make sure you understand and are comfortable with all of this code.
Deploy your updated site to Render and test it online.
Requirements
The following are the requirements for this assignment:

EJS Pages: Navigation and EJS pages exist for home, organizations, projects, and categories. The titles of these pages are EJS variables.
EJS Partials: Header and footer EJS partials are used on all pages. The header inserts the page title variable into the HTML title and the footer includes a copyright.
Static Files: CSS and images are in the public folder and render on the site. Server.js contains static middleware to serve the public folder.
Code Organization and Standards: The .env file is not present at GitHub. All code standards are followed including the following:
const is used where possible.
camelCase is used for all variables.
All functions should use arrow notation (const xxx = () -> {} )
Async/await is used rather than promises or callbacks
ESM export/import syntax is used.
<%= %> rather than <%- %> should be used for all EJS data except the header and footer partials.
Deployment and Professional Style: The site is deployed and working at Render.com. The CSS is professional in look and feel.
Score
In order to be marked complete and receive credit (100%), your assignment must meet all of the requirements. If any requirements are not met, your assignment will be marked incomplete (0%) and you will need to fix any issues and resubmit.

Why must the assignment be perfect to receive any points?
All future assignments will build on this initial site. If any part of this initial site is missing or incomplete, it will cause problems for future assignments. Therefore, it is critical that this initial site is fully complete before moving on.

In addition, when you are working as a software developer, this is the same expectation your company will have. If any of your requirements are not working correctly yet, you will need to fix them before you can move on to the next task.

Submission
Once you met the requirements, return to Canvas to submit the following:

The URL of your GitHub repository.
The URL of your deployed site on Render.


W01 Coaching Session

W01 Coaching Session
Overview
This assignment will give you a chance to articulate the principles of server-side programming, to demonstrate your knowledge of the code you have written, and to learn more about these principles.

Instructions
For this assignment you will have a coaching session with an AI agent. This will give you a chance to demonstrate your understanding of the topic of the week, the code you have written, and show that you are conversant in the terminology of the topic.

For this session, you may use any AI tool you would like. You will use the provided prompt to start your conversation. Then, the AI agent will ask questions and give you suggestions about your project.

After you have completed your conversation, you will upload a copy of your coaching session transcript to Canvas for review.

AI Instructions
Open your AI tool.
Copy and paste the entire prompt below. Do not change it in anyway.

Week 01 Coaching Session Prompt

### ROLE AND CORE INSTRUCTIONS

**Your Role:** You are my supportive and non-judgmental **Learning Coach and Software Mentor**.

**Primary Goal:** This session is a **learning activity, NOT a test.** Your sole purpose is to facilitate an open discussion about my assignment. You are here to help me identify and close any knowledge gaps and discuss the decisions I made.

**Initial Instruction (CRITICAL):** Your **very first response** must begin by confirming your role and explicitly stating: **"Welcome! Just to be clear from the start, this is a coaching session, not a test. It is perfectly okay—and even encouraged—to say 'I don't know' or 'I made a mistake.' That's the fastest way we'll learn today."**

**Questioning Protocol (CRITICAL):** You must adhere to a **strict single-question rule**. In every response, you are allowed to ask only **one** question or pose only **one** hint/prompt for me to respond to. Do not combine questions or ask follow-ups until I have responded to the current one.

**Follow-up Guidance:** If my response is brief or lacks detail, ask simple follow-up questions to help me explain my thinking more clearly.

**Transcript Requirement:** At the end of the session, save the full conversation, including everything I said and everything you said, to a downloadable `.txt` file.

### SESSION PROCESS AND REQUIREMENTS

The session should be conversational and allow me to lead with my questions, but you must ensure that **all four required topics** are covered during our time together.

1.  **Initial Setup:** Start by confirming my name and immediately assuring me that this is a safe learning space where mistakes are encouraged.
2.  **Code Access Protocol (Dual Mode):**
    * **If running in a chat interface (e.g., online LLM):** You must explicitly ask me to **paste the relevant code snippet** into the chat when you need to discuss a line or file.
    * **If running in a code editor environment (e.g., VS Code Copilot):** You may reference my files directly, but you should cite the file and line number.

### MANDATORY DISCUSSION TOPICS (The four areas you must guide me through)

You must ensure that our discussion covers the core ideas of each of these four technical topics listed below. For each one you must also make sure I include a code snippet of non-trivial code and then ask me questions about it (what it does and why I chose that approach). Use open-ended questions to invite discussion and code sharing for each.

| Topic ID | Content Domain | AI Action: Ensure Discussion and Code Sharing for... |
| :--- | :--- | :--- |
| **Topic 1** | **Express Routing** | Discuss the way Express routing works in the server.js file, supported by a relevant Node.js function snippet. |
| **Topic 2** | **JavaScript Language Principles** | Discuss JavaScript language principles, supported by a relevant JavaScript function snippet. |
| **Topic 3** | **EJS Partials and Pages** | Discuss EJS partials and EJS Pages, supported by a relevant EJS code snippet. |
| **Topic 4** | **Frontend CSS** | Discuss frontend CSS, supported by a relevant CSS code snippet. |

### SESSION CONCLUSION

The session should conclude naturally when we have finished discussing all four topics. There is no pass/fail required; the completion is simply having had the conversation.
Requirements
The coaching session should last at least 30 minutes.
You need to discuss each of the following topics:
Express Routing: Discuss the way Express routing works in the server.js file, supported by a relevant Node.js function snippet.
JavaScript Language Principles: Discuss JavaScript language principles, supported by a relevant JavaScript function snippet.
EJS Partials and Pages: Discuss EJS partials and EJS Pages, supported by a relevant EJS code snippet.
Frontend CSS: Discuss frontend CSS, supported by a relevant CSS code snippet.
For each topic, you need to share a code snippet.
If you do not have a meaningful discussion about those topics or do not share code snippets, the assignment will be marked incomplete, and you will need to complete those discussions and resubmit. If the AI agent does not lead you to discuss the things you need, you should directly ask the AI agent to talk with you about it.
When you are finished, download the entire conversation and save it as a .txt or .md file to upload to Canvas.


W01 60-second Status Update

W01 Assignment: Initial Site Creation
Overview
This assignment will build on the learning activities for the week. You will complete the initial version of your site.

Instructions
Complete the following:

Complete Learning Activities
Before you continue to the next step, make sure you have completed every step of the following activities:

W01 Setup: Tools
W01 Learning Activities
At this point you should have a functioning site with the following characteristics:

Node.js and Express server running locally.
EJS pages for home, organizations, and service projects.
A navigation bar with links to each page.
EJS partials used for the header and footer information on your EJS pages.
A site CSS stored in the public/css folder.
Images stored in the public/images folder and rendered on the organization page.
All source content stored at GitHub.
Private information, such as the .env file is not stored at GitHub.
Deployed to Render and accessible online.
All of these will be required for this submission, so if any of these are not yet complete, you should complete them now before moving on.

Add Service Project Categories
Follow the same pattern from the learning activities to add a new EJS page for Service Project Categories.

Create a new categories.ejs page.
Add the following placeholder categories to your categories page:
Environmental
Educational
Community Service
Health and Wellness
Make sure to use the same partials for the header and footer that you did for the other EJS pages.
Update your site navigation in the header partial to include a link for Categories.
Add a route to your Express server (/categories) to serve the new categories page. Make sure to follow all naming conventions defined in the learning activities.
Test your site locally and make sure everything is working correctly.
Deploy your updated site to Render.com and test it online.
Can I use AI?
Yes! You are welcome to use AI tools to help you create the EJS page and any other code you need for this assignment. But remember that you must understand every line of the code that you submit, so carefully review any generated code and ask AI questions about anything you are not completely comfortable with.

In addition, remember that your code must strictly match the requirements and naming conventions described in the learning activities. You may need to clean up AI generated code to follow these guidelines.

For more information on AI-use, please review the CSE 340: AI Policy.

Make your site look professional
Now that you have the basic functionality, the next step is to make your site look professional.

Complete the following:

Use AI to generate a professional layout for your site. Replace your old stylesheet in your public/css directory.
You may use any AI tool you would like.
You may find it helpful to include the HTML content of one of your pages in your prompt so that it can know the elements and classes you have defined. To get the complete HTML for your site, when you view your rendered EJS page in a browser, right-click and select View Page Source to get all of the HTML at once
The new CSS should be responsive and look good on both desktop and mobile devices.
Make sure the colors, fonts, and layout are professional and visually appealing.
Make sure the site meets accessibility standards (e.g., sufficient color contrast, readable fonts, etc.).
Look carefully at the CSS code that was generated. Make sure you understand and are comfortable with all of this code.
Deploy your updated site to Render and test it online.
Requirements
The following are the requirements for this assignment:

EJS Pages: Navigation and EJS pages exist for home, organizations, projects, and categories. The titles of these pages are EJS variables.
EJS Partials: Header and footer EJS partials are used on all pages. The header inserts the page title variable into the HTML title and the footer includes a copyright.
Static Files: CSS and images are in the public folder and render on the site. Server.js contains static middleware to serve the public folder.
Code Organization and Standards: The .env file is not present at GitHub. All code standards are followed including the following:
const is used where possible.
camelCase is used for all variables.
All functions should use arrow notation (const xxx = () -> {} )
Async/await is used rather than promises or callbacks
ESM export/import syntax is used.
<%= %> rather than <%- %> should be used for all EJS data except the header and footer partials.
Deployment and Professional Style: The site is deployed and working at Render.com. The CSS is professional in look and feel.
Score
In order to be marked complete and receive credit (100%), your assignment must meet all of the requirements. If any requirements are not met, your assignment will be marked incomplete (0%) and you will need to fix any issues and resubmit.

Why must the assignment be perfect to receive any points?
All future assignments will build on this initial site. If any part of this initial site is missing or incomplete, it will cause problems for future assignments. Therefore, it is critical that this initial site is fully complete before moving on.

In addition, when you are working as a software developer, this is the same expectation your company will have. If any of your requirements are not working correctly yet, you will need to fix them before you can move on to the next task.

Submission
Once you met the requirements, return to Canvas to submit the following:

The URL of your GitHub repository.
The URL of your deployed site on Render.
Other Links:

Return to: Week Overview | Course Home
Copyright © B

W01 Coaching Session
Overview
This assignment will give you a chance to articulate the principles of server-side programming, to demonstrate your knowledge of the code you have written, and to learn more about these principles.

Instructions
For this assignment you will have a coaching session with an AI agent. This will give you a chance to demonstrate your understanding of the topic of the week, the code you have written, and show that you are conversant in the terminology of the topic.

For this session, you may use any AI tool you would like. You will use the provided prompt to start your conversation. Then, the AI agent will ask questions and give you suggestions about your project.

After you have completed your conversation, you will upload a copy of your coaching session transcript to Canvas for review.

AI Instructions
Open your AI tool.
Copy and paste the entire prompt below. Do not change it in anyway.

Week 01 Coaching Session Prompt

### ROLE AND CORE INSTRUCTIONS

**Your Role:** You are my supportive and non-judgmental **Learning Coach and Software Mentor**.

**Primary Goal:** This session is a **learning activity, NOT a test.** Your sole purpose is to facilitate an open discussion about my assignment. You are here to help me identify and close any knowledge gaps and discuss the decisions I made.

**Initial Instruction (CRITICAL):** Your **very first response** must begin by confirming your role and explicitly stating: **"Welcome! Just to be clear from the start, this is a coaching session, not a test. It is perfectly okay—and even encouraged—to say 'I don't know' or 'I made a mistake.' That's the fastest way we'll learn today."**

**Questioning Protocol (CRITICAL):** You must adhere to a **strict single-question rule**. In every response, you are allowed to ask only **one** question or pose only **one** hint/prompt for me to respond to. Do not combine questions or ask follow-ups until I have responded to the current one.

**Follow-up Guidance:** If my response is brief or lacks detail, ask simple follow-up questions to help me explain my thinking more clearly.

**Transcript Requirement:** At the end of the session, save the full conversation, including everything I said and everything you said, to a downloadable `.txt` file.

### SESSION PROCESS AND REQUIREMENTS

The session should be conversational and allow me to lead with my questions, but you must ensure that **all four required topics** are covered during our time together.

1.  **Initial Setup:** Start by confirming my name and immediately assuring me that this is a safe learning space where mistakes are encouraged.
2.  **Code Access Protocol (Dual Mode):**
    * **If running in a chat interface (e.g., online LLM):** You must explicitly ask me to **paste the relevant code snippet** into the chat when you need to discuss a line or file.
    * **If running in a code editor environment (e.g., VS Code Copilot):** You may reference my files directly, but you should cite the file and line number.

### MANDATORY DISCUSSION TOPICS (The four areas you must guide me through)

You must ensure that our discussion covers the core ideas of each of these four technical topics listed below. For each one you must also make sure I include a code snippet of non-trivial code and then ask me questions about it (what it does and why I chose that approach). Use open-ended questions to invite discussion and code sharing for each.

| Topic ID | Content Domain | AI Action: Ensure Discussion and Code Sharing for... |
| :--- | :--- | :--- |
| **Topic 1** | **Express Routing** | Discuss the way Express routing works in the server.js file, supported by a relevant Node.js function snippet. |
| **Topic 2** | **JavaScript Language Principles** | Discuss JavaScript language principles, supported by a relevant JavaScript function snippet. |
| **Topic 3** | **EJS Partials and Pages** | Discuss EJS partials and EJS Pages, supported by a relevant EJS code snippet. |
| **Topic 4** | **Frontend CSS** | Discuss frontend CSS, supported by a relevant CSS code snippet. |

### SESSION CONCLUSION

The session should conclude naturally when we have finished discussing all four topics. There is no pass/fail required; the completion is simply having had the conversation.
Requirements
The coaching session should last at least 30 minutes.
You need to discuss each of the following topics:
Express Routing: Discuss the way Express routing works in the server.js file, supported by a relevant Node.js function snippet.
JavaScript Language Principles: Discuss JavaScript language principles, supported by a relevant JavaScript function snippet.
EJS Partials and Pages: Discuss EJS partials and EJS Pages, supported by a relevant EJS code snippet.
Frontend CSS: Discuss frontend CSS, supported by a relevant CSS code snippet.
For each topic, you need to share a code snippet.
If you do not have a meaningful discussion about those topics or do not share code snippets, the assignment will be marked incomplete, and you will need to complete those discussions and resubmit. If the AI agent does not lead you to discuss the things you need, you should directly ask the AI agent to talk with you about it.
When you are finished, download the entire conversation and save it as a .txt or .md file to upload to Canvas.
Submission
When you have finished this assignment:

Return to Canvas to submit your assignment.

W01 60-second Status Update
Instructions
At the end of each week you will take some time to reflect back on your learning for the week. Take some time to think about both the positive and negative experiences of the course this week. What things will you do differently next week?

In addition, this is a chance for you to report any concerns you have to the instructor. The instructor will review these reflections and use that information to respond to the class as a whole about topics that may need more discussion.

You will receive full credit for any submission, please respond thoughtfully.

Week 02: Database Interaction

Week 02: Database Interaction
Middle of Week
W02 Learning Activities
Database Review

W02 Learning Activity: Database Review
Overview
In this activity, you will prepare for working with databases by reviewing foundational concepts and familiarizing yourself with database management systems (DBMS). This preparation will help you understand how to design, implement, and interact with databases effectively in future lessons.

Preparation Material
Review Database Concepts from ITM 111
This course assumes you are familiar with databases from the earlier course, ITM 111, "Introduction to Databases." If you need to review that material, you can access it here:

Course Materials: ITM 111: Introduction to Databases
Why do we need databases?
In the context of web development, databases solve several critical problems:

Data Persistence: Information remains available even after server restarts or application crashes
Data Integrity: Rules can be enforced to ensure data remains accurate and consistent
Efficient Retrieval: Complex queries can be performed to find exactly the data you need
Concurrent Access: Multiple users can access and modify data simultaneously
Scalability: Well-designed databases can handle growing amounts of data and users
Without a database, your Express applications would lose all their data whenever the server restarts. User accounts, application state, and any information entered by users would disappear, severely limiting what your applications can do.

Relational Databases
Relational databases organize data into tables with rows and columns, similar to spreadsheets. Each table represents a specific type of entity (like users, products, or orders), and the rows represent instances of that entity. The columns define the attributes or properties that each instance has.

What makes relational databases powerful is their ability to establish relationships between different tables. This allows you to model complex real-world scenarios where different entities interact with each other.

Key Concepts in Relational Databases
The following are some fundamental concepts that form the foundation of relational databases.

Tables, Rows, and Columns
A relational database stores data in tables (also called relations). Each table has a name and consists of rows and columns:

Tables: Represent entities or concepts (for example, users, products, orders)
Rows: Represent individual records or instances (for example, a specific user)
Columns: Represent attributes or properties (for example, user_id, username, email)
Here is a simple example of what a "users" table might look like:


| user_id | username  | email               | join_date  |
|---------|-----------|---------------------|------------|
| 1       | johndoe   | john@example.com    | 2023-01-15 |
| 2       | janedoe   | jane@example.com    | 2023-02-20 |
| 3       | bobsmith  | bob@example.com     | 2023-03-05 |
Primary Keys
A primary key is a column (or a combination of columns) that uniquely identifies each row in a table. In the example above, the "user_id" column serves as the primary key, ensuring that each user record can be uniquely identified.

Primary keys are essential because they:

Ensure each record is unique within a table.
Provide a way to reference specific records.
Enable relationships between different tables.
Foreign Keys and Relationships
A foreign key is a column in one table that refers to the primary key of another table. This creates a relationship between the two tables, allowing you to model connections between different types of data. For example, if we have a "posts" table in a blog application, we might include a "user_id" column that references the "user_id" in the "users" table:


| post_id | title           | content                   | user_id |
|---------|-----------------|---------------------------|---------|
| 1       | First Post      | This is my first post!    | 1       |
| 2       | Hello World     | Hello to everyone!        | 2       |
| 3       | Database Intro  | Databases are important...| 1       |
In this example, the "user_id" column in the "posts" table is a foreign key that references the "user_id" primary key in the "users" table. This relationship links each post to the user who created it, allowing you to easily retrieve all posts by a specific user or identify the author of any post. When designing tables, it is common to define the foreign key either immediately after the primary key in the table definition or at the end of the column list. This helps clarify the structure and relationships within your database schema.

Relationships in Action
When modeling data for a web application, you will frequently need to express connections between different entities. For instance, in an e-commerce application, you might have customers who place orders for products. These relationships can be modeled with foreign keys connecting tables for customers, orders, and products.

Introduction to SQL
SQL (Structured Query Language) is the standard language for interacting with relational databases. It provides a set of commands for creating, modifying, querying, and managing data in a relational database system.

SQL was developed in the 1970s by IBM researchers and has since become the standard language for relational database management. It is designed to be both human-readable and powerful enough to handle complex data operations.

Basic SQL Operations
Here are some examples of common SQL commands that demonstrate these types of operations:

Creating a Table
The following SQL command creates a simple "users" table:


CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    join_date DATE
);
This command defines a table with four columns, specifying the data type for each column and adding constraints like PRIMARY KEY, NOT NULL, and UNIQUE to ensure data integrity. In this case, the "user_id" column is the primary key, which uniquely identifies each user, so there's no need to add a separate UNIQUE constraint. The "username" and "email" columns are marked as NOT NULL, meaning they must have a value when inserting a new record. The "email" column is also marked as UNIQUE, ensuring that no two users can have the same email address.

Inserting Data
To add data to a table, you use the INSERT command:


INSERT INTO users (user_id, username, email, join_date)
VALUES (1, 'johndoe', 'john@example.com', '2023-01-15');
Querying Data
The SELECT command retrieves data from one or more tables:


SELECT username, email
FROM users
WHERE join_date > '2023-01-01'
ORDER BY username;
This query selects the username and email of all users who joined after January 1, 2023, and sorts the results alphabetically by username.

Relationships Between Tables
Relational databases derive their power from the ability to establish relationships between tables. These relationships are implemented using foreign keys and help model real-world connections between different types of data.

One-to-One (1:1)
In a one-to-one relationship, one record in the first table is related to exactly one record in the second table.


        CREATE TABLE students (
            student_id SERIAL PRIMARY KEY,
            first_name VARCHAR(50) NOT NULL,
            last_name VARCHAR(50) NOT NULL
        );

        CREATE TABLE student_details (
            detail_id SERIAL PRIMARY KEY,
            student_id INTEGER UNIQUE,  -- Ensures one-to-one relationship
            address TEXT,
            phone VARCHAR(20),
            medical_notes TEXT,
            FOREIGN KEY (student_id) REFERENCES students (student_id)
        );
    
The UNIQUE constraint on student_id in the student_details table ensures that each student can have only one detail record.

One-to-Many (1:N)
In a one-to-many relationship, one record in the first table can be related to multiple records in the second table, but each record in the second table is related to only one record in the first table.


CREATE TABLE departments (
    department_id SERIAL PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL
);

CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    department_id INTEGER,
    FOREIGN KEY (department_id) REFERENCES departments (department_id)
);
In this example, one department can have many employees, but each employee belongs to only one department.

Many-to-Many (N:M)
In a many-to-many relationship, one record in the first table can be related to multiple records in the second table, and vice versa. This requires a junction table (also called a bridge or linking table).


CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    credits INTEGER
);

-- Junction table for the many-to-many relationship
CREATE TABLE enrollments (
    student_id INTEGER,
    course_id INTEGER,
    enrollment_date DATE DEFAULT CURRENT_DATE,
    grade CHAR(2),
    PRIMARY KEY (student_id, course_id),  -- Composite primary key
    FOREIGN KEY (student_id) REFERENCES students (student_id),
    FOREIGN KEY (course_id) REFERENCES courses (course_id)
);
In this example, one student can enroll in many courses, one course can have many students, and the enrollments junction table resolves this many-to-many relationship by creating two one-to-many relationships.

PostgreSQL
While SQL is the standard language for relational databases, different database management systems (DBMS) implement SQL in slightly different ways, with varying features and optimizations. In this course, you will use PostgreSQL, a popular, free, open source relational database management system.

PostgreSQL is often chosen for applications that require complex queries, data integrity, and scalability.

Activity Instructions
Practice database terminology by answering the following questions.

What is a primary key and why is it important?
Answer (click to expand)
A primary key is a column (or set of columns) that uniquely identifies each row in a table. It ensures record uniqueness, enables efficient indexing, and is used to establish relationships with other tables.

What is a foreign key and how does it support relationships?
Answer (click to expand)
A foreign key is a column in one table that references the primary key of another table. It enforces referential integrity and lets you join related data across tables (for example, linking posts to their author).

Describe one-to-one, one-to-many, and many-to-many relationships and how to implement each in a relational database.
Answer (click to expand)
One-to-one: each row in A maps to one row in B (enforce with UNIQUE on the foreign key). One-to-many: one row in A maps to many rows in B (B has a foreign key to A). Many-to-many: use a junction table with foreign keys to both tables (often a composite primary key).

Why do web applications typically need a database?
Answer (click to expand)
Databases provide data persistence across server restarts, enforce integrity rules, allow efficient querying, support concurrent access, and help scale applications as data and users grow.

What is an index and how does it affect query performance?
Answer (click to expand)
An index is a data structure (commonly a B-tree) that allows the database to locate rows quickly without scanning the whole table. Indexes speed up reads but add overhead to inserts/updates and consume extra storage, so choose columns to index carefully.

Explain the common types of SQL JOINs and when to use them.
Answer (click to expand)
INNER JOIN returns rows with matching keys in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right (NULL when no match). RIGHT JOIN is the opposite. FULL OUTER JOIN returns rows when either side matches. Use the appropriate join to express the required relationship in your query.

Next Step
Complete the other Week 02 Learning Activities

After you have completed all the learning activities for this lesson, return to Canvas to submit a quiz.

W02 Learning Activity: Creating and Connecting to your Database
Overview
In this activity, you will set up a PostgreSQL database for your web application.

Save for future reference
The free tier of the Render.com database service you will use in this course only allows your database to exist for a short period of time (one month). After it expires, you will need to delete it and re-create it using the instructions below.

Activity Instructions
Follow these steps to create a your database and establish a connection to it.

Create your PostgreSQL database
You will create a PostgreSQL database using Render.com, a cloud hosting service that provides free PostgreSQL databases for development purposes. You will use this database for the Node.js server running on your computer (127.0.0.1) and for the Node.js server hosted at Render.

Complete the following to create your database at Render.

In a browser, navigate to Render.com.
Login (if needed) by clicking the "Login" button in the top-right corner.
Click the GitHub option and provide your GitHub credentials as needed.
You should arrive at the dashboard.
Click the + New button in the top-right corner and select Postgres or PostgreSQL from the dropdown menu.
Fill out the form to create your database:
Name: Use a unique name for your database (for example, yourname_cse340_db).
Project: Select your project in the list. (It may be named "My Project" or something similar.)
Database: You may use the same name for your database or, if that is not allowed, use a slight variation.
User: (This is a username) Use the same name as your database to make it easy to remember.
Region: IMPORTANT!!! Select the same region that you selected when creating your webservice (usually the one closest to you).
PostgreSQL version: The default is fine.
Datadog API Key: Leave this empty.
Plan Options / Instance Type: Select the free plan.
Click the Create Database button at the bottom of the form.
Wait for the database to be created. This may take a few minutes.
Once the database is created, you will see it listed on your Render dashboard. Click on the database name to view its details.
In the database details page, locate the "Connection Info" section. Here, you will find the information needed to connect to your database, including the host, port, database name, user, and password.
Connect to your database using PGAdmin
Now that you have created your PostgreSQL database on Render, you need to connect to it using PGAdmin, a popular database management tool for PostgreSQL.

Creating the Connection
Complete the following to connect to your database using PGAdmin:

Open PGAdmin on your computer. If you do not have it installed, refer to the setup instructions provided in W01: Tools and Setup.
In PGAdmin, right-click on Servers in the left sidebar and select Register > Server... to open the connection dialog.
In the General tab, give your connection a meaningful name like "cse-340". This name is just for your reference and helps you identify the connection later.
Switch to the Connection tab.
Fill out the connection details using the information from your Render database.
Host name/address:
On the Render.com dashboard, select your database service. On the Info tab look for the Connections box to find the External Database URL item and click the Copy to Clipboard button.
The Database URL is a connection string that has many different pieces in it. Unfortunately, pgAdmin is not able to parse it directly, so you need to get the host name from it.
Return to the pgAdmin application and paste the URL into the "Host name / address" box. It will be in this format: postgres://username:password@host:port/databasename
From this URL, you want to keep everything after "@" symbol and before the last "/" symbol. This portion is the host name.
Highlight all characters in the string from the first character all the way to and including the "@" symbol. Delete these characters. The highlighted characters in the example string below illustrate what should be removed:
postgres://cse340db:odSoeaIrmf1bAz0hvCl4kH@dpg-cd4sj7hqpbpffhu0-a.oregon-postgres.render.com/cse340db
Move to the end of the remaining string. Highlight the forward slash "/" and all characters to the right. Delete these characters. The highlighted characters in the example string below illustrate what should be removed:
dpg-cd4sj7hqpbpffhu0-a.oregon-postgres.render.com/cse340db
Port: Use the default PostgreSQL port of 5432.
Maintenance database: This is the name of your database (the same as you used when creating it). You can find it on the Render.com connection details.
Username: This is the username you specified when creating the database (it is likely the same as your database name).
Password: Enter the password provided in the Connection Info section of your Render database details.
Save Password: Switch this option to On or check the box to save your password for future connections.
Click on the Parameters tab.
Verify that the SSL Mode is set to Require (select it if not already selected).
Click the Save button to create the connection.
Establish a Connection
Now that you have created the connection, you can connect to your database any time you need to.

In PGAdmin, locate the server you just created in the left sidebar under Servers.
Right-click on the server name and select Connect Server.
If prompted, enter your password (if you did not choose to save it earlier) and click OK.
To find this password, go to Render.com, log in and return to the database dashboard.
Scroll to the Connections information.
Find the Password field and click the Copy to Clipboard button.
You should now be connected to your PostgreSQL database hosted on Render.com. You can expand the server node to view your databases, schemas, and other objects.
Closing the Connection
On the Free tier that Render.com offers, it is important to not overuse time or resources. It is recommended that when you are done with your interaction between pgAdmin and the database server that the connection be closed.

In PGAdmin, right-click on the server name in the left sidebar.
Select "Disconnect Server" from the context menu.
Optional Video Walkthrough
While the following video may be helpful to see the steps in action, make sure to walk through the written instructions directly because there may be important steps that are not covered in the video.

Direct link: Creating and Connecting to a Database


Next Step
Complete the other Week 02 Learning Activities

After you have completed all the learning activities for this lesson, return to Canvas to submit a quiz.

W02 Learning Activity: Creating Tables and Inserting Data
Overview
In this activity, you will create the necessary tables for your PostgreSQL database and insert sample data into those tables. This will help you understand how to structure your database and populate it with initial data for testing and development purposes.

Preparation Material
Before you begin this activity, make sure you have completed the previous activity: Creating and Connecting to your Database. You should have a PostgreSQL database set up and be able to connect to it using PGAdmin.

Activity Instructions
As explained in previous activities, during this course you will be building a web application to track service organizations and their available service projects. For this part of the activity, you will create the table for Organizations and add data to it. Then, in future activities, you will add tables for Service Projects and Categories.

Determine the Database Details
In this application, Organizations should have the following information:

Unique identifier (organization_id)
Name
Description
Contact Email
Logo Filename
Think for a minute about the data types you will need for these and any constraints that are necessary.

Unique identifier:
Data Type: This should be an auto-incrementing integer. In PostgreSQL, this is referred to as Serial.
Constraints: This should be the primary key (and therefore cannot be null).
Name:
Data Type: This should be a variable character string with a reasonable maximum length (for example, VARCHAR(150)).
Constraints: This field should be required (NOT NULL) since every organization should have a name.
Description:
Data Type: This should be a text field to allow for longer descriptions.
Constraints: This field should be required (NOT NULL) to provide information about the organization.
Contact Email:
Data Type: This should be a variable character string with a reasonable maximum length (for example, VARCHAR(255)).
Constraints: This field should be required (NOT NULL) to ensure there is a way to contact the organization.
Logo Filename:
Data Type: This should be a variable character string with a reasonable maximum length (for example, VARCHAR(255)).
Constraints: This field should be required (NOT NULL) to ensure there is a reference to the organization's logo image file.
NOT NULL Constraints
For many of these fields, you might argue that this could be left empty, but it is often easier to start with tighter constraints and force the data to adhere to it, than it is to try to tighten them later.

At a company, these decisions should be made when the requirements are determined for the project, so you should not have to make this decision when you create the tables. But from a database perspective it is usually preferred to have as tight of constraints as possible to keep the data clean and consistent.

Create the table
Using the information above, create the SQL statement needed to create the organization table in your database. You can use the Query Tool in PGAdmin to execute the SQL statement.

Open PGAdmin and connect to your PostgreSQL database.
Open the Query Tool by right-clicking on your database and selecting Query Tool.
Enter the SQL statement to create the organization table based on the details provided above.
Remember: AI can be helpful
Remember that AI can be very helpful in creating the exact SQL statement you need to create a table like this. There are two important things to remember when using AI like this:

You should first design the table and determine the columns, data types, and constraints you need. So that you can supply a specific detailed list to AI.
You should verify the SQL statement that AI generates. If there are any parts of it that you do not understand, you should ask the AI to explain them, or look up the syntax directly yourself.
Example SQL Statement (click to expand)
Execute the SQL statement by clicking the Execute button (the triangle, play icon) or pressing F5.
Verify that the table has been created successfully by checking the Tables section under your database in PGAdmin. (Expand your database name, then Schemas, then public, then Tables. You may need to right-click Tables and select Refresh.)
Save this SQL query into a file in your project. In your src directory, create a new file named setup.sql. Copy and paste your Create Table query into src/setup.sql to save it for use in the future.
Important: Save this SQL statement
In addition to running this SQL statement in pgAdmin, make sure to save it in the src/setup.sql file. This is important in case you ever need to re-create your database in a new development environment.

This src/setup.sql file will be very important in the case of using a database at Render.com, because the free tier will require you to delete and recreate your database after one month.

In addition, when your project is graded, the src/setup.sql file will be used to evaluate your database design.

Insert Sample Data
Now that you have created the organization table, you will insert some sample data into it. This will help you test your database and ensure that the table is functioning correctly.

For this project, you should enter data for the following Organizations. Previously, you hardcoded information about these companies into your HTML/EJS pages, but now you will enter it into your database so these pages can be populated based on any data in the database, including new organizations that may be added in the future.

Your database should contain information on the following organizations:

BrightFuture Builders
Name: BrightFuture Builders
Description: A nonprofit focused on improving community infrastructure through sustainable construction projects.
Contact Email: info@brightfuturebuilders.org
Logo Filename: brightfuture-logo.png
GreenHarvest Growers
Name: GreenHarvest Growers
Description: An urban farming collective promoting food sustainability and education in local neighborhoods.
Contact Email: contact@greenharvest.org
Logo Filename: greenharvest-logo.png
UnityServe Volunteers
Name: UnityServe Volunteers
Description: A volunteer coordination group supporting local charities and service initiatives.
Contact Email: hello@unityserve.org
Logo Filename: unityserve-logo.png
Create the SQL insert statements you need to insert these organizations by typing them yourself or using AI to assist you.

Use the Query Tool in PGAdmin to execute the SQL insert statements to add the sample data to the organization table.

Open PGAdmin and connect to your PostgreSQL database.
Open the Query Tool by right-clicking on your database and selecting Query Tool.
Enter the SQL insert statements to add the sample data for the three organizations listed above. (Again, remember that AI can be very helpful here.)
Example SQL Statements to insert sample data (click to expand)
Execute the SQL statements by clicking the Execute button or pressing F5.
Add these SQL statements to your src/setup.sql file.
Important: Save these SQL statements
Remember to save these SQL statements into your src/setup.sql file so that you will have them in the future when you need to re-create your database.

Verify the Data Insertion
After inserting the sample data, you should verify that the data has been inserted correctly into the organization table.

In PGAdmin, open the Query Tool for your database.
Enter the following SQL query to retrieve all records from the organization table:
SELECT * FROM organization;
Execute the SQL query by clicking the "Execute/Refresh" button (lightning bolt icon) or pressing F5.
Review the results to ensure that all three organizations have been inserted correctly with the appropriate details.
Optional Video Walkthrough
While the following video may be helpful to see the steps in action, make sure to walk through the written instructions directly because there may be important steps that are not covered in the video.

Direct link: Creating Tables and Inserting Data


Next Step
Complete the other Week 02 Learning Activities

After you have completed all the learning activities for this lesson, return to Canvas to submit a quiz.

W02 Learning Activity: Connecting to Databases from Node.js
Overview
In this activity, you will connect your Node.js application to the PostgreSQL database you created in the previous activity. This will allow your application to interact with the database, enabling you to perform operations such as querying data and inserting new records.

Activity Instructions
Follow these steps to connect your Node.js application to your PostgreSQL database.

Gather the Database Connection Information
To connect to your database, you will need to gather the connection information (database host, username, password, etc.). To find this information do the following:

Log in to your Render.com account.
Navigate to the Databases section from the dashboard.
Select the PostgreSQL database you created for this course.
Locate the Connections information, find the External Database URL item, and click the Copy to Clipboard button. This URL contains all the information needed to connect to your database.
Prepare the libraries and configuration files
The following steps will walk you through installing the necessary libraries and setting up enviornment variables.

Install the pg library, which is a PostgreSQL client for Node.js. You can do this by running the following command in your project directory:
npm install pg
Update the .env file in the root of your project to securely store your database connection information. Add the following lines to the file:
DB_URL=...
ENABLE_SQL_LOGGING=true
Make sure to replace the ... with your actual database details from the External Database URL you found earlier on the Render.com dashboard.
Protect Your Database Credentials
Double-check that your .env file is listed in your .gitignore file. Database credentials are sensitive information that should never be committed to version control. Anyone with access to these credentials could potentially access or modify your database.

Create the Environment Variables at Render
Next, you need to set up the same environment variables on Render.com so that your deployed application can access the database as well.

Return to the Render.com dashboard for your project.
Select your web service application (not your database).
Go to the Environment tab.
Add a new environment variable named DB_URL and paste as the value the Internal Database URL from the database dashboard screen where you copied the External Database URL earlier (Click Edit in the Environment Variables section, then click + Add to add a new variable.) Alternatively, you can select Datastore URL from the +Add button menu and select the Database from the list provided.
Add another environment variable named ENABLE_SQL_LOGGING and set its value to true for debugging purposes.
Save the changes.
SQL Debugging
At some point in the future (certainly before you had active users on your website), you would change the value of your ENABLE_SQL_LOGGING environment variable to be false at Render, so that your application runs much more efficiently. However, at this point, the logging will be helpful as you track down bugs.

Create the Database Connection File
This section helps you create a file that will handle the connection to the database. It uses a connection pool approach to make the connection process as efficient as possible.

Connection Pooling
Creating a new database connection for every query would be extremely inefficient. Database connections require network handshakes, authentication, and resource allocation, which takes time and server resources. Connection pooling solves this by maintaining a set of reusable connections that can be shared across multiple requests.

When your application needs to run a query, it borrows a connection from the pool, executes the query, and returns the connection to the pool for reuse. This dramatically improves performance and reduces the load on your database server.

Debugging Information
In the code, you will notice that it adds some debugging logic. In short, it wraps the calls to the database so that when you are in debugging mode (in your .env you have set ENABLE_SQL_LOGGING=true), it will log every query to the console. This is very helpful when you are finding and fixing bugs. Then, when you are not in debugging mode (in your .env you have set ENABLE_SQL_LOGGING=false) the queries will be sent directly to the database with no extra steps for debugging.

Create the Database Connection File
In your src directory, create a new subdirectory named models. Then create a new file named db.js in the src/models/ directory of your project. This file will handle the database connection logic.

Copy and paste the following code snippet into db.js:


import { Pool } from 'pg';

/**
 * Connection pool for PostgreSQL database.
 * 
 * A connection pool maintains a set of reusable database connections
 * to avoid the overhead of creating new connections for each request.
 * This improves performance and reduces load on the database server.
 * 
 * Uses a connection string from environment variables for simplified setup.
 * The connection string format is:
 * postgresql://username:password@host:port/database
 */
const pool = new Pool({
    connectionString: process.env.DB_URL,
    ssl: true
});

/**
 * Common SSL Issue:
 *
 * You may encounter SSL connection errors depending on your operating system, Node.js
 * version, or PostgreSQL server settings. If you have confirmed your credentials are
 * correct but still see SSL errors, try updating the 'ssl' property in the Pool
 * configuration above to:
 *
 * ssl: {
 *     rejectUnauthorized: false
 * }
 */

/**
 * Since we will modify the normal pool object in development mode, we need to create and
 * export a reference to the pool object. This allows us to use the same name for the
 * export regardless of whether we are in development or production mode.
 */
let db = null;

if (process.env.NODE_ENV === 'development' && process.env.ENABLE_SQL_LOGGING === 'true') {
    /**
     * In development mode, we wrap the pool to provide query logging.
     * This helps with debugging by showing all executed queries in the console.
     * 
     * The wrapper also adds timing information to help identify slow queries
     * and tracks the number of rows affected by each query.
     */
    db = {
        async query(text, params) {
            try {
                const start = Date.now();
                const res = await pool.query(text, params);
                const duration = Date.now() - start;
                console.log('Executed query:', { 
                    text: text.replace(/\s+/g, ' ').trim(), 
                    duration: `${duration}ms`, 
                    rows: res.rowCount 
                });
                return res;
            } catch (error) {
                console.error('Error in query:', { 
                    text: text.replace(/\s+/g, ' ').trim(), 
                    error: error.message 
                });
                throw error;
            }
        },

        async close() {
            await pool.end();
        }
    };
} else {
    // In production, export the pool directly without logging overhead
    db = pool;
}

/**
 * Tests the database connection by executing a simple query.
 */
const testConnection = async() => {
    try {
        const result = await db.query('SELECT NOW() as current_time');
        console.log('Database connection successful:', result.rows[0].current_time);
        return true;
    } catch (error) {
        console.error('Database connection failed:', error.message);
        throw error;
    }
};

export { db as default, testConnection };

Take the time to read through this code and understand each line. If you do not understand something, ask AI to explain it to you.

Update the Main Server File to Test the Connection
Now that you have created the database connection and setup files, you need to update your main server file (server.js) to test the database connection when the server starts.

Open the server.js file in the root of your project.
After your other import statements at the top of the server.js file, add the following code to import the testConnection function from the db.js file:
import { testConnection } from './src/models/db.js';
Update the server startup code to call the testConnection function. Modify the app.listen section to look like this:
app.listen(PORT, async () => {
  try {
    await testConnection();
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
    console.log(`Environment: ${NODE_ENV}`);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
});
This updated code contains a few changes:

The app.listen function is now an asynchronous function, allowing it to use the await keyword.
The testConnection function is called before the server starts listening for requests.
A try-catch block is used, so that if the connection test fails, an error message is logged to the console.
Run and Test Your Application
Now that you have set up the database connection and updated your server file, it's time to run your application and test the connection to the database.

In your terminal, navigate to your project directory.
Start your Node.js server by running the following command:
npm run dev
Check the console output for messages indicating whether the database connection was successful. You should see a message like:
Database connection successful: [current_time]
If you see an error message, double-check your database connection details in the .env file and ensure that your database is running and accessible.
Stop and fix problems now
If you have run into problems with any of the steps in this assignment, you need to fix them and get everything working before moving on.

Searching the internet and asking AI can be very helpful. You can also post messages for your teammates or your instructor in Microsoft Teams.

Optional Video Walkthrough
While the following video may be helpful to see the steps in action, make sure to walk through the written instructions directly because there may be important steps that are not covered in the video.

Direct link: Connecting to Databases from Node.js


Next Step
Complete the other Week 02 Learning Activities

After you have completed all the learning activities for this lesson, return to Canvas to submit a quiz.

W02 Learning Activity: Displaying Database results in EJS
Overview
In previous activities, you have created a database, connected to it from your Node.js application, and created tables with sample data. In this activity, you will learn how to query the database from your Node.js application and render it using an EJS template.

Activity Instructions
Follow these steps to complete the activity:

Create a model file for Organizations
Create a new file src/models/organizations.js .
Add a function to query the database and get all the organizations, by adding the following code to the src/models/organizations.js file.
import db from './db.js'

const getAllOrganizations = async() => {
    const query = `
        SELECT organization_id, name, description, contact_email, logo_filename
      FROM public.organization;
    `;

    const result = await db.query(query);

    return result.rows;
}

export {getAllOrganizations}  
This code does the following:

Imports the database connection from the db.js file.
Defines an asynchronous function getAllOrganizations that queries the database for all organizations.
Returns the rows of the result if successful.
Exports the getAllOrganizations function so it can be used in other parts of the application.
Avoid Using SELECT *
Notice that this SELECT statement explicitly lists the column names, rather than using SELECT *. If you use SELECT * you may retrieve unnecessary data, which can impact performance and security. For example, in the future additional columns may be added to the table that you do not want to expose in your application. For this reason, it is a good practice to explicitly specify the columns you need.

Note on Models
In a future lesson you will learn more about the Model-View-Controller pattern and how models help to organize your project.

The important thing to know right now is that all code that works with organizations and getting them from the database should be in the organizations.js file. Then, you will also create other files in the models directory for the other entities in your database.

Use the model function in server.js
In src/server.js, import the getAllOrganizations function, aft the other imports at the top of the file:
import { getAllOrganizations } from './src/models/organizations.js';
Next, use the getAllOrganizations function to get the list of organizations.
Find the event handler for the organizations route.
Make sure the event handler is asynchronous, by ensuring the async keyword is present before the function parameters.
Inside the event handler, call the getAllOrganizations function using the await keyword and store the result in a variable named organizations.
For now, add a console.log statement to print the organizations variable to the console.
The route handler should now look as follows:

app.get('/organizations', async (req, res) => {
    const organizations = await getAllOrganizations();
    console.log(organizations);
      
    const title = 'Our Partner Organizations';
    res.render('organizations', { title });
});
Test the query
Start your Node.js application by running npm run dev in your terminal.
Open a web browser and navigate to http://127.0.0.1:3000/organizations to trigger the event handler.
Check the terminal where your Node.js application is running. You should see the list of organizations printed to the console.
If you see the list of organizations, congratulations! You have successfully queried the database from your Node.js application.
Stop here if you have problems
If you are unable to get the list of organizations printed to the console, you should stop here and get it working before proceeding.

Update server.js to pass the organizations to the EJS template
Now that you have tested the query and verified that you can get the information from the database and display it to the console, you can update your server.js file so that instead of displaying it to the console, you can pass the data to your EJS template to render it.

In the event handler for the organizations route in src/server.js, remove the line of code that displayed it to the console. Instead, pass it to the EJS template by updating the res.render call.

The route handler should now look as follows:

app.get('/organizations', async (req, res) => {
    const organizations = await getAllOrganizations();
    const title = 'Our Partner Organizations';

    res.render('organizations', { title, organizations });
});
Notice that you are passing the organizations list to the template so it has access to it.

Display the results in EJS
Now it is time to display the results in your EJS template.

Open the EJS template file for the organizations page. This file should be named src/views/organizations.ejs
In the EJS template file, use a loop to iterate through the organizations variable and display the organization names and contact emails.
Make sure to display all the appropriate information for the organization. You will need to update the image src location to insert the logo file from the database.
EJS Code Example (click to expand)
Test the EJS rendering
First test the EJS rendering in your development environment.

Start your Node.js application by running npm run dev in your terminal (if it is not already running).
Open a web browser and navigate to http://127.0.0.1:3000/organizations to view the organizations page.
You should see the list of organizations displayed on the page, including their names, descriptions, contact emails, and logos.
Deploy and test
Finally, deploy your updated code to Render.com and test it in the deployed environment.

Push your changes to GitHub.
Render.com should automatically deploy your updated code.
Once the deployment is complete, open a web browser and navigate to your organizations page at the deployed Render site.
You should see the list of organizations displayed on the page, just like in your development environment.
Optional Video Walkthrough
While the following video may be helpful to see the steps in action, make sure to walk through the written instructions directly because there may be important steps that are not covered in the video.

Direct link: Displaying Database Results in EJS


Submission
Congratulations! You have now completed all of the learning activities for this week.

To submit this activity, return to Canvas and submit the associated quiz there.

Other Links:

W02 Team Activity: Database Entities for Service Projects
Overview
For this team activity, you will meet for a 1-hour synchronous team meeting using Microsoft Teams video sharing.

Please make every effort to attend this meeting. If you cannot attend, you must complete the Absent from Meeting Checklist.

In this activity, you will work with your team to add Service Projects to your individual projects, from the database all the way through display in an EJS page.

Activity Instructions
Before the Meeting
Before the meeting begins, each person should individually do the following:

Complete all of the Learning Activities for this week.
For the meeting, follow these steps.

Determine the Leader for the Meeting
Choose one person that will be the leader for this meeting. Their role will be to help guide the rest of the team through the steps of the meeting. Try to rotate so that each person gets a chance to be the leader of at least one meeting.

Group Discussion
Throughout this activity, you will see group discussion question boxes like this one. The leader for the meeting should ask these questions, and you should discuss them as a group. After the activity, there will be a quiz question very similar to each discussion question.

Begin with Prayer
One person on the team should begin the meeting with a prayer.

Code Review (10 minutes)
Select one person to share their screen and share some of their code from the last week. (Try to rotate so that each person gets a chance to share at least once during the course.)

What was particularly well done or interesting?
Do you have any suggestions for improvement?
Understand the Requirements
In the learning activities, you added Organizations to your application. For this activity, you will add Service Projects according to the following specifications:

Every Service Project should relate to a single Organization that sponsors it.
Each Service Project should have the following information:
Project ID
Organization ID (of the organization that sponsors it)
Title
Description
Location
Date
Add service projects to the database
The first step is to design your table(s) and add it to the database.

Questions to discuss:

What table(s) do you need to create?
What columns should be in each table?
What data types should each column be?
What constraints should you add to each column?
Once you have discussed and agreed on the design, each person should complete the following steps (it may be helpful for one person to share their screen):

Create the table(s) in the database.
Insert at least 5 sample service projects for each organization in your database (assuming you have at least 3 organizations, that is at least 15 projects).
Remember: AI can be helpful
Remember that AI can be very helpful in generating SQL for both the Create Table scripts as well as the scripts to insert the data.

If you have AI generate SQL for you, make sure to carefully review each line to ensure that you understand everything in your commands. If there is something in the SQL that you don't understand, ask AI to explain it.

Verify that the data has been inserted correctly by running a SELECT statement on the table.
Add your SQL commands to your src/setup.sql file so that you can re-create your database in the future.
Group Discussion
What would happen if you included the organization_id column in the project table, but did not include a foreign key constraint for it?
Update the Application Code
Update your Node.js application code to retrieve and display the service projects. You will need to complete the following:

Create a file src/models/projects.js and add a function to get all projects along with their organization names (this will require a join).
Hint: Make sure to follow the example of src/models/organizations.js that you completed in a learning activity.

Add a call to that function in server.js and display the results to the console to verify it is working.
Group Discussion
What are the benefits of separating the code that performs the database query into its own module (for example, src/models/projects.js) instead of keeping database queries directly in server.js?
Update the Service Projects EJS page
Update the service projects EJS page to display the service projects along with their organization names.

Update the route in server.js to call the getAllProjects() to get the Service Project and send it to the rendering of the EJS page.
Update the EJS page views/projects.ejs to display the projects along with the organizations.
On the EJS page, iterate through the list of projects and for each one, display the project title and the organization name in the format: Date: Project Title (Organization Name).
Make sure to format the date in a user-friendly way.
Group Discussion
What is the difference between EJS tags: <%= ... %> and <%- ... %>? When should each be used?
Deploy and Test
Once you have everything working, deploy your code to your hosting server and verify that it works there.

Submission
Once you have finished this activity, return to Canvas to submit a quiz.

W02 60-second Status Update
Instructions
At the end of each week you will take some time to reflect back on your learning for the week. Take some time to think about both the positive and negative experiences of the course this week. What things will you do differently next week?

In addition, this is a chance for you to report any concerns you have to the instructor. The instructor will review these reflections and use that information to respond to the class as a whole about topics that may need more discussion.

You will receive full credit for any submission, please respond thoughtfully.

Submission
Return to Canvas to submit your reflection.



Week 03: The Model-View-Controller Pattern
Week 04: Inserting and Updating Data
Week 05: Authentication and Authorization
Week 06: Final Feature Work
Week 07: Conclusion

