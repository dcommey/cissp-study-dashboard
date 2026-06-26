# CISSP Study Notes: Network Security Part 3

## 1. Network Architectures, Topologies, & Cabling

### Content Delivery Networks & Intranets/Extranets
*   **CDN**: Content Distribution Networks (**CDN**) are distributed server networks designed to serve cached content based on a **user**'s geographical location, reducing latency and avoiding server overload.
*   **Intranet**: Private, internal network hosting services (DNS, email, web) for internal employees, independent of the external internet.
*   **Extranet**: A hybrid network that extends intranet-like access to external partners (contractors, suppliers).
*   **DMZ**: A Demilitarized Zone (**DMZ**) or screened subnet hosts publicly exposed servers (email, web) with at least one publicly accessible interface. It acts as a buffer zone and is implemented using one or two firewalls.
*   **Screened Host & Bastion Hosts**: A screened host is a server protected by a firewall acting as a proxy. Bastion hosts/jump servers are exposed to the internet, requiring secure **authentication** before permitting internal network access.

### Cabling & Physical Security
Physical network security requires safeguarding components like cabling, layout, and transmission media against a **threat** or physical **vulnerability** that could lead to an **incident**:
*   **Coaxial Cable (Coax)**: Relies on concentric conductors. Fairly resistant to electromagnetic interference (**EMI**). Includes thinnet (10Base2, up to 185m) and thicknet (10Base5, up to 500m). Used historically in legacy networks and **CCTV** surveillance.
*   **Cable Syntax**: The naming convention follows the format AA **bbbb** and CC (where AA is speed, **bbbb** is baseband/broadband, and CC is media/distance).
*   **Twisted Pair**: Comprises four twisted wire pairs to reduce crosstalk and **EMI**. Includes Unshielded Twisted Pair (**UTP**) and Shielded Twisted Pair (**STP**), which has a foil shield for extra protection.
*   **Fiber Optics**: Transmits light pulses, immune to **EMI** and sniffing. Multi-mode fiber (LEDs/lasers, up to 400m) is typically blue. Single-mode fiber (lasers, tens of kilometers) uses **SFP** (Small Form-factor Pluggable) transceivers and is typically yellow.
*   **IEEE 802.3 Standard**: Ethernet is based on the **IEEE** 802.3 **standard**. Fast Ethernet supports 100 Mbps, while Gigabit Ethernet supports 1,000 Mbps.

### Network Topologies & Logical vs. Physical Routing
*   **Physical vs. Logical**: Physical topology defines the physical layout of cables, while **logical** topology defines how data actually routes (e.g., VLANs, Spanning Tree Protocol (**STP**) loop avoidance).
*   **NIC Teaming & Link Aggregation**: Bundles multiple network interfaces for redundancy using protocols like **LACP** (Link Aggregation Control Protocol) or **PAGP** (Port Aggregation Protocol) to group multiple **NIC** connections.
*   **Bus Topology**: Systems connect to a single backbone trunk (single point of failure).
*   **Star Topology**: Systems connect to a central switch. Easy to isolate cable faults.
*   **Ring Topology**: circular pattern (e.g., Token Ring). Managed by a token pass.
*   **Mesh Topology**: Full or partial mesh. Offers high redundancy. Mesh networks often rely on logical interfaces like **VPN** links or SD-**WAN** connections.
*   **Media Access Control**:
    *   **CSMA**/CD (Collision Detection): Used in wired Ethernet.
    *   **CSMA**/CA (Collision Avoidance): Used in wireless (**IEEE** 802.11) to coordinate transmission via the access point to prevent collisions.

---

## 2. Network Access Control (NAC) & Infrastructure Devices

*   **NAC Functions**: Network Access Control (**NAC**) enforces security policies by validating device health (patches, antivirus) and **user** **authentication** before granting access.
*   **Agent-based vs. Agentless**:
    *   *Agent-based*: Uses a temporary (web portal execution) or permanent background agent. Non-compliant devices are quarantined to a remediation subnet where they can query **DHCP** and go online to download patches, achieving **compliance**.
    *   *Agentless*: Analyzes network traffic, runs port scans, or performs vulnerability scans. Required for devices like printers or IoT that cannot run agents.
