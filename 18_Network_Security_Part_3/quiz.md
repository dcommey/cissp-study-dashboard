# CISSP Practice Quiz: Network Security Part 3

## Question 1
An organization wants to allow its external business partners and suppliers to access a specific inventory management database server without granting them access to the rest of the corporate internal network. Which network architecture design is most appropriate to meet this requirement from a security and governance perspective?
- [A] Deploy the inventory database server inside the corporate intranet and configure DHCP snooping.
- [B] Place the database server in a dedicated extranet segment protected by a firewall with granular access rules restricting external partner connections.
- [C] Implement a screened host configuration directly exposing the database server to the public internet.
- [D] Configure a full mesh physical network topology using Category 5e UTP cabling.

## Question 2
A security manager is designing a Network Access Control (NAC) solution for an enterprise with a diverse endpoint environment. The environment contains corporate-owned laptops, network printers, and various Internet of Things (IoT) devices such as smart building sensors. Which NAC deployment strategy should the security manager recommend?
- [A] Deploy temporary NAC agents on the printers and IoT devices, and permanent agents on corporate laptops.
- [B] Implement an agentless NAC solution for network printers and IoT devices, and an agent-based NAC solution for corporate-managed laptops.
- [C] Utilize permanent NAC agents on all connected devices, leveraging Dynamic ARP Inspection (DAI) for agent distribution.
- [D] Establish stateless packet-filtering firewalls on all devices to simulate NAC policies.

## Question 3
A network security administrator is configuring a Next-Generation Firewall (NGFW) to restrict outgoing social media traffic. The administrator writes two rules: Rule 1 denies all HTTP/HTTPS traffic to social media domains for all users. Rule 2 allows the marketing team's IP subnet to access a specific corporate social media page. However, marketing users report they are blocked from accessing the site. What is the cause of this issue, and how should it be resolved?
- [A] The deny rule is placed above the allow rule (Rule 1 is before Rule 2). The rules must be reordered so that the specific allow rule (Rule 2) is evaluated first.
- [B] The firewall is stateless and cannot track HTTP sessions. The firewall must be upgraded to a stateful appliance.
- [C] The marketing team must bypass the NGFW and connect through a transparent proxy.
- [D] The firewall rules must be bound to a Port Aggregation Protocol (PAgP) configuration to function.

## Question 4
A global firm's security operations center (SOC) discovers that advanced malware successfully bypassed their traditional signature-based antivirus software. The security manager wants to implement a comprehensive security system that provides continuous endpoint monitoring, behavior-based threat detection, network traffic analysis (NTA), and integration with network intrusion prevention system (NIPS) logs. Which of the following solutions best meets these requirements?
- [A] An Endpoint Protection Platform (EPP)
- [B] A Unified Threat Management (UTM) device
- [C] An Extended Detection and Response (XDR) solution
- [D] Spanning Tree Protocol (STP) implementation

## Question 5
A defense contractor is designing a network segment to transfer highly classified research files. The security policy mandates that the physical transmission medium must be completely immune to electromagnetic interference (EMI), crosstalk, and passive sniffing via electromagnetic emissions. Which cabling option should the security manager specify?
- [A] Shielded Twisted Pair (STP) Category 6a cabling
- [B] Coaxial Thicknet (10Base5) cabling with terminal grounding resistors
- [C] Fiber optic cabling
- [D] Unshielded Twisted Pair (UTP) Category 5e cabling
