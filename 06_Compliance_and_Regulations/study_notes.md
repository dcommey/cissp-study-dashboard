# CISSP Study Notes - Video 6: Compliance and Regulations

## Overview of Compliance and Governance
In cybersecurity governance, maintaining **compliance** with legal, regulatory, and industry requirements is a critical objective. Organizations must understand the jurisdictional and legal landscapes in which they operate. Law enforcement agencies struggle to prosecute borderless cybercrime, making organizational preparedness and strict adherence to **policy** guidelines essential.

---

## The Three Branches of Law
The CISSP exam requires a clear understanding of the types of law:
1.  **Criminal Law**: 
    *   Focuses on acts that violate public peace and safety (e.g., murder, theft, and malicious computer hacks).
    *   Enforced by the government; penalties include fines, community service, or prison.
2.  **Civil (Tort / Contract) Law**:
    *   Governs disputes between private individuals or organizations (e.g., contracts, wills, and property disputes).
    *   Enforced by the victim suing the offender; penalties are financial damages rather than imprisonment.
3.  **Administrative Law**:
    *   Written by government agencies to execute their day-to-day functions (e.g., tax regulations, immigration rules, and federal standards).
    *   Must align with statutory law and the Constitution.

---

## Major U.S. Computer Crime Laws
*   **Computer Fraud and Abuse Act (CFAA)**: 
    *   First enacted in 1984 and amended continuously (e.g., 1986, 1994). 
    *   The **CFAA** outlaws unauthorized access to "protected computers" (any computer used in interstate commerce, including those connected to the internet).
    *   The 1994 amendment explicitly criminalized the distribution of malware (viruses/worms).
*   **USA PATRIOT Act of 2001**:
    *   Passed after the September 11 attacks, expanding wiretapping and surveillance capabilities for law enforcement.
    *   Increased the severity of penalties for computer crimes.
*   **Identity Theft and Assumption Deterrence Act (1998)**:
    *   Established identity theft as a federal felony with prison terms up to 15 years, aiming to create strong **deterrence** against identity-related fraud.
*   **Federal Information Security Management Act (FISMA)**:
    *   Enacted in 2002 and updated in 2014, **FISMA** requires federal agencies and their contractors to develop, document, and implement an agency-wide information security program.
    *   **NIST** defines the security controls and guidelines required for **FISMA** compliance. Under the 2014 update, the Department of Homeland Security (DHS) oversees compliance operations, while defense/intelligence agencies retain their own systems.

---

## Executive Governance & Legal Liability
*   **Federal Sentencing Guidelines (1991)**:
    *   Established that the **CEO** and senior **executive** **management** are held ultimately **responsible** and **accountable** for information security. They cannot delegate their liability.
    *   Introduced the concept of "prudent man" due diligence. If an organization can prove they performed due diligence (following best practices), courts may reduce sentencing or eliminate negligence claims.
*   **Establishing Negligence**:
    *   Requires proving: (1) A legal obligation/duty existed, (2) the organization failed to meet that duty, and (3) the failure directly caused the **incident** or **breach**.

---

## NIST Publications and Frameworks
*   **NIST SP 800-53**: Mandatory security and privacy controls for federal information systems. It is widely adopted by private industry as a best-practice **standard**.
*   **NIST SP 800-171**: Standards for protecting Controlled Unclassified Information (CUI) on non-federal/contractor systems (e.g., defense contractors).
*   **NIST Cybersecurity Framework (CSF)**: A voluntary framework to help organizations organize security activities. The **CSF** is a great starting point for establishing a new security program.

---

## Intellectual Property (IP) Law
Intellectual property consists of intangible assets created by human intellect.
*   **Copyrights**:
    *   Protects original expressions of ideas (e.g., books, code, music, art).
    *   *Digital Millennium Copyright Act (DMCA)*: Outlaws bypassing digital rights management (DRM) or copying copy-protected media like a **DVD** or CD. It provides a safe harbor for the **ISP** (Internet Service Provider) from liability for user copyright violations, provided the **ISP** quickly responds to takedown requests. Caching, routing, and search tools are protected under these terms.
