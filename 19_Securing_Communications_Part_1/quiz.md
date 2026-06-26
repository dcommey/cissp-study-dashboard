# CISSP Practice Quiz: Securing Communications Part 1

## Question 1
A wireless network architect is designing a secure enterprise Wi-Fi infrastructure using 802.1X. The management team mandates strong authentication using digital certificates but wants to avoid the administrative overhead of issuing, deploying, and managing client-side certificates on thousands of employee mobile devices. Which authentication protocol should the security manager recommend?
- [A] EAP-TLS (Transport Layer Security)
- [B] EAP-TTLS (Tunneled Transport Layer Security)
- [C] Lightweight Extensible Authentication Protocol (LEAP)
- [D] Password Authentication Protocol (PAP)

## Question 2
An employee connects a corporate laptop to an Ethernet wall jack in a conference room. The switch port is configured for IEEE 802.1X port-based network access control. Before the user enters any credentials, the laptop is blocked from standard network communications. What is the only type of traffic allowed through the switch port in this state?
- [A] Implicit SMTPS traffic on TCP port 465
- [B] EAP over LAN (EAPOL) traffic
- [C] SNMP queries from the centralized management server
- [D] SQL database queries to local database clusters

## Question 3
A company operates a hybrid telephone environment with legacy POTS lines, an on-premises Private Branch Exchange (PBX) system, and VoIP desk phones. The security team detects unauthorized international calls billed to the company's trunk lines during non-business hours. Which combination of controls is most effective to secure the PBX and VoIP systems against this fraud?
- [A] Hide the SSID of the VoIP access points and disable Category 5 UTP cabling.
- [B] Restrict trunk dial-in/out features, disable remote maintenance modems, implement strong passwords on VoIP administrative interfaces, and audit call logs periodically.
- [C] Upgrade all analog copper POTS lines to FTTH connections and configure round-robin load balancing.
- [D] Replace the PBX with an open SMTP relay server to handle voice traffic.

## Question 4
An e-commerce application is hosted on a server cluster behind an Active-Active pair of load balancers. Users complain that their active shopping carts occasionally disappear when they navigate between different pages on the site. What is the most likely cause of this issue, and how should it be resolved?
- [A] The load balancers terminate SSL connections and pass decrypted HTTP traffic to the backend, which the application rejects. Disable SSL offloading.
- [B] The load balancers lack session persistence, causing subsequent user requests to be routed to different servers that do not hold the active session state. Enable cookie-based session persistence or hash-based distribution.
- [C] The load balancers are using a round-robin algorithm with SNMP load monitoring, which blocks user connections. Disable SNMP queries.
- [D] The backend servers are blocked by a downloadable access control list (DACL) pushed during user authentication.

## Question 5
A financial firm wants to prevent email spoofing and business email compromise (BEC). The firm wants to ensure that external recipient mail servers can verify that emails claiming to come from the firm's domain were actually sent by authorized mail servers, and that the message contents were not modified in transit. Which combination of protocols should the firm configure in public DNS records to achieve this?
- [A] PAP, CHAP, and EAP-SIM
- [B] POP3, IMAP, and STARTTLS
- [C] SPF (Sender Policy Framework), DKIM (DomainKeys Identified Mail), and DMARC
- [D] SSL offloading, VIP, and Active-Passive load balancing
