# CISSP Study Notes - Video 9: Security Principles

## Core Security Building Blocks
Building secure systems requires establishing fundamental architectural principles from the start. Security is a continuous, never-ending process of managing risks, securing systems, and protecting critical data.

### Subjects and Objects in Access Control
*   **Subject**: An active entity (e.g., a **user**, program, application, or device) that makes requests to access or modify resources.
*   **Object**: A passive entity (e.g., a file, database table, server, or printer) that contains information or resources.
*   **Actions**: The operations a subject attempts on an object (e.g., read, write, execute, delete).
*   *Note*: Subject and object roles are contextual. For example, a web application is the object when a user accesses it, but becomes the subject when it queries a backend database.
*   **Transitive Trust**: A security risk where if Alice trusts Bob, and Bob trusts Charlie, then Alice implicitly trusts Charlie. Attackers exploit transitive trust (e.g., using a **VPN** connection to bypass firewall boundaries) to access restricted zones.

---

## Open vs. Closed Systems & Software Logic
*   **Closed Systems**: Use proprietary hardware/software and secret implementations. This restricts interoperability but can enhance security by reducing the attack surface (e.g., Apple's iOS ecosystem restricting app installations to a vetted store).
*   **Open Systems**: Follow industry standards, enabling high interoperability via open protocols and public Application Programming Interfaces (APIs).
*   **APIs (Application Programming Interfaces)**: Define the rules, data formats, and security requirements for machine-to-machine communication.
*   **Open-Source vs. Closed-Source**:
    *   *Open-Source*: Source code is public, allowing community review to identify any **vulnerability** or code error. However, no paid team has strict deadlines to fix bugs.
    *   *Closed-Source*: Code is private. The vendor manages quality and support but can hide critical design flaws.

---

## Default Configurations and System Hardening
*   **The Default Configuration Risk**: Out-of-the-box settings are chosen by vendors for ease of installation and usability, not security. A critical hardening step is changing default passwords, disabling unnecessary services, and establishing a strict security **policy**. For example, a default firewall state should block all traffic.

---

## Failing Securely and Failure Modes
Organizations must design systems to fail in a predictable, secure state when an error or system crash occurs.
*   **Input Validation & Error Handling**: Apps must sanitize input to block malicious commands. Code must use structured error handling (e.g., try-catch blocks) to catch errors and display generic messages, preventing the **disclosure** of system paths or database schemas that a **threat** actor could exploit.
*   **Fail-Soft**: The system continues running with reduced functionality when a non-critical component fails.
*   **Fail-Secure**: The system stops operating but maintains security controls (e.g., a firewall blocks all traffic if its filtering process crashes).
*   **Fail-Safe**: The system shuts down in a way that protects human life and safety (e.g., an electronic lock fails open during a fire or power outage to allow evacuation). This is a critical **recovery** consideration where human safety overrides asset protection.
*   **Fail-Open / Fail-Closed**: In the digital realm, fail-open allows traffic/access upon failure, whereas fail-closed denies access.

---

## Zero Trust Architecture (ZTA)
Zero Trust is a modern security paradigm that replaces the traditional perimeter-based security model.
*   **Core Tenet**: "Never trust, always verify." Assume that a **breach** has already occurred and that malicious actors are already present inside the network.
*   **Assume Breach Mentality**: Treat every request, device, and network segment as a potential **threat**.
*   **Micro-segmentation**: Dividing the network into small, isolated security zones (down to a single device or application) to contain lateral movement.
*   **Enforcement**: Requires continuous monitoring, logging, firewalls, automated **incident** response, Identity and Access Management (IAM), and strong **authentication** controls like Multi-Factor Authentication (**MFA**).

---

## Confinement, Bounding, and Isolation
To ensure **confidentiality**, **integrity**, and **availability** (the **CIA** triad) of data and processes, operating systems use:
*   **Confinement (Sandboxing / Containerization)**: Restricting what a program can do and which memory addresses it can write to, preventing a malicious process from affecting other applications.
*   **Bounding**: Setting physical or logical limits on memory addresses and authorization levels using access control lists.
*   **Isolation**: Ensuring that a process runs in its own dedicated memory space, entirely separated from other processes.
*   **Air Gapping**: A physical separation control where a system has no physical or wireless network connection to the outside world, isolating it from external network-based attacks.

---

## Trust vs. Assurance
*   **Trust**: The presence of a security mechanism (e.g., a firewall, encryption, or an access control list) that provides a perceived level of safety.
*   **Assurance**: The degree of confidence that the security mechanism will perform as expected under stress (e.g., verifying that a firewall blocks malware even over encrypted **HTTPS** traffic), validated through testing, **auditing**, and verification.

---

## CISSP Exam Tips: The Manager's Perspective
*   **Fail-Safe vs. Fail-Secure**: On the exam, always prioritize human safety. Doors must fail-safe (open) for evacuation, even if it compromises physical security.
*   **Zero Trust is a Strategy**: ZTA is not a single tool or product, but a strategic design policy requiring continuous verification of all identities and **technical** assets.
*   **Assurance is Proven**: Trust is configured, but assurance must be verified. A **management** team needs assurance (via auditing reports) to verify compliance.
