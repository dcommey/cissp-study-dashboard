# CISSP Study Notes: Security Incidents and Attacks

Incident Management focuses on protecting the **confidentiality**, **integrity**, and **availability** of organizational assets by minimizing the impact of security events.

---

## 1. Incident Response and Management Framework

An **incident** is defined as any event that has an adverse effect on system assets or violates the organization’s security **policy**.
* **Incident vs. Breach**: A security **incident** is a policy violation (e.g., malware detection), whereas a **breach** represents the actual unauthorized disclosure or theft of sensitive data.
* **CIRT / CSIRT**: The Computer Incident Response Team (**CIRT**) or Computer Security Incident Response Team (**CSIRT**) is the specialized group of personnel **responsible** for executing the incident response plan (**CIRT**, **CSIRT**).
* **Incident Response Phases**:
  1. **Detection**: Confirming an incident has occurred (using logs, alerts, user complaints, or **IDS** signatures).
  2. **Response**: Activating the **CSIRT** to isolate the affected systems and contain the threat.
  3. **Mitigation**: Implementing corrective or preventive configuration changes (e.g., adding **ACL** entries to block an IP) (**ACL**).
  4. **Reporting**: Informing internal stakeholders (e.g., notifying the **CEO** of serious breaches) and external regulatory bodies (**CEO**).
  5. **Recovery**: Restoring systems to a known secure state using backups (**recovery**).
  6. **Remediation**: Finding and resolving the root cause of the **vulnerability** (e.g., patching).
  7. **Lessons Learned**: Reviewing the incident to update policies, **baseline** images, and training.

---

## 2. Security Controls and Defense-in-Depth

Organizations use a **defense-in-depth** strategy to combine multiple layers of security:
* **Control Types**:
  * **Physical**: Fences, locks, and **physical** barriers.
  * **Logical / Technical**: Access control lists (**ACL**), firewalls, encryption (**TLS**, **SSH**), and **IDS** / **IPS** systems.
  * **Administrative / Managerial**: Policies, **standard** operating procedures, and security training.
* **Control Functions**:
  * **Preventive**: Designed to block unauthorized actions (e.g., firewalls, **authentication** controls).
  * **Detective**: Designed to discover unauthorized actions after they occur (e.g., audit logs, motion detectors, job rotation, mandatory vacation).
  * **Recovery / Corrective**: Designed to restore systems after an incident (e.g., restoring from backup tapes, running rebuild scripts).
* **Policy Hierarchy**:
  * **Policy**: High-level governance statement.
  * **Acceptable Use Policy (AUP)**: Defines the rules for **user** behavior regarding corporate networks and assets (**AUP**, **acceptable use**).
  * **Standard**: Mandatory rules or technologies to enforce policies (**standard**).
  * **Baseline**: Pre-approved minimum security configurations (**baseline**).

---

## 3. Intrusion Detection and Prevention Systems (IDS/IPS)

Intrusion detection and prevention systems automate the process of monitoring system events to identify and block security policy violations.

### Host-Based vs. Network-Based Systems
* **HIDS** (Host-Based IDS): Installed on a single server or workstation. It monitors system calls, file integrity, host firewalls, and local processes (**HIDS**).
  * *Advantages*: Can analyze encrypted traffic (once decrypted at the endpoint) and detect local privilege misuse.
  * *Disadvantages*: Consumes local host resources (**CPU** and **RAM**), which can cause client systems to become sluggish. Logs are stored locally and are vulnerable if the host is compromised (**CPU**, **RAM**).
* **NIDS** (Network-Based IDS): Deployed at critical network points (e.g., uplinks) to analyze packet headers and payloads in transit (**NIDS**).
  * *Advantages*: Easy to manage centrally; does not affect individual host performance.
  * *Disadvantages*: Cannot inspect encrypted traffic (**TLS** / **HTTPS** sessions) without a decryption solution.
* **IPS** (Intrusion Prevention System): An active control placed *in-line* with network traffic. Unlike a passive **IDS** which only alerts, an **IPS** can actively drop packets, send a **TCP** reset (**RST**) packet, or change firewall **ACL** rules dynamically (**IPS**, **IDS**, **TCP**, **RST**).
* **SDN** Integration: Software-Defined Networking (**SDN**) allows a **NIDS** / **IPS** to communicate directly with the **SDN** controller to dynamically apply block rules across the virtual network switch fabric (**SDN**).

