# Quiz Answers: Software Development Part 2

## Question 1
**Correct Answer: B**
* **Explanation**: In a DevSecOps model, security is integrated directly into the development and operations lifecycle via automation. Operations engineers configure infrastructure-as-code using tools like YAML templates, embedding security checks into these templates. Developers use automated security testing tools directly within the Continuous Integration/Continuous Deployment (CI/CD) pipeline. This collaborative approach ensures that security is baked into both the code and the deployment infrastructure.
* **Incorrect Answers**:
  * A is incorrect because security is distributed across the entire development and operations lifecycle in DevSecOps, rather than being siloed in a separate QA team.
  * C is incorrect because operations engineers do not manually inspect all code in a DevSecOps pipeline; instead, they rely on automated scanners. Restricting developers completely from testing cloud environments goes against DevOps principles.
  * D is incorrect because bypassing change management increases security risks and violates regulatory compliance, which is contrary to DevSecOps goals.

## Question 2
**Correct Answer: C**
* **Explanation**: API authentication should rely on short-lived, temporary tokens or dynamically managed API keys. Hardcoding credentials in source code creates a severe risk of secret sprawl (where credentials are leaked in repositories). Storing credentials in a secure secrets management vault, rather than in public code files, prevents unauthorized access and limits the window of exposure if a token is compromised.
* **Incorrect Answers**:
  * A is incorrect because using standard interactive credentials (username/password) without MFA programmatically is insecure and prone to brute-force attacks or exposure.
  * B is incorrect because storing long-lived credentials in repositories (public or private) is a major vector for security breaches due to secret sprawl.
  * D is incorrect because disabling API authentication entirely leaves the system open to anyone who can query the API.

## Question 3
**Correct Answer: A**
* **Explanation**: Atomicity (the "A" in ACID) dictates that database transactions are "all-or-nothing" operations. If any part of the transaction fails (such as the server crashing before the second update is recorded), the entire transaction is rolled back as if it never happened, preventing partial updates that would compromise data integrity.
* **Incorrect Answers**:
  * B is incorrect because Consistency requires that a database only transition from one valid state to another, maintaining constraints and key relationships, but does not specifically dictate the all-or-nothing rollback mechanism.
  * C is incorrect because Isolation prevents concurrent transactions from seeing each other's intermediate or uncommitted states.
  * D is incorrect because Durability guarantees that committed data is written to non-volatile storage and will survive crashes, but it does not dictate how uncommitted transactions are rolled back.

## Question 4
**Correct Answer: C**
* **Explanation**: In security terms, aggregation is the gathering of low-sensitivity data points (such as employee counts and average salaries). Inference is the act of using low-sensitivity, aggregated data to deduce (infer) high-sensitivity information (such as the CEO's specific salary). When aggregate views return very small sample sizes (such as a department with a count of 1), the risk of inference increases dramatically.
* **Incorrect Answers**:
  * A is incorrect because database contamination occurs when data of different security classifications is mixed together inside the tables without isolation, whereas here a view was used specifically to filter out PII, but it failed to prevent inference.
  * B is incorrect because using views is a standard database administration method for restricting access; it is not a SQL bypass.
  * D is incorrect because durability and race conditions refer to transaction reliability and timing issues, not data deduction.

## Question 5
**Correct Answer: C**
* **Explanation**: Gray box testing is a hybrid approach. The tester has some knowledge of the internal workings (e.g., they have the source code and design schema to craft specific inputs), but they test the software by interacting with its external interfaces (like sending payloads to an API) without tracing the execution of the code line-by-line as they would in white box testing.
* **Incorrect Answers**:
  * A is incorrect because white box testing involves having complete internal visibility and tracing code execution line-by-line during test execution (e.g., under a debugger or running unit tests).
  * B is incorrect because in black box testing, the tester has no design docs or source code files and must interact with the system blindly as an external user.
  * D is incorrect because static code analysis involves using tools to parse code files without executing the application, whereas this tester is interacting with a running application's API.
