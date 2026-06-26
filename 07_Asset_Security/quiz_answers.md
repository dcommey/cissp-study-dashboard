# CISSP Practice Quiz Answers - Video 7: Asset Security

Here are the correct answers and detailed explanations for the Video 7 quiz.

---

### Question 1
**Correct Answer: B**

*   **Explanation**: Degaussing works by applying a strong magnetic field to scramble magnetic domains. This is highly effective for magnetic hard disk drives (HDDs) and tapes, but completely ineffective for Solid State Drives (SSDs), which store data electrically using flash memory (silicon transistors). Sanitizing SSDs requires physical destruction (e.g., shredding, crushing) or a cryptographic erase.
*   **Why others are incorrect**:
    *   *A is incorrect* because degaussing has no physical or logical effect on silicon-based SSD flash memory.
    *   *C is incorrect* because power status does not enable degaussing to work on non-magnetic media.
    *   *D is incorrect* because degaussing's ineffectiveness is due to physical memory design, not plastic recycling toxicity.

---

### Question 2
**Correct Answer: C**

*   **Explanation**: Under CISSP data governance, the **Data Owner** (typically a senior business manager or department head, like the CMO) has ultimate responsibility for the data, defines its classification, and sets the access policies. The **Data Custodian** (typically IT staff or systems administrators, like the DBA) is responsible for implementing the technical controls, performing backups, securing the systems, and granting access permissions as authorized by the owner.
*   **Why others are incorrect**:
    *   *A is incorrect* because the CMO defines the policy (Owner), while the DBA implements it (Custodian).
    *   *B is incorrect* because Data Controller/Processor are GDPR terms referring to entities (organizations), not internal staff roles.
    *   *D is incorrect* because System Owners are responsible for the systems/servers hosting the data, whereas the CMO is responsible for the data itself (Data Owner).

---

### Question 3
**Correct Answer: B**

*   **Explanation**: Host-based (endpoint) DLP systems run as software agents directly on client systems. This allows them to monitor file operations and inspect data in clear text before the host operating system encrypts it for transmission (e.g., via HTTPS or VPN). Network-based DLPs cannot decrypt proprietary VPN tunnels or encrypted web traffic without a complex SSL interception proxy.
*   **Why others are incorrect**:
    *   *A is incorrect* because network-based DLP cannot read encrypted traffic traversing VPNs or HTTPS without decrypting it, which is difficult at the network boundary for end-to-end VPNs.
    *   *C is incorrect* because a CASBY is a cloud-focused gatekeeper, not a general host monitoring agent.
    *   *D is incorrect* because network proxies cannot decrypt third-party VPN headers without the corresponding decryption keys.

---

### Question 4
**Correct Answer: C**

*   **Explanation**: In cloud environments, customers lack physical access to the storage devices, which are shared globally among multiple tenants and replicated across storage area networks (SANs). A **Cryptographic Erase** (deleting the decryption keys) is the most efficient and secure way to sanitize this data, as it renders the encrypted backup blocks mathematically unrecoverable.
*   **Why others are incorrect**:
    *   *A is incorrect* because cloud providers will not physically degauss shared storage arrays for a single customer's lifecycle request.
    *   *B is incorrect* because cloud storage abstraction layers prevent direct block-level overwriting (clearing) by tenants.
    *   *D is incorrect* because re-imaging virtual machines does not sanitize historical backup storage blocks.

---

### Question 5
**Correct Answer: A**

*   **Explanation**: **Scoping** is the baseline customization technique of selecting only the specific controls that are relevant and applicable to the systems, technology, or operational environment (e.g., removing network-dependent controls like WAFs or remote patch managers because the system is physically air-gapped).
*   **Why others are incorrect**:
    *   *B is incorrect* because **Tailoring** is the broader, over-arching process of adjusting baseline controls to align with the organization's unique mission, threat profile, and regulatory requirements (which includes scoping as a sub-step).
    *   *C is incorrect* because imaging is a system deployment technique (baseline copying), not a control selection process.
    *   *D is incorrect* because downgrading refers to data classification changes, not baseline control adjustments.
