# Quiz Answers & Explanations: Implementing Access Control

## Question 1
**Correct Answer: B**

### Explanation:
* **A) Incorrect:** Discretionary Access Control (DAC) allows resource owners or creators to manage permissions for their own files. Under DAC, owners can delegate permissions to other users, which violates the requirement that creators must not be able to override central policy.
* **B) Correct:** Mandatory Access Control (MAC) enforces access decisions centrally based on system-assigned security labels (clearance levels for subjects, classification labels for objects). Under MAC, users cannot modify or override labels to grant unauthorized access, satisfying all the criteria.
* **C) Incorrect:** Role-Based Access Control (RBAC) assigns permissions based on organizational roles. While centrally managed, it doesn't natively enforce multi-level clearance and classification labels in the strict mandatory manner described.
* **D) Incorrect:** Attribute-Based Access Control (ABAC) uses policies based on subject, object, and environmental attributes. While flexible, MAC is the specific, traditional model designed to handle security clearances/classification labels where resource owners cannot bypass policies.

---

## Question 2
**Correct Answer: B**

### Explanation:
* **A) Incorrect:** Kerberos never transmits the user's cleartext password across the network to resources. Password-derived keys are only used during the initial Authentication Service (AS) exchange with the Key Distribution Center (KDC).
* **B) Correct:** Once authenticated, the workstation holds a Ticket-Granting Ticket (TGT). When requesting access to a specific service (like a file server), the workstation contacts the Ticket-Granting Service (TGS) using its TGT, receives a Service Ticket (ST), and then presents that ST to the file server.
* **C) Incorrect:** AS-REP is part of the initial KDC authentication, not a resource access step. SAM databases and NTLM hashes are part of local Windows authentication and legacy NTLM protocols, not Kerberos.
* **D) Incorrect:** OpenID Connect (OIDC) and JSON Web Tokens (JWT) are modern web-based federated identity protocols, not part of standard internal Active Directory Kerberos ticketing.

---

## Question 3
**Correct Answer: B**

### Explanation:
* **A) Incorrect:** SHA-256 is a one-way cryptographic hash algorithm, not a symmetric encryption algorithm. It cannot be "decrypted" with a key, but can be brute-forced or looked up.
* **B) Correct:** Unsalted hashes are vulnerable to precomputed lookup attacks, such as rainbow tables. Salting adds a unique, random string of characters to the password before hashing, which forces attackers to compute new lookup tables for each unique salt, rendering precomputed tables useless.
* **C) Incorrect:** Pass-the-Hash (PTH) attacks involve using NTLM hashes or Kerberos tickets to authenticate to network services. Attackers cannot pass raw SHA-256 web app database hashes directly to a web portal to log in. LSASS is a Windows system process, not a web application component.
* **D) Incorrect:** Password spraying is an online attack guessing common passwords across many accounts. While a risk, it is not the primary risk of having the offline database hash table compromised, nor does load balancing remediate it.

---

## Question 4
**Correct Answer: B**

### Explanation:
* **A) Incorrect:** RADIUS is primarily for network access (like VPNs or 802.1X). It uses UDP (ports 1812/1813), only encrypts the password field (leaving the username and administrative commands exposed), and combines authentication/authorization, which does not allow detailed command-by-command authorization.
* **B) Correct:** TACACS+ (Terminal Access Controller Access-Control System Plus) is specifically designed for administrative access to network devices. It runs over TCP port 49, separates the AAA functions, and encrypts the entire packet payload (usernames, passwords, and commands), allowing command-by-command authorization.
* **C) Incorrect:** Kerberos is not typically used for direct network device command authorization and auditing. AS-REP roasting is an attack vector, not a security feature or AAA protocol.
* **D) Incorrect:** LDAP (Lightweight Directory Access Protocol) is a directory access protocol, not a network AAA protocol, and it does not replicate AD databases using SAML assertions.

---

## Question 5
**Correct Answer: B**

### Explanation:
* **A) Incorrect:** Pass-the-Hash (PTH) is a method to authenticate, but compromising the KRBTGT hash enables a far more severe attack (Golden Ticket) rather than a simple single-workstation authentication bypass.
* **B) Correct:** The KRBTGT account is the core service account that signs and encrypts all Kerberos Ticket-Granting Tickets (TGTs). If an attacker gets this hash, they can create arbitrary TGTs (Golden Tickets) with administrative privileges and arbitrary lifetimes, granting them complete and persistent control over the entire Active Directory domain.
* **C) Incorrect:** AS-REP roasting involves requesting a TGT for accounts without preauthentication enabled and cracking the hash offline. If the attacker already has the KRBTGT hash, they do not need to perform AS-REP roasting.
* **D) Incorrect:** The KRBTGT hash cannot be used to mathematically reverse other users' passwords, as hashing is a one-way function. However, the attacker can impersonate any user at will, which is functionally equivalent to having their password.
