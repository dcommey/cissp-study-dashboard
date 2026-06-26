# CISSP Study Notes - Video 3: Risk Management

Risk Management is the process of identifying, assessing, and responding to threats to an organization's assets. It is the central framework under which all security controls are chosen and implemented.

---

## 1. Risk Assessment vs. Risk Response

Risk management is divided into two primary phases:
1.  **Risk Assessment**: The identification phase. We catalog assets, identify threats and vulnerabilities, evaluate their likelihood and impact, and assess the cost of countermeasures.
2.  **Risk Response**: The action phase. We select controls, perform a **business case** and cost-benefit analysis, and decide how to manage the identified risks. This requires **compliance** with business priorities, budgets, and available resources.

---

## 2. Key Terms & Relationships

*   **Asset**: A valuable resource owned by the company (data, hardware, reputation, personnel). 
    *   > [!IMPORTANT]
        > **Human Life is always the #1 Asset** to protect.
*   **Threat**: Any potential event or action that could harm an asset.
*   **Threat Agent / Threat Actor**: The active entity that carries out a threat (e.g., hacker, natural disaster, insider threat).
*   **Threat Vector**: The path, method, or route by which a threat actor carries out an attack (e.g., email phishing, physical access, social engineering).
*   **Vulnerability**: A weakness or flaw in a system, process, or control (e.g., software bug, weak password).
*   **Exposure**: The state of being at risk or vulnerable due to a known vulnerability.
*   **Risk**: The potential for loss or damage when a threat exploits a vulnerability. 
    \\[\text{Risk} = \text{Probability (Likelihood)} \times \text{Impact}\\]
*   **Security Control (Safeguard)**: A countermeasure implemented to reduce risk.
*   **Attack**: An active attempt by a threat actor to exploit a vulnerability.
*   **Breach**: A successful attack resulting in unauthorized access or damage.
*   **Security Incident**: An event that violates a company's security policy.
*   **Responsible vs. Accountable**: While multiple people (like security technicians) can be **responsible** for carrying out security tasks, senior management is ultimately **accountable** and liable for security outcomes.

---

## 3. Quantitative Risk Assessment (Formula-Based)

Quantitative analysis assigns real dollar/currency values to assets, threats, and losses. You must memorize these formulas:

### Calculations & Concepts
1.  **Asset Value (AV)**: The cost to replace the asset or the business revenue lost during its downtime.
2.  **Exposure Factor (EF)**: The percentage of the asset value lost in a single incident (ranges from 0% to 100%).
3.  **Single Loss Expectancy (SLE)**: The expected financial loss from a single occurrence of a threat.
    \\[\text{SLE} = \text{AV} \times \text{EF}\\]
4.  **Annual Rate of Occurrence (ARO)**: The estimated frequency a threat will occur in a year (e.g., 0.5 for once every two years).
5.  **Annualized Loss Expectancy (ALE)**: The expected financial loss from a threat over an entire year.
    \\[\text{ALE} = \text{SLE} \times \text{ARO}\\]

---

## 4. Qualitative Risk Assessment (Scenario-Based)

Qualitative analysis uses subjective scales (e.g., High, Medium, Low) based on gut feelings, scenarios, and expert opinions.
*   **Interviews & Surveys**: Gathering input from various departments to prevent bias.
*   **Delphi Technique**: An **anonymous** feedback and consensus-building method. It eliminates groupthink and peer pressure, allowing people to speak honestly.

---

## 5. Risk Response Options

*   **Mitigation (Reduction)**: Installing security controls to lower risk to an acceptable level (e.g., installing a firewall).
*   **Avoidance**: Stopping the activity or decommissioning the asset to reduce risk to **zero** (e.g., pulling the plug on a vulnerable public server).
*   **Transference (Sharing)**: Making the risk someone else's problem (e.g., purchasing cyber insurance or outsourcing operations to a third party). Note: **You can transfer liability/cost, but you cannot transfer reputational loss.**
*   **Acceptance**: Choosing to live with the risk because the cost of controls outweighs the potential loss. This leaves you with **residual risk**.
*   **Deterrence**: Implementing controls that discourage attackers (e.g., warning banners, visible security cameras, fences).
*   **Rejection (Negligence)**: Choosing to ignore the risk and pretending it doesn't exist. This is a severe failure of governance and due care.

