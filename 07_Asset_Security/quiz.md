# CISSP Practice Quiz - Video 7: Asset Security

Test your understanding of PII/PHI definitions, data classifications, states of data, DLP systems, sanitization methods, roles, and baselines. Apply your governance mindset!

---

### Question 1
A security technician is decommissioning 50 corporate laptops that contain highly sensitive proprietary source code. The laptops contain soldered-on Solid State Drives (SSDs). The technician proposes using a high-grade degausser on the laptops to ensure the data is unrecoverable before recycling the hardware. Is this proposal correct?

A. Yes, degaussing is the most efficient method to sanitize SSDs without destroying the physical silicon chips.  
B. No, degaussing is only effective on magnetic media. SSDs use flash memory and must be physically destroyed or cryptographically erased to ensure sanitization.  
C. Yes, but only if the laptops are turned on and connected to a power source during degaussing.  
D. No, because degaussing will make the plastic casing of the laptops toxic and unsafe for recycling.  

---

### Question 2
A database contains millions of Personally Identifiable Information (PII) records. The Chief Marketing Officer (CMO) defines the data classification level and dictates the access control policy. The database administrator (DBA) is tasked with executing weekly backups, maintaining security logs, and configuring user permissions in accordance with the CMO's policies. How are the CMO and DBA classified?

A. Both are classified as data custodians.  
B. The CMO is the data controller, and the DBA is the data processor.  
C. The CMO is the data owner, and the DBA is the data custodian.  
D. The CMO is the system owner, and the DBA is the data administrator.  

---

### Question 3
A security architect wants to implement a Data Loss Prevention (DLP) system that can inspect outbound data transfers even when employees use encrypted VPN tunnels or HTTPS websites to upload files from their laptops. Which type of DLP system should the architect implement?

A. A network-based DLP, because it monitors all traffic at the company's internet edge.  
B. An endpoint-based (host-based) DLP, because it resides on the client device and can inspect data in clear text before it is encrypted and sent over the network.  
C. A CASBY gateway, because it acts as a firewall between the user and all cloud services.  
D. A pattern-matching network proxy, because it can decrypt VPN headers at the packet level.  

---

### Question 4
An organization stores large quantities of backup data in a public cloud storage environment. The data is encrypted using keys managed by the organization. When the backups reach their retention limit, the company wants to ensure the cloud-hosted data is completely sanitized and cannot be read by the cloud provider or other tenants, without having physical access to the media. What is the most efficient and secure method?

A. Request the cloud provider to degauss the specific SAN hard drives in the cloud data center.  
B. Write a script to overwrite the cloud storage blocks multiple times with random patterns (clearing).  
C. Perform a cryptographic erase by securely destroying the encryption keys.  
D. Re-image the virtual servers hosting the backup application.  

---

### Question 5
A security analyst is applying the NIST SP 800-53 security baseline to a new industrial control system (ICS) that is completely air-gapped from all corporate networks and the internet. The baseline requires implementing a web application firewall (WAF) and automated patch management. The analyst decides to exclude these specific controls from the implementation plan because they are technically unfeasible and unnecessary in an air-gapped environment. What baseline customization technique did the analyst use?

A. Scoping  
B. Tailoring  
C. Imaging  
D. Downgrading  
