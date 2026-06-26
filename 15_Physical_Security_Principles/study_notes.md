# CISSP Study Notes - Video 15: Physical Security Principles

## Foundations of Physical Security
Physical security is the bedrock of all security practices. If an attacker gains **physical** access to a facility, logical controls (like encryption or network security) can be bypassed. For instance, an attacker could steal drives directly from a server or connect malicious hardware via a **USB** port. 

Establishing a secure facility starts with a **policy** and a secure facility plan. This plan includes:
*   **Critical Path Analysis**: Mapping relationships between mission-critical systems and supporting elements (electricity, server **CPU**, cooling, personnel) to identify single points of failure.
*   **Site Selection**: Evaluating geographic location, local crime rates, and proximity to fire, police, and medical services.
*   **Industrial Camouflage**: Masking or hiding the facility's purpose (e.g., leaving a data center unbranded without vendor logos) to avoid attracting a malicious **threat**.

---

## Crime Prevention Through Environmental Design (CPTED)
**CPTED** is a framework that structures the physical environment to deter criminal behavior:
1.  **Natural Access Control**: Guiding people through specific pathways, gates, and bollards. The goal is to make entrances obvious to authorized personnel but uninviting to attackers.
2.  **Natural Surveillance**: Creating clear lines of sight using windows, lighting, and low landscaping. Encouraging people to occupy spaces (e.g., placing benches outside) provides passive **identification** and surveillance.
3.  **Natural Territorial Reinforcement**: Expressing ownership using fences, signs, and distinct patterns to show that the area is private property.

---

## Physical Security Controls and Typology
Physical security requires a layered defense-in-depth model utilizing different control types and functions:
*   **Control Typologies**:
    *   **administrative**: Policies, procedures, facility selection, disaster **recovery** plans, and training.
    *   **technical**: Automated systems such as **HVAC** systems, alarms, electronic badges, and intrusion detection.
    *   **physical**: Physical barriers like locks, fences, security guards, and turnstiles.
    *   **logical**: Integrating network boundaries and logical systems (like using **SSH** or **RDP** for secure administrative connections) to manage physical access systems.
*   **Control Functions**:
    *   **deterrent**: Discouraging intruders using signs, warning banners, visible cameras, or guard dogs.
    *   **preventative**: Physically blocking access using locks, mantraps, and badges, which are only granted to personnel with proper **authorization**.
    *   **detective**: Identifying an **incident** or a **breach** using sensors and alarms.

---

## Order of Physical Security Operations
A secure facility applies controls sequentially:
1.  **Deter**: Use signs and **deterrent** lights to discourage intrusion.
2.  **Deny**: Use locks and doors to prevent entry.
3.  **Detect**: Use motion sensors (infrared, photoelectric) and physical **IDS** (Intrusion Detection Systems) to flag intrusions.
4.  **Delay**: Use walls, gates, and mantraps (access control vestibules) to slow down an intruder.
5.  **Determine**: Use security guards and camera feeds to assess if the event is a false alarm or a real security **incident**.
6.  **Decide**: Execute incident response policies and coordinate with law enforcement.

---

## Hardware Metrics and High Availability
To protect system **availability**, organizations must plan for hardware failures:
*   **AIW** (Allowable Interruption Window): The time a process can be interrupted without causing significant damage and without requiring data **recovery** operations.
*   **SDO** (Service Delivery Objective): The minimum performance level that must be maintained during an interruption.
*   **MTD** / **MTO**: Maximum Tolerable Downtime (also called Maximum Tolerable Outage). The absolute limit the business can survive without the system before suffering catastrophic failure.
*   **Hardware Lifespan Metrics**:
    *   **MTTF** (Mean Time to Failure): The typical operational lifetime of non-repairable devices.
    *   **MTTR** (Mean Time to Repair): The average time to repair a device or replace a modular component (like a server power supply).
    *   **MTBF** (Mean Time Between Failures): The estimated time between consecutive failures on repairable systems.

---

