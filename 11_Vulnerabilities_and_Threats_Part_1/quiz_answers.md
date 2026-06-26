# CISSP Practice Quiz Answers & Explanations - Video 11: Vulnerabilities and Threats Part 1

## Question 1
**Correct Answer: B**

**Explanation:**
*   **A is incorrect.** Applications in Ring 3 (user space) are restricted and isolated. If they fail or behave poorly, the operating system can simply terminate them; they cannot crash the system kernel.
*   **B is correct.** Ring 0 (Kernel Mode) has absolute privileges over system hardware and memory. A device driver (like an EDR agent kernel driver) loaded in Ring 0 shares the kernel's execution context. Any unhandled exception or software bug within this ring can cause a kernel panic (e.g., Blue Screen of Death) and crash the entire system.
*   **C is incorrect.** The TPM chip does not control CPU registers or Ring 0 code execution; it performs cryptographic operations and records measurements.
*   **D is incorrect.** Deadlocks do not typically trigger an OS crash but rather cause processes to hang. A buggy driver crash is a Ring 0 exception, not a scheduler deadlock.

---

## Question 2
**Correct Answer: A**

**Explanation:**
*   **A is correct.** SSDs use complex internal flash translation layers (FTL) and microcontrollers that manage wear-leveling (spreading writes to avoid wearing out blocks), bad-block reallocation, and over-provisioned storage. When software tries to overwrite specific files or sectors, the FTL redirects writes to different physical sectors. Standard software overwrites leave historical data remnants in unmapped or bad blocks. Physical destruction (shredding) or specialized cryptographic secure erase tools are required.
*   **B is incorrect.** Degaussing applies a strong magnetic field to destroy data on magnetic media (tapes, hard drives). It has no effect on flash-based solid-state storage.
*   **C is incorrect.** Physical destruction or advanced vendor-specific commands are necessary for SSDs; quick formatting merely deletes the file table pointers without wiping the data.
*   **D is incorrect.** The TPM chip does not encrypt standard SSD sectors; disk-level controller encryption or software encryption manages sector encryption.

---

## Question 3
**Correct Answer: B**

**Explanation:**
*   **A is incorrect.** Measured boot uses the TPM to record hashes of whatever is loaded. A compromised Platform Key does not disable TPM hashing capability.
*   **B is correct.** Secure Boot relies on public key cryptography to ensure that only trusted, signed bootloaders and drivers are loaded. The UEFI Platform Key (PK) represents the root of trust for the motherboard firmware. If the private PK is compromised, attackers can sign malicious bootloaders (such as bootkits) or drivers, which the firmware will trust and load, bypassing the Secure Boot defense entirely.
*   **C is incorrect.** UEFI does not contain built-in network access control policies; network isolation is performed by OS-level or network-level security components.
*   **D is incorrect.** Problem mode (Ring 3/user space) is a logical execution level. Compromising the UEFI key does not force the OS into problem mode.

---

## Question 4
**Correct Answer: A**

**Explanation:**
*   **A is correct.** Shielded Twisted Pair (STP) cabling contains foil wrapping that prevents electromagnetic radiations from leaking and blocks external interference (crosstalk). Faraday cages provide physical shielding that blocks RF and electrical emanations. These are standard countermeasures defined under TEMPEST.
*   **B is incorrect.** Measured boot is a firmware validation control, not a physical shield to prevent electromagnetic radiation or cabling signal leakage.
*   **C is incorrect.** White noise generators are used to mask acoustic or electromagnetic signals inside a controlled area, but jamming external GPS/GSM signals is illegal in many jurisdictions and does not protect data in UTP cables.
*   **D is incorrect.** VGA is a legacy analog display standard that emits heavy electromagnetic radiation, making it highly vulnerable to emanation eavesdropping. Modern digital interfaces (HDMI/DisplayPort) are much more secure.

---

## Question 5
**Correct Answer: C**

**Explanation:**
*   **A is incorrect.** Secure Boot halts execution if a signature is invalid. Measured Boot, however, does not halt the boot process if measurements differ; it simply records the hashes.
*   **B is incorrect.** The TPM stores measurement values in Platform Configuration Registers (PCRs); it cannot lock CPU registers or control execution states.
*   **C is correct.** Measured Boot is a detective control. The UEFI firmware hashes boot components and stores them in the TPM. During or after boot, a network or security agent (such as a Network Access Control client) reads these TPM measurements, compares them against a trusted baseline, and applies network-level policy (e.g., placing the system in a quarantine VLAN if there is a mismatch).
*   **D is incorrect.** Out-of-spec boot hashes do not trigger hardware disablement of the SSD microcontroller, nor do they force the OS scheduler into a ready state.
