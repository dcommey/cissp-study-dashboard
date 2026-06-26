# CISSP Study Notes: Implementing Access Control

## 1. Access Control Core Concepts & AAA Framework

Access control is a security framework to grant or deny access to resources. It maps to the **AAA** (authentication, authorization, and accounting) structure:
*   **Authentication**: Verifying the claimed identity of a **user** or service.
*   **Authorization**: Determining what resources an authenticated subject is allowed to access.
*   **Accounting** (and **auditing**): Tracking resource usage and user activities to maintain a reliable record.

### Security Protections
Access control preserves the core tenets of information security:
*   **Confidentiality**: Restricting data access to authorized individuals, preventing unauthorized **disclosure**.
*   **Integrity**: Protecting data from unauthorized modification.
*   **Availability**: Ensuring systems are accessible when required.

### Administrative, Logical, and Physical Controls
*   **Administrative Controls**: Formulating policies, baseline guidelines, and security **standard** documents.
*   **Logical Controls**: Technical controls like firewalls, access control lists, and encryption.
*   **Physical Controls**: Fences, guards, biometric locks, and locks on the server room.

---

## 2. Authorization Design Patterns & Models

### Core Access Concepts
*   **Implicit Deny**: Denying all access by default unless explicitly granted.
*   **Need-to-Know**: Restricting access to only the data required to perform a specific job function.
*   **Least Privilege**: Restricting user rights and permissions to the minimum necessary.
*   **Separation of Duties**: Dividing a task among multiple users to prevent fraud.
*   **Constrained Interfaces**: Restricting menus, options, or **API** parameters based on user privilege levels.
*   **Access Control Matrix**: A conceptual table mapping subjects and objects.
*   **ACL**: An Access Control List (**ACL**) maps permissions to objects (like file system ACLs or router interface filters).
*   **Capability Tables**: Focus on subjects, listing what objects a subject can access.
*   **Content vs. Context Dependent**: Content-dependent checks look inside the object (e.g., database views). Context-dependent checks look at environmental factors (e.g., login hours, source IP **URL**, or location).

### Access Control Models
1.  **DAC**: Discretionary Access Control (**DAC**) allows the **owner** of an object to set permissions at their discretion.
2.  **MAC**: Mandatory Access Control (**MAC**) uses security labels and clearances set by a central authority to restrict access.
3.  **RBAC**: Role-Based Access Control (**RBAC**) maps permissions to roles (groups) matching job functions.
4.  **ABAC**: Attribute-Based Access Control (**ABAC**) uses policies that evaluate attributes of the subject, resource, and environment.

---

## 3. SSO, Identity Federation, & Web Tokens

Centralized single sign-on (**SSO**) reduces password fatigue but increases the blast radius of a credential **breach**:
*   **Identity Provider (IdP)**: The centralized server (**IDP**) that authenticates users.
*   **SAML**: Security Assertion Markup Language (**SAML**) uses **XML** to exchange authentication and authorization data.
*   **OIDC**: OpenID Connect (**OIDC**) is an identity layer built on top of OAuth 2.0, utilizing **JSON** web tokens (**JWT**) to transmit user profiles.
*   **Security protocols**: Standard connections are secured using **TLS** over **TCP** (and web traffic runs over **HTTPS** URLs).

---

## 4. Kerberos & Local Network AAA Protocols

### Kerberos Operations
Kerberos is a ticket-based **SSO** protocol designed for trusted **LAN** networks. It uses symmetric key cryptography (**AES**):
*   **Key Distribution Center (KDC)**: The central trusted service (**KDC**) comprising the Authentication Service (AS) and the Ticket-Granting Service (**TGS**).
*   *AS Process*: Validates identity and issues a Ticket-Granting Ticket (**TGT**).
*   *TGS Process*: Receives the **TGT** and issues specific service tickets (ST) to access resources.
*   *Database*: Kerberos credentials can be validated against Microsoft Active Directory or local databases like the Security Account Manager (**SAM**) database.

### RADIUS & TACACS+
*   **RADIUS**: A **AAA** protocol that runs over **UDP** (ports 1812/1813). It encrypts only the password and leaves the rest of the packet in cleartext. Under **RFC** 2865, it connects access points or **VPN** servers acting as clients.
*   **TACACS+**: A Cisco-proprietary **AAA** protocol running over **TCP** port 49. It encrypts the entire packet body and separates authentication, authorization, and accounting.

---

## 5. Access Control Attacks & Defenses

*   **Vulnerability & Threat**: Misconfigurations represent a **vulnerability** that can be exploited by a **threat** actor to initiate a data **breach**.
*   **Privilege Escalation**:
    *   *Horizontal*: Gaining access to another **user** account with similar privileges.
    *   *Vertical*: Gaining administrator/root privileges.
*   **Password Cracking**: Hash functions (like **SHA** or MD5) are one-way, but attackers run offline dictionary and brute-force attacks against stolen hash databases.
    *   *Salting*: Adding random characters before hashing to make precomputed rainbow tables useless.
*   **Spraying & Stuffing**:
    *   *Password Spraying*: Testing common passwords across many accounts to avoid lockouts.
    *   *Credential Stuffing*: Testing leaked credentials across other websites.
*   **Mimikatz**: Software used to extract cleartext passwords and hashes from the **LSASS** (Local Security Authority Subsystem Service) memory process on Windows.
*   **Pass the Hash (PTH)**: A **PTH** attack uses stolen **NTLM** or LM hashes directly to authenticate without cracking them.
*   **Kerberos Attacks**:
    *   *Pass the Ticket*: Reusing valid Kerberos tickets.
    *   *Silver Ticket*: Forging service tickets using a service account hash.
    *   *Golden Ticket*: Forged tickets using the domain's KRBTGT account hash, granting full domain control.
    *   *AS-REP Roasting*: Exploiting pre-authentication settings. The **rep** packet is encrypted with the user's password hash and can be cracked offline.
    *   *Kerberoasting*: Offline cracking of service tickets.

---

## 6. CISSP Governance Exam Tips

*   **Risk Mitigation**: Deploying active monitoring is a key **management** function to detect lateral movement. Deciding to accept the risk of password reuse represents risk **acceptance**, while locking down **LSASS** is a proactive mitigation.
*   **Physical Security**: Ensure that **physical** consoles, servers, and switches are kept in locked cages, as access to physical hardware bypasses **logical** and **technical** access controls.
*   **Separation of Duties**: Implement administrative controls to ensure no single employee has full control over critical database systems.
