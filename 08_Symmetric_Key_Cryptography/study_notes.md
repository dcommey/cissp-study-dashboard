# CISSP Study Notes - Video 8: Symmetric Key Cryptography

## Overview of Cryptography
Cryptography is the art and science of securing information by making secret codes, whereas cryptanalysis is the science of breaking them. In a **technical** and **logical** security framework, cryptography protects data against unauthorized **disclosure** (confidentiality), unauthorized **alteration** (integrity), and unauthorized **destruction** or denial of service.

While cryptography is essential for:
*   **Confidentiality**: Keeping data secret at rest, in transit (motion), and in use.
*   **Integrity**: Ensuring data is not altered in transit.
*   **Authenticity** / **Authentication**: Verifying the identity of the sender.
*   **Non-repudiation**: Preventing a sender from denying they sent a message, which is critical for compliance and **auditing** processes.
*   *Note*: Cryptography does *not* directly address **availability**.

---

## Boolean Mathematics & Cryptographic Concepts
Digital systems process data in binary (bits and bytes) using logical gates.
*   **AND (caret symbol \\(\land\\))**: Output is true only if all inputs are true.
*   **OR**: Output is true if at least one input is true.
*   **NOT (tilde \\(\sim\\) or exclamation)**: Flips the bit value (e.g., true becomes false).
*   **XOR (exclusive OR \\(\oplus\\))**: Output is true if inputs are different. It is highly used in symmetric ciphers because running XOR twice with the same key returns the original plaintext.
*   **Modulo Function (mod)**: The arithmetic remainder of division (e.g., \\(7 \bmod 3 = 1\\)).
*   **One-way Function**: A mathematical operation that is easy to compute in one direction but practically impossible to reverse (e.g., factoring large primes or calculating a secure hash like **SHA**).
*   **Nonce**: A random "number used once" to introduce randomness. If mixed with a key, it functions as an Initialization Vector (IV).
*   **Zero-Knowledge Proof**: Proving you know a secret (like a password) without revealing the secret itself.
*   **Split Knowledge**: Dividing a key or privilege among multiple users. No single **user** can perform the action alone.
*   **M-of-N Control**: A form of split knowledge requiring a minimum of \\(M\\) authorized agents (out of \\(N\\) total) to collaborate (e.g., to authorize key recovery via a **recovery** agent or **management**).
*   **Key Escrow**: Storing keys with a third-party escrow agent/recovery agent.
*   **Work Function**: The time, effort, and cost required to break an encryption system. Security is sufficient when the work function exceeds the value or lifetime of the protected data.

---

## Core Cryptographic Principles
*   **Kerckhoffs' Principle**: A crypto system must remain secure even if everything about it (including the algorithm) is public, except the key. Relying on algorithm secrecy is "security through obscurity" and is not a valid security **standard**.
*   **Confusion**: Making the relationship between the key and the ciphertext as complex as possible, preventing attackers from deducing the key.
*   **Diffusion**: Making the influence of the plaintext on the ciphertext as widespread as possible. Changing a single bit in the plaintext should change approximately half the bits in the ciphertext.

---

## Codes vs. Ciphers
*   **Code**: Replaces whole words or phrases with symbols (e.g., police code "10-65" for armed robbery).
*   **Cipher**: Scrambles messages at the character or bit level.
    *   **Transposition Cipher**: Rearranges the order of characters in a message (reversible).
    *   **Substitution Cipher**: Replaces characters with other characters.
        *   *Caesar Cipher / ROT13*: A shift cipher (e.g., shifting letters by 3 or 13 places). Highly vulnerable to frequency analysis and brute-forcing (key space of only 25).
        *   *Vigenere Cipher*: A polyalphabetic cipher that uses a repeating keyword, susceptible to period analysis.
        *   *Running Key Cipher*: Uses a long pre-existing text (like a book) as the key.
        *   *One-Time Pad (OTP)*: A mathematically unbreakable substitution cipher. To be secure: (1) Key must be as long as the message, (2) key must be randomly generated, (3) key must only be used once, and (4) key must be physically protected.

---

