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

    AnswerOne.addEventListener("click", function(){
        questionTwo("Clearwater")
    })
    AnswerTwo.addEventListener("click", function(){
        questionTwo("StPete")
    })
    AnswerThree.addEventListener("click", function(){
        questionTwo("Both")
    })
}

startSurvey()

function questionTwo(Location) {
    AnswerFour.style.display = "block"
    Question.innerHTML = "Test?"
    AnswerOne.innerHTML = "Answer"
    AnswerTwo.innerHTML = "Answer"
    AnswerThree.innerHTML = "Answer"
    AnswerFour.innerHTML = "Answer"

    AnswerOne.addEventListener("click", function() {
        console.log(Location, "answer one");
    });

    AnswerTwo.addEventListener("click", function() {
        console.log(Location, "answer two");
    });

    AnswerThree.addEventListener("click", function() {
        console.log(Location, "answer three");
    });

    AnswerFour.addEventListener("click", function() {
        console.log(Location, "answer four");
    });
}


function questionThree() {
    
}