# CISSP Study Notes: Software Development Part 2

## 1. Concepts Review

### DevOps and DevSecOps
DevOps represents the ultimate collaboration in the technology world. It bridges the gap between software development (developers and testers) and operations (the team responsible for infrastructure **management**). The primary objective is to increase the speed and frequency of deployments through automation and continuous integration.
- **DevSecOps** integrates security directly into this automated pipeline. Security is treated as an active part of the lifecycle rather than an afterthought.
- Developers must expand their skillset to understand the infrastructure where their applications run (e.g., containers, Kubernetes, virtual machines, cloud services like **AWS**).
- Operations staff must acquire development skills, such as automation scripting, configuring virtual environments, interacting with a software **API**, and writing configuration templates using formats like **YAML**.

### Application Programming Interfaces (APIs)
Modern applications are no longer monolithic; instead, they are composed of modular microservices that communicate via APIs.
- An **API** (Application Programming Interface) is a behind-the-scenes programmatic interface that enables machine-to-machine communication.
- Deployment and management of resources (e.g., in **AWS**) can occur via a web console, a Command Line Interface (**CLI**), configuration management tools (Ansible/Terraform), or scripting utilities like cURL. All these tools ultimately communicate with the provider's API.
- **API Security & Authentication**: API access must be strictly controlled. Unlike standard user interfaces that require interactive MFA, API **authentication** typically utilizes API keys or temporary tokens. Because many APIs rely on a single authentication factor, key **management** is a critical security **standard**.
- **Syntax and Formatting**: APIs rely on a **standard** syntax for requests and responses. Payloads are typically structured in **JSON** (JavaScript Object Notation) or **XML** (eXtensible Markup Language) formats, which must be strictly documented and validated.

### Software Testing Techniques
Software testing detects bugs and vulnerabilities before release. Testing should cover both valid inputs and malformed inputs (invalid types, unexpected lengths, integer overflows, or malicious code tags like a script or an **SQL** query).
- **Tester Independence**: Testing should not be performed solely by the developers who wrote the code, to ensure objectivity and a fresh perspective.
- **White Box Testing** (also called Clear, Glass, Transparent, or Structural Testing): The tester has complete access to the underlying source code and design schema.
- **Black Box Testing** (also called Specification-Based, Closed, or Opaque Box Testing): The tester has no knowledge of the inner workings of the system. The tester acts as a regular **user**, evaluating inputs against expected outputs.
- **Gray Box Testing**: A hybrid approach where the tester has partial knowledge of the system (e.g., using the source code to design test cases, but executing the tests against the external interface without active code tracing).

### Code Repositories and Secret Sprawl
- Code repositories (e.g., GitHub, Bitbucket) store source code, facilitate code reviews, manage versioning, and automate builds via webhooks.
- **Secret Sprawl**: A significant risk is the accidental leakage of sensitive keys, passwords, and tokens. Developers often hardcode temporary credentials during testing, which then get pushed to public repositories. Automated scanners, bots, and crawlers continuously monitor public repos to harvest these credentials, making secure secret management a mandatory operational **policy**.

