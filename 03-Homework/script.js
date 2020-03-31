// Declare global variables
var passwordDisplay = document.querySelector('.password-box.sm');
var criteriaResponses = [];
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var specialChar = '!@#$%^&*()?';

var lowerUpperMix = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerNumMix = 'abcdefghijklmnopqrstuvwxyz0123456789';
var lowerNumCharMix = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()?0123456789';
var lowerCharMix = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()?';
var upperNumMix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var upperNumCharMix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()?0123456789';
var upperCharMix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()?';
var numCharMix = '0123456789!@#$%^&*()?';
var allMix = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()?';

// Begins the criteria selection process, pushing responses into an array
function generatorInit() {
    var element = document.getElementById('password-box-text');
    element.innerHTML = "How long would you like your password to be? Enter a number between 8-128.";
    var input = document.createElement('textarea');
    var nextBtn = document.createElement('button');
    input.name = 'length';
    input.maxLength = '3';
    input.cols = '5';
    input.rows = '5';
    nextBtn.setAttribute('class','btn');
    nextBtn.innerHTML = 'Next';
    element.appendChild(input);
    element.appendChild(nextBtn);

    document.querySelector('.btn').addEventListener('click', function() {
        var number = input.value;
        criteriaResponses.push(number);
        console.log(criteriaResponses);
        criteriaLC();
    });
};

function criteriaLC() {
    var element = document.getElementById('password-box-text');
    element.innerHTML = "Would you like lowercase letters?"
    var radioYes = document.createElement('input');
    radioYes.setAttribute('type', 'radio');
    radioYes.setAttribute('id', 'radioYes');
    radioYes.setAttribute('value', 'Yes');
    radioYes.setAttribute('name', 'choice');
    var labelYes = document.createElement('label');
    labelYes.innerHTML = 'Yes';
    element.appendChild(labelYes);
    element.appendChild(radioYes);

    var radioNo = document.createElement('input');
    radioNo.setAttribute('type', 'radio');
    radioNo.setAttribute('id', 'radioNo');
    radioNo.setAttribute('value', 'No');
    radioNo.setAttribute('name', 'choice');
    var labelNo = document.createElement('label');
    labelNo.innerHTML = 'No';
    element.appendChild(labelNo);
    element.appendChild(radioNo);

    var nextBtn = document.createElement('button');
    nextBtn.setAttribute('class','btn');
    nextBtn.innerHTML = 'Next';
    element.appendChild(nextBtn);

    document.querySelector('.btn').addEventListener('click', function() {
        var criteriaLc = document.querySelector('input[name="choice"]:checked').value;
        criteriaResponses.push(criteriaLc);
        console.log(criteriaResponses);
        criteriaUC();
    });
;}

function criteriaUC() {
    var element = document.getElementById('password-box-text');
    element.innerHTML = "Would you like UPPERCASE LETTERS?"
    var radioYes = document.createElement('input');
    radioYes.setAttribute('type', 'radio');
    radioYes.setAttribute('id', 'radioYes');
    radioYes.setAttribute('value', 'Yes');
    radioYes.setAttribute('name', 'choice');
    var labelYes = document.createElement('label');
    labelYes.innerHTML = 'Yes';
    element.appendChild(labelYes);
    element.appendChild(radioYes);

    var radioNo = document.createElement('input');
    radioNo.setAttribute('type', 'radio');
    radioNo.setAttribute('id', 'radioNo');
    radioNo.setAttribute('value', 'No');
    radioNo.setAttribute('name', 'choice');
    var labelNo = document.createElement('label');
    labelNo.innerHTML = 'No';
    element.appendChild(labelNo);
    element.appendChild(radioNo);

    var nextBtn = document.createElement('button');
    nextBtn.setAttribute('class','btn');
    nextBtn.innerHTML = 'Next';
    element.appendChild(nextBtn);

    document.querySelector('.btn').addEventListener('click', function() {
        var criteriaUc = document.querySelector('input[name="choice"]:checked').value;
        criteriaResponses.push(criteriaUc);
        console.log(criteriaResponses);
        criteriaNum();
    });
};

function criteriaNum() {
    var element = document.getElementById('password-box-text');
    element.innerHTML = "Would you like numbers?"
    var radioYes = document.createElement('input');
    radioYes.setAttribute('type', 'radio');
    radioYes.setAttribute('id', 'radioYes');
    radioYes.setAttribute('value', 'Yes');
    radioYes.setAttribute('name', 'choice');
    var labelYes = document.createElement('label');
    labelYes.innerHTML = 'Yes';
    element.appendChild(labelYes);
    element.appendChild(radioYes);

    var radioNo = document.createElement('input');
    radioNo.setAttribute('type', 'radio');
    radioNo.setAttribute('id', 'radioNo');
    radioNo.setAttribute('value', 'No');
    radioNo.setAttribute('name', 'choice');
    var labelNo = document.createElement('label');
    labelNo.innerHTML = 'No';
    element.appendChild(labelNo);
    element.appendChild(radioNo);

    var nextBtn = document.createElement('button');
    nextBtn.setAttribute('class','btn');
    nextBtn.innerHTML = 'Next';
    element.appendChild(nextBtn);

    document.querySelector('.btn').addEventListener('click', function() {
        var criteriaNum = document.querySelector('input[name="choice"]:checked').value;
        criteriaResponses.push(criteriaNum);
        console.log(criteriaResponses);
        criteriaChar();
    });
};

