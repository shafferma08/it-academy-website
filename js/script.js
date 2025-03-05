let Question = document.getElementById("QuestionAsked")
let AnswerOne = document.getElementById("AnswerOne")
let AnswerTwo = document.getElementById("AnswerTwo")
let AnswerThree = document.getElementById("AnswerThree")
let AnswerFour = document.getElementById("AnswerFour")
let Interests = document.getElementById("Interests")
let ProgramIdeas = document.getElementById("ProgramIdeas")

let ProgramOne = document.getElementById("ProgramOne");
let ProgramTwo = document.getElementById("ProgramTwo");
let ProgramThree = document.getElementById("ProgramThree");
let ProgramFour = document.getElementById("ProgramFour");
let ProgramFive = document.getElementById("ProgramFive");
let ProgramSix = document.getElementById("ProgramSix");
let ProgramSeven = document.getElementById("ProgramSeven");
let ProgramEight = document.getElementById("ProgramEight");

let ProgramMatchContainer = document.getElementById("ProgramMatchContainer")
ProgramMatchContainer.style.display = "none"
// Clearwater Campus ignore this
let accountingOperations, medicalAdministrativeSpecialist, practicalNursingClearwater, childCareCenterOperationsClearwater; // Business, Medical, & Childcare
let computerSystemsITClearwater, networkSupportServices, webDevelopment, electronicSystemsIntegration; // IT & Technology
let masterAutomotiveServiceTechnology1Clearwater, masterAutomotiveServiceTechnology2Clearwater, dieselMaintenanceTechnician, dieselSystemsTechnician1, dieselSystemsTechnician2, marineServiceTechnologies; // Automotive & Diesel
let electricityClearwater, hvacR1Clearwater, weldingTechnologyClearwater, weldingTechnologyAdvancedClearwater, machiningTechnologies, cabinetmaking, interiorDecoratingServices, stageProduction, fundamentalFoodserviceSkills, bakingPastryArts, professionalCulinaryArtsClearwater, barberingClearwater; // Trades, Construction, Culinary, & Beauty

// St. Pete Campus ignore this
let medicalCoderBiller, practicalNursingStPete, dentalAssisting, emergencyMedicalTechnician, earlyChildhoodEducation, childCareCenterOperationsStPete, schoolAgeProfessionalCertificate; // Medical, Childcare, & Education
let computerAidedDrawingModeling, computerSystemsITStPete, televisionProductionTechnology, publicWorks; // IT, Media, & Technical
let masterAutomotiveServiceTechnology1StPete, masterAutomotiveServiceTechnology2StPete, automotiveCollisionTech, commercialClassBDriving, commercialVehicleDriving; // Automotive & Transportation
let electricityStPete, hvacR1StPete, weldingTechnologyStPete, weldingTechnologyAdvancedStPete, plumbing, jewelryDesignRepair1, jewelryDesignRepair2, cosmetology, barberingStPete, nailsSpecialty, facialsSpecialty, surgicalTechnology, professionalCulinaryArtsStPete; // Trades, Construction, Beauty, & Culinary





// Clearwater Campus
let ClearwaterBusinessMedicalChildcare = [accountingOperations, medicalAdministrativeSpecialist,practicalNursingClearwater,childCareCenterOperationsClearwater]  // Business, Medical, & Childcare Array
let ClearwaterITtechnology = [computerSystemsITClearwater, networkSupportServices, webDevelopment, electronicSystemsIntegration] // IT & Technology array
let ClearwaterAutomotiveDiesel = [ masterAutomotiveServiceTechnology1Clearwater, masterAutomotiveServiceTechnology2Clearwater, dieselMaintenanceTechnician, dieselSystemsTechnician1, dieselSystemsTechnician2, marineServiceTechnologies] // Automotive & Diesel
let ClearwatertradesBeauty = [electricityClearwater, hvacR1Clearwater, weldingTechnologyClearwater, weldingTechnologyAdvancedClearwater, machiningTechnologies, cabinetmaking, interiorDecoratingServices, stageProduction, fundamentalFoodserviceSkills, bakingPastryArts, professionalCulinaryArtsClearwater, barberingClearwater] // Trades, Construction, Culinary, & Beauty

