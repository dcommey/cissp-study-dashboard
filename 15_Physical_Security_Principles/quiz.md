# CISSP Practice Quiz - Video 15: Physical Security Principles

## Question 1
A security manager is designing the exterior landscape for a new corporate office in a suburban area. The goal is to reduce burglary risk by subtly guiding visitors to a single visible front entrance, while ensuring that any trespassers attempting to breach windows or side doors are in plain view of CCTV and passersby. Which combination of CPTED principles is being applied?

- A. Industrial camouflage and double-conversion UPS backup.
- B. Natural access control (guiding visitors via pathways/fences) and natural surveillance (improving visibility via low landscaping and windows).
- C. Territorial reinforcement and HVAC relative humidity control.
- D. Logical fire suppression and Class D dry powder placement.

---

## Question 2
A critical database server hosting transaction processing logs has failed. The security team determines that the server's Maximum Tolerable Downtime (MTD) is 4 hours. The vendor's Mean Time to Repair (MTTR) is estimated at 3 hours, but the database recovery process from tape backups requires an additional 2 hours. What should the security manager conclude, and what is the best risk response?

- A. The SDO will exceed the SDO baseline; replace the server's CPU and BIOS.
- B. The Mean Time Between Failures (MTBF) is too low; implement a WORM storage fabric immediately.
- C. The recovery time (MTTR + data restore = 5 hours) exceeds the MTD (4 hours), presenting an unacceptable availability risk; implement redundant, hot-swappable servers to reduce recovery time.
- D. The allowable interruption window (AIW) is longer than the MTD; rely on manual turnstiles to delay users.

---

## Question 3
A fire breaks out in a room housing core networking racks, servers, and main distribution frames (MDF). A technician runs to the door and grabs a nearby fire extinguisher. From a safety and equipment protection perspective, which class of fire extinguisher and suppression agent must be used?

- A. Class A extinguisher using water to suppress common combustibles.
- B. Class C extinguisher using non-conductive carbon dioxide (CO2) or clean agent gas (FM-200).
- C. Class D dry powder to chemically interfere with the combustion of metals.
- D. Class K alkaline mixture to initiate saponification on the circuit boards.

---

## Question 4
An enterprise data center experiences a prolonged blackout due to a grid failure. The data center uses a fuel-powered generator and double-conversion UPS batteries. During the outage, the generator takes 45 seconds to start up and stabilize its output. What role does the UPS play in this scenario, and how is the transition managed?

- A. The UPS acts as a power conditioner to boost the generator's voltage during sags.
- B. The UPS batteries supply continuous power during the initial 45 seconds to bridge the gap until the generator takes over, preventing system restarts and data loss.
- C. The UPS detects the blackout and switches the server BIOS to low-power CPU mode.
- D. The UPS triggers a deluge sprinkler system to cool down the server racks.

---

## Question 5
A security auditor discovers that a company's Intermediate Distribution Frame (IDF) wiring closets on several floors are unlocked and being used by the cleaning staff to store liquids and floor buffers. What are the primary risks, and what is the best administrative/physical remediation?

- A. Risk of VM escaping and configuration drift; use Azure ARM templates to lock the closets.
- B. Risk of unauthorized physical wiretapping, accidental cable damage, and fire hazards from stored liquids; lock the closets, restrict access to authorized personnel, and establish a clean-closet policy.
- C. Risk of Class D metallic fires; place dry powder containers on top of the patch panels.
- D. Threat of GPS tracking interception; disable NFC and RFID cards for the janitorial staff.