*   **Trademarks**:
    *   Protects signs, logos, and slogans (e.g., McDonald's Golden Arches, Nike's "Just Do It") using the TM or registered circle-R symbols.
*   **Patents**:
    *   Protects inventions (gadgets, processes, algorithms) for 20 years. Must be new, useful, and non-obvious.
*   **Trade Secrets**:
    *   Proprietary business secrets (e.g., the formula for Coca-Cola or **kfc** herbs/spices) that give a competitive advantage.
    *   Protected using **physical** security (locks, safes), logical controls (encryption, passwords), and legal contracts like a Non-Disclosure Agreement (**NDA**).

---

## Software Licensing Agreements
*   **Contractual**: Signed, formal contracts for enterprise/expensive systems.
*   **Shrink-Wrap**: Terms accepted by opening the plastic wrap on a software package (e.g., retail software).
*   **Click-Through**: Terms accepted by clicking "I Agree" during online installation.
*   **Cloud Service**: Terms accepted when accessing services hosted on vendor infrastructure (e.g., Gmail, ChatGPT, **AWS**).

---

## Privacy Regulations
Privacy is an individual's right to control the **disclosure** of their personal information.
*   **Constitutional Basis**: The Fourth Amendment is the closest U.S. constitutional right to privacy, limiting government search and seizure.
*   **U.S. Privacy Laws**:
    *   *Privacy Act of 1974*: Restricts how federal agencies collect and share personal data.
    *   *Electronic Communications Privacy Act (ECPA)*: Restricts interception of digital communications.
    *   *Communications Assistance for Law Enforcement Act (CALEA)*: Mandates that telecom networks design their systems to allow wiretapping with a warrant.
    *   *Economic Espionage Act (1996)*: Defines theft of trade secrets as corporate espionage.
    *   *HIPAA*: Requires healthcare organizations to protect Protected Health Information (PHI).
    *   *COPPA*: Requires parental consent for collecting data on children under 13.
    *   *GLBA*: Restricts how financial institutions share consumer data.
    *   *FERPA*: Protects student educational records.
*   **International Privacy Laws**:
    *   **EU Data Protection Directive (DPD)**: The 1995 **directive** that set early data privacy rules.
    *   **EU General Data Protection Regulation (GDPR)**: Replaced the **DPD** in 2018. Applies to any organization worldwide processing data of EU citizens. Principles include: Lawfulness, purpose limitation, data minimization, accuracy, storage limitation, security, and accountability. Cross-border sharing requires SCCs or BCRs. Note: The EU-US Privacy Shield is no longer valid.
    *   **PIPEDA**: Canada's federal privacy law for commercial businesses.
    *   **California Consumer Privacy Act (CCPA)**: Gives California consumers rights to know, delete (be forgotten), opt-out of data collection, and prevent discrimination.

---

## Workplace Monitoring and Policy
Employers have the right to monitor employee activity to maintain security, productivity, and regulatory compliance.
*   **Acceptable Use Policy (AUP)**: The primary **policy** document defining what employees can and cannot do on company systems. The **AUP** removes expectation of privacy for workers using corporate equipment.
*   **Banners and Contracts**: Login banners and employment contracts should notify employees that communications are monitored, preventing legal claims.

---

## Industry Security Standards
*   **PCI DSS**:
    *   Developed by the Payment Card Industry Security Standards Council.
    *   Applies to any organization processing credit cards.
    *   Contains 12 requirements, including firewalls, no default passwords, protecting stored cardholder data, keeping antivirus updated, patching systems, implementing strong **authentication** (passwords/tokens), logging/monitoring, and **physical** security.
    *   Credit card data must be protected during transmission and during **CPU** processing.

---

## Auditing and Vendor Management
*   **Auditing Types**:
    *   *Internal*: Conducted by company staff to ensure policy compliance.
    *   *External*: Conducted by independent third parties to verify compliance (e.g., **SOX** audits for financial accuracy under the Sarbanes-Oxley Act, or **PCI** **DSS** compliance audits).
*   **Third-Party / Vendor Assessment**:
    *   When storing data in external or cloud environments (e.g., **AWS**), organizations must audit vendors.
    *   Checklists must verify data segmentation, encryption key management, system **availability**, incident logging, and breach notifications.
