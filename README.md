# About

This is a demo api used to support loxley-client web application. It is build with Node.js using the following project structure with app.js starting point and following code structure:

Project  
├───.elasticbeanstalk - AWS Elastic Beanstalk configuration  
├───cfg - Configuration files for different environments: def, test and prod (not added to git)  
├───fixtures - test data  
├───src - contains the logic  
│   ├───db - db initialization code  
│   ├───middleware - code related to the express middleware modules, like handling authorization headers  
│   ├───models - code that communicates with the db  
│   ├───routers - code that creates the API routes in the express app  
│   ├───services - code that handles use cases that arrive to the API, like register user, create stock etc  
│   │   ├───stock - stock related use cases  
│   │   └───user - user related use cases  
│   └───utils - utility modules, like token generation, password encrypting etc  
└───__tests__ - contains the tests for the code, with similar dir structure as src  
    ├───models - tests of models  
    ├───services - tests for services  
    └───utils - tests for utils  


This is not a complete solution, it mostly just has examples of each part of the system. Some decisions, like fixtures dir are here because I haven't figured out yet how to do it correctly. 