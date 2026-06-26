# CISSP Practice Quiz - Video 13: Vulnerabilities and Threats Part 3

## Question 1
A security manager is reviewing a cloud host hosting multiple virtual machines for different client departments. A vulnerability scanner flags a high-severity flaw in the hypervisor that could allow an attacker in one guest OS to execute code directly on the physical host or access memory from neighboring guest VMs. What represents this risk and the best mitigations?

- A. Shadow IT; restrict all users to a non-persistent thin client.
- B. VM Sprawl; conduct a proof of concept (POC) configuration audit.
- C. VM Escaping; apply immediate hypervisor patches and isolate workloads based on data classification levels.
- D. Configuration drift; execute declarative ARM templates to reconstruct the container runtimes.

---

## Question 2
An audit of a large corporate virtualization environment reveals that over 35% of running virtual machines are undocumented, have no assigned owners, and have not received software patches for over nine months. Most of these VMs were deployed by developers for short-term testing or Proof of Concepts (POCs). Which administrative control would be most effective in preventing this condition in the future?

- A. Enforcing a strict VM lifecycle management policy that requires formal approvals and automatic expiration dates for all VM creations.
- B. Deploying a centralized Software-Defined Storage (SDS) fabric using a thin client model.
- C. Configuring the virtual networks with a declarative software-defined network (SDN) controller.
- D. Restricting developer access to non-persistent VDI environments.

---

## Question 3
A healthcare provider discovers that several remote nurses have been uploading sensitive patient files to a public, unapproved generative AI engine and a personal Dropbox account to assist with drafting report summaries. From a governance perspective, how should a CISSP classify this risk, and what is the best combination of controls to remediate it?

- A. Configuration drift; implement declarative IaC templates on public AWS servers.
- B. Shadow IT; implement administrative policies prohibiting unapproved tools, and deploy logical DLP (Data Loss Prevention) and CASB controls to block unauthorized uploads.
- C. VM escaping; utilize non-persistent VDI thin clients to host the generative AI service.
- D. Service-Oriented Architecture (SOA) vulnerability; force all APIs to require multi-factor authentication (MFA).

---

## Question 4
An enterprise web application deployed across multiple cloud environments starts experiencing random connection failures. Investigation reveals that several web servers in one cloud region have minor configuration differences (drift) because local administrators logged in directly to troubleshoot a previous issue. How should the team prevent this 'configuration drift' using Infrastructure as Code (IaC)?

- A. Adopt an immutable infrastructure model where direct server modifications are prohibited, and any configuration changes are applied by destroying and redeploying servers via IaC templates.
- B. Force all servers to utilize type 2 hypervisors on persistent storage disks.
- C. Use an Interface Definition Language (IDL) to rebuild the service mesh service by service.
- D. Implement physical locks on the cloud provider's dataservers.

---

## Question 5
A call center moves its entire workstation fleet of 1,500 thick clients to a centralized Virtual Desktop Infrastructure (VDI) hosted in a public cloud, allowing employees to connect using thin clients. During a regional internet outage, all call center agents are immediately unable to access their desktops. What represents the primary risk in this migration, and what is the best architectural mitigation?

- A. The threat of VM sprawl; implement non-persistent desktops with local RAM caching.
- B. The VDI cluster represents a single point of failure for system availability; implement redundant network connections with diverse geographic paths.
- C. Compliance risk from shadow IT; run the desktop VMs on type 2 hypervisors.
- D. Exposure of data in transit over HTTP; require all thin clients to use unencrypted L2TP tunnels.
