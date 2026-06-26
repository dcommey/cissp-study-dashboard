# Quiz Answers & Explanations: Security Incidents and Attacks

## Question 1
**Correct Answer: C**

### Explanation:
* **A) Incorrect:** Actively counter-attacking (hacking back) is a violation of international and local laws and does not solve the root cause.
* **B) Incorrect:** Even CISO and CEO approval does not excuse launching an illegal counter-attack, nor does it remove the liability of damaging innocent third-party systems.
* **C) Correct:** The primary goal of incident response is containment, isolation, and impact mitigation. The organization should immediately isolate the affected database, update firewall ACLs to drop traffic from the C2 server, and begin investigations.
* **D) Incorrect:** Active port scanning against the attacker is a form of counter-reconnaissance that does not focus on containing the threat.

---

## Question 2
**Correct Answer: B**

### Explanation:
* **A) Incorrect:** NIDS systems process copies of traffic via port mirroring or taps and do not consume endpoint host CPU and RAM. End-user laptop performance degradation is caused by Host-Based systems (HIDS, local firewalls).
* **B) Correct:** When outbound web traffic is encrypted, the NIDS cannot read the payloads. A TLS decryptor resolves this by decrypting traffic at the edge, allowing the NIDS to inspect the payload, and re-encrypting it before sending it to its destination.
* **C) Incorrect:** Spanning Tree Protocol (STP) prevents Layer 2 switching loops, which is unrelated to payloads or NIDS decryption limitations.
* **D) Incorrect:** Dynamic ARP inspection prevents ARP spoofing and is unrelated to NIDS session monitoring or decryption.

---

## Question 3
**Correct Answer: B**

### Explanation:
* **A) Incorrect:** Dynamic ARP Inspection blocks malicious ARP spoofing on Layer 2 switches but does not stop TCP-layer SYN packets.
* **B) Correct:** SYN cookies are a defense mechanism that allows web servers to drop the memory state table of half-open TCP connections. The server encodes the connection state inside the sequence number of the SYN-ACK packet. If the client is legitimate, it replies with an ACK containing the sequence number + 1, enabling the server to verify the connection without having reserved memory beforehand.
* **C) Incorrect:** Launching a TCP reset flood is not a server configuration to defend itself, and could cause network saturation.
* **D) Incorrect:** Redirecting HIDS logs is a monitoring step and does not prevent SYN state table exhaustion on the web server.

---

## Question 4
**Correct Answer: B**

### Explanation:
* **A) Incorrect:** DLP solutions can inspect both TCP and UDP traffic.
* **B) Correct:** If a file is encrypted locally by the user (using a tool like WinRAR with a password-protected RAR or ZIP archive) *before* transmission, the TLS decryptor at the network boundary cannot decrypt or read the contents. The decryptor only sees the outer SSL/TLS tunnel wrapper and the RAR file wrapper, leaving the actual file content hidden and bypassing the DLP engine.
* **C) Incorrect:** UTM appliances integrate Next-Gen Firewalls and application control capabilities; they are not limited to signature-based NIDS.
* **D) Incorrect:** The Acceptable Use Policy (AUP) is an administrative policy document; it does not physically prevent the decryptor from doing its job, although it may regulate how decryption is applied.

---

## Question 5
**Correct Answer: B**

### Explanation:
* **A) Incorrect:** A Fraggle attack is similar to a Smurf attack but utilizes UDP packets (such as UDP Echo on port 7) rather than ICMP echo requests.
* **B) Correct:** A Smurf attack is an ICMP-based amplification attack. The attacker sends ICMP echo requests to a subnet's broadcast address, spoofing the victim's IP as the source. This causes all devices on that subnet to reply with ICMP echo replies back to the victim, saturating the victim's network link.
* **C) Incorrect:** A Teardrop attack sends packet fragments with overlapping offsets, crashing the target's reassembly engine.
* **D) Incorrect:** A Land attack sends packets where the source and destination IP and port are spoofed to match the victim's own IP and port, confusing the victim's TCP stack.
