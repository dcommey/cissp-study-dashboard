# CISSP Study Notes: Disaster Recovery Planning

Disaster Recovery Planning (**DRP**) is the technical implementation of Business Continuity Planning (**BCP**). Together with crisis management, they form the discipline of Business Continuity Management (**BCM**), which is designed to protect system **availability** (part of the **CIA** triad) and ensure the business survives a major disruptive **incident** or disaster.

---

## 1. Disasters and Fault Tolerance (Resiliency)

Disasters can be natural (earthquakes, floods, fires) or human-made (bombings, strikes, power outages, and pandemics). To defend against these, organizations must build resilient and fault-tolerant architectures.

### Single Point of Failure (SPOF)
A **SPOF** is any single element (physical or logical) that, if it fails, disrupts an entire business process. Resilient design aims to eliminate **SPOF** at all layers.
* **Network Redundancy**: Redundant switches, routers, firewalls, and wireless **LAN** controllers.
* **System Redundancy**: Active-active or failover clusters where a standby server takes over via a heartbeat ping if the active one fails. (Note: Loss of heartbeat communication can lead to a *split-brain scenario*, causing data corruption).
* **Power Redundancy**:
  * **UPS** (Uninterruptible Power Supply): Provides short-term battery power to allow systems to ride out brief power sags or shut down gracefully (**UPS**).
  * *Generators*: Provide long-term power using fuel (diesel, propane) to keep critical environments running.
* **Storage Redundancy (RAID)**: Redundant Array of Independent Disks (**RAID**).
  * *RAID 0 (Striping)*: High performance but zero fault tolerance; a single disk failure destroys the entire array.
  * *RAID 1 (Mirroring)*: High resiliency by duplication, but cuts usable storage space in half.
  * *RAID 5 (Striping with Parity)*: Tolerates one disk failure; highly efficient.
  * *RAID 6 (Striping with Dual Parity)*: Tolerates two concurrent disk failures.
  * *RAID 10 (1+0)*: Combines mirroring and striping for speed and redundancy.
  * *Note*: RAID is a **technical** availability control; it is not a backup replacement. It cannot recover data corrupted by malware or accidental deletion.

### Fail-Secure vs. Fail-Open
When a system component fails, its recovery **policy** must dictate whether it fails open or fails secure.
* **Fail-Secure**: Restricts access upon failure (e.g., firewall blocking traffic).
* **Fail-Open**: Grants access upon failure (e.g., electronic door locks unlocking during a power failure to protect human life).

---

## 2. Business Impact Analysis (BIA) and Recovery Metrics

Before designing a **DRP**, organizations conduct a Business Impact Analysis (**BIA**). The **BIA** is an **operational** assessment that identifies critical business processes, maps **threat** vectors, and defines key recovery metrics:
* **MTTR** (Mean Time to Repair): The average time required to troubleshoot and fix a failed component (**MTTR**).
* **MTD** (Maximum Tolerable Downtime): The absolute longest time a business process can be disrupted without causing irreparable ruin to the organization (**MTD**).
* **RTO** (Recovery Time Objective): The target time within which a systems/infrastructure component must be restored to avoid impacting **MTD** (**RTO**).
* **WRT** (Work Recovery Time): The time needed after hardware is restored to transfer and restore database files, verify data **integrity**, and resume normal business operations (**WRT**).
  * *Formula*: \\(MTD \ge RTO + WRT\\)
* **RPO** (Recovery Point Objective): The maximum tolerable data loss measured in time (e.g., if RPO is 2 hours, backups must be taken at least every 2 hours) (**RPO**).

---

## 3. Database Recovery and Off-Site Replication

To protect database **confidentiality** and availability, organizations replicate data off-site:
1. **Electronic Vaulting**: Bulk batch transfer of database backups to an off-site location (**electronic vaulting**).
2. **Remote Journaling**: Frequent (hourly or near real-time) transfers of database transaction logs to a remote site.
3. **Remote Mirroring**: Live, synchronous replication of database transactions to an active standby server at the backup site. This is the most expensive but offers an RPO of near zero.

