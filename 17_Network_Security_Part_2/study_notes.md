# CISSP Study Notes: Network Security Part 2

## 1. Internet Protocol (IP) & Layer 3 Operations

The **Internet Protocol (IP)** operates at the network layer of the **OSI** (Open Systems Interconnection) reference model. It is the backbone of global communication but offers no reliability guarantees on its own.

### IPv4 vs. IPv6
*   **IPv4**: Uses 32-bit addressing. Faced with address scarcity, it heavily relies on **NAT** (Network Address Translation).
*   **IPv6**: Uses 128-bit addressing, rendering **NAT** largely unnecessary. It has built-in support for Auto-configuration, Quality of Service (QoS), and IPsec. 
*   **Dual Stack**: Operating systems run IPv4 and IPv6 as completely separate instances (running like "ships in the night"). Security policies must be duplicated to ensure both stacks are secured.
*   **Tunneling**: Encapsulating one protocol within another (e.g., IPv6 private networks communicating over an IPv4 network). This is distinct from translation protocols like **NAT**-PT, which translate headers between versions.
*   **Header Lifespan**: IPv4 uses the **TTL** (Time to Live) field, and IPv6 uses the Hop Limit field to prevent infinite loops. When these reach zero, the packet is discarded, and an **ICMP** time exceeded (Type 11) message is sent.

### Subnetting & Address Resolution
*   **Classful vs. Classless**: Traditional IPv4 address classes (A, B, C, D for multicast, E for experimental) used default subnet masks (`/8`, `/16`, `/24`). Modern routing utilizes **CIDR** (Classless Inter-Domain Routing) and **VLSM** (Variable Length Subnet Masking) to allow arbitrary mask lengths.
*   **IGMP**: The **IGMP** (Internet Group Management Protocol) manages host membership in multicast groups (one-to-many communication), acting like a remote control to join or leave groups.
*   **ICMP**: The **ICMP** (Internet Control Message Protocol) is used for network troubleshooting. Diagnostic tools like ping (echo/echo reply) and traceroute rely on **ICMP**.
*   **ARP**: The **ARP** (Address Resolution Protocol) resolves IP addresses to **MAC** (Media Access Control) addresses to build Layer 2 frames.
*   **ARP Attacks & Mitigations**:
    *   *ARP Poisoning/Spoofing*: Exploiting gratuitous **ARP** (unsolicited replies) to feed fake mapping data to hosts. Static **ARP** entries can be configured via the **CLI** (Command Line Interface), but they are hard to manage and do not persist across reboots.
    *   *Dynamic ARP Inspection (DAI)*: A switch security feature that uses **DHCP** snooping to build a database mapping **MAC** addresses to IP addresses on specific ports, blocking fake **ARP** replies. Other vendors call **DAI** by names like **DAP** (Dynamic ARP Protection by Juniper), ARP Protection, or ARP Guard.
    *   *Port Security / MAC Limiting*: Restricts the number of authorized **MAC** addresses on a switch port to prevent **MAC** spoofing.
    *   *Endpoint Security*: Host firewalls, **HIDS** (Host Intrusion Detection System), and **HIPS** (Host Intrusion Prevention System) can block unauthorized **ARP** changes.

---

## 2. Layer 4 Transport Protocols & Converged Protocols

### TCP vs. UDP
*   **TCP** (Transmission Control Protocol): A connection-oriented, reliable transport protocol. It uses sequence numbers, window sizes, and control flags:
    *   **SYN** (Synchronize): Used to initiate connections.
    *   **ACK** (Acknowledgment): Confirms receipt of packets.
    *   **FIN** (Finish): Terminates connections cleanly.
*   **UDP** (User Datagram Protocol): A connectionless, lightweight protocol that uses simple headers (ports, length, checksum) and offers no flow control or delivery guarantees.
*   **Deep Packet Inspection (DPI)**: Standard firewalls filter by port numbers, which are just conventions. To identify malicious traffic hiding on standard ports, **DPI** is required to analyze the payload content.

### Converged Protocols
Converged protocols allow storage and specialized traffic to utilize the standard **LAN** (Local Area Network) and **WAN** (Wide Area Network) infrastructure:
*   **SAN** (Storage Area Network): Dedicated network connecting servers to storage devices.
*   **FCoE** (Fibre Channel over Ethernet): Encapsulates Fibre Channel frames over standard Ethernet networks, utilizing **SFP** (Small Form-factor Pluggable) transceivers.
*   **MPLS**: The **MPLS** (Multiprotocol Label Switching) protocol works at Layer 2.5, using short path labels rather than complex IP routing table lookups to forward packets.
*   **iSCSI** (Internet Small Computer System Interface): Bypasses dedicated storage cables by running SCSI storage commands over IP networks.
*   **VoIP** (Voice over IP): Converges voice/video over IP networks. It relies on **RTP** (Real-time Transport Protocol). For security, **RTP** must be replaced with Secure **RTP** to encrypt and authenticate payloads, preventing eavesdropping and session tampering.

---

## 3. Software-Defined Networking (SDN) & Virtualization

*   **SDN Architecture**: **SDN** separates the infrastructure/data plane (dumb hardware forwarding packets) from the control plane (the central intelligence or **SDN** controller). It makes the network directly programmable and vendor-neutral.
*   **Software-Defined Storage (SDS)**: Virtualizes storage hardware at the host level, bypassing dedicated **SAN** physical hardware via virtual SANs (vSANs).
*   **SD-WAN**: Extends **SDN** to wide area networks, simplifying the management of complex VPN links and offering dynamic, self-healing path selection over internet and private links.
*   **VXLAN**: The **VXLAN** (Virtual Extensible LAN) protocol wraps Layer 2 Ethernet frames in Layer 3 **UDP** packets. It allows stretching VLANs across routed networks, overcoming the 4,096 traditional **VLAN** limit by supporting up to 16 million virtual networks.

