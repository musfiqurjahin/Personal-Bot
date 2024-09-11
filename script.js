// Custom responses for specific questions (with multiple possible answers)
let predefinedAnswers = {
    "greetings": {
        answers: ["Hi there! I'm Musfiqur Jahin's bot, how can I assist you?", 
                  "Hello! How can I help you today?", 
                  "Greetings! Feel free to ask me anything."],
        variations: ["hi", "hello", "hey", "greetings"]
    },
    "salams": {
        answers: ["Walaikum Assalam! How can I help you today?", 
                  "Assalamualaikum! Need any assistance?", 
                  "Walaikum Assalam! What can I do for you?"],
        variations: ["salam", "walaikum assalam", "assalamualaikum"]
    },
    "well-being": {
        answers: ["I'm doing well, thank you! How about you?", 
                  "I'm great, thanks for asking! How about you?", 
                  "All good here! How are you doing?"],
        variations: ["how are you", "how's it going", "how are things"]
    },
    "website": {
        answers: ["Yes, you can visit it here: musfiqurjahin.github.io!", 
                  "Of course, check it out: musfiqurjahin.github.io!", 
                  "Sure, here's the link to your site: musfiqurjahin.github.io!"],
        variations: ["do you know i have a website", "website", "my website"]
    },
    "identity": {
        answers: ["I'm Musfiqur Jahin's verified bot.", 
                  "You can call me Musfiqur Jahin's digital assistant.", 
                  "I am Jahin's bot, always at your service!"],
        variations: ["what's your name", "who are you", "your name"]
    },
    "creator": {
        answers: ["I was created by Musfiqur Jahin, a brilliant developer and cyber security expert!", 
                  "Musfiqur Jahin built me with his amazing coding skills.", 
                  "Musfiqur Jahin is my creator and mentor!"],
        variations: ["who created you", "creator", "who made you"]
    },
    "capabilities": {
        answers: ["I can chat with you, answer your questions, and give you information about Musfiqur Jahin.", 
                  "I'm here to assist you, give you info, or answer questions!", 
                  "My job is to help you and tell you about Musfiqur Jahin's work."],
        variations: ["what can you do", "your capabilities", "what are you capable of"]
    },
    "joke": {
        answers: ["Why did the developer go broke? Because he used up all his cache!", 
                  "Why do programmers prefer dark mode? Because the light attracts bugs!", 
                  "What’s a programmer’s favorite hangout place? Foo Bar."],
        variations: ["tell me a joke", "joke", "make me laugh"]
    },
    "purpose": {
        answers: ["I'm here to help you learn more about Musfiqur Jahin!", 
                  "I exist to provide you with assistance and knowledge about Jahin's work.", 
                  "My purpose is to assist with anything related to Musfiqur Jahin!"],
        variations: ["what's your purpose", "why do you exist", "purpose"]
    },
    "expertise": {
        answers: ["Musfiqur Jahin is a Cyber Security Specialist and Full Stack Web Developer.", 
                  "He is a versatile developer with a focus on cyber security.", 
                  "Jahin excels in web development and cyber security."],
        variations: ["what's musfiqur jahin's expertise", "expertise", "skills"]
    },
    "projects": {
        answers: ["You can find Jahin's projects on his GitHub page: musfiqurjahin.github.io!", 
                  "Check out Jahin's portfolio at musfiqurjahin.github.io.", 
                  "His projects are showcased here: musfiqurjahin.github.io!"],
        variations: ["where can I find musfiqur jahin's projects", "projects", "show me projects"]
    },
    "favoriteLanguage": {
        answers: ["Musfiqur Jahin is proficient in many languages, but he has a special love for Python!", 
                  "Jahin works a lot with JavaScript, but Python holds a special place.", 
                  "He enjoys working with Python, though he is skilled in various languages."],
        variations: ["what is musfiqur jahin's favorite language", "favorite language", "preferred language"]
    },
    "contact": {
        answers: ["You can contact him via email: musfiqur.jahin@gmail.com", 
                  "Send an email to musfiqur.jahin@gmail.com for any inquiries.", 
                  "The best way to reach him is through his email: musfiqur.jahin@gmail.com."],
        variations: ["how can i contact musfiqur jahin", "contact", "reach out"]
    },
    "goodbye": {
        answers: ["Goodbye! Feel free to reach out anytime!", 
                  "Take care! I'll be here when you need me.", 
                  "See you later! Don't hesitate to ask if you need anything!"],
        variations: ["goodbye", "bye", "see you later"]
    }
};

