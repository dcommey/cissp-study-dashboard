# CISSP Study Notes - Video 7: Asset Security

## Overview of Asset Security
In the **CISSP** curriculum, asset security focus centers heavily on data protection throughout its entire lifecycle. Data is the most valuable asset, and organizations have a legal **liability** to protect it. Failing to protect data leads to a data **breach**, resulting in financial loss and damage to reputation.

---

## Data Classification Schemes
Data classification is the first step in identifying which assets require protection. It determines the necessary level of **confidentiality**, **integrity**, and **availability** (the **CIA** triad).

### Government vs. Private Sector Classifications
*   **Government Classifications**:
    *   *Top Secret*: Exceptionally grave damage to national security.
    *   *Secret*: Serious damage to national security.
    *   *Confidential*: Damage to national security.
    *   *Unclassified*: Generally available to the public, retrievable via the Freedom of Information Act (**FOIA**).
    *   *Sub-classifications*: For Official Use Only (FOUO) and Sensitive But Unclassified (**SBU**) (e.g., tax records).
*   **Private Sector Classifications**:
    *   *Confidential / Proprietary*: The highest tier. Compromise would cause major damage to the organization's mission.
    *   *Private*: Internal data (e.g., payroll, HR records) that must be kept from general **user** access.
    *   *Sensitive*: Internal IT or network configuration data which, if exposed, makes it easier for attackers to compromise systems.
    *   *Public*: Available to anyone (e.g., marketing materials). While confidentiality is not required, its **integrity** must be protected.

---

## Regulatory and Proprietary Data Types
*   **Personally Identifiable Information (PII)**: Defined by **NIST** SP 800-122 as any information maintained by an agency that can trace an individual's identity (e.g., name, Social Security Number, biometric records).
*   **Protected Health Information (PHI)**: Governed by **hippa** (Health Insurance Portability and Accountability Act). Covers physical or mental health records, healthcare provision, and medical bills.
*   **Proprietary Data**: Intellectual property (IP) like source code, algorithms, and recipes that give a company its competitive edge.

---

## States of Data and Security Controls
*   **Data at Rest**:
    *   Stored on media like hard drives, **SSD** (solid-state drives), **USB** flash drives, backup tapes, or a storage area network (**SAN**).
    *   Protected using strong symmetric encryption and logical access control.
*   **Data in Transit (in Motion)**:
    *   Traveling over internal networks or public networks.
    *   Protected using a combination of asymmetric encryption (for peer **authentication**) and symmetric encryption (for bulk data transfer, e.g., via **HTTPS** or **VPN** tunnels).
*   **Data in Use**:
    *   Temporarily stored in **CPU** registers, cache, or memory while active in an application.
    *   Decrypted in memory while in use. Modern **CPU** designs from Intel and **AMD** support memory encryption. Application designers must flush memory buffers once processing is complete.

---

## Data Loss Prevention (DLP)
A **DLP** (Data Loss Prevention) system monitors outgoing data flows to prevent unauthorized **disclosure** of sensitive data.
*   **Network-based DLP**: Scans data at the network perimeter. Actions include alerting, blocking (resetting connections), or creating a **tombstone** (replacing the file with a restriction notice).
*   **Endpoint-based DLP (Host-based)**: Software installed on the host. It inspects local files, USB writes, and print jobs. Because it runs on the host, it can inspect traffic before it is encrypted (e.g., bypassing **VPN** or HTTPS encryption).
*   **Data Discovery**: **DLP** systems can search fileshares to identify unprotected PII/PHI.

---

