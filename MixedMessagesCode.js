/*File containing the code to perform the Mixed Messages programme.  
The programme will predict the users future*/


let mySentence = '';

/* mySentence will require 4 elements: a subject, a verb, an object and an exclamation.  Each element will
have 4 options that will be picked at random */ 

function randomNumber () {
    return Math.floor(Math.random()*4);
};

const nounArray = ['you','a great king','a holy fool','a man of incomparable genius'];
const verbArray = ['will die beside','will sore as high as an eagle with','will be scolded by','will plot vengance against'];
const objectArray = ['a great whale!','Darth Vader!','a bloody, great, big rock!','his entire family!'];
const exclamationArray = ['Alas!','Eeek!','Ooops!','What a mistake to make!'];

function sentenceCompiler () {
    const num1 = randomNumber();
    const num2 = randomNumber();
    const num3 = randomNumber();
    const num4 = randomNumber();
    return 'Nostradamus says: '+ nounArray[num1]+' '+ verbArray[num2]+' '+objectArray[num3]+' '+exclamationArray[num4]
};

console.log(sentenceCompiler());
