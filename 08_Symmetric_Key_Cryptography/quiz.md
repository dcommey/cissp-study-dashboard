# CISSP Practice Quiz - Video 8: Symmetric Key Cryptography

Test your understanding of cryptographic principles, Boolean math, block modes of operation, and symmetric algorithms. Apply your governance mindset!

---

### Question 1
A company with 500 employees wants to deploy a private messaging application. The security manager suggests using a symmetric key model where every employee shares a unique secret key with every other employee to ensure confidential one-on-one communication. How many unique keys must the organization generate and distribute to support this architecture?

A. 500 keys  
B. 250,000 keys  
C. 124,750 keys  
D. 1,000 keys  

---

### Question 2
A developer is implementing a secure database application. The system must encrypt stored customer data and ensure that if an attacker modifies the encrypted data block, the decryption engine will immediately detect the unauthorized alteration. Which block cipher mode of operation is the best choice?

A. Cipher Block Chaining (CBC) mode  
B. Output Feedback (OFB) mode  
C. Electronic Codebook (ECB) mode  
D. Galois Counter Mode (GCM) mode  

---

### Question 3
A cryptanalyst is reviewing a legacy system that implements the Data Encryption Standard (DES) algorithm. Although the input key provided to the system is 64 bits in length, the documentation states that the algorithm's effective key strength is only 56 bits. What is the reason for this difference?

A. The algorithm compresses the key using a one-way hashing function before processing.  
B. Every eighth bit of the 64-bit key is discarded to serve as parity bits, leaving only 56 bits for the actual encryption rounds.  
C. The remaining 8 bits are reserved to store the initialization vector (IV) for cipher block chaining.  
D. The system pads the key with 8 bits of random data to satisfy asymmetric algorithm requirements.  

---

### Question 4
A military communications unit is using a one-time pad (OTP) to send encrypted tactical commands. Which of the following is NOT a requirement to ensure that the one-time pad encryption remains mathematically unbreakable?

A. The key must be completely randomly generated.  
B. The key must be kept secret and protected from disclosure.  
C. The key must be encrypted using an asymmetric RSA public key before transmission.  
D. The key must be at least as long as the plaintext message and used only once.  

---

### Question 5
A software startup decides to write its own custom encryption algorithm to secure its database records. The development team argues that keeping the algorithm's mathematical formula secret will make it much harder for hackers to crack the database. Which cryptographic principle does this violate?

A. The concept of Diffusion  
B. Kerckhoffs' Principle  
C. Zero-Knowledge Proofs  
D. The Work Function  
