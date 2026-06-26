# CISSP Practice Quiz Answers & Explanations: Network Security Part 2

## Question 1
**Correct Answer: B**

### Explanation:
*   **[B] is correct.** In a dual-stack network, operating systems run IPv4 and IPv6 as completely separate instances (historically referred to as running "like ships in the night"). Security policies, firewalls, and ACLs configured for IPv4 do not automatically apply to IPv6. If IPv6 is left at its default configurations (which are often open/permit any), attackers can leverage IPv6 traffic to bypass perimeter security controls, effectively neutralizing the organization's security posture.
*   **[A] is incorrect.** IPv6 traffic will not automatically encapsulate in IPv4 tunnels by default unless a specific tunneling transition technology (such as 6to4 or Teredo) is explicitly configured.
*   **[C] is incorrect.** The dual-stack architecture runs both protocols as completely separate processes and instances in the operating system, rather than inside a single shared process. It does not inherently cause resource starvation unless the firewall is experiencing high load overall.
*   **[D] is incorrect.** SLAAC (Stateless Address Autoconfiguration) generates unique addresses based on subnet prefixes and interface identifiers (e.g., EUI-64). It is designed to prevent address conflicts and does not cause "conflict storms" or denial of service under normal conditions.

---

## Question 2
**Correct Answer: C**

### Explanation:
*   **[C] is correct.** Microsegmentation divides the internal network into highly granular security zones (potentially down to a single application, service, or virtual machine workload). It uses network virtualization overlays like VXLAN, which supports up to 16 million virtual networks (compared to 4,096 traditional VLANs), to isolate traffic and apply strict access policies. This architecture stops lateral movement ("east-west" traffic) in a software-defined networking (SDN) environment without requiring physical firewall hardware.
*   **[A] is incorrect.** CIDR is a method for allocating IP addresses and routing IP packets, not a mechanism for isolating workloads or implementing zero-trust security policies.
*   **[B] is incorrect.** MPLS is a Layer 2.5 protocol used primarily for traffic engineering and routing optimization across WANs, not for granular microsegmentation of application tiers within a local data center.
*   **[D] is incorrect.** Dynamic ARP Inspection (DAI) prevents Layer 2 ARP spoofing/poisoning on switches, but it does not provide application-level microsegmentation or tier isolation.

---

## Question 3
**Correct Answer: A**

### Explanation:
*   **[A] is correct.** Dynamic ARP Inspection (DAI) — also referred to as Dynamic ARP Protection (DAP) by Juniper — is a switch-level security feature that mitigates ARP spoofing and poisoning attacks. It relies on DHCP Snooping to build a database mapping valid IP addresses to physical MAC addresses and switch ports. The switch intercepts and validates all ARP packets against this database, dropping invalid or fake ARP replies. This is the most scalable and effective administrative control for Layer 2 ARP-based attacks in a multi-vendor environment.
*   **[B] is incorrect.** While static ARP entries prevent spoofing on the local host, they are extremely difficult to manage at scale, inflexible, and do not persist across reboots unless script-managed. Relying on endpoints does not protect the network infrastructure itself.
*   **[C] is incorrect.** Disabling SSID broadcasting and using MAC filtering are weak wireless security measures. They do not address wired network ARP spoofing and are easily bypassed by sniffing cleartext MAC addresses.
*   **[D] is incorrect.** While WPA3 and SAE improve wireless authentication security, they do not resolve Layer 2 ARP spoofing attacks occurring within the switched network.

---

## Question 4
**Correct Answer: B**

### Explanation:
*   **[B] is correct.** Wi-Fi Protected Setup (WPS) contains a critical design vulnerability where its 8-digit PIN authentication can be brute-forced within hours by checking the first four digits and last three digits separately (reducing total combinations to 11,000). WPS must be disabled immediately. Upgrading to WPA3-Personal replaces pre-shared key (PSK) authentication with Simultaneous Authentication of Equals (SAE), which protects against offline dictionary attacks and password guessing by forcing active interaction for authentication.
*   **[A] is incorrect.** Wired Equivalent Privacy (WEP) is deprecated, highly insecure, and cracked in seconds. It should never be recommended.
*   **[C] is incorrect.** MAC filtering is easily bypassed because physical MAC addresses are transmitted in cleartext over the air. An attacker can sniff an authorized MAC address and spoof it.
*   **[D] is incorrect.** Hiding the SSID does not secure the network. The SSID is still transmitted in cleartext during client reconnection handshakes and can be easily discovered by sniffing traffic.

---

## Question 5
**Correct Answer: B**

### Explanation:
*   **[B] is correct.** Connecting a corporate laptop to a cellular network (such as a 5G hotspot) while connected to or present within the facility creates a dual-homed bridge. This action completely bypasses the corporate network's perimeter security controls, including firewalls, Deep Packet Inspection (DPI), proxy servers, and Data Loss Prevention (DLP). This eliminates the organization's visibility, enabling potential undetected data exfiltration and the ingress of malicious payloads directly onto the endpoint.
*   **[A] is incorrect.** Transport layer protocols (TCP and UDP) operate on top of cellular protocols. While cellular traffic is encrypted between the device and the tower, the encryption status of UDP is unrelated, and the protocol is not inherently compromised.
*   **[C] is incorrect.** Radio frequency signals, including 5G, do not cause physical damage to a network interface card (NIC).
*   **[D] is incorrect.** Standard cellular connections operate on licensed frequency bands allocated by governments, which do not overlap with or jam corporate 802.11 Wi-Fi bands (typically 2.4 GHz, 5 GHz, or 6 GHz).
