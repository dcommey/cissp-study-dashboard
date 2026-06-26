# CISSP Practice Quiz - Video 12: Vulnerabilities and Threats Part 2

## Question 1
An operational technology (OT) manager at a municipal water treatment facility wants to integrate water quality sensors spread across the city with a centralized DCS platform at the headquarters. The sensors connect over public cellular links. As a CISSP, what is the primary risk and the best architectural countermeasure?

- A. The threat of DNS cache poisoning; implement immediate addressing on the sensors.
- B. Exposure of telemetry over public networks; isolate remote PLCs via VPN tunnels and implement strict authentication for DCS console access.
- C. Interference from low-frequency CRT radiation; replace all field sensors with FPGA-based LCD panels.
- D. Starvation of CPU cycles during Measured Boot; disable local RTOS auditing logs.

---

## Question 2
A manufacturer is designing a robotic surgical arm controlled by a specialized Real-Time Operating System (RTOS). During threat modeling, the team evaluates the impact of network-based Denial of Service (DoS) attacks on the arm's control loops. How should a CISSP describe the unique risk profile of an RTOS under a DoS condition?

- A. A DoS attack will deplete the FPGA's non-volatile PROM cache, causing a permanent system reboot.
- B. Even a minor network delay (latency jitter) of a few milliseconds caused by a DoS can disrupt the deterministic scheduling of the RTOS, leading to physical operational failure.
- C. The RTOS will automatically transition to Ring 3 problem state, disabling the interface definition language (IDL).
- D. The RTOS will replicate its execution state across an asymmetric multiprocessing (AMP) grid, causing desynchronization.

---

## Question 3
A financial analyst's browser is compromised via a DOM-based Cross-Site Scripting (DOM XSS) attack, allowing the attacker to corrupt local browser cache files. Which developer-controlled mechanism would have been most effective in preventing the caching of sensitive transactional templates in the analyst's browser?

- A. Implementing Symmetric Multiprocessing (SMP) on the database server.
- B. Restricting the local network interfaces to a dedicated WEP-encrypted VLAN.
- C. Setting secure Cache-Control headers (such as 'no-store' or 'no-cache') via HTTP headers or meta HTTP-equiv tags.
- D. Using an Interface Definition Language (IDL) to establish static DCOM objects.

---

## Question 4
A global consulting firm hosts its customer database in a distributed cloud database cluster with nodes located in Germany, Singapore, and the United States. A customer complains that their private records are being accessed by local law enforcement in the United States without their consent. Which legal concept is directly applicable to this scenario, and what is the best governance approach?

- A. Data sovereignty; the data is subject to the laws of the country where the physical hosting storage device is located, requiring operational policy to specify geographic replication boundaries.
- B. Same-Origin Policy; the customer's browser must enforce HTML-level domain isolation.
- C. Asymmetric Multiprocessing; the German nodes must execute tasks in isolation to prevent data leaks.
- D. Cryptographic transitivity; the blockchain ledger must be compiled with a different interface definition language (IDL).

---

## Question 5
An enterprise deploys thousands of smart environmental sensors across its office buildings to manage energy consumption. During an operational audit, it is discovered that these cheap IoT sensors utilize weak, obsolete WPA wireless encryption, have hardcoded admin credentials, and their firmware cannot be upgraded. Which risk response is most appropriate for the security manager to recommend?

- A. Implement risk avoidance by immediately decommissioning the sensors or isolating them onto a dedicated, non-routable VLAN with a distinct SSID.
- B. Accept the risk since the sensors run static operating systems that automatically reset themselves on power loss.
- C. Attempt to reverse-engineer the FPGA chips to force-install a modern TLS client.
- D. Enable measured boot on the sensors' local RTOS to automatically rotate the hardcoded credentials.
