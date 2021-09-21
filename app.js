const dob = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector('#lucky-number');
const checkButton = document.querySelector('#btn-check');
const message = document.querySelector('#output-message');


function hideMessage () {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function sumOfDigits(dateOfBirth) {
    dateOfBirth = dateOfBirth.replaceAll("-","");
    var sum = 0;
    for (var i = 0; i < dateOfBirth.length; i = i +1) {
        sum = sum + Number(dateOfBirth.charAt(i));
    }
    return sum;
}



function checkIfLucky() {
    hideMessage();
    const dateOfBirth = dob.value;
    const theLuckyNumber = Number(luckyNumber.value);
    const sum = sumOfDigits(dateOfBirth);

    console.log(sum);

    if (Number.isInteger(theLuckyNumber) && theLuckyNumber !== 0 && theLuckyNumber > 0 && sum !== 0){
        if ((sum % luckyNumber.value) === 0) {
            showMessage("Yay! Your birthday is lucky");
        }
        else {
            showMessage("Not so lucky, you are!");
        }
    }
    else {
        showMessage("Either you have not selected a date or not provided a postive lucky number(Except Zero) or Both are missing!");
    }
}

checkButton.addEventListener('click', checkIfLucky);
