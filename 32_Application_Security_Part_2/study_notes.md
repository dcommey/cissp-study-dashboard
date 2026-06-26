# CISSP Study Notes: Application Security Part 2 (Application Attacks and Controls)

## 1. Memory and Resource Vulnerabilities

Creating software that can withstand application-level attacks requires understanding how code interacts with system memory and resources.

### Buffer Overflow
A buffer overflow occurs when an application writes more data to a memory buffer than is allocated. 
*   **Mechanics**: If the application fails to perform input size checks, excess data overrides adjacent memory. Attackers can leverage this to overwrite execution paths, inject malicious shellcode, bypass authentication, disable **DRM** (Digital Rights Management) checks, install backdoors, or execute commands.
*   **Integer Overflow**: Occurs when a mathematical operation (e.g., \\(x + 1\\)) exceeds the maximum limit of a variable type.
    *   *Unsigned Integers*: Roll back to zero (similar to an odometer).
    *   *Signed Integers*: Use the first bit to represent the sign (0 for positive, 1 for negative). Adding 1 to the maximum positive value (e.g., +127 in an 8-bit signed integer) overflows the value to negative (e.g., -128), leading to erratic behaviors like negative pricing during e-commerce checkouts.

### Memory & Resource Management Best Practices
*   **Null Pointer De-referencing**: A pointer is a memory address storing the location of another resource. If a program attempts to de-reference a pointer that is null (zero), the application will crash. Attackers deliberately trigger null pointer exceptions to cause application crashes, hoping the system fails open (bypassing the active **policy** control) during reboot.
*   **Resource Starvation & Memory Leaks**: 
    *   High **CPU** and memory usage can lead to timeouts and application instability.
    *   *Memory Leaks*: Occurs when applications fail to release allocated memory back to the operating system. Over time, this exhausts resources, crashes the app, and risks exposing cleartext memory contents to attackers who gain **physical** or logical access.

---

## 2. Race Conditions & Privilege Escalation

*   **Race Conditions**: Occurs when multiple parallel execution threads attempt to access or modify a shared resource (like a database or file) without coordination. Programs must use locking mechanisms like mutexes or semaphores to maintain data **integrity**.
*   **Time of Check / Time of Use (TOC / TOU)**: A race condition where a program checks a resource's state and uses it, but the state changes between the check and use. 
    *   *Example*: Two credit cards linked to one account attempting simultaneous **ATM** withdrawals of $100 from a $100 balance. If the system checks both cards before executing either debit, both withdrawals succeed, leading to a negative balance.
    *   *Mitigation*: The check and change must be executed as a single, indivisible (atomic) operation.
*   **Privilege Escalation**: A post-compromise technique where a hacker uses a low-level **user** account foothold to exploit other **vulnerability** classes (e.g., buffer overflows, dumping password hashes, or running offline rainbow tables) to gain root or administrator access.

---

## 3. Injection Attacks & Request Forgeries

### Code Injection
The generic act of submitting executable code (e.g., **XML**, **JSON**, or HTML) or OS shell commands (via **CMD**, PowerShell, or Bash) into input fields that are not designed to process code. Attackers use **URL** encoding or Base64 encoding to obfuscate payloads.

### SQL Injection (SQLi)
Injecting database queries into input fields to manipulate the database.
*   **Authentication Bypass**: Entering `' OR 1=1 --` into a username field forces the query logic to evaluate to true and comments out the password check.
*   **Blind SQL Injection**: An attack used when database error messages are hidden. Attackers deduce database structure through trial-and-error by observing server behavior (e.g., blank pages) or implementing time delays (e.g., using `wait for delay` functions in **SQL** servers).
*   **Mitigations**:
    *   *Parameterized Queries*: Preparing the query structure as a functional object within the application before inserting user parameters, avoiding string concatenation.
    *   *Stored Procedures*: Queries pre-compiled and stored on the database server itself. The web app calls the **procedure** by name and passes parameters, preventing input from altering query execution.

### Cross-Site Scripting (XSS)
Injecting malicious HTML or JavaScript into a trusted website, targeting client-side browsers.
*   **Reflected XSS**: The malicious script is embedded inside an **HTTP** request (usually a link sent via email, **SMS**, or instant message) and is reflected back to the victim’s browser, executing immediately.
*   **Stored / Persistent XSS**: The script is saved to the website's database (e.g., comment sections, review forums) and is executed by every user who views the page.

### Request Forgeries
*   **Cross-Site Request Forgery (CSRF)**: Exploits the trust relationship a web application has with a user's browser. If a user has an active authenticated session on a shopping site, clicking a malicious link on a different website can force the browser to send unauthorized commands (e.g., purchase orders) using the active cookie.
*   **Server-Side Request Forgery (SSRF)**: Exploits the trust relationship between a web server and internal back-end resources or APIs. Attackers supply a URL that forces the server to retrieve local files or query internal APIs on the attacker's behalf.

---

## 4. Web & Database Security Controls

*   **Input Validation**: The primary **mitigation** for injection attacks.
    *   *Whitelist / Allowlist*: Explicitly defining allowed formats, lengths, and character sets (e.g., **aski** / **aski** / **ASI** alphanumeric characters typed on a standard keyboard).
    *   *Blacklist / Denialist*: Blocking known bad characters (e.g., script tags).
    *   *Canonicalization*: Normalizing input paths to absolute paths to prevent directory traversal (`../` directory traversal attempts to read files like `/etc/passwd`) and file inclusion attacks (**LFI** and **RFI**).
*   **Web Application Firewall (WAF)**: A Layer-7 aware firewall that inspects HTTP headers, cookies, and payloads to identify and block **XSS** and SQL injection attempts.
*   **Database Firewalls**: Firewalls specifically designed to monitor database traffic.
*   **Database Data Protection**:
    *   *Data Minimization*: Storing only necessary information (e.g., replacing credit card numbers with the last 4 digits).
    *   *Tokenization*: Replacing sensitive **PII** (Personally Identifiable Information) with randomly generated tokens, storing the actual data in a secure database accessible only to authorized users.

---

## 5. Software Development Lifecycle Controls

*   **Code Signing**: Digitally signing code using a **PKI** (Public Key Infrastructure) certificate. This allows operating systems to verify the authenticity and integrity of the code before execution.
*   **Third-Party Code Security**: Organizations must evaluate the trustworthiness of open-source libraries, GitHub repos, and **SDK** examples before importing them into production systems. 
*   **Secure Coding Best Practices**:
    *   *Comments*: Maintain code readability but remove comments before compilation to prevent attackers from analyzing logical structures.
    *   *Error Handling*: Implement catch-all exception blocks. Production apps must return generic error messages. Verbose logs (containing database schemas, stack traces, or memory dumps) represent a major **breach** risk.
    *   *Credentials Management*: Never hardcode credentials, **API** keys, or cryptographic secrets into source files or Git repositories.
    *   *Scalability & Elasticity*: Applications must scale up (adding power) or out (adding instances) elastically across hybrid, on-premise, and cloud hosts while maintaining **management** control and security.

---

## 6. CISSP Exam Tips (Manager/Governance Perspective)
*   **Fail Secure vs. Fail Open**: If an application crashes, it must fail secure (block access) rather than fail open (grant access).
*   **Security through Obscurity**: Hiding resources or paths without access control is not security. Implement strict role-based access control and **authorization** checking for all objects.
*   **CCIE vs. CISSP Mindset**: For the **CISSP** exam, you do not need to write buffer overflow exploits or configure a web server like a **CIS** admin; you must understand the risk, govern secure coding practices, and implement architectural controls (WAFs, PKI, input validation, and procedures).
