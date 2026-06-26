# CISSP Study Notes - Video 10: Security Models

## Overview of Security Models
Security models provide the formal, theoretical blueprints used to design secure systems. They translate abstract goals—such as protecting the **confidentiality**, **integrity**, and **availability** (the **CIA** triad) of data—into concrete rules and policies that computers can enforce. Security models help prevent security incidents, system compromise, and any unauthorized **disclosure** or data **breach**.

---

## Object Security Attributes
To enforce a security **policy**, systems describe the security attributes of an object using three main methods:
1.  **Access Tokens**: Generated for a subject when they log in after successful **authentication**. The token defines the user's rights (e.g., read, write) and must eventually expire to prevent abuse.
2.  **Capabilities Lists**: Tied directly to the subject (user). It lists all objects the subject can access. Revoking permissions across multiple users is administratively difficult.
3.  **Labels**: Fixed stickers attached directly to objects (e.g., "Secret"). The system compares the object's label with the subject's clearance level to determine access.

---

## System Architectural Security Concepts
*   **Trusted Computer Base (TCB)**: The complete set of hardware, software, and **technical** controls essential to enforce the security policy on a machine. The **TCB** establishes the root of trust.
*   **Security Perimeter**: The boundary separating the **TCB** from the rest of the system.
*   **Trusted Path & Trusted Shell**: Secure communication channels between the user and the TCB. A trusted shell is a secure command line interface (**CLI**) or graphical user **interface** (**GUI**) sandbox that prevents user session hijacking.
*   **Reference Monitor**: A core concept within the TCB. It acts as the gatekeeper, mediating all access requests between subjects and objects. It must be tamperproof, always invoked, and small enough to be analyzed. All access attempts must be recorded via **auditing** to maintain accountability.
*   **Security Kernel**: The **technical** hardware/software implementation of the reference monitor.

---

## Formal Security Models
1.  **Finite State Machine (FSM)**:
    *   The **FSM** model defines a system as having a finite number of states.
    *   A system is secure if it starts in a secure state and only transitions to other secure states upon receiving inputs.
2.  **Information Flow Model**:
    *   Controls how information moves between different security levels.
    *   Aims to prevent covert channels (sneaky, unintended communication channels running below security radar). For example, in **IPC** (inter-process communication), two isolated processes might communicate by modifying file size or timestamps. Similar risks exist in network communication across a **VPN** or when requesting data via an external **API**.
3.  **Non-interference Model**:
    *   Ensures that high-security actions do not interfere with or reveal patterns to low-security users, blocking inference attacks.
4.  **Take-Grant Model**:
    *   Uses graphs to model how rights (e.g., take, grant) can be passed between subjects and objects.
5.  **Access Control Matrix**:
    *   A table representing permissions between subjects and objects.
    *   *Access Control List (ACL)*: Tied to the object (e.g., **ACL** in **NTFS** file systems, or network firewall/router interface ACLs).
    *   *Capability List*: Tied to the subject.
6.  **Bell-LaPadula Model**:
    *   Focuses exclusively on **confidentiality**.
    *   *Simple Security Property*: "No read up" (a subject cannot read data at a higher classification level than their clearance).
    *   *\\(\star\\)-Security Property*: "No write down" (a subject cannot write data to a lower classification level, preventing accidental data **confinement** leaks).
    *   *Discretionary Security Property*: Enforces Discretionary Access Control (**DAC**) using an access matrix, allowing the **owner** of an object to share access at their discretion.
    *   *Compartmentalization*: Uses a "need-to-know" basis to restrict access within the same clearance level.
7.  **Biba Model**:
    *   Focuses exclusively on data **integrity** (preventing contamination).
    *   *Simple Integrity Property*: "No read down" (a subject cannot read data from a lower integrity level to avoid trust corruption).
    *   *\\(\star\\)-Integrity Property*: "No write up" (a subject cannot write or upload low-integrity data to a higher integrity level).