## Cable Plant and Distribution Frames
The cable plant includes all network wiring and connection blocks:
*   **MDF** (Main Distribution Frame): The central wiring closet where external provider cables enter the building (demarcation point) and connect to the internal network.
*   **IDF** (Intermediate Distribution Frame): Wiring closets located on separate floors or sections of a building to connect localized workstations to the backbone network.
*   *Security*: Wiring closets must be locked and kept clean to prevent unauthorized tapping, physical tampering, or accidental outages caused by staff using closets for storage.

---

## Access Control and Media Management
*   **Access Badges**:
    *   *Dumb Cards*: Standard printed name tags offering no automated features.
    *   *Smart Cards*: Contain microchips storing cryptographic keys, communicating via **RFID** (Radio Frequency Identification) or **NFC** (Near Field Communication). They are often paired with a **PIN** (Personal Identification Number) for multi-factor **authentication**.
    *   *Magnetic Stripe Cards*: Cheap but easily cloned and insecure.
*   *Access Violations*:
    *   *Tailgating*: Sneaking in behind an authorized person without their knowledge.
    *   *Piggybacking*: Persuading an authorized user to hold the door or scan you in.
    *   *Lock Bypassing*: Utilizing lock picks or electronic spoofing devices.
*   **Media Security**:
    *   A media **custodian** must manage storage media (blank, reusable, or installation media containing **OVF** or **OVA** virtual machine packages).
    *   Media must be logged using a check-in/check-out process and locked in secure cabinets.
*   **Evidence and WORM Storage**:
    *   Forensic evidence must be stored securely to preserve **integrity**.
    *   Use **WORM** (Write Once, Read Many) media to ensure that logs and drive images cannot be modified by any user.

---

## Environmental and Power Controls
*   **HVAC** (Heating, Ventilation, and Air Conditioning): Maintains optimal temperature (59°F–89°F) and relative humidity (40%–60%). Too low humidity causes static electricity buildup; too high humidity causes corrosion and short circuits. Cooling layouts include hot/cold aisles and liquid immersive cooling, which requires disabling fan monitoring alerts in the server **BIOS**.
*   **Power Protection**:
    *   *Surge Protectors*: Protect against overvoltage spikes and surges.
    *   *Power Conditioners*: Clean electrical lines of electromagnetic and radio frequency noise.
    *   *ups* (Uninterruptible Power Supply): Provides short-term battery power during a fault, sag, or blackout. Data centers use double-conversion **UPS** systems to feed clean power directly from batteries, or line-interactive UPS systems for local offices.
    *   *Generators*: Fuel-powered generators provide long-term power during a brownout or blackout, taking over after the UPS battery bridges the initial startup delay.
*   **Power Anomaly Definitions**:
    *   *Fault*: Brief power loss.
    *   *Blackout*: Complete power loss.
    *   *Sag*: Temporary low voltage.
    *   *Brownout*: Prolonged low voltage.
    *   *Spike*: Sudden, high voltage.
    *   *Surge*: Prolonged high voltage.
*   **Fire Suppression**:
    *   *Class A*: Common combustibles (wood, paper). Suppressed with water or soda acid.
    *   *Class B*: Flammable liquids. Suppressed with CO2 or Halon.
    *   *Class C*: Electrical fires. Suppressed with non-conductive agents (CO2, Halon, or FM-200). Never use water.
    *   *Class D*: Flammable metals. Suppressed with dry powder.
    *   *Class K*: Cooking oils. Suppressed with wet chemicals causing saponification.
    *   *Sprinkler Systems*: Wet-pipe (water in pipes, risk of freezing), Dry-pipe (pressurized gas in pipes), Pre-action (two-stage release to prevent water damage), and Deluge (rapid flooding).

---

## CISSP Exam Tips: The Manager's Perspective
*   **Governance**: Senior **management** is responsible for safety first. People are always the top priority in any secure facility plan.
*   **Compliance**: Ensure that physical access controls and visitor logs are regularly audited to maintain **compliance** with industry regulations (e.g., PCI-DSS, SOC 2).
*   **Digital Banners**: Digital signage (such as a login **MOTD** banner displayed when connecting to routers via **SSH** or **RDP**—a standard taught in networking courses like the **CCNA**) is an **administrative** control that establishes logical boundaries and warns unauthorized users of legal **liability**.
