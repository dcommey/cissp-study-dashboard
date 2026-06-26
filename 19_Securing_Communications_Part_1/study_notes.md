# CISSP Study Notes: Securing Communications Part 1

## 1. Network Authentication Protocols & Standards

Securing communications focuses on protecting the **integrity** and **confidentiality** of data in transit. Implementing proper authentication is critical to prevent a data **breach** and ensure that communications are restricted to authorized parties.

### Point-to-Point Protocols
*   **PPP**: The Point-to-Point Protocol (**PPP**) was designed to transport IP traffic over dial-up or serial connections. It was a replacement for the older Serial Line Internet Protocol (**SLIP**). The **PPP** protocol is capable of error detection, link configuration, and supports various authentication protocols.
*   **PAP**: Password Authentication Protocol (**PAP**) transmits credentials in clear text, offering no encryption or security.
*   **CHAP**: Challenge Handshake Authentication Protocol (**CHAP**) uses a challenge-response handshake with a shared secret to authenticate without transmitting the password over the wire, protecting against replay attacks.
*   **EAP**: Extensible Authentication Protocol (**EAP**) is an authentication framework, not a single protocol, allowing for diverse methods such as passwords, certificates, or **OTP** (one-time password) tokens.

### EAP Variations & Implementations
*   **LEAP**: Lightweight Extensible Authentication Protocol (**LEAP**) is a deprecated, proprietary Cisco protocol based on MS-CHAP. Similar to **WEP**, it is outdated and vulnerable to offline dictionary attacks.
*   **PEAP**: Protected Extensible Authentication Protocol (**PEAP**) encapsulates **EAP** inside a secure **TLS** tunnel to protect credentials.
*   **EAP-FAST**: Flexible Authentication via Secure Tunneling (**fast**) was introduced by Cisco as a secure replacement for **LEAP**, establishing a tunnel for credentials.
*   **EAP-TLS**: Uses **TLS** for certificate-based mutual authentication where both client and server present digital certificates.
*   **EAP-TTLS**: Tunneled Transport Layer Security (**TTLS**) establishes a **TLS** tunnel (Phase 1) using a server-side certificate, then authenticates the client (Phase 2) using inner methods like **PAP** or **CHAP**, removing the need for client certificates.
*   **EAP-POTP**: Protected One-Time Password (**POTP**) supports hardware and software **OTP** tokens.
*   **Mobile Authentication**: EAP-SIM (**SIM**) authenticates mobile devices over Wi-Fi/cellular networks by querying the **IMSI** (International Mobile Subscriber Identity) on the **SIM** card. The original **SIM** authentication was designed for 2G **GSM** networks, whereas modern networks utilize **aka** (Authentication and Key Agreement) for 3G, 4G, and **LTE** cellular networks.

### IEEE 802.1X (Port-Based Network Access Control)
The **IEEE** 802.1X **standard** defines port-based network access control (**NAC**). It blocks all traffic on a port by default except for EAP over LAN (**EAPOL**).
*   **Supplicant**: The client/user device requesting access.
*   **Authenticator**: The network device (switch or access point) acting as the gatekeeper.
*   **Authentication Server**: A **AAA** server (typically RADIUS or TACACS+) validating credentials.
*   **DACL**: Once authenticated, a downloadable access control list (**DACL**) or specific **VLAN** assignment is pushed to the port as a **technical** control, restricting the **user** to authorized resources.

### Port Security
Port security is a Layer 2 switch feature to restrict access:
*   **Static**: Manually configuring allowed **MAC** addresses.
*   **Dynamic**: Dynamically learning a set limit of **MAC** addresses.
*   **Sticky**: Storing dynamically learned **MAC** addresses in the running configuration to survive reboots.
*   *Physical Port Security*: Physically locking wiring closets and disconnecting unused wall jacks represents a **physical** control to protect ports.

---

## 2. Voice Communication Security (VoIP & Legacy Telephony)

*   **POTS**: Plain Old Telephone Service (**POTS**) uses analog copper lines. Modern telecommunication infrastructures have transitioned to **FTTH** (Fiber to the Home).
*   **PSTN**: Public Switched Telephone Network (**PSTN**) is the global public telephone infrastructure.
*   **PBX**: Private Branch Exchange (**PBX**) is a private telephone network used within an organization. Secure **PBX** systems by restricting trunk dial-in/out, disabling remote maintenance modems, and defining an **acceptable use** policy.
*   **VoIP**: Voice over IP runs voice over **LAN** or **WAN** networks. It relies on **UDP** and **TCP** for transport. VoIP traffic is vulnerable to sniffing and interception over the **ISP** (Internet Service Provider) network unless secured using Secure Real-time Transport Protocol (**SRTP**) for encryption.
*   **Vishing**: Phishing conducted over voice channels. **Management** must prioritize security awareness training to educate users not to share sensitive data over the phone.