---

## 4. Recovery Facilities (Alternate Sites)

When a primary site is destroyed, the organization must relocate operations to an alternate facility.
* **Cold Site**: An empty building shell with power, HVAC, and physical security controls, but no computing hardware or active network lines. Recovery takes a long time (weeks).
* **Warm Site**: Pre-equipped with servers and network hardware but lacks the company’s current data. Recovery requires bringing backup media and restoring data before resuming operations.
* **Hot Site**: Fully operational facility with redundant hardware, network lines, and near-live data replication. Work can resume **ASAP** (as soon as possible) (**ASAP**).
* **Mobile Site**: A portable modular container or trailer configured with basic hardware.
* **Mutual Assistance Agreement (MAA)**: A reciprocal contract where two organizations agree to share processing resources during a disaster. While cost-effective, MAAs introduce severe data **confidentiality** **breach** risks and are difficult to enforce during regional disasters.
* **Cloud-based DR**: Renting virtualized resources in a public cloud like **AWS** (Amazon Web Services). Infrastructure can be automated using cloud infrastructure-as-code scripts like Terraform, Bicep, or **ARM** (Azure Resource Manager) templates (**AWS**, **ARM**). Compute instances can remain powered off to save cost, while storage remains allocated (accessed via secure **VPN** gateways). Systems can scale vertically by adding **CPU** or **RAM** dynamically to support **operational** needs (**CPU**, **RAM**).

---

## 5. DRP Testing and Maintenance Procedures

A **DRP** must not remain a dusty, unverified **procedure**. Organizations must conduct tests regularly to train the people **responsible** for its execution. **NIST** guidelines (such as SP 800-34) provide structures for testing.

### The Five DRP Test Types
1. **Read-Through (Desk Check)**: Team members review the **DRP** document individually to identify outdated contact lists, missing steps, or obsolete **procedure** instructions.
2. **Structured Walk-Through (Tabletop)**: A group exercise where team members gather in a conference room to walk through a disaster scenario step-by-step. It functions like a simulated security **rpg** (role-playing game) to identify planning gaps (**rpg**).
3. **Simulation Test**: Operational personnel test recovery **technical** capabilities by bringing up standby equipment and executing restoration scripts, sometimes interrupting non-critical processes.
4. **Parallel Test**: Relocates recovery personnel to the alternate site to restore systems and run operations in parallel with the active primary site. The primary site is *not* shut down.
5. **Full Interruption Test**: The primary site is completely powered down, and operations are fully migrated to the alternate recovery site. This is a **corrective** control test but carries immense business risk as it can cause actual system **destruction** or business downtime if the test fails.

### Plan Maintenance
* **Executive** management support is vital for funding and enforcing DRP maintenance.
* Plans must be updated regularly. Ensure that when staff leave, their disaster recovery responsibilities are immediately reassigned to a new **responsible** owner.

---

## 6. What to Remember for the Exam (Manager/Governance Perspective)

* **People First, Always**: The ultimate priority of any business continuity (**BCP**) and disaster recovery (**DRP**) plan is personnel safety. Egress routes must fail open.
* **BIA Prioritization**: Prioritize recovery based on the objective business metrics (\\(MTD \ge RTO + WRT\\)) defined in the **BIA**, not departmental preferences.
* **Test Thoroughly, Manage Risk**: Full interruption testing is the only way to prove a plan works 100%, but it introduces risk. A manager must evaluate if the risk of testing outweighs the benefit.
* **Reciprocal Site Risks**: Mutual assistance agreements (reciprocal sites) carry high legal and security risk, particularly regarding data **breach** liability and multi-tenant resource contention.
* **Residual Risk and Maintenance**: Even with hot sites and cloud-based DR, some residual risk remains. Regular tabletop exercises help mitigate human panic during a crisis.
