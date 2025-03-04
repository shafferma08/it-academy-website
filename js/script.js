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
                AnswerOne.innerHTML = "Diagnosing and repairing car engines.";
                AnswerTwo.innerHTML = "Maintaining and servicing diesel trucks and equipment.";
                AnswerThree.innerHTML = "Setting up and troubleshooting computer networks.";
                AnswerFour.innerHTML = "Installing and repairing electrical systems.";
                break;
            case 2:
                AnswerOne.innerHTML = "Creating gourmet dishes in a professional kitchen.";
                AnswerTwo.innerHTML = "Baking specialty cakes, pastries, and bread.";
                AnswerThree.innerHTML = "Designing and decorating indoor spaces.";
                AnswerFour.innerHTML = "Organizing and managing large-scale events.";
                break;
            case 3:
                AnswerOne.innerHTML = "Managing a child care center.";
                AnswerTwo.innerHTML = "Assisting doctors and medical offices with administrative tasks.";
                AnswerThree.innerHTML = "Providing hands-on nursing care.";
                AnswerFour.innerHTML = "Working in the food service industry.";
                break;
            case 4:
                AnswerOne.innerHTML = "Crafting custom cabinets and woodwork.";
                AnswerTwo.innerHTML = "Welding and fabricating metal structures.";
                AnswerThree.innerHTML = "Operating high-precision machining tools.";
                AnswerFour.innerHTML = "Installing and maintaining HVAC systems.";
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

    AnswerOne.onclick = function () { questionFourList(Location, 1); };
    AnswerTwo.onclick = function () { questionFourList(Location, 2); };
    AnswerThree.onclick = function () { questionFourList(Location, 3); };
    AnswerFour.onclick = function () { questionFourList(Location, 4); };
}

// Function to update the program list based on user's location and final choice
function questionFourList(Location, FinalAnswerChoice) {
    if (Location == "Clearwater") {
        switch(FinalAnswerChoice) {
            case 1:
                // Automotive, Diesel, & Technology (Technology/Repair interest)
                Interests.innerHTML = "Based on your interest in maintaining and repairing technology or vehicles, here are some program suggestions for you...";
                ProgramOne.innerHTML = "Master Automotive Service Technology 1";
                ProgramTwo.innerHTML = "Master Automotive Service Technology 2";
                ProgramThree.innerHTML = "Diesel Maintenance Technician";
                ProgramFour.innerHTML = "Diesel Systems Technician 1";
                ProgramFive.innerHTML = "Diesel Systems Technician 2";
                ProgramSix.innerHTML = "Marine Service Technologies";
                break;
            case 2:
                // Culinary & Personal Services (Cooking, Baking, and Decorating interest)
                Interests.innerHTML = "Based on your interest in cooking, baking, or decorating spaces, here are some program suggestions for you...";
                ProgramOne.innerHTML = "Professional Culinary Arts";
                ProgramTwo.innerHTML = "Baking and Pastry Arts";
                ProgramThree.innerHTML = "Interior Decorating Services";
                ProgramFour.innerHTML = "Stage Production";
                ProgramFive.innerHTML = "Fundamental Foodservice Skills";
                ProgramSix.innerHTML = "Barbering";
                break;
            case 3:
                // Healthcare & Childcare (Working with Children/Patients)
                Interests.innerHTML = "Based on your interest in working with children, patients, or the public, here are some program suggestions for you...";
                ProgramOne.innerHTML = "Medical Administrative Specialist";
                ProgramTwo.innerHTML = "Practical Nursing";
                ProgramThree.innerHTML = "Emergency Medical Technician";
                ProgramFour.innerHTML = "Child Care Center Operations";
                ProgramFive.innerHTML = "Medical Coding and Billing";
                ProgramSix.innerHTML = "Early Childhood Education";
                break;
            case 4:
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
    } else if (Location == "StPete") {
        switch(FinalAnswerChoice) {
            case 1:
                // Automotive, Diesel, & Technology (Technology/Repair interest)
                Interests.innerHTML = "Based on your interest in repairing vehicles and technology, here are some program suggestions for you...";
                ProgramOne.innerHTML = "Master Automotive Service Technology 1";
                ProgramTwo.innerHTML = "Master Automotive Service Technology 2";
                ProgramThree.innerHTML = "Automotive Collision Technology";
                ProgramFour.innerHTML = "Vehicle Maintenance and Repair";
                ProgramFive.innerHTML = "Commercial Vehicle Driving";
                ProgramSix.innerHTML = "Diesel Systems Technician 1";
                break;
            case 2:
                // Culinary & Personal Services (Cooking, Baking, and Decorating interest)
                Interests.innerHTML = "Based on your interest in culinary arts, here are some program suggestions for you...";
                ProgramOne.innerHTML = "Professional Culinary Arts";
                ProgramTwo.innerHTML = "Baking and Pastry Arts";
                ProgramThree.innerHTML = "Interior Decorating Services";
                ProgramFour.innerHTML = "Jewelry Design and Repair";
                ProgramFive.innerHTML = "Barbering";
                ProgramSix.innerHTML = "Cosmetology";
                break;
            case 3:
                // Healthcare & Childcare (Working with Children/Patients)
                Interests.innerHTML = "Based on your interest in working with children and patients, here are some program suggestions for you...";
                ProgramOne.innerHTML = "Emergency Medical Technician";
                ProgramTwo.innerHTML = "Dental Assisting";
                ProgramThree.innerHTML = "Medical Coding and Billing";
                ProgramFour.innerHTML = "Practical Nursing";
                ProgramFive.innerHTML = "Child Care Center Operations";
                ProgramSix.innerHTML = "Early Childhood Education";
                break;
            case 4:
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
            case 1:
                // Automotive, Diesel, & Technology (Technology/Repair interest)
                Interests.innerHTML = "Based on your interest in maintaining and repairing vehicles or technology, here are some program suggestions for you...";
                ProgramOne.innerHTML = "Master Automotive Service Technology 1";
                ProgramTwo.innerHTML = "Master Automotive Service Technology 2";
                ProgramThree.innerHTML = "Diesel Maintenance Technician";
                ProgramFour.innerHTML = "Diesel Systems Technician 1";
                ProgramFive.innerHTML = "Diesel Systems Technician 2";
                ProgramSix.innerHTML = "Marine Service Technologies";
                break;
            case 2:
                // Culinary & Personal Services (Cooking, Baking, and Decorating interest)
                Interests.innerHTML = "Based on your interest in cooking, baking, or decorating spaces, here are some program suggestions for you...";
                ProgramOne.innerHTML = "Professional Culinary Arts";
                ProgramTwo.innerHTML = "Baking and Pastry Arts";
                ProgramThree.innerHTML = "Interior Decorating Services";
                ProgramFour.innerHTML = "Stage Production";
                ProgramFive.innerHTML = "Fundamental Foodservice Skills";
                ProgramSix.innerHTML = "Barbering";
                break;
            case 3:
                // Healthcare & Childcare (Working with Children/Patients)
                Interests.innerHTML = "Based on your interest in working with children, patients, or the public, here are some program suggestions for you...";
                ProgramOne.innerHTML = "Medical Administrative Specialist";
                ProgramTwo.innerHTML = "Practical Nursing";
                ProgramThree.innerHTML = "Emergency Medical Technician";
                ProgramFour.innerHTML = "Child Care Center Operations";
                ProgramFive.innerHTML = "Medical Coding and Billing";
                ProgramSix.innerHTML = "Early Childhood Education";
                break;
            case 4:
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