### Detection Methodologies
1. **Signature-Based (Knowledge-Based)**: Matches traffic against a database of known threat patterns. Highly effective against known attacks, but fails against zero-day exploits.
2. **Anomaly-Based (Behavior-Based)**: Establishes a **baseline** of normal network behavior. Alerts on deviations. Can detect new threats but suffers from high false-positive rates.

### Detection Outcomes
* **True Positive**: Incident occurred, and system alerted (Ideal).
* **False Negative**: Incident occurred, but system remained silent (Dangerous).
* **False Positive**: No incident occurred, but system alerted (Annoying).
* **True Negative**: No incident occurred, and system remained silent (Normal).

---

## 4. Network Attack Vectors and Mitigation

Attackers exploit network protocols (**TCP**, **UDP**, **ICMP**, **ARP**) to compromise systems or exhaust resources.

### TCP Session Attacks
* **SYN Flood**: Attackers flood a server with **SYN** packets using spoofed source IPs but never reply to the server's **SYN**-**ACK** with the final **ACK** packet (**SYN**, **ACK**). This fills the connection queue, causing a denial of **availability**.
  * *Mitigation*: Enable **SYN** cookies (making clients store the connection state) or shorten the TCP half-open timeout.
* **TCP Reset Attack**: Sending fake **RST** packets to force active connections to close.
* **FIN Scan**: Sending packets with the **FIN** flag set to probe open/closed ports (**FIN**).

### Legacy and Amplification Attacks
* **Smurf Attack**: Sends **ICMP** echo requests to a network's broadcast address, spoofing the victim's IP as the source (**ICMP**). Every host on the subnet replies to the victim, flooding it. (Blocked by disabling IP directed broadcasts).
* **Fraggle Attack**: Similar to Smurf but uses **UDP** traffic directed at ports like 7 (Echo) or 19 (Chargen) (**UDP**).
* **Ping Flood**: Flooding a target with **ICMP** echo requests.
* **Ping of Death**: Sending an oversized **ICMP** packet (> 65,535 bytes) to cause a buffer overflow crash.
* **Teardrop Attack**: Sending fragmented packets with overlapping offset values, causing the target's reassembly engine to crash.
* **Land Attack**: Sending a **SYN** packet where the source and destination IP/port are set to the victim's own IP/port.
* **Banana Attack**: Boomerang attack that redirects a client's outgoing traffic back to itself.

### Man-in-the-Middle (MITM) and Eavesdropping
In a **MITM** attack, an attacker places themselves in the communication path between a user and a server (**MITM**).
* **ARP Spoofing**: Sending fake **ARP** replies to associate the attacker's MAC address with the default gateway IP (**ARP**).
* **DNS Spoofing**: Injecting malicious records into the local **DNS** cache to redirect web traffic (**DNS**).
* **STP Manipulation**: Injecting Spanning Tree Protocol (**STP**) configuration BPDUs to force the attacker's switch to become the root bridge (**STP**).
* **TLS Decryption**: Organizations deploy **TLS** decryptors (using hardware **ASICS** for crypto acceleration) to perform authorized **MITM** decryption for outbound employee traffic to enforce the **AUP** (**TLS**, **HTTPS**, **HTTP**, **AUP**).
  * *Limitation*: Attackers can bypass network TLS inspection by encrypting files locally (e.g., using password-protected **RAR** or zip archives) before transmission (**RAR**).
  * *Wi-Fi MITM*: Attackers set up rogue APs to intercept traffic. Users should never accept new root certificates on public networks.

---

## 5. Unified Threat Management (UTM) and Data Loss Prevention (DLP)

* **UTM** (Unified Threat Management): A single gateway appliance that combines a firewall, network-based **IPS**, gateway anti-malware, content filtering, and **DLP** capabilities (**UTM**, **DLP**).
* **WAF** (Web Application Firewall): A layer 7 firewall designed to inspect HTTP traffic for application-level attacks like **SQL** injection (**SQL**, **HTTP**).

---

## 6. What to Remember for the Exam (Manager/Governance Perspective)

* **Incident Goal**: The objective of incident management is **mitigation** of impact and business recovery, not launching a counter-attack or retaliating.
* **AUP Enforcement**: TLS decryption is a standard administrative and technical control used to monitor adherence to the **acceptable use** policy.
* **Defense-in-Depth**: No single control is sufficient. Use physical, administrative, and technical controls together.
* **Lessons Learned**: The most critical corrective phase is the lessons-learned review to feed findings back into the security policy, standard operating procedures, and security **baselines**.