---

## 3. Remote Access Architectures & Policy

Organizations provide remote access using three primary models:
1.  **Service-Specific Access**: Restricts connection to a single application (e.g., email or web **API**), often using standard web protocols like **HTTP** and **HTTPS**.
2.  **Remote Control (Administrative)**: Restricts access to management interfaces using protocols like **SSH** (Secure Shell) or RDP.
3.  **Basic Remote Network Access**: Establishes a logical network connection to the internal **LAN** using a **VPN** concentrator.

### Remote Access Security Controls
*   **Logical Controls**: Implementing multi-factor **authentication**, enforcing network access policies, and establishing **VPN** tunnels.
*   **Administrative Controls**: Defining a remote access **policy**, establishing a security **baseline** for remote endpoints, and enforcing an **acceptable use** policy.
*   **Physical Controls**: Encrypting laptops at the drive level protects data if the physical device is lost or stolen.
*   *Bypassing Defenses*: Remote connections bypass traditional **physical** security and **defense-in-depth** structures. If a remote client is compromised, it can act as a bridge to introduce malware or cause a security **breach** in the internal network.

---

## 4. Load Balancing & High Availability

Load balancers distribute traffic to a cluster of back-end servers to optimize response times and eliminate single points of failure.
*   **Virtual IP (VIP)**: The load balancer presents a single **VIP** to clients, masking the backend servers.
*   **Resiliency**: Deployed in Active-Active or Active-Passive configurations with heartbeat checks.
*   **Algorithms**:
    *   *Round Robin*: Assigning requests sequentially.
    *   *Load Monitoring*: Querying server resource usage via **SNMP** (Simple Network Management Protocol). Useful because request weights vary; for instance, a simple page load is fast, whereas a complex database **SQL** query consumes significant server resources.
    *   *Weighted Preference*: Sending more traffic to high-capacity servers.
    *   *Networking Metrics*: Evaluating traffic or latency.
    *   *Geographic*: Routing to the closest regional cluster.
    *   *Hash-based*: Hashing connection attributes (e.g., a 5-tuple: source/destination IP, source/destination port, protocol) to ensure session persistence.
*   **SSL Offloading**: Terminating **SSL**/**TLS** handshakes on the load balancer to free backend server **CPU** capacity.

---

## 5. Email Security & Protocols

Traditional email protocols lack built-in encryption, exposing messages to interception (similar to sending a postcard).
*   **SMTP**: Simple Mail Transfer Protocol (**SMTP**) runs on **TCP** port 25. Standard **SMTP** is stateless and prone to spoofing.
*   **POP3 & IMAP**: Protocols used to retrieve email from mailboxes (e.g., **IMAP** on **TCP** port 143).
*   **DLP**: Data Loss Prevention (**DLP**) rules should be integrated to scan outgoing mail and block unauthorized **disclosure** of sensitive data to external domains.

### Email Security Implementations
*   **S/MIME**: Secure Multipurpose Internet Mail Extensions (**MIME**) uses public-key cryptography to provide **authentication**, **confidentiality**, integrity, and **non-repudiation**.
*   **PGP**: Pretty Good Privacy (**PGP**) uses a web of trust for public-key encryption.
*   **SPF**: Sender Policy Framework (**SPF**) is a DNS-published record listing authorized sending **SMTP** servers, preventing spoofing.
*   **DKIM**: DomainKeys Identified Mail (**DKIM**) adds a cryptographic signature to email headers, verifying domain **owner** identity.
*   **DMARC**: Domain-based Message Authentication, Reporting, and Conformance (**DMARC**) aligns **SPF** and **DKIM** checks, advising receivers on how to handle failures.
*   **SMTPS**: 
    *   *STARTTLS (Explicit SMTPS)*: Upgrades a cleartext connection (usually on port 587) to encrypted **TLS**.
    *   *Implicit SMTPS* (**SMTPS**): Establishes a secure **TLS** connection from the start on **TCP** port 465.

---

## 6. CISSP Exam Tips (Manager/Governance Perspective)

*   **Policy & Standards Enforcement**: The **management** team must establish a remote access **policy** defining baseline configurations for endpoints. The **owner** of each system must review access lists (**ACL**) periodically to maintain compliance.
*   **Technical vs. Administrative Controls**: Enforcing **IEEE** 802.1X or **DACL** settings represent **technical** controls, whereas defining an **acceptable use** agreement for email or **VPN** services represents an **administrative** control.
*   **Defense-in-Depth**: Securing data in transit requires a **defense-in-depth** strategy. Combine Layer 2 port security, Layer 3 **VPN** encryption, Layer 7 **TLS** wrapping, and endpoint **DLP** agents to protect against interception and spoofing.
*   **Open Relays & Risk**: Do not configure open SMTP relays. They are heavily abused by external actors, leading to IP blacklisting and potential reputational damage.
