# CISSP Study Notes - Video 12: Vulnerabilities and Threats Part 2

## Mobile Code and Web Application Security
Mobile code refers to software sent from a server to a client to be executed locally. This releases processing burdens to the client but introduces a severe security **threat** and **vulnerability** landscape.
*   **Applets**: Legacy mobile code objects like Java Applets or ActiveX controls.
*   **Adobe Flash**: Deprecated due to extensive security issues and replaced by secure, native web standards including **HTML**5, CSS3, and JavaScript.
*   **Embedded Code**: Client-side code (primarily JavaScript) running in a browser. Browsers attempt to isolate this code using sandboxing and the Same-Origin Policy.
*   **Cache Manipulation Risks**: Local caches are designed to speed up response times but can be corrupted by attackers. Examples include:
    *   OS-level caches: **DNS** (Domain Name System) cache and **ARP** (Address Resolution Protocol) cache.
    *   Web caches: Attackers use Document Object Model (**DOM**) cross-site scripting (DOM XSS) or HTTP Split Response attacks to inject malicious scripts into cached temporary internet files.
    *   *Mitigations*: Developers can use secure HTTP headers (e.g., `Cache-Control` via the `meta` HTTP-**EQUIV** tag or server headers) and the `Expires` header to control cache behavior. All web communications should enforce **HTTPS** wrapping **TLS** (Transport Layer Security) to ensure data **confidentiality** and **integrity**.

---

## Parallel and High-Performance Computing
High-performance computing utilizes concurrent execution models to divide and conquer complex calculations.
*   **Multiprocessing Models**:
    *   **SMP** (Symmetric Multiprocessing): Independent processors share a common OS, memory, and data bus.
    *   **AMP** (Asymmetric Multiprocessing): Processors have independent memory and data buses, running independently or in loose collaboration for batch operations.
    *   **MPP** (Massively Parallel Processing): Thousands of processors, each running its own OS and memory, coordinate under a central manager node.
*   **Grid Computing**: Distributed nodes connect over loose networks to solve a central goal (e.g., **seti**@home). Since nodes contribute idle **CPU** and **GPU** resources to the grid, a compromise of the central coordination server can turn the grid into a malicious botnet.
*   **Peer-to-Peer (P2P)**: Fully decentralized networks sharing workloads without a central coordinator. P2P introduces malware transmission and IP exposure risks.
*   **HPC** (High-Performance Computing): Clustered machines connected via high-speed networks and high-throughput storage systems.
*   **RTOS** (Real-Time Operating System): Highly specialized, deterministic operating systems designed to process data immediately with minimal latency. Used in assembly lines, flight controls, and stock markets. Because they lack resources to run extra security agents, they are extremely vulnerable to a **DOS** (Denial of Service) attack, where a delay of just a few milliseconds can crash the physical operation.

---

## Industrial Control Systems (ICS) and Operational Technology (OT)
**ICS** and **operational** technology (OT) monitor and control physical systems in factories, utilities, and refineries. They prioritize safety and **availability** over confidentiality.
*   **PLC** (Programmable Logic Controller): A simple, event-driven computer that monitors sensor inputs and triggers actuator outputs based on basic pre-programmed logic.
*   **DCS** (Distributed Control System): A localized controller network linking multiple PLCs to a centralized monitoring terminal within a single facility.
*   **SCADA** (Supervisory Control and Data Acquisition): Geographically distributed networks connecting multiple DCS and PLC installations over large regions (e.g., power grids, municipal water networks).
*   *Security Challenges*: Modern ICS/OT environments are increasingly connected to standard IT networks. This makes them vulnerable to traditional network attacks. Strong **physical** barriers must be placed around SCADA control rooms and DCS cabinets to prevent unauthorized local access.

---

## Distributed Systems and IoT Security
A distributed system is a collection of individual nodes working together to provide services.
*   **Interface Definition Language (IDL)**: A generic language describing client-server interfaces, allowing distributed systems to interact regardless of platform or programming language. Frameworks using an **IDL** include **CORBA** (Common Object Request Broker Architecture) and **DCOM** (Distributed Component Object Model).
*   **Blockchain**: A distributed ledger cryptographically linking blocks of data using hashes and timestamps to establish immutable records.
*   **Data Sovereignty**: The concept that digital data is subject to the legal jurisdictions of the country where the storage hardware physically resides.
*   **Internet of Things (IoT)**: Consumer and industrial devices that connect to the internet but suffer from poor security. IoT devices often have hardcoded passwords, no encryption, and unpatchable firmware.
*   **Edge Computing vs. Fog Computing**:
    *   *Edge*: Processing data directly on the smart sensor or local device.
    *   *Fog*: Processing data on a local intermediate gateway or node before sending it to the cloud.
*   **Embedded and Static Systems**: Devices with static operating systems that are unchangeable by the **user** (e.g., ATMs, game consoles). They utilize microcontrollers and **FPGA** (Field Programmable Gate Array) chips. While static environments throw away malicious session state upon reboot, their inability to run standard security agents or receive remote firmware updates leaves them vulnerable to permanent exploits.
*   *Embedded Network Vulnerabilities*: Many IoT and embedded systems communicate using insecure protocols like **HTTP** instead of encrypted **HTTPS**, connect via obsolete wireless standards like **WEP** or **WPA** (instead of WPA3), or establish unauthorized **VPN** tunnels that bypass perimeter security controls, exposing data to interception or unauthorized access.

---

## CISSP Exam Tips: The Manager's Perspective
*   **Governance**: Senior **management** is accountable for establishing an organizational **policy** and operational **procedure** to govern the lifecycle, deployment, and disposal of IoT and SCADA assets.
*   **Risk Responses**: Employ risk **avoidance** by isolating legacy, unpatchable embedded systems and SCADA networks from the corporate environment.
*   **Segmentation**: Isolate IoT devices on dedicated wireless networks with unique **SSID** settings and separate **VLAN** segments.
*   **Monitoring**: Implement an **IPS** (Intrusion Prevention System) and strict network-level **authentication** to detect and block abnormal traffic generated by compromised smart devices.
