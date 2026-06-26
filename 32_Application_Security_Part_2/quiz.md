# CISSP Practice Quiz - Video 32: Application Security Part 2

Test your understanding of application-level attacks, race conditions, injection vulnerabilities, and software security controls. Apply your CISSP mindset!

---

### Question 1
A developer for an online auction website implements a feature where users bid on items. Bids are stored in a database using a signed 8-bit integer for the item count. An attacker submits a request to bid on a quantity of items that exceeds 127. The application processes the value and registers the item count as -128, resulting in a negative invoice balance that transfers money back to the attacker's account. What type of vulnerability was exploited?

A. Buffer overflow  
B. Integer overflow  
C. Null pointer de-referencing  
D. Server-side request forgery (SSRF)  

---

### Question 2
A high-volume trading platform is experiencing an issue where two different brokers are occasionally able to sell the same block of shares simultaneously, leading to duplicate transactions. A review of the source code reveals that the application checks the availability of the shares and then records the sale. However, these two steps are separate operations and not locked. What type of vulnerability is present, and how should it be resolved?

A. A directory traversal vulnerability; resolve by canonicalizing paths.  
B. A Time of Check / Time of Use (TOC/TOU) race condition; resolve by executing the check and transaction as a single atomic operation.  
C. Cross-site scripting (XSS); resolve by sanitizing input fields.  
D. Insecure object reference; resolve by implementing a Web Application Firewall (WAF).  

---

### Question 3
A database security audit reveals that a web application is vulnerable to SQL injection because it builds SQL statements using string concatenation of user-provided form parameters. Which is the most effective coding control the development team should implement to prevent this vulnerability?

A. Use URL encoding and Base64 encoding on all form parameters.  
B. Deploy a Web Application Firewall (WAF) to block RDP connections.  
C. Implement parameterized queries or stored procedures.  
D. Enable database data minimization and tokenization.  

---

### Question 4
An administrator is logged into a corporate network switch management portal in one browser tab. In a separate tab, they browse an external tech blog and click on a link that contains a hidden image tag. The source of the image points to a command on the switch portal that resets the switch configuration. Because the administrator has an active authenticated session, the switch executes the command and resets. What type of attack did the tech blog execute?

A. Cross-Site Scripting (XSS)  
B. Cross-Site Request Forgery (CSRF)  
C. Server-Side Request Forgery (SSRF)  
D. Local File Inclusion (LFI)  

---

### Question 5
An attacker targets a critical directory service by sending malformed packets containing null values in pointer fields. The service dereferences these null values, resulting in a Null Pointer Exception that crashes the authentication daemon. Upon crashing, the service enters a fail-open state, allowing all login requests to bypass authentication until the daemon is restarted. What should the security team recommend to mitigate this risk?

A. Enable code signing and use PKI to encrypt the pointer addresses.  
B. Implement strict input validation to catch null values and rewrite the exception handler to ensure the service fails-secure (blocks all access) upon a crash.  
C. Use a stored procedure to sanitize the pointer fields in the user directory.  
D. Deploy a database firewall to block directory traversal attempts.  
