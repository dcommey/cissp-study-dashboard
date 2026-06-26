# Quiz: Software Development Part 2

## Question 1
A financial company is moving from a traditional software development lifecycle to a DevSecOps model. Under this new model, the operations team uses automation scripting and infrastructure-as-code configuration files to deploy virtual servers. How does the integration of security in DevSecOps alter the responsibility of the operations and development teams?

- [ ] A. Security becomes the sole responsibility of a specialized QA team, separating development from operations.
- [ ] B. Operations engineers write security validation scripts directly into YAML configuration templates, and developers integrate automated security scanning tools into the CI/CD pipeline.
- [ ] C. Developers are prohibited from accessing cloud environments, and operations engineers manually review all source code for security vulnerabilities.
- [ ] D. The change management process is bypassed to allow developers to push code directly to production without testing.

## Question 2
An administrator needs to secure programmatic access to a cloud-based application API in AWS that manages critical infrastructure, including DNS records and virtual servers. The API is called programmatically by multiple automated scripts. What is the most secure method for managing API authentication and preventing credential compromise?

- [ ] A. Hardcode the administrator's primary username and password in the scripts so they can authenticate via the API's standard user portal.
- [ ] B. Use long-lived static API keys stored in a public repository so that they can be easily version-controlled.
- [ ] C. Utilize temporary, short-lived security tokens or dynamic API keys managed through a secure secrets management vault, and prohibit hardcoding secrets in source files.
- [ ] D. Configure the API to disable authentication entirely, relying instead on security through obscurity.

## Question 3
During a database transaction that transfers money from Account A to Account B, the application first subtracts $500 from Account A. Right before the database can write the $500 addition to Account B, a sudden power failure causes the database server to crash. When the database server restarts, the database engine rolls back the transaction, restoring the original balance to Account A. Which property of the ACID model does this roll-back behavior demonstrate?

- [ ] A. Atomicity
- [ ] B. Consistency
- [ ] C. Isolation
- [ ] D. Durability

## Question 4
An organization restricts access to employee records containing Personally Identifiable Information (PII) to HR staff. To allow a business analyst to perform statistical reporting without exposing PII, the database administrator creates a database view that aggregates salary data by department. The analyst queries the view and sees that the executive department has an employee count of 1 and an average salary of $350,000, allowing them to determine the exact salary of the CEO. What security issue and risk does this scenario illustrate?

- [ ] A. The analyst committed database contamination by mixing HR data with statistical queries.
- [ ] B. The analyst utilized a view, which is an unauthorized bypass of SQL integrity constraints.
- [ ] C. The database view represents an aggregation function that allowed the analyst to perform an inference attack to deduce sensitive information.
- [ ] D. The scenario represents a failure of database durability, resulting in a race condition.

## Question 5
A security auditor is performing security testing on a web application. The auditor is provided with the application's API documentation, data schemas, and a copy of the source code to help design highly targeted test cases. However, during execution, the auditor does not debug the code line-by-line; instead, they send malformed JSON payloads to the application's API endpoints and evaluate the responses. Which type of testing is this auditor conducting?

- [ ] A. White box testing
- [ ] B. Black box testing
- [ ] C. Gray box testing
- [ ] D. Static code analysis