---

## 4. Wireless Network Architectures & Security

Wireless standards are regulated by the **IEEE** (Institute of Electrical and Electronics Engineers) under the **802.11** **standard** family:
*   **802.11b/g/n/ax/be**: Operating on 2.4 GHz, 5 GHz, and 6 GHz bands. Lower frequencies have a longer **physical** range, while higher frequencies provide faster throughput over a reduced distance.
*   **Ad Hoc vs. Infrastructure**: In ad hoc mode, peer devices communicate directly. In infrastructure mode, devices connect to a **WAP** (Wireless Access Point), which uses a **NIC** (Network Interface Card) to communicate with the wired network.
*   **Fat vs. Thin APs**: Fat APs operate as standalone devices. Thin APs require a centralized **WLC** (Wireless LAN Controller) to manage wireless policies, routing, and access.
*   **SSID Identifiers**: Wireless networks are identified by an **SSID** (Service Set Identifier). 
    *   **ESSID** (Extended Service Set Identifier): The user-facing name of the wireless network.
    *   **BSSID** (Basic Service Set Identifier): The **MAC** address of the AP's radio, allowing clients to identify specific APs.
    *   *Note*: Disabling **SSID** broadcasting is NOT a secure **policy**, as attackers can sniff frames to discover the hidden network name.
*   **RF Spread Spectrum**:
    *   **FHSS** (Frequency Hopping Spread Spectrum): Hopping sequentially across different frequencies.
    *   **DSSS** (Direct Sequence Spread Spectrum): Using chipping codes to transmit across multiple frequencies simultaneously.
    *   **OFDM** (Orthogonal Frequency Division Multiplexing): Oscillating signals perpendicularly to minimize interference and maximize throughput.

### Wireless Encryption Standards
1.  **WEP**: The **WEP** (Wired Equivalent Privacy) protocol uses a shared RC4 key. It is highly insecure and should never be used.
2.  **WPA**: The **WPA** (Wi-Fi Protected Access) protocol introduced TKIP but was also compromised.
3.  **WPA2**: Utilizes **AES**-**CCMP** for strong encryption.
4.  **WPA3**: Enhances security by using 192-bit **AES**-**CCMP** for Enterprise and 128-bit for Personal. It replaces pre-shared keys (PSK) with **SAE** (Simultaneous Authentication of Equals) to prevent offline dictionary attacks.
5.  **WPS**: The **WPS** (Wi-Fi Protected Setup) protocol allows quick connections using an 8-digit **PIN**. However, **WPS** is highly vulnerable to brute-force attacks and must be disabled.
6.  **802.1X / EAP**: For enterprise environments, 802.1X provides port-based authentication by integrating with RADIUS servers and user directories. It uses **EAP** (Extensible Authentication Protocol) as a framework to support credentials, digital certificates, or **SIM** cards.

---

## 5. Wireless & Network Attacks & Defenses

*   **War Driving**: Scanning for wireless networks from a moving vehicle or drone to identify weak or open **ISP** networks.
*   **Rogue Access Points**: Unauthorized **WAP** devices installed on a secure corporate network. They bypass security controls and create backdoors. 
    *   *Defenses*: Continuous network audits, **WLC** monitor mode, switch-level port security, and 802.1X.
*   **Evil Twin**: A rogue AP that mimics the **SSID** and **BSSID** of a legitimate corporate network. It lures the **user** to connect and routes their traffic through the attacker's system.
*   **Disassociation & Deauthentication**: Sending forged management frames to force clients to disconnect. This is used to capture **SSID** handshakes, block access, or perform session hijacking.
*   **Jamming**: Intentional radio frequency interference to deny service. Defenses involve **physical** relocation or spectrum triangulation using APs in monitor mode.
*   **Other Wireless Technologies**:
    *   **Bluetooth & BLE**: Standard Bluetooth and **BLE** (Bluetooth Low Energy) operate on the 2.4 GHz spectrum and require **PIN** pairing. Vulnerable to *bluejacking* (unsolicited messages), *bluesnarfing* (unauthorized data access), and *bluebugging* (remote control).
    *   **RFID**: The **RFID** (Radio Frequency Identification) protocol uses electromagnetic fields to read tags for inventory and access control.
    *   **NFC**: The **NFC** (Near Field Communication) standard is a short-range subset of **RFID** (up to 10 cm) used for contactless payments.
*   **Cellular Bridging**: Connecting a mobile device to both a cellular network and corporate Wi-Fi. This bypasses perimeter firewall security and exposes the **internal** network.

---

## 6. CISSP Exam Tips (Manager/Governance Perspective)

*   **Risk of Bypassing Perimeter Controls**: Understand that enabling cellular or **VPN** channels on internal corporate assets can completely bypass security perimeters. Ensure the **user** agreement and security **policy** restrict dual-homed connections.
*   **Dual-Stack Exposure**: When migrating to IPv6, security managers must ensure firewall rules, ACLs, and monitoring tools are configured to match IPv4 policies. Leaving IPv6 at defaults permits attackers to bypass controls.
*   **Microsegmentation as a Zero Trust Enabler**: Microsegmentation minimizes lateral movement by isolating workloads. Governance policies should define who the **owner** of each segment is and restrict communication to authorized APIs.
*   **Inherent Trust in Protocols**: Address limitations in legacy protocols like **ARP** and **DNS** that lack built-in authentication. Emphasize controls like **DAI** and DNSSEC to establish trust at lower layers.
*   **Wireless Governance**: Mandate the disabling of **WPS** and **WEP** across all enterprise and remote-work networks. Standardize on WPA3 or WPA2-Enterprise with 802.1X and **EAP**-TLS.
