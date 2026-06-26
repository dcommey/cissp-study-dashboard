# CISSP Study Notes: Securing Communications Part 2

## 1. Virtual Private Networks (VPNs) & Tunneling Protocols

From a **CISSP** exam perspective, a virtual private network (**VPN**) establishes a secure connection over an untrusted network like the internet, providing **confidentiality**, data **integrity**, and **authentication** as **logical** and **technical** controls.

### Tunneling Operations
*   **VPN Concentrators**: Dedicated devices designed to aggregate and handle multiple simultaneous remote access connections.
*   **Transport Mode**: Encrypts only the payload of the packet. The original header remains in cleartext to allow routing. This is primarily a host-to-host tunnel within a trusted network.
*   **Tunnel Mode**: Encrypts both the payload and the original header. It encapsulates the entire packet in a new IP packet with a temporary outer header, making it suitable for site-to-site **VPN** connections across untrusted networks.
*   **Full vs. Split Tunneling**:
    *   *Full Tunnel*: Routes all traffic (including internet traffic) through the **VPN**, allowing the company's security stack to filter and monitor all actions.
    *   *Split Tunnel*: Routes only specific internal destination traffic through the **VPN**, while other traffic accesses the internet directly, reducing bandwidth usage but increasing security **exposure**.

### VPN Protocol Implementations
*   **MPLS**: Service provider networks often utilize **MPLS** (Multiprotocol Label Switching) for private routing without native encryption.
*   **PPTP**: Point-to-Point Tunneling Protocol (**PPTP**) is an obsolete data link layer protocol based on **PPP** (Point-to-Point Protocol). It uses **TCP** port 1723 and supports authentication methods like **PAP**, **CHAP**, and **EAP** (Extensible Authentication Protocol). It is insecure due to weaknesses in its tunnel negotiation.
*   **L2TP**: Layer 2 Tunneling Protocol (**L2TP**) is a data link layer protocol combining **PPTP** and Cisco's L2F. It uses **UDP** port 1701. Because it does not provide native encryption, it is typically paired with IPsec (L2TP/IPsec) and integrated with **AAA** servers.
*   **SSH**: Secure Shell (**SSH**) operates on **TCP** port 22. It is a transport-mode **VPN** alternative that provides secure remote command-line access (replacing Telnet) and wraps other protocols like **SCP** (Secure Copy Protocol) and **SFTP** (Secure File Transfer Protocol).
*   **SSL/TLS VPNs**: OpenVPN and vendor-managed portals (like Cisco Secure Client) run on top of the **TLS** (formerly **SSL**) protocol. They allow remote access via a web browser without dedicated client software. If the secure protocol name ends with S, such as **HTTPS**, the security is provided by **TLS**.
*   **IPsec**: Internet Protocol Security is a suite of protocols providing network-layer security:
    *   *AH (Authentication Header)*: Provides data origin authentication and **integrity**, but does not encrypt the payload. Because it authenticates the IP header, it breaks when passing through **NAT**.
    *   *ESP (Encapsulating Security Payload)*: Provides encryption (typically using **AES**) and integrity.
    *   *IKE (Internet Key Exchange)*: Manages key exchanges. It utilizes **IKE** phases and protocols like Oakley, **SKEME**, and ISAKMP (**ISA**).
    *   *Security Association (SA)*: A simplex agreement defining cryptographic parameters. A bidirectional link requires two SAs.
    *   *NAT Traversal (NAT-T)*: Encapsulates IPsec packets in **UDP** to bypass **NAT** filters.

---

## 2. Layer 2 Switching Security & VLANs

A switch operates at the data link layer (Layer 2) of the **OSI** reference model, forwarding frames based on destination **MAC** addresses.

### Switch Functions & Databases
*   **CAM Table**: The Content Addressable Memory (**CAM**) table stores **MAC**-to-port mappings learned from the source **MAC** of incoming traffic.
*   **Managed vs. Unmanaged**: Unmanaged switches work out of the box with no configuration. Managed switches provide interfaces (via a web **GUI** or command line) to configure security and VLANs.
*   **Switching Actions**: Learning (**MAC** collection), forwarding (directed transmission), dropping (corrupted/loop frames), and flooding (broadcasting packets to all ports in the **VLAN** when the destination is unknown).
*   **CDP & LLDP**: Switch discovery protocols like Cisco Discovery Protocol (**CDP**) and Link Layer Discovery Protocol (**LLDP**) generate broadcast frames within the local segment.
*   **SPAN (Switch Port Analyzer)**: Cisco's **SPAN** (port mirroring) duplicates traffic from a port to an monitoring device like an **IDS** (Intrusion Detection System). Physical taps can also split the signal.
*   **MAC Flooding**: An attack that floods the switch with fake **MAC** addresses to overflow the **CAM** table, forcing the switch into fail-open/flooding mode where all unicast traffic is flooded, allowing sniffing.
*   **MAC Cloning/Spoofing**: Impersonating a trusted device's **MAC** address to bypass **port security** or **logical** access filters.