*   **Switches**: Layer 2 devices forwarding frames based on destination **MAC** addresses. Unregistered **MAC** destinations prompt flooding across ports.
*   **Routers**: Layer 3 devices forwarding packets based on destination IP addresses using static routes or dynamic routing protocols.
*   **System-on-a-Chip (SOC)**: Small computing devices (IoT) with integrated **CPU** and memory. They often run stripped-down operating systems, leaving them with low processing power, low memory, and minimal security capabilities.

---

## 3. Firewall Technologies & Defensive Gateways

*   **Firewall Rules**: Positioned between zones of different trust levels. Operates on a default deny (allow list) policy. Rules are matched in a priority order, checked sequentially from the top down.
*   **Packet Filtering (Stateless)**: Inspects packet headers block-by-block without session context.
*   **Stateful Firewalls**: Keeps track of active **TCP** and **UDP** sessions, opening return paths automatically.
*   **Application-Level Firewalls**: Inspects Layer 7 data. Requires high **CPU** and memory to reassemble packets and decrypt **HTTP**/**HTTPS** traffic. Cisco's **eta** (Encrypted Traffic Analysis) attempts to detect malware in encrypted streams without full decryption.
*   **Next-Generation Firewalls (NGFW)**: Incorporates Layer 7 filtering, **IDS**, **IPS**, and URL filtering.
*   **Unified Threat Management (UTM)**: Combines firewalls, anti-spam, URL filtering, and data loss prevention (**UTM**).
*   **Internal Segmentation Firewall (ISFW)**: Deployed internally to restrict lateral movement between departments, enforcing microsegmentation.
*   **Host-Based Firewalls**: Software running on endpoints (e.g., Windows Firewall, iptables, **UFW** on Linux) that monitors local processes and decrypts traffic at the destination.
*   **Proxies**: 
    *   *Forward Proxy*: Protects internal clients requesting external resources. Often caches content.
    *   *Reverse Proxy / Load Balancer*: Protects internal servers by intercepting incoming external requests.
    *   *Transparent Proxy*: Intercepts traffic at Layer 2 without client configuration.

---

## 4. Endpoint Security Systems (EDR, XDR, SIEM)

Modern endpoint security has evolved from traditional endpoint protection platforms (**EPP**) to active detection systems:
*   **EDR**: Endpoint Detection and Response (**EDR**) monitors, records, and responds to threats on endpoints using installed agents.
*   **MDR**: Managed Detection and Response (**MDR**) is a managed service combining **EDR**, **SIEM**, and human analysis.
*   **XDR**: Extended Detection and Response (**XDR**) integrates data across endpoints, network traffic analysis (**NTA**), email, and cloud. It utilizes network intrusion detection systems (**NIDS**) and network intrusion prevention systems (**NIPS**) data.
*   **MSSP**: Managed Security Service Providers (**MSSP**) deliver managed **XDR** or **SIEM** capabilities, operating through a Security Operations Center (**SOC**).

---

## 5. CISSP Exam Tips (Manager/Governance Perspective)

*   **Risk Responses & Control Types**: Implementing firewalls and **NAC** represents **logical** controls to achieve risk **avoidance** or mitigation. Cabling safeguards and locked wiring closets represent **physical** controls.
*   **Control Functions & Incident Response**: Endpoint agents (**EDR**/**XDR**) act as detective controls, while backups and a documented **recovery** plan represent corrective/recovery controls to restore business after a security **incident**.
*   **Data Disclosure & Compliance**: Policies must address unauthorized **disclosure** of sensitive data through **HTTPS** or email channels. Firewalls and content filtering enforce regulatory **compliance** with standards like HIPAA or PCI-DSS.
*   **Governance & Baseline Configuration**: Establish a secure **baseline** configuration for all workstations. The **management** team must mandate regular audits of the firewall rule set to remove redundant rules and ensure alignment with the corporate security **policy** and **standard**.
