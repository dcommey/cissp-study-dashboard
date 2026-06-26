# CISSP Practice Quiz: Network Security Part 2

## Question 1
A large financial enterprise is migrating its network infrastructure to support both IPv4 and IPv6 in a dual-stack configuration. During a security audit, it is discovered that while robust firewall rules and Access Control Lists (ACLs) are configured for IPv4, the IPv6 configuration remains at factory defaults. From a security governance perspective, what is the primary risk associated with this state?
- [A] IPv6 traffic will automatically be encapsulated in IPv4 tunnels, bypassing existing network security logging mechanisms.
- [B] The default configurations for IPv6 may permit unauthorized traffic to bypass established IPv4 perimeter security controls, as the protocols run as independent instances.
- [C] The dual-stack operating system architecture runs both protocols within a single process, causing severe resource starvation on core firewalls.
- [D] IPv6 auto-configuration (SLAAC) will trigger IP address conflict storms, resulting in a network-wide denial of service.

## Question 2
An organization is implementing a zero-trust network architecture within its virtualized software-defined data center (SDDC). The security manager is tasked with isolating multi-tier applications and preventing lateral movement of potential threats without deploying additional physical firewall appliances. Which of the following architectures is the most appropriate recommendation?
- [A] Implementing Classless Inter-Domain Routing (CIDR) to group application servers into classful network ranges.
- [B] Deploying Multiprotocol Label Switching (MPLS) to label-switch traffic between application tiers.
- [C] Implementing microsegmentation using Virtual Extensible LAN (VXLAN) overlays to define granular security policies down to individual workloads.
- [D] Enabling Dynamic ARP Inspection (DAI) on all virtual switch ports to block dynamic MAC address learning.

## Question 3
A manufacturing company's Security Operations Center (SOC) detects a man-in-the-middle (MitM) attack where an unauthorized device on the local network is sending falsified ARP replies. The attack redirects traffic destined for the ERP server through the attacker's machine. The network contains a mix of Cisco, Juniper, and Dell switches. What switch-level configuration strategy should the security manager recommend to mitigate this threat across the entire enterprise?
- [A] Enable Dynamic ARP Inspection (DAI) / Dynamic ARP Protection (DAP) paired with DHCP Snooping globally on all access switches.
- [B] Deploy host-based intrusion prevention systems (HIPS) and configure static ARP entries on all local endpoints.
- [C] Disable SSID broadcasting on all wireless access points and restrict access using MAC address filtering.
- [D] Migrate all wireless networks to WPA3-Personal and enforce Simultaneous Authentication of Equals (SAE).

## Question 4
A routine remote-work security assessment reveals that many employees have Wi-Fi Protected Setup (WPS) enabled on their home routers, which are also configured with WPA2-Personal (PSK). From a risk management perspective, what is the most critical recommendation the security manager should make to secure remote access points?
- [A] Instruct employees to disable WPA2 and use Wired Equivalent Privacy (WEP) for lower overhead.
- [B] Require employees to immediately disable WPS on all home routers and upgrade to WPA3-Personal with Simultaneous Authentication of Equals (SAE) where supported.
- [C] Mandate MAC address filtering on home routers to approve only company-issued laptop network interfaces.
- [D] Advise employees to hide their SSID broadcasts to make their home networks invisible to external scans.

## Question 5
An employee working inside a secure government facility tethers their corporate laptop to a personal smartphone's 5G cellular hotspot and establishes an outbound VPN connection. The facility employs strict perimeter security controls, including Deep Packet Inspection (DPI) firewalls and Data Loss Prevention (DLP) gateways. What is the primary governance and security risk of this scenario?
- [A] Layer 4 transport encapsulation is compromised because cellular networks transmit UDP packets in cleartext.
- [B] Perimeter security controls (firewalls, DPI, DLP) are completely bypassed, neutralizing the organization's ability to detect data leakage or prevent malware ingress.
- [C] The corporate laptop's network interface card (NIC) is susceptible to physical damage due to the 5G signal strength.
- [D] The outbound connection will jam the facility's centralized wireless LAN controller (WLC) and thin access points.
