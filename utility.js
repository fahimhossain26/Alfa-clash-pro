function hideElementById(elementId){
const hideElement=document.getElementById(elementId);
hideElement.classList.add('hidden')
}

function showElementById(elementId){
    const showElement=document.getElementById(elementId);
    showElement.classList.remove('hidden')
}


function setBackgroundColorById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}



function getRandomAlphabet(){
    //get or create alphabet array
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets =alphabetString.split('');
    console.log(alphabets);

    // get a random index 0-25
    const randomNumber= Math.random() * 25;
    const index=Math.round(randomNumber);
    // console.log(index);

const alphabet=alphabets[index]
// console.log(index,alphabet);
return alphabet;
}