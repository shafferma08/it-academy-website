let Question = document.getElementById("QuestionAsked")
let AnswerOne = document.getElementById("AnswerOne")
let AnswerTwo = document.getElementById("AnswerTwo")
let AnswerThree = document.getElementById("AnswerThree")
let AnswerFour = document.getElementById("AnswerFour")


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

let Clearwater = false
let StPete = false
let Both = false



function startSurvey() {
    AnswerFour.style.display = "none";
    Question.innerHTML = "What is your preferred campus?"
    AnswerOne.innerHTML = "Clearwater Campus"
    AnswerTwo.innerHTML = "St. Pete Campus"
    AnswerThree.innerHTML = "Both/Either Campus Works For Me"

    AnswerOne.onclick = function () { questionTwo("Clearwater"); };
    AnswerTwo.onclick = function () { questionTwo("StPete"); };
    AnswerThree.onclick = function () { questionTwo("Both"); };
    
}

startSurvey()

function questionTwo(Location) {
    AnswerFour.style.display = "block"
    Question.innerHTML = "Which of these activities sounds most enjoyable to you?"
    AnswerOne.innerHTML = "Troubleshooting, repairing, and working with technology or vehicles."
    AnswerTwo.innerHTML = "Cooking, baking, or decorating spaces."
    AnswerThree.innerHTML = "Working with children, patients, or the public."
    AnswerFour.innerHTML = "Designing, drawing, or working with tools and machinery."

    AnswerOne.onclick = function () { questionThree(Location, 1); };
    AnswerTwo.onclick = function () { questionThree(Location, 2); };
    AnswerThree.onclick = function () { questionThree(Location, 3); };
    AnswerFour.onclick = function () { questionThree(Location, 4); };

}


