# CISSP Practice Quiz Answers - Video 32: Application Security Part 2

Here are the correct answers and detailed explanations for the Video 32 quiz.

---

### Question 1
**Correct Answer: B**

*   **Explanation**: An integer overflow occurs when an arithmetic operation attempts to store a value larger than the maximum limit of the allocated variable type. In an 8-bit signed integer, values range from -128 to +127. If the application processes a value of 128 (binary 10000000), it interprets the sign bit as 1, which represents -128, producing a negative number.
*   **Why others are incorrect**:
    *   *A is incorrect* because buffer overflows involve writing beyond the physical boundary of an allocated buffer in memory, whereas here the value stays within the variable boundary but overflows its mathematical range.
    *   *C is incorrect* because null pointer de-referencing involves accessing memory using an empty pointer, resulting in a crash.
    *   *D is incorrect* because SSRF involves forcing a server to perform HTTP requests to unauthorized destinations, which is not described.

---

### Question 2
**Correct Answer: B**

*   **Explanation**: This scenario describes a Time of Check / Time of Use (TOC/TOU) race condition. The system performs a check (verifying share availability) and then acts on that check (executing the sale) as two separate steps. If another thread performs a check in between, it works on outdated state data. The resolution is to lock the resources and execute both steps as a single atomic operation.
*   **Why others are incorrect**:
    *   *A is incorrect* because directory traversal involves path manipulation to read unauthorized files.
    *   *C is incorrect* because XSS involves executing script code in client browsers.
    *   *D is incorrect* because insecure object references involve accessing records by guessing IDs, and WAFs do not fix race conditions in application logic.

---

### Question 3
**Correct Answer: C**

*   **Explanation**: Parameterized queries (prepared statements) and stored procedures are the primary code-level mitigations for SQL injection. By pre-compiling the query structure on the application or database server before inserting parameters, they prevent user inputs from being interpreted as executable database statements.
*   **Why others are incorrect**:
    *   *A is incorrect* because while URL/Base64 encoding is used to transport data, it does not prevent SQL engines from executing injected code once decoded.
    *   *B is incorrect* because RDP is a remote desktop protocol; blocking RDP does not mitigate SQL injection in web applications.
    *   *D is incorrect* because data minimization and tokenization are data protection controls for PII; they do not secure the application input interface against SQLi.

---

### Question 4
**Correct Answer: B**

*   **Explanation**: Cross-Site Request Forgery (CSRF) occurs when a malicious site tricks a victim's browser into sending a request to a target application where the victim is already authenticated. The request is processed using the active session credentials of the victim.
*   **Why others are incorrect**:
    *   *A is incorrect* because XSS is about executing script code in the victim's browser.
    *   *C is incorrect* because SSRF occurs when an attacker forces the *server* to make a request to a backend service or API, rather than forcing the client's browser to execute requests.
    *   *D is incorrect* because Local File Inclusion (LFI) involves reading local system files, which is not what occurred.

---

### Question 5
**Correct Answer: B**

*   **Explanation**: To prevent null pointer exceptions and fail-open states, developers must validate inputs to ensure null values are not dereferenced. Exception handling routines must be designed to fail-secure (e.g., terminating the thread, logging the crash, and blocking further unauthenticated traffic) rather than failing open.
*   **Why others are incorrect**:
    *   *A is incorrect* because code signing verifies the publisher of the application but does not prevent logical errors like null pointers or control crash behavior.
    *   *C is incorrect* because stored procedures are database controls, whereas the null pointer is occurring in the authentication module memory space.
    *   *D is incorrect* because a database firewall protects database inputs, not the memory de-referencing operations of the directory service daemon.
