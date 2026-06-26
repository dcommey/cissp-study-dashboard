# Quiz Answers & Explanations: Disaster Recovery Planning

## Question 1
**Correct Answer: B**

### Explanation:
* **A) Incorrect:** Recovery Point Objective (RPO) defines the maximum tolerable data loss measured in time (e.g., database backup age).
* **B) Correct:** Recovery Time Objective (RTO) is the target time for restoring the hardware and operating systems of a service to an operational state following a disaster.
* **C) Incorrect:** Work Recovery Time (WRT) is the time required to restore data and configurations once systems are up, returning the business to operational efficiency.
* **D) Incorrect:** Maximum Tolerable Downtime (MTD) is the total downtime the business process can endure before causing irreversible harm, which includes both RTO and WRT ($MTD \ge RTO + WRT$).

---

## Question 2
**Correct Answer: C**

### Explanation:
* **A) Incorrect:** Electronic vaulting is a bulk backup method that writes database dumps to off-site locations in batches (e.g., daily), which does not support an RPO of near zero.
* **B) Incorrect:** Remote journaling replicates transaction log files periodically (e.g., hourly), resulting in up to an hour of data loss (RPO is not near zero).
* **C) Correct:** Remote mirroring is the synchronous replication of data to a standby database at a disaster recovery site in real-time. Every transaction must be committed at both locations before it is acknowledged, providing an RPO of near zero.
* **D) Incorrect:** Bulk database exporting is a non-real-time manual backup dump process.

---

## Question 3
**Correct Answer: C**

### Explanation:
* **A) Incorrect:** A Hot Site is pre-configured with active servers, network connections, and replicated corporate data, which is the most expensive option and takes minutes to activate, not weeks.
* **B) Incorrect:** A Warm Site is equipped with servers and communications hardware but does not have the company's data. Recovery takes hours to days, not weeks.
* **C) Correct:** A Cold Site is a leased facility with basic utilities, power, and environmental controls (HVAC) but no hardware or data lines. Because hardware must be ordered, shipped, and configured, activation takes several weeks, which is appropriate for the company's budget and recovery objectives.
* **D) Incorrect:** A Mobile Site is a portable trailer or shipping container that is towed to a location, which is specialized and costly.

---

## Question 4
**Correct Answer: A**

### Explanation:
* **A) Correct:** A split-brain scenario occurs in high-availability clustering when the heartbeat network fails, causing both the active and standby nodes to assume they are the only surviving node. Both attempt to assume active status and write to the same shared resources concurrently, causing major database corruption.
* **B) Incorrect:** A Single Point of Failure (SPOF) is a single component whose failure takes down the whole system. The servers did not fail; rather, their communication failed.
* **C) Incorrect:** Fail-open is a policy where access is granted upon device failure, which is not applicable to server cluster node splits.
* **D) Incorrect:** Heartbeat flooding is not a standard term for this clustering failure state.

---

## Question 5
**Correct Answer: C**

### Explanation:
* **A) Incorrect:** A Structured Walk-Through is a tabletop discussion in a conference room and does not involve technical execution or site relocation.
* **B) Incorrect:** A Simulation Test is a localized test that may recover some components but does not fully run operations using backup data in parallel.
* **C) Correct:** A Parallel Test relocates disaster recovery personnel to the recovery site to activate systems and restore backups, running them in parallel with the primary production environment to verify operational functionality. The primary production site continues processing live customer traffic throughout the test.
* **D) Incorrect:** A Full Interruption Test completely shuts down the primary production site to fail operations over to the recovery site, which carries high operational risk and violates the requirement that the primary data center remain online.
