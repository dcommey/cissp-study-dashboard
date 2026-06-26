# CISSP Practice Quiz Answers & Explanations - Video 16: Network Security Part 1

## Question 1
**Correct Answer: B**

**Explanation:**
*   **A is incorrect.** Promiscuous mode on a NIC (Network Interface Card) collects all local packets on the segment for analysis (e.g., sniffers); disabling it does not remediate remote DNS cache poisoning.
*   **B is correct.** DNS Cache Poisoning occurs when an attacker inserts incorrect domain-to-IP mappings into a DNS resolver's cache, redirecting all users querying that resolver to a fraudulent site. DNSSEC (Domain Name System Security Extensions) introduces cryptographic signatures to DNS records, allowing clients and resolvers to verify that the returned mapping is authentic, directly preventing poisoning attacks.
*   **C is incorrect.** A homograph attack is a character set spoofing technique (e.g., using Cyrillic 'o' instead of Latin 'o'). Establishing VPN over port 80 (standard HTTP port) is non-standard and does not secure DNS resolutions.
*   **D is incorrect.** BGP hijacking targets router advertisement routing tables across autonomous systems. OUI and OSPF are local layer 2/3 protocols and do not manage registrar domain records.

---

## Question 2
**Correct Answer: B**

**Explanation:**
*   **A is incorrect.** A FIN flag gracefully closes a connection. This scenario shows half-open connections that are never completed, not connection terminations.
*   **B is correct.** A TCP SYN flood is a type of Denial of Service (DoS) attack where the attacker initiates a session by sending a SYN packet, receives the server's SYN-ACK, but intentionally fails to send the final ACK. The server allocates a connection buffer in memory for this 'half-open' socket. A flood of these packets exhausts the server's connection queues, preventing it from accepting new connections from legitimate users.
*   **C is incorrect.** SNMP traps are asynchronous alerts sent to a management station on UDP port 162. They do not alter physical MAC OUIs.
*   **D is incorrect.** A reverse DNS lookup queries a PTR record to resolve an IP to a name. It is not an exploit related to TCP SYN flags.

---

## Question 3
**Correct Answer: A**

**Explanation:**
*   **A is correct.** SNMPv1 and SNMPv2c are insecure because they transmit community strings (essentially clear text passwords) over the wire, allowing anyone with a sniffer to capture them. SNMPv3 is the secure version as it introduces cryptographic authentication and encryption. High-level security policies must mandate SNMPv3 and restrict/disable older SNMP versions.
*   **B is incorrect.** SNMP traps must listen on UDP port 162; changing the port to TCP port 22 (standard SSH port) is non-standard and would cause connection failures.
*   **C is incorrect.** The OUI (Organizationally Unique Identifier) is the first 24 bits of a MAC address and cannot be 'removed' without breaking local layer 2 ethernet switching operations.
*   **D is incorrect.** Split-DNS separates internal and external name resolutions; it does not secure SNMP agent communication.

---

## Question 4
**Correct Answer: B**

**Explanation:**
*   **A is incorrect.** FTP active mode is insecure because it sends data in clear text, and it is port-dependent, not utilizing SSH (which runs on port 22 and is used by SFTP).
*   **B is correct.** In active FTP, the client initiates the control session outbound, but the server must initiate the data connection inbound. Firewalls generally block this unsolicited inbound connection. In passive FTP, the client initiates both connections outbound (control to port 21 and data to a random port provided by the server). Firewalls permit this client-initiated outbound traffic naturally, resolving the connection blockage.
*   **C is incorrect.** ICMP packets are pings; you cannot transfer files using ICMP echo requests through firewalls.
*   **D is incorrect.** TFTP uses UDP port 69 and has no authentication or reliability controls; tunneling FTP inside TFTP is structurally impractical and insecure.

---

## Question 5
**Correct Answer: B**

**Explanation:**
*   **A is incorrect.** Typosquatting is registering common spelling variants of a domain; it does not involve altering the registrar record of the official domain. A DNS sinkhole isolates malware calls, but does not protect registrar accounts.
*   **B is correct.** Domain Hijacking (domain theft) is the unauthorized modification of a domain's registration records. This is typically achieved by compromising the registrar account (e.g., via password guessing or lack of MFA). Preventative controls include enabling multi-factor authentication (MFA) on the registrar portal and turning on domain/registrar locks to block unauthorized transfer requests.
*   **C is incorrect.** Clickjacking is a visual overlay attack on a website. Split-DNS and passive FTP do not secure domain registrar records.
*   **D is incorrect.** MAC spoofing operates at Layer 2. EIGRP operates at Layer 3 on routers. Neither is involved in registrar domain hijacking.
