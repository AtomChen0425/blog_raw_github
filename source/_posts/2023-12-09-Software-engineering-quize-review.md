---
title: Software engineering quize review
date: 2023-12-09 22:47:31
tags: ['Study','Software Engineering']
categories: Notes
index_img: https://m.media-amazon.com/images/I/71HiyCm3Y6L._SY522_.jpg
cover: https://m.media-amazon.com/images/I/71HiyCm3Y6L._SY522_.jpg
description: Quize review of Software Engineering
hidden: true
---
# Chapter 1
+ What are the essential attributes of good software?
  + Acceptability , maintainability, dependability and security,and efficiency
+ What are the **two** fundamental types of software product?
  + **Generic products** that are designed to meet the needs of many different customers.
  + **Customised products** designed to meet the specific needs of a single customer.
+ What is software engineering?
  + An engineering discipline concerned with all aspects of software production from specification to system maintenance
+ What are the four fundamental activities in software processes?
  + Software specification, Software development, Software Validation and Software evolution
+ What is the distinction between computer science and software engineering?
  + Computer science is concerned with theories and methods of computers and software systems
  + Software engineering is concerned with the practice of software production
+ What are the 4 general issues that affect many different types of software?
  + Heterogeneity
  + Security and trust
  + Business and social change
  + Scale
+ List 5 different types of software application
  + stand-alone products
  + interactive transaction -based systems
  + embedded control systems
  + batch processing systems
  + entertatinment systems
  + systems for modelling and simulation
  + data collection systems
  + systems of sytems
+ What software engineering fundamentals apply to all types of software systems?
  + Systems should be developed using a managed and understood **development process**
  + Dependability and performance are key system characteristics
  + **Understanding** and managing the software **specification** and requirements are important
  + **Effective** use should be made of available resources.
+ What are three key characteristics of the engineering of web-based software engineering?
  + Software **reuse** is the principal approach for constructing web-based systems, **requirements** for those systems cannot be completely specified in advance, a **service-oriented** approach is usually used for system construction.
+ What is a software engineering code of ethics?
  + A set of principles that set out, in a general way, **standards** of expected behaviour for professional software engineers.  
  
# Chapter 2
+ What are the fundamental activities that are common to all software processes?
  + **Specification**
  + **Design and implementation**
  + **validation**
  + **evolution**
+ List 3 generic process models that are used insoftware engineering?
  + The waterfall model
  + incremental development
  + integration and configuration
+ Why are iterations usually **limited** when the waterfall model is used?
  + The waterfall model is a document driven model with documents produced at the end of each phase. Because of the cost of producing and approving documents, iterations and costly and involve significant rework. Hence they are limited
+ What are the three benefits of incremental development compared to the waterfall model?
  + The cost of accommodating changes to customer requirements is reduced
  + It is easier to get customer feedback on development work that has been done
  + More rapid delivery and deployment of useful software to thecustomer is possible.
+ What are the development stages in integration and configuration?
  + Discover and analyse reusable software systems or components
  + Requirements modification
  + System design with reuse
  + Development and integration
+ What are the principal requirements engineering activities?
  + Requirements elicitation and analysis
  + Requirements specification
  + Requirements validation
+ Why is it increasingly irrelevant to distinguish between software development and evolution?
  + Few software systems are now completely new and a more realistic model of software development is of an iterative process that lasts for the lifetime of the software.
+ What are the advantages of using incremental development and delivery
  + Early delivery of critical functionality to the customer
  + Early increments serve as prototypes to explore requirements
  + Lower risk of overall project failure
  + More extensive testing of critical customer functionality
+ What are the two different approaches to process improvement and change that have been proposed?
  + **The process maturity approach**, which has focused on improving process and project management and introducing good software engineering practice.
  + T**he agile approac**h, which has focused on iterative development and reducing software process overheads.

+ What are the identified levels in the SEI’s Capability Maturity Mode
  + Initial,
  + Managed,
  + Defined,
  + Quantitatively managed,
  + Optimizing.