function questionThree(Location, AnswerChoice) {
    Question.innerHTML = "What is your preferred method of working?"
     if (Location == "Clearwater"){
        switch(AnswerChoice) {
            case 1:
                AnswerOne.innerHTML = "Diagnosing and repairing car engines."
                AnswerTwo.innerHTML = "Maintaining and servicing diesel trucks and equipment."
                AnswerThree.innerHTML = "Setting up and troubleshooting computer networks."
                AnswerFour.innerHTML = "Installing and repairing electrical systems."

                AnswerOne.onclick = function () { questionFourList(Location); };
                AnswerTwo.onclick = function () { questionFourList(Location); };
                AnswerThree.onclick = function () { questionFourList(Location); };
                AnswerFour.onclick = function () { questionFourList(Location); };
                break;
            case 2:
                AnswerOne.innerHTML = "Creating gourmet dishes in a professional kitchen."
                AnswerTwo.innerHTML = "Baking specialty cakes, pastries, and bread. "
                AnswerThree.innerHTML = "Designing and decorating indoor spaces."
                AnswerFour.innerHTML = "Organizing and managing large-scale events."

                AnswerOne.onclick = function () { questionFourList(Location); };
                AnswerTwo.onclick = function () { questionFourList(Location); };
                AnswerThree.onclick = function () { questionFourList(Location); };
                AnswerFour.onclick = function () { questionFourList(Location); };
                break;
            case 3:
                AnswerOne.innerHTML = "Managing a child care center."
                AnswerTwo.innerHTML = "Assisting doctors and medical offices with administrative tasks."
                AnswerThree.innerHTML = "Providing hands-on nursing care."
                AnswerFour.innerHTML = "Working in the food service industry."

                AnswerOne.onclick = function () { questionFourList(Location); };
                AnswerTwo.onclick = function () { questionFourList(Location); };
                AnswerThree.onclick = function () { questionFourList(Location); };
                AnswerFour.onclick = function () { questionFourList(Location); };
                break;
            case 4:
                AnswerOne.innerHTML = "Crafting custom cabinets and woodwork."
                AnswerTwo.innerHTML = "Welding and fabricating metal structures."
                AnswerThree.innerHTML = "Operating high-precision machining tools."
                AnswerFour.innerHTML = "Installing and maintaining HVAC systems."

                AnswerOne.onclick = function () { questionFourList(Location); };
                AnswerTwo.onclick = function () { questionFourList(Location); };
                AnswerThree.onclick = function () { questionFourList(Location); };
                AnswerFour.onclick = function () { questionFourList(Location); };
                break;
        }
     }
     else if (Location == "StPete") {
        switch(AnswerChoice) {
            case 1:
                AnswerOne.innerHTML = "Repairing and customizing vehicle exteriors."
                AnswerTwo.innerHTML = "Diagnosing and fixing car engines."
                AnswerThree.innerHTML = "Maintaining and repairing electrical systems."
                AnswerFour.innerHTML = "Installing and servicing heating and cooling systems."

                AnswerOne.onclick = function () { questionFourList(Location); };
                AnswerTwo.onclick = function () { questionFourList(Location); };
                AnswerThree.onclick = function () { questionFourList(Location); };
                AnswerFour.onclick = function () { questionFourList(Location); };
                break;
            case 2:
                AnswerOne.innerHTML = "Creating gourmet dishes in a professional kitchen."
                AnswerTwo.innerHTML = "Working behind the scenes in television production."
                AnswerThree.innerHTML = "Designing and repairing custom jewelry."
                AnswerFour.innerHTML = "Styling hair and providing beauty treatments."

                AnswerOne.onclick = function () { questionFourList(Location); };
                AnswerTwo.onclick = function () { questionFourList(Location); };
                AnswerThree.onclick = function () { questionFourList(Location); };
                AnswerFour.onclick = function () { questionFourList(Location); };
                break;
            case 3:
                AnswerOne.innerHTML = "Assisting in dental offices and clinics."
                AnswerTwo.innerHTML = "Helping patients with medical records and billing."
                AnswerThree.innerHTML = "Providing emergency medical care."
                AnswerFour.innerHTML = "Teaching and caring for young children."

                AnswerOne.onclick = function () { questionFourList(Location); };
                AnswerTwo.onclick = function () { questionFourList(Location); };
                AnswerThree.onclick = function () { questionFourList(Location); };
                AnswerFour.onclick = function () { questionFourList(Location); };
                break;
            case 4:
                AnswerOne.innerHTML = "Creating detailed technical drawings and models."
                AnswerTwo.innerHTML = "Constructing and installing plumbing systems."
                AnswerThree.innerHTML = "Welding and fabricating metal structures."
                AnswerFour.innerHTML = "Crafting custom metal and jewelry pieces."

                AnswerOne.onclick = function () { questionFourList(Location); };
                AnswerTwo.onclick = function () { questionFourList(Location); };
                AnswerThree.onclick = function () { questionFourList(Location); };
                AnswerFour.onclick = function () { questionFourList(Location); };
                break;
        }
     }
     else if (location == "Both") {
        switch(AnswerChoice) {
            case 1:
                AnswerOne.innerHTML = "Diagnosing and repairing car engines."
                AnswerTwo.innerHTML = "Maintaining and servicing diesel trucks and equipment."
                AnswerThree.innerHTML = "Setting up and troubleshooting computer networks and security systems."
                AnswerFour.innerHTML = "Installing and repairing electrical or HVAC systems."

                AnswerOne.onclick = function () { questionFourList(Location); };
                AnswerTwo.onclick = function () { questionFourList(Location); };
                AnswerThree.onclick = function () { questionFourList(Location); };
                AnswerFour.onclick = function () { questionFourList(Location); };
                break;
            case 2:
                AnswerOne.innerHTML = "Creating gourmet dishes in a professional kitchen."
                AnswerTwo.innerHTML = "Baking specialty cakes, pastries, and bread."
                AnswerThree.innerHTML = "Designing and decorating indoor spaces."
                AnswerFour.innerHTML = "Managing behind-the-scenes production for events and television."

                AnswerOne.onclick = function () { questionFourList(Location); };
                AnswerTwo.onclick = function () { questionFourList(Location); };
                AnswerThree.onclick = function () { questionFourList(Location); };
                AnswerFour.onclick = function () { questionFourList(Location); };
                break;
            case 3:
                AnswerOne.innerHTML = "Managing a child care center or teaching young children."
                AnswerTwo.innerHTML = "Assisting in medical offices, hospitals, or surgical rooms."
                AnswerThree.innerHTML = "Working in a dental office assisting with patient care."
                AnswerFour.innerHTML = "Helping customers in food service or hospitality."

                AnswerOne.onclick = function () { questionFourList(Location); };
                AnswerTwo.onclick = function () { questionFourList(Location); };
                AnswerThree.onclick = function () { questionFourList(Location); };
                AnswerFour.onclick = function () { questionFourList(Location); };
                break;
            case 4:
                AnswerOne.innerHTML = "Crafting custom furniture, cabinets, or home designs."
                AnswerTwo.innerHTML = "Welding, machining, or fabricating metal structures."
                AnswerThree.innerHTML = "Creating technical drawings, models, or working with public infrastructure."
                AnswerFour.innerHTML = "Crafting and repairing custom jewelry."

                AnswerOne.onclick = function () { questionFourList(Location); };
                AnswerTwo.onclick = function () { questionFourList(Location); };
                AnswerThree.onclick = function () { questionFourList(Location); };
                AnswerFour.onclick = function () { questionFourList(Location); };
                break;
     }
}}

