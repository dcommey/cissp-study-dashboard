# CISSP Study Notes: Security Operations

Security Operations is focused on the daily duties, actions, and responsibilities that security professionals and administrators manage to maintain the **confidentiality**, **integrity**, and **availability** of systems and data. It bridges the gap between high-level **policy** and hands-on execution.

---

## 1. Core Administrative Principles

To limit data **exposure** and prevent fraud, organizations enforce daily administrative principles that restrict what a **user** or administrator can do.

* **Need to Know**: Restricts data access to only the specific information a **user** requires to perform their job. Even if a user holds a high clearance level (e.g., in a government classification system), they must still demonstrate a specific business reason (**need to know**) to access that data.
* **Least Privilege**: Limits users, systems, and applications to only the privileges absolutely necessary to perform their functions. This controls both data access (read, write, change) and system access (logging onto servers, running CPU-intensive processes, or executing administrative commands).
* **Separation of Duties (SoD)**: Divides a critical process or transaction among multiple people to prevent fraud, human error, and abuse of authority. No single person should have complete control over a critical function.
  * *Two-Person Control*: Requires two people to cooperate to perform an action (e.g., emergency accounts in **PAM** solutions that split a login password between two different administrators).
  * *Split Knowledge*: Distributes the information needed to perform an operation so that no single person knows the entire secret or key.
* **Job Rotation**: Periodically moves employees from one role to another. This reduces the risk of collusion, prevents employees from abusing a system they have become too familiar with, and ensures other staff members can detect anomalies.
* **Mandatory Vacation**: Requires employees to take a minimum consecutive number of days off annually. During this time, another employee is **responsible** for taking over their duties, which helps expose hidden fraudulent or unauthorized activities.
* **Privileged Access Management (PAM)**: Specialized **technical** solutions and policies used to secure, control, and audit accounts with administrative privileges (e.g., root, domain admin, or local administrator). **PAM** enforces least privilege by granting temporary, time-limited credentials or tickets, requiring periodic re-authentication or continuous **authentication** of users while they are logged in, preventing long-term credential harvesting.

---

## 2. Personnel Safety and Physical Security Controls

Protecting the life and safety of employees is the highest priority of security operations and governance (**management**).
* **Physical Security**: Focuses on protecting physical assets, buildings, and personnel (**physical**).
* **Exit Door Locks (Life Safety)**: Must be configured to fail-safe, meaning they unlock automatically in case of a fire or power outage to allow emergency egress.
* **Duress Systems**: Buttons or silent duress codes that enable employees to alert security or law enforcement in an emergency without raising suspicion.
* **Work and Travel Security**: Training employees to remain safe while traveling for business (e.g., avoiding unsafe networks, managing device theft, and protecting credentials).

---

## 3. Asset and Media Management

To ensure resource protection, organizations must inventory and manage all tangible and intangible assets.
* **Asset Roles**:
  * **Data Owner**: The senior executive ultimately **responsible** for the classification, protection, and lifecycle of a specific data set.
  * **System Owner**: The manager **responsible** for the physical server, virtual environment, or system hosting the software asset.
  * **Data Custodian**: The administrator delegated to handle daily operational tasks like backups, access controls, and logging.
* **Inventory Tracking**:
  * **CMS** (Configuration Management System) and **CMDB** (Configuration Management Database): Automated systems used to track assets and configuration items, utilizing barcodes and **RFID** (radio frequency identification) tags (**CMS**, **CMDB**, **RFID**).
* **Data Sanitization and Destruction**: Securing the end of the asset lifecycle. When media is retired, it must undergo **destruction** or sanitization to prevent data recovery in the event of a **breach**. Methods include overwriting, degaussing (for magnetic media), and physical **destruction** (shredding, incineration).
* **Media Protection**:
  * **USB** flash drives, optical disks, and hard drives must be encrypted to maintain **confidentiality** if lost or stolen.
  * **MDM** (Mobile Device Management): Centralized software used to push security policies, track inventory, enforce encryption, and perform remote wipes on smartphones and tablets (**MDM**).
  * Tape Media: Used for long-term archival backups; requires climate-controlled storage and protection from magnetic fields.
* **Hardware Reliability Metrics**:
  * **MTTF** (Mean Time to Failure): The average lifespan of a non-repairable system or component (like a tape or SSD) before it fails (**MTTF**).
  * **MTBF** (Mean Time Between Failures): The average operational time between repairable failures of a system (like a storage array or server) (**MTBF**).

---

## 4. Cloud Security and Resource Models

