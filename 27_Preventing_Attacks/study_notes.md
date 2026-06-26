# CISSP Study Notes: Preventing Attacks

Preventing attacks involves implementing administrative, **physical**, and **technical** safeguards to reduce an organization's risk **exposure** and defend its assets against security **threat** vectors (**physical**, **technical**, **exposure**, **threat**).

---

## 1. Active Defense and Perimeter Safeguards

Active defense strategies are designed to delay, distract, and analyze attackers before they reach critical assets.
* **Honeypots**: A decoy computer configured with vulnerabilities and fake data to attract attackers, allowing the security team to analyze their tools.
* **Honeynets**: An entire network of decoy systems designed to simulate a real corporate network or **DMZ** (demilitarized zone) (**DMZ**).
  * *Legal Considerations*: While legal to decoy attackers, it is illegal to actively entice or entrap them. Always consult legal counsel.
* **Warning Banners**: Administrative and **preventive** notices displayed at logon screens to inform a **user** of security policies and monitoring. They establish consent, preventing intruders from claiming they were unaware of monitoring in a court of law (**preventive**, **user**).
* **Firewalls**: Stateful, application, and next-generation firewalls utilize access control lists (**ACL**) to block unauthorized traffic by default (**ACL**).
  * *Boundary Controls*: Firewalls at the network edge should block private IP addresses from entering/leaving the network (spoofing protection) and block directed broadcasts.
  * *ISP Filtering*: Internet Service Providers (**ISP**) drop unroutable private IP addresses immediately at the provider edge (**ISP**).
  * *ICMP Block*: Blocking **ICMP** (Ping) packets from the outside restricts attacker scanning (**ICMP**).
* **WAF** (Web Application Firewall): A layer 7 **preventive** control designed to block application-specific attacks like **SQL** injection (**WAF**, **SQL**).

---

## 2. Anti-Malware, Sandboxing, and Application Control

To protect system **integrity**, organizations implement multi-layered defenses against malicious code (viruses, **WORM** malware, Trojans) (**integrity**, **WORM**).
* **Anti-Malware**:
  * *Signature-Based*: Compares bytecode snippets against a database of known threats. Requires automatic **policy**-driven updates via Group **policy** to remain effective (**policy**).
  * *Behavior-Based*: Monitors application behavior in real time to spot malicious actions (useful against zero-day threats).
  * *Cloud-Based*: Uploads a cryptographic hash of the file to a cloud service (e.g., VirusTotal) to obtain a verdict, avoiding local resource overhead.
* **Application Control**:
  * **Allow Lists (White lists)**: Block all executables by default, only allowing pre-approved files. Highly secure but administratively intensive.
  * **Deny Lists (Black lists)**: Allow all executables by default, blocking only known malicious applications. More flexible but less secure.
  * *Jailbreaking/Rooting*: Users bypassing allow lists on mobile devices (e.g., Apple iOS), increasing security risks.
* **Sandboxing**: Executing unknown programs in an isolated virtual machine or container to analyze behavior without risking the host system.
  * *Anti-VM Malware*: Smart malware that detects virtualization environments (e.g., checking for specific drivers or accelerating time) and remains dormant to evade sandboxes.

---

## 3. Security Auditing, Logging, and Monitoring

Monitoring and **auditing** logs are vital **detective** controls used to reconstruct events leading up to a security **incident** (**auditing**, **detective**, **incident**).

### Log Architectures and Integrity
* **Security Logs**: Record user access, login attempts, and policy violations.
* **System Logs**: Record operating system events and services.
* **Application Logs**: Record developer-defined events.
* **Firewall/Proxy Logs**: Track blocked connections and web destinations.
* **WORM** (Write Once, Read Many): Storage technology (optical media or write-protected cloud buckets) that prevents data deletion or tampering, preserving log **integrity** for forensic analysis (**WORM**).
* **Syslog**: A standard protocol (**RFC** 5424) used to transmit logs from clients to a central syslog server (**RFC**).
  * *syslog-ng*: Extends syslog with **TCP** transport support and content-based filtering (**TCP**).
  * *rsyslog*: Supports forwarding and log redirection.

### Time Synchronization and Normalization
* **NTP** (Network Time Protocol): Synchronizes clocks across all hosts using a trusted time source. Accurate timestamps are critical to correlate log events chronologically across multiple devices (**NTP**).

### Analysis Techniques
* **Clipping Level**: A threshold that filters out normal noise (e.g., ignoring failed logins until they exceed a **baseline** of 5 failed attempts in 1 minute, which then triggers an alert) (**baseline**).
* **Sampling**: Extracting a subset of packets (e.g., 1 out of 100) to analyze network flows using **IPFIX** (IP Flow Information Export) or NetFlow to reduce **CPU** and **RAM** overhead on monitoring devices (**IPFIX**).

---

## 4. SIEM, SOAR, and Threat Intelligence Frameworks

Modern security operations centers rely on automation to handle the high volume of security events.
* **SIEM** (Security Information and Event Management): Combines **SIM** (Security Information **management**) and **SEM** (Security Event **management**) to collect, normalize, and correlate logs in real time (**SIEM**, **SIM**, **SEM**).
* **SOAR** (Security Orchestration, Automation, and Response): Automates incident response tasks (**SOAR**).
  * **Playbook**: Documented step-by-step procedures for validating and responding to an incident.
  * **Runbook**: Automated tools and scripts that execute the playbook steps without manual intervention.
* **Cyber Kill Chain**: A sequential 7-phase model (Reconnaissance, Weaponization, Delivery, Exploitation, Installation, Command and Control, Actions on Objectives) used to trace an attacker's steps.
* **MITRE ATT&CK Matrix**: A comprehensive, non-linear database of observed tactics, techniques, and procedures (TTPs) used by real-world threat actors (**MITRE**, **ATT**).
* **Threat Intelligence Feeds**: Continuous streams of indicators of compromise (hashes, IPs, domain names) used to feed firewall **ACL** rules and **IDS** / **IPS** signatures (**IDS**, **IPS**).

---

## 5. Unified Threat Management (UTM)

* **UTM** (Unified Threat Management): A single gateway security appliance that combines traditional firewalls, network-based **IDS** / **IPS**, gateway anti-malware, content filtering, and email spam filtering into a single system (**UTM**).
* **WAF** (Web Application Firewall): A layer 7 firewall designed to inspect HTTP traffic and block application-level attacks like **SQL** injection (**WAF**, **SQL**).

---

## 6. What to Remember for the Exam (Manager/Governance Perspective)

* **Accountability and Non-Repudiation**: Successful **identification** and **authentication** controls, combined with tamper-proof audit logs, ensure that the **management** can hold a specific **user** **accountable** for their actions (**identification**, **authentication**, **accountable**, **management**, **responsible**).
* **Legal and Policy Compliance**: Banners must explicitly warn users that all activities are monitored to maintain legal **compliance** during investigations (**compliance**).
* **Defense-in-Depth**: Integrate physical (e.g., **CCTV** cameras, security guards), administrative (e.g., **AUP** sign-offs), and technical (e.g., firewalls, **IDS** / **IPS**) controls to build a resilient posture (**CCTV**, **AUP**).
* **SIEM Optimization**: A **SIEM** is for real-time correlation and incident response, not long-term storage. Archive older logs to cheap **WORM** storage to prevent performance degradation.
