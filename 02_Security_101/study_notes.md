# CISSP Study Notes - Video 2: Security 101

This module covers the core concepts, terminologies, and frameworks that form the bedrock of the entire CISSP body of knowledge.

---

## 1. The Core Purpose of Security

*   **Security exists to support the business**: Security is not the primary purpose of an organization; it is a support system that enables the business to operate safely and continue existing.
*   **Business Alignment**: Every security measure must align with business objectives. Security decisions must be translated into a **business case** that describes the return on investment or value to the CEO and senior management.
*   **Asset Valuation Rule**: You should **never spend more on securing an asset than the asset is worth**. (E.g., do not buy a $1,000 lock for a $100 bicycle).
*   **Ongoing Process**: Security is not a one-time setup; it is an ongoing lifecycle that requires continuous maintenance, adjustments, and updates.
*   **Risk Exposure**: The state of being at risk due to a vulnerability.
*   **Risk Acceptance**: Choosing to live with a risk because the cost of mitigating it outweighs the value of the asset.

---

## 2. Core Pillars: The CIA Triad & DAD Threats

The CIA Triad represents the three core goals of information security. They exist in tension: optimizing for one often reduces another. Their opposites represent the threat vector, known as the **DAD Triad** (Disclosure, Alteration, Destruction).

### Confidentiality (Threat: Disclosure)
*   **Definition**: Ensuring that information is not disclosed to unauthorized individuals, entities, or processes.
*   **Controls**: Encryption (such as **TLS - Transport Layer Security** for data in transit), access control lists (ACLs), multi-factor authentication (MFA), and physical security (gates/locks).
*   **Regulations**: Legal and compliance standards like **GDPR** (General Data Protection Regulation) and **HIPAA** (Health Insurance Portability and Accountability Act) heavily dictate how confidential and personally identifiable information (PII) must be protected.
*   *Note*: Avoid **"Security through obscurity"** (hiding things instead of securing them). This is not real security.

### Integrity (Threat: Alteration)
*   **Definition**: Ensuring that data is accurate, complete, and unaltered during storage, transit, or processing.
*   **Controls**: Hashing (SHA-256, etc.), digital signatures, write permissions, access controls, database constraints, and user training.

### Availability (Threat: Destruction)
*   **Definition**: Ensuring that authorized users have timely and reliable access to data and systems when needed.
*   **Controls**: Backups, redundancy (RAID, dual power supplies), disaster recovery planning, high availability networks, and DDoS mitigation.

---

## 3. Advanced Security Concepts