### Virtual Local Area Networks (VLANs)
*   **VLAN**: A logical grouping of switch ports that forms a separate broadcast domain, isolating **user** traffic. Devices in one **VLAN** cannot communicate with another without a router, as the boundary isolates **ARP** (Address Resolution Protocol) broadcasts.
*   **Management VLAN**: A dedicated **VLAN** used for out-of-band **management** of network devices, separating administration from user traffic.
*   **Trunk Ports**: Switch ports configured to carry traffic for multiple VLANs between switches. They use **VLAN** tagging based on the **IEEE** 802.1Q (**standard** tag size is 4 bytes).

---

## 3. Layer 3/4 Translation & Addressing (NAT, PAT, APIPA)

### NAT & PAT Concepts
*   **NAT**: Network Address Translation (**NAT**) maps private IP addresses (such as **RFC** 1918 addresses) in the local **LAN** to public IP addresses before routing over the **WAN**. This saves address space and masks internal network layouts.
*   **PAT**: Port Address Translation (**PAT**) is a dynamic **NAT** variation that maps multiple internal sockets (IP address plus **TCP**/**UDP** port number) to a single public IP, tracking sessions via port numbers.
*   **NAT-Incompatible Protocols**:
    *   *IPsec*: AH authenticates the header, causing **NAT** modifications to invalidate packets.
    *   *FTP*: Active **FTP** embeds client IPs in the control payload (on ports 20/21) and requires inbound connections. Passive **FTP** or **FTP**-aware ALGs must be used.
    *   *SIP & H.323*: Voice protocols like **SIP** (Session Initiation Protocol) and H.323 embed IP parameters in the payload. Mitigation requires a session border controller (**SBC**) or NAT-traversal protocols like **STUN**, **turn**, and **ice** to help detect public IPs where **RTP** (Real-time Transport Protocol) runs.
    *   *GRE*: PPTP relies on Generic Routing Encapsulation (**GRE**), which lacks port numbers, making it difficult for **NAT** devices to track.
    *   *Multicast*: Protocols like **IGMP** (Internet Group Management Protocol) and **PIM** (Protocol Independent Multicast) are designed for one-to-many unicast and fail under standard **NAT**.
    *   *P2P & Dynamic Mapping*: BitTorrent and other P2P apps use UPnP or NAT-PMP (**PMP**) to dynamically map ports.
*   **APIPA**: Automatic Private IP Addressing (**APIPA**) assigns an IP in the `169.254.0.0/16` range when a client fails to contact a **DHCP** server, allowing local **LAN** communication only.
*   **Loopback Address**: The software loopback address (`127.0.0.1` and the class A range) allows a host to send packets to itself to test the local TCP/IP stack without physical network hardware.

---

## 4. Third-Party Connectivity & WAN Technologies

When connecting an internal network to a third party, organizations face increased **exposure** and must establish clear agreements.

### Interconnection Agreements
*   **MOU**: A Memorandum of Understanding (**MOU**) defines the expectations and mutual intentions of the parties. It is not legally binding.
*   **ISA**: An Interconnection Security Agreement (**ISA**) defines the **technical** security requirements, parameters, and risk exposure of the link, particularly when connecting to federal networks.
*   **B2B Connectivity**: Links can be established via physical lines, site-to-site **VPN**, or a shared extranet server in a private cloud.

### Wide Area Network (WAN) Architectures
A **WAN** connects networks across large geographical distances:
*   **Dedicated WAN**: Provides a constant, exclusive link between endpoints. Setting up service provider WAN networks was complex enough to historically require specialized Cisco **CCIE** certifications. Historical examples include **ATM** (Asynchronous Transfer Mode), Frame Relay, leased lines, and dedicated fiber optics.
*   **Non-Dedicated WAN**: Requires establishing a connection before transmitting data. Examples include modems, **DSL** (Digital Subscriber Line), **ISDN** (Integrated Services Digital Network), and satellite.
*   **SD-WAN**: Software-Defined WAN virtualizes **WAN** connections, dynamically routing traffic over standard internet overlays securely.

---

## 5. CISSP Exam Tips (Manager/Governance Perspective)

*   **Risk & Exposure Assessment**: Before authorizing any third-party link, **management** must perform a formal risk assessment. The **responsible** security officer must ensure an **MOU** and **ISA** are signed to document security expectations.
*   **Control Implementation**: Switch **port security** and **VPN** access lists represent **logical** (technical) controls, while locking the wiring closets where physical switches and **KVM** (keyboard, video, mouse) consoles reside represents a **physical** control.
*   **Confidentiality & Integrity**: Ensure **VPN** protocols use strong encryption algorithms (like **AES**) to guarantee **confidentiality** and hashing algorithms (like **HMAC**) to guarantee data **integrity**.
*   **APIPA Indications**: An **APIPA** address on an endpoint indicates a failure in **DHCP** communication. The **responsible** team must investigate if it is a simple cable fault or a malicious rogue device blocking **DHCP** queries.
