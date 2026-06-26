# CISSP Study Notes - Video 5: Keeping the Business Running

## BCP vs. DRP: The Core Differences
Understanding the distinction between Business Continuity Planning (BCP) and Disaster Recovery Planning (DRP) is critical for the CISSP exam. Both focus on resilience but operate at different scopes and phases of an emergency.

*   **Business Continuity Planning (BCP)**:
    *   **Scope**: Strategic, high-level, and business-focused.
    *   **Focus**: Centers on business processes, operations, and keeping the core business functions running during and immediately after a disruption.
    *   **Key Question**: How do we continue serving our customers and keep the business alive if a primary facility, system, or team becomes unavailable?
    *   **Continuity of Operations Plan (COOP)**: In some sectors, BCP is referred to as a COOP, which outlines the plan to keep the operations running during a disaster.
*   **Disaster Recovery Planning (DRP)**:
    *   **Scope**: Tactical, hands-on, and technically focused.
    *   **Focus**: Centers on the restoration of specific IT assets, systems, infrastructure, and data. It includes details like recovery sites, backup methods, fault tolerance, high-availability clustering, and system restoration procedures.
    *   **Key Question**: How do we rebuild, restore, and configure the systems that support the business processes?

---

## BCP Team Roles & Responsibilities
A successful BCP requires cross-functional collaboration. Each department brings a unique perspective and potential bias (e.g., claiming their department is the most critical).

*   **Senior Executive / Sponsor**:
    *   *Role*: Provides leadership, budget approvals, and acts as a tie-breaker when departments conflict over prioritization.
    *   *Exam Perspective*: Executive sponsorship is the most critical success factor for BCP. Executives hold the ultimate **liability** and **accountability** for protecting the business and its shareholders (especially in publicly traded companies).
*   **Operational Departments**:
    *   *Role*: Owners of core business processes that deliver services to clients. They are responsible for identifying critical business functions and executing local continuity steps.
*   **IT and Critical Support Services (IT, Facilities, Maintenance)**:
    *   *Role*: Responsible for the physical and logical upkeep of systems that support operational departments.
*   **Corporate Security**:
    *   *Role*: Handles physical security, asset safeguarding, and often acts as first responders to physical incidents.
*   **Legal Counsel**:
    *   *Role*: Ensures the plan aligns with legal, regulatory, and contractual obligations. Helps protect the company from compliance failures or shareholder lawsuits.
*   **Human Resources (HR)**:
    *   *Role*: Focuses on employee safety, health, benefits, and tracking personnel during an emergency.
*   **Public Relations (PR) / Communications**:
    *   *Role*: Manages communications with the public, media, and partners. It is critical to release verified information to control the narrative before sensationalist media reports it.

---

## The Economics of BCP
BCP involves significant financial and resource costs across three distinct phases:
1.  **Development**: High initial resource cost, particularly in personnel time spent conducting the Business Impact Analysis (BIA). Middle/senior management may resist losing workforce productivity, so the BCP team must build and defend a solid **business case** to senior management.
2.  **Testing, Maintenance, and Training**: Continuous operational cost of running simulations, keeping documentation updated, and training personnel.
3.  **Implementation**: Occurs only when a disaster strikes. This is the most expensive phase (involving recovery sites, equipment replacement, and overtime), but it enjoys the highest organizational alignment and the least resistance to budget approvals.

---

## Threat Classification
For BCP purposes, risks are classified into two broad categories to determine how controls are applied:
*   **Natural Risks**: Storms, earthquakes, mudslides, floods, volcanic eruptions, blizzards, and pandemics. These are uncontrollable and unpredictable.
*   **Man-Made (Human-Made) Risks**: Terrorist acts, civil unrest, war, theft, vandalism, fires/explosions (often caused by negligence), power outages, carrier disruptions, and economic difficulties. Humans can be instructed, warned, negotiated with, blamed, and held legally **liable**.

---

## Business Impact Analysis (BIA)
The BIA is the foundational phase of BCP. It performs asset **identification** to find critical business processes, systems, and data, determines their dependency chains, and estimates the impact of their disruption.

