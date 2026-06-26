# CISSP Practice Quiz Answers & Explanations: Network Security Part 3

## Question 1
**Correct Answer: B**

### Explanation:
*   **[B] is correct.** An extranet acts as a hybrid network between the public internet and a private intranet, allowing authorized external partners (like suppliers, contractors, or customers) to access specific internal resources. By placing the database server in a dedicated extranet segment and using a firewall to enforce granular access control, the organization permits partner collaboration while preventing unauthorized lateral movement into the broader internal corporate network (intranet).
*   **[A] is incorrect.** Keeping the database server inside the intranet exposed to all internal employees, while using DHCP snooping (a Layer 2 switch mitigation for rogue DHCP servers), does not address how external partners securely connect without wide access.
*   **[C] is incorrect.** Exposing the database server directly to the public internet using a screened host represents a massive risk, exposing the system to direct attack from anywhere on the internet.
*   **[D] is incorrect.** Cabling topologies (like full mesh physical layout using Cat 5e) address link redundancy and cabling standards, not logical network segmentation, partner access controls, or zone security.

---

## Question 2
**Correct Answer: B**

### Explanation:
*   **[B] is correct.** Agent-based NAC solutions require installing monitoring/enforcement software on the client endpoint, which is feasible for managed corporate laptops (using permanent or temporary agents). However, network printers and IoT devices are closed systems that cannot run custom agents. For these unmanaged endpoints, an agentless NAC solution (which relies on external scans, traffic analysis, or continuous monitoring) must be used. Combining both approaches ensures comprehensive network coverage.
*   **[A] is incorrect.** Closed systems like printers and IoT sensors do not support installing or executing third-party NAC agents (whether temporary or permanent).
*   **[C] is incorrect.** Permanent agents cannot be installed on printers and IoT devices, and DAI (Dynamic ARP Inspection) is a switch port security feature to prevent ARP spoofing, not a software distribution mechanism.
*   **[D] is incorrect.** Host firewalls are software-based controls on endpoints. While useful, deploying stateless firewalls on endpoints is not a substitute for a centralized network access control (NAC) authentication and posture check framework.

---

## Question 3
**Correct Answer: A**

### Explanation:
*   **[A] is correct.** Firewalls process rules sequentially from the top down and stop evaluation at the first matching rule. If a broad deny rule (Rule 1) is placed above a specific allow rule (Rule 2), traffic matching the deny rule (including the marketing team's traffic) is dropped immediately, and Rule 2 is never evaluated. To resolve this, the specific allow rule must be placed above the general deny rule.
*   **[B] is incorrect.** Stateful firewalls understand and track connection states (like established connections), but the order of firewall rules is evaluated first. A stateful firewall would still block traffic if the first matching rule denies it.
*   **[C] is incorrect.** While a proxy could filter traffic, changing the firewall rule order is the correct and direct administrative fix. A transparent proxy would not solve a misordered firewall policy block.
*   **[D] is incorrect.** PAgP (Port Aggregation Protocol) is a Cisco-proprietary link aggregation protocol used to bundle multiple physical Ethernet ports into a single logical link (EtherChannel). It has no relation to firewall rule evaluation or policy structures.

---

## Question 4
**Correct Answer: C**

### Explanation:
*   **[C] is correct.** Extended Detection and Response (XDR) is an integrated suite of security tools that extends beyond endpoint detection and response (EDR) by collecting and correlating threat data across multiple security layers, including endpoints, network traffic analysis (NTA), email, cloud, and intrusion detection/prevention systems (NIDS/NIPS). It allows behavior-based detection and automated response across the enterprise, addressing the limitations of signature-based antivirus (EPP).
*   **[A] is incorrect.** Endpoint Protection Platforms (EPP) represent traditional antivirus solutions focused on blocking threats on endpoints, primarily using signature-based detection. They do not integrate network logs or analyze network traffic behavior.
*   **[B] is incorrect.** Unified Threat Management (UTM) is a hardware gateway appliance that combines several security functions (firewall, IPS, URL filtering, spam filter) at the network perimeter, but it does not provide behavior-based endpoint monitoring or correlation across endpoints.
*   **[D] is incorrect.** Spanning Tree Protocol (STP) is a Layer 2 network protocol designed to prevent loops in switched networks. It does not provide any threat detection or endpoint security.

---

## Question 5
**Correct Answer: C**

### Explanation:
*   **[C] is correct.** Fiber optic cabling transmits data using light pulses through glass fibers rather than electrical signals through copper. Consequently, fiber optic cables are completely immune to electromagnetic interference (EMI), radio frequency interference (RFI), and crosstalk. In addition, because they do not emit electromagnetic radiation, they are virtually immune to passive sniffing via electromagnetic induction, making them the most secure physical cabling medium.
*   **[A] is incorrect.** Shielded Twisted Pair (STP) copper cabling reduces EMI and crosstalk compared to UTP, but it is not completely immune. It still radiates weak electromagnetic fields that can be intercepted via sensitive sniffing gear.
*   **[B] is incorrect.** Coaxial Thicknet is copper-based and prone to signal loss, EMI, and physical bending issues. It does not offer immunity to emissions or interception.
*   **[D] is incorrect.** Unshielded Twisted Pair (UTP) is highly susceptible to EMI, crosstalk, and sniffing, as it lacks any metallic shielding.