---

## 6. Types of Risk

*   **Inherent Risk (Starting Risk)**: The starting risk level that exists naturally in the business environment/industry before any controls are applied.
*   **Total Risk**: The risk present if no security controls are implemented.
*   **Residual Risk**: The risk that remains *after* security controls have been implemented.
    \\[\text{Total Risk} - \text{Control Gap} = \text{Residual Risk}\\]

---

## 7. Security Control Classifications

Controls are categorized by **Type** (how they are defined) and **Function** (how they act).

### By Type
*   **Administrative (Managerial)**: Policies, procedures, awareness training, personnel management.
*   **Technical (Logical)**: Firewalls, encryption, authentication protocols, antivirus, IDS/IPS.
*   **Physical**: Gates, locks, badges, guards, CCTV, fire suppression.

### By Function
*   **Preventative (Preventive)**: Stops an attack before it occurs (e.g., lock, firewall block, encryption).
*   **Deterrent**: Discourages an attacker (e.g., warning sign, fake camera).
*   **Detective**: Identifies an attack while or after it happens (e.g., IDS, alarms, logs).
*   **Corrective**: Corrects the system back to normal after a minor failure or incident (e.g., automated door closer, anti-malware quarantine).
*   **Recovery**: Restores full functionality after a major disruption (e.g., backups, hot sites).
*   **Directive**: Directs human behavior to comply with policies (e.g., exit signs, written instructions).

---

## 8. Risk Maturity Model (RMM) Levels

Measures how mature an organization is in managing security risks:
1.  **Ad Hoc**: Chaotic, reactive firefighting. No formal process.
2.  **Preliminary**: Initial awareness of risk management; basic but incomplete processes.
3.  **Defined**: Formal, documented processes with clear roles and responsibilities.
4.  **Integrated**: Security is integrated into daily business activities and company culture.
5.  **Optimized**: Continuous refinement, heavily proactive, aligning security with business evolution.

---

## 9. Major Risk Frameworks & Standards

*   **Risk Frameworks**: High-level guidelines explaining how organizations should assess, respond to, and monitor risks.
*   **NIST Risk Management Framework (RMF) - SP 800-37**: A 7-step process:
    1. Prepare \\(\rightarrow\\) 2. Categorize \\(\rightarrow\\) 3. Select \\(\rightarrow\\) 4. Implement \\(\rightarrow\\) 5. Assess \\(\rightarrow\\) 6. Authorize \\(\rightarrow\\) 7. Monitor.
*   **NIST Cybersecurity Framework (CSF)**: 5 core functions:
    1. Identify \\(\rightarrow\\) 2. Protect \\(\rightarrow\\) 3. Detect \\(\rightarrow\\) 4. Respond \\(\rightarrow\\) 5. Recover.
*   **Supply Chain Risk Management (SCRM)**: Managing risks associated with third-party vendors, hardware/software sourcing, and warehousing to prevent importing vulnerabilities.
*   **Other Risk Frameworks**: Acronyms you may encounter include **COSO**, **ISACA**, **OCTAVE**, **FAIR**, and **TARA**.

---

## 10. Threat Modeling & Prioritization

*   **STRIDE** (Threat Classification): 
    *   **S**poofing (Threat to Authenticity)
    *   **T**ampering (Threat to Integrity)
    *   **R**epudiation (Threat to Non-repudiation)
    *   **I**nformation **Disclosure** (Threat to Confidentiality)
    *   **D**enial of Service (Threat to **Availability**)
    *   **E**levation of Privilege (Threat to Authorization)
*   **DREAD** (Subjective Rating): Damage potential, Reproducibility, Exploitability, Affected entities, Discoverability.
