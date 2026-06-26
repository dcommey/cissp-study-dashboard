# CISSP Practice Quiz Answers - Video 31: Application Security Part 1

Here are the correct answers and detailed explanations for the Video 31 quiz.

---

### Question 1
**Correct Answer: A**

*   **Explanation**: A multipartite virus is one that can infect multiple parts of a system (such as files and the boot sector/MBR) to ensure propagation and survival. Stealth techniques involve the malware hiding itself, such as by intercepting system calls (API/read calls) and returning uninfected bytes to the antivirus scanner to make the system appear healthy.
*   **Why others are incorrect**:
    *   *B is incorrect* because worms spread automatically over networks (not relying on file sharing/MBR reboots), and a logic bomb is a dormant trigger, which is not described.
    *   *C is incorrect* because fileless malware runs in memory and does not infect MBR sector files on disk.
    *   *D is incorrect* because ransomware encrypts files and demands payment, which is not part of this propagation/evasion description.

---

### Question 2
**Correct Answer: B**

*   **Explanation**: Sandbox evasion is a common feature in modern malware. The program checks the environment for virtual machine characteristics (e.g., hypervisor drivers like VMware Tools, specific MAC address prefixes, or hardware profiles). If it detects a virtualized environment, it halts execution or runs benignly to prevent security analysts from observing its malicious behavior.
*   **Why others are incorrect**:
    *   *A is incorrect* because fileless scripts can run in virtual environments just as they do on physical hardware; virtualization is what blocked the execution.
    *   *C is incorrect* because the scenario does not mention USB connection events or logic bombs.
    *   *D is incorrect* because an antivirus update would block the malware, not cause it to execute successfully on the employee workstation.

---

### Question 3
**Correct Answer: B**

*   **Explanation**: The standard response to a ransomware attack is to isolate the affected systems, wipe them, and restore from clean, offline backups. This constitutes a recovery/corrective control. Paying the ransom is strongly discouraged because it provides no guarantee of recovery and funds further malicious operations.
*   **Why others are incorrect**:
    *   *A is incorrect* because paying the ransom is not a recommended CISSP action, and it is not a preventative control.
    *   *C is incorrect* because while isolation (VLAN segmenting) is a technical control, scanning for polymorphic signatures does not restore the encrypted database.
    *   *D is incorrect* because holding the owner liable is an administrative action, not a restoration method, and does not help recover the database.

---

### Question 4
**Correct Answer: B**

*   **Explanation**: File Integrity Monitoring (FIM) is the primary technology used to protect files (including web server assets) against unauthorized modification or defacement. It works by computing a cryptographic hash (e.g., SHA-256) of each file and comparing it against a baseline hash. If the hashes differ, FIM raises an alert.
*   **Why others are incorrect**:
    *   *A is incorrect* because EDR does not focus on static website defacement detection via hash analysis, and sandboxing every web request would introduce unacceptable latency.
    *   *C is incorrect* because UEBA focuses on user account anomalies rather than file defacement.
    *   *D is incorrect* because while blocking FTP and RDP is a preventative firewall policy, it does not monitor files for changes or detect modifications that occur via other vectors (such as web application vulnerabilities).

---

### Question 5
**Correct Answer: B**

*   **Explanation**: Endpoint Detection and Response (EDR) or Extended Detection and Response (XDR) provides deep visibility into endpoints, including tracing file trajectories and executing automated incident response actions (such as isolating hosts from the VLAN). User and Entity Behavior Analytics (UEBA) tracks user account activities over time to identify compromised credentials and insider threats.
*   **Why others are incorrect**:
    *   *A is incorrect* because signature-based AV cannot trace file trajectories or perform behavioral user analysis. Port security (802.1X) is a port-based admission control, not a behavioral analytics tool.
    *   *C is incorrect* because FIM only monitors files for changes (no user behavior analysis), and SMTP is an email transport protocol.
    *   *D is incorrect* because a sandbox is an analysis environment and a logic bomb is a malicious code type; they do not monitor and secure endpoints.
