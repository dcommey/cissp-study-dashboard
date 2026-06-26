# CISSP Practice Quiz Answers - Video 8: Symmetric Key Cryptography

Here are the correct answers and detailed explanations for the Video 8 quiz.

---

### Question 1
**Correct Answer: C**

*   **Explanation**: The number of unique keys required for symmetric encryption in a group of $N$ users is calculated using the formula:
    $$\text{Keys} = \frac{N(N - 1)}{2}$$
    For 500 users:
    $$\text{Keys} = \frac{500 \times (500 - 1)}{2} = 124,750\text{ keys}$$
*   **Why others are incorrect**:
    *   *A is incorrect* because 500 keys would only allow each user to have one key, meaning everyone shares the same single key or they cannot communicate one-on-one.
    *   *B and D are incorrect* because they do not correctly apply the symmetric key scaling formula.

---

### Question 2
**Correct Answer: D**

*   **Explanation**: **Galois Counter Mode (GCM)** is an **authenticated encryption** mode of operation. It provides both confidentiality (using CTR mode) and integrity/authenticity verification (using Galois field multiplication). If an attacker alters any part of the ciphertext, the authenticity check will fail during decryption.
*   **Why others are incorrect**:
    *   *A, B, and C are incorrect* because CBC, OFB, and ECB modes are unauthenticated modes. They encrypt the data but do not contain built-in integrity tags. An attacker could alter the ciphertext, and the system would decrypt it into corrupted plaintext without automatically signaling an integrity breach (unless combined with an external MAC or hash).

---

### Question 3
**Correct Answer: B**

*   **Explanation**: DES takes a 64-bit input key, but before encryption processing begins, every eighth bit (bits 8, 16, 24, 32, 40, 48, 56, and 64) is discarded. These 8 bits are reserved for parity checking (to verify key accuracy), leaving exactly 56 bits for the actual cryptographic rounds.
*   **Why others are incorrect**:
    *   *A is incorrect* because DES does not compress the key using hashes.
    *   *C is incorrect* because the IV is a separate random input and is not stored inside the key bits.
    *   *D is incorrect* because padding is not applied inside the DES key structure.

---

### Question 4
**Correct Answer: C**

*   **Explanation**: A one-time pad (OTP) does not require the use of asymmetric algorithms (like RSA) to be mathematically secure. In fact, if the OTP key is distributed securely out-of-band, it is completely unbreakable. Encrypting the OTP key with an asymmetric algorithm would link the pad's security to the mathematical strength of the asymmetric algorithm, which is *not* theoretically unbreakable (it is only computationally secure).
*   **Why others are incorrect**:
    *   *A, B, and D are incorrect* because they are absolute requirements for a one-time pad's mathematical security: the key must be random, kept secret, as long as the message, and used exactly once.

---

### Question 5
**Correct Answer: B**

*   **Explanation**: **Kerckhoffs' Principle** states that a cryptographic system should be secure even if everything about it is public, except for the key. Standard practice dictates using public, thoroughly analyzed, and mathematically vetted algorithms (like AES). Relying on the secrecy of a custom algorithm is "security through obscurity," which routinely fails because the algorithm can be reverse-engineered.
*   **Why others are incorrect**:
    *   *A is incorrect* because diffusion is a property of a cipher's mathematical structure (spreading plaintext influence), not a governance principle regarding algorithm secrecy.
    *   *C is incorrect* because zero-knowledge proofs are a method of authentication, not a principle of algorithm design.
    *   *D is incorrect* because the work function is the measure of effort to break a key, not a principle regarding algorithm public disclosure.