### Quantitative vs. Qualitative Assessment
*   **Quantitative Assessment (Numeric/Financial)**:
    *   Expresses risk in exact dollar values, percentages, and probabilities.
    *   Uses historical data, expert consultation, and insurance databases.
    *   *Formulae*:
        *   **Single Loss Expectancy (SLE)**: The financial loss from a single risk event.
            \\[\text{SLE} = \text{Asset Value (AV)} \times \text{Exposure Factor (EF)}\\]
            *(The Exposure Factor is the percentage of the asset lost; for example, a flood might only damage the bottom 20% of a server rack, meaning \\(EF = 0.20\\).)*
        *   **Annual Loss Expectancy (ALE)**: The expected financial loss per year for a specific risk.
            \\[\text{ALE} = \text{SLE} \times \text{Annual Rate of Occurrence (ARO)}\\]
            *(If a flood happens once every 5 years, the \\(ARO = 0.2\\).)*
*   **Qualitative Assessment (Subjective/Priority)**:
    *   Evaluates non-numerical impacts such as market reputation, customer trust, employee morale, and brand value.
    *   Results in prioritized rankings (e.g., High, Medium, Low).
    *   *Exam Perspective*: While quantitative data seems objective, it often relies on subjective estimates (e.g., predicting the exact probability of a breach). A qualitative approach is highly valuable for prioritizing risks that cannot easily be assigned a dollar value.

### BIA Time-Based Metrics
To guide recovery strategies, the BIA establishes critical time-based thresholds:
*   **Maximum Tolerable Downtime (MTD)**: The maximum amount of time a business process can be offline before causing irreversible or unacceptable harm to the organization.
*   **Recovery Time Objective (RTO)**: The target time to get the physical/logical systems, hardware, or servers back online and running. It does *not* mean the business process is functional (the system may still lack configuration, data, or application links).
*   **Work Recovery Time (WRT)**: The time needed to configure systems, restore databases, verify integrity, test connections, and resume the actual business workflow.
*   **Formula**:
    \\[\text{MTD} \ge \text{RTO} + \text{WRT}\\]
    *The sum of RTO and WRT must not exceed the MTD.*
*   **Recovery Point Objective (RPO)**: The maximum tolerable data loss measured in time. It determines the frequency of backups. For example, if backups are taken every 15 minutes, the RPO is 15 minutes (meaning the company can tolerate losing a maximum of 15 minutes of transaction data).

---

## BCP Documentation
A BCP must be thoroughly documented to ensure it can be executed even if the key team leaders are unavailable.
*   **Continuity Planning Goals**: High-level statements of what the plan aims to achieve (e.g., "Keep the website and retail portal online").
*   **Statement of Importance**: A letter/email signed by the CEO or senior executives highlighting the BCP's significance, ensuring staff take it seriously.
*   **Statement of Priorities**: A ranked list of critical business functions. *Note*: This list is strictly for emergencies and must not be used to influence regular operational decisions like salaries or layoffs.
*   **Statement of Organizational Responsibility**: Outlines the behavior and duties expected of all employees during a crisis.
*   **Statement of Urgency and Timing**: Outlines the project timeline and implementation schedule.
*   **Data Storage and Backup Policies**: Defines where data is stored (digital, physical, cloud) and how backups are managed. Implementing Data Loss Prevention (DLP) and data classification solutions helps in locating and securing critical data beforehand.
*   **Response Guidelines**: Steps for the first employees who witness an emergency (evacuation, reporting, contacting emergency services).

---

## BCP Maintenance & Testing
*   **Versioning and Control**: Always use version control. Archive or destroy outdated versions of the BCP to prevent employees from following obsolete procedures in a crisis.
*   **Review Cycle**: Review the BCP regularly to verify that listed personnel are still with the company and contact information is current.
*   **Exercises**: Conduct regular testing (tabletop exercises, simulations, walkthroughs) to train staff, verify roles, and ensure the plan works in practice.

---

## CISSP Exam Tips: The Manager's Perspective
*   **People First**: Safety of human life is always the absolute #1 priority in any CISSP scenario. Food, water, shelter, and safe evacuation are paramount.
*   **Executive Sponsorship**: You cannot proceed with a BCP without the green light and explicit support from senior management.
*   **RTO + WRT <= MTD**: Understand the math. The business process is not running when the server is just turned on; it requires configuration and testing (WRT).
*   **RPO defines backups**: If a question asks how to meet a short RPO, the answer will involve increasing backup frequency (e.g., replication, mirroring, journaling).
