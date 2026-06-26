# CISSP Practice Quiz - Video 11: Vulnerabilities and Threats Part 1

## Question 1
An organization suffers a massive system outage after a routine update to an endpoint detection agent loads a buggy system driver. As a CISSP, how would you explain the architectural reason why this software bug caused a total operating system crash?

- A. The agent was executed within Ring 3 user space, allowing it to starve the system of CPU cycles.
- B. The agent's device driver was loaded in Ring 0 (Kernel Mode), where any unhandled exception crashes the entire operating system.
- C. The driver bypassed the Trusted Platform Module and executed directly in the supervisor state.
- D. The scheduler forced the driver into a perpetual waiting state, leading to a system-wide deadlock.

---

## Question 2
A financial institution is decommissioning a storage array containing highly sensitive customer data. Senior management has proposed overwriting all solid-state drives (SSDs) with random characters three times before sending them to a third-party recycler. From a security manager's perspective, why is this procedure insufficient?

- A. SSD microcontrollers utilize wear-leveling and bad-block management, which can shield data sectors from being overwritten by software utilities.
- B. SSDs require demagnetization (degaussing) rather than software overwriting to destroy data remnants.
- C. Physical destruction is only required for legacy magnetic tapes, whereas digital SSDs are safely sanitized via quick format.
- D. The Trusted Platform Module (TPM) on the SSD will encrypt the new random data, preserving the original keys in its registers.

---

## Question 3
A security architect discovers that a private platform key (PK) for a major hardware vendor's UEFI implementation was leaked online. Which of the following is the most direct consequence of this compromise on systems using this vendor's hardware?

- A. The Trusted Platform Module (TPM) will fail to generate hashes for Measured Boot.
- B. Attackers can sign malicious boot loaders or drivers that bypass the Secure Boot validation process.
- C. Systems will automatically quarantine themselves into a restricted VLAN during startup.
- D. Operating systems running on these motherboards will be forced into problem mode.

---

## Question 4
A defense contractor is building a secure facility for handling classified data. The designer suggests using unshielded twisted pair (UTP) cabling, relying solely on software encryption to protect data. As the CISSP, which countermeasure is most appropriate to mitigate electromagnetic emanation leakage and crosstalk?

- A. Replace UTP cabling with shielded twisted pair (STP) cables and utilize Faraday cages for high-emission devices.
- B. Implement a measured boot policy that shuts down the CPU if a change in signal frequency is detected.
- C. Rely on white noise generators to jam external GPS and GSM signals.
- D. Group display interfaces using legacy VGA cables to isolate analog video frequencies.

---

## Question 5
An enterprise is planning to implement Measured Boot across its workstation fleet. The security team wants to ensure that any workstation whose boot components have been modified is denied access to the corporate network. Which of the following describes how this policy must be enforced?

- A. The UEFI firmware will halt the system before the bootloader runs if measured hashes do not match.
- B. The Trusted Platform Module (TPM) will automatically lock the CPU registers in the supervisor state.
- C. An operating system or network agent must compare the TPM-recorded hashes against a baseline and assign the device to a quarantine VLAN if a mismatch is found.
- D. The system will disable the SSD microcontroller and force the system into a perpetual ready state.