# Chapter 3
+ What are the shared characteristics of different agile methods of software development?
  + The processes of specification, design and implementation are inter-leaved.
The system is developed and delivered as a series of increments or versions.
Extensive tool support is used to support the development process.
+ For what types of system are agile approaches to development particularly likely to be successful?
  + Small and medium-sized software product development where the specification is controlled by the software development company.
Custom software development in an organization where there is a clear commitment from customers to become involved in the development process.

+ List the 5 principles of agile methods.
  + Customer involvement,
  + Incremental delivery,
  + People not process,
  + Embrace change,
  + Maintain simplicity.
+ List 4 questions that should be asked when deciding whether or not to adopt an agile method of software development.
  + Is an incremental delivery strategy realistic?
  + What type of system is being developed?
  + What is the expected system lifetime?
  + How is the development team organized?
  + Is the system subject to external regulation?
  + How large is the system that is being developed?

+ Name three important agile techniques that were introduced in extreme programming?
  + Requirements expressed as scenarios or user stories,
  + Refactoring,
  + Pair programming,
  + Test-first development.
+ What is test-first development?
  + When a system feature is identified, the tests of the code implementing that feature are written before the code. Tests are automated and all tests are run when a new increment is added to the system.
+ What are the possible problems of test-first development?
  + Programmers may take **short-cuts** when developing tests so that the system tests are **incomplete**.
  + Some tests can be **difficult** to write incrementally.
  + It is difficult to estimate the **completeness** of a test set.

+ Why has the Scrum agile method been widely adopted in preference to methods such as XP.
  + Agile methods such as XP adopt an informal approach to planning and control that is inconsistent with organizational management policies. Scrum was designed as a managed method and provides a **framework** for project organization and **external** visibility of work done.

+ What is a Scrum sprint?
  + A short (3-4 weeks) planning unit in which work to be done is assessed, features are selected for development, the software is **implemented**  and **delivered** to system **stakeholders**.
+ What are the barriers to introducing agile methods into **large** companies?
  + Project managers may be **reluctant** to accept the **risks** of a new approach.
  + The established quality procedures in large companies may be **incompatible** with the informal approach to documentation in agile methods.
  + The existing teams may **not** have the **high level of skills** to make use of agile methods.
  + There may be **cultural resistance** if there is a long history of plan-driven development in the company.

# Chapter 4

+ What are user requirements and system requirements?
  + **User** requirements are statements in a **language** that is **understandable** to a user of what services the system should provide and the constraints under which it operates.
  + **System** requirements are **more detailed** descriptions of the system services and constraint, written for developers of the system.
+ What is the distinction between functional and non-functional requirements?
  + **Functional** requirements define what the system **should do**. **Non-functional** requirements are not directly concerned with specific system functions but specify required system properties or place constraints on the system or its development process.
+ List 3 types of non-functional requirement?
  + **Product** requirements, that specify or constrain the **software’s behaviour**.
  + **Organisational** requirements, are general requirements derived from **policies** and procedures in the **customer’s organization**.
  + **External requirements**, which cover all requirements derived from **factors** external to the system and its development process.

+ What are the principal stages of the **requirements engineering** process?
  1.	Requirements **elicitation** and **analysis**
  2.	Requirements **specification**
  3.	Requirements **validation**  
+ Give 5 reasons why eliciting requirements is **difficult**?
  1.	Stakeholders **don’t know** what they want
  2.	Stakeholders use their **own language** that requirements engineers may **not understand**.
  3.	Stakeholder requirements may **conflict**
  4.	**Political** factors may influence the system requirements
  5.	The **business environment** may change during elicitation.

+ What is ethnography and how is it used in requirements elicitation?
  + **Ethnography** is an observational technique where an analyst spends a period of time observing work and noting how the participants carry out their tasks. It is particularly useful in identifying essential cooperation in work processes.