### Databases and SQL vs. NoSQL
Applications store data in databases, which are prime targets for attackers.
- **Relational Databases**: Organize data into tables (relations) with columns (attributes, defining the table's degree) and rows (tuples or records, representing cardinality). They are queried using **SQL** (Structured Query Language).
  - *Primary Key*: A unique identifier for each record in a table.
  - *Candidate Key*: Any attribute that could serve as a primary key.
  - *Alternate Key*: Candidate keys not chosen as the primary key.
  - *Foreign Key*: An attribute in a table that acts as a primary key in another table, enabling tables to link.
  - *Normalization*: The process of arranging data to eliminate redundancy and maintain database **integrity**.
- **Distributed Databases**: Data is spread across multiple physical or logical locations but remains interconnected. Examples include blockchain and the Domain Name System (**DNS**).
- **NoSQL Databases** (Not Only SQL): Designed to store non-relational data structures. Instead of rigid tables, they often store data as "documents" in formats like **JSON**. NoSQL databases do not store traditional file formats like a **PDF** or doc, but rather unstructured data records. They lack the normalization overhead of relational databases, making them highly performant.

### Database Transactions and ACID Properties
Relational databases must process transaction-oriented operations as indivisible units to prevent race conditions or inconsistent states. Relational database management systems must adhere to the **ACID** model:
- **A - Atomicity**: The transaction is an all-or-nothing operation. If any part of the transaction fails, the entire transaction is rolled back.
- **C - Consistency**: The transaction must transition the database from one valid state to another, preserving all constraints and rules.
- **I - Isolation**: Concurrent execution of transactions yields the same state as if they were executed sequentially. Transactions do not step on each other's toes.
- **D - Durability**: Once a transaction is committed, it remains committed and will survive system failures or power outages.

### Database Security: Multi-Level Security, Aggregation, and Inference
- **Data Classification**: An organization must identify critical and sensitive data (such as Personally Identifiable Information, or **PII**) before applying security controls.
- **Multi-Level Security (MLS)**: A database system that compartmentalizes data into different classification levels, preventing database contamination (where data of different sensitivity levels is mixed). If the database management system does not support MLS natively, developers can enforce a security **policy** via database **views** (which present a filtered, dynamic query result to a **user**, stripping out **PII**).
- **Aggregation**: Combining non-sensitive data points from multiple sources to create a consolidated result (e.g., using sum, average, or count functions).
- **Inference**: The risk that a **user** can analyze low-security aggregated data to deduce (infer) high-security information that they are not authorized to view. Protecting against inference requires strict query restrictions, locking mechanisms, and robust database permissions.

### Knowledge-Based Systems (AI & Machine Learning)
Knowledge-based systems attempt to simulate human reasoning and decision-making:
- **Expert Systems**: Consist of a body of static knowledge (if-then decision trees) and an inference engine that navigates these rules using fuzzy logic to arrive at a conclusion.
- **Machine Learning (ML)**: Systems that adapt and learn from data:
  - *Supervised Learning*: Training a model using labeled inputs and desired solutions.
  - *Unsupervised Learning*: Training on data without explicit answers, focusing on clustering and finding trends.
- **Neural Networks**: Complex decision-making systems modeled after the biological brain. By feeding outputs back into the network and adjusting weights, they can solve complex problems and handle inputs they have never encountered before.

---

## 2. Key Terms and Definitions

- **integrity**: The CIA triad component ensuring data is accurate, complete, and protected from unauthorized modification (maintained via database normalization and concurrency locks).
- **PDF**: Portable Document Format; mentioned in contrast to the dynamic documents (like JSON structures) stored in NoSQL databases.
- **AWS**: Amazon Web Services; a prominent cloud computing platform.
- **CLI**: Command Line Interface; a utility used to execute commands programmatically, often interacting with APIs.
- **DNS**: Domain Name System; a distributed database mapping domain names to IP addresses.
- **SQL**: Structured Query Language; the standard language for relational databases.
- **PII**: Personally Identifiable Information; sensitive data that must be protected via database views or encryption.
- **API**: Application Programming Interface; a programmatic interface for machine-to-machine interaction.
- **YAML**: YAML Ain't Markup Language; a human-readable data serialization standard used heavily in DevOps configuration.
- **JSON**: JavaScript Object Notation; a lightweight data-interchange format used extensively in APIs and NoSQL document databases.
- **XML**: eXtensible Markup Language; a markup language used for formatting API payloads.
- **ACID**: Atomicity, Consistency, Isolation, Durability; the fundamental properties guaranteeing reliable database transaction processing.
- **user**: The entity or individual querying the database or interacting with the application.
- **management**: The administration of resources, configurations, and database engines.
- **standard**: An established norm, syntax, or security benchmark (e.g., API security standards).
- **policy**: A formal organizational directive (e.g., a security policy restricting database queries).
- **authentication**: The verification of identity, crucial for protecting API keys and database connections.

---

## 3. What to Remember (Exam Tips)

- **DevOps Roles**: DevOps requires developers to understand cloud infrastructure (**AWS**), and operations to understand development tasks like writing **YAML** templates and calling an **API** via a **CLI**.
- **Client vs. Server Validation**: Always validate input on the server. Client-side checks are for user convenience and server efficiency, but they do not provide logical security since the **user** can bypass them.
- **ACID Model**: Understand what **ACID** stands for and how it prevents concurrency issues (like race conditions).
- **Aggregation vs. Inference**: Aggregation is the technical act of gathering and compiling data. Inference is the intellectual process of analyzing that aggregated data to deduce sensitive information (such as **PII**). Mitigate inference using restricted **views** and strict database permission policies.
- **MLS Database views**: If a database engine lacks native multi-level security, use database **views** to restrict access to sensitive fields, ensuring a regular **user** only receives sanitized data.