function criteriaChar() {
    var element = document.getElementById('password-box-text');
    element.innerHTML = "Would you like special characters?"
    var radioYes = document.createElement('input');
    radioYes.setAttribute('type', 'radio');
    radioYes.setAttribute('id', 'radioYes');
    radioYes.setAttribute('value', 'Yes');
    radioYes.setAttribute('name', 'choice');
    var labelYes = document.createElement('label');
    labelYes.innerHTML = 'Yes';
    element.appendChild(labelYes);
    element.appendChild(radioYes);

    var radioNo = document.createElement('input');
    radioNo.setAttribute('type', 'radio');
    radioNo.setAttribute('id', 'radioNo');
    radioNo.setAttribute('value', 'No');
    radioNo.setAttribute('name', 'choice');
    var labelNo = document.createElement('label');
    labelNo.innerHTML = 'No';
    element.appendChild(labelNo);
    element.appendChild(radioNo);

    var nextBtn = document.createElement('button');
    nextBtn.setAttribute('class','btn');
    nextBtn.innerHTML = 'Finish';
    element.appendChild(nextBtn);

    document.querySelector('.btn').addEventListener('click', function() {
        var criteriaChar = document.querySelector('input[name="choice"]:checked').value;
        criteriaResponses.push(criteriaChar);
        console.log(criteriaResponses);      
        generatePassword();
    });
};

function generatePassword() {
    var numberLength = parseInt(criteriaResponses[0]);
    var password = "";
    for (var i = 0; i < numberLength; i++) {
        if (criteriaResponses[1] === "Yes" && criteriaResponses[2] === "Yes" && criteriaResponses[3] === "Yes" && criteriaResponses[4] === "Yes"){
            password += allMix[Math.floor(Math.random() * allMix.length)];        
            var element = document.getElementById('password-box-text');
            element.innerHTML = password;
        } else if (criteriaResponses[1] === "Yes" && criteriaResponses[2] === "Yes" && criteriaResponses[3] === "No" && criteriaResponses[4] === "No"){
            password += lowerUpperMix[Math.floor(Math.random() * lowerUpperMix.length)];
            var element = document.getElementById('password-box-text');
            element.innerHTML = password;
        } else if (criteriaResponses[1] === "Yes" && criteriaResponses[2] === "No" && criteriaResponses[3] === "Yes" && criteriaResponses[4] === "No"){
            password += lowerNumMix[Math.floor(Math.random() * lowerNumMix.length)];
            var element = document.getElementById('password-box-text');
            element.innerHTML = password;
        } else if (criteriaResponses[1] === "Yes" && criteriaResponses[2] === "No" && criteriaResponses[3] === "No" && criteriaResponses[4] === "Yes"){
            password += lowerCharMix[Math.floor(Math.random() * lowerCharMix.length)];
            var element = document.getElementById('password-box-text');
            element.innerHTML = password;
        } else if (criteriaResponses[1] === "Yes" && criteriaResponses[2] === "No" && criteriaResponses[3] === "No" && criteriaResponses[4] === "No"){
            password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
            var element = document.getElementById('password-box-text');
            element.innerHTML = password;
        } else if (criteriaResponses[1] === "No" && criteriaResponses[2] === "Yes" && criteriaResponses[3] === "No" && criteriaResponses[4] === "No"){
            password += upperCase[Math.floor(Math.random() * upperCase.length)];
            var element = document.getElementById('password-box-text');
            element.innerHTML = password;
        } else if (criteriaResponses[1] === "No" && criteriaResponses[2] === "Yes" && criteriaResponses[3] === "Yes" && criteriaResponses[4] === "No"){
            password += upperNumMix[Math.floor(Math.random() * upperNumMix.length)];
            var element = document.getElementById('password-box-text');
            element.innerHTML = password;
        } else if (criteriaResponses[1] === "No" && criteriaResponses[2] === "Yes" && criteriaResponses[3] === "No" && criteriaResponses[4] === "Yes"){
            password += upperCharMix[Math.floor(Math.random() * upperCharMix.length)];
            var element = document.getElementById('password-box-text');
            element.innerHTML = password;
        } else if (criteriaResponses[1] === "No" && criteriaResponses[2] === "No" && criteriaResponses[3] === "Yes" && criteriaResponses[4] === "Yes"){
            password += numCharMix[Math.floor(Math.random() * numCharMix.length)];
            var element = document.getElementById('password-box-text');
            element.innerHTML = password;
        } else if (criteriaResponses[1] === "Yes" && criteriaResponses[2] === "No" && criteriaResponses[3] === "Yes" && criteriaResponses[4] === "Yes"){
            password += lowerNumCharMix[Math.floor(Math.random() * lowerNumCharMix.length)];
            var element = document.getElementById('password-box-text');
            element.innerHTML = password;
        } else if (criteriaResponses[1] === "No" && criteriaResponses[2] === "Yes" && criteriaResponses[3] === "Yes" && criteriaResponses[4] === "Yes"){
            password += upperNumCharMix[Math.floor(Math.random() * upperNumCharMix.length)];
            var element = document.getElementById('password-box-text');
            element.innerHTML = password;
        }else {
            var element = document.getElementById('password-box-text');
            element.innerHTML = "Your password cannot be generated with that criteria. Please start again.";
        }
    }
};

function clearArray() {
    return criteriaResponses = [];
}

function copyPassword() {
    var copyText = document.getElementById('password-box-text');
    document.execCommand("copy", copyText);
    alert("Your password has been copied!");
};

// Call function/s

document.querySelector('.btn-generate').addEventListener('click', function() {
    generatorInit();
    clearArray();
});

document.querySelector('.btn-clipboard').addEventListener('click', function() {
    copyPassword();
});

