// function play(){
//    // step-1: hide the home screen . to hide the screen add the class hidden to the home section
//    //show the play ground 
//    const homeSection = document.getElementById('home-screen') ;
// //    console.log(homeSection.classList)
// homeSection.classList.add('hidden')


// //playgound section 
// const playGroundScection=document.getElementById('playGround');
//  playGroundScection.classList.remove('hidden')
    
// }
//-----------------------alternative way---------------------------

function handelKeyboardKeyupEvent(event){
    const playerPressed=event.key;
    console.log('playper pressed',playerPressed);


    //get the epected to press
    const currentAlphabateElement=document.getElementById('current-alphabate');
    const currentAlphabet =currentAlphabateElement.innerText;
    const expectedAlphabate=currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabate);

    //check matched or not 
    if(playerPressed===expectedAlphabate)
    {
        console.log('you get a point')
    }
    else{
        console.log('you missed life score')
    }

}
document.addEventListener('keyup',handelKeyboardKeyupEvent );




function continueGame(){
//step-1 generate a random alphabet 
const alphabet=getRandomAlphabet();
console.log('your random alphabate ',alphabet);

//set randomly generated alphabate on the screen
const currentAlphabateElement=document.getElementById('current-alphabate');
currentAlphabateElement.innerText=alphabet

//set bg color
setBackgroundColorById(alphabet)

}

function play(){
    hideElementById('home-screen');
    showElementById('playGround');
    continueGame()
}
