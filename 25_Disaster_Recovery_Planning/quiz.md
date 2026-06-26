# Quiz: Disaster Recovery Planning

## Question 1
A business continuity coordinator is defining the recovery metrics for a critical patient portal in a hospital. The coordinator needs to set a target for the maximum acceptable time it should take for the IT team to restore the portal software and server operating systems to an operational state following an outage. Which metric should the coordinator define for this target?

- A) Recovery Point Objective (RPO)
- B) Recovery Time Objective (RTO)
- C) Work Recovery Time (WRT)
- D) Maximum Tolerable Downtime (MTD)

## Question 2
A banking organization requires a disaster recovery replication technique for its credit card processing database that supports an RPO of near zero. Every transaction committed at the primary database must be written synchronously and in real-time to a standby database at an off-site recovery center before the transaction is acknowledged to the client. Which technique should the organization deploy?

- A) Electronic vaulting
- B) Remote journaling
- C) Remote mirroring
- D) Bulk database exporting

## Question 3
A mid-sized logistics company is evaluating alternate disaster recovery processing sites. The company has a limited budget and can tolerate a recovery period of several weeks. They need a site that is equipped with basic utilities, power, and environmental controls (HVAC), but contains no pre-installed computing hardware, communications lines, or corporate data. Which recovery site type is most appropriate?

- A) Hot Site
- B) Warm Site
- C) Cold Site
- D) Mobile Site

## Question 4
An active-passive web server cluster relies on a heartbeat connection to monitor node health. During a network partition, the heartbeat link fails, but both nodes remain active and connected to the Internet. The standby node assumes the primary node has failed and attempts to take over, resulting in both servers writing conflicting transactions to the database. What is this scenario called?

- A) Split-brain scenario
- B) Single point of failure (SPOF)
- C) Fail-open failure
- D) Heartbeat flooding

## Question 5
A CISO wants to validate the organization's disaster recovery technical capabilities. The CISO wants to relocate disaster recovery staff to the alternate hot site, restore systems from off-site backups, and verify that the systems can process transactions. However, the organization's primary production data center must remain fully operational and continue processing live user traffic. Which DRP test type should the CISO conduct?

- A) Structured Walk-Through
- B) Simulation Test
- C) Parallel Test
- D) Full Interruption Test