function questionFourList(Location, FinalAnswerChoice) {
    if (Location == "Clearwater") {
        switch(FinalAnswerChoice) {
            case 1:
                //Business, Medical, & Childcare
              console.log(accountingOperations,
                medicalAdministrativeSpecialist,
                practicalNursingClearwater,
                childCareCenterOperationsClearwater)
                break;
                case 2:
                    //Information Technology & Digital Systems
                    console.log(computerSystemsITClearwater,
                        networkSupportServices,
                        webDevelopment,
                        electronicSystemsIntegration)
                        break;
                        case 3: 
                        //Automotive, Diesel, & Marine Technolog
                        console.log(masterAutomotiveServiceTechnology1Clearwater,
                            masterAutomotiveServiceTechnology2Clearwater,
                            dieselMaintenanceTechnician,
                            dieselSystemsTechnician1,
                            dieselSystemsTechnician2,
                            marineServiceTechnologies)
                            break;
                        case 4:
                            //Skilled Trades & Industrial Technology
                            console.log(electricityClearwater,
                                hvacR1Clearwater,
                                weldingTechnologyClearwater,
                                weldingTechnologyAdvancedClearwater,
                                machiningTechnologies,
                                cabinetmaking)
                                break;
                        case 5: 
                        //Arts, Culinary, & Personal Services
                        console.log(interiorDecoratingServices,
                            stageProduction,
                            fundamentalFoodserviceSkills,
                            bakingPastryArts,
                            professionalCulinaryArtsClearwater,
                            barberingClearwater)
                            break
        }

    }
    else if (Location == "StPete") {
        switch(FinalAnswerChoice) {
            case 1:
                // Business, Medical, & Childcare
                console.log(medicalCoderBiller,
                    practicalNursingStPete,
                    dentalAssisting,
                    emergencyMedicalTechnician,
                    earlyChildhoodEducation,
                    childCareCenterOperationsStPete,
                    schoolAgeProfessionalCertificate);
                break;
            case 2:
                // Information Technology & Digital Systems
                console.log(computerAidedDrawingModeling,
                    computerSystemsITStPete,
                    televisionProductionTechnology,
                    publicWorks);
                break;
            case 3:
                // Automotive & Transportation
                console.log(masterAutomotiveServiceTechnology1StPete,
                    masterAutomotiveServiceTechnology2StPete,
                    automotiveCollisionTech,
                    commercialClassBDriving,
                    commercialVehicleDriving);
                break;
            case 4:
                // Skilled Trades & Industrial Technology
                console.log(electricityStPete,
                    hvacR1StPete,
                    weldingTechnologyStPete,
                    weldingTechnologyAdvancedStPete,
                    plumbing,
                    surgicalTechnology);
                break;
            case 5:
                // Arts, Beauty, & Culinary
                console.log(jewelryDesignRepair1,
                    jewelryDesignRepair2,
                    cosmetology,
                    barberingStPete,
                    nailsSpecialty,
                    facialsSpecialty,
                    professionalCulinaryArtsStPete);
                break;
        }
        
    }
    else if (Location == "Both") {
        switch(FinalAnswerChoice) {
            case 1:
                // Business, Medical, & Childcare
                console.log(accountingOperations,
                    medicalAdministrativeSpecialist,
                    practicalNursingClearwater,
                    childCareCenterOperationsClearwater,
                    medicalCoderBiller,
                    practicalNursingStPete,
                    dentalAssisting,
                    emergencyMedicalTechnician,
                    earlyChildhoodEducation,
                    childCareCenterOperationsStPete,
                    schoolAgeProfessionalCertificate);
                break;
            case 2:
                // Information Technology & Digital Systems
                console.log(computerSystemsITClearwater,
                    networkSupportServices,
                    webDevelopment,
                    electronicSystemsIntegration,
                    computerAidedDrawingModeling,
                    computerSystemsITStPete,
                    televisionProductionTechnology,
                    publicWorks);
                break;
            case 3:
                // Automotive & Diesel & Marine Technology
                console.log(masterAutomotiveServiceTechnology1Clearwater,
                    masterAutomotiveServiceTechnology2Clearwater,
                    dieselMaintenanceTechnician,
                    dieselSystemsTechnician1,
                    dieselSystemsTechnician2,
                    marineServiceTechnologies,
                    masterAutomotiveServiceTechnology1StPete,
                    masterAutomotiveServiceTechnology2StPete,
                    automotiveCollisionTech,
                    commercialClassBDriving,
                    commercialVehicleDriving);
                break;
            case 4:
                // Skilled Trades & Industrial Technology
                console.log(electricityClearwater,
                    hvacR1Clearwater,
                    weldingTechnologyClearwater,
                    weldingTechnologyAdvancedClearwater,
                    machiningTechnologies,
                    cabinetmaking,
                    electricityStPete,
                    hvacR1StPete,
                    weldingTechnologyStPete,
                    weldingTechnologyAdvancedStPete,
                    plumbing,
                    surgicalTechnology);
                break;
            case 5:
                // Arts, Culinary, & Personal Services
                console.log(interiorDecoratingServices,
                    stageProduction,
                    fundamentalFoodserviceSkills,
                    bakingPastryArts,
                    professionalCulinaryArtsClearwater,
                    barberingClearwater,
                    jewelryDesignRepair1,
                    jewelryDesignRepair2,
                    cosmetology,
                    barberingStPete,
                    nailsSpecialty,
                    facialsSpecialty,
                    professionalCulinaryArtsStPete);
                break;
        }
        
    }
}

