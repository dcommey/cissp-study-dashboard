# CISSP Practice Quiz - Video 9: Security Principles

Test your understanding of security architecture principles, failure modes, zero trust, sandboxing, and trust vs. assurance. Apply your governance mindset!

---

### Question 1
A critical power failure occurs at a secure government research laboratory during a storm. The facility contains a main vault holding classified physical files and several emergency escape routes equipped with magnetic locks. From a CISSP safety and governance perspective, how should these doors fail?

A. Both the vault doors and the escape route doors must fail-secure (locked) to protect classified data.  
B. The vault doors must fail-secure (locked) to protect the files, while the emergency escape doors must fail-safe (unlocked) to ensure human safety.  
C. Both the vault doors and the escape route doors must fail-safe (unlocked) to ensure emergency personnel have full access.  
D. The emergency escape doors must fail-secure (locked) to prevent unauthorized entry during the power outage.  

---

### Question 2
A security architect is designing a network for a high-security environment and wants to implement a Zero Trust Architecture (ZTA). The architect proposes separating the network into extremely small, isolated zones (micro-segmentation) and requiring continuous authentication and policy validation for every request, regardless of whether it originates from inside or outside the network. Which tenet of Zero Trust does this support?

A. Transitive Trust  
B. Assume Breach / Never Trust, Always Verify  
C. Fail-Soft  
D. Security through Obscurity  

---

### Question 3
An audit committee is reviewing an organization's security posture. The CISO states that the network is secure because they have deployed a next-generation firewall, an intrusion prevention system (IPS), and an encryption gateway. The committee requests a copy of the weekly penetration testing reports and configuration audit logs. In terms of security design, what is the committee seeking?

A. They are seeking to establish Trust in the security mechanisms.  
B. They are seeking to establish Assurance that the security controls are functioning effectively.  
C. They are seeking to implement a Fail-Open policy.  
D. They are seeking to enforce Transitive Trust.  

---

### Question 4
A developer is deploying a third-party software library whose security history is unknown. To prevent this library from reading unauthorized system files, accessing memory regions of other applications, or communicating with unknown external hosts, the developer should configure which architectural control?

A. Transitive Trust  
B. Confinement (Sandboxing)  
C. Fail-Soft  
D. Input Validation  

---

### Question 5
An organization connects its internal ERP system to a partner company's network via a VPN. An attacker compromises a workstation on the partner's network, and because the VPN connection does not enforce access controls, the attacker is able to pivot and access the ERP system. What security risk does this exploit?

A. Zero Trust  
B. Fail-Secure  
C. Transitive Trust  
D. Air Gapping  