// St. Pete Campus
let StPeteBusinessMedicalChildcare = [medicalCoderBiller, practicalNursingStPete, dentalAssisting, emergencyMedicalTechnician, earlyChildhoodEducation, childCareCenterOperationsStPete, schoolAgeProfessionalCertificate] // Medical, Childcare, & Education
let StPeteITtechnology = [computerAidedDrawingModeling, computerSystemsITStPete, televisionProductionTechnology, publicWorks] // IT, Media, & Technical
let StPeteAutomotiveDiesel = [masterAutomotiveServiceTechnology1StPete, masterAutomotiveServiceTechnology2StPete, automotiveCollisionTech, commercialClassBDriving, commercialVehicleDriving] // Automotive & Transportation
let StPeteTradesBeauty = [electricityStPete, hvacR1StPete, weldingTechnologyStPete, weldingTechnologyAdvancedStPete, plumbing, jewelryDesignRepair1, jewelryDesignRepair2, cosmetology, barberingStPete, nailsSpecialty, facialsSpecialty, surgicalTechnology, professionalCulinaryArtsStPete] // Trades, Construction, Beauty, & Culinary

let Clearwater = false;
let StPete = false;
let Both = false;

function startSurvey() {
    AnswerFour.style.display = "none";
    Question.innerHTML = "What is your preferred campus?";
    AnswerOne.innerHTML = "Clearwater Campus";
    AnswerTwo.innerHTML = "St. Pete Campus";
    AnswerThree.innerHTML = "Both/Either Campus Works For Me";

    AnswerOne.onclick = function () { questionTwo("Clearwater"); };
    AnswerTwo.onclick = function () { questionTwo("StPete"); };
    AnswerThree.onclick = function () { questionTwo("Both"); };
}

startSurvey();

function questionTwo(Location) {
    AnswerFour.style.display = "block";
    Question.innerHTML = "Which of these activities sounds most enjoyable to you?";
    AnswerOne.innerHTML = "Troubleshooting, repairing, and working with technology or vehicles.";
    AnswerTwo.innerHTML = "Cooking, baking, or decorating spaces.";
    AnswerThree.innerHTML = "Working with children, patients, or the public.";
    AnswerFour.innerHTML = "Designing, drawing, or working with tools and machinery.";

    AnswerOne.onclick = function () { questionThree(Location, 1); };
    AnswerTwo.onclick = function () { questionThree(Location, 2); };
    AnswerThree.onclick = function () { questionThree(Location, 3); };
    AnswerFour.onclick = function () { questionThree(Location, 4); };
}

