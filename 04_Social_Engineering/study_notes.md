# CISSP Study Notes - Video 4: Social Engineering

Social Engineering is the practice of manipulating humans into performing actions or divesting confidential information. It is often referred to as **"hacking the human"** because it exploits human psychology rather than technical flaws. Humans lack technical controls like firewalls, encryption, or robust built-in **authentication** and **identification** systems, making them susceptible to manipulation.


---

## 1. Human Psychology & Influence Factors

Social engineers exploit basic human behaviors, cognitive biases, and human **vulnerability**:
*   **Impersonation**: Pretending to be someone else (e.g., IT support, executive, auditor, server **owner**) to gain trust.
*   **Likability & Familiarity**: Being friendly and building rapport to make the victim comfortable sharing sensitive details (e.g., security questions, passwords).
*   **Social Proof / Consensus**: Convincing a victim to do something because "everyone else is doing it" (e.g., "All other departments have updated their systems; you are the last one").
*   **Authority**: Posing as a figure of authority (e.g., police officer, CISO, CEO, technician) to demand compliance from employees and **management**.
*   **Scarcity & False Urgency**: Creating an artificial sense of urgency or limited-time offers to induce panic and force quick action without thinking (e.g., "Your account will be locked in 24 hours").

---

## 2. Physical Social Engineering

These attacks occur in the physical world and involve direct human movement:
*   **Dumpster Diving**: Searching through trash bins to retrieve discarded papers, contracts, invoices, memos, or credentials.
    *   *Mitigation*: Implement a policy requiring the use of **paper shredders** or secure shredding bins for all physical documents before disposal.
*   **Tailgating**: Sneaking into a secure area by closely following an authorized person through a door before it closes. The authorized user is unaware of this.
    *   *Mitigation*: Install physical controls like **turnstiles** or mantraps, and deploy security guards.
*   **Piggybacking**: Asking an authorized person to hold a door open (e.g., by posing as a delivery driver with full hands or an electrician). Unlike tailgating, the authorized user actively allows the person in due to helpfulness, violating security policy.
    *   *Mitigation*: User education and security awareness training regarding building entry policies.

---

## 3. Technical & Logical Social Engineering

These attacks use technology to target human behavior:
*   **Shoulder Surfing**: Watching a user's screen or keyboard to steal credentials, passwords, or PINs.
    *   *Mitigation*: Use privacy screens/foils, mask passwords with asterisks, and configure system terminals securely.
*   **Lunchtime Attack**: Accessing an unattended, unlocked computer while the user is away (e.g., lunch, fire drill).
    *   *Mitigation*: Configure automatic screen savers and short **computer lock timeouts** via group policy.
*   **Phishing**: Broad, untargeted emails or messages designed to steal credentials or download malware.
*   **Spear Phishing**: Highly targeted phishing campaigns directed at specific individuals, containing personalized info to appear trustworthy.
*   **Business Email Compromise (BEC)**: A type of spear phishing where an attacker compromises or spoofs a senior executive's email (CEO/CIO) to authorize financial transfers or release sensitive data.
*   **Quishing (QR Code Phishing)**: Hiding malicious links inside QR codes (e.g., placing fake QR stickers on restaurant menus or parking meters) which users scan blindly.
*   **Hoaxes**: False security alerts or virus warnings that cause panic, wasting resources or tricking users into downloading fake security software (snake oil).
*   **Email Prepending**: Adding "Re:" or "Fwd:" to email subjects to trick users into thinking it is a continuation of a trusted thread, or prepending headers to bypass spam filters.
*   **Pharming / DNS Farming**: Redirecting users from legitimate websites to malicious lookalikes, typically by compromising local host files, DHCP servers (running a rogue DHCP server), or DNS configurations.
*   **Typosquatting**: Registering domain names that look similar to real brand names but contain common typos (e.g., registering "apple" with one "p" or "google" with one "o").
*   **Watering Hole Attack**: Compromising a third-party website that the target company's employees frequently visit (e.g., a local lunch ordering website) to inject malware into the target network.
*   **Influence Campaigns**: Large-scale efforts using disinformation, propaganda, and fake news to shape public opinion or disrupt organizations, elections, or legal trials.

---

## 4. Mitigations & Best Practices

Since social engineering attacks human psychology, the most effective security control is **administrative/managerial** in nature:

*   **Security Awareness Training & Education**: Consistently training users to spot phishing, tailgating, and urgency cues. Review and update training materials periodically to match emerging threats.
*   **Trust, but Verify (Additional Verification)**: Encouraging a culture where users verify requests by calling back on a known number or using a secondary communication channel.
*   **Allowed Communications Policies**: Clearly defining what communication channels are acceptable (e.g., prohibiting invoices from being sent via instant messaging).
*   **Whistleblower & Reporting Policies**: Establishing a clear, simple procedure for reporting suspicious incidents to security teams without fear of repercussions.
*   **Phishing Campaigns & Simulations**: Running controlled, mock phishing attacks to test user preparedness and gather metrics.
*   **Gamification & Engagement**: Using achievements, rewards, and interactive modules to keep employees engaged in security learning.
*   **Kevin Mitnick's Books**: *The Art of Deception* and *The Art of Intrusion* are classic resources on this topic.
*   *Note*: Security policy enforcement must apply to all employees, and violations should be addressed with appropriate countermeasures and corrective training.
