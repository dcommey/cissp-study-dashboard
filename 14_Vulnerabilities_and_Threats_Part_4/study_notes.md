# CISSP Study Notes - Video 14: Vulnerabilities and Threats Part 4

## Mobile Device Ecosystem and Operating Systems
Mobile devices (phones, tablets, smartwatches) represent a massive security **threat** landscape because they run custom operating systems and connect to multiple interfaces, such as Bluetooth, cellular, **NFC** (Near Field Communication), and **USB**.
*   **Android**: A Linux-based, open-source mobile OS acquired by Google. It is highly fragmented across different vendors. Users can install standalone **APK** (Android Package Kit) files, which often bypass official security checks. Custom frameworks like SE Android (Security Enhanced Android, based on SE Linux MAC policies) and Samsung Knox enforce sandbox boundaries.
*   **iOS**: Apple's closed-source OS. It uses strict sandboxing and enforces code signature verification, allowing apps to be downloaded only from the official App Store. This reduces malware exposure.
*   *Privilege Escalation*: Users bypass OS restrictions through rooting (Android) or jailbreaking (iOS), which strips away security controls.
*   *Hardware Roots of Trust*: System cryptographic operations rely on the motherboard **TPM** (Trusted Platform Module) chip. Highly secure devices can also use a removable micro-SD card functioning as a hardware security module (**HSM**), acting as a physical factor for **authentication**.

---

## Enterprise Mobile Management (MDM, MAM, and UEM)
Organizations manage mobile assets using centralized **technical** control suites:
*   **MDM**: Mobile Device Management manages enrollment, device lockouts, and remote wipe capabilities.
*   **MAM**: Mobile Application Management controls only corporate apps and their associated data.
*   **UEM**: Unified Endpoint Management integrates MDM, MAM, and PC management (laptops, desktops, and IoT endpoints) into a single console.
*   **Storage Segmentation**: Dividing device memory into personal and work compartments. This allows the organization to execute a remote wipe on corporate data without deleting the **user**'s personal files (such as family photos stored on local or **NAS** - Network Attached Storage - systems). It also prevents copying and pasting between secure and insecure apps.

---

## Mobile Deployment Policies and Governance
Senior **management** must establish a clear acceptable-use **policy** and security **standard** baseline for mobile deployments.
*   **BYOD** (Bring Your Own Device / "Bring Your Own Disaster"): Employees use personal devices for work. It is cost-effective but increases legal **liability** and data leakage risks.
*   **COPE** (Corporate-Owned, Personally Enabled): The company provides the device and permits personal use.
*   **CYOD**: Choose Your Own Device. The employee selects from an approved vendor list.
*   **COBO** / **COMS**: Corporate-Owned, Business Only (sometimes described as Corporate-Owned Mobile Strategy). Strictly prohibits personal use.
*   *Governance Considerations*: Policies must outline onboarding/offboarding steps, data ownership, patch management, privacy monitoring, and forensic readiness (e.g., confiscation protocols in the event of a data **breach**).

---

## Location Services and Network Security Risks
*   **GPS** (Global Positioning System): Satellite-based tracking used for navigation, geotagging media (adding coordinates to photos), and geofencing (triggering actions when crossing a virtual boundary, such as turning off a camera when entering a secure zone).
*   **WIPS** (Wireless Positioning System): Tracks location by triangulation of wireless access points (**APS**).
*   *Perimeter Bypass (Tethering)*: Users enabling cellular hotspots/tethering allow other corporate devices to bypass perimeter security controls, including firewalls, **IDS** (Intrusion Detection System), **IPS** (Intrusion Prevention System), **DLP** (Data Loss Prevention), and **URL** filtering.
*   *Encryption*: All web communications must use **HTTPS** to protect data in transit.

---

## Application Vulnerabilities and Coding Flaws
*   **Covert Channels**: Sneaky paths used to exfiltrate data undetected:
    *   *Covert Timing Channel*: Modifying system resource speeds or execution times to transmit data.
    *   *Covert Storage Channel*: Writing data to hidden locations (like file slack space) or sending data inside unused fields of standard protocols (e.g., hiding data in **ICMP** ping payloads or faking **DNS** requests).
*   **Application Controls**:
    *   *Allow-listing*: Deny by default, allow by exception. Highly secure but administratively heavy.
    *   *Block-listing*: Allow by default, block by exception. Ineffective against zero-day threats.
*   **Software Flaws**:
    *   *Intentional Flaws*: Backdoors and maintenance hooks left behind by developers.
    *   *Unintentional Flaws*: Input validation failures leading to **SQL** injection and cross-site scripting (XSS).
    *   *Standards*: The **OWASP** Top 10 provides guidance on secure coding and vulnerability mitigation.

---

## Advanced Malware and Data Manipulation
*   **Rootkits**: Deep-system malware that modifies the kernel or device drivers to hide its presence. It can be detected using **FIM** (File Integrity Monitoring) tools that audit the size and hashes of critical system files, including **DLLs** (Dynamic Link Libraries) and system drivers. A complete system wipe and reload from clean backups is the only reliable way to clean a rootkit.
*   **Data Diddling**: Small, unauthorized, incremental changes to data (e.g., modifying bank balances or grades) to alter **integrity** without raising alarms.
*   **Salami Attack**: Stealing tiny, fractional amounts of assets (like rounding errors in financial transactions) over a long period. Prevented by strict separation of duties, code audits, and regular reconciliation.

---

## CISSP Exam Tips: The Manager's Perspective
*   **Responsibility**: Senior leadership is **responsible** for defining mobile security policies and aligning them with corporate risk tolerance.
*   **Control Typology**: Balance **technical** controls (MDM/MFA/FDE) with **physical** controls (restricting cameras on-premises) and **administrative** controls (policies and audits) to ensure the **confidentiality**, **integrity**, and **availability** of corporate data.
*   **MFA and Encryption**: Enforce multi-factor authentication (**MFA**) and full-disk encryption (**FDE**) on all endpoints to prevent data leakage in the event of theft. Enforce proper **authorization** policies so users only access data they are cleared to see.
