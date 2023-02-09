if(window.innerWidth < 1440){
    alert("This website isn't currently mobile friendly. So could you please turn on desktop mode of your browser or use a large screen device like a laptop or a desktop?")
};
const main = document.querySelector("main");
const nav = document.querySelector("nav");
const section = document.querySelector("section");
const name = document.querySelector("#left h2");
const left = document.getElementById("left");
const right = document.getElementById("right");
const structure = document.getElementById("structure");
const advantages = document.getElementById("advantages");
const disadvantages = document.getElementById("disadvantages");
const whenToAdopt = document.getElementById("whenToAdopt");
const image = document.querySelector("#right img");
const footer = document.querySelector("footer");
var selectedMethodology = "1";
nav.style.display = "none";
section.style.display = "none";
footer.style.display = "none";
function explore(){
    main.style.opacity = "0";
    main.style.transform = "translateY(500px)";
    setTimeout(() => {
        nav.style.display = "block";
        main.style.display = "none";   
    }, 1000);
}
function exit(){
    nav.style.display = "none";
    main.style.display = "flex";
    section.style.display = "none";
    setTimeout(() => {
        main.style.opacity = "1";
        main.style.transform = "translateY(0px)";
    }, 500);
}
function credits(){
    footer.style.display = "block";
}
function closeCredits(){
    footer.style.animation = "fallOutFromTopToBottom 1s forwards";
    setTimeout(() => {
        footer.style.display = "none";
        footer.style.animation = "fallFromTopToBottom 1s forwards";
    }, 1000);
}
function showMethodology(e){
    section.style.display = "flex";
    selectedMethodology = e;
    showData();
    defaultTab();
    image.src = selectedMethodology + ".jpg";
    nav.style.scale = "0.5";
    left.style.transform = "translateX(-100%)";
    right.style.transform = "translateX(100%)";
    setTimeout(() => {
        left.style.transform = "translateX(0px)";
        right.style.transform = "translateX(0px)";
    }, 500);
    setTimeout(() => {
        nav.style.display = "none";
        nav.style.scale = "1";
    }, 1000);
}
function showData(){
    switch (selectedMethodology) {
        case 1: show1();
            break;
        case 2: show2();
            break;
        case 3: show3();
            break;
        case 4: show4();
            break;
        case 5: show5();
            break;
        case 6: show6();
            break;
        case 7: show7();
            break;
        case 8: show8();
            break;
        case 9: show9();
            break;
        case 10: show10();
            break;
        case 11: show11();
            break;
        case 12: show12();
            break;
        default:
            break;
    }
}
function showBack(){
    if(selectedMethodology == "1"){
        selectedMethodology = "13";
    }
    selectedMethodology -= 1;
    showData();
    defaultTab();
    image.style.opacity = "0";
    setTimeout(() => {
        image.style.opacity = "1";
        image.src = selectedMethodology + ".jpg";
    }, 250);
}
function showList(){
    defaultTab();
    left.style.transform = "translateX(-100%)";
    right.style.transform = "translateX(100%)";
    setTimeout(() => {
        nav.style.display = "block";
        section.style.display = "none";
    }, 1000);
}
function showNext(){
    if(selectedMethodology == "12"){
        selectedMethodology = "0";
    }
    selectedMethodology = parseInt(selectedMethodology + 1);
    showData();
    defaultTab();
    image.style.opacity = "0";
    setTimeout(() => {
        image.style.opacity = "1";
        image.src = selectedMethodology + ".jpg";
    }, 250);
}
function showTab(e){
    structure.style.display = "none";
    advantages.style.display = "none";
    disadvantages.style.display = "none";
    whenToAdopt.style.display = "none";
    e.style.display = "block";
}
function defaultTab(){
    structure.style.display = "block";
    advantages.style.display = "none";
    disadvantages.style.display = "none";
    whenToAdopt.style.display = "none";
}
function show1(){
    name.innerText = "Agile Software Development Methodology";
    structure.innerHTML = `Agile Software Development methodology is one of the best software development approaches that is used to design a disciplined software management process which also allows some frequent alteration in the development project. <br><br>This is a type of software development methodology that is one conceptual framework for undertaking various software engineering projects. <br><br>Agile Development is used to minimize risk by developing software in short time boxes which are called iterations that generally last for one week to one month.`;
    advantages.innerHTML = `<li>Customer satisfaction by rapid, continuous delivery of useful software.</li>
    <li>Human interaction is emphasized rather than process and development tools. Customers, developers and testers constantly interact with each other.</li>
    <li>Agile methodology has an adaptive approach that is able to respond to the changing requirements of the clients.</li>
    <li>Direct communication and constant feedback from customer representatives leave no space for any guesswork in the system.</li>`;
    disadvantages.innerHTML = `<li>In the case of some software deliverables, especially the large ones, it is difficult to assess the effort required at the beginning of the software development life cycle.</li>
    <li>Agile focuses on working software rather than documentation, hence it may result in a lack of documentation.</li>
    <li>The project can easily get taken off track if the customer representative is not clear what final outcome that they want.</li>
    <li>Only senior programmers are capable of taking the kind of decisions required during the development process. Hence it has no place for newbie programmers unless combined with experienced resources.</li>`;
    whenToAdopt.innerHTML = `<li>When client's requirements aren't straight or they are not sure about their decisions.</li><li>If your team has senior programmers.</li><li>When there is no problem about lack of documentation.</li><li>When the project is somewhat huge.</li>`;
}
function show2(){
    name.innerText = "DevOps Methodology";
    structure.innerHTML = `DevOps is a popular term gaining a lot of attention among all the software development methodologies because of the unconditional benefits it offers to its customers. <br><br>The siloed process of Development and Operations is not the same as the inception of DevOps. <br><br>These two departments are functioning together as a single team for all processes in the entire life-cycle. <br><br>This works concurrently for all businesses. <br><br>The continuous integration and continuous delivery model allow development and operational teams to perform everything simultaneously in development, quality assurance, security, and other operations. <br><br>Now businesses are turning more towards DevOps as an agile and lean approach that enables a crisp collaboration between all the stages of the development life cycle.`;
    advantages.innerHTML = `<li>Faster Process; Multiple ongoing processes work simultaneously which makes the process faster and easier for businesses to process on time. By adapting to changes in the market, DevOps enables businesses to grow efficiently and drive definite business results.</li>
    <li>Offers Rapid Deliveries; Microservices and Continuous delivery are some elements of DevOps that offer business continuity and recent updates rapidly. DevOps allows businesses to continuously innovate and improve products for a better software product.</li>
    <li>Reliability; With increasing changes in the product and infrastructure, the developed products are robust and secure with a competitive advantage against all the peers.</li>
    <li>Collaboration; This is a collaborative platform pillared on strong parameters of accountability and ownership. Both the development teams and operations team are in sync with all activities of the development lifecycle to deliver faster and effective products.</li>`;
    disadvantages.innerHTML = `<li>DevOps demands Cultural change; Yes, this is true if you adopt DevOps in your business, it demands cultural change and business needs to restart their processes in order to grow efficiently.</li>
    <li>Organizational Upgradation is another important factor for companies to upgrade their business from conventional methods to dividing into multidisciplinary tasks that will allow them to use multiple skills at the same time.</li>
    <li>Speed and security is not something that is achieved all the time using DevOps. For some critical software engineering projects, there are companies that may not assure both in a single stage and you may need to consider a separate plan for security at every stage of your DevOps workflow.</li>`;
    whenToAdopt.innerHTML = `<li>When you have an issue with time or if you need to speedup the process.</li><li>If you have an active team who likes to collaborate.</li>`;
}
function show3(){
    name.innerText = "Scrum Development Methodology";
    structure.innerHTML = `You can apply the Scrum Development Methodology in nearly all types of projects. <br><br>For companies where the requirements are highly emerging and rapid changes are easily adhered to, we use this type of development method. <br><br>The Scrum software development model begins with brief planning, meeting, and concludes with a final review. <br><br>Businesses can accelerate the development of software using this method that allows a series of iterations in a single go. <br><br>It is one of the best software development methodologies because it easily brings slowest progressing projects on track.`;
    advantages.innerHTML = `<li>Use Scrum Development for fast-moving, cutting-edge developments, rapid codes, and testing mistakes that can be easily rectified.</li>
    <li>In this methodology, decision-making is entirely in the hands of the teams.</li>
    <li>This methodology enables projects with the business requirements documentation and other signs that contribute to success.</li>
    <li>Enterprises can control the Project development steps visible in this method with emphasis on frequent updating of the progress.</li>
    <li>A daily meeting easily helps the developer to make it possible to measure individual productivity. This leads to the improvement in the productivity of each of the team members.</li>
    <li>Due to short sprints and constant feedback, it becomes easier to cope with the changes.</li>
    <li>It is easier to deliver a quality product at a scheduled time.</li>`;
    disadvantages.innerHTML = `<li>As one of the leading causes of scope creep is Agile Scrum thus there is no definite end date, the project management stakeholders will be tempted to keep demanding that new functionality be delivered.</li>
    <li>You should keep the estimation of project costs and time accurate if not then this kind of development model will suffer.</li>
    <li>It is good for small, fast-moving projects but not suitable for large complex projects.</li>
    <li>This methodology needs experienced team members only. If the team consists of people who are novices, the project cannot be completed within an exact time frame.</li>
    <li>Scrum works well for project management when the Scrum Master trusts the team they are managing. If they practice too strict control over the team members, it can be extremely frustrating for them, leading to demoralization and the failure of the project.</li>
    <li>Project quality manager is hard to implement and quantify unless the test team is able to conduct regression testing after each sprint.</li>`;
    whenToAdopt.innerHTML = `<li>If your team members are willing to actively participate in daily meetings.</li><li>If customer requirements are changing.</li><li>If the project is a small, fast-moving one</li><li>When the Scrum Master trusts the team they are managing</li>`;
}
function show4(){
    name.innerText = "Waterfall Model";
    structure.innerHTML = `The Waterfall Methodology is one of the most popular software development methodologies. <br><br>Most businesses consider this life cycle model as a classic style of software development. <br><br>This model clarifies the software development process in a linear sequential flow. <br><br>In any phase of the development cycle, you should always cross-check that the earlier phase is completed. <br><br>This traditional software development method is a rigid linear model. <br><br>This development approach does not define the process to go back to the previous phase to handle changes in requirements.`;
    advantages.innerHTML = `<li>Waterfall model is very simple and easy to understand and uses methodology. That is why it is beneficial for the beginner or novice developer.</li>
    <li>It is easy to manage the projects because of the rigidity of the model. Moreover, each phase has specific deliverables and an individual review process.</li>
    <li>Waterfall development methodology saves a significant amount of time at all the phases processed and completed at a given time.</li>
    <li>The requirements are very well understood/defined in the waterfall method. Also, it works effectively for smaller projects.</li>
    <li>You can easily do the testing that refers to the defined scenarios in the earlier functional specification.</li>`;
    disadvantages.innerHTML = `<li>If the requirements are precise and are available up-front, then the waterfall development method can only be used.</li>
    <li>Waterfall method is not applicable to projects that demand continuous maintenance.</li>
    <li>The main drawback of this method is that once an application is in the testing stage, it is not advisable to go back and do any amendments changes for completed software, it may cause a lot of problems.</li>
    <li>There is no possibility that we can to develop any working software until it reaches the last stage of the cycle</li>
    <li>You cannot include the client's valuable feedback within the ongoing development phase.</li>
    <li>In waterfall development method, there is no option to know the end result of the entire project</li>
    <li>Make your requirements well-defined and clear or else this model is not suitable. It is effective for long and ongoing projects.</li>
    <li>In waterfall methodology, Documentation occupies a lot of time for developers and testers.</li>`;
    whenToAdopt.innerHTML = `<li>When the customers requirements are straight and they are sure about it.</li><li>If the project is not a huge one.</li><li>If you are currently a beginner or a novice developer in the field.</li><li>If the project doesn't require continuous maintenance.</li><li>When documentations are highly wanted.</li>`;
}
function show5(){
    name.innerText = "Prototype Methodology";
    structure.innerHTML = `The Prototype Methodology is the software development process that allows developers to create only the prototype of the solution to demonstrate its functionality to the clients. <br><br>Make all the necessary modifications before developing the actual application using this methodology. <br><br>The best feature of this software development methodology is that it solves a plethora of issues that often occur in a traditional waterfall model.`;
    advantages.innerHTML = `<li>Show the prototype to the client to have a clear understanding and complete 'feel' of the functionality developed in the software. It ensures a greater level of customer satisfaction and comfort.</li>
    <li>Identify the scope of the refinement and accordingly accommodate new changes in the given requirements.</li>
    <li>Significantly reduce the risk of failure using this method and identify the potential risks at an early stage and moderation steps can be taken quickly.</li>
    <li>The communication between the software development team and the client makes a very good and conducive environment during a project.</li>
    <li>It helps in requirement gathering and requirement analysis when there is a lack of required documents.</li>`;
    disadvantages.innerHTML = `<li>Prototyping is usually done at the cost of the developer, so it should be done using minimal resources otherwise the organization's development cost stretches too much.</li>
    <li>Customers sometimes demand the actual product to be delivered soon after seeing an early prototype.</li>
    <li>The clients have too much involvement which is not always aligned with the software developer.</li>
    <li>It does not appreciate too many modifications in the project as it easily disturbs the existing workflow of the entire software development process.</li>
    <li>Customers may not be satisfied or interested in the product after seeing the initial prototype.</li>`;
    whenToAdopt.innerHTML = `<li>If your client requirements are not straight.</li><li>When you can't really understand what the customer is saying.</li><li>If you aren't sure about the issues which can be popup during the implementation of the project.</li>`;
}
function show6(){
    name.innerText = "Feature Driven Development";
    structure.innerHTML = `Feature Driven Development is an iterative approach out of all the software methodologies, intended for use by large teams working on a project using object-oriented technology. <br><br>This type of model is good for organizations that are transitioning from a phase-based approach to an iterative approach. <br><br>Feature Driven methodology is also known as an FDD methodology.`;
    advantages.innerHTML = `<li>With Feature Driven Development model, Progress tracking of the project happens by a feature that is a focused approach.</li>
    <li>It allow multiple teams to work simultaneously. Which, in turn, reduces the time.</li>
    <li>FDD Helps to move larger size projects and obtain repeatable success.</li>
    <li>The simple five processes help to bring work done in a short time and easiest manner.</li>
    <li>This type of model is built on set standards for the software development industry, so it helps easy development and industry-recognized best practices.</li>`;
    disadvantages.innerHTML = `<li>Not an ideal methodology for smaller projects, so it is not good for an individual software developer.</li>
    <li>High dependency on the main developer means the person should be fully equipped for an act as coordinator, lead designer, and mentor.</li>
    <li>No written documentation is provided to clients in this methodology, so they are not able to get proof for their software.</li>`;
    whenToAdopt.innerHTML = `<li>If you need to speedup the project.</li><li>If the project is quite larger or huge.</li><li>If the written documentations aren't necessary.</li>`;
}
function show7(){
    name.innerText = "Rapid Application Development (RAD)";
    structure.innerHTML = `Rapid Application Development (RAD) is an effective methodology that provides much quicker development and higher-quality results than those achieved with the other software development methodologies. <br><br>It is designed in such a way that it easily takes the maximum advantage of the software development. <br><br>The main objective of rapid application development methodology is to accelerate the entire software development process. <br><br>The goal is easily achievable because it allows active user participation in the development process.`;
    advantages.innerHTML = `<li>Rapid Application development model helps to reduce the risk and required efforts on the part of the software developer.</li>
    <li>Additionally, this model also helps the clients to take quick reviews for the project.</li>
    <li>This methodology encourages customer feedback which always provides improvement scope for any software development project.</li>
    <li>As a result of prototyping in nature, there is a possibility of lesser defects.</li>
    <li>Each phase in RAD delivers the highest priority functionality to the client.</li>`;
    disadvantages.innerHTML = `<li>This model depends on the strong team and individual performances for clearly identifying the exact requirement of the business.</li>
    <li>It only works on systems that can be modularized can be built using this methodology.</li>
    <li>This approach demands highly skilled developers and a designer's team which may not be possible for every organization.</li>
    <li>This method is not applicable for the developer to use in small budget projects as the cost of modeling and automated code generation is very high.</li>
    <li>Progress and problems accustomed are hard to track as such there is no documentation to demonstrate what has been done.</li>`;
    whenToAdopt.innerHTML = `<li>If you need a high quality result in a low time.</li><li>If the team members are actively participating in the project.</li><li>When the project can be modularized.</li><li>If you are having highly skilled developers and designers.</li><li>If the clients aren't looking for a low budget way.</li><li>When documentation is not a big issue.</li>`;
}
function show8(){
    name.innerText = "Spiral Model";
    structure.innerHTML = `The Spiral Model is a sophisticated model that focuses on the early identification and reduction of project risks. <br><br>In this software development methodology, developers start on a small scale then explores the risks involved in the project, make a plan to handle the risks, and finally decides whether to take the next step of the project to do the next iteration of the spiral. <br><br>The success of any Spiral Lifecycle Model depends on the reliable, attentive, and knowledgeable management of the project.`;
    advantages.innerHTML = `<li>The high amount of risk analysis being done hence, avoidance of possible risk is certainly reduced with this model.</li>
    <li>This model is good for large size and critical projects.</li>
    <li>In the spiral model, additional functionality can be added at a later date.</li>
    <li>Development is fast and features are added systematically in this model.</li>
    <li>It is more suited for high-risk projects, where business needs may differ from time to time basis.</li>`;
    disadvantages.innerHTML = `<li>It is certainly a costly model to use in terms of development.</li>
    <li>The success of the entire project is dependent on the risk analysis phase thus, failure in this phase may damage the entire project.</li>
    <li>It is not appropriate for low-risk projects.</li>
    <li>The big risk of this methodology is that it may continue indefinitely and never finish.</li>
    <li>Documentation is more as it has intermediate phases.</li>`;
    whenToAdopt.innerHTML = `<li>If the project is high-risk.</li><li>When the project is a large size and critical.</li><li>If the client's requirements are changing in the feature.</li><li>If the cost is not a big issue.</li>`;
}
function show9(){
    name.innerText = "Dynamic Systems Development Model Methodology";
    structure.innerHTML = `Dynamic Systems Development Model is a software development methodology originally based on the Rapid Application Development methodology. <br><br>This is an iterative and incremental approach that emphasizes continuous user involvement. <br><br>Its main aim is to deliver software systems on time and within budget. <br><br>This model simply works on the philosophy that nothing is developed perfectly in the first attempt and considers it an ever-changing process.`;
    advantages.innerHTML = `<li>Users are highly involved in the development of the system so, they are more likely to get a grip on the software development project.</li>
    <li>In a dynamic systems model, the basic functionality is delivered quickly, with more functionality being delivered at frequent intervals.</li>
    <li>This method provides easy access by developers to end-users.</li>
    <li>In this kind of development, approach projects are delivered on time and within a specific budget.</li>`;
    disadvantages.innerHTML = `<li>The first thing is that DSDM is costly to implement, as it requires users and developers both to be trained to employ it effectively. It may not be suitable for small organizations or one-time projects.</li>
    <li>It is a relatively new model, therefore, it is not very common and easy to understand.</li>
    <li>Dynamic systems model Requires significant user involvement.</li>
    <li>This model Involves the progressive development of project requirements.</li>`;
    whenToAdopt.innerHTML = `<li>If you have to deliver the project on time and within budget.</li><li>If your organization is not a small one.</li><li>If you can find significant user participation.</li>`;
}
function show10(){
    name.innerText = "Extreme Programming Methodology";
    structure.innerHTML = `Extreme Programming is an agile software engineering methodology. <br><br>This methodology, which is shortly known as XP methodology, is mainly used for creating software within a very unstable environment. <br><br>It allows greater flexibility within the modeling process. <br><br>The main goal of this XP model is to lower the cost of software requirements. <br><br>It is quite common in the XP model that the cost of changing the requirements at later stages in the project can be very high.`;
    advantages.innerHTML = `<li>The main advantage of Extreme Programming is that this methodology allows software development companies to save costs and time required for project realization. Time savings are available because of the fact that XP focuses on the timely delivery of final products. Extreme Programming teams save lots of money because they don't use too much documentation. They usually solve problems through discussions inside of the team.</li>
    <li>Extreme programming methodologies emphasize customer involvement.</li>
    <li>This model helps to establish rational plans and schedules and to get the developers personally committed to their schedules which are surely a big advantage in the XP model.</li>
    <li>This model is consistent with most modern development methods so, developers are able to produce quality software.</li>`;
    disadvantages.innerHTML = `<li>Some specialists say that Extreme Programming is focused on the code rather than on design. That may be a problem because good design is extremely important for software applications. It helps sell them in the software market. Additionally, in XP projects the defect documentation is not always good. Lack of defect documentation may lead to the occurrence of similar bugs in the future.</li>
    <li>This methodology is only as effective as the people involved, Agile does not solve this issue.</li>
    <li>This kind of software development model requires meetings at frequent intervals at enormous expense to customers.</li>
    <li>It requires too many development changes which are very difficult to adopt every time for the software developer.</li>
    <li>In this methodology, it tends to be impossible to know exact estimates of work effort needed to provide a quote, because at the starting of the project nobody is aware of the entire scope and requirements of the project.</li>`;
    whenToAdopt.innerHTML = `<li>If your environment is unstable.</li><li>When you need to save time and money.</li><li>If the team is willing to actively participate in the frequent meetings.</li>`;
}
function show11(){
    name.innerText = "Joint Application Development Methodology";
    structure.innerHTML = `Joint Application Development (JAD) is a requirements-definition and user-interface development methodology in which end-users, clients, and developers attend intense off-site meetings to work out and finalize software systems. <br><br>This methodology aims to involve the client in the design and development of an application. <br><br>JAD sessions easily accomplish targeted goals with a series of collaborative workshops. <br><br>The main focus of this model is to resolve the business problem rather than technical details. <br><br>Thus it is most suitable for developing business systems.`;
    advantages.innerHTML = `<li>This methodology allows for the simultaneous gathering and consolidating of large amounts of information. The collaboration between the company and the clients lowers all risks.</li>
    <li>This software development mode effectively produces large amounts of high-quality information in a short period of time. It reduces the costs and time needed for project development.</li>
    <li>With the proper assistance of the organizer, the differences are immediately resolved in this method.</li>
    <li>This model provides a forum to explore multiple points of view regarding a topic.</li>
    <li>Well-defined requirements improve system quality.</li>`;
    disadvantages.innerHTML = `<li>JAD methodology takes a large amount of time as it requires significant planning and scheduling effort on the part of the project development team.</li>
    <li>It requires significant investor commitment in terms of time and effort.</li>
    <li>This approach requires trained and experienced personnel for the effective implementation of the entire project.</li>
    <li>Different opinions within the team make it difficult to align goals and maintain focus.</li>`;
    whenToAdopt.innerHTML = `<li>When you need to resolve the business problem rather than technical details.</li><li>If you have enough time to plan the project which can get a huge amount of time in this methodology.</li><li>If you have a well trained and experienced team.</li><li>If the opinions of the team members aren't much vary from each other.</li>`;
}
function show12(){
    name.innerText = "Lean Development Methodology";
    structure.innerHTML = `Lean Development Methodology focuses on the creation of easily changeable software. <br><br>This Software Development model is more strategically focused than any other type of agile methodology. <br><br>The goal of this methodology is to develop software in one-third of the time, with a limited budget, and a very less amount of required workflow.`;
    advantages.innerHTML = `<li>The early elimination of the overall efficiency of the development process certainly helps to speeds up the process of entire software development which surely reduces the cost of the project.</li>
    <li>Delivering the product early is a definite advantage. It means that the development team can deliver more functionality in a shorter period of time, hence enabling more software projects to be delivered.</li>
    <li>Empowerment of the development team helps in developing the decision-making ability of the team members which creates more motivation among team members.</li>`;
    disadvantages.innerHTML = `<li>Success in software development depends on how disciplined the team members are and how to advance their technical skills.</li>
    <li>The role of a business analyst is vital to ensure the business requirements documentation is understood properly. If any organization doesn't have a person with the right business analyst then this method may not be useful for them.</li>
    <li>In this development model, great flexibility is given to the developer which is surely great, but too much of it will quickly lead to a development team that lost focus on its original objectives thus, it hearts the flow of the entire project development work.</li>`;
    whenToAdopt.innerHTML = `<li>If you want to deliver the product early.</li><li>If the developers need a lot of flexibility.</li><li>If the project is about an easily changeable software.</li>`;
}