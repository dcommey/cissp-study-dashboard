# CISSP Study Notes: Investigations and Ethics

Investigations and ethics govern how security professionals handle policy violations, digital forensics, legal proceedings, and professional conduct.

---

## 1. Investigation Types

When a security **incident** or **breach** occurs, the organization must conduct an investigation (**incident**, **breach**). Investigations are classified into four main categories:

1. **Administrative / Operational Investigations**: Internal reviews focused on policy violations, technical troubleshooting, or **operational** issues. These are governed by internal company **policy** and standards (**operational**, **policy**).
2. **Criminal Investigations**: Conducted by law enforcement to investigate violations of criminal law. They require a very high standard of proof and strict adherence to evidence procedures.
3. **Civil Investigations**: Conducted by internal staff or external consultants on behalf of legal teams to gather evidence for disputes between two private parties in civil court.
4. **Regulatory Investigations**: Conducted by government bodies to investigate violations of administrative law.
5. **Industry Standards-Based Investigations**: Non-governmental reviews to verify compliance with industry rules, such as verifying adherence to the Payment Card Industry Data Security **Standard** (**PCI** **DSS**) (**standard**, **PCI**, **DSS**).

---

## 2. E-Discovery and Electronically Stored Information (ESI)

Electronic Discovery (e-discovery) is the process of identifying, collecting, and producing Electronically Stored Information (**ESI**) for use as evidence in legal cases (**ESI**).

### Electronic Discovery Reference Model (EDRM)
The **EDRM** is a 9-stage framework used to manage e-discovery (**EDRM**):
1. **Information Governance**: Ensuring data is well-organized and managed before e-discovery starts (**governance**).
2. **Identification**: Locating potential sources of relevant **ESI** (**identification**).
3. **Preservation**: Protecting original data from **alteration** or **destruction** (**alteration**, **destruction**).
4. **Collection**: Gathering data centrally in a forensically sound manner.
5. **Processing**: Filtering out irrelevant files to reduce size.
6. **Review**: Examining data to determine relevance and legal privilege.
7. **Analysis**: Deep inspection of data (e.g., email headers, **SQL** transaction logs) (**SQL**).
8. **Production**: Formatting and delivering the evidence to opposing counsel.
9. **Presentation**: Displaying the evidence in court to judges and witnesses.

---

## 3. Evidence Admissibility and Forensics

Evidence must be relevant, reliable, and legally competent (obtained legally without violating rights) to be admissible in court.
* **Evidence Categories**:
  * *Real Evidence*: Physical objects (e.g., a server, an **SSD** drive, or a mobile **GPS** tracker) (**SSD**, **GPS**).
  * *Documentary Evidence*: Written or printed logs and records. Under the *best evidence rule*, courts prefer the original document. Under the *parole evidence rule*, verbal agreements cannot contradict a written contract.
  * *Testimonial Evidence*: Verbal statements by witnesses. Witnesses must avoid *hearsay* (testifying to what someone else said). However, the *business records exception* allows computer logs to be admitted if they are collected as a routine business practice.
  * *Demonstrative Evidence*: Charts, flowcharts, or diagrams used to explain technical concepts (e.g., explaining a routing protocol) to the jury.
* **Chain of Custody**: A detailed log documenting everyone who handled, accessed, or stored physical evidence. It must record:
  * Description of the item.
  * Time, date, and exact location of collection.
  * Name of the collector (**owner** or investigator) (**owner**).
  * Signatures of every person taking custody.
  * *Unbroken Sequence*: Any gap in this log can invalidate the evidence.
* **Forensic Data Collection**:
  * **Original Integrity**: Never perform analysis on live systems or write directly to evidence media.
  * **Write Blockers**: Hardware or software devices that prevent the forensic workstation from modifying, updating timestamps, or writing data to the target media (e.g., hard drive or **SSD**).
  * **Imaging**: Creating a bit-stream forensic copy of the original disk, and calculating a hash (MD5/SHA) to verify integrity.
  * **Volatility Order**: Collect data starting from the most volatile (CPU cache, register values, RAM memory) to the least volatile (hard drives, backup tapes).
  * **Live System Memory Analysis**: Capturing RAM dumps to analyze active malware or keys. Note that running dump scripts will inevitably write instructions to memory, altering its state. System power-pulls are sometimes preferred over clean shutdowns to prevent trigger scripts from running and wiping cache files.
  * **Network Analysis**: Capturing network traffic using mirrored SPAN ports or network taps. Since live traffic is not saved, forensic teams must rely on network logging, **accounting**, and **IDS** / **IPS** records (**accounting**).

---

## 4. Threat Motivations and Advanced Persistent Threats (APTs)

Understanding why attackers target organizations helps refine **mitigation** and incident response plans.
* **Threat Classifications**:
  * *Military and Intelligence*: Aimed at national security data.
  * *Business / Espionage*: Aimed at stealing competitor trade secrets (e.g., corporate source code or **kfc**'s secret recipe) (**kfc**).
  * *Financial Gain*: The most common corporate threat; credit card theft, billing fraud, ransomware (which impacts data **availability** for ransom).
  * *Grudge / Revenge*: Disgruntled current or former employees (**user** or administrator) seeking to cause data **destruction**, reputational harm, or system downtime (**user**).
  * *Thrill / Script Kiddies*: Inexperienced actors seeking bragging rights using pre-built tools.
  * *Hacktivism*: Politically or socially motivated actions (e.g., defacing sites, DDoS).
  * *Suicide Hackers*: Actors who launch attacks without covering their tracks, unconcerned with prosecution.
* **Advanced Persistent Threats (APTs)**: Well-funded, highly skilled groups (**APT**) acting on behalf of nation-states or organized crime, using custom tools to bypass **technical**, **physical**, and **administrative** controls (**APT**, **technical**, **physical**, **administrative**).

---

## 5. Professional and Business Ethics

Ethics serve as a code of conduct for professionals managing sensitive networks.
* **(ISC)² Code of Ethics**: CISSP candidates must sign and adhere to the **ISC** code of ethics (**ISC**, **CISSP**).
  * **Canons (In Prioritized Order)**:
    1. *Protect society, the common good, necessary public trust and infrastructure.*
    2. *Act honorably, honestly, justly, responsibly, and legally.*
    3. *Provide diligent and competent service to principals (employers).*
    4. *Advance and protect the profession.*
  * *Filing Complaints*: Anyone can complain about Canons 1 & 2. Only employers can complain about Canon 3. Only other **ISC** certified professionals can complain about Canon 4.
* **RFC 1087 (Ethics and the Internet)**: An internet **RFC** detailing unethical internet activities, including unauthorized access, wasting resources, compromising data integrity, and violating **user** privacy (**RFC**).
* **10 Commandments of Computer Ethics**: Developed by the Computer Ethics Institute; emphasizes doing no harm, respecting intellectual property, and acting responsibly.

---

## 6. What to Remember for the Exam (Manager/Governance Perspective)

* **Evidence is King**: Adherence to the chain of custody and forensic collection rules (like using write-blockers) is mandatory to ensure evidence admissibility.
* **Legal and HR Collaboration**: Administrative investigations must involve human resources, legal, and executive **management** before taking disciplinary action.
* **(ISC)² Canon Priority**: Always prioritize the canons sequentially. Protecting society and infrastructure (Canon 1) always outranks the interests of your employer (Canon 3).
* **Hacking Back**: Never retaliate or hack back, as this represents a criminal offense and increases the organization's legal liability **exposure** (**exposure**).
