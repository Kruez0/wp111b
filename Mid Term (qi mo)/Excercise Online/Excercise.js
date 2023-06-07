const exercise =[
    {
    question: "Question No.1 : What is CSS?",
    answers:
    [{text: "A. CSS is a stylesheet language that allows you to define the look and layout of HTML elements.",correct:true},
    {text: "B. CSS is a versatile language that can be used in a variety of contexts, including web development, server-side programming, desktop and mobile application development, game development, and more.", correct:false},
    {text: "C. CSS is the standard markup language used for creating web pages and web applications.",correct:false},
    {text: "D. CSS is a markdown language",correct:false}]
    },
    {
   question: "Question No.2 : The origins of the internet can be traced back to the 1960s, when the United States Department of Defense developed a network called ....",
   answers:
   [{text: "A. Arpanet",correct:true},
    {text: "B. Extranet",correct:false},
    {text: "C. Fishnet",correct:false},
    {text: "D. Bayonet",correct:false}]
    },
    {
    question: "Question No.3 : In Javascript, if we write let numbers=[1,2,3,4,5], What is the content of numbers[3]?",
    answers:
    [{text: "A. 1",correct:false},
     {text:"B. 2",correct:false},
    {text: "C. 3",correct:false},
    {text: "D. 4",correct:true}]
    },
    {
    question: "Question No.4 : In a box model, what is line or area that surrounds the padding and the content?",
    answers:
    [{text:"A. Padding",correct:false},
    {text : "B. Content",correct:false},
    {text : "C. Margin",correct:false},
    {text : "D. Border",correct:true}]
    },
    {
    question: "Question No. 5 : What is the programming language that is used to add interactivity and dynamic functionality to web pages?",
    answers:
    [{text: "A. Javascript",correct:true},
    {text:"B. HTML",correct:false},
    {text: "C. CSS",correct:false},
    {text: "D. Python",correct:false}]
    }
    ];
    const questionElement= document.getElementById("question")
    const answerButtons = document.getElementById("answer-btn")
    const nextButton= document.getElementById("next-btn")

    let index=0;
    let score=0;
    

    function quizstart(){
        index=0;
        score=0;
        nextButton.innerHTML="Next";
      Questionshow();
    }

    function Questionshow(){
        reset();
        let currentQuestion =exercise[index];
        questionElement.innerHTML=currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
             button.addEventListener("click",selectAnswer);
        });
    }
    function reset(){
        nextButton.style.display="none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }
    function selectAnswer(e){
        const selectedBtn =e.target;
        const isCorrect = selectedBtn.dataset.correct ==="true"
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }
        else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct")
            }
            button.disabled=true;
        });
        nextButton.style.display="block";
    }
    function showScore(){
        reset();
        questionElement.innerHTML =`Your score is ${score} out of ${exercise.length}!`;
        nextButton.innerHTML="Play Again";
        nextButton.style.display="block";
    }
    function handleNextButton(){
        index++;
        if(index<exercise.length){
            Questionshow();
        }
        else{
            showScore();
        }
    }
    nextButton.addEventListener("click", ()=>{
        if(index<exercise.length){
            handleNextButton();
        }
        else{
            quizstart();
        }
    })
    quizstart();

    