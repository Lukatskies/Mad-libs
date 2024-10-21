//Function for inputs//
//type of bird//
function generateMadlib() {
    const typeOfBirdInput = document.getElementById('typeOfBird');
    const typeOfBird = typeOfBirdInput.value; 
    

//roomate name//
    const roommateNameInput = document.getElementById('roommateName');
    const roommateName = roommateNameInput.value;


//noun//
    const nounInput = document.getElementById('noun');
    const noun = nounInput.value;
    

//liquid//
    const liquidInput = document.getElementById('liquid');
    const liquid = liquidInput.value;
    

//bodypart//
    const bodyPartInput = document.getElementById('bodyPart');
    const bodyPart = bodyPartInput.value;


// construct text
        function madLibText() {
            return `It was a cold October day. I woke to the smell of ${typeOfBird} roasting in the kitchen. 
            My roommate said, 'See if ${roommateName} needs a fresh ${noun}.'  So I carried a glass of ${liquid} 
            into ${roommateName}'s room. When I got there, I couldn't believe my ${bodyPart}!`;
        }
// Call mad lib text function
        document.getElementById('mad-libs').innerText = madLibText();
}
    