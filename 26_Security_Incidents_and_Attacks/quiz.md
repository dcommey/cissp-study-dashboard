# Quiz: Security Incidents and Attacks

## Question 1
During an active security incident, a security operations center (SOC) analyst detects that an external attacker is exfiltrating intellectual property from a compromised internal database. The database administrator suggests launching a retaliatory denial-of-service (DoS) attack against the attacker's command-and-control (C2) server. What is the most appropriate course of action?

- A) Launch the retaliatory DoS attack immediately to disrupt the exfiltration session.
- B) Obtain approval from the CISO and CEO to proceed with the counter-attack.
- C) Focus on isolating the database server, updating firewalls to block the C2 IP, and mitigating the incident impact.
- D) Redirect the database connection to a local honeynet and perform active port scans against the C2 server.

## Question 2
A network architect is designing a security monitoring architecture for a corporate network where all outbound web traffic is encrypted using TLS. The architect plans to deploy a Network-Based IDS (NIDS) to detect web-based malware downloads. What primary limitation does the NIDS face in this scenario, and what control remediates it?

- A) The NIDS will degrade the CPU and RAM performance of client endpoints; deploy host-based firewalls to offload traffic.
- B) The NIDS cannot inspect the encrypted payloads of TLS sessions; deploy an in-line TLS decryptor at the network boundary.
- C) The NIDS will generate false positives due to STP routing loops; configure VLAN-based port mirroring on core switches.
- D) The NIDS cannot parse TCP reset (RST) flags; implement dynamic ARP inspection on layer 2 switches.

## Question 3
An e-commerce website experiences a Distributed Denial of Service (DDoS) attack where a botnet floods the web servers with TCP SYN packets. The web servers are unable to handle legitimate customers because their connection queues are saturated with half-open sessions. Which mitigation technique should the security operations team enable on the web servers to address this specific attack?

- A) Dynamic ARP Inspection (DAI)
- B) SYN Cookies
- C) Spanning Tree Protocol (STP)
- D) Unicast Reverse Path Forwarding (uRPF)

## Question 4
An employee wants to exfiltrate proprietary source code. Knowing that the corporate network uses a Unified Threat Management (UTM) appliance with Data Loss Prevention (DLP) to inspect outbound uploads, the employee password-protects the source code inside an encrypted RAR archive and uploads it to personal webmail via HTTPS. Why did the gateway DLP fail to block this transfer?

- A) DLP software can only inspect UDP-based file transfers.
- B) The TLS decryptor cannot inspect files that are locally encrypted and password-protected prior to transmission.
- C) The UTM appliance only runs signature-based NIDS, which lacks application-level awareness.
- D) The AUP prevents the gateway from decrypting traffic destined for public webmail services.

## Question 5
A network administrator investigates a denial-of-service condition on an internal file server. The administrator discovers that the server is flooded with millions of ICMP echo replies, saturating its network link. Further analysis shows that an attacker sent ICMP echo requests to the subnet's broadcast address, spoofing the file server's IP address as the source. What type of attack occurred?

- A) Fraggle Attack
- B) Smurf Attack
- C) Teardrop Attack
- D) Land Attack
