# CISSP Study Notes: Application Security Part 1 (Malware and Endpoint Protection)

## 1. The Malware Threat Landscape
Application security aims to prevent attackers from executing exploits that alter software behavior. Malware is an umbrella term for malicious code designed to exploit vulnerabilities in applications, network protocols, operating systems, or firmware.

### Threat Actor Categories (Smartness & Motivation)
*   **Amateurs / Script Kiddies**: Attackers who use pre-packaged malware written by others. They do not customize or understand the inner workings of the code they execute.
*   **Skilled Hackers**: Highly capable individuals motivated by financial gain, renown, or political/hacktivist goals. They craft custom malware targeting specific entities.
*   **Organized Crime**: Highly coordinated syndicates primarily motivated by financial fraud, theft, and extortion.
*   **Advanced Persistent Threats (APTs)**: Nation-state or well-funded hacker groups.
    *   APTs craft custom, signature-evading malware designed to infiltrate a network and reside undetected for months or years (e.g., SolarWinds hack).
    *   They frequently target **zero-day vulnerabilities** (unpatched software flaws) and attempt to command and control compromised environments.

---

## 2. Malware Taxonomy & Types

### Viruses
Viruses infect host files and rely on human action (sharing files, opening media) to propagate.
*   **Master Boot Record (MBR) and Boot Sector Viruses**: Infect the boot sector or alter the MBR to redirect the system boot sequence to infected partitions. They spread via infected physical media (like USB drives) and launch upon system reboot.
*   **Multipartite Viruses**: Use multiple propagation vectors (e.g., infecting files and boot sectors simultaneously) to evade detection.
*   **Evasion Techniques**:
    *   *Stealth Viruses*: Hide their presence in active process lists or intercept antivirus (**AV**) system calls, redirecting scanning operations to fake clean versions of files.
    *   *Polymorphic Viruses*: Change their payload shape and structure dynamically using random number generators, rendering static signature databases ineffective.
    *   *Encrypted Viruses*: Obfuscate their main body via encryption, utilizing key rotation for each infection. A small unencrypted decryption routine handles the decryption of the payload at execution time.

### Worms
Worms are self-propagating malware that spread across networks without human intervention. They scan for and exploit network protocol vulnerabilities (e.g., SMB, RPC, FTP, NFS, and RDP).

### Trojans and Backdoors
*   **Trojans**: Programs that masquerade as benign software (e.g., software cracks, fake utility installers) but execute a malicious payload in the background.
*   **Remote Access Trojan (RAT)**: A specific Trojan that opens a backdoor, allowing remote control of the compromised workstation over the internet.

### Other Malicious Implementations
*   **Logic Bombs**: Dormant code triggered by a specific event or condition (e.g., a disgruntled administrator setting code to delete data if their account is deleted from the user directory).
*   **Hoaxes**: Deceptive alerts (e.g., pop-up banners or SMS/instant messages) claiming a system is infected. They trick users into downloading fake antivirus software, which itself is the malware. Users often grant these tools administrative and disk access, bypassing controls.
*   **Spyware & Keyloggers**: Software that monitors user keystrokes, records screens, hijacks webcams, and captures network traffic. Commercial spyware (monitoring software) is often installed directly by individuals who already have physical access to the target machine.
*   **Adware**: Malware that displays intrusive pop-ups/ads, historically package-installed as browser toolbars that consume memory and CPU cycles.
*   **Ransomware**: Malware that encrypts or exfiltrates user data, demanding cryptocurrency payment for the decryption key. The primary mitigation control is maintaining up-to-date, offline/isolated backups.
*   **Fileless Malware**: Malicious scripts executed directly in memory (e.g., using PowerShell). They use base64 or URL encoding to bypass static file-based scanners and hide within administrative utility calls.

---

## 3. Malware Prevention & Detection Technologies

Organizations must secure not only Windows laptops and Linux servers, but also IoT devices (e.g., smart thermostats, printers, CCTV systems) and physical access control units (e.g., badge swiping systems).

### Anti-Malware Methodologies
*   **Signature-Based Detection**: Compares binary patterns of files and active memory against a database of known malware signatures. It is highly effective against known threats but relies entirely on the frequency of database updates from the vendor.
*   **Heuristic / Behavior-Based Detection**: Analyzes software behavior in real-time (e.g., detecting a program encrypting files consecutively, halting the process, and placing it in quarantine).
*   **Sandboxing**: Executing a suspicious file in an isolated logical environment (such as a virtual machine (VM) or container) to observe its behaviors (e.g., registry writes, process creation, network calls).
    *   *Evasion*: Malware can detect virtualized environments by checking for VM drivers (e.g., VMware tools), checking operations delay, or waiting days before executing.

### Integrity & Endpoint Monitoring
*   **File Integrity Monitoring (FIM)**: Tracks changes to critical operating system files, databases, or public website files (preventing defacement) by calculating and comparing cryptographic hashes.
*   **Endpoint Detection and Response (EDR) / Extended Detection and Response (XDR)**:
    *   Advanced solutions that track file trajectories, analyze process lifecycles, monitor network behaviors, and alert security teams of anomalies.
    *   They automate incident response by quarantining files, virtually isolating infected hosts from the local VLAN, and installing dynamic firewall policy rules.
    *   These systems connect back to central management consoles using a secure web api.
*   **User and Entity Behavior Analytics (UEBA)**: Analyzes user account behaviors over time to detect anomalies that indicate compromised credentials.

---

## 4. CISSP Exam Tips (Manager/Governance Perspective)
*   **Defense-in-Depth**: Anti-malware signature scanning is a baseline, preventative control. It must be paired with detective controls (FIM, EDR, logs), administrative controls (procedures, security policy rules), and physical security.
*   **Backups over Ransoms**: Never pay the ransom. Ensure that the business continuity plan prioritizes isolated, offline backups as the ultimate recovery control against ransomware.
*   **IoT Vulnerability**: Embedded systems and IoT represent significant entry points. They lack the memory and CPU resources for agent-based anti-malware, necessitating logical segmentation (VLANs) and port security as mitigations.
