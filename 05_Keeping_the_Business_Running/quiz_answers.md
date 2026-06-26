# CISSP Practice Quiz Answers - Video 5: Keeping the Business Running

Here are the correct answers and detailed explanations for the Video 5 quiz.

---

### Question 1
**Correct Answer: C**

*   **Explanation**: Restoring backups, configuring servers, and setting up secondary disaster recovery sites are technical, tactical activities focused on IT asset recovery, making them part of **Disaster Recovery Planning (DRP)**. Setting up a manual phone routing system is an operational workaround aimed at keeping a core business process (customer service) running, which is a **Business Continuity Planning (BCP)** activity.
*   **Why others are incorrect**:
    *   *A is incorrect* because manual call routing is focused on business process continuity, not IT restoration.
    *   *B is incorrect* because restoring backups and setting up the secondary recovery site are tactical IT systems recovery tasks, which belong to DRP.
    *   *D is incorrect* because it reverses the classifications.

---

### Question 2
**Correct Answer: B**

*   **Explanation**: The Maximum Tolerable Downtime (MTD) is the maximum time a business process can be offline before causing catastrophic loss (4 hours). The Recovery Time Objective (RTO) is the target time to get the physical/logical hardware or systems back online (2 hours). The Work Recovery Time (WRT) is the time required to configure databases, verify system integration, and resume the business workflow (1.5 hours). 
*   **Why others are incorrect**:
    *   *A is incorrect* because WRT is 1.5 hours, and MTD is the full 4 hours.
    *   *C is incorrect* because MTD is 4 hours, and RTO/WRT are 2 hours and 1.5 hours, respectively.
    *   *D is incorrect* because it groups WRT and RTO incorrectly; RTO is the system recovery time (2 hours), and WRT is the operational setup time (1.5 hours).

---

### Question 3
**Correct Answer: A**

*   **Explanation**:
    1.  **Single Loss Expectancy (SLE)** is calculated as:
        $$\text{SLE} = \text{Asset Value (AV)} \times \text{Exposure Factor (EF)}$$
        $$\text{SLE} = \$10,000,000 \times 0.40 = \$4,000,000$$
    2.  **Annual Loss Expectancy (ALE)** is calculated as:
        $$\text{ALE} = \text{SLE} \times \text{Annual Rate of Occurrence (ARO)}$$
        $$\text{ALE} = \$4,000,000 \times 0.02 = \$80,000$$
*   **Why others are incorrect**:
    *   *B is incorrect* because it assumes an EF of 1.0 (100% loss) for the SLE and ARO of 0.02.
    *   *C is incorrect* because it calculates the correct SLE ($4,000,000) but multiplies it by an incorrect ARO or applies the math wrongly to get $200,000.
    *   *D is incorrect* because it underestimates both SLE and ALE by a factor of 10.

---

### Question 4
**Correct Answer: C**

*   **Explanation**: Executive sponsorship is the absolute key to success for any BCP program. Having the CEO or a senior executive sign a **Statement of Importance** distributed to all employees establishes organizational backing, sets clear expectations, and overcomes departmental silos or resistance.
*   **Why others are incorrect**:
    *   *A is incorrect* because running a full-scale simulation test before the plan is formally approved, endorsed, and distributed is premature and could disrupt business operations.
    *   *B is incorrect* because storing the BCP in an IT folder does not establish organizational authority or distribute it effectively.
    *   *D is incorrect* because the Statement of Priorities is strictly for emergencies. Distributing it as a salary or layoff baseline would cause severe internal conflict and is incorrect.

---

### Question 5
**Correct Answer: C**

*   **Explanation**: In all CISSP scenarios, the **safety of human life** is the absolute highest priority. The BCP manager must comply with local evacuation orders and order all employees to evacuate immediately. No server, facility, or database is worth endangering human life.
*   **Why others are incorrect**:
    *   *A, B, and D are incorrect* because they prioritize business assets or systems availability over human life, which violates the primary ethical and practical rule of CISSP risk management.