Cloud computing provides digital resources on demand over the Internet. It is governed by a shared responsibility model between the customer and the **CSP** (Cloud Service Provider) (**CSP**).
* **Cloud Environments**:
  * **Public Cloud**: Shared, multi-tenant resources managed by major providers like Amazon Web Services (**AWS**), Google Cloud Platform (**GCP**), Microsoft Azure, or Oracle Cloud Infrastructure (**OCI**).
  * **Private Cloud**: Dedicated cloud infrastructure used exclusively by a single enterprise. Offers greater control but higher capital expenditure (CapEx).
  * **Hybrid Cloud**: An environment combining public and private cloud models, connected to allow data and application portability (e.g., scaling out to the public cloud during peak loads like Black Friday).
* **Cloud Service Models**:
  * *Software as a Service (SaaS)*: Customer uses the vendor's applications (e.g., Gmail). The provider manages the entire stack, including **CPU** allocations, operating systems, and **RAM** (**CPU**, **RAM**).
  * *Platform as a Service (PaaS)*: Provider delivers a runtime platform, operating system, and database services. The customer only manages the application code.
  * *Infrastructure as a Service (IaaS)*: Provider delivers virtualized hardware, storage, and networking. The customer is **responsible** for installing and managing the operating system, applications, and data.
  * *Core Cloud Tenets*:
    1. **Self-service**: Users can provision resources on demand without manual administrator intervention.
    2. **Scalability**: The static capacity of the system to handle larger workloads by adding resources (scaling up by adding **CPU** or **RAM**, or scaling out by adding server nodes).
    3. **Elasticity**: The dynamic, automatic adjusting of resources in real time to match current demand.

---

## 5. Configuration and Change Management

Configuration and change management ensure that systems are deployed in a secure state and remain secure throughout their lifecycle.

### Configuration Management (CM)
* **Baseline**: A documented, **standard** configuration setting for systems (e.g., server images or workstation templates) that defines the approved security posture (**baseline**, **standard**).
* **OS Imaging**: Capturing a baseline disk image of a configured, tested system to quickly deploy consistent and secure environments to other hardware or cloud virtual machines.
* **Group Policy**: A Windows feature used to centrally enforce configuration baselines and security settings across a domain.

### Change Management
Enforces formal controls to prevent outages, security degradation, or **breach** occurrences caused by unauthorized alterations.
* **ITIL** (Information Technology Infrastructure Library): A framework of best practices for managing IT service lifecycles, configuration changes, and operations (**ITIL**).
* **CAB** (Change Advisory Board): A committee of cross-functional experts who review, evaluate, and approve or reject change requests based on risk, business impact, and scheduling (**CAB**).
* **Change Management Steps**:
  1. *Request the change* (detailing the purpose and scope).
  2. *Review the change* (evaluating impact on security and operations).
  3. *Approve or reject the change* (and verify a backout/rollback plan is prepared).
  4. *Test the change* (in an isolated non-production environment).
  5. *Schedule and implement the change* (during an approved maintenance window).
  6. *Document the change* (updating the configuration management logs and CMDB).
* *Emergency Changes*: Urgent security modifications (e.g., blocking a port during a live incident) can bypass standard scheduling but must still be formally documented and reviewed post-incident.

---

## 6. Vulnerability and Patch Management

Patching software, operating systems, firmware, and embedded system devices is a key operational duty.
* **Patch Management**: The process of evaluating, testing, approving, deploying, and auditing software fixes.
  * *Embedded/IoT Systems*: Smart devices, IP cameras, **CCTV** systems, and printers also require patching. Compromised, unpatched smart devices are often harvested into botnets to launch massive **DNS** denial-of-service attacks (e.g., the Mirai botnet attack) (**DNS**).
* **Vulnerability Management**: The continuous process of identifying, classifying, and mitigating security flaws.
* **Residual Risk**: The remaining risk after all patches, configuration changes, and security controls have been applied. Management must sign off on and accept this **residual risk** when patching is not feasible due to business operations or legacy application constraints.

---

## 7. What to Remember for the Exam (Manager/Governance Perspective)

* **Safety of Life First**: Human safety is always the highest priority in physical security and operations. Egress doors must unlock automatically when power fails.
* **Shared Responsibility**: In the cloud, the customer always retains ultimate ownership and responsibility for protecting their data.
* **No Single Point of Failure**: Enforce separation of duties, split knowledge, and job rotation to mitigate the insider **vulnerability** threat.
* **Risk vs. Cost**: Never spend more to implement a control than the asset itself is worth. Management must accept the **residual risk** when mitigation costs exceed the potential financial loss.
* **Audit and Compliance**: Operating systems, software licenses, and change histories must be auditable to verify **compliance** with corporate security policies and regulatory frameworks.
* **SIEM and SOC**: Daily logging and event management in the **SOC** (Security Operations Center) depend on accurate time synchronization via NTP and consistent configuration baselines to detect and handle security breaches (**SOC**).
