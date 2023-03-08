### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JWT stands for Json Web Token. It is a method for handling authorization & authentication.

- What is the signature portion of the JWT?  What does it do?
  The signature portion of JWT is when the server generates a JWT to be sent to a client. When a server generates a JWT, it creates it using 3 parts: the payload, secret key, and jwt options. The payload is the data that will be encoded into the token, while the secret key is used in the actual encoding of the data.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes, JWT is encoded but not enciphered.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  Describe how it works at a high level. When a user signs in, the server encodes and sends the JWT to the client, which the client then stores locally. When the client makes subsequent requests, it submits this JWT to authenticate/authorize those requests.

- Compare and contrast unit, integration and end-to-end tests.
  Unit tests test individual methods and functions. They are the most straight forward to setup, have a narrow scope, and only test individual components of a program. Integration tests test how parts of the program interact and if they produce the expected output. They are a more difficult to setup but help to test large parts of a program together. End-to-end tests test if a program can execute a pre-defined set of commands. They are difficult to setup but the only one of the three that can test a specific use case of a program.

- What is a mock? What are some things you would mock?
  A mock is a way of testing a program where some inputs/outputs are imitated so that those (predefined) values can be used to test other parts of the program, so that the testing is not dependent on an input that may not be working.

- What is continuous integration?
  A methodology of development where small code changes are uploaded frequently and (usually) automatically tested before "building" a completed program. A build can pass all the tests, or fails one ore more tests and will be considered "broken'.

- What is an environment variable and what are they used for?
   It is a variable specific to the environment a program is running and can be used to run the program in different modes, etc. Environment varibles might be used to specify the port a website will use, secret keys &work factors for authentication, or to specify whether to use a test or development database.

- What is TDD? What are some benefits and drawbacks?
  Test driven development is a methodology for developing a program where tests are written and the corresponding program is written to fulfill those test parameters. A benefit is that it forces developers to plan ahead and spec out the program in a detailed manner, preventing scope creep and focusing development goals. A drawback is that it is time consuming and oftentimes difficult to predict exactly how the program will function.

- What is the value of using JSONSchema for validation?
  JSONSchema helps to validate incoming data, reducing the workload to code validations manually, and reducing mistakes related to data submission.

- What are some ways to decide which code to test?
  Tend towards testing routes and APIs instead of the DB directly.

- What does `RETURNING` do in SQL? When would you use it?
  It is a command to output a value when running queries that do not return an output by default. It can be used when creating, updating, and deleting records to return some information about the query that was run.

- What are some differences between Web Sockets and HTTP?
  Web sockets is a protocol that is state-ful and a lightweight way to update data in real time. HTTP is stateless and not as lightweight of a protocol.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I prefer Flask because it can easy to organize the file than Express. In Express, I have to make a multiple files that make me hard to understand
