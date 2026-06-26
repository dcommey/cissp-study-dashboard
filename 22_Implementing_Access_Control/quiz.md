# Quiz: Implementing Access Control

## Question 1
A government contractor is designing an access control structure for a system containing highly sensitive defense data. The security policy mandates that information clearance levels and data classification labels must be defined and enforced centrally, and that individual data files' creators or owners must not be able to override these policies to grant unauthorized access. Which access control model should the contractor implement?

- A) Discretionary Access Control (DAC)
- B) Mandatory Access Control (MAC)
- C) Role-Based Access Control (RBAC)
- D) Attribute-Based Access Control (ABAC)

## Question 2
An enterprise network uses Kerberos for Single Sign-On (SSO). An employee logs in to their workstation in the morning and successfully authenticates. During the day, they attempt to access a shared file server for the first time. What sequence of ticket exchanges occurs to grant access to the file server?

- A) The workstation presents the user's cleartext password to the file server, which verifies it against the KDC database.
- B) The workstation sends its Ticket-Granting Ticket (TGT) to the Ticket-Granting Service (TGS), receives a service ticket (ST), and presents the ST to the file server.
- C) The workstation sends an AS-REP request to the local SAM database, receives an NTLM hash, and passes the hash to the file server.
- D) The workstation uses OpenID Connect (OIDC) to exchange JSON Web Tokens (JWT) directly with the file server.

## Question 3
A company's web application database is compromised, and the attacker extracts the table containing user password hashes. The database administrator reveals that the hashes were generated using SHA-256 without salting. What is the primary risk to these user credentials, and what remediation should the security team implement?

- A) The SHA-256 hash is a symmetric algorithm that can be easily decrypted. The team must switch to AES encryption.
- B) Attackers can conduct rapid offline lookups using precomputed rainbow tables. The team must implement salting (adding unique random characters to each password before hashing).
- C) Attackers can perform Pass-the-Hash (PTH) attacks directly on the web portal. The team must disable the LSASS process.
- D) Attackers can perform online password spraying attacks. The team must configure Active-Passive load balancing.

## Question 4
A network manager wants to secure administrative access to core switches and routers. The security policy mandates that all commands executed by administrators must be authorized and audited, and that the entire communication session (including usernames and passwords) must be encrypted in transit. Which AAA protocol should the manager deploy?

- A) RADIUS, because it encrypts the entire session using UDP port 1812.
- B) TACACS+, because it runs over TCP port 49, separates AAA functions, and encrypts the entire packet body.
- C) Kerberos, because it uses the AS-REP protocol to roast credentials.
- D) LDAP, because it replicates Active Directory databases via SAML assertions.

## Question 5
During an active incident response investigation, the Security Operations Center (SOC) discovers that an attacker has compromised a domain controller and extracted the hash of the KRBTGT Kerberos service account. What is the immediate risk to the Active Directory domain?

- A) The attacker can perform a Pass-the-Hash (PTH) attack to bypass the workstation GUI.
- B) The attacker can forge a Golden Ticket, granting them indefinite administrative access to all systems and resources in the domain.
- C) The attacker can perform AS-REP Roasting against the local SAM database.
- D) The attacker can reverse the KDC encryption keys to retrieve all domain user passwords in cleartext.
