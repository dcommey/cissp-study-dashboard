# CISSP Practice Quiz Answers & Explanations: Identity and Access Management (IAM)

## Question 1
**Correct Answer: A**

### Explanation:
*   **[A] is correct.** The Crossover Error Rate (CER) — also known as the Equal Error Rate (EER) — is the point where the False Acceptance Rate (FAR) and the False Rejection Rate (FRR) intersect. It is the primary metric used to compare biometric device accuracy. A lower CER/EER indicates a more accurate system that minimizes both false rejections and false acceptances, balancing security and convenience.
*   **[B] is incorrect.** False Acceptance Rate (FAR) represents the rate of false acceptance, where unauthorized users are mistakenly granted access. A lower (not higher) FAR is desired to maintain security.
*   **[C] is incorrect.** False Rejection Rate (FRR) represents the rate of false rejection, where legitimate users are blocked. A lower (not higher) FRR is desired for convenience.
*   **[D] is incorrect.** Standard deviation is a statistical concept representing variation, but it is not the standard metric for comparing biometric device accuracy.

---

## Question 2
**Correct Answer: B**

### Explanation:
*   **[B] is correct.** Multi-Factor Authentication (MFA) requires presenting credentials from at least two distinct factor categories: something you know (e.g., password, PIN), something you have (e.g., smart card, hardware token), or something you are (e.g., fingerprint). Because a password and a PIN both fall under the 'something you know' category, this is a two-step verification (2SV) system, not true MFA.
*   **[A] is incorrect.** While it does require two steps (2SV), it is not MFA because it does not cross different factor categories.
*   **[C] is incorrect.** A PIN is a numeric code (information) and thus represents a logical/informational item under 'something you know,' not a physical control (which would be a physical object like a key or card).
*   **[D] is incorrect.** While a USB token or smart card is a common way to achieve 'something you have,' MFA can also be achieved using other factors such as biometrics (something you are) paired with a password.

---

## Question 3
**Correct Answer: B**

### Explanation:
*   **[B] is correct.** Single Sign-On (SSO) improves user convenience and reduces the risk of password fatigue (preventing users from writing down multiple passwords or using weak ones). However, the primary risk of SSO is that a single compromised credential allows an attacker to access all federated resources the user has permissions for, significantly increasing the blast radius of a breach.
*   **[A] is incorrect.** SSO typically reduces the complexity burden on users because they only need to remember one strong password (or use passwordless methods) rather than maintaining different passwords for every system.
*   **[C] is incorrect.** SSO does not eliminate the need for MFA; in fact, combining SSO with MFA is a critical security best practice. SSO also does not mandate smart cards.
*   **[D] is incorrect.** SSO operates at the logical access layer to authenticate sessions and has no relation to the Crossover Error Rate (CER) of biometric devices.

---

## Question 4
**Correct Answer: B**

### Explanation:
*   **[B] is correct.** Just-In-Time (JIT) provisioning is a feature in federated identity systems (like SAML or OpenID Connect) that automatically creates a user account on the target application (Service Provider) during the user's first login attempt, using identity attributes passed in the security assertion. This eliminates the need for manual pre-provisioning of accounts by administrators.
*   **[A] is incorrect.** LDAP (Lightweight Directory Access Protocol) is used for querying internal directories but is not used for federated provisioning of third-party SaaS accounts.
*   **[C] is incorrect.** Active-Passive load balancing is a high-availability design for network traffic distribution, not an identity provisioning technology.
*   **[D] is incorrect.** MFA with SMS is a weak authentication method and does not provision or create user accounts dynamically.

---

## Question 5
**Correct Answer: B**

### Explanation:
*   **[B] is correct.** Privilege creep occurs when user accounts accumulate excessive privileges over time as their roles and responsibilities change. To prevent this, organizations must establish a deprovisioning policy for employee role changes to ensure old privileges are revoked, and perform regular, structured account access reviews to enforce the principle of least privilege.
*   **[A] is incorrect.** Rejection rate is a biometric accuracy metric and does not address logical access accumulation or role changes.
*   **[C] is incorrect.** SPF, DKIM, and DMARC are email authentication records used to prevent domain spoofing. They do not address user database permissions.
*   **[D] is incorrect.** While signing the AUP (Acceptable Use Policy) is an administrative control during onboarding, it does not dynamically restrict database permissions or prevent privilege creep.
