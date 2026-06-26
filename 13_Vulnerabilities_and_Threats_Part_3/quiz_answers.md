# CISSP Practice Quiz Answers & Explanations - Video 13: Vulnerabilities and Threats Part 3

## Question 1
**Correct Answer: C**

**Explanation:**
*   **A is incorrect.** Wiping sessions via thin client non-persistence does not stop a hypervisor vulnerability from being exploited at runtime.
*   **B is incorrect.** VM sprawl is an administrative asset control issue; it is not the direct vulnerability type described (hypervisor compromise).
*   **C is correct.** VM Escaping occurs when an attacker exploits a guest VM vulnerability to break out of the VM's logical bounds and run instructions directly on the host hypervisor or access other co-located VMs. Mitigations must include applying hypervisor patches immediately and isolating virtual machines hosting different data classifications onto separate physical hardware hosts to prevent cross-tenant exposure.
*   **D is incorrect.** Declarative IaC scripts deploy configurations but do not fix hypervisor-level security vulnerabilities or isolate co-located virtual hosts.

---

## Question 2
**Correct Answer: A**

**Explanation:**
*   **A is correct.** VM Sprawl occurs when virtual assets are deployed without formal registration, lifecycle tracking, or decommissioning processes. Short-term test/POC machines are often left running indefinitely. To remediate sprawl, companies must establish administrative policies that require formal approval, owner tracking, and automated lifecycle expiration schedules.
*   **B is incorrect.** Software-defined storage (SDS) decouples data from hardware but does not control the VM provisioning lifecycle or prevent sprawl.
*   **C is incorrect.** SDN virtualizes the network control plane but does not track virtual machine assets or prevent developers from spawning unmanaged virtual environments.
*   **D is incorrect.** Hosting VDI environments for developers does not resolve sprawl if they are still permitted to spawn unmanaged VM instances within the VDI hypervisor host.

---

## Question 3
**Correct Answer: B**

**Explanation:**
*   **A is incorrect.** Configuration drift is a delta in system setup; it is not the correct classification for employees using unapproved cloud solutions.
*   **B is correct.** Shadow IT refers to any deployment or utilization of technology (systems, software, or external services) without the explicit approval of the IT/Security department. Storing files in personal cloud storage (Dropbox) or generative AI services violates security policies and compliance mandates. Remediation requires an administrative policy (defining approved tools) and logical controls (DLP and CASB to block outbound uploads).
*   **C is incorrect.** VM Escaping is a hypervisor escape attack, not the use of unapproved SaaS services.
*   **D is incorrect.** Requiring MFA on internal APIs does not prevent end-users from copying data and manually uploading it to external, public websites.

---

## Question 4
**Correct Answer: A**

**Explanation:**
*   **A is correct.** Configuration drift is the gradual divergence of system settings from their original baseline, usually caused by manual updates or troubleshooting. The best way to prevent drift is to adopt an immutable infrastructure model where direct server logins and manual changes are prohibited. Instead, all configuration changes are made in declarative IaC files, which are then used to build, test, and deploy new servers, while the old servers are destroyed (phoenix architecture).
*   **B is incorrect.** Type 2 (hosted) hypervisors incur more host OS overhead and do not prevent admins from logging in manually and creating configuration drift.
*   **C is incorrect.** Interface Definition Languages (IDLs) define interfaces between distributed application modules (like CORBA) but do not manage server configuration states or prevent drift.
*   **D is incorrect.** Cloud environments are physically secured by the cloud service provider; configuration drift is a software/logical administrative issue.

---

## Question 5
**Correct Answer: B**

**Explanation:**
*   **A is incorrect.** Non-persistent desktops reset themselves on logout but do not solve network WAN connectivity failures.
*   **B is correct.** When an organization shifts its operations to a centralized cloud VDI architecture, it creates a single point of failure in network WAN connectivity. Diverse, geographically redundant internet paths (e.g., separate fiber routes, diverse ISPs) are crucial to ensure workstation availability if the primary route goes down.
*   **C is incorrect.** Running VMs on Type 2 hypervisors refers to local client hosting, which defeats the centralized administration benefit of VDI and does not resolve WAN outages.
*   **D is incorrect.** Layer 2 Tunneling Protocol (L2TP) is a tunneling mechanism, but unencrypted HTTP should never be used, and this does not address physical link availability.
