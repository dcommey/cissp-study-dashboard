# CISSP Practice Quiz: Securing Communications Part 2

## Question 1
A network engineer is configuring a site-to-site IPsec VPN to connect a branch office to headquarters across the public internet. The corporate security policy mandates that both the data payload and the original IP headers (such as internal source and destination IP addresses) must be encrypted in transit. Which IPsec configuration mode should the engineer implement?
- [A] Transport mode, which encrypts only the payload and retains the original IP header in cleartext.
- [B] Tunnel mode, which encrypts both the payload and the original IP header, encapsulating the original packet inside a new outer IP packet.
- [C] Generic Routing Encapsulation (GRE) mode, which replaces TCP with UDP for routing.
- [D] Link layer mode, which utilizes MAC flooding to create temporary virtual channels.

## Question 2
An administrator notes that a switch's performance has severely degraded, and an IDS alert indicates a high volume of traffic containing randomized source MAC addresses. Shortly after, the administrator observes that unicast frames destined for specific corporate servers are being broadcast to all ports on the local VLAN. What type of attack is occurring, and what switch-level mechanism has been compromised?
- [A] MAC Cloning, bypassing switch port security using sticky MAC addresses.
- [B] ARP Spoofing, exploiting gratuitous ARP to inject garbage routes.
- [C] MAC Flooding, overflowing the Content Addressable Memory (CAM) table, forcing the switch to flood all frames.
- [D] VLAN Hopping, using IEEE 802.1Q tags to bypass logical VLAN boundaries.

## Question 3
A remote employee attempts to establish a site-to-site IPsec VPN connection from behind a home router performing Port Address Translation (PAT). The connection repeatedly fails when using IPsec Authentication Header (AH) but succeeds when using Encapsulating Security Payload (ESP) with NAT Traversal (NAT-T) enabled. What is the primary reason the AH protocol fails in this environment?
- [A] AH does not support AES encryption, which is required by PAT routers.
- [B] AH encrypts the TCP port numbers, preventing the PAT router from modifying them.
- [C] AH authenticates the entire packet, including the outer IP header. Since NAT/PAT modifies the source IP address and port numbers in the header, the AH integrity check fails.
- [D] AH relies on GRE tunneling, which is blocked by standard home Internet Service Providers (ISPs).

## Question 4
A security auditor recommends separating corporate finance workstation traffic from guest Wi-Fi traffic. The network administrator decides to implement VLAN segmentation on their managed switches but does not configure any routing interfaces between the finance VLAN and the guest VLAN. How does this configuration enhance security?
- [A] It encrypts all finance traffic at Layer 2 using the standard IEEE 802.1Q tag.
- [B] It separates the networks into distinct broadcast domains, restricting ARP broadcasts to their respective VLANs and preventing direct Layer 2/3 routing without a gateway.
- [C] It disables the switches' CAM tables, forcing the use of static IP addressing.
- [D] It prevents MAC cloning by enforcing sticky MAC address learning on the guest VLAN.

## Question 5
A healthcare provider needs to establish a direct network interconnection with a federal insurance agency's database system. To manage security exposure, the organization's governance team must define the security risks, technical specifications, and security requirements of the connection. Which of the following documents must be established between the two organizations to formally define these technical specifications?
- [A] Acceptable Use Policy (AUP)
- [B] Memorandum of Understanding (MOU)
- [C] Interconnection Security Agreement (ISA)
- [D] Service Level Agreement (SLA)
