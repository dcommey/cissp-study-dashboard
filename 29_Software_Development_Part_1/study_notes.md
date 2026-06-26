# CISSP Study Notes: Software Development Part 1

## 1. Concepts Review

### Introduction to Software Development
Software development is essentially programming. In the context of cybersecurity and the CISSP exam, it is vital to understand that software development is a complex process. Historically, security has often been treated as an afterthought or a "patch" applied onto an insecure but functional application (often during the proof of concept or **POC** stage). However, integrating security controls into the system development life cycle (**SDLC**) from the very beginning is crucial. Writing code securely from the start prevents vulnerabilities, backdoors, and default accounts, and is far more cost-effective than attempting to remediate design flaws after release.

### Compilation vs. Interpretation & Runtime Environments
Computers operate fundamentally in binary machine language directly executed by the central processing unit (**CPU**).
- **Assembly Language**: A low-level programming language that is a human-readable representation of CPU instructions, using short text commands such as `add` (addition) and `jmp` (jump). These instructions are specific to each CPU architecture.
- **Compiled Languages** (e.g., C, C++, Java, C#): Source code is converted by a compiler into a standalone, OS-specific executable containing machine code. Java compiles source code into intermediate bytecode.
- **Runtime Environments**: Some languages require virtual execution environments to run. 
  - Java uses the Java Runtime Environment (**JRE**), which contains the Java Virtual Machine (**JVM**). This allows portability across OS platforms.
  - Microsoft's **.net** framework uses the Common Language Runtime (**CLR**).
  - Runtimes provide isolated execution sandboxes, exception handling, and memory management, reducing the impact if an application is compromised.
- **Interpreted / Scripting Languages** (e.g., Python, JavaScript, Bash): Code is distributed in its raw source format. An interpreter on the host system translates and executes the code line-by-line. Compiled code generally runs faster, but interpreted code is more visible, making hidden backdoors harder to conceal in plain sight.

### Object-Oriented Programming (OOP)
Object-Oriented Programming (OOP) is an abstraction approach that organizes code into logical blocks that represent real-world entities.
- **Class**: The blueprint or template for creating objects.
- **Object**: An instantiated instance of a class.
- **Method**: The action or behavior that an object can perform.
From a security perspective, each object operates as a "black box" where internal implementation details are hidden (encapsulation), and we only interact with its defined interface (inputs and outputs).

### Software Flaws and Input Validation
There is no bug-free or **vulnerability**-free software. Vulnerabilities are flaws in code that attackers exploit to compromise systems.
- **Input Validation**: This is the root of all security controls. Perfect input validation would prevent the vast majority of software-based attacks (such as **SQL** injection, cross-site scripting, buffer overflows, and denial of service).
  - Input validation means analyzing and accepting only expected characters, formats, and lengths.
  - Input validation must be performed on the server side because client-side validation can be bypassed by an attacker. However, client-side validation is still useful for reducing server load by catching simple user errors.

### Authentication & Session Management
- **Authentication**: Implementing strong **authentication** (passwords, MFA) should scale with the sensitivity of the data accessed. Rather than reinventing the wheel, applications should rely on established corporate systems like Active Directory or cloud-managed systems (e.g., **AWS** IAM).
- **Session Management**: Session IDs are unique secret tokens assigned after successful authentication. If compromised, they grant access just like a password. They must be transmitted securely and expired quickly.

### Exception and Error Handling
Applications must handle exceptions gracefully. 
- **Controlled Errors**: Do not leave the application in an unknown or insecure state.
- **Information Leakage**: Production applications should never output detailed debugging information (like stack traces) to the **user**, as this leaks internal architecture details to potential attackers.

### Fail-Safe and Fail-Secure States
When a component fails, the system must transition to a predictable state:
- **Fail Secure** (or Fail-Safe in some contexts): The system blocks access when a control is down. For example, if a firewall fails or a operating system encounters a kernel panic (blue screen of death), it stops processing traffic/operations to prevent insecure states. This preserves **confidentiality** and **integrity**.
- **Fail Open**: The system allows access or bypasses controls when they are unavailable. For example, in a fire emergency, automatic **physical** doors lose power and fail open to allow people to evacuate safely.
- In security operations, balancing **physical** safety (human life) with **logical** security determines whether we design a system to fail open or fail secure.

### Software Development Life Cycle (SDLC) Phases
An SDLC provides structure to project management and ensures security is considered throughout:
1. **Conceptual Definition**: Defining high-level goals, identifying data classification.
2. **Functional Requirements**: Designing how modules interact, detailing inputs and outputs.
3. **Security Control Specifications**: Focusing on authentication, confidentiality, integrity, and audit trails.
4. **Design Review**: Reviewing the architecture on paper.
5. **Coding**: Writing the code, performing code reviews.
6. **Testing**: Running unit tests, regression testing (making sure new code doesn't break old code), stress testing, and User Acceptance Testing (**UAT** or **acceptance** testing), which might involve a limited deployment or a proof of concept (**POC**).
7. **Maintenance**: Production monitoring, bug fixing, patching security flaws, and release notes.

### Software Development Methodologies
- **Chaos**: Coding without a plan, fixing bugs on the fly, with minimal documentation.
- **Waterfall**: A sequential model where each phase must be fully completed before moving to the next. It is highly rigid and requires perfect planning.
- **Agile**: An iterative mindset focusing on team interaction, customer collaboration, and delivering a Minimum Viable Product (**mvp**) quickly. Includes frameworks like:
  - **Scrum**: Daily huddles, sprints.
  - **Kanban**: Visual workflow boards.
  - **Extreme Programming** (XP): Focus on pair programming and high code quality.
- **Iterative**: Developing a project chunk-by-chunk and adding features sequentially.
- **Spiral**: A combination of waterfall and iterative approaches, focusing heavily on risk analysis and progressive releases.

### Capability Maturity Models
Maturity frameworks evaluate the maturity of the software development *process* itself (not the software itself):
- **CMM** (Capability Maturity Model) and **CMMI** (Capability Maturity Model Integration):
  1. *Initial*: Chaotic, undocumented, "free-for-all".
  2. *Repeatable*: Basic project management processes in place.
  3. *Defined*: Processes are documented, standardized, and integrated into the organization.
  4. *Managed* / *Quantitatively Managed*: Processes are measured using statistical and quantitative techniques (quality management).
  5. *Optimizing*: Continuous process improvement and optimization.
- **SAMM** (Software Assurance Maturity Model): Maintained by **OWASP**, it is a security-specific model to guide proactive software security. It consists of five business functions:
  1. **Governance**: Strategy, metrics, policy, and education/training.
  2. *Design*: Threat modeling, security requirements, architecture.
  3. *Implementation*: Secure build, secure deployment, defect management.
  4. *Verification*: Architecture review, security testing.
  5. *Operations*: Issue management, environment hardening, operational enablement.

### Change and Configuration Management
Change management is a formal process ensuring that updates do not introduce new vulnerabilities or break existing functionality. It consists of:
1. **Request Control**: Users, developers, or owners request a change. **Management** performs a cost-benefit analysis to decide if it is a priority.
2. **Change Control**: Developers analyze the change, implement it in a separate test environment, document it, and run regression tests to ensure **integrity**.
3. **Release Control**: Verifies that no debug hooks, backdoors, or hardcoded accounts remain. User acceptance testing (**UAT**) happens here (e.g., blue-green deployments) to ensure the system is ready before deployment. A version control system must track releases.

---

## 2. Key Terms and Definitions

- **SDLC**: Software Development Life Cycle; the framework defining tasks performed at each step in the software development process.
- **CPU**: Central Processing Unit; the primary processor executing binary machine instructions.
- **add**: An assembly language command that instructs the CPU to perform an addition.
- **jmp**: An assembly language command that instructs the CPU to jump to a different memory address.
- **JRE**: Java Runtime Environment; the software environment required to execute Java bytecode.
- **JVM**: Java Virtual Machine; the engine within the JRE that runs compiled Java bytecode.
- **net**: Microsoft's software framework for building and running applications.
- **CLR**: Common Language Runtime; the virtual machine component of Microsoft's .NET framework.
- **POC**: Proof of Concept; a realization of a method or idea to demonstrate its feasibility (often used in early testing or security research).
- **SQL**: Structured Query Language; used for managing database queries. SQL injection is a critical input validation vulnerability.
- **vulnerability**: A flaw or weakness in system design, implementation, or operation that could be exploited.
- **authentication**: The process of verifying the identity of a user, process, or device.
- **physical**: Security controls related to tangible barriers (e.g., physical doors that fail open during power failure).
- **logical**: Logical (or technical) security controls applied in software (e.g., encryption, firewalls).
- **confidentiality**: Ensuring that information is accessible only to those authorized to have access.
- **integrity**: Safeguarding the accuracy and completeness of information and software.
- **UAT**: User Acceptance Testing; the final phase of software testing where real users test the software in real-world scenarios to ensure it is acceptable.
- **acceptance**: The formal sign-off or validation (such as user acceptance testing) that software meets requirements.
- **mvp**: Minimum Viable Product; the version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort.
- **AWS**: Amazon Web Services; a cloud computing platform.
- **chaos**: A development approach with no formal planning or structure.
- **maturity**: The degree of sophistication, definition, and optimization of organizational processes.
- **CMM**: Capability Maturity Model; a model for assessing the maturity of an organization's software development processes.
- **CMMI**: Capability Maturity Model Integration; an updated model that integrates multiple capability areas to assess process maturity.
- **OWASP**: Open Worldwide Application Security Project; a non-profit foundation dedicated to improving software security.
- **SAMM**: Software Assurance Maturity Model (OWASP SAMM); a framework to help organizations formulate and implement a strategy for software security.
- **governance**: The framework of rules, relationships, systems, and processes by which an organization is directed and controlled (under OWASP SAMM, this dictates policies and training).
- **management**: The process of leading, planning, and organizing resources (e.g., change management, log management).
- **user**: Any individual or entity that interacts with the application or system.
- **responsible**: Having an obligation to act or execute a task (e.g., security is everyone's responsibility).

---

## 3. What to Remember (Exam Tips)

- **Governance Perspective**: Security is not a technical patch; it is a **governance** and management responsibility. It must be built into the **SDLC** from the conceptual phase, rather than patched at the **POC** or maintenance phase.
- **Human Life First**: In conflicts between physical safety and logical security, physical safety always wins. Systems protecting human lives (such as physical doors) must **fail open**, whereas software processing sensitive data must **fail secure** to protect **confidentiality** and **integrity**.
- **Input Validation**: If asked about the single most critical coding practice to prevent application-layer attacks, the answer is **input validation** (specifically on the server-side, though client-side is useful to manage server workload).
- **Process Maturity (CMM/CMMI vs SAMM)**: Know that CMM and CMMI measure the maturity of the software development *process*, while OWASP SAMM is specifically tailored to measuring *software security assurance*. Level 4 of CMMI is quantitatively managed, while Level 5 is optimizing.
- **Change Management Isolation**: Never push changes directly to production. The three phases of change management—request control, change control (coding and regression testing), and release control (UAT and security checks)—must be strictly followed to ensure that changes do not compromise the **integrity** of the system.
