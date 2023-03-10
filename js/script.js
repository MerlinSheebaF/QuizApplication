

const questions = [{
    id: 0,
    q: "1. What is the capital city of UK?",
    a: [
        { text: "London", isCorrect: true },
        { text: "Manchester", isCorrect: false },
        { text: "Bristol", isCorrect: false },
        { text: "York", isCorrect: false },
    ]
},
{
    id: 1,
    q: "2. Where in the world would you expect to find a car with the vehicle registration code 'V'?",
    a: [
        { text: "Venezuela", isCorrect: false },
        { text: "Vatican", isCorrect: true },
        { text: "Virgin Island", isCorrect: false },
        { text: "Vietnam", isCorrect: false },
    ]
},
{
    id: 2,
    q: "3. What is the biggest animal in the world?",
    a: [
        { text: "African Elephant", isCorrect: false },
        { text: "Giraffe", isCorrect: false },
        { text: "Blue Whale", isCorrect: true },
        { text: "Ostrich", isCorrect: false },
    ]
},
{
    id: 3,
    q: "4. What is the generally accepted abbreviation for Bitcoin?",
    a: [
        { text: "BIT", isCorrect: true },
        { text: "BTC", isCorrect: false },
        { text: "BIC", isCorrect: false },
        { text: "BTN", isCorrect: false },
    ]
},
{
    id: 4,
    q: "5. Amazon is one of the biggest tech companies in the world. Which product did it originally sell online?",
    a: [
        { text: "Clothes", isCorrect: false },
        { text: "Drinks", isCorrect: false },
        { text: "Books", isCorrect: true },
        { text: "Electronic Toys", isCorrect: false },
    ]
},
{
    id: 5,
    q: "6. Which of the following is the first high level programming language created in the 1950s?",
    a: [
        { text: "FORTRAN", isCorrect: true },
        { text: "C++", isCorrect: false },
        { text: "COBOL", isCorrect: false },
        { text: "C", isCorrect: false },
    ]
},
{
    id: 6,
    q: "7. Which is the first mobile firm to introduce Emoji on their mobile devices?",
    a: [
        { text: "Blackberry", isCorrect: false },
        { text: "Nokia", isCorrect: false },
        { text: "Apple", isCorrect: true },
        { text: "Motorola", isCorrect: false },
    ]
},
{
    id: 7,
    q: "8. If a URL ends with .de, you may expect it is based in which country?",
    a: [
        { text: "Denmark", isCorrect: false },
        { text: "Dominican Republic", isCorrect: false },
        { text: "Dominica", isCorrect: false },
        { text: "Germany", isCorrect: true },
    ]
},
{
    id: 8,
    q: "9. Which of the following technologies was named after Harald Blatand, a Danish-Norwegian king?",
    a: [
        { text: "Wi-Fi", isCorrect: false },
        { text: "Bluetooth", isCorrect: true },
        { text: "3G", isCorrect: false },
        { text: "AI", isCorrect: false },
    ]
},
{
    id: 9,
    q: "10. Which University offered the first-ever academic programme in Computer Science?",
    a: [
        { text: "Harvard University", isCorrect: false },
        { text: "MIT", isCorrect: false },
        { text: "University of Glasgow", isCorrect: false },
        { text: "Cambridge University", isCorrect: true },
    ]
}
];
console.log("Questions:", questions);
let selected = "";
let totalscore = 10;
let totalq = 10;
let score = 0;
let optionBtn = "";


