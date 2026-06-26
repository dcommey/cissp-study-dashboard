# CISSP Study Notes: Testing Security

## 1. Security Assessments, Audits, and Frameworks

Security controls must be systematically evaluated to determine their design correctness and operational effectiveness. These activities range from automated checks to independent external reviews.

### Security Tests vs. Assessments vs. Audits
* **Security Tests**: Technical, localized checks performed to confirm that a specific control is doing its job (e.g., running vulnerability scans, checking firewall rule logic, or executing manual bypass attempts).
* **Security Assessments**: A broader, less intrusive review of the organization’s overall security posture. This process measures control effectiveness against criteria like compliance frameworks or internal risk analysis. Assessments often involve reviewing system configurations, reviewing logs, and checking documentation.
* **Security Audits**: The most formal evaluation, designed to verify that security controls are aligned with policies and regulatory standards. Audits are conducted by independent, unbiased parties:
  * **Internal Auditors**: Part of the organization, reporting to executive management or the board, focusing on internal policy compliance.
  * **External Auditors**: Independent third-party firms hired to provide an objective opinion to investors, board members, or customers.
  * **Big Four Accounting Firms**: Ernst & Young, Deloitte, PricewaterhouseCoopers (PwC), and **KPMG** (**KPMG**) are commonly accepted by boards and investors for formal external audits.

### Service Organization Control (SOC) Audits
When service organizations provide hosting or cloud services to customers, third-party audits are critical for validating security assertions without requiring every customer to audit them individually.
* **SSAE 18** (Statement on Standards for Attestation Engagements no. 18): The American auditing standard used to assess service organizations.
* **ISAE 3402** (International Standard on Assurance Engagements 3402): The equivalent international standard used outside the US (**ISAE**).
* **SOC Reports**:
  * **SOC 1**: Assesses controls that impact a customer's financial reporting.
  * **SOC 2**: Assesses controls related to the security, availability, processing integrity, **confidentiality**, and privacy of information. Results are sensitive and typically shared under a Non-Disclosure Agreement (**NDA**).
  * **SOC 3**: Covers the same security criteria as SOC 2, but the final report is high-level, contains no proprietary details, and is public.
  * **Type 1 Reports**: Evaluate the design of controls at a specific point in time (often called a "paper review").
  * **Type 2 Reports**: Evaluate the operational effectiveness of controls over a minimum testing period (typically 6 months).

### Standards and Frameworks
* **COBIT** (Control Objectives for Information and Related Technologies): A comprehensive governance and management framework for enterprise IT, maintained by **ISACA** (**ISACA**).
* **ISO** (International Organization for Standardization) Standards:
  * **ISO** 27001: Outlines the requirements for establishing, implementing, and maintaining an Information Security Management System (ISMS).
  * **ISO** 27002: Provides detailed guidelines and best practices for implementing security controls.
* **NIST** (National Institute of Standards and Technology) Guidelines:
  * **NIST** SP 800-115: Technical guide to information security testing and assessment.

---

## 2. Vulnerability Assessment and Automation (SCAP)

Vulnerability assessments identify, categorize, and prioritize weaknesses within systems and applications. To standardize how vulnerability information is communicated, **NIST** developed the Security Content Automation Protocol (**SCAP**), which includes:
* **CVE** (Common Vulnerabilities and Exposures): A dictionary of unique identifiers for publicly known cybersecurity vulnerabilities (**CVE**).
* **CVSS** (Common Vulnerability Scoring System): A standardized framework for rating the severity of vulnerabilities on a scale from 0.0 to 10.0 (**CVSS**).
* **CCE** (Common Configuration Enumeration): A dictionary of unique identifiers for system configuration issues (**CCE**).
* **CPE** (Common Platform Enumeration): A structured naming scheme for information technology systems, platforms, software, and operating systems (**CPE**).
* **XCCDF** (Extensible Configuration Checklist Description Format): An XML specifications language for writing security checklists and configuration rules (**XCCDF**).
* **OVAL** (Open Vulnerability and Assessment Language): An XML language used to describe the exact system state testing procedures for determining if a vulnerability exists (**OVAL**).

---

## 3. Network Discovery and Port Scanning

Before testing or attacking, network discovery (**identification**) must be performed to find what hosts are alive and what ports are open.

### Port Status (e.g., using Nmap)
* **Open**: The port is reachable, and an application is actively listening for connections.
* **Closed**: The port is reachable (no firewall blocking it), but no application is listening.
* **Filtered**: The scanner cannot determine if the port is open or closed because a firewall is blocking the traffic.

