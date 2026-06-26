# CISSP Study Notes: Identity and Access Management (IAM)

## 1. Core IAM & IAAA Concepts

Identity and Access Management (**IAM**) is the set of technologies and policies that ensure the right users have the correct access to resources. This framework is often referred to as the **IAAA** process:
*   **Identification**: The process of claiming an identity (e.g., username, user ID). This happens before verification.
*   **Authentication**: The process of proving the claimed identity (e.g., verifying a password or token).
*   **Authorization**: Granting or denying access to resources based on permissions.
*   **Auditing** (Accountability): Recording and monitoring activities using logs to hold subjects accountable.

### The CIA Triad & DAD
Security controls in **IAM** are designed to support the **CIA** (confidentiality, integrity, and availability) triad:
*   **Confidentiality**: Keeping data secret from unauthorized access.
*   **Integrity**: Ensuring data is accurate and not modified without authorization.
*   **Availability**: Ensuring data is accessible and usable when needed.
*   **Non-Repudiation**: Ensuring a subject cannot deny having performed an action (facilitated by digital signatures and strict audit logging).

### Subjects, Objects, and Owners
*   *Subjects*: Active entities that request access to resources (e.g., a **user**, process, or computer querying an **API**).
*   *Objects*: Passive entities holding data (e.g., a file, database, or locked door).
*   *Owners*: The resource **owner** defines access permissions.

---

## 2. Registration, Proofing, & Authentication Factors

Establishing a secure identity involves three phases:
1.  **Registration**: Creating the user account and gathering attributes.
2.  **Proofing**: Verifying the user's real-world identity against trusted sources (e.g., government IDs).
3.  **Establishment of Identity**: Validating credentials during login.

### Authentication Factor Categories
Authentication systems utilize Multi-Factor Authentication (**MFA**) by combining credentials from separate categories. Two-Step Verification (**2SV**) is a looser variant that does not require distinct categories (e.g., entering a password and a **PIN**).
1.  **Something You Know**:
    *   *Passwords*: Typically static credentials.
    *   *PIN*: A personal identification number (**PIN**), usually numeric.
    *   *Passphrases*: Long sentences that are easy to remember but hard to brute-force.
2.  **Something You Have**:
    *   *Smart Cards*: Inserted into a reader; stores digital certificates.
    *   *USB Tokens*: A physical **USB** device used to authenticate.
    *   *OTP Tokens*: One-time password (**OTP**) generators.
        *   **HOTP**: An **HMAC**-based one-time password (**HOTP**) that increments a counter with each use.
        *   **TOTP**: A time-based one-time password (**TOTP**) that hashes the secret key with a current timestamp.
    *   *SMS & Authenticator Apps*: Sending codes via **SMS** is deprecated due to interception risks. Authenticator apps generate secure **TOTP** codes.
3.  **Something You Are** (Biometrics):
    *   *Physical Metrics*: Fingerprints, iris/retina scans, palm veins, and 3D face scans.
    *   *Biometric Error Metrics*:
        *   **FRR**: False Rejection Rate (**FRR**) is the rate of false **rejection**, where authorized users are denied access.
        *   **FAR**: False Acceptance Rate (**FAR**) is the rate of false **acceptance**, where unauthorized users are granted access.
        *   **CER / EER**: Crossover Error Rate (**CER**), also known as the Equal Error Rate (**EER**), is the point where **FRR** and **FAR** are equal. The lower the **CER**/**EER**, the more accurate the device.
4.  *Alternative Attributes*: Context-aware factors such as location (e.g., inside the corporate network vs. a **VPN**), time of day, or device fingerprinting.

---

## 3. Directory Services, SSO, & Federation

### Centralized vs. Decentralized Identity
*   *Centralized*: A single directory database (e.g., Microsoft Active Directory accessed via **LDAP** - Lightweight Directory Access Protocol). It simplifies administration but represents a single point of failure.
*   *Decentralized*: Distributes identity authorities across locations. Harder to manage but more resilient.

### Single Sign-On (SSO) & Federation
*   **SSO**: Single Sign-On (**SSO**) allows a user to authenticate once and access multiple resources without logging in again. It reduces password **exposure** but increases the impact of a credential breach.
*   **FIM**: Federated Identity Management (**FIM**) extends **SSO** across different organizations and the internet, linking identities.
*   **SAML**: Security Assertion Markup Language (**SAML**) is an XML-based **standard** used to exchange identity assertions.
*   **OIDC**: OpenID Connect (**OIDC**) is a modern REST-based identity layer built on OAuth 2.0.
*   **JIT**: Just-In-Time (**JIT**) provisioning dynamically creates a user account on a service during their first login via a federated identity provider.

---

## 4. Device, Service, & Credential Management

*   **Device Authentication**: Verifying the device itself using certificate-based methods or 802.1X.
*   **Service Accounts**: Non-human accounts used by software (e.g., a front-end querying a database **API**). Best practices include blocking interactive command shells and using a password keychain.
*   **Credential Vaults**: App-based (e.g., KeePass database synced to a local **NAS** - Network Attached Storage device) or cloud-based vaults store credentials securely.

---

## 5. Lifecycle Management & Governance

*   **Provisioning**: Setting up user accounts, defining roles, and assigning initial permissions during onboarding.
*   **AUP**: During onboarding, users must sign the **acceptable use** policy (**AUP**), which details security rules and consequences.
*   **Deprovisioning**: Disabling or deleting accounts during offboarding.
*   **Privilege Creep**: The accumulation of unnecessary permissions over time. Prevented by regular account access reviews and privilege monitoring.

---

## 6. CISSP Exam Tips (Manager/Governance Perspective)

*   **Control Selection**: Implementing **SSO** or Active Directory represents a **logical** (or **technical**) control, whereas locked server cages represent a **physical** control. Defining the password complexity **policy** represents an **administrative** control.
*   **Risk Responses**: When evaluating biometric devices, managers must balance user convenience (reducing false **rejection**) against security requirements (reducing false **acceptance**). Deciding to accept the risk of **SMS**-based 2FA represents risk **acceptance**, while migrating to authenticator apps is a mitigation strategy.
*   **Acceptable Use**: The **AUP** must be signed by every **user** before they are granted access to corporate assets, establishing clear expectations for compliance.
