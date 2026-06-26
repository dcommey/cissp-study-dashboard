# Quiz: Software Development Part 1

## Question 1
A fire alarm is triggered in a high-security facility, causing the main electrical transformer to shut down. The smart-card reader systems controlling the physical entry doors lose power and immediately unlock, allowing occupants to exit safely but also exposing the building to unauthorized entry. Meanwhile, the database server housing sensitive research data undergoes an orderly shutdown to prevent data corruption. How should a CISSP evaluate these two distinct system designs?

- [ ] A. Both systems failed open, which prioritizes human life but introduces excessive risk to logical assets.
- [ ] B. The smart-card readers failed open to prioritize physical safety, while the database server failed secure to preserve logical confidentiality and integrity.
- [ ] C. The smart-card readers failed secure to prevent physical breaches, while the database server failed open to maintain database availability.
- [ ] D. Both systems failed secure, illustrating that safety and security are always in alignment.

## Question 2
An organization is seeking to assess and systematically improve its software security posture. The security manager wants a model that specifically breaks down security activities into governance, design, implementation, verification, and operations, rather than focusing on general software engineering processes. Which framework is best suited for this task?

- [ ] A. Capability Maturity Model Integration (CMMI)
- [ ] B. OWASP Software Assurance Maturity Model (SAMM)
- [ ] C. Agile Software Development Manifesto
- [ ] D. System Development Life Cycle (SDLC) Waterfall Model

## Question 3
A web application developer implements client-side JavaScript code to validate user input on a registration form, ensuring that no special characters commonly used in SQL injection attacks (like single quotes or semicolons) can be submitted. Despite this, the database is compromised via a SQL injection attack. What is the primary cause of this compromise?

- [ ] A. The developer should have used a compiled language rather than JavaScript to perform the client-side validation.
- [ ] B. Client-side input validation is easily bypassed because an attacker can submit requests directly to the server, ignoring the client-side code entirely.
- [ ] C. The application lacked a runtime environment like the JVM to isolate the SQL database from the web server.
- [ ] D. SQL injection can only be prevented using physical security controls, not logical input validation.

## Question 4
During a critical incident, the development team needs to deploy an emergency patch to resolve a newly discovered remote code execution vulnerability in a production system. To ensure the integrity of the software and prevent introducing secondary flaws, which change management path should they follow?

- [ ] A. Bypass change management entirely to minimize the window of exposure, deploying the patch directly to production.
- [ ] B. Submit a request control ticket, test the patch in an isolated environment, perform regression testing, and verify the patch in release control before deploying.
- [ ] C. Deploy the patch to production first, then document the changes in change control to maintain backward compatibility.
- [ ] D. Perform User Acceptance Testing (UAT) in the production environment directly using real-world user traffic.

## Question 5
A software architecture team is designing an enterprise application that must run across diverse operating systems and hardware platforms. They require the application code to run within a secure, isolated sandbox environment that handles memory management and exception handling to prevent application crashes from compromising the host system. Which runtime mechanism best supports these requirements?

- [ ] A. Direct execution of assembly code (using instructions like add and jmp) directly on the host CPU.
- [ ] B. Running raw source code through a scripting interpreter line-by-line without sandboxing.
- [ ] C. Compiling the application into an intermediate bytecode format executed within a virtual machine runtime, such as the JVM or CLR.
- [ ] D. Deploying the application as a single OS-specific compiled binary with direct memory access.