function questionThree(Location, AnswerChoice) {
    Question.innerHTML = "What is your preferred method of working?";

    if (Location === "Clearwater") {
        switch (AnswerChoice) {
            case 1:
                AnswerOne.innerHTML = "Diagnosing and repairing car engines."; //done
                AnswerTwo.innerHTML = "Maintaining and servicing diesel trucks and equipment."; //done
                AnswerThree.innerHTML = "Using computers, building, troubleshooting or networking.";
                AnswerFour.innerHTML = "Installing and repairing electrical systems."; //done
                break;
            case 2:
                AnswerOne.innerHTML = "Creating gourmet dishes in a professional kitchen."; //done
                AnswerTwo.innerHTML = "Baking specialty cakes, pastries, and bread."; //done
                AnswerThree.innerHTML = "Designing and decorating indoor spaces."; //done
                AnswerFour.innerHTML = "Organizing and managing large-scale events."; //done
                break;
            case 3:
                AnswerOne.innerHTML = "Managing a child care center."; //done
                AnswerTwo.innerHTML = "Assisting doctors and medical offices with administrative tasks."; //done
                AnswerThree.innerHTML = "Providing hands-on nursing care."; // done
                AnswerFour.innerHTML = "Working in the food service industry."; //done
                break;
            case 4:
                AnswerOne.innerHTML = "Crafting custom cabinets and woodwork."; //done
                AnswerTwo.innerHTML = "Welding and fabricating metal structures."; //done
                AnswerThree.innerHTML = "Operating high-precision machining tools."; //done
                AnswerFour.innerHTML = "Installing and maintaining HVAC systems."; //done
                break;
        }
    } else if (Location === "StPete") {
        switch (AnswerChoice) {
            case 1:
                AnswerOne.innerHTML = "Repairing and customizing vehicle exteriors.";
                AnswerTwo.innerHTML = "Diagnosing and fixing car engines.";
                AnswerThree.innerHTML = "Maintaining and repairing electrical systems.";
                AnswerFour.innerHTML = "Installing and servicing heating and cooling systems.";
                break;
            case 2:
                AnswerOne.innerHTML = "Creating gourmet dishes in a professional kitchen.";
                AnswerTwo.innerHTML = "Working behind the scenes in television production.";
                AnswerThree.innerHTML = "Designing and repairing custom jewelry.";
                AnswerFour.innerHTML = "Styling hair and providing beauty treatments.";
                break;
            case 3:
                AnswerOne.innerHTML = "Assisting in dental offices and clinics.";
                AnswerTwo.innerHTML = "Helping patients with medical records and billing.";
                AnswerThree.innerHTML = "Providing emergency medical care.";
                AnswerFour.innerHTML = "Teaching and caring for young children.";
                break;
            case 4:
                AnswerOne.innerHTML = "Creating detailed technical drawings and models.";
                AnswerTwo.innerHTML = "Constructing and installing plumbing systems.";
                AnswerThree.innerHTML = "Welding and fabricating metal structures.";
                AnswerFour.innerHTML = "Crafting custom metal and jewelry pieces.";
                break;
        }
    } else if (Location === "Both") {
        switch (AnswerChoice) {
            case 1:
                AnswerOne.innerHTML = "Diagnosing and repairing car engines.";
                AnswerTwo.innerHTML = "Maintaining and servicing diesel trucks and equipment.";
                AnswerThree.innerHTML = "Setting up and troubleshooting computer networks and security systems.";
                AnswerFour.innerHTML = "Installing and repairing electrical or HVAC systems.";
                break;
            case 2:
                AnswerOne.innerHTML = "Creating gourmet dishes in a professional kitchen.";
                AnswerTwo.innerHTML = "Baking specialty cakes, pastries, and bread.";
                AnswerThree.innerHTML = "Designing and decorating indoor spaces.";
                AnswerFour.innerHTML = "Managing behind-the-scenes production for events and television.";
                break;
            case 3:
                AnswerOne.innerHTML = "Managing a child care center or teaching young children.";
                AnswerTwo.innerHTML = "Assisting in medical offices, hospitals, or surgical rooms.";
                AnswerThree.innerHTML = "Working in a dental office assisting with patient care.";
                AnswerFour.innerHTML = "Helping customers in food service or hospitality.";
                break;
            case 4:
                AnswerOne.innerHTML = "Crafting custom furniture, cabinets, or home designs.";
                AnswerTwo.innerHTML = "Welding, machining, or fabricating metal structures.";
                AnswerThree.innerHTML = "Creating technical drawings, models, or working with public infrastructure.";
                AnswerFour.innerHTML = "Crafting and repairing custom jewelry.";
                break;
        }
    }

    AnswerOne.onclick = function () { questionFourList(Location, FinalAnswerChoice = AnswerOne.innerHTML); };
    AnswerTwo.onclick = function () { questionFourList(Location, FinalAnswerChoice = AnswerTwo.innerHTML); };
    AnswerThree.onclick = function () { questionFourList(Location, FinalAnswerChoice = AnswerThree.innerHTML); };
    AnswerFour.onclick = function () { questionFourList(Location, FinalAnswerChoice = AnswerFour.innerHTML); };
}

