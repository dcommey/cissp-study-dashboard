# CISSP Practice Quiz: Identity and Access Management (IAM)

## Question 1
A library manager is evaluating biometric access control systems for a new high-security research laboratory. The manager wants to select a system that provides the best balance between security (preventing unauthorized access) and user convenience (minimizing the rate at which authorized employees are incorrectly blocked). Which biometric metric should the manager prioritize, and what value indicates the highest quality device?
- [A] Crossover Error Rate (CER) / Equal Error Rate (EER); a lower value represents a more accurate device.
- [B] False Acceptance Rate (FAR); a higher value represents a more secure device.
- [C] False Rejection Rate (FRR); a higher value represents a more convenient device.
- [D] Biometric standard deviation; a value closest to 1.0 represents the highest quality.

## Question 2
During a security audit, it is noted that users accessing a sensitive corporate database are prompted to enter their primary Active Directory domain password and are then required to enter a 4-digit Personal Identification Number (PIN). From a CISSP perspective, does this authentication challenge constitute Multi-Factor Authentication (MFA)?
- [A] Yes, because it requires two distinct steps (password and PIN) to gain access.
- [B] No, because both credentials belong to the same factor category (something you know). It is a form of two-step verification (2SV), not MFA.
- [C] Yes, because the password is logical and the PIN represents a physical control.
- [D] No, because it does not utilize a physical USB token or smart card.

## Question 3
A Chief Information Security Officer (CISO) is presenting a business case for a centralized Single Sign-On (SSO) solution. From a risk management perspective, what is the primary security trade-off associated with implementing centralized SSO?
- [A] SSO increases password complexity requirements, which reduces user compliance.
- [B] SSO reduces password exposure risks and simplifies account revocation, but increases the security impact of a single compromised credential.
- [C] SSO eliminates the need for multi-factor authentication, but requires physical smart cards on all endpoints.
- [D] SSO increases the crossover error rate (CER) of logical access control interfaces.

## Question 4
A company is integrating its internal directory services with a third-party SaaS benefit portal using SAML. To simplify administration, the IT department wants to avoid manually pre-creating accounts for thousands of employees on the SaaS portal. Which federated identity feature should the security manager recommend to automate account creation during a user's initial login?
- [A] LDAP directory replication
- [B] Just-In-Time (JIT) provisioning
- [C] Active-Passive load balancing
- [D] Multi-Factor Authentication (MFA) with SMS challenges

## Question 5
A security review reveals that an employee who recently transferred from the Finance department to the Marketing department still retains access privileges to the Finance database. This issue has occurred with multiple transferred employees over the past year. What security problem is described, and what control should the organization implement?
- [A] Rejection rate; enforce biometric palm scans on all workstations.
- [B] Privilege creep; implement a strict deprovisioning and role review policy during employee transfers.
- [C] Access exposure; publish SPF, DKIM, and DMARC records in DNS.
- [D] Non-repudiation; mandate that all users sign the acceptable use policy (AUP) on each transfer.