+ What information should be included in a **scenario**.
  1. A description of what’s **expected** when the scenario **starts**
  2.	A description of the **normal flow** of events
  3.	A description of what can go **wrong** and how to handle it
  4.	Information about **concurrent activities**
  5.	A description of the system state when the scenario **finishes**
+ What is the distinction between the terms’ **shall’** and ‘**should**’ in a user requirements document, which is written in natural language?
  + ‘Shall’ normally indicates a **mandatory** requirement
  + ‘Should’ indicates a desirable but **not essential** requirement.

+ What are the **main advantages** of using a **standard** format to specify requirements?
  + All requirements have the **same format** so are easier to read,
  + The definition of form fields mean that writers are **less** likely to **forget** to include information
  + Some **automated processing is possible**.

+ What is a use-case?
  + A use-case identifies a **typical interaction** with a **system** and the **actors** (human or computer) involved in that interaction.  
+ How do managers and test engineers use a system requirements document?
  + Managers use the **requirements document** to plan a bid for the system development contract and to plan the system development process.
  + System test engineers use the requirements document to develop validation tests for the system.
+ What checks should be applied during **requirements validation**?
  1.	Validity checks
  2.	Consistency checks
  3.	Completeness checks
  4.	Realism checks
  5.	The verifiability of the requirements should be assessed.

+ List three **requirements** validation techniques?
  1.	Requirements reviews
  2.	Prototyping
  3.	Test-case generation

+ What is requirements management?
  + The process of managing **changes** to requirements **during** requirements **specification** and **after** the system has gone into **use**

+ What are the stages in the requirements change management process?
  1.	Problem analysis and change specification
  2.	Change analysis and costing
  3.	Change implementation

# Chapter 5
+ What **perspectives** should be used for developing models of a software system?
  + An **external** perspective
  + An **interaction** perspective
  + A **behavioural** perspective
  + A **structural** perspective.
+ What UML diagram types do you need to represent the essential features of a system?
  + Activity diagrams
  + Use case diagrams
  + Sequence diagrams
  + Class diagrams
  + State diagrams
+ What is described in a context model?
  + The immediate **external environment** of the system **showing** the system’s context (other systems, databases, business processes etc.) and the **dependencies** that a system has on other systems and **processes** in its environment. The context model shows what is outside of the system **boundary** and so does **not need** to be **implemented**.

+ How are activity diagrams used in describing the context of use of a system?
  + Activity diagrams may be used to describe the **business processes** in which the system is used and the **other systems** which are also used in these processes. 
+ What are the principal components of a textual use-case description?
  + The **actors** involved
  + A **description** of the **interactions**
  + The data that is **exchanged**
  + The **stimulus** that **triggers** the use case
  + The **response** of the system
  + **Comments** and other information
+ What is illustrated in a UML sequence diagram?
  + A sequence of interactions between the actors in a **system’s environment** and the objects **in the system itself**. The sequence of interactions  between objects documents one view of the implementation of a system feature or function.

+ How is **generalization** used to **simplify** the models of a system with many similar objects?
  + Assuming that the **similar objects** have attributes and methods in common, these common attributes and methods are associated with a ‘super-class’ which generalizes all of the objects sharing these attributes/methods. 
  + The specific object classes only declare the attributes/methods specific to that class and they **inherit** the general attributes/methods from the super-class.

+ What is the basic **assumption** that **underlies** **event-driven** modelling?
  + That the system can be represented as a model with a finite number of discrete states and **external and internal events** trigger a transition from one state to another.
+ What are the claimed benefits of **model-driven engineering**?
  + Engineers can work at a **high level** of **abstraction** without concern for implementation details.
  + Errors are **reduced** and the design and implementation process is **speeded** up.
  + By using **powerful generation tools**, implementations of the same system can be automatically generated for different platforms. 
+ What are the three types of abstract system model that are recommended  by the MDA method?
  + A computation-independent model (CIM)
  + A platform-independent model (PIM)
  + One or more platform-specific models (PSMs)
 
# Chapter 6

