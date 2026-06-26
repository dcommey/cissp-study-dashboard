# CISSP Study Notes - Video 13: Vulnerabilities and Threats Part 3

## Microservices and Service-Oriented Architecture (SOA)
Modern software development has evolved from monolithic blocks of code to modular, distributed designs.
*   **SOA** (Service-Oriented Architecture): An architectural pattern where business processes are mapped to independent services (e.g., HR, invoicing).
*   **Microservices**: A smaller, highly modular evolution of SOA. They function like **lego** bricks—independent, predictable components designed to perform single, small-scale functions (e.g., image resizing or file transfer).
    *   *Communication*: Microservices communicate via lightweight **API** (Application Programming Interface) endpoints or messaging queues using standard protocols like **HTTP**.
    *   *Independent Modules*: Updating an application, such as adding **MFA** (Multi-Factor Authentication) to an **authentication** service, only requires redeploying that single container rather than compiling the whole application.
    *   *Diversity*: Microservices support development diversity (not to be confused with corporate **DEI**), allowing one module to be written in Java, another in C, another in **net** (dotNET), and another in Python, as long as they can communicate.
    *   *Container Runtimes*: Microservices are packaged in standardized container runtimes such as Docker, **LXC** (Linux Containers), **RKT** (Rocket), Cri-o, and Containerd, orchestrated using Kubernetes.

---

## Infrastructure as Code (IaC) and Declarative Architectures
*   **IAC** (Infrastructure as Code): Abstracting physical or virtual resources into code configuration files. IaC tools deploy, update, and manage resources automatically.
*   **Declarative vs. Procedural**:
    *   *Declarative*: Defining the final desired end state of the infrastructure (used by tools like Terraform). The engine determines the optimal steps and execution order.
    *   *Procedural*: Writing step-by-step instructions (like bash or PowerShell scripts) executed in a specific sequence.
*   **Immutable Infrastructure**: Configured servers (virtual machines or containers) are never modified after deployment. Updates are handled by deploying a fresh server and decommissioning the old one (managed via tools like AWS CloudFormation, Azure **ARM** templates, or Ansible). This eliminates "configuration drift" and uses the "cattle, not pets" philosophy.

---

## Software-Defined Virtualization and Cloud Computing
Virtualization is the logical abstraction of compute, network, and storage from physical hardware.
*   **SDN** (Software-Defined Networking): Abstraction of the network control plane (the routing/switching brain) from the physical forwarding plane (fast, basic switches), providing centralized management and dynamic configuration.
*   **SDS** (Software-Defined Storage): Software-driven storage virtualization (e.g., vSAN) that pools multiple storage devices into a single logical entity, independent of physical hardware details.
*   **Hypervisors**: Operating systems mediating access between guest virtual machines and physical hardware.
    *   *Type 1 (Bare-Metal)*: Installed directly on raw hardware (e.g., VMware ESXi, Hyper-V Server).
    *   *Type 2 (Hosted)*: Installed on top of an existing host OS (e.g., VirtualBox, VMware Workstation).
*   **Cloud Computing**: virtualized services delivered over the internet with pay-per-use, elasticity (scaling resources up/down on demand), and scalability (handling increased workloads). Major cloud providers include **AWS** (Amazon Web Services), **GCP** (Google Cloud Platform), **OCI** (Oracle Cloud Infrastructure), and IBM.
*   **Serverless (Function as a Service - FaaS)**: A platform where a developer uploads code (a function) that is triggered by an event, executed inside a short-lived container, and immediately shut down. Users are only billed for execution time (e.g., AWS Lambda, **IBM** Cloud Functions, Azure Functions). Databases are hosted externally, as FaaS is stateless.

---

## Virtual Desktops and End-User Isolation
*   **VDI** (Virtual Desktop Infrastructure) / **VDE** (Virtual Desktop Environment): Hosting workstation operating systems as virtual machines in a centralized data center.
*   *Clients*:
    *   *Thin Client*: A low-power hardware terminal containing minimal **CPU** and **RAM** resources, designed solely to establish a remote session.
    *   *Thick Client*: A device with local computing power and limited local apps, but still using a remote connection for primary work.
*   *Desktops*:
    *   *Persistent*: User settings, files, and wallpapers are saved and persist across reboots.
    *   *Non-Persistent*: Identical, static desktops that wipe all user changes upon logout, returning to a clean state.
*   *Security Benefits*: Centralizes security controls, making it easier to apply **DLP** (Data Loss Prevention) policies, monitor network traffic, perform malware scans, and wipe infected hosts.

---

## Virtualization Security Risks and Control Typology
*   **VM Sprawl**: Deploying more virtual machines than needed, often for a **POC** (Proof of Concept) or test environment, without formal tracking. Sprawl leads to out-of-date, unpatched VMs that present a critical network **vulnerability**.
*   **VM Escaping**: An exploit where an attacker in a guest OS breaches logical boundaries to access other VMs or the host hypervisor. This is a severe threat in multi-tenant environments.
*   **Shadow IT**: Users or business departments deploying hardware or software (like Dropbox or external Access Points) without the knowledge of the IT department or senior **management**. Shadow IT bypasses security controls and introduces severe security and **compliance** risks.
*   **Control Typology**:
    *   **logical** Controls: Enforcing container isolation, multi-factor authentication (**MFA**), strong **authentication**, and role-based **authorization** policies.
    *   **physical** Controls: Protecting physical hypervisor hosts and datacenters from physical intrusion or theft.
    *   **administrative** Controls: Establishing a comprehensive VM lifecycle **policy**, change management procedures, and staff training to prevent shadow IT and VM sprawl.

---

## CISSP Exam Tips: The Manager's Perspective
*   **Risk Management**: VM escaping breaches the **confidentiality** and **integrity** of multi-tenant hosts. Senior **management** must ensure hypervisor patches are applied immediately.
*   **Data Protection**: Implement **DLP** and enforce strict **authorization** rules to prevent data extraction from virtualized desktops.
*   **Availability**: A centralized VDI cluster represents a single point of failure. Ensure redundant internet paths are in place to guarantee system **availability** in the event of an outage or data **breach**.
