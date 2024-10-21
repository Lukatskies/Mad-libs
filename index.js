
// Function to get input value
function getInputValue(id) {
    const inputElement = document.getElementById(id);
    return inputElement.value;
}

// Function to generate the madlib
function generateMadlib() {
    const typeOfBird = getInputValue('typeOfBird');
    const roommateName = getInputValue('roommateName');
    const noun = getInputValue('noun');
    const liquid = getInputValue('liquid');
    const bodyPart = getInputValue('bodyPart');

    // Construct text
    function madLibText() {
        return `It was a cold October day. I woke to the smell of ${typeOfBird} roasting in the kitchen. 
            My roommate said, 'See if ${roommateName} needs a fresh ${noun}.' So I carried a glass of ${liquid} 
            into ${roommateName}'s room. When I got there, I couldn't believe my ${bodyPart}!`;
    }

    // Call mad lib text function
    document.getElementById('mad-libs').innerText = madLibText();
}
    