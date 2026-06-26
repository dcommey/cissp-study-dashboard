# CISSP Practice Quiz Answers & Explanations: Securing Communications Part 1

## Question 1
**Correct Answer: B**

### Explanation:
*   **[B] is correct.** EAP-TTLS (Tunneled Transport Layer Security) establishes a secure TLS tunnel (Phase 1) using only a server-side certificate, protecting subsequent communication. In Phase 2, the client authenticates inside this secure tunnel using simpler inner methods (like usernames and passwords or legacy protocols), eliminating the overhead of managing client-side certificates. In contrast, EAP-TLS requires certificates on both the server and every client device.
*   **[A] is incorrect.** EAP-TLS requires digital certificates to be generated, distributed, and maintained on both the authenticating server and all client devices (supplicants), which creates massive administrative overhead for large organizations.
*   **[C] is incorrect.** LEAP (Lightweight Extensible Authentication Protocol) is a deprecated Cisco-proprietary protocol. It does not use certificates and is highly vulnerable to offline dictionary attacks.
*   **[D] is incorrect.** PAP (Password Authentication Protocol) is an obsolete protocol that sends credentials in cleartext over the wire, providing no security.

---

## Question 2
**Correct Answer: B**

### Explanation:
*   **[B] is correct.** Prior to successful authentication, an 802.1X-configured switch port is in an unauthorized state. The authenticator (switch) blocks all user data traffic on the port. The only traffic permitted is EAP over LAN (EAPOL) traffic, which allows the supplicant (client laptop) to communicate with the authenticator to complete the authentication handshake.
*   **[A] is incorrect.** SMTPS traffic on TCP port 465 is user mail traffic and will be blocked before successful authentication.
*   **[C] is incorrect.** SNMP traffic is used for network management and is blocked on the unauthorized port.
*   **[D] is incorrect.** Database queries (SQL traffic) are blocked until the supplicant passes authentication and the port is transitioned to an authorized state.

---

## Question 3
**Correct Answer: B**

### Explanation:
*   **[B] is correct.** Securing telephone and PBX systems against fraud requires a combination of administrative and logical controls. Restricting dial-in and dial-out features limits unauthorized trunk access. Disabling remote maintenance modems and remote admin interfaces removes primary external attack vectors. Implementing strong passwords protects system integrity, while periodically auditing call logs serves as a detective control to detect anomalies.
*   **[A] is incorrect.** Hiding the SSID does not secure a wireless network or telephone lines. Disabling UTP cabling would disrupt connections and does not address PBX trunk fraud.
*   **[C] is incorrect.** Fiber to the Home (FTTH) is a physical medium that replaces copper subscriber lines, and round-robin load balancing distributes traffic across servers. Neither of these technologies secures trunk dial-in/out or prevents telephone fraud.
*   **[D] is incorrect.** SMTP relays are used for email delivery, not telephone routing. Open SMTP relays are security vulnerabilities themselves and would not handle voice traffic.

---

## Question 4
**Correct Answer: B**

### Explanation:
*   **[B] is correct.** In a web cluster, user sessions (such as shopping carts or login states) are often stored locally on the specific backend server that handled the initial request. If the load balancer does not enforce session persistence (sticky sessions), subsequent requests from the same user may be sent to other servers in the cluster that do not possess the session data. Enabling session persistence (via cookies or hash-based routing using connection attributes like IP/ports) ensures the client remains pinned to the same backend server.
*   **[A] is incorrect.** Terminating SSL connections (SSL offloading) terminates the encrypted session on the load balancer to free up server CPU resources. While it changes the traffic sent to the backend, it does not cause session loss or disappearing shopping carts.
*   **[C] is incorrect.** Round-robin routing and SNMP load monitoring are load-balancing algorithms and monitoring protocols. They do not block connections, but without session persistence, round-robin will naturally direct users to different servers, causing session issues.
*   **[D] is incorrect.** Downloadable ACLs (DACL) are network access control filters applied at the switch port level when a device authenticates. They do not selectively delete application-level session states like shopping carts.

---

## Question 5
**Correct Answer: C**

### Explanation:
*   **[C] is correct.** SPF, DKIM, and DMARC work together to secure email domain identities. SPF lists authorized sending IP addresses in DNS records. DKIM adds a digital signature to email headers, proving domain ownership and verifying message integrity in transit. DMARC aligns these checks, tells recipient servers how to handle failures (e.g., reject or quarantine), and provides reporting to the domain owner.
*   **[A] is incorrect.** PAP and CHAP are legacy network point-to-point authentication protocols, and EAP-SIM is a mobile wireless authentication method. None of these are email security protocols or published in DNS.
*   **[B] is incorrect.** POP3 and IMAP are standard protocols used by clients to retrieve email from mail servers, and STARTTLS is a command to upgrade an existing connection to TLS. They are not DNS-based authentication protocols for domain spoofing defense.
*   **[D] is incorrect.** SSL offloading, VIP (Virtual IP), and Active-Passive configurations are load-balancing terms used for high availability, not email domain verification.