// Function to update the program list based on user's location and final choice
function questionFourList(Location, FinalAnswerChoice) {
    if (Location == "Clearwater") {
        switch(FinalAnswerChoice) {
            case "Diagnosing and repairing car engines.":
            case "Maintaining and servicing diesel trucks and equipment.":
                // Automotive, Diesel, & Technology (Technology/Repair interest)
                Interests.innerHTML = "Based on your interest in maintaining and repairing technology or vehicles, here are some program suggestions for you...";
                ProgramOne.innerHTML = '<a target="_blank" href="https://www.pcsb.org/Page/7412">Master Automotive Service Technology 1</a>';
                ProgramTwo.innerHTML = '<a target="_blank" href="https://www.pcsb.org/Page/38314">Diesel Maintenance Technician 1</a>';
                ProgramThree.innerHTML = '<a target="_blank" href="https://www.pcsb.org/Page/6961">Diesel System Technician 1</a>';
                ProgramFour.innerHTML = '<a target="_blank" href="https://www.pcsb.org/Page/15218">Marine Service Technologies</a>';
                break;
            case "Creating gourmet dishes in a professional kitchen.":
            case "Baking specialty cakes, pastries, and bread.":
            case "Working in the food service industry.":
            case "Designing and decorating indoor spaces.":
            case "Organizing and managing large-scale events.":
                // Culinary & Personal Services (Cooking, Baking, and Decorating interest)
                Interests.innerHTML = "Based on your interest in cooking, baking, or decorating spaces, here are some program suggestions for you...";
                ProgramOne.innerHTML = '<a target="_blank" href="https://www.pcsb.org/Page/7009">Professional Culinary Arts</a>';
                ProgramTwo.innerHTML = '<a target="_blank" href="https://www.pcsb.org/Page/15220">Baking and Pastry Arts</a>';
                ProgramThree.innerHTML = '<a target="_blank" href="https://www.pcsb.org/Page/6964">Interior Decorating Services</a>';
                ProgramFour.innerHTML = '<a target="_blank" href="https://www.pcsb.org/Page/26411">Stage Production</a>';
                ProgramFive.innerHTML = '<a target="_blank" href="https://www.pcsb.org/Page/39767">Fundamental Foodservice Skills</a>';;
                ProgramSix.innerHTML = '<a href="https://www.pcsb.org/Page/17129">Barbering</a>';
                break;
            case "Providing hands-on nursing care.":
            case "Assisting doctors and medical offices with administrative tasks.":
            case "Managing a child care center.":
                // Healthcare & Childcare (Working with Children/Patients)
                Interests.innerHTML = "Based on your interest in working with children, patients, or the public, here are some program suggestions for you...";
                ProgramOne.innerHTML = "Medical Administrative Specialist";
                ProgramTwo.innerHTML = "Practical Nursing";
                ProgramThree.innerHTML = "Emergency Medical Technician";
                ProgramFour.innerHTML = "Child Care Center Operations";
                ProgramFive.innerHTML = "Medical Coding and Billing";
                ProgramSix.innerHTML = "Early Childhood Education";
                break;
            case "Crafting custom cabinets and woodwork.":
            case "Welding and fabricating metal structures.":
            case "Operating high-precision machining tools.":
            case "Installing and maintaining HVAC systems.":
            case "Installing and repairing electrical systems.":
                // Skilled Trades & Industrial Technology (Working with tools or machinery)
                Interests.innerHTML = "Based on your interest in working with tools and machinery, here are some program suggestions for you...";
                ProgramOne.innerHTML = "Welding Technology";
                ProgramTwo.innerHTML = "Machining Technologies";
                ProgramThree.innerHTML = "Electricity";
                ProgramFour.innerHTML = "HVACR 1";
                ProgramFive.innerHTML = "Cabinetmaking";
                ProgramSix.innerHTML = "Welding Technology Advanced";
                break;

            case "Using computers, building, troubleshooting or networking.":
                Interests.innerHTML = "Based on your interest using computers, building, troubleshooting or networking, here are some program suggestions for you...";
                ProgramOne.innerHTML = "Web Development";
                ProgramTwo.innerHTML = "Network Support Services";
                ProgramThree.innerHTML = "Electronic Systems Integration and Automation";
                ProgramFour.innerHTML = "Computer Systems & Information Technology";
        }
    } else if (Location == "StPete") {
        switch(FinalAnswerChoice) {
            case "Repairing and customizing vehicle exteriors.":
            case "Diagnosing and fixing car engines.":
                // Automotive, Diesel, & Technology (Technology/Repair interest)
                Interests.innerHTML = "Based on your interest in repairing vehicles and technology, here are some program suggestions for you...";
                ProgramOne.innerHTML = "Master Automotive Service Technology 1";
                ProgramThree.innerHTML = "Automotive Collision Technology";
                ProgramFour.innerHTML = "Vehicle Maintenance and Repair";
                ProgramFive.innerHTML = "Commercial Vehicle Driving";
                ProgramSix.innerHTML = "Diesel Systems Technician 1";
                break;
            case "Creating gourmet dishes in a professional kitchen.":
            case "Working behind the scenes in television production.":
            case "Designing and repairing custom jewelry.":
            case "Styling hair and providing beauty treatments.":
                // Culinary & Personal Services (Cooking, Baking, and Decorating interest)
                Interests.innerHTML = "Based on your interest in culinary arts, here are some program suggestions for you...";
                ProgramOne.innerHTML = "Professional Culinary Arts";
                ProgramTwo.innerHTML = "Baking and Pastry Arts";
                ProgramThree.innerHTML = "Interior Decorating Services";
                ProgramFour.innerHTML = "Jewelry Design and Repair";
                ProgramFive.innerHTML = "Barbering";
                ProgramSix.innerHTML = "Cosmetology";
                ProgramSeven.innerHTML = "Nails Specialty"
                ProgramEight.innerHTML = "Facial Specialty"
                break;
            case "Assisting in dental offices and clinics.":
            case "Helping patients with medical records and billing.":
            case "Providing emergency medical care.":
            case "Teaching and caring for young children.":
                // Healthcare & Childcare (Working with Children/Patients)
                Interests.innerHTML = "Based on your interest in working with children and patients, here are some program suggestions for you...";
                ProgramOne.innerHTML = "Emergency Medical Technician";
                ProgramTwo.innerHTML = "Dental Assisting";
                ProgramThree.innerHTML = "Medical Coding and Billing";
                ProgramFour.innerHTML = "Practical Nursing";
                ProgramFive.innerHTML = "Child Care Center Operations";
                ProgramSix.innerHTML = "Early Childhood Education";
                ProgramSeven.innerHTML = "Surgical Technology"
                break;
            case "Creating detailed technical drawings and models.":
            case "Constructing and installing plumbing systems.":
            case "Welding and fabricating metal structures.":
            case "Crafting custom metal and jewelry pieces.":
                // Skilled Trades & Industrial Technology (Working with tools or machinery)
                Interests.innerHTML = "Based on your interest in working with tools and machinery, here are some program suggestions for you...";
                ProgramOne.innerHTML = "Electricity";
                ProgramTwo.innerHTML = "HVACR 1";
                ProgramThree.innerHTML = "Welding Technology";
                ProgramFour.innerHTML = "Welding Technology Advanced";
                ProgramFive.innerHTML = "Plumbing";
                ProgramSix.innerHTML = "Jewelry Design and Repair 1";
                break;
        }
    } else if (Location == "Both") {
        switch(FinalAnswerChoice) {
            case "Diagnosing and repairing car engines.":
            case "Maintaining and servicing diesel trucks and equipment.":
            case "Setting up and troubleshooting computer networks and security systems.":
            case "Installing and repairing electrical or HVAC systems.":
                // Automotive, Diesel, & Technology (Technology/Repair interest)
                Interests.innerHTML = "Based on your interest in maintaining and repairing vehicles or technology, here are some program suggestions for you...";
                ProgramOne.innerHTML = "Master Automotive Service Technology 1";
                ProgramThree.innerHTML = "Diesel Maintenance Technician";
                ProgramFour.innerHTML = "Diesel Systems Technician 1";
                ProgramSix.innerHTML = "Marine Service Technologies";
                break;
            case "Creating gourmet dishes in a professional kitchen.":
            case "Baking specialty cakes, pastries, and bread.":
            case "Designing and decorating indoor spaces.":
            case "Managing behind-the-scenes production for events and television.":
                // Culinary & Personal Services (Cooking, Baking, and Decorating interest)
                Interests.innerHTML = "Based on your interest in cooking, baking, or decorating spaces, here are some program suggestions for you...";
                ProgramOne.innerHTML = "Professional Culinary Arts";
                ProgramTwo.innerHTML = "Baking and Pastry Arts";
                ProgramThree.innerHTML = "Interior Decorating Services";
                ProgramFour.innerHTML = "Stage Production";
                ProgramFive.innerHTML = "Fundamental Foodservice Skills";
                ProgramSix.innerHTML = "Barbering";
                break;
            case "Managing a child care center or teaching young children.":
            case "Assisting in medical offices, hospitals, or surgical rooms.":
            case "Working in a dental office assisting with patient care.":
            case "Helping customers in food service or hospitality.":
                // Healthcare & Childcare (Working with Children/Patients)
                Interests.innerHTML = "Based on your interest in working with children, patients, or the public, here are some program suggestions for you...";
                ProgramOne.innerHTML = "Medical Administrative Specialist";
                ProgramTwo.innerHTML = "Practical Nursing";
                ProgramThree.innerHTML = "Emergency Medical Technician";
                ProgramFour.innerHTML = "Child Care Center Operations";
                ProgramFive.innerHTML = "Medical Coding and Billing";
                ProgramSix.innerHTML = "Early Childhood Education";
                break;
            case "Crafting custom furniture, cabinets, or home designs.":
            case "Welding, machining, or fabricating metal structures.":
            case "Creating technical drawings, models, or working with public infrastructure.":
            case "Crafting and repairing custom jewelry.":
                // Skilled Trades & Industrial Technology (Working with tools or machinery)
                Interests.innerHTML = "Based on your interest in working with tools and machinery, here are some program suggestions for you...";
                ProgramOne.innerHTML = "Welding Technology";
                ProgramTwo.innerHTML = "Machining Technologies";
                ProgramThree.innerHTML = "Electricity";
                ProgramFour.innerHTML = "HVACR 1";
                ProgramFive.innerHTML = "Cabinetmaking";
                ProgramSix.innerHTML = "Welding Technology Advanced";
                break;
        }
    }
}

// nailsSpecialty facialsSpecialty
