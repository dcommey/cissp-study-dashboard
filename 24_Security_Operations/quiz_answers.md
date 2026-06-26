# Quiz Answers & Explanations: Security Operations

## Question 1
**Correct Answer: B**

### Explanation:
* **A) Incorrect:** Need to Know restricts user access to specific information necessary for their job, but does not describe the division of a single credential or secret.
* **B) Correct:** Split Knowledge is a technique where the details or components of a secret are split among multiple parties, so that no single person knows the entire secret. It is a subset of Separation of Duties (SoD) and is exemplified here by splitting the password in half.
* **C) Incorrect:** Job Rotation moves employees through different positions to prevent fraud and build redundancy but is not related to password splitting.
* **D) Incorrect:** Least Privilege limits permissions to the minimum required for a role, whereas this scenario is about access controls on a highly privileged account.

---

## Question 2
**Correct Answer: B**

### Explanation:
* **A) Incorrect:** A Configuration Management Database (CMDB) tracks assets and configuration information but has no capabilities to remotely wipe devices.
* **B) Correct:** Mobile Device Management (MDM) solutions allow administrators to manage mobile devices (like company-issued tablets and smartphones) and execute commands remotely, including enforcing encryption and performing remote wipes to prevent data loss.
* **C) Incorrect:** Privileged Access Management (PAM) secures administrative credentials and sessions on servers/databases but does not manage mobile endpoint lifecycles or perform remote wipes.
* **D) Incorrect:** Security Information and Event Management (SIEM) systems aggregate and correlate logs for threat detection but do not manage or control device configurations.

---

## Question 3
**Correct Answer: C**

### Explanation:
* **A) Incorrect:** Documenting the change in the CMDB is the final step in the change management process, performed *after* the change is implemented.
* **B) Incorrect:** Executive sign-off on residual risk is required when a vulnerability cannot be resolved, but here the change is being implemented to resolve the security issue.
* **C) Correct:** Testing the change in an isolated, non-production environment (like a test or staging environment) must occur *immediately before* scheduling and implementing the change to verify that it does not break connectivity or introduce new bugs.
* **D) Incorrect:** Creating a baseline is part of configuration management, but it is not the immediate next step in the change process after CAB approval.

---

## Question 4
**Correct Answer: A**

### Explanation:
* **A) Correct:** Mean Time Between Failures (MTBF) measures the average time between failures for a repairable device (e.g., modular power supplies or server hosts). Mean Time to Failure (MTTF) is used for devices that cannot be repaired and must be replaced upon failure (e.g., solid-state drives or backup tape media).
* **B) Incorrect:** This swaps the definitions of MTTF and MTBF.
* **C) Incorrect:** MTTR (Mean Time to Repair) is the time required to repair a component. RTO (Recovery Time Objective) is the target time to restore business operations after a disaster. Neither is the correct metric for lifecycle replacement planning.
* **D) Incorrect:** MTD (Maximum Tolerable Downtime) is a business continuity planning metric, and ALE (Annualized Loss Expectancy) is a risk calculation metric.

---

## Question 5
**Correct Answer: D**

### Explanation:
* **A) Incorrect:** Inherent risk is the risk level before any controls are applied. The organization implemented firewall rules, so the risk is no longer inherent. Risk acceptance is a management responsibility, not an administrator responsibility.
* **B) Incorrect:** Total risk is also the risk before controls are implemented.
* **C) Incorrect:** Transferred risk involves shifting the financial burden to another party (such as an insurance company or outsourcer). Implementing firewalls does not transfer the risk to the firewall vendor.
* **D) Correct:** Residual risk is the threat level that remains after security controls (the firewall rules) have been deployed. Accepting this remaining risk is the sole responsibility of senior management, who must bear the liability for any losses.
