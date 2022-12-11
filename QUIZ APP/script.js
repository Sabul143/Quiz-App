const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startQuiz() {
startButton.classList.add('hide');
shuffledQuestions = questions.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
questionContainerElement.classList.remove('hide');
setNextQuestion();
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
 questionElement.innerText = question.question
 question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if(answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectButton = e.target;
    const correct = selectButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');

}

const questions = [
    {
        question: 'Q) A JavaScript operator is similar to a?',
        answers : [
            {text : 'Variable' , correct : true},
            {text : 'Function', correct : false},
            {text : 'Array' ,correct : false},
            {text : 'Clouser' ,correct : false}
        ]
    },
    {
        question: 'Q) Which of the following is NOT a primitive JavaScript data type ?',
        answers : [
            {text : 'Number ' ,correct : false},
            {text : 'Bolean ', correct : false},
            {text : 'Text ' ,correct :true },
            {text : 'Undefine' ,correct : false}
        ]
    },
    {
        question: 'Q) What do the expressions 1 == true and 1 === true return?',
        answers : [
            {text : ' true and false, because == performs type coercion and === does not', correct : false},
            {text : 'false and true, because == performs type coercion and === does not ', correct : false},
            {text : 'true and false, because === performs type coercion and == does not ', correct : false},
            {text : 'false and true, because === performs type coercion and == does not ', correct : true}
        ]
    },
    {
        question: 'Q) True AND false results in ',
        answers : [
            {text : 'True' , correct : true},
            {text : 'Undefine' ,correct :false},
            {text : 'False' , correct : false},
            {text : 'Null', correct : false}
        ]
    },
    {
        question: 'Q) A is true and B is false. What does the following expression return? (Remember that the parentheses are evaluated first) !(A || !B) && (A && !B && A) || (A ||B)',
        answers : [
            {text : 'Null' ,correct : false},
            {text : 'True' ,correct : true},
            {text : 'False' ,correct :false },
            {text : 'Undefine', correct : false}
        ]
    },
    {
        question: 'Q) Why does "2" + 3 return "23"?',
        answers : [
            {text : 'Because "2" is coerced to 2 and then the + operator converts 2 and 3 to text ' ,correct :false },
            {text : 'Because "2" is hoisted to 2 and then the + operator converts 2 and 3 to text ' ,correct : true},
            {text : 'Because 3 is coerced to "3" and then the strings are added ' ,correct :false },
            {text : 'Because 3 is hoisted to "3" and then the strings are added ', correct : false}
        ]
    },
    {
        question: 'Q) In JavaScript functions attached to objects are called ?',
        answers : [
            {text : 'Methods' ,correct : false},
            {text : 'Closures' ,correct : false},
            {text : 'Properties' ,correct : true},
            {text : 'Executables', correct : false}
        ]
    },
    {
        question: 'Q) In the browser, the global execution  context is',
        answers : [
            {text : 'document' ,correct : false},
            {text : 'null' ,correct : false},
            {text : 'browser ' ,correct : true},
            {text : 'window', correct : false}
        ]
    },
    {
        question: 'Q) Can we call the function expressions A at line 126 in our code if A is declared in line 253?',
        answers : [
            {text : 'Yes, because of hoisting ' ,correct : false},
            {text : 'No, this is only possible for function declarations ' ,correct : false},
            {text : 'Yes, because function declarations are set to undefined during hoisting ' ,correct : true},
            {text : 'No, this is only possible for variables', correct : false}
        ]
    },
    {
        question: 'Q) Thanks to hoisting: ',
        answers : [
            {text : 'Variables are set to undefined in the creation phase ' , correct:true },
            {text : 'Variables are set to null in the execution phase phase ' ,correct :false },
            {text : 'Variables are set to their actual value in the in the creation phase ' ,correct : false },
            {text : 'Variables are not hoisted ', correct : false}
        ]
    },
    {
        question: 'Q) What is NOT true about anonymous functions ?',
        answers : [
            {text : 'They create a new scope ', correct :false },
            {text : 'Closures are not formed with anonymous functions ', correct : false},
            {text : 'They are usually not accessible after its initial creation ', correct :false}, 
            {text : 'They are usually declared without any named identifier referring to them', correct : true}
        ]
    },
    {
        question: 'Q) Function A declares variable X and function B. Can function B access variable X?',
        answers : [
            {text : 'Yes, because of the scope chain ', correct : true },
            {text : 'No, because of the prototype chain ', correct : false},
            {text : 'Yes, because of closures', correct :false},
            {text : 'No, because functions are not suppose to access outer variables ', correct : false}
        ]
    },
    {
        question: 'Q) In JavaScript, scopes are created by:',
        answers : [
            {text : 'If/else statements' ,correct : false},
            {text : 'For loops and functions ' ,correct : false},
            {text : 'Functions ' ,correct :true },
            {text : 'If/else statements and functions', correct : false}
        ]
    },
    {
        question: "Q) Which of the following statements about the 'this' keyword is NOT correct?",
        answers : [
            {text : 'It is a primitive JavaScript data type that all functions get when they are called', correct :true },
            {text : 'It is created for each execution context', correct :false },
            {text : "In a method call, the 'this' keyword points to the object that it's attached to", correct : false },
            {text : "In a method call, the 'this' keyword is only defined as soon as the method gets called", correct : false}
        ]
    },
    {
        question: 'Q) DOM events are processed when:',
        answers : [
            {text : 'The scope chain is empty' ,correct :false },
            {text : 'The execution stack is empty' ,correct :false },
            {text : 'There are no other events' ,correct : true}, 
            {text : 'There are no active closures', correct : false}
        ]
    },
    {
        question: 'Q) What is NOT true about event delegation ?',
        answers : [
            {text : 'We use it when we need event handlers on an unknown number of elements that are all children of a known element' ,correct :false },
            {text : 'Event delegation makes use of event bubbling because event bubbling allow us to "wait" until an event bubbles up to a known element' ,correct :false },
            {text : 'We use it when we need event handlers on elements that are not in the DOM when our code enters the execution phase' ,correct :false},
            {text : 'Event delegation makes use of event bubbling because event bubbling adds the event object to the global DOM tree nodeList', correct : true}
        ]
    },
    {
        question: 'Q) Why do we need the event object for handling keyboard events?',
        answers : [
            {text : 'Because it carries the keycode property' ,correct :false },
            {text : 'Because it carries the target element' ,correct :false },
            {text : 'Because it allows event bubbling to happen' ,correct :false },
            {text : 'Because it allows us to use event delegation', correct : true}
        ]
    },
    {
        question: 'Q) Suppose we create two new objects using a function constructor. How can we allow both objects to have access to a new method that we want create ?',
        answers : [
            {text : 'We add the method to the prototype property of the objects. This is prototypal inheritance' ,correct : false},
            {text : 'We add the method to the prototype property of the objects. This is classical inheritance' ,correct : false},
            {text : 'We add the method to the prototype property of the function constructor. This is prototypal inheritance' ,correct :true },
            {text : 'We add the method to the prototype property of the function constructor. This is classical inheritance', correct : false}
        ]
    },
    {
        question: "Q) What does the 'new' operator NOT do?",
        answers : [
            {text : 'Creating a new empty object', correct :false },
            {text : 'Calling a function', correct : true},
            {text : "Making the 'this' variable of the called function point to the newly created object", correct :false },
            {text : 'Returning an execution context', correct : false}
        ]
    },
    {
        question: 'Q) A JavaScript function is an object:',
        answers : [
            {text : 'True, because functions are hoisted during the execution context creation phase',correct :false },
            {text : 'False, because a function is a JavaScript primitive', correct :false },
            {text : 'True, because its prototype is an object, and so it inherits methods from the prototype', correct :true },
            {text : 'False, because functions can not inherit from objects', correct : false}
        ]
    },
    {
        question: 'Q) Consider object A = object B. By mutating property X on A, X on B will:',
        answers : [
            {text : 'Remain unchanged, because A and B both hold a copy of the object' ,correct :false},
            {text : 'Be mutated as well, because A and B actually point to the same object in memory' ,correct :true },
            {text : 'Remain unchanged, because A and B are in different execution contexts' ,correct :false },
            {text : 'Be mutated as well, because X points to both A and B', correct : false}
        ]
    },
    {
        question: 'Q) Suppose we create a new array. Why can the array use the map method ?',
        answers : [
            {text : 'Because of the scope chain', correct :false },
            {text : 'Because that method is in a closure of all arrays', correct :true },
            {text : "Because of the 'this' keyword", correct :false },
            {text : 'Because of the prototype chain', correct : false}
        ]
    },
    {
        question: 'Q) What is the difference between the map and forEach Array methods?',
        answers : [
            {text : 'forEach loops over the array forwards while map loops backwards ', correct :false },
            {text : 'map loops over the array forwards while forEach loops backwards ', correct :false },
            {text : 'forEach returns a new array while map does not ', correct :false },
            {text : 'map returns a new array while forEach does not ', correct : true}
        ]
    },
    {
        question: 'Q) Function A declares variable X and returns function B. Can function B access variable X?',
        answers : [
            {text : 'Yes, because of the scope chain' ,correct : true},
            {text : 'No, because of the prototype chain' ,correct :false },
            {text : 'Yes, because of closures' ,correct :false },
            {text : 'No, because functions are not suppose to access outer variables', correct : false}
        ]
    },
    {
        question: 'Q) What is a callback function?',
        answers : [
            {text : 'A function with a closure' ,correct : false},
            {text : 'A function that is passed to another function as an argument' ,correct :true }, 
            {text : 'A function within the prototype chain' ,correct : false},
            {text : 'A function that inherits methods from the callback object', correct : false}
        ]
    },
    {
        question: 'Q) An Immediately Invoked Function Expression:',
        answers : [
            {text : 'Is only called once ' ,correct : false},
            {text : 'Makes functions accessible to the outside scope. ' ,correct :true }, 
            {text : "Can't accept arguments" ,correct : false},
            {text : 'Makes use of the bind method', correct : false}
        ]
    },
    {
        question: 'Q) Why is the call method useful for method borrowing?',
        answers : [
            {text : "Because it unbinds the 'this' variable from the global object" ,correct :false },
            {text : "Because it allows us to set the 'this' variable manually" ,correct : false},
            {text : 'Because it unbinds the method from its original object' ,correct :false },
            {text : 'Because it allows us to call the method multiple times at once', correct : true} 
        ]
    },
    {
        question: 'Q) Which of the following methods creates a new function with preset arguments?',
        answers : [
            {text : 'Function.apply()' ,correct :false },
            {text : 'Function.pre()' ,correct : false},
            {text : 'Function.call()' ,correct : false},
            {text : 'Function.bind()', correct : true} 
        ]
    },
    {
        question: 'Q) Which declaration is NOT true about encapsulation?',
        answers : [
            {text : 'Private functions may leak into the global scope' ,correct : true},
            {text : 'Exposed functions can be accessed from the outer scope' ,correct :false },
            {text : 'Other code cannot overwrite private functions and variables' ,correct :false },
            {text : 'An exposed public interface is sometimes called API', correct : false}
        ]
    },
    {
        question: 'Q) In the module pattern, why can public methods access private functions and variables?',
        answers : [
            {text : "Because the 'this' keyword of the method points to the IFFE" ,correct : true},
            {text : 'Because public methods always inherit private functions and variables' ,correct :false },
            {text : 'Because they are in the same scope' ,correct : false},
            {text : 'Because a closure was created', correct : false}
        ]
    }
];