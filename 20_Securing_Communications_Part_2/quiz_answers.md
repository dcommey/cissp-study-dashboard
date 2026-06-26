# CISSP Practice Quiz Answers & Explanations: Securing Communications Part 2

## Question 1
**Correct Answer: B**

### Explanation:
*   **[B] is correct.** In IPsec tunnel mode, the entire original IP packet (payload and original header) is encrypted, and a new outer IP header is prepended to route the packet between the VPN gateways. This hides internal network topology (such as private subnet addresses) from observers on the internet. Transport mode, in contrast, only encrypts the payload, leaving the original header in cleartext, which does not meet the policy requirement.
*   **[A] is incorrect.** Transport mode leaves the original IP header in cleartext, revealing internal IP topology to eavesdroppers on the internet, which violates the security policy requirement.
*   **[C] is incorrect.** GRE (Generic Routing Encapsulation) is a tunneling protocol that does not natively support encryption or replace TCP/UDP.
*   **[D] is incorrect.** Link layer mode and MAC flooding are unrelated to IPsec encryption modes and represent a vulnerability/attack vector, not a VPN configuration.

---

## Question 2
**Correct Answer: C**

### Explanation:
*   **[C] is correct.** MAC flooding is an attack that sends a massive volume of frames with spoofed, random source MAC addresses to the switch. The switch attempts to learn these addresses, quickly overflowing its CAM (Content Addressable Memory) table. Once the CAM table is full, the switch cannot look up valid port destinations and "fails open," forwarding all incoming unicast frames to all ports on the VLAN (similar to a hub). This allows an attacker to sniff traffic on that segment.
*   **[A] is incorrect.** MAC cloning involves copying a single trusted MAC address to impersonate a device. It does not overflow the CAM table or cause the switch to broadcast all frames.
*   **[B] is incorrect.** ARP spoofing involves poisoning the Layer 3 to Layer 2 mappings on hosts using fake ARP replies. It does not exploit the switch's CAM table limits or force switch flooding.
*   **[D] is incorrect.** VLAN hopping allows an attacker on one VLAN to bypass security filters and access another VLAN. It does not cause a switch to broadcast all local VLAN traffic.

---

## Question 3
**Correct Answer: C**

### Explanation:
*   **[C] is correct.** The IPsec AH protocol provides packet integrity and authentication by hashing the entire packet, including the IP header. When a NAT/PAT device modifies the source IP address or port in the header, the receiving VPN gateway's hash check fails, invalidating the packet. NAT-T solves this by encapsulating ESP packets in UDP port 4500, which can pass through NAT since ESP does not authenticate the outer IP header.
*   **[A] is incorrect.** AH is an authentication protocol, not an encryption protocol. Hashing and encryption are separate concepts.
*   **[B] is incorrect.** AH does not encrypt anything (including port numbers), but it does hash them. Since PAT changes ports, the hash is invalidated.
*   **[D] is incorrect.** AH operates directly on top of IP (IP protocol number 51) and does not rely on GRE (IP protocol number 47).

---

## Question 4
**Correct Answer: B**

### Explanation:
*   **[B] is correct.** VLANs logically segment a physical switch into separate broadcast domains. Without a Layer 3 routing device (router or Layer 3 switch) configured to route between the VLANs, hosts in the finance VLAN and the guest VLAN cannot communicate. This limits the lateral spread of malware, prevents unauthorized access, and improves performance by isolating Layer 2 broadcast traffic (like ARP).
*   **[A] is incorrect.** IEEE 802.1Q tags are used to identify VLAN membership over trunk links; they do not encrypt the data.
*   **[C] is incorrect.** VLANs do not disable the CAM table; each VLAN maintains its own logical mappings.
*   **[D] is incorrect.** Hiding SSIDs or using sticky MAC port security are separate controls that do not logically segment networks into different broadcast domains.

---

## Question 5
**Correct Answer: C**

### Explanation:
*   **[C] is correct.** An Interconnection Security Agreement (ISA) is a formal document that specifies the technical security requirements, parameters, and risk controls for connecting two networks or systems belonging to different organizations (common in connections involving federal entities). While a Memorandum of Understanding (MOU) documents the general agreement and expectations, it is not legally binding and does not contain the detailed technical specs defined in an ISA.
*   **[A] is incorrect.** An Acceptable Use Policy (AUP) defines the rules and restrictions for users interacting with an organization's internal resources; it is not an agreement between organizations.
*   **[B] is incorrect.** An MOU documents the mutual understanding and high-level expectations between parties but lacks the legally binding technical and security requirements details found in an ISA.
*   **[D] is incorrect.** A Service Level Agreement (SLA) defines performance metrics (such as uptime and response times) between a provider and a customer, not technical security interconnection requirements.
