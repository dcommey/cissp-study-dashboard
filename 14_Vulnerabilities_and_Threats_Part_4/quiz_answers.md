# CISSP Practice Quiz Answers & Explanations - Video 14: Vulnerabilities and Threats Part 4

## Question 1
**Correct Answer: B**

**Explanation:**
*   **A is incorrect.** Full-disk encryption (FTE/FDE) protects data at rest in case of physical theft but does not isolate apps or manage copy/paste clipboard operations at runtime.
*   **B is correct.** Storage segmentation (enforced via MAM/MDM solutions) creates secure containers on the device. IT admins can apply strict security policies within the work container—such as disabling copy/paste to personal apps and enforcing selective corporate wipes—without visibility or access to the employee's personal container, maintaining user privacy.
*   **C is incorrect.** COPE means the company owns the device; this does not address storage isolation on employee-owned (BYOD) phones.
*   **D is incorrect.** An HSM micro-SD card acts as a secure keystore for authentication but does not prevent copy/paste operations between applications or enforce storage containers.

---

## Question 2
**Correct Answer: B**

**Explanation:**
*   **A is incorrect.** BIOS configuration drift is a software configuration delta; it is not the security threat introduced by bypass network connections.
*   **B is correct.** Personal hotspots (tethering) cellular links connect corporate laptops directly to the internet, completely bypassing the organization's perimeter security infrastructure (firewalls, IDS/IPS, DLP, and content filters). This creates an unmonitored entry/exit point. The best control is utilizing MDM policies on the laptop to disable Wi-Fi/cellular hotspot connection capabilities.
*   **C is incorrect.** GPS location tracking over Bluetooth is not the primary bypass risk; COBO is a policy type and does not solve laptop hotspot connections inside a corporate building.
*   **D is incorrect.** Rootkits and FIM represent threat vectors for local file systems, not the network-level egress bypass caused by mobile hotspots.

---

## Question 3
**Correct Answer: B**

**Explanation:**
*   **A is incorrect.** Application block-lists do not detect kernel-level rootkits. Databases are application-level data and are not where rootkits hide.
*   **B is correct.** Rootkits modify the OS kernel or device drivers to control execution, and they intercept API calls to hide their processes and files from standard commands (like `ls` or file managers). File Integrity Monitoring (FIM) detects modifications by comparing file sizes and cryptographic hashes of DLLs (DLS) and drivers against a baseline. If infected, the only secure recovery is wiping the storage and reinstalling from trusted sources.
*   **C is incorrect.** WIPS locates wireless devices; it cannot detect a rootkit in a server's OS. Degaussing destroys magnetic drives physically, which is not required unless decommissioning.
*   **D is incorrect.** ARM templates deploy resources; they cannot force a running OS into a hardware protection ring state like Ring 3.

---

## Question 4
**Correct Answer: A**

**Explanation:**
*   **A is correct.** Covert storage channels exfiltrate data by writing it into storage areas or protocol fields that both sender and receiver can access, but which were not designed for communication (such as the payload field of an ICMP packet, which is normally ignored or filled with dummy characters, or faked DNS query fields).
*   **B is incorrect.** Covert timing channels convey information by manipulating system timing or packet transmission rates (e.g., delays between packets), not by writing data into the packet payload.
*   **C is incorrect.** A salami attack is a method of financial theft using rounding errors; it is not a network protocol exfiltration method.
*   **D is incorrect.** Shadow IT refers to unapproved systems/software, not the technical exfiltration channel inside ICMP.

---

## Question 5
**Correct Answer: A**

**Explanation:**
*   **A is correct.** A Salami attack involves stealing tiny, insignificant amounts of assets (like rounding fractional cents in financial calculations) over a large volume of transactions so that the individual transactions go unnoticed, but accumulate to a large sum over time. Data Diddling is the unauthorized modification of data values (like records, numbers, or grades) during entry or at rest, which directly corrupts the integrity of the data.
*   **B is incorrect.** Neither of these is a covert timing channel (timing channels use timing behavior to convey data).
*   **C is incorrect.** Neither of these represents shadow IT (shadow IT is unapproved software/hardware).
*   **D is incorrect.** Both attacks are logical/software manipulations, representing logical/technical failures, not physical security failures.
