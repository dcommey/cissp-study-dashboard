# CISSP Study Notes - Video 16: Network Security Part 1

## Networking Basics and Communication Models
Almost all modern cyber attacks occur over networks. These range from corporate networks to cloud infrastructures, and even short-range connections (e.g., when a mobile phone talks to a **POS** - Point of Sale - terminal using **NFC** - Near Field Communication).
*   **Protocol**: A **standard** set of rules governing how devices format, transmit, and receive data.
*   **OSI Model**: A theoretical seven-layer framework developed by the **ISO** (International Organization for Standardization):
    1.  **Physical** (Layer 1): Transmission of raw bits as electrical, light, or radio signals. Uses repeaters and hubs.
    2.  **Data Link** (Layer 2): Moves frames using **physical** addressing. Frames contain a source and destination **MAC** (Media Access Control) address. Hardware includes Layer 2 switches and the **NIC** (Network Interface Card).
    3.  **Network** (Layer 3): Routes packets across networks using **logical** addressing. The primary protocol is IP (supporting 32-bit IPv4 and 128-bit IPv6). Hardware includes Layer 3 routers and switches.
    4.  **Transport** (Layer 4): Manages end-to-end communication flow. Segments data and adds source/destination port numbers, enabling multiplexing. Includes flow control and error recovery.
    5.  **Session** (Layer 5): Manages streams of communication (often handled by the transport or application layer in modern stacks).
    6.  **Presentation** (Layer 6): Data formatting, encryption, and translation (e.g., converting binary or **ASCII** text).
    7.  **Application** (Layer 7): Interface where applications interact with network services (e.g., web browsers, email clients).
*   **Encapsulation/Decapsulation**: The process where each layer adds headers (and sometimes trailers) when sending data down the stack, and removes them when receiving data going up the stack.
*   **TCP/IP Model**: A down-to-earth four-layer stack developed by the Department of Defense:
    *   *Application*: Replaces OSI layers 5–7.
    *   *Transport*: Maps to OSI layer 4 (TCP/UDP, ports).
    *   *Internet*: Maps to OSI layer 3 (IP, routing).
    *   *Network Access*: Replaces OSI layers 1–2 (MAC addresses, physical signaling).

---

## MAC Addresses and Network Interfaces
A **MAC** address is a 48-bit physical address burned into a network card. It is split into two halves:
*   **OUI** (Organizationally Unique Identifier): The first 24 bits that uniquely identify the hardware manufacturer (registered with the **IANA** - Internet Assigned Numbers Authority).
*   The last 24 bits are assigned by the manufacturer to ensure uniqueness.
*   *Promiscuous Mode*: A diagnostic setting that instructs the **NIC** to ignore destination MAC filtering and capture every frame passing through the physical link. Used by a protocol analyzer (e.g., Wireshark or TCPdump) to monitor network traffic.

---

## Routing Protocols and Architectures
Routers communicate routes dynamically to direct traffic across a Local Area Network (**LAN**) or Wide Area Network (**WAN**). A collection of networks under a single administrative **management** domain is called an Autonomous System (AS).
*   **Interior Gateway Protocols (IGP)**: Route traffic inside an AS:
    *   *Distance Vector*: Calculates paths based on hop count and direction (gossip-style propagation). Examples include **RIP** (Routing Information Protocol) and **IGRP** (Interior Gateway Routing Protocol).
    *   *Link State*: Calculates paths based on link speed, latency, and costs, requiring more router **CPU** power. Examples include **OSPF** (Open Shortest Path First) and **ISIS** (Intermediate System to Intermediate System). EIGRP (**EIGRP**) is a hybrid protocol.
*   **Exterior Gateway Protocols (EGP)**: Route traffic between different ASs across the internet. The primary path-vector protocol is **BGP** (Border Gateway Protocol).
*   *Security*: Routing updates must require cryptographic **authentication** to prevent rogue route injection, man-in-the-middle attacks, or denial-of-service redirects.

---

## Common Application Layer Protocols and Port Numbers
Communication relies on standard port mappings managed by the **IANA**:
*   **Remote Access**:
    *   *Telnet* (TCP port 23): Obsolete, unencrypted command-line access.
    *   *SSH* (**SSH** - TCP port 22): Secure, encrypted remote control.