+ What are the **advantage** of explicitly designing and documenting a software architecture?
  + It **improves** stakeholder communications
  + It **encourages** a **detailed analysis** of the system
  + It helps with **large-scale** reuse.
+ What are the two ways in which an architectural model of a system may be used?
  + As a means of **facilitating discussion** about the most appropriate architecture for a system.
  + As a means of **documenting the architecture** of an **existing** or an intended system.
+ List 4 fundamental questions that should be addressed in architectural design? (any 4 from these)?
  + Is there a **generic application** architecture that can be used?
  + How will the system be **distributed**?
  + What **architectural style** or styles are appropriate?
  + **How** should the system be structured?
  + What **control strategy** should be used?

+ What are the fundamental architectural views proposed in Krutchen’s 4+ 1 model?
  + A **logical** view that shows the key abstractions of the system.
  + A **process** view that shows the interacting processes in the system
  + A **development** view that shows how the system is decomposed for development
  + A **physical** view that shows the distribution of software on the system hardware 

+ What is an architectural pattern?
  + A stylized abstract description of **good practice** in architectural design that **has been** tried and tested in different systems and environments. The pattern **should** **include information** on when it is and is not appropriate to use that architectural design.
+ What is the most important advantage of a **client-server** architecture?
  + This is a **distributed** architecture so that it is possible to provide services on **different computers**. It is **easy** to add a **new server** or **upgrade** existing servers **without disrupting** the system
+ Briefly describe pipe and filter architecture?
  + A system is decomposed into a set of functional transformations that consume inputs and produce outputs. **Data flows** from one function **to another** (the pipeline) and is **transformed** as it passes through the sequence.
+ What are **transaction-processing** applications?
  + **Database-centered applications** that process user requests for information and update the information in the **database**. They are organized so that transactions **cannot** interfere with each other and the integrity of the database is **maintained**.

+ What are the principal functions of the **4 layers** in a generic **information system** architecture?
 + (1)	User **interface**
 + (2)	User **communications**, authentication and authorization
 + (3)	Information retrieval and **modification**
 + (4)	**Database** and transaction management

# Chapter 7
+ What are the 5 key activities in an **object-oriented** design process?
  + Understand and define the **context** and use of the system.
  + Design the system **architecture**
  + Identify the **principal objects** in the system
  + Develop **design models**
  + **Specify** object interfaces 

+ What do you understand by the system context and interaction model?
  + The system context is a **static model** of the other systems in the environment of the system being designed.
  + An **interaction** model is a **dynamic model** that describes how the system being designed interacts with its environment.

+ Briefly describe 3 approaches that may be used to identify object classes?
  + Grammatical analysis identifying **nouns** and verbs.
  + Identify **tangible** **things** in the application domain.
  + Use **scenario-based** analysis.

+ Why is it important to specify the **interfaces** of components that are being developed by a software engineering team?
  + Interfaces have to be specified so that objects and sub-systems can be designed in **parallel**. Once an interface has been specified, the developers of other parts of the system may **assume** that the interface **will be implemented.**

+ What do Gamma et al. suggest are the four essential elements of a **design pattern**?
  + A **meaningful** name
  + A **description** of the problem and when the pattern can be applied
  + A **solution** description, which shows the components in the solution and their relationships.
  + A statement of the **consequences** of applying the pattern.

+ How do design patterns contribute to reuse?
  + Patterns and pattern languages are ways to **describe best practices**, good designs and **capture experience** in a way that is possible for others to reuse.

+ What are the 4 levels at which software **reuse** is possible?
  + The **abstraction** level where knowledge of successful abstractions is reused.
  + The **object level** where objects classes and methods from libraries are reused.
  + The **component** level where collections of objects are reused.
  + The **system** level where entire application systems are reused.

+ What are the **principal** aims of software configuration management?
  + To support system integration so that all developers can access the **project code** and **documents** in a **controlled way**, **find out** what components have been **changed** and compile and link components to create a system.