*   **Authenticity**: Combines **Integrity** (data is unaltered) with **Origin Validation** (verifying the source of the data).
*   **Non-Repudiation**: The principle that a user cannot deny having performed a transaction or action. It requires a combination of **Integrity** (proving the data didn't change) and **Authenticity** (proving who sent it), typically achieved via digital signatures and audit logs.
*   **Defense-in-Depth (Layered Security)**: Implementing multiple layers of security controls (physical, administrative, and technical) so that if one layer fails, others are in place to intercept the threat.

---

## 4. Access Control & The AAA Framework

*   **Subjects vs. Objects**:
    *   **Subject**: An active entity (e.g., user, process, script) that requests access to a resource.
    *   **Object**: A passive entity (e.g., file, database, printer, server) that contains information.
*   **Groups**: Collections of subjects sharing the same access rights. **Best practice**: Assign permissions and apply policies to *groups*, never directly to individual *subjects*.

### The AAA Framework (Plus Identification & Auditing)
1.  **Identification**: Claiming an identity (e.g., typing a username: "I am Andrew").
2.  **Authentication**: Proving the claimed identity (e.g., entering a password or scanning a fingerprint).
3.  **Authorization**: Granting specific permissions based on the authenticated identity (e.g., allowing access to read a file).
4.  **Auditing**: Logging and monitoring actions performed by subjects (e.g., recording who opened a file and when).
5.  **Accounting**: Reviewing audit logs to establish accountability and ensure non-repudiation.

---

## 5. Security Perimeter & Zone Separation

*   **Traditional Perimeter**: Formerly conceptualized as a hard boundary separating the "trusted inside" from the "untrusted outside" (protected by edge firewalls).
*   **Modern Perimeter**: The perimeter is now distributed into **micro-perimeters** around each user, device, app, and data element. This is driven by hybrid environments (cloud + on-premises) and a mobile/remote workforce.
*   **Zone Separation**: Dividing networks or systems into distinct security zones based on levels of trust (e.g., separating departments, applications, or customers to prevent unauthorized lateral movement and data leakage).

---

## 6. Security Governance & Management

*   **Governance**: High-level, business-aligned decision-making that guides the organization's security posture. It is a strategic business concern, not just an IT concern.
*   **CIO vs. CISO**:
    *   **CISO (Chief Information Security Officer)**: Defines security policies, assigns security responsibilities, and manages risk.
    *   **CIO (Chief Information Officer)**: Focuses on IT infrastructure, services, and delivery.
    *   *Note*: The CISO's role often overlaps with the CIO's, and both report to senior executives like the **CEO** (Chief Executive Officer).
*   **Management Approval**: **CRITICAL FOR THE EXAM.** You must obtain formal management approval before starting any major security activity (e.g., penetration tests, policy changes, security investments).
*   **Liability & Accountability**: While everyone is responsible for security, **senior management is ultimately liable and accountable** for security failures.

---

## 7. Planning Horizons

*   **Strategic Plan**: Long-term vision (typically 3–5 years). Defines broad goals aligned with business objectives.
*   **Tactical Plan**: Medium-term plan (typically 1 year). Translates strategic goals into specific programs, initiatives, and budget acquisitions.
*   **Operational Plan**: Short-term plan (daily/weekly/monthly). Focuses on day-to-day management, maintenance, and reactive issue resolution.

---

## 8. Threat Modeling Frameworks

Proactive analysis conducted before a breach occurs to identify vulnerabilities and threats.

### STRIDE (Threat Classification)
*   **S**poofing (Threat to Authenticity/Identity)
*   **T**ampering (Threat to Integrity)
*   **R**epudiation (Threat to Non-repudiation)
*   **I**nformation Disclosure (Threat to Confidentiality)
*   **D**enial of Service (Threat to Availability)
*   **E**levation of Privilege (Threat to Authorization)

### PASTA (Process for Attack Simulation and Threat Analysis)
A risk-centric, 7-stage threat modeling methodology:
1. Definition of Objectives (DO) \\(\rightarrow\\) 2. Definition of Technical Scope (DTS) \\(\rightarrow\\) 3. Application Decomposition and Analysis (ADA) \\(\rightarrow\\) 4. Threat Analysis (TA) \\(\rightarrow\\) 5. Weaknesses and Vulnerability Analysis (WVA) \\(\rightarrow\\) 6. Attack Modeling and Simulations (AMS) \\(\rightarrow\\) 7. Risk Analysis and Management (RAM).

### DREAD (Threat Severity Rating)
Subjective rating: Damage potential, Reproducibility, Exploitability, Affected entities, Discoverability.

---

## 9. Key Concepts for Liability

*   **Due Diligence**: The **research and planning** phase. Gathering information, assessing risks, and designing a security plan. (Knowing/Planning).
*   **Due Care**: The **action** phase. Implementing policies, installing patches, conducting training, and monitoring networks. (Doing).

---

## 10. Security Policy Hierarchy

*   **Security Policies**: High-level, abstract documents signed by senior management outlining security goals.
    *   *AUP (Acceptable Use Policy)*: Defines how company assets (computers, internet, etc.) can be used by employees.
*   **Standards**: Mandatory rules or technologies that must be followed.
*   **Baselines**: The minimum security configurations required for systems to maintain a consistent security level.
*   **Guidelines**: Advisory, flexible recommendations (non-mandatory).
*   **Procedures (SOPs)**: Detailed, step-by-step instructions for executing specific tasks.

---

## 11. Key Security & Data Roles

The CISSP exam frequently tests the distinct responsibilities of various organizational roles:

*   **Senior/Top Management**: Has ultimate liability and accountability for security. Oversees the security strategy, provides resource/budget allocation, and grants final approval for policies.
*   **Security Professionals (Technicians)**: The hands-on implementers. They configure controls, manage security systems, monitor networks, and respond to incidents.
*   **Asset/Data Owner**: Typically a business manager responsible for a specific subset of data or assets.
    *   *Responsibilities*: Determines the classification level of the data, defines who should have access, and makes decisions regarding how the data must be protected.
*   **Data Custodian (Technical Role)**: Typically an IT professional or system administrator who has custody of the data.
    *   *Responsibilities*: Manages and maintains the systems that store, process, and back up the data. Implements the security controls (like encryption and ACLs) specified by the Data Owner.
*   **Data User**: Any authorized employee who accesses and uses the data as part of their job duties. They must comply with all security policies and the Acceptable Use Policy (AUP).
*   **Security Auditor**: Evaluates the company's security posture, policies, and compliance with regulations. Identifies weaknesses and compiles reports and recommendations (e.g., pen testers or external compliance auditors).

---

## 12. Security Control Categories

Controls are classified by their type:
*   **Administrative (Managerial)**: Policies, procedures, AUP, background checks, training.
*   **Technical (Logical)**: Firewalls, encryption, antivirus, IDS/IPS, access controls.
*   **Physical**: Fences, locks, guards, CCTV, badges, alarms.

---

## 13. Common Security Frameworks & Standards

Frameworks provide blueprints that prevent organizations from having to design security from scratch:

*   **ISACA COBIT**: Control Objectives for Information and Related Technologies. A broad framework for governing and managing enterprise IT, aligning IT goals with business objectives.
*   **NIST SP 800-53**: A comprehensive catalog of security and privacy controls for federal information systems.
*   **NIST Risk Management Framework (RMF)**: SP 800-37. Integrates security, privacy, and cyber supply chain risk management into the system development life cycle.
*   **NIST Cybersecurity Framework (CSF)**: Focuses strictly on cybersecurity, helping organizations identify, protect, detect, respond, and recover from risks.
*   **ISO 27000 Series**: International standards for information security management systems (ISMS), with **ISO 27001** defining the compliance requirements.
*   **ITIL (Information Technology Infrastructure Library)**: A framework for IT service management (ITSM) focusing on service delivery and support.
*   **CIS Benchmarks**: Best-practice standards for secure configurations of specific technologies (e.g., OS, Docker, databases) which can be measured using scripts and tools.
*   **Supply Chain Risk Management (SCRM)**: Managing risks associated with third-party vendors, suppliers, and service level agreements (**SLA**) and requirements (**SLR**).
