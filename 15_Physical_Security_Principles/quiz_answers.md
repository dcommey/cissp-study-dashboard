# CISSP Practice Quiz Answers & Explanations - Video 15: Physical Security Principles

## Question 1
**Correct Answer: B**

**Explanation:**
*   **A is incorrect.** Industrial camouflage is the practice of disguise, and double-conversion UPS is a power supply design; neither maps to landscaping design for access/visibility.
*   **B is correct.** Natural access control focuses on using physical barriers, pathways, gates, and bollards to guide people and restrict entries. Natural surveillance structures the environment (windows, CCTV, low vegetation, lighting) to maximize the visibility of users and expose intruders. Both are core CPTED (Crime Prevention Through Environmental Design) principles.
*   **C is incorrect.** Territorial reinforcement is CPTED territorial ownership marking (signs/fences), but HVAC humidity control is a hardware environment control.
*   **D is incorrect.** Fire suppression classes are fire controls and have no bearing on environmental landscaping design.

---

## Question 2
**Correct Answer: C**

**Explanation:**
*   **A is incorrect.** CPU and BIOS replacements are local component fixes; they do not address the aggregate recovery/restoration time deficit.
*   **B is incorrect.** WORM is a data integrity protection control (write once read many) and is irrelevant to database restore speed or hardware repair timing.
*   **C is correct.** Maximum Tolerable Downtime (MTD) defines the ultimate business survival threshold (4 hours). If repairing the hardware (MTTR = 3 hours) and restoring the database (2 hours) takes a total of 5 hours, the system recovery window exceeds the MTD, representing an unacceptable risk. The business must implement high-availability architectures (like active-active clustering, real-time database replication, or redundant hot standbys) to minimize recovery time below the MTD limit.
*   **D is incorrect.** The Allowable Interruption Window (AIW) is a short-term interruption that does not require recovery; it is always much shorter than the MTD, not longer. Manual turnstiles delay personnel, not database system outages.

---

## Question 3
**Correct Answer: B**

**Explanation:**
*   **A is incorrect.** Class A fire suppression uses water, which conducts electricity and would present a fatal shock hazard to the technician while permanently short-circuiting and destroying the servers/routers.
*   **B is correct.** Class C fires involve energized electrical equipment (computers, distribution frames). The extinguishing agent must be non-conductive to protect personnel from shocks and leave no residue to protect the electronics. Carbon Dioxide (CO2) and clean agents (like FM-200) are standard Class C suppressants.
*   **C is incorrect.** Class D extinguishers use dry powder for burning metals (e.g., magnesium). They leave heavy chemical residues that would ruin server motherboards.
*   **D is incorrect.** Class K wet chemical suppressants are designed to saponify hot cooking oils in commercial kitchens; they should never be used on sensitive data center electronics.

---

## Question 4
**Correct Answer: B**

**Explanation:**
*   **A is incorrect.** Power conditioners clean lines of noise; they do not supply current to compensate for a complete blackout.
*   **B is correct.** A fuel-powered generator cannot boot up instantly. During the startup/warm-up delay (45 seconds in this case), the Uninterruptible Power Supply (UPS) battery backup instantly supplies power to the critical loads, preventing system crashes and data loss.
*   **C is incorrect.** The UPS does not interact with the server BIOS or modify CPU power profiles.
*   **D is incorrect.** Triggering deluge sprinklers would flood the server room with water, destroying the data center.

---

## Question 5
**Correct Answer: B**

**Explanation:**
*   **A is incorrect.** VM escaping and configuration drift are logical/software virtualization issues and are not caused by physical access to wiring closets. ARM templates do not lock physical doors.
*   **B is correct.** IDF closets contain network patch panels, switches, and cabling. Leaving them unlocked creates a severe threat of physical wiretapping (e.g., placing rogue sniffing devices) or data breach. Storing cleaning liquids inside poses a chemical spill and fire hazard. Physical locks combined with an administrative policy enforcing clean closets are the appropriate remediation.
*   **C is incorrect.** Class D fire powder is for metallic fires; it is not a wiring closet physical locking control.
*   **D is incorrect.** Decoupling janitorial NFC cards does not prevent access if the doors are left physically unlocked, nor is cell tower/GPS tracking relevant here.
