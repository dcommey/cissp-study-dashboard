# CISSP Practice Quiz - Video 31: Application Security Part 1

Test your understanding of malware, evasion techniques, and endpoint protection technologies. Apply your CISSP mindset!

---

### Question 1
A security analyst is investigating a malware outbreak in an enterprise. The analyst notices that the malware infects both executable files and the master boot record (MBR) to ensure persistence upon system reboots. Furthermore, when the analyst attempts to run an antivirus scan, the malware intercepts the filesystem read calls and returns the original, uninfected bytes to the scanner. Which combination of malware types and techniques is this malware demonstrating?

A. A multipartite virus using stealth techniques.  
B. A polymorphic worm using logic bomb triggers.  
C. A fileless trojan using heuristic evasion.  
D. A ransomware agent using encrypted payload signatures.  

---

### Question 2
A malware analyst runs a suspicious executable in an isolated virtual machine sandbox. The executable runs but performs no network calls, registry modifications, or file deletions. However, when the same file is accidentally executed on a physical employee workstation, it immediately opens a backdoor to a command and control server. What is the most likely reason for this difference in behavior?

A. The malware uses a fileless script that only executes when base64 encoded.  
B. The malware detects that it is running inside a virtual machine (VM) by checking for specific drivers or hypervisor artifacts and terminates or runs benignly to evade sandbox analysis.  
C. The malware is a logic bomb that is triggered only by physical USB connection events.  
D. The local antivirus software on the physical workstation updated its signature database, triggering the payload.  

---

### Question 3
An enterprise is hit by a ransomware attack that encrypts the main customer database. The attacker demands a ransom in cryptocurrency in exchange for the decryption key. The organization has an up-to-date, offline backup of the database from the previous evening. From a CISSP perspective, how should the organization respond, and what control classification is represented by their recovery method?

A. Pay the ransom to ensure the data is decrypted quickly, representing a preventative administrative control.  
B. Wipe the affected systems and restore the database from the offline backup, representing a recovery/corrective control.  
C. Isolate the database server on a VLAN and run a polymorphic signature scan, representing a detective technical control.  
D. Consult the user directory to identify the system owner and hold them liable for the incident, representing a deterrent physical control.  

---

### Question 4
A security administrator wants to protect public-facing web server files from unauthorized changes and defacement by external attackers. The administrator needs a tool that will monitor the files and alert the team immediately if any unauthorized modification occurs, without consuming heavy system resources. Which technology is best suited for this task, and how does it detect changes?

A. Endpoint Detection and Response (EDR), which runs heuristic sandboxing on every web access attempt.  
B. File Integrity Monitoring (FIM), which calculates and compares cryptographic hashes of the files against a known baseline.  
C. User and Entity Behavior Analytics (UEBA), which tracks web server CPU cycles and RAM utilization.  
D. A firewall policy that blocks all incoming FTP and RDP connections.  

---

### Question 5
A financial firm wants to upgrade its endpoint security architecture to protect against advanced persistent threats (APTs) and credential theft. The security team requires a solution that can trace file trajectories, quarantine suspicious workstations by virtually isolating them from the local VLAN, and analyze user account behaviors over time to identify anomalies. Which combination of technologies meets all of these requirements?

A. Signature-based antivirus (AV) and port-based network access control (802.1X).  
B. Endpoint Detection and Response (EDR)/Extended Detection and Response (XDR) and User and Entity Behavior Analytics (UEBA).  
C. File Integrity Monitoring (FIM) and simple mail transfer protocol (SMTP) relays.  
D. Logic bombs and a virtual machine sandbox.  
