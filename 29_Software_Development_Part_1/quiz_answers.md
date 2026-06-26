# Quiz Answers: Software Development Part 1

## Question 1
**Correct Answer: B**
* **Explanation**: Human safety is the absolute highest priority in security design. Under power loss, physical exit doors must "fail open" to ensure occupants can escape, even if it temporarily compromises physical security. Conversely, logical systems (such as databases containing sensitive data) should "fail secure" (or close down in a controlled state) to protect the confidentiality and integrity of the data from unauthorized access or corruption. Therefore, the smart-card system failed open, and the database server failed secure.
* **Incorrect Answers**:
  * A is incorrect because the database server did not fail open; it underwent an orderly shutdown to restrict unauthorized access, which is failing secure.
  * C is incorrect because it swaps the two systems' states; card readers failing secure would lock occupants inside, violating human safety principles.
  * D is incorrect because they did not both fail secure; the smart-card readers failed open.

## Question 2
**Correct Answer: B**
* **Explanation**: The OWASP Software Assurance Maturity Model (SAMM) is a security-specific maturity framework designed to help organizations formulate and implement a strategy for software security. It defines five core business functions: Governance, Design, Implementation, Verification, and Operations. While CMMI measures general software process maturity, OWASP SAMM is specifically tailored to software security assurance.
* **Incorrect Answers**:
  * A is incorrect because CMMI (Capability Maturity Model Integration) evaluates general software engineering and organizational process maturity, not specific security assurance tasks.
  * C is incorrect because the Agile Manifesto is a set of development values and principles, not a maturity assessment framework.
  * D is incorrect because the SDLC Waterfall model is a linear software development lifecycle methodology, not a maturity model.

## Question 3
**Correct Answer: B**
* **Explanation**: Client-side validation is a useful tool for user experience and reducing server load by checking simple mistakes before transmission, but it cannot be trusted for security because attackers can easily bypass client-side code (e.g., by using tools like curl or proxy interceptors to send malicious requests directly to the server). Input validation must always be performed on the server side (server-side validation) to ensure that logical security controls are enforced before processing user input.
* **Incorrect Answers**:
  * A is incorrect because using a compiled language for client-side code does not prevent an attacker from bypassing the client-side environment entirely.
  * C is incorrect because runtime environments like the JVM provide execution sandboxing but do not protect databases from SQL injection if input is not validated by the application.
  * D is incorrect because SQL injection is prevented by logical controls (proper server-side input validation and parameterized queries), not physical controls.

## Question 4
**Correct Answer: B**
* **Explanation**: Even for emergency patches, change management processes must be maintained to prevent introducing new vulnerabilities or breaking existing application integrity. The correct process involves Request Control (getting approval), Change Control (analyzing, testing in an isolated environment, and performing regression testing to ensure other components aren't broken), and Release Control (verifying the final code, checking for debug hooks or hardcoded accounts, and performing UAT before deploying).
* **Incorrect Answers**:
  * A is incorrect because bypassing change control introduces a high risk of breaking system functionality or introducing new, severe security flaws.
  * C is incorrect because deploying to production before testing and documentation bypasses change controls and regression testing.
  * D is incorrect because UAT should never be performed using live production traffic without validation and verification in a test environment first.

## Question 5
**Correct Answer: C**
* **Explanation**: Virtual machines and runtime environments, such as the Java Virtual Machine (JVM) in the JRE, or the Common Language Runtime (CLR) in the .NET framework, execute intermediate bytecode within a managed, isolated environment (a sandbox). This sandbox controls memory access, handles exceptions gracefully, and prevents errors from compromising the host operating system, while also providing cross-platform portability.
* **Incorrect Answers**:
  * A is incorrect because executing assembly language directly on the CPU (using instructions like `add` and `jmp`) is highly platform-dependent and provides no built-in sandboxing or automatic memory management.
  * B is incorrect because raw interpreted scripting languages do not typically run in a highly secure sandbox by default without additional system wrappers.
  * D is incorrect because direct OS-specific compiled binaries run natively on the operating system and have direct access to system memory, meaning a crash or buffer overflow could easily compromise the host system.
