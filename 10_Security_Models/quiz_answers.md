# CISSP Practice Quiz Answers - Video 10: Security Models

Here are the correct answers and detailed explanations for the Video 10 quiz.

---

### Question 1
**Correct Answer: B**

*   **Explanation**: The star ($\star$)-Security Property of the Bell-LaPadula model is defined as "No Write Down." This prevents a user with high clearance (e.g., Top Secret) from writing or saving sensitive information into a lower classification document (e.g., Unclassified or Confidential), which would cause unauthorized data disclosure.
*   **Why others are incorrect**:
    *   *A is incorrect* because this describes the Biba model's star integrity property ("No Write Up"), or is a misunderstanding of Bell-LaPadula write rules (writing up is allowed under Bell-LaPadula to prevent disclosure, though it has integrity downsides).
    *   *C is incorrect* because Bell-LaPadula enforces mathematical security rules that cannot be bypassed simply by enabling auditing.
    *   *D is incorrect* because owner-based discretionary permissions (DAC) are part of the Discretionary Security Property, not the star-security property.

---

### Question 2
**Correct Answer: B**

*   **Explanation**: The **Clark-Wilson** model enforces commercial integrity. Its core concept is that users (subjects) cannot directly access or modify Constrained Data Items (CDIs, like account balances). Instead, they must interact with the data through approved application programs called **Transformation Procedures (TPs)**. An **Integrity Verification Procedure (IVP)** is used to regularly audit and verify that the CDIs are in a correct and consistent state.
*   **Why others are incorrect**:
    *   *A is incorrect* because Bell-LaPadula is a confidentiality model, not an integrity model, and does not use TPs or IVPs.
    *   *C is incorrect* because while Biba is an integrity model, it uses mathematical read/write rules based on hierarchical levels (e.g., no read down, no write up) rather than restricting database modifications to specific application programs (TPs).
    *   *D is incorrect* because the Brewer-Nash model is used to prevent conflicts of interest (Chinese Wall) and does not govern transaction integrity.

---

### Question 3
**Correct Answer: C**

*   **Explanation**: The **Brewer-Nash** model (also known as the Chinese Wall or Ethical Wall model) is designed to dynamically prevent conflicts of interest. It groups datasets into security domains and places conflicting business domains into conflict classes. Once a consultant accesses a domain, the system dynamically locks out their access to all other competing domains within that conflict class.
*   **Why others are incorrect**:
    *   *A and B are incorrect* because Biba and Goguen-Meseguer models do not use dynamic conflict-of-interest walls based on historical user actions.
    *   *D is incorrect* because the Graham-Denning model outlines rules for creating and deleting subjects and objects, not conflict-of-interest walls.

---

### Question 4
**Correct Answer: A**

*   **Explanation**: **Meltdown** is a speculative execution hardware vulnerability that breaks the fundamental isolation boundary between user-mode applications and the operating system kernel. This allows a non-privileged user-mode application to read private kernel-space memory, exposing sensitive keys, passwords, and OS data.
*   **Why others are incorrect**:
    *   *B is incorrect* because **Spectre** violates the boundary between different user-mode applications, rather than the boundary between user space and kernel space.
    *   *C is incorrect* because buffer overflows are coding bugs (not CPU design flaws) and are unrelated to speculative execution boundaries.
    *   *D is incorrect* because covert channels are communication methods, not speculative execution memory bugs.

---

### Question 5
**Correct Answer: B**

*   **Explanation**: Under the Common Criteria, the **Evaluation Assurance Level (EAL)** measures the rigor and thoroughness of the evaluation and testing process. **EAL 4** means the product's design has been methodically designed, tested, and reviewed. This is the highest level of assurance that is generally commercially viable for off-the-shelf software products.
*   **Why others are incorrect**:
    *   *A is incorrect* because EAL ratings measure assurance in the testing process, not the mathematical absence of all bugs. EAL 7 is formally verified, but even then, it does not guarantee "zero vulnerabilities."
    *   *C is incorrect* because functional-only testing corresponds to EAL 1.
    *   *D is incorrect* because EAL ratings do not define cryptographic key sizes.
