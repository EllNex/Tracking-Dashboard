
//work
let DWorkText = '5hrs';
let PDTimeWorkText = 'Previous - 7hrs';
let WWorkText = '32hrs';
let PWTimeWorkText = 'Previous - 36hrs';
let MWorkText = '103hrs';
let PMTimeWorkText = 'Previous - 128hrs';

const TimeWork = document.querySelector('#DaneWork')
const PTimeWork = document.querySelector('#PTimeWork')

//Play
let DPlayText = '1hrs';
let PDTimePlayText = 'Previous - 2hrs';
let WPlayText = '10hrs';
let PWTimePlayText = 'Previous - 8hrs';
let MPlayText = '23hrs';
let PMTimePlayText = 'Previous - 29hrs';

const TimePlay = document.querySelector('#DanePlay')
const PTimePlay = document.querySelector('#PTimePlay')

//Study
let DStudyText = '0hrs';
let PDTimeStudyText = 'Previous - 1hrs';
let WStudyText = '4hrs';
let PWTimeStudyText = 'Previous - 7hrs';
let MStudyText = '13hrs';
let PMTimeStudyText = 'Previous - 19hrs';

const TimeStudy = document.querySelector('#DaneStudy')
const PTimeStudy = document.querySelector('#PTimeStudy')

//Exercise
let DExerciseText = '1hrs';
let PDTimeExerciseText = 'Previous - 1hrs';
let WExerciseText = '4hrs';
let PWTimeExerciseText = 'Previous - 5hrs';
let MExerciseText = '11hrs';
let PMTimeExerciseText = 'Previous - 18hrs';

const TimeExercise = document.querySelector('#DaneExercise')
const PTimeExercise = document.querySelector('#PTimeExercise')

//Social
let DSocialText = '1hrs';
let PDTimeSocialText = 'Previous - 3hrs';
let WSocialText = '5hrs';
let PWTimeSocialText = 'Previous - 10hrs';
let MSocialText = '21hrs';
let PMTimeSocialText = 'Previous - 23hrs';

const TimeSocial = document.querySelector('#DaneSocial')
const PTimeSocial = document.querySelector('#PTimeSocial')

//Self-Care
let DSelfCareText = '0hrs';
let PDTimeSelfCareText = 'Previous - 1hrs';
let WSelfCareText = '2hrs';
let PWTimeSelfCareText = 'Previous - 2hrs';
let MSelfCareText = '7hrs';
let PMTimeSelfCareText = 'Previous - 11hrs';

const TimeSelfCare = document.querySelector('#DaneSelf-Care')
const PTimeSelfCare = document.querySelector('#PTimeSelf-Care')


document.getElementById('Monthly').addEventListener('click', function() {

    TimeWork.textContent = MWorkText; 
    PTimeWork.textContent = PMTimeWorkText; 

    TimePlay.textContent = MPlayText; 
    PTimePlay.textContent = PMTimePlayText; 

    TimeStudy.textContent = MStudyText; 
    PTimeStudy.textContent = PMTimeStudyText; 

    TimeExercise.textContent = MExerciseText; 
    PTimeExercise.textContent = PMTimeExerciseText; 

    TimeSocial.textContent = MSocialText; 
    PTimeSocial.textContent = PMTimeSocialText; 

    TimeSelfCare.textContent = MSelfCareText; 
    PTimeSelfCare.textContent = PMTimeSelfCareText; 

});

document.getElementById('Weekly').addEventListener('click', function() {

    TimeWork.textContent = WWorkText; 
    PTimeWork.textContent = PWTimeWorkText; 

    TimePlay.textContent = WPlayText; 
    PTimePlay.textContent = PWTimePlayText; 
    
    TimeStudy.textContent = WStudyText; 
    PTimeStudy.textContent = PWTimeStudyText; 
       
    TimeExercise.textContent = WExerciseText; 
    PTimeExercise.textContent = PWTimeExerciseText; 
       
    TimeSocial.textContent = WSocialText; 
    PTimeSocial.textContent = PWTimeSocialText; 
       
    TimeSelfCare.textContent = WSelfCareText; 
    PTimeSelfCare.textContent = PWTimeSelfCareText; 

});

document.getElementById('Daily').addEventListener('click', function() {

    TimeWork.textContent = DWorkText; 
    PTimeWork.textContent = PDTimeWorkText;

    TimePlay.textContent = DPlayText; 
    PTimePlay.textContent = PDTimePlayText; 
    
    TimeStudy.textContent = DStudyText; 
    PTimeStudy.textContent = PDTimeStudyText; 
        
    TimeExercise.textContent = DExerciseText; 
    PTimeExercise.textContent = PDTimeExerciseText; 
        
    TimeSocial.textContent = DSocialText; 
    PTimeSocial.textContent = PDTimeSocialText; 

    TimeSelfCare.textContent = DSelfCareText; 
    PTimeSelfCare.textContent = PDTimeSelfCareText; 

});