8.  **Clark-Wilson Model**:
    *   Focuses on commercial **integrity** using transaction-oriented rules.
    *   *Constrained Data Item (CDI)*: Data protected by the model (e.g., bank balances).
    *   *Unconstrained Data Item (UDI)*: Data outside the model (e.g., company address).
    *   *Transformation Procedure (TP)*: The program/transaction that modifies a **CDI** (subjects cannot modify a **CDI** directly; they must go through a **TP**).
    *   *Integrity Verification Procedure (IVP)*: The **procedure** that validates that CDIs are in a consistent state.
    *   Enforces separation of duties and constrained/restricted user interfaces (restricting what a **user** can do via a **GUI** or **CLI**).
9.  **Brewer-Nash Model (Chinese Wall / Ethical Wall)**:
    *   Prevents conflicts of interest by dynamically restricting access.
    *   Data is grouped into security domains and conflict classes (competitors). Once a user accesses a domain, they are blocked from accessing competing domains in that conflict class.
10. **Goguen-Meseguer Model**:
    *   Establishes domain separation and non-interference, forming the basis of group-based permissions and advanced firewall policies.
11. **Sutherland Model**:
    *   Combines the state machine and information flow to prevent unauthorized modifications, ensuring integrity.
12. **Graham-Denning Model**:
    *   Defines 8 secure rules for creating and deleting subjects and objects.
13. **Harrison-Ruzzo-Ullman (HRU) Model**:
    *   An extension of Graham-Denning that defines how rights are assigned or changed in the access matrix using procedures and primitives.

---

## Evaluation Standards: Common Criteria (ISO 15408)
Organizations rely on third-party validations to assess product security.
*   **Protection Profiles (PP)**: The security requirements a customer wants from a product.
*   **Security Targets (ST)**: The security claims and features the vendor's product sheet provides.
*   **Evaluation Assurance Levels (EAL)**: The standard rating of the testing thoroughness (not the product's security quality):
    *   *EAL 1*: Functionally tested.
    *   *EAL 2*: Structurally tested.
    *   *EAL 3*: Methodically tested and checked.
    *   *EAL 4*: Methodically designed, tested, and reviewed.
    *   *EAL 5*: Semi-formally designed and tested.
    *   *EAL 6*: Semi-formally verified design and tested.
    *   *EAL 7*: Formally verified, designed, and tested.
*   *Weaknesses*: Common Criteria does not account for user mistakes (PEBCAK), operational policies, or cryptographic algorithm strength.

---

## Memory Protection and Speculative Execution
*   **Memory Hazards**: Instability, integrity breaches, denial of service (system runs out of **RAM**), and unauthorized data disclosure.
*   **Controls**: Memory isolation, virtual memory (OS maps virtual memory onto physical **RAM**), memory segmentation, and CPU protection rings (separating user mode from kernel mode).
*   **Vulnerability Types**: Buffer overflow (writing beyond buffer limits to inject code).
*   **Speculative Execution Vulnerabilities (Meltdown & Spectre)**:
    *   CPUs optimize performance by guessing next instructions (speculative execution). Traces of incorrect guesses can remain in cache, enabling side-channel attacks.
    *   *Meltdown*: Breaks the boundary between user mode and kernel mode, allowing unprivileged processes to read kernel **CPU** memory.
    *   *Spectre*: Breaks the boundary between different user applications, leaking private application memory.
    *   *Mitigation*: Hard to patch via software without a high performance cost.

---

## Virtualization and Hardware Security
*   **Virtualization**: Slices hardware resources into virtual machines or containers, providing logical isolation and security testing sandboxes. Security devices (like **UTM** or **IPS** devices) can host multiple virtual domains (VDOMs) on one physical box.
*   **Trusted Platform Module (TPM)**: A physical cryptographic chip on the motherboard that securely stores keys and certificates, preventing unauthorized disclosure.
*   **Fault Tolerance**: Protects **availability** using **RAID** disk mirroring/parity and clustering (heartbeat monitoring, quorum consensus, and failover).

---

## CISSP Exam Tips: The Manager's Perspective
*   **Executive Accountability**: Senior **management** is ultimately **accountable** for selecting validated products (e.g., EAL-certified).
*   **Bell-LaPadula vs. Biba**: Remember the directions. Bell-LaPadula is "No read up, no write down" (Confidentiality). Biba is "No read down, no write up" (Integrity).
*   **Clark-Wilson in Business**: Used in databases and banking to prevent corruption by forcing users to use transactions (**TP**) rather than modifying tables directly.