*   **File Transfer**:
    *   *FTP* (**FTP** - TCP ports 20/21): Transfers files in clear text. Uses port 21 for control and 20 for data. FTP active mode requires the server to connect back to the client; passive mode has the client initiate both connections, which is compatible with firewalls and **NAT** (Network Address Translation).
    *   *TFTP* (**TFTP** - UDP port 69): Lightweight, unencrypted file transfer with no authentication.
    *   *SFTP* (**SFTP** - TCP port 22): Secure file transfer utilizing SSH.
    *   *FTPS* (**FTPS** - TCP ports 989/990): FTP wrapped in SSL/**TLS** (Transport Layer Security).
*   **Email**:
    *   *SMTP* (**SMTP** - TCP port 25): Sends mail between servers. Wrapped in TLS to become **SMTPS** (TCP port 465).
    *   *POP3* (**POP**3 - TCP port 110): Retrieves mail, deleting it from the server. Wrapped in TLS to become POPS (TCP port 995).
    *   *IMAP4* (**IMAP** - TCP port 143): Advanced mail retrieval supporting folder synchronization. Wrapped in TLS to become IMAPS (TCP port 993).
*   **Web Traffic**:
    *   *HTTP* (**HTTP** - TCP port 80): Transmits clear text web elements.
    *   *HTTPS* (**HTTPS** - TCP port 443): Transmits encrypted web traffic using TLS.
*   **Network Management and Time**:
    *   *SNMP* (**SNMP** - UDP ports 161/162): Monitors network device health. The agent listens on port 161; the management server listens on port 162 for SNMP traps (alerts). Version 3 supports encryption and authentication.
    *   *DHCP* (**DHCP** - UDP ports 67/68): Dynamically assigns IP addresses, default gateways, and DNS details.
    *   *NTP* (**NTP** - UDP port 123): Synchronizes time clocks across network devices, critical for event log correlation.

---

## Transport Layer Operations and TCP Flags
The transport layer uses 16-bit source/destination ports (defining 65,536 total ports split into well-known, registered, and ephemeral dynamic pools).
*   **UDP** (User Datagram Protocol): Connectionless, best-effort protocol with minimal overhead.
*   **TCP** (Transmission Control Protocol): Connection-oriented, reliable protocol. It establishes a session using a three-way handshake:
    1.  Client sends a segment with the **SYN** (Synchronize) flag set and an initial sequence number.
    2.  Server responds with **SYN** and **ACK** (Acknowledgment) flags set.
    3.  Client replies with the **ACK** flag set.
*   *Flow Control*: TCP uses sequence numbers to track packet delivery and adjust transmission speed.
*   *Connection Termination*:
    *   **FIN** (Finish): Terminating a session gracefully.
    *   **RST** (Reset): Abruptly tearing down a connection (e.g., when a server receives packets on a closed port, it sends an RST to say "nobody's home").

---

## Domain Name System (DNS) Security and Risks
**DNS** maps human-friendly domain names (e.g., a **URL** or FQDN - Fully Qualified Domain Name) to **logical** IP addresses.
*   **DNS** Structure:
    *   **FQDN**: A name like `www.google.com` (max 253 characters total, 63 characters per section).
    *   **TLD** (Top-Level Domain): The far-right section (e.g., `.com`, `.org`).
*   *Zone Files*: Authoritative name servers host zone files. Active zone transfers use TCP port 53; query resolutions use UDP port 53. A **PTR** (pointer) record is required to conduct a reverse lookup (mapping IP to name).
*   *Hosts File*: Located locally (e.g., `/etc/hosts` in Linux or `C:\Windows\System32\drivers\etc\hosts` in Windows). It is checked first for name resolution. It is a target for malicious redirection.
*   **DNS Risks**:
    *   *DNS Cache Poisoning / Spoofing*: Injecting false IP mappings into a client's or server's DNS cache, redirecting them to malicious sites.
    *   *Rogue DNS Server*: An unauthorized DNS server answering client queries with false IP addresses.
    *   *Pharm/Pharming*: Redirecting users to a fake website to steal credentials.
    *   *Domain Hijacking*: Altering the domain registration at the registrar without the **owner**'s consent.
    *   *Typosquatting*: Registering domains similar to famous brands (e.g., Google spelled with three 'o's) to exploit user typos.
    *   *Homograph Attack*: Registering domains using different character sets (e.g., Cyrillic letters that look identical to Latin letters) to trick users.
    *   *URL Hijacking & Clickjacking*: Placing invisible overlays on a page to redirect user clicks.
*   **DNS Safeguards**:
    *   Limit zone transfers from internal servers to external queries.
    *   Set up a network **IDS** or **IPS** to monitor DNS anomalies.
    *   *Split-DNS*: Separate DNS servers for public (external) and private (internal) network zones.
    *   *DNSSEC*: Uses certificate cryptography to authenticate DNS responses, preventing spoofing.
    *   *DoH / ODoH*: DNS over HTTPS (DoH) encrypts queries inside a TLS tunnel (acting like a local **VPN** for DNS). Oblivious DoH (ODoH) adds a proxy for client anonymity.
    *   *DNS Sinkhole*: Providing false DNS responses to redirect malware outbound connections (such as command-and-control calls) to a safe quarantine zone.

---

## CISSP Exam Tips: The Manager's Perspective
*   **Risk Governance**: Senior **management** must define a clear network security **policy** and ensure that all protocol usage matches corporate standards (e.g., enforcing SSH instead of Telnet).
*   **Deterrent and Prevention**: Layer network defenses so that **technical** controls (IDS/IPS/Firewalls) align with **physical** cabling security to protect against eavesdropping.
*   **Forensics and Logs**: Implement **NTP** to synchronize device clocks. Correct timestamps are critical to reconstruct timelines during a security **incident** or investigation.