### Scanning Techniques
* **TCP SYN Scan (Half-Open)**: Sends a packet with the **SYN** flag set. If the host responds with **SYN**-**ACK**, the port is open. The scanner then sends an **RST** (reset) packet instead of completing the handshake. Completing a half-open scan requires root/administrator privileges to send raw packets. Large numbers of half-open connections can cause a denial-of-service on resources.
* **TCP Connect Scan**: Completes the full three-way handshake. Used when the scanning **user** lacks admin rights to construct raw packets. This scan is easily logged by target firewalls and host operating systems.
* **TCP ACK Scan**: Sends a packet with only the **ACK** flag set to test firewall filtering behavior. If the firewall is stateless, it may allow the packet, assuming it is part of an established session.
* **UDP Scan**: Sends a **UDP** packet and waits. Since UDP is connectionless, it relies on ICMP port unreachable messages or timeouts to determine status. It is slow and less precise.
* **Christmas (Xmas) Scan**: Sends a packet with **FIN**, **PSH**, and **URG** flags all turned on ("lit up like a Christmas tree"). Stateful firewalls and modern systems block this, but it can sneak through basic stateless packet-filtering routers.
* **Idle (Zombie) Scan**: A stealthy scan that uses a third-party idle host ("zombie") to scan the target. It leverages the predictability of the IP Identification (**IPID**) field.
  1. Attacker queries zombie's **IPID** by sending **SYN**-**ACK** and receiving an **RST**.
  2. Attacker sends a spoofed **SYN** packet to the target, pretending to be the zombie.
  3. If the target port is open, the target sends **SYN**-**ACK** to the zombie, prompting the zombie to reply with an **RST** (incrementing the zombie's **IPID** by 1). If closed, target sends **RST** to zombie (zombie does nothing).
  4. Attacker queries zombie again. If **IPID** increased by 2, the target port is open. If increased by 1, the port is closed.

### Common Ports & Protocols to Memorize
* **FTP** (File Transfer Protocol): Ports 20 & 21 (uses **TCP**)
* **SSH** (Secure Shell): Port 22
* Telnet: Port 23
* **SMTP** (Simple Mail Transfer Protocol): Port 25
* **DNS** (Domain Name System): Port 53 (uses both **TCP** and **UDP**)
* **HTTP** (Hypertext Transfer Protocol): Port 80
* POP3: Port 110
* **NTP** (Network Time Protocol): Port 123 (uses **UDP**)
* Windows NetBIOS/SMB: Ports 135, 137–139, 445
* **HTTPS** (HTTP Secure): Port 443
* **LPR** / **LPD** (Line Printer Remote/Daemon): Port 515 (**LPR**, **LPD**)
* Microsoft **SQL** Server: Ports 1433 & 1434 (**SQL**)
* Oracle Database: Port 1521
* H.323 (VoIP): Port 7020
* **PPTP** (Point-to-Point Tunneling Protocol): Port 7023 (**PPTP**)
* **RDP** (Remote Desktop Protocol): Port 3389 (**RDP**)

---

## 4. Web Application and Database Security

Web applications are highly targeted because they are exposed to the Internet via ports 80/443.
* **Web Application Firewalls (WAFs)**: Layer 7 firewalls designed to inspect, sanitize, and block malicious traffic before it reaches web servers (**WAF**).
* **OWASP** (Open Web Application Security Project): A global non-profit organization focused on web application security. Their website (**OWASP**) hosts the **OWASP** Top 10 lists of critical risks.
* **Web Scanning Tools**: **ZAP** (OWASP Zed Attack Proxy) and Burp Suite are commonly used to find inputs vulnerable to manipulation (**ZAP**).
* **Compliance Requirements**: Compliance standards like the Payment Card Industry Data Security Standard (**PCI** **DSS**) require organizations to either perform web application vulnerability scans at least annually or deploy a web application firewall (**WAF**).
* **SQL Injection**: Input validation failure where malicious **SQL** commands are passed into input fields to manipulate backend databases. **SQLmap** (**SQLMAP**) is an automated tool used to detect and exploit SQL injection vulnerabilities.

---

## 5. Penetration Testing (Ethical Hacking)

Penetration testing actively exploits vulnerabilities to bypass security controls and confirm their real-world impact.
* **Rules of Engagement (RoE)**: A documented agreement defining the boundaries, approved targets, testing windows, and contact procedures. Management approval is mandatory before any penetration test begins to prevent operational impact.
* **Information Gathering / OSINT**: Utilizing Open Source Intelligence (**OSINT**) and public records to collect information on the target.
* **Testing Types**:
  * **White Box / Clear Box**: Tester has full knowledge of network layouts, system configurations, and source code. Fast and thorough, but less realistic.
  * **Gray Box**: Tester has partial knowledge (e.g., a standard user credential or a basic network map). Simulates a compromised user or disgruntled employee.
  * **Black Box / Closed Box**: Tester has zero knowledge of internal systems and must perform initial discovery. Simulates an external threat actor.
* **Breach and Attack Simulation (BAS)**: Automated platforms that generate simulated attacks to continuously test the detection and prevention controls of an enterprise without interrupting operations (**BAS**).
* **Penetration Testing Methodologies**: Common manuals include OSSTMM (Open Source Security Testing Methodology Manual), OWASP Web Security Testing Guide, and NIST SP 800-115.

---

## 6. Software and Code Testing

Applications must handle exceptions gracefully to avoid crashes, buffer overflows, or authentication bypasses.
* **Fagan Inspection**: A highly rigorous, formal 6-step code inspection process: Planning, Overview, Preparation, Inspection, Rework, and Follow-up.
* **Walkthrough**: An informal peer-review where developers present and explain their code.
* **Static Testing**: Analyzing code without executing it (e.g., using static application security testing tools to search for buffer overflows, memory leaks, and unreachable code).
* **Dynamic Testing**: Testing the application while it is running in a virtual machine or container. This is useful when the tester does not have access to source code.
* **Fuzz Testing (Fuzzing)**: Injecting random, invalid, or malformed inputs to test how the application handles errors.
  * **Mutation Fuzzing**: Taking existing valid inputs and altering them slightly.
  * **Generational Fuzzing**: Creating inputs from scratch based on a logical data structure or protocol specification.
* **Interface Testing**: Verifying that distinct software modules talk to each other correctly, exchanging data without errors or syntax issues (e.g., APIs, network connections, user interfaces).
* **Misuse Case Testing**: Evaluating how the application handles malicious input or illegal workflows.
* **Code Coverage Metrics**:
  * **Branch Coverage**: Measures if every decision path (e.g., if/else blocks) has been executed.
  * **Function Coverage**: Measures how many defined functions have been called and returned data.
  * **Loop Coverage**: Measures if loops have been tested zero times, once, and multiple times.
  * **Statement Coverage**: Measures the percentage of lines of code executed. Note that 100% statement coverage does not mean the code is secure or error-free.
* **Website Monitoring**:
  * **Real User Monitoring (RUM)**: Passive monitoring that captures and analyzes the actual web requests of live users (**RUM**).
  * **Synthetic Monitoring**: Active monitoring that sends simulated transactions to verify availability and performance.

---

## 7. Security Management, Audits, and Metrics

A strong security program must have continuous monitoring and validation.
* **SIEM** (Security Information and Event Management): Collects, normalizes, and correlates logs from multiple systems in a central location (**SIEM**).
* **NTP** (Network Time Protocol): Used to synchronize clocks across all hosts and network devices to ensure log timestamps are aligned during forensic investigations (**NTP**).
* **NetFlow**: A protocol developed by Cisco that logs metadata summaries of network traffic (who spoke to whom, how many packets, bytes, etc.) rather than capturing the full packet contents.
* **Vulnerability Management Metrics (KPIs)**:
  * Number of open vulnerabilities.
  * Mean time to resolve vulnerabilities (vulnerability **mitigation** time).
  * Recurrence rate of previously fixed bugs.
  * Repeat audit findings.
  * User attempts to visit known malicious sites.

---

## 8. What to Remember for the Exam (Manager/Governance Perspective)

* **Business Impact First**: Always evaluate how tests will affect operations. Run tests during maintenance windows and obtain written authorization first to manage **liability**.
* **Type 2 is the Gold Standard**: For SOC audits, a Type 1 report only checks that controls are written down, whereas a Type 2 report tests if they actually work over time.
* **Confidentiality, Integrity, Availability (CIA)**: Every test and audit must serve to protect against unauthorized data **disclosure**, unauthorized **alteration** (preserving **integrity**), and system **destruction** or downtime (preserving **availability**).
* **Ethics and Disclosure**: If you discover a security **vulnerability** or a potential **threat** that could lead to a **breach**, report it responsibly to the vendor first. If they ignore it, public disclosure may be necessary to protect the community.
* **Continuous Testing**: Security is an ongoing cycle of **mitigation** and **recovery**. A single audit or scan is only a point-in-time snapshot, not a guarantee of continuous protection.
