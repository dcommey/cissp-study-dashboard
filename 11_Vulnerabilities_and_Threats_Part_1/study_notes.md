# CISSP Study Notes - Video 11: Vulnerabilities and Threats Part 1

## Introduction to Computer Architecture and Security
Security is only as strong as its weakest link. In computing systems, vulnerabilities can be found in every hardware component, peripheral interface, and communication channel. At a **logical** level (focusing on system design, purpose, and behavior rather than physical transistors), modern computer architecture provides mechanisms to isolate resources and enforce a security **policy**. However, system complexity increases potential vulnerabilities, making thorough security testing and formal verification essential.

---

## CPU Execution and Isolation Mechanisms
The **CPU** (Central Processing Unit) is the "brain" of the computer, performing logic, calculations, and moving data between registers and system **RAM**.

### Parallelism and Multitasking
Historically, CPUs executed one instruction at a time. Modern systems achieve concurrent execution via:
*   **Multitasking**: The CPU switching between different tasks/programs very quickly.
*   **Multi-programming**: The operating system switching between programs to execute instructions concurrently.
*   **Multi-threading**: Splitting a single program into smaller, concurrent execution paths (threads) (e.g., rendering a **GUI** in one thread while streaming network packets in another).
*   **Multi-processing**: Utilizing multiple independent CPUs that may assign affinity or preference for certain code execution.
*   **Multi-core Processing**: Integrating multiple processing cores on a single physical chip (common in modern laptops, phones, and wearables).

### CPU Protection Rings
Operating systems use hierarchical protection rings to enforce **logical** boundaries and restrict unauthorized access:
*   **Ring 0 (Kernel Mode)**: The most privileged and trusted ring where the core OS kernel lives. It has unrestricted access to hardware, memory, and devices. A security **incident** (such as the Microsoft and Crowdstrike driver crash) in Ring 0 can bring down the entire system.
*   **Rings 1 & 2 (OS Services & Device Drivers)**: House less critical OS services, file systems, network protocols, and input/output drivers.
*   **Ring 3 (User Space / Problem State)**: Where end-**user** applications and office software execute. It runs in a restricted execution state called the "problem state" because untrusted code or a **user** error can cause stability issues. If an application in Ring 3 crashes, it does not compromise the kernel.

---

## Operating System States and Scheduling
Processes run through a lifecycle managed by the OS scheduler:
1.  **Running**: The program currently occupies the **CPU** for its allotted time slice.
2.  **Ready**: The program is in the queue, waiting for its turn to run.
3.  **Waiting**: The program voluntarily relinquishes the **CPU** to wait for an input/output (I/O) operation (like a keystroke or network packet) to complete.
4.  **Stopped**: The process terminates and releases all its resources.
5.  **Supervisor State**: A privileged state where a program requests the OS to perform high-privilege actions (like editing a system security **policy** or configuration) through mechanisms like `sudo` or "run as administrator."

---

## Memory Architecture and Hierarchy
Computer memory ranges from small, ultra-fast volatile registers to large, slower non-volatile secondary storage. Ensuring the confidentiality, integrity, and availability (**CIA** triad) of data across these storage tiers is paramount.

### Read-Only Memory (ROM) and Flash
*   **ROM**: Hardwired non-volatile memory containing core system boot instructions. It runs the **post** (Power-On Self-Test) to initialize system components (like checking graphics cards in a **PCI** Express slot) before loading the OS.
*   **PROM** (Programmable ROM): Written once by the manufacturer and cannot be modified.
*   **EEPROM** (Electrically Erasable PROM) & Flash: Can be erased and rewritten electrically. Flash memory is a faster subcategory of EEPROM used in thumb drives, memory cards, **SSD** (Solid State Drive) units, or **RAID** controllers.

### Random Access Memory (RAM)
*   **RAM**: Slower than registers but holds active program instructions and data.
*   **DRAM** (Dynamic RAM): The primary memory of a computer, requiring periodic electrical refreshes to retain data.
*   **SRAM** (Static RAM): Uses flip-flop switches, does not require refreshing, and is much faster and more expensive (used for CPU L1/L2/L3 cache).
*   **Persistent Memory (PMem)**: A hybrid of flash and RAM that retains its state even after power loss, which is highly beneficial for forensics and **recovery** operations.
*   **Registers**: Extremely fast, small, and volatile memory cells located directly inside the CPU core.

