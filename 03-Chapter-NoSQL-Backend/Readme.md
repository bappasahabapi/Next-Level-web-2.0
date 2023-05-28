#    🏛️ RMSTU Management System

##    🧑‍🎓 `Student`--->login-->`Account`
        
            ⏩ Offerend Courses
            ⏩ enrolled Courses
            ⏩ class routin
            ⏩ result
            ⏩ payment
            ...
            ...
            
##    `👥 Admin`--->login-->`Account`   


            ⏩ create course
            ⏩ create semister
            ⏩ create offer list
            ⏩ Offerend Courses
            ⏩ create faculty
            ⏩ create student

##    `👨‍💼 Faculty/Teacher/Advisor`--->login-->`Account`  

            ⏩ class routin
            ⏩ student lists
            ⏩ add grade
 
---
`🟢 So we have three roles:`
1.Student
1.Admin
1.Faculty

---

##    🟢 Break down the services:

- 1st phase:  `Authentication` service
- 2nd phase:  `Management` service
- 3ed phase:  `Payment` service

so we can say every service as an application:

     `Authetication`↔️`Management`↔️`Payment`

##    🟢 So make the application, we have to follow **SDLC** 5 principle

**1. Analysis**

        - product owner 
        - project manager
        - Business Analyst 
        - CTO
`work:`
    1. Product Requirement Document `(PRD)`
    2. Business Requirement Document `(BRD)`
    3. Software Requirement Specification `(SRS)`
    4. Functional Requirement Document/Specifation `(FRD/FRS)`

**2. Design** 

        - System Architecture 
        -  UI/UX Designer
`work:`
    1. High Level Document
    2. Low Level Design Document
    3. Database Schema

    
**3. Implementation | Development**

            - Front-end Developer
            - Back-end Developer
   
**4. Testing**  

        - Solution Architect
        - QA Engineer
        - Tester

`work:`
    1. Test Plan
    2. Test Case
    3. Test Script
    3. Defect Report


**Deployment**     

    - Data Administrator
    - DevOps

`work:`
    1. Release Notes
    2. Installation Guides
    3. Configuration Guides


**5. Maintenance**

    - User
    - Support Manager
    - Tester 
    -Developers

`work:`
    1. Change Request
    2. Bug Reports
    3. Patch Release