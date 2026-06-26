# CISSP Practice Quiz - Video 16: Network Security Part 1

## Question 1
An enterprise finds that employees trying to access a secure bank portal (https://bank.example.com) are being redirected to a copycat phishing site. The IP address configurations on the client machines are correct, and the local hosts files have not been modified. However, the corporate DNS resolver contains a false mapping for the bank's FQDN. What represents this attack, and what is the best technological mitigation?

- A. Typosquatting; disable the server's NIC promiscuous mode.
- B. DNS Cache Poisoning; implement DNSSEC (Domain Name System Security Extensions) to cryptographically sign DNS records and verify their authenticity.
- C. Homograph attack; require all remote users to establish VPN connections over port 80.
- D. BGP hijacking; configure the OSPF routers with a different OUI.

---

## Question 2
A security analyst reviews connection logs on a firewall. They notice an external IP address sending thousands of packets with only the SYN flag set, but never responding with an ACK to the server's SYN-ACK responses. What is the impact of this behavior on the target server, and how is it classified?

- A. Graceful connection termination via FIN flags, leading to configuration drift.
- B. A TCP SYN flood (Denial of Service), which exhausts the server's resource buffers by leaving half-open connections in the queue.
- C. An SNMP trap injection, which overrides the OUI mapping of the network interface card.
- D. A reverse DNS lookup exploit, which forces the server's routing table to prioritize RIP over BGP.

---

## Question 3
An organization is deploying a network monitoring system to track the CPU usage and link speeds of routers and switches across its WAN using SNMP. From a security governance perspective, what standard constraint must be included in the implementation procedure?

- A. Enforce SNMPv3 because it supports authentication and encryption, and block SNMPv1 and SNMPv2c which transmit community strings in clear text.
- B. Disable SNMP traps on UDP port 162 and force the agents to listen on TCP port 22.
- C. Restrict SNMP traffic to the physical layer by removing the OUI from all MAC addresses.
- D. Rely on split-DNS to resolve SNMP queries to internal hosts files.

---

## Question 4
A company's internal developers are unable to transfer files to an external vendor's server using standard File Transfer Protocol (FTP) in active mode because the company's egress firewall blocks the connection. How should the security manager advise the developers to configure the FTP client, and why?

- A. Disable passive mode; active mode is secure because it utilizes SSH on port 22.
- B. Switch to FTP passive mode; this allows the client to initiate both the control and data connections to the server, which conforms to standard firewall rules that block unsolicited inbound traffic.
- C. Configure the client to bypass the firewall using ICMP echo requests.
- D. Tunnel FTP active traffic inside unencrypted TFTP packets on port 69.

---

## Question 5
A popular e-commerce company's domain registration was modified at the registrar level, pointing their official URL to a competitor's site. Investigation shows the registrar's account password was compromised because MFA was not enabled. How should this incident be classified, and what is the best preventative governance control?

- A. Typosquatting; implement a DNS sinkhole on UDP port 53.
- B. Domain Hijacking (domain theft); enforce multi-factor authentication (MFA) on the registrar account, and lock the domain registration to prevent unauthorized transfers.
- C. Clickjacking; deploy a split-DNS architecture with passive FTP.
- D. MAC address spoofing; configure EIGRP routing tables on the main distribution frame (MDF).