### Virtual Memory and Secondary Storage
*   **Virtual Memory**: The OS maps physical memory addresses to virtual spaces, giving each application the illusion of having exclusive access to the full system memory.
*   **Paging/Swapping**: When RAM is full, the OS writes memory pages to a page file on secondary storage (magnetic disks or **SSD**). This causes a performance hit but prevents out-of-memory crashes.

### Memory Addressing Modes
1.  **Register Addressing**: Direct access to data stored within a CPU register (e.g., using a specific register like **EAX** in x86 CPUs).
2.  **Immediate Addressing**: The data is supplied as a constant value directly inside the instruction (e.g., `ADD 5`).
3.  **Direct Addressing**: The instruction specifies the RAM address containing the data, restricted to the same memory page.
4.  **Indirect Addressing**: The instruction points to a memory address which contains a pointer to another address where the target data is stored.
5.  **Base plus Offset**: Adds a base register value to an offset value to locate data in arrays, lists, or buffers.

---

## Storage and Device Security Risks
*   **Data Remanence**: Data remains on magnetic or flash media after standard deletion or formatting. Sanitizing an **SSD** is difficult because the onboard microcontroller manages wear-leveling. Senior **management** should ensure SSDs are physically destroyed (**physical** destruction) or sanitized using manufacturer-specific tools.
*   **Physical Theft**: Firewalls and **authentication** cannot protect data if a drive is stolen. Safeguards include disk encryption and **physical** access controls.
*   **Cold Boot Attacks**: A specialized physical attack where a system is hard-reset, and the transient contents of the volatile **RAM** are dumped to retrieve encryption keys.
*   **Emanation Security (TEMPEST)**: Devices emit electronic and radio frequency signals (emanations) during operation (e.g., **GPS**, **GSM**, **NFC** wireless signals). Attackers can capture these signals to reconstruct keypresses or data transfers from unshielded cables (like older **VGA** cables vs. modern digital **HDMI** or USB-C interfaces).
    *   *Countermeasures*: Faraday cages (metal mesh shields blocking signals), white noise (jamming signals), and cable shielding (e.g., **STP** - Shielded Twisted Pair - rather than **UTP** - Unshielded Twisted Pair).
*   **High-Risk Peripherals**:
    *   *Printers*: Often optimized for usability rather than security, printers contain local hard drives storing historical documents, bypass network controls, and are susceptible to remote exploits.
    *   *Input Devices*: Wireless keyboards and mice can have their signals intercepted or be bugged with hardware keyloggers.
    *   *Modems*: Legacy analog modems introduce uncontrolled entry points bypassing firewalls and should be decommissioned immediately.
    *   *Displays*: Older **CRT** (Cathode Ray Tube) monitors leak much more electromagnetic radiation than modern **LCD**, **LED**, and **OLED** monitors, which are structurally less susceptible to emanation eavesdropping.

---

## Firmware Security
Firmware controls the basic operations of hardware before the operating system starts.
*   **BIOS** (Basic Input/Output System): Obsolete, legacy firmware with support only for small drives, slow boot times, no mouse support, and no security features.
*   **UEFI** (Unified Extensible Firmware Interface): Modern replacement for BIOS with mouse support, faster boot times, and robust security features:
    *   **Secure Boot**: Validates that the OS loader and system drivers are digitally signed by a trusted certificate authority before execution, preventing rootkits.
    *   **Measured Boot**: Computes cryptographic hashes of all boot components and stores them in the **TPM** (Trusted Platform Module) chip. This records the boot history for remote attestation without stopping the boot process. If a compromise is detected, an OS-level agent can place the system in a quarantine **VLAN** for remediation.

---

## CISSP Exam Tips: The Manager's Perspective
*   **System Integrity**: Organizations must establish a baseline security **policy** and enforce it using both **physical** and **logical** controls.
*   **Risk and Governance**: Senior **management** is **accountable** for device sanitization and ensuring the organization has a defined **standard** for hardware disposal to prevent data remanence leaks.
*   **Authentication and Auditing**: Ensure that administrative actions in supervisor mode require multi-factor **authentication** and are logged to support **incident** response and disaster **recovery** planning.