+ What are essential **tools** in a software development platform?
  + An integrated compiler and **syntax-directed** editing systems
  + A language **debugger**
  + **Graphical** editing tools for UML models
  + **Testing** tools that can **automatically** run program tests
  + Tools to support **refactoring** and program visualization
  + Project support tools for **configuration** **management**

+ Briefly describe the idea of open-source development.
  + In an open-source development, the source code of a software system is made publicly available and volunteers participate in the further development of the system. Any contributor to an open source development may fix bugs and add new features to a system.

# Chapter 8
+ What is the distinction between validation and verification?
  + Validation: Are we building the right product?
  + Verification: Are we building the product right?
+ What are the **advantages** of **inspections** over testing?
  + Inspections can discover many **errors**. In testing, **one error may mask another**.
  + **Incomplete** versions of a system **can be inspected**.
  + Inspections can **consider** broader quality attributes as well as program **defects**.
+ Briefly describe the **three principal** stages of testing for a **commercial** software system
  + **Development** testing, where the system is tested to **discover bugs** and defects
  + **Release** testing where the system is tested to check that it **meets its requirements**
  + **User** testing where the system is tested in the **user’s environment**.

+ What tests should be included in object class testing?
  + Tests for all operations in **isolation**,
  + Tests that set and access all object **attributes**,
  + Tests that force the object into **all possible states**.

+ What is an **equivalence partition**? Give an example.

  + A class of inputs or outputs where it is reasonable to expect that the system will behave the **same way** for all members of the class. For example, **all strings** with **less than 256 characters**.
+ What guidelines does Whittaker suggest for **defect** testing?
  + Chose inputs that **force all error** messages to be generated,
  + Design inputs that might **cause buffers** to **overflow**,
  + **Repeat** the same input numerous times,
  + Force **invalid outputs** to be generated
  + Force **computation** results to be **too large or too small**.

+ What are the three important classes of interface errors?
  + Interface misuse,
  + Interface misunderstanding,
  + Timing errors.
+ What should be the principal concerns of **system testing**?
  + Testing the **interactions** between the **components** and **objects** that make up the system.
  + Testing **reusable components** and systems to check that they work as expected when integrated into the system.

+ Briefly summarize the **test-driven development** process
  1. Identify **increment** of functionality required
  2.	Design tests for this functionality and implement as **executable** programs.
  3.	Run test **along** with other implemented tests. The test will fail.
  4.	Implement the functionality and **re-run** the test. Iterate **until** the test works.
  5.	Move on to **implement** the **next chunk** of functionality

+ What are the most important benefits of test-driven development?
  + Your **understanding** of the problem/**requirements**  is improved.
  + Code **coverage** is improved as every code segment has at least one associated test
  + **Regressing testing** costs are **reduced**
  + Debugging is **simplified** as the fault is associated with a **particular test**
  + **Tests** act as a form of system **documentation**

+ What is **stress testing** and why is it useful?
  + **Increasing** the **load** on a system **beyond** its design **limits** to check how the system performs in this situation. This **tests** the **failure behaviour** of the system and may reveal defects that are only apparent when the system has to handle a heavy load.
+ What are the three types of user testing
  + Alpha testing, where users work with the **development team** to test the software as it is **being developed**.
  + Beta testing where the software is released to selected users for **testing before** the formal system **release**
  + **Acceptance** testing, where **customers** test a system to check that it is ready for deployment.

# Chapter 9
+ Why is software evolution important?
  + Organisations are **completely** dependent on their software systems and they are **critical** business assets. They must **invest** in **evolution** so that these systems **remain useful** and **maintain** their value.
+ What are the stages in the system evolution process and what triggers that process?
  + The process is triggered by change requests. Process stages are:
	+ **Impact** analysis
	+ **Release** planning
	+ **Change** implementation
	+ System **release**

+ Why might it sometimes be necessary to bypass the normal change management system and make urgent changes to a system?
  + To repair a **serious** system **fault**.
  + To change the system to cope with **unexpected** **changes** in the system’s operating environment.
  + To cope with **unexpected** business **change**








