## Block vs. Stream Ciphers
*   **Block Cipher**: Encrypts data in fixed-size blocks (e.g., 64-bit or 128-bit blocks) using transposition and substitution rounds. Best for stored files.
*   **Stream Cipher**: Encrypts data bit-by-bit or byte-by-byte in real-time. Best for continuous communication streams (e.g., **VPN** tunnels, **SSL**/**TLS** web sessions, or Netflix streaming).

---

## Symmetric Block Cipher Modes of Operation
Symmetric ciphers use the same secret key for both encryption and decryption. The block mode defines how data blocks are processed:
1.  **ECB (Electronic Codebook)**: The simplest mode. Each block is encrypted independently with the same key. Predictable; identical plaintext blocks yield identical ciphertext blocks. Unauthenticated.
2.  **CBC (Cipher Block Chaining)**: Each plaintext block is **XOR**ed with the previous ciphertext block before encryption. Uses an IV for the first block. Unauthenticated.
3.  **CFB (Cipher Feedback)**: The stream cipher version of **CBC**. Processes data in real-time using memory buffers. Unauthenticated.
4.  **OFB (Output Feedback)**: A stream mode that XORs plaintext with a keystream generated by repeatedly encrypting the IV (seed). Unauthenticated.
5.  **CTR (Counter)**: A stream mode that XORs plaintext with a keystream generated by encrypting a counter value that increments for each block, starting from a nonce. Unauthenticated.
6.  **GCM (Galois Counter Mode)**: An authenticated mode of encryption. Combines counter (**CTR**) mode with Galois field multiplication to provide both confidentiality and **authenticity** (integrity verification) using authentication tags.
7.  **CCM (Counter with CBC-MAC)**: An authenticated mode of encryption. Combines **CTR** mode for confidentiality with **CBC**-**MAC** (Cipher Block Chaining Message Authentication Code) for integrity and **authentication** controls.

---

## Symmetric Encryption Algorithms
*   **DES (Data Encryption Standard)**:
    *   Symmetric block cipher; operates on 64-bit blocks with a 56-bit key (the other 8 bits of the 64-bit input are parity bits discarded before encryption).
    *   Performs 16 rounds of XOR operations. Deprecated due to short key length, vulnerable to brute-force.
*   **3DES (Triple DES)**:
    *   Legacy upgrade to DES. Performs three rounds: Encrypt-Decrypt-Encrypt (EDE) or Encrypt-Encrypt-Encrypt (EEE).
    *   Nominal key length is 168 bits (3 x 56), but effective security is reduced to 112 bits due to meet-in-the-middle attacks. Still deprecated by modern standards.
*   **AES (Advanced Encryption Standard)**:
    *   The current gold **standard** for symmetric encryption.
    *   Processes 128-bit blocks with key lengths of 128, 192, or 256 bits, performing 10, 12, or 14 rounds respectively. Adopted by **NIST** and used globally.
*   **IDEA (International Data Encryption Algorithm)**:
    *   Developed as a DES replacement. Uses a 128-bit key and 64-bit blocks.
*   **Blowfish**:
    *   Designed by Bruce Schneier. Processes 64-bit blocks with variable key lengths (32 to 448 bits). Fast, public domain, and free.
*   **Twofish**:
    *   Bruce Schneier's successor to Blowfish. Processes 128-bit blocks with keys up to 256 bits. Uses pre-whitening and post-whitening (**XOR**ing data with subkeys before and after encryption).
*   **Skipjack**:
    *   Uses 64-bit blocks and an 80-bit key. Supported key escrow for U.S. government access, making it highly unpopular due to back-door concerns.
*   **CAST**:
    *   *CAST-128*: 64-bit block, 40-128 bit key.
    *   *CAST-256*: 128-bit block, 128-256 bit key, 48 rounds.
*   **Rivest Ciphers (RC)**:
    *   *RC4*: A symmetric stream cipher widely used in **WEP**, **WPA**, **SSL**, and early **TLS**. Now deprecated due to keystream vulnerabilities.
    *   *RC5* & *RC6*: Block ciphers with variable block and key sizes.

---

## Symmetric Key Management & Distribution
*   **Symmetric Drawbacks**:
    *   *Key Distribution*: Keys must be shared securely (out-of-band or using asymmetric **RSA** public-key encryption).
    *   *No Non-repudiation*: Shared keys mean anyone with the key could have encrypted the data, making it impossible to trace the exact **owner** or author of the message.
    *   *Scalability*: In a group of \\(N\\) users, the number of keys required is:
        \\[\text{Keys} = \frac{N(N - 1)}{2}\\]
*   **Key Storage**:
    *   *Software*: Key files stored on disk (cheap but vulnerable to hacking).
    *   *Hardware*: Keys stored on physical tokens (smart cards, **USB** drives) or Hardware Security Modules (HSMs).
*   *Rule*: Never store the encryption key on the same server or location as the encrypted data.
*   *Authorization*: Cryptographic testing, decryption, and key recovery activities should be performed only with explicit legal or management authorization.
