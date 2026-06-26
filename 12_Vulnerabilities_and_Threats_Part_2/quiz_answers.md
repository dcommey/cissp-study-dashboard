# CISSP Practice Quiz Answers & Explanations - Video 12: Vulnerabilities and Threats Part 2

## Question 1
**Correct Answer: B**

**Explanation:**
*   **A is incorrect.** DNS cache poisoning redirects domain resolutions; it does not protect raw cellular data flows from interception. Immediate addressing is a register/assembly operation and is irrelevant here.
*   **B is correct.** Geographically distributed field sensors (SCADA/ICS components) sending telemetry over public links represent a major vulnerability. To secure the data flow, remote PLCs (Programmable Logic Controllers) must be isolated via encrypted VPN (Virtual Private Network) tunnels. Additionally, senior management must implement strict authentication at the central DCS (Distributed Control System) monitor console to protect the physical environment from unauthorized remote control.
*   **C is incorrect.** CRT radiation is an emanation security issue and is irrelevant to cellular link security. Field sensors do not contain CRT monitors.
*   **D is incorrect.** Measured Boot is a startup verification control. Halting RTOS auditing does not protect data flows and degrades accountability.

---

## Question 2
**Correct Answer: B**

**Explanation:**
*   **A is incorrect.** DoS floods network interfaces and buffers; it does not erase or deplete physical, non-volatile PROM cache on FPGAs.
*   **B is correct.** Real-Time Operating Systems (RTOS) are deterministic, meaning that tasks must execute within highly specific, predictable time windows. Unlike general-purpose OS scheduler queues, introducing even a millisecond-level network delay (latency jitter) via a Denial of Service (DoS) attack can cause control loops to fail, which can lead to physical operational damage when controlling kinetic devices like robotic surgical arms.
*   **C is incorrect.** Transitioning to Ring 3 problem state does not disable IDL. IDL is a design-time development language, not a runtime execution control.
*   **D is incorrect.** RTOS systems do not automatically replicate themselves onto AMP grids on DoS detection.

---

## Question 3
**Correct Answer: C**

**Explanation:**
*   **A is incorrect.** SMP is a database/OS processing model on the server side and has no effect on client-side browser caching mechanisms.
*   **B is incorrect.** Isolating local networks to WEP VLANs is insecure because WEP is obsolete, and this is a network control, not a web application control.
*   **C is correct.** Browser cache headers, specifically 'Cache-Control' (set to 'no-store' or 'no-cache') via HTTP headers or HTML meta HTTP-equiv tags, tell the client browser not to save transaction pages locally. This mitigates the risk of an attacker utilizing DOM-based Cross-Site Scripting (DOM XSS) to harvest local internet cache files on client workstations.
*   **D is incorrect.** IDLs are used to define system interface models for objects like CORBA/DCOM, but they do not dictate browser cache behavior.

---

## Question 4
**Correct Answer: A**

**Explanation:**
*   **A is correct.** Data sovereignty is the legal principle that digital data is subject to the local laws of the country in which the physical storage media resides. Replicating files to US-based nodes in a distributed cloud database cluster exposes those files to US legal jurisdiction. CISSPs must implement operational policies specifying replication boundaries to ensure compliance with geographic privacy regulations.
*   **B is incorrect.** Same-Origin Policy is a browser-level sandbox constraint that prevents scripts from one origin from accessing pages of another origin. It is irrelevant to physical hosting jurisdiction laws.
*   **C is incorrect.** AMP is a multiprocessing execution architecture, not a geographic data isolation boundary.
*   **D is incorrect.** Cryptographic transitivity refers to chain relation verification. It has no bearing on physical hosting legal jurisdictions.

---

## Question 5
**Correct Answer: A**

**Explanation:**
*   **A is correct.** Unpatchable firmware, hardcoded credentials, and obsolete wireless standards (like WEP or legacy WPA) represent a permanent vulnerability. The most appropriate risk response is risk avoidance (decommissioning the sensors) or risk mitigation (isolating the devices onto a separate non-routable VLAN and SSID with strict firewall blocks to prevent lateral movement).
*   **B is incorrect.** While static systems reset state on boot, they do not automatically remediate hardcoded credentials or weak wireless standards, leaving them perpetually exposed to network exploits.
*   **C is incorrect.** Reverse engineering ASIC/FPGA microcontrollers to change firmware is highly complex, expensive, and structurally impractical for mass deployments.
*   **D is incorrect.** Measured Boot does not rotate passwords; it merely measures boot components for attestation. Hardcoded credentials are coded in the firmware image and cannot be rotated by boot verification.