function quiz(id) {
    evalDisableBtn();
    optionEnableBtn();

    //Questions
    let question = document.getElementById("question");
    question.innerText = questions[id].q;
    console.log(question);

    //Option1
    let option1 = document.getElementById("op1");
    option1.innerText = questions[id].a[0].text;
    option1.value = questions[id].a[0].isCorrect;
    console.log(option1);

    //Option2
    let option2 = document.getElementById("op2");
    option2.innerText = questions[id].a[1].text;
    option2.value = questions[id].a[1].isCorrect;
    console.log(option2);

    //Option3
    let option3 = document.getElementById("op3");
    option3.innerText = questions[id].a[2].text;
    option3.value = questions[id].a[2].isCorrect;
    console.log(option3);

    //Option4
    let option4 = document.getElementById("op4");
    option4.innerText = questions[id].a[3].text;
    option4.value = questions[id].a[3].isCorrect;
    console.log(option4);


    option1.addEventListener("click", function (e) {
        selected = option1.value;
        console.log("selected:", selected);
        evalEnableBtn();
    });

    option2.addEventListener("click", function (e) {
        selected = option2.value;
        evalEnableBtn();


    });
    option3.addEventListener("click", function (e) {
        selected = option3.value;
        evalEnableBtn();


    });
    option4.addEventListener("click", function (e) {
        selected = option4.value;
        evalEnableBtn();


    });


    let result = document.getElementsByClassName("result");
    console.log(result);
    result[0].innerText = "";
    evalDisableBtn();
    let evaluate = document.getElementsByClassName("evaluate");
    evaluate[0].addEventListener("click", function (el) {

        evalDisableBtn();
        optionDisableBtn();

        if (selected == "true") {
            let evalBtn = document.getElementsByClassName("evaluate");
            evalBtn[0].disabled = false;
            result[0].style.cssText += "color:green";
            result[0].innerHTML = "<p>Your answer is correct &#9989;</p>";

        } else if (selected == "false") {
            result[0].innerHTML = "<p>Your answer is wrong &#10060;</p>";
            result[0].style.cssText += "color:red";

        } else {
            result[0].innerHTML = "<p>Please choose the option</p>";
            result[0].style.cssText += "color:red";
            evalEnableBtn();
            optionEnableBtn();
        }
    });
    tscore();
}

let start = true;
if (start) {
    quiz(0);
}

let next = document.getElementsByClassName("next")[0];
console.log(next);
let id = 1;
next.addEventListener("click", function (elem) {
    console.log("ID:", id);
    if (id < totalq) {
        quiz(id);

        id++;

    }
    else if (id == totalq) {
        console.log("exceed: ID", id);
        tscore();
        id++;

        //Score Data
        let scoreData = document.getElementsByClassName("score");
        console.log(scoreData);
        scoreData[0].innerText = "";
        scoreData[0].innerHTML = "Your Total Score is " + score + " Out of " + totalq;
        evalDisableBtn();
        optionDisableBtn();

        //Percentage
        let percentValue = percentage(score, totalscore);
        let percentData = document.getElementsByClassName("percent");
        percentData[0].innerText = "";
        if (percentValue >= 80) {
            percentData[0].innerHTML = "Congrats &#128512 !!! You have got " + percentValue + "%" + "<br>" + "<hr>";

        }
        else if (percentValue >= 50) {
            percentData[0].innerHTML = "You have got " + percentValue + "%" + "<br>" + "<hr>";

        } else {
            percentData[0].innerHTML = "Fail &#128543; You have got " + percentValue + "%" + "<br>" + "<hr>";
        }



    }
});

function percentage(score, totalscore) {
    return ((100 * score) / totalscore);
}
function tscore() {
    if (selected == "true") {
        console.log("selected");
        score++;
        console.log("Your Total score is :", score);
    }
}

function evalEnableBtn() {
    let evalBtn = document.getElementsByClassName("evaluate");
    evalBtn[0].disabled = false;
    evalBtn[0].style.cssText += "color:blue;background-color:grey";
}
function optionEnableBtn() {
    optionBtn = document.getElementsByClassName("option");
    for (let i = 0; i < optionBtn.length; i++) {
        optionBtn[i].style.cssText += "pointer-events:auto";
    }
}

function evalDisableBtn() {
    let evalBtn = document.getElementsByClassName("evaluate");
    evalBtn[0].disabled = true;
    evalBtn[0].style.cssText += "color:darkgrey;background-color:var(--grey)";
}
function optionDisableBtn() {
    optionBtn = document.getElementsByClassName("option");
    for (let i = 0; i < optionBtn.length; i++) {
        optionBtn[i].style.cssText += "pointer-events:none";
    }
}








