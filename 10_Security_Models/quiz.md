# CISSP Practice Quiz - Video 10: Security Models

Test your understanding of security models (Bell-LaPadula, Biba, Clark-Wilson, Brewer-Nash), Common Criteria, and CPU/memory vulnerabilities. Apply your governance mindset!

---

### Question 1
A security engineer is designing a multi-level secure operating system for a military intelligence unit. The system must enforce confidentiality using the Bell-LaPadula model. According to the star (*)-Security Property of the Bell-LaPadula model, what is the restriction on writing data?

A. A subject at a lower clearance level cannot write data to a higher classification level.  
B. A subject at a higher clearance level cannot write data to a lower classification level (No Write Down).  
C. A subject at any clearance level can write to any classification level, as long as auditing is enabled.  
D. A subject can only write to objects that they own.  

---

### Question 2
An enterprise financial system requires that bank account balances (Constrained Data Items) can only be modified through validated database transactions (Transformation Procedures) rather than by direct SQL queries from users. Additionally, the system must perform periodic reconciliations to verify that the transactions balance. Which security model is this architecture based on, and what is the verification process called?

A. Bell-LaPadula model; simple security property  
B. Clark-Wilson model; Integrity Verification Procedure (IVP)  
C. Biba model; star integrity property  
D. Brewer-Nash model; ethical wall  

---

### Question 3
A consulting firm provides cybersecurity services to two competing multinational banks. To prevent conflicts of interest and ensure that consultants do not disclose proprietary strategy data from one competitor to another, the firm implements a system that dynamically blocks a consultant from accessing Bank B's data once they have opened a file belonging to Bank A. Which security model describes this implementation?

A. Biba Model  
B. Goguen-Meseguer Model  
C. Brewer-Nash Model  
D. Graham-Denning Model  

---

### Question 4
A systems administrator is reviewing security patches for speculative execution vulnerabilities. A recent threat report details an exploit that allows a malicious, unprivileged user-mode application to read the private memory contents of the operating system kernel. Which CPU vulnerability does this exploit describe, and what boundary does it violate?

A. Meltdown; violates the boundary between user-mode applications and the operating system kernel.  
B. Spectre; violates the boundary between different user-mode applications.  
C. Buffer Overflow; violates the database transaction boundary.  
D. Covert Channel; violates the physical security perimeter.  

---

### Question 5
An organization is purchasing a next-generation firewall and wants a high level of assurance regarding the security of the product. The vendor provides a data sheet claiming their product is evaluated at EAL 4 under the Common Criteria. What does the EAL 4 rating signify?

A. The product has been formally verified and proven to have zero vulnerabilities.  
B. The product's design has been methodically designed, tested, and reviewed.  
C. The product has only been functionally tested to ensure basic operation.  
D. The product has an effective cryptographic key length of 256 bits.  
