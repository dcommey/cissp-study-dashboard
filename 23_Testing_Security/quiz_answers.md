# Quiz Answers & Explanations: Testing Security

## Question 1
**Correct Answer: C**

### Explanation:
* **A) Incorrect:** SOC 1 reports are designed specifically to evaluate controls that affect a client's financial reporting, not their security or privacy posture.
* **B) Incorrect:** A SOC 2 Type 1 report only assesses the design of controls at a single point in time, rather than testing their operational effectiveness over a period of time.
* **C) Correct:** A SOC 2 Type 2 report tests the design and operational effectiveness of controls related to security, availability, processing integrity, confidentiality, and privacy over a designated period (e.g., six months). Because it contains detailed audit results and configurations, it is confidential and shared under an NDA.
* **D) Incorrect:** A SOC 3 report is a simplified, public document that provides a summary of the system and does not contain detailed testing data. It is public and does not require an NDA.

---

## Question 2
**Correct Answer: D**

### Explanation:
* **A) Incorrect:** A TCP Connect Scan completes the full three-way handshake and interacts directly with the target, revealing the scanner's IP address. It is highly logged and noisy.
* **B) Incorrect:** A TCP SYN Scan (half-open scan) sends SYN packets directly from the scanning host to the target. While it doesn't complete the full handshake, the target will still see the scan packets originating from the scanner's IP.
* **C) Incorrect:** A TCP ACK Scan is used to determine firewall rule sets and filter statuses, not to discover open ports.
* **D) Correct:** An Idle (Zombie) Scan uses a spoofed source IP address (representing a silent third-party 'zombie' host) to send SYN packets to the target. By checking the IPID field on the zombie host before and after the scan, the attacker determines if the target port was open or closed without sending a single packet from their own IP.

---

## Question 3
**Correct Answer: C**

### Explanation:
* **A) Incorrect:** Nmap is a port scanner and host discovery tool. While it has scripting capabilities (NSE), it is not designed to exploit SQL injection or extract database content.
* **B) Incorrect:** ZAP (Zed Attack Proxy) is an outstanding tool for finding general web vulnerabilities but is not a dedicated tool for deep, automated database takeover and SQL injection extraction.
* **C) Correct:** SQLmap is the industry-standard tool specifically developed to automate the detection and exploitation of SQL injection vulnerabilities and the extraction of data from backend databases.
* **D) Incorrect:** Metasploit is a generic exploit framework. While it has some modules that can interact with databases, it lacks the specialized, automated data-extraction capabilities of SQLmap.

---

## Question 4
**Correct Answer: A**

### Explanation:
* **A) Correct:** The Fagan Inspection is a highly formal code review process consisting of six sequential steps: Planning, Overview, Preparation, Inspection, Rework, and Follow-up.
* **B) Incorrect:** A Software Walkthrough is an informal, peer-driven review that does not have the formal phases or rigorous metrics of a Fagan Inspection.
* **C) Incorrect:** Static Application Security Testing (SAST) is an automated tool scanning source code, not a peer-based manual code review methodology.
* **D) Incorrect:** Generational Fuzzing is an automated, dynamic testing technique that feeds custom-generated malformed inputs to a running program.

---

## Question 5
**Correct Answer: D**

### Explanation:
* **A) Incorrect:** A Syslog server centralizes logs but does not correct the clock time skew of the servers generating the logs.
* **B) Incorrect:** NetFlow captures metadata about network conversations but does not synchronize device clocks.
* **C) Incorrect:** A SIEM can correlate events, but if the log sources themselves write incorrect timestamps due to clock skew, the SIEM's correlation rules may fail or produce inaccurate timelines.
* **D) Correct:** Network Time Protocol (NTP) synchronizes system clocks across all devices, ensuring that all log entries write consistent timestamps and allowing for accurate chronological reconstruction of events during an incident.
