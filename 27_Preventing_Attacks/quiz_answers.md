# Quiz Answers & Explanations: Preventing Attacks

## Question 1
**Correct Answer: B**

### Explanation:
* **A) Incorrect:** Decoy virtual machines mimicking a DMZ are called a honeynet. Man-in-the-middle decryption is a different network monitoring concept.
* **B) Correct:** A honeynet is a group or subnet of honeypots mimicking a real network. When deploying honeypots/honeynets, organizations must avoid active enticement or provocation of illegal acts, which can be legally construed as entrapment and potentially expose the organization to legal liability.
* **C) Incorrect:** Sandboxing is the process of isolating a running application in a virtual shell to analyze its behavior or restrict it.
* **D) Incorrect:** Unified Threat Management (UTM) is a unified security gateway appliance, not a decoy network.

---

## Question 2
**Correct Answer: B**

### Explanation:
* **A) Incorrect:** An application deny list (blacklist) blocks only known bad files, allowing all others to run. This is risky because new or unknown zero-day malware will bypass the block list.
* **B) Correct:** An application allow list (whitelist) is the most secure method because it blocks everything by default, only allowing pre-approved files to execute, preventing any unauthorized software from running.
* **C) Incorrect:** Signature-based anti-malware cannot prevent all unauthorized software from running, only files matching known malware signatures.
* **D) Incorrect:** Device posture validation checks system configuration state (such as OS version and patch status) before allowing it onto a network but does not control what local programs a user can launch.

---

## Question 3
**Correct Answer: B**

### Explanation:
* **A) Incorrect:** NetFlow sampling captures statistical traffic metadata, not the event log messages from servers.
* **B) Correct:** WORM (Write Once, Read Many) storage ensures that data, once written, cannot be modified or deleted. Saving log files to WORM media ensures their integrity and provides non-repudiation, making it impossible for attackers to delete their traces.
* **C) Incorrect:** SOAR playbooks and runbooks automate response actions but do not secure the storage media where logs reside.
* **D) Incorrect:** Syslog-ng over UDP is a log forwarding transport protocol but does not prevent deletion of files on the syslog server's local disk.

---

## Question 4
**Correct Answer: B**

### Explanation:
* **A) Incorrect:** This swaps the definitions of runbook and playbook.
* **B) Correct:** A playbook is the procedural document detailing the step-by-step logic and guidelines for handling a security incident. A runbook is the automated implementation (the scripts or code) of that playbook that runs on the SOAR platform.
* **C) Incorrect:** Baselines and standards are governance documents that define configuration rules, not incident response workflows.
* **D) Incorrect:** Threat feeds supply malware indicators, and ACLs filter firewall traffic.

---

## Question 5
**Correct Answer: B**

### Explanation:
* **A) Incorrect:** The Cyber Kill Chain is a linear, step-by-step model of sequential attack phases (e.g., from reconnaissance to actions on objectives).
* **B) Correct:** The MITRE ATT&CK matrix is a comprehensive database of real-world adversary tactics, techniques, and procedures (TTPs) organized as a non-linear, non-sequential matrix. It acts as a threat modeling tool.
* **C) Incorrect:** ISO 27002 is a standard that outlines guidelines for information security controls, not a database of adversary behaviors.
* **D) Incorrect:** UTM is a hardware security gateway, not a threat modeling framework.
