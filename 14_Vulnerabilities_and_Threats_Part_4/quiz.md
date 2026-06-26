# CISSP Practice Quiz - Video 14: Vulnerabilities and Threats Part 4

## Question 1
A logistics company implements a Bring Your Own Device (BYOD) acceptable-use policy, prompting employees to enroll their personal smartphones. The security team wants to ensure that corporate emails and documents cannot be copied or shared to personal applications (like social media) while also protecting employee privacy by ensuring personal photos and messages are not visible to corporate IT. Which deployment design is most appropriate?

- A. Implement full-disk encryption (FTE) and block all third-party app stores using a UEM platform.
- B. Enforce storage segmentation through MDM/MAM containerization, isolating work applications from personal space and restricting clipboard functions between them.
- C. Enforce COPE (Corporate-Owned, Personally Enabled) policies and disable GPS location tracking.
- D. Install a hardware security module (HSM) micro-SD card in every user's device and disable NFC.

---

## Question 2
During a routine audit, a security analyst notices corporate laptops connecting to the internet via personal mobile hotspots (tethering) while inside the headquarters. From a manager's perspective, what is the primary risk of this behavior, and what is the best technical control to remediate it?

- A. The threat of configuration drift in the laptop's BIOS; enforce Measured Boot via the TPM.
- B. Network traffic bypasses corporate perimeter defenses (IDS/IPS, firewall, DLP, and URL filtering); use MDM policies to disable Wi-Fi/cellular tethering capabilities on corporate-owned devices.
- C. Interception of GPS geotagging coordinates over Bluetooth; restrict all devices to COBO deployment.
- D. Exposure of local DLLs (DLS) to rootkit injections; implement File Integrity Monitoring (FIM).

---

## Question 3
A critical database server is suspected of being compromised by a kernel-level rootkit. Standard security tools and commands show no signs of infection. As the CISSP, which method is most effective for detecting this type of deep OS compromise, and what is the necessary recovery action?

- A. Execute an application block-list check; recover by rolling back the database schema via IaC templates.
- B. Perform File Integrity Monitoring (FIM) to detect changes in system driver and DLL (DLS) hashes, and perform a complete system wipe and rebuild from known-clean media.
- C. Implement a Wireless Positioning System (WIPS) to trace cell tower signals, and degauss the storage drives.
- D. Deploy a declarative ARM template to force the operating system into Ring 3 problem state.

---

## Question 4
A security operations center detects a server transmitting a slow but steady stream of ICMP echo requests (pings) containing unusual, non-standard hexadecimal payloads to an external IP address. How should a CISSP classify this exfiltration method?

- A. A covert storage channel exfiltrating data by writing payloads into fields of a standard protocol that are normally ignored.
- B. A covert timing channel conveying information by altering the speed of data packets.
- C. A salami attack designed to modify database integrity.
- D. A shadow IT threat utilizing unapproved URL requests.

---

## Question 5
A payroll administrator modifies the corporate database script to round down the fractional cents of every employee's paycheck and transfer the accumulated remainder to their own bank account. At the same time, another insider makes small, random changes to inventory record numbers. How should a security manager distinguish these two attacks?

- A. The payroll attack is a salami attack (stealing tiny amounts of assets over time), while the inventory attack is data diddling (making small, unauthorized changes to data integrity).
- B. The payroll attack is data diddling, while the inventory attack is a covert timing channel.
- C. The payroll attack is shadow IT, while the inventory attack is a SQL injection.
- D. The payroll attack is a physical control failure, while the inventory attack is a technical control failure.