## Data Marking and Sanitization
*   **Marking**: Sensitive data must be marked physically (labels on media) or digitally (headers, footers, metadata, or digital watermarks in a document **management** system). Login banners (like an **SSH** warning banner) establish corporate liability.
*   **Downgrading**: Decreasing the classification level as data loses sensitivity over time.
*   **Data Remanence**: Residual data remaining on media after deletion. Common OS delete operations only mark blocks as available, leaving data recoverable.
*   **Sanitization Methods (NIST SP 800-88)**:
    *   *Clearing*: Overwriting media with zeros, ones, or random patterns.
    *   *Purging*: Multiple overwrites and degaussing to ensure data cannot be recovered by advanced laboratory techniques.
    *   *Degaussing*: Applying a strong magnetic field to disrupt magnetic media. Does not work on **SSD** or flash storage.
    *   *Cryptographic Erase*: Deleting the decryption key to render encrypted data unrecoverable. Highly useful for cloud storage.
    *   *Destruction*: Complete physical **destruction** of the media. Mandatory for government top secret data. Methods include:
        *   *Incineration* (burning to ash).
        *   *Crushing* (breaking hard drives, CDs, **DVD** media).
        *   *Shredding* (cutting paper, tapes, or floppy disks).
        *   *Disintegration* (breaking media into tiny particles).
        *   *Dissolving / Pulping* (using chemicals to dissolve paper or plastic).

---

## Other Data Protection Mechanisms
*   **Digital Rights Management (DRM)**: Protects copyright by restricting copying, printing, or sharing, often requiring an online **authentication** check. It can consume **CPU** cycles (e.g., Denuvo in games).
*   **Pseudonymization**: Replacing direct identifiers with artificial identifiers. Under **GDPR**, this allows data processing for analytics while protecting identity.
*   **Tokenization**: Replacing sensitive data (e.g., credit card numbers) with a temporary **token** (placeholder). The mapping is stored in a separate, highly secure database.
*   **Anonymization**: Permanently removing all personal linkable data. Care must be taken to prevent re-identification through demographic correlation. Techniques include randomized masking and banding (aggregating values into ranges).
*   **Cloud Access Security Broker (CASB)**: A software gatekeeper between the local network and cloud storage, enforcing security policies and preventing misconfigured public buckets.

---

## Data Roles and Governance
*   **Data Owner**: Typically senior executives (e.g., **CEO** or department heads) who hold ultimate **responsibility** for data classification, protection, security **policy**, and legal liability. They delegate daily tasks.
*   **Business / Mission Owner**: Managers who own the business processes that utilize the data.
*   **System / Asset Owner**: The manager who owns the IT assets, servers, or systems that store the data, ensuring they have appropriate **technical** and **physical** controls.
*   **Data Custodian**: The IT staff or database administrator **responsible** for daily upkeep, performing backups (a key **recovery** tool), maintaining logs, enabling **auditing**, and implementing access control **authorization** as dictated by the data owner.
*   **Data Controller**: Under **GDPR**, the entity that determines the purposes and means of processing personal data.
*   **Data Processor**: Under **GDPR**, the entity that processes personal data on behalf of the controller.
*   **Data Protection Officer (DPO)**: A mandatory role under **GDPR** responsible for monitoring compliance.

---

## Security Baselines
A security **baseline** represents the minimum security **standard** configured on systems.
*   **Imaging**: Cloning a master pre-configured image to ensure consistent configuration across hosts.
*   **NIST SP 800-53 Baselines**: Categorizes baselines into Low, Moderate, High, and Privacy control baselines based on CIA impact.
*   **Tailoring**: Modifying a baseline to fit specific organizational needs (e.g., disabling wireless controls on devices without Wi-Fi cards).
*   **Scoping**: Selecting only the relevant baseline controls for a specific system (e.g., removing logical perimeter firewall/**ipss** controls from an air-gapped network).

---

## Exam Tips: The Manager's Perspective
*   **Asset Owners vs. Data Custodians**: Remember that owners define the classification and security policies, while custodians (IT staff) implement the **technical**, **logical**, and **physical** safeguards (like backups and access controls).
*   **Destroying SSDs**: Degaussing is useless for SSDs. Use physical destruction or cryptographic erase.
*   **Preventative vs. Detective Controls**: Warning banners are **administrative** and **preventative** controls (deterrents) that protect the company's liability in a lawsuit.