// Link elements
let inputBox = document.querySelector("#ask-here");
let qusAnsDiv = document.querySelector(".qus-ans");
let sendBtn = document.querySelector("#submit");

// Typing delay settings
let typingDelay = 3000; // 3 seconds typing delay

// Add event listener for clicking send button or pressing Enter
sendBtn.addEventListener("click", submit);
document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") submit();
});

// Submit function
function submit() {
    let question = inputBox.value.trim().toLowerCase();

    if (question !== "") {
        createQuestionElement(question);  // User question
        createTypingIndicator();  // Show typing indicator

        // Set delay for "typing" animation before displaying the answer
        setTimeout(() => {
            removeTypingIndicator();  // Remove typing indicator
            let answer = getAnswer(question);  // Get random answer
            createAnswerElement(answer);  // Display the answer
        }, typingDelay);

        inputBox.value = ""; // Clear input field after submission
    }
}

// Create question element
function createQuestionElement(question) {
    let questionDiv = document.createElement("div");
    questionDiv.innerHTML = `<div class="question">
                                <span class="text">${question}</span>
                             </div>`;
    qusAnsDiv.appendChild(questionDiv);
    questionDiv.scrollIntoView();  // Scroll to the latest question
}

// Create typing indicator element
function createTypingIndicator() {
    let typingDiv = document.createElement("div");
    typingDiv.classList.add("answer", "bot");
    typingDiv.innerHTML = `<div class="logo">
                              <img src="Images/Profile.img/Profile_pic-1.jpg" alt="Bot">
                           </div>
                           <span class="text">
                             <div class="typing-indicator"></div>
                             <div class="typing-indicator"></div>
                             <div class="typing-indicator"></div>
                           </span>`;
    qusAnsDiv.appendChild(typingDiv);
    typingDiv.scrollIntoView();  // Scroll to the typing indicator
}

// Remove typing indicator element
function removeTypingIndicator() {
    let typingDiv = document.querySelector(".bot .typing-indicator");
    if (typingDiv) typingDiv.parentElement.parentElement.remove();  // Remove typing indicator div
}

// Create answer element
function createAnswerElement(answer) {
    let answerDiv = document.createElement("div");
    answerDiv.innerHTML = `<div class="answer bot">
                              <div class="logo">
                                <img src="Images/Profile.img/Profile_pic-1.jpg" alt="Bot">
                              </div>
                              <span class="text">${answer}</span>
                           </div>`;
    qusAnsDiv.appendChild(answerDiv);
    answerDiv.scrollIntoView();  // Scroll to the latest answer
}

// Get an answer from predefined responses or default to a generic message
function getAnswer(question) {
    question = question.toLowerCase(); // Convert the question to lowercase again for safety
    for (let key in predefinedAnswers) {
        // Check if the lowercase question matches any predefined variation
        let variations = predefinedAnswers[key].variations.map(v => v.toLowerCase());
        if (variations.includes(question)) {
            // Shuffle the answers slightly to randomize even more effectively
            let answers = predefinedAnswers[key].answers;
            answers.sort(() => Math.random() - 0.5);
            // Return a random response from the predefined answers array
            return answers[Math.floor(Math.random() * answers.length)];
        }
    }
    // Return a default message if the question is not found in predefined responses
    return "Hmm, I don't understand that. Can you ask something else?";
}
