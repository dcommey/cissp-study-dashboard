# CISSP Practice Quiz Answers - Video 9: Security Principles

Here are the correct answers and detailed explanations for the Video 9 quiz.

---

### Question 1
**Correct Answer: B**

*   **Explanation**: In all CISSP scenarios, the **safety of human life** is the absolute highest priority. Therefore, emergency escape route doors must **fail-safe** (unlock/open) so that occupants can safely evacuate without being trapped. However, for rooms or containers that do not house or trap humans (like a media vault or cash safe), the doors should **fail-secure** (remain locked) to safeguard assets during a power outage or disaster.
*   **Why others are incorrect**:
    *   *A and D are incorrect* because locking emergency escape doors (fail-secure) creates a life-safety hazard, violating the primary CISSP rule.
    *   *C is incorrect* because there is no safety reason to unlock the document vault; doing so needlessly compromises asset security.

---

### Question 2
**Correct Answer: B**

*   **Explanation**: The foundation of **Zero Trust Architecture (ZTA)** is the "Assume Breach" and "Never Trust, Always Verify" mindset. Micro-segmentation and continuous validation ensure that even if an attacker compromises one device, they cannot move laterally without further verification, treating internal and external requests with equal skepticism.
*   **Why others are incorrect**:
    *   *A is incorrect* because transitive trust is a security vulnerability where trust is passed along a chain, which Zero Trust explicitly seeks to dismantle.
    *   *C is incorrect* because fail-soft refers to system degradation upon error, not network access validation.
    *   *D is incorrect* because Zero Trust relies on explicit verification, not obscure designs.

---

### Question 3
**Correct Answer: B**

*   **Explanation**: **Trust** is the presence of a security control (e.g., CISO's deployment of firewalls/encryption). **Assurance** is the measure of confidence (evidence) that the control is working correctly and effectively. By asking for test logs and reports, the committee is looking for assurance that the controls perform as advertised.
*   **Why others are incorrect**:
    *   *A is incorrect* because the committee already knows the controls exist (trust is established); they now want evidence of efficacy (assurance).
    *   *C is incorrect* because fail-open is a technical failure mode, not a validation assessment.
    *   *D is incorrect* because the committee is auditing security, not implementing transitive relationships.

---

### Question 4
**Correct Answer: B**

*   **Explanation**: **Confinement** (or **Sandboxing**) is an architectural control that isolates a process, limiting its access to specific system resources, network sockets, or memory addresses. This prevents untrusted code from interacting with or damaging the rest of the system.
*   **Why others are incorrect**:
    *   *A is incorrect* because transitive trust would allow the library more access, not less.
    *   *C is incorrect* because fail-soft handles system errors, not access containment.
    *   *D is incorrect* because input validation sanitizes user input, but cannot restrict the program's operating system privileges once executed.

---

### Question 5
**Correct Answer: C**

*   **Explanation**: **Transitive Trust** is a relationship where if A trusts B, and B trusts C, then A trusts C. In this scenario, the organization's ERP system trusted the VPN connection, and the VPN trusted the partner's network, enabling the attacker to pivot from the partner network to the ERP system due to a lack of compartmentalization.
*   **Why others are incorrect**:
    *   *A is incorrect* because Zero Trust would have blocked the partner's lateral movement.
    *   *B is incorrect* because fail-secure relates to failure states, not network routing trust.
    *   *D is incorrect* because air gapping is complete physical network isolation, which was not present since a VPN existed.
