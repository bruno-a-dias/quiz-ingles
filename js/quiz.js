// ===================================
// QUIZ SYSTEM - English Proficiency Test
// Block-based (5 questions at a time)
// ===================================

// Quiz questions data (50 questions across 10 blocks)
const quizQuestions = [
    // Block 1 - Basic Grammar (Questions 1-5)
    {
        question: "I ___ a student.",
        options: ["am", "is", "are", "be"],
        correct: 0,
        explanation: "Use 'am' with 'I'. Correct: I am a student."
    },
    {
        question: "She ___ to school every day.",
        options: ["go", "goes", "going", "gone"],
        correct: 1,
        explanation: "Third person singular (he/she/it) uses 'goes'. Correct: She goes to school."
    },
    {
        question: "They ___ watching TV now.",
        options: ["is", "am", "are", "be"],
        correct: 2,
        explanation: "Use 'are' with 'they'. Correct: They are watching TV."
    },
    {
        question: "I have ___ apple.",
        options: ["a", "an", "the", "some"],
        correct: 1,
        explanation: "Use 'an' before words starting with vowel sounds. Correct: I have an apple."
    },
    {
        question: "___ is your name?",
        options: ["Who", "What", "Where", "When"],
        correct: 1,
        explanation: "Use 'What' to ask about names. Correct: What is your name?"
    },
    
    // Block 2 - Present Tense (Questions 6-10)
    {
        question: "He ___ English every day.",
        options: ["study", "studies", "studying", "studied"],
        correct: 1,
        explanation: "Present Simple with third person singular adds 's' or 'es'. Correct: He studies."
    },
    {
        question: "We ___ in the park right now.",
        options: ["walk", "walks", "are walking", "walked"],
        correct: 2,
        explanation: "Present Continuous (am/is/are + verb-ing) for actions happening now. Correct: We are walking."
    },
    {
        question: "She ___ coffee in the morning.",
        options: ["drink", "drinks", "drinking", "drank"],
        correct: 1,
        explanation: "Present Simple with 'she' requires 's'. Correct: She drinks coffee."
    },
    {
        question: "I ___ my homework at the moment.",
        options: ["do", "does", "am doing", "did"],
        correct: 2,
        explanation: "Use Present Continuous for actions happening now. Correct: I am doing."
    },
    {
        question: "They ___ football every weekend.",
        options: ["play", "plays", "playing", "played"],
        correct: 0,
        explanation: "Present Simple with 'they' uses base form. Correct: They play."
    },
    
    // Block 3 - Past Tense (Questions 11-15)
    {
        question: "I ___ to the cinema yesterday.",
        options: ["go", "goes", "went", "going"],
        correct: 2,
        explanation: "Past Simple of 'go' is 'went'. Correct: I went yesterday."
    },
    {
        question: "She ___ her homework last night.",
        options: ["finish", "finished", "finishing", "finishes"],
        correct: 1,
        explanation: "Past Simple: add '-ed' to regular verbs. Correct: She finished."
    },
    {
        question: "We ___ at the beach last summer.",
        options: ["are", "were", "was", "be"],
        correct: 1,
        explanation: "Past of 'are' is 'were'. Correct: We were at the beach."
    },
    {
        question: "He ___ a book when I called.",
        options: ["read", "reads", "was reading", "reading"],
        correct: 2,
        explanation: "Past Continuous for ongoing past actions. Correct: He was reading."
    },
    {
        question: "They ___ the test last week.",
        options: ["take", "takes", "took", "taken"],
        correct: 2,
        explanation: "Past Simple of 'take' is 'took'. Correct: They took the test."
    },
    
    // Block 4 - Future Tense (Questions 16-20)
    {
        question: "I ___ visit my grandmother tomorrow.",
        options: ["will", "am", "do", "have"],
        correct: 0,
        explanation: "Use 'will' for future actions. Correct: I will visit."
    },
    {
        question: "She ___ going to travel next month.",
        options: ["will", "is", "are", "am"],
        correct: 1,
        explanation: "Use 'is going to' with 'she'. Correct: She is going to travel."
    },
    {
        question: "We ___ start the meeting at 3 PM.",
        options: ["will", "are", "is", "do"],
        correct: 0,
        explanation: "Use 'will' for future plans. Correct: We will start."
    },
    {
        question: "They ___ going to buy a new car.",
        options: ["is", "am", "are", "will"],
        correct: 2,
        explanation: "Use 'are going to' with 'they'. Correct: They are going to buy."
    },
    {
        question: "It ___ rain tomorrow.",
        options: ["will", "is", "are", "do"],
        correct: 0,
        explanation: "Use 'will' for predictions. Correct: It will rain."
    },
    
    // Block 5 - Prepositions (Questions 21-25)
    {
        question: "The book is ___ the table.",
        options: ["in", "on", "at", "by"],
        correct: 1,
        explanation: "Use 'on' for surfaces. Correct: The book is on the table."
    },
    {
        question: "I live ___ Brazil.",
        options: ["on", "at", "in", "by"],
        correct: 2,
        explanation: "Use 'in' for countries. Correct: I live in Brazil."
    },
    {
        question: "We meet ___ 5 o'clock.",
        options: ["in", "on", "at", "by"],
        correct: 2,
        explanation: "Use 'at' for specific times. Correct: We meet at 5 o'clock."
    },
    {
        question: "She goes to work ___ bus.",
        options: ["by", "in", "on", "with"],
        correct: 0,
        explanation: "Use 'by' for transportation. Correct: She goes by bus."
    },
    {
        question: "The cat is ___ the box.",
        options: ["in", "on", "at", "by"],
        correct: 0,
        explanation: "Use 'in' for enclosed spaces. Correct: The cat is in the box."
    },
    
    // Block 6 - Modal Verbs (Questions 26-30)
    {
        question: "You ___ study for the exam.",
        options: ["must", "can", "may", "might"],
        correct: 0,
        explanation: "Use 'must' for strong obligation. Correct: You must study."
    },
    {
        question: "I ___ swim very well.",
        options: ["must", "should", "can", "may"],
        correct: 2,
        explanation: "Use 'can' for ability. Correct: I can swim."
    },
    {
        question: "You ___ see a doctor if you're sick.",
        options: ["can", "should", "may", "must"],
        correct: 1,
        explanation: "Use 'should' for advice. Correct: You should see a doctor."
    },
    {
        question: "___ I use your phone?",
        options: ["Must", "Should", "May", "Will"],
        correct: 2,
        explanation: "Use 'May' for polite permission. Correct: May I use your phone?"
    },
    {
        question: "It ___ rain later.",
        options: ["must", "should", "can", "might"],
        correct: 3,
        explanation: "Use 'might' for possibility. Correct: It might rain."
    },
    
    // Block 7 - Question Formation (Questions 31-35)
    {
        question: "___ do you live?",
        options: ["What", "Where", "When", "Who"],
        correct: 1,
        explanation: "Use 'Where' for location questions. Correct: Where do you live?"
    },
    {
        question: "___ is your birthday?",
        options: ["What", "Where", "When", "How"],
        correct: 2,
        explanation: "Use 'When' for time questions. Correct: When is your birthday?"
    },
    {
        question: "___ are you feeling today?",
        options: ["What", "Where", "When", "How"],
        correct: 3,
        explanation: "Use 'How' to ask about feelings. Correct: How are you feeling?"
    },
    {
        question: "___ is that man?",
        options: ["What", "Where", "When", "Who"],
        correct: 3,
        explanation: "Use 'Who' for people questions. Correct: Who is that man?"
    },
    {
        question: "___ do you go to school?",
        options: ["What", "Why", "When", "How"],
        correct: 3,
        explanation: "Use 'How' to ask about method. Correct: How do you go to school?"
    },
    
    // Block 8 - Comparatives (Questions 36-40)
    {
        question: "She is ___ than her sister.",
        options: ["tall", "taller", "tallest", "more tall"],
        correct: 1,
        explanation: "Use comparative form 'taller' with 'than'. Correct: She is taller."
    },
    {
        question: "This is the ___ book I've ever read.",
        options: ["good", "better", "best", "more good"],
        correct: 2,
        explanation: "Use superlative 'best' for the highest degree. Correct: the best book."
    },
    {
        question: "My car is ___ expensive than yours.",
        options: ["more", "most", "much", "many"],
        correct: 0,
        explanation: "Use 'more' with long adjectives. Correct: more expensive than."
    },
    {
        question: "He runs ___ than me.",
        options: ["fast", "faster", "fastest", "more fast"],
        correct: 1,
        explanation: "Comparative of 'fast' is 'faster'. Correct: He runs faster."
    },
    {
        question: "This is the ___ difficult exercise.",
        options: ["more", "most", "much", "many"],
        correct: 1,
        explanation: "Use superlative 'most' with long adjectives. Correct: the most difficult."
    },
    
    // Block 9 - Conditionals (Questions 41-45)
    {
        question: "If it rains, I ___ stay home.",
        options: ["will", "would", "can", "should"],
        correct: 0,
        explanation: "First Conditional: If + present, will + verb. Correct: I will stay."
    },
    {
        question: "If I ___ rich, I would travel the world.",
        options: ["am", "was", "were", "be"],
        correct: 2,
        explanation: "Second Conditional uses 'were' for all persons. Correct: If I were rich."
    },
    {
        question: "She will call you if she ___ time.",
        options: ["have", "has", "had", "having"],
        correct: 1,
        explanation: "First Conditional: if-clause uses present tense. Correct: if she has."
    },
    {
        question: "If I had studied, I ___ passed the exam.",
        options: ["will", "would", "would have", "had"],
        correct: 2,
        explanation: "Third Conditional: would have + past participle. Correct: would have passed."
    },
    {
        question: "If you heat water to 100°C, it ___.",
        options: ["boil", "boils", "will boil", "would boil"],
        correct: 1,
        explanation: "Zero Conditional for facts uses present simple. Correct: it boils."
    },
    
    // Block 10 - Advanced Grammar (Questions 46-50)
    {
        question: "The letter ___ by John yesterday.",
        options: ["wrote", "was written", "is written", "writing"],
        correct: 1,
        explanation: "Passive voice in past: was/were + past participle. Correct: was written."
    },
    {
        question: "I have ___ finished my homework.",
        options: ["yet", "already", "still", "just"],
        correct: 3,
        explanation: "Use 'just' for recently completed actions. Correct: have just finished."
    },
    {
        question: "She said she ___ tired.",
        options: ["is", "was", "were", "be"],
        correct: 1,
        explanation: "Reported speech: change present to past. Correct: she was tired."
    },
    {
        question: "Hotel rooms must be ___ by noon.",
        options: ["evacuated", "leave", "abandoned", "vacated"],
        correct: 3,
        explanation: "Use 'vacated' to leave a room/property. Correct: must be vacated."
    },
    {
        question: "I need to finish this ___ Friday.",
        options: ["during", "at", "until", "by"],
        correct: 3,
        explanation: "Use 'by' for deadlines. Correct: finish by Friday."
    }
];

// State management
let studentName = '';
let currentBlockIndex = 0;
let blockAnswers = [];
let totalCorrectCount = 0;

// Initialize quiz
function initQuiz() {
    if (!document.getElementById('welcomeScreen')) return;
    setupQuizEventListeners();
}

// Setup event listeners
function setupQuizEventListeners() {
    const showNameModalBtn = document.getElementById('showNameModal');
    if (showNameModalBtn) {
        showNameModalBtn.addEventListener('click', () => {
            const modal = new bootstrap.Modal(document.getElementById('nameModal'));
            modal.show();
        });
    }
    
    const startQuizBtn = document.getElementById('startQuizBtn');
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', validateAndStartQuiz);
    }
    
    const studentNameInput = document.getElementById('studentName');
    if (studentNameInput) {
        studentNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                validateAndStartQuiz();
            }
        });
    }
    
    const retakeBtn = document.getElementById('retakeQuiz');
    if (retakeBtn) {
        retakeBtn.addEventListener('click', resetQuiz);
    }
    
    const printCertBtn = document.getElementById('printCertificate');
    if (printCertBtn) {
        printCertBtn.addEventListener('click', () => {
            window.print();
        });
    }
}

// Validate name and start quiz
function validateAndStartQuiz() {
    const nameInput = document.getElementById('studentName');
    const name = nameInput.value.trim();
    
    if (name === '' || name.length < 3) {
        nameInput.classList.add('is-invalid');
        return;
    }
    
    nameInput.classList.remove('is-invalid');
    studentName = name;
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('nameModal'));
    modal.hide();
    
    startQuiz();
}

// Start the quiz
function startQuiz() {
    currentBlockIndex = 0;
    blockAnswers = [];
    totalCorrectCount = 0;
    
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
    
    document.getElementById('totalBlocks').textContent = '10';
    document.getElementById('totalQuestions').textContent = '50';
    
    showBlock(0);
}

// Show a block of 5 questions
function showBlock(blockIndex) {
    if (blockIndex >= 10) {
        showResults();
        return;
    }
    
    const startIndex = blockIndex * 5;
    const endIndex = startIndex + 5;
    const blockQuestions = quizQuestions.slice(startIndex, endIndex);
    
    // Update progress
    document.getElementById('currentBlock').textContent = blockIndex + 1;
    document.getElementById('currentQuestion').textContent = `${startIndex + 1}-${endIndex}`;
    
    const progress = (blockIndex / 10) * 100;
    document.getElementById('quizProgress').style.width = progress + '%';
    
    // Clear container
    const container = document.getElementById('questionContainer');
    container.innerHTML = '';
    
    // Create 5 questions
    blockQuestions.forEach((question, index) => {
        const questionDiv = createQuestionElement(question, startIndex + index);
        container.appendChild(questionDiv);
    });
    
    // Setup submit button
    const submitBtn = document.getElementById('submitBlockBtn');
    submitBtn.style.display = 'inline-flex';
    submitBtn.onclick = () => submitBlock(blockIndex, blockQuestions);
}

// Create question element
function createQuestionElement(question, questionNumber) {
    const div = document.createElement('div');
    div.className = 'question-block-item';
    div.setAttribute('data-question', questionNumber);
    
    div.innerHTML = `
        <span class="question-block-number">Questão ${questionNumber + 1}</span>
        <h3 class="question-block-text">${question.question}</h3>
        <div class="question-block-options">
            ${question.options.map((option, index) => `
                <button class="option-button" data-option="${index}">
                    ${option}
                </button>
            `).join('')}
        </div>
    `;
    
    // Add click listeners
    const buttons = div.querySelectorAll('.option-button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            div.classList.add('answered');
        });
    });
    
    return div;
}

// Submit block answers
function submitBlock(blockIndex, blockQuestions) {
    const container = document.getElementById('questionContainer');
    const questionItems = container.querySelectorAll('.question-block-item');
    
    let blockCorrect = 0;
    const feedbackHTML = [];
    
    questionItems.forEach((item, index) => {
        const selected = item.querySelector('.option-button.selected');
        
        if (!selected) {
            AppUtils.showToast('Por favor, responda todas as questões', 'warning');
            return;
        }
        
        const selectedIndex = parseInt(selected.getAttribute('data-option'));
        const question = blockQuestions[index];
        const isCorrect = selectedIndex === question.correct;
        
        if (isCorrect) {
            blockCorrect++;
            totalCorrectCount++;
        }
        
        // Disable all buttons and show feedback
        const buttons = item.querySelectorAll('.option-button');
        buttons.forEach(btn => {
            btn.classList.add('disabled');
            btn.onclick = null;
            const optIndex = parseInt(btn.getAttribute('data-option'));
            if (optIndex === question.correct) {
                btn.classList.add('correct');
                btn.innerHTML += ' <i class="bi bi-check-circle-fill"></i>';
            }
        });
        
        if (!isCorrect) {
            selected.classList.add('incorrect');
            selected.innerHTML = selected.textContent + ' <i class="bi bi-x-circle-fill"></i>';
        }
        
        // Build feedback
        feedbackHTML.push(`
            <div class="feedback-item ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="feedback-item-question">
                    <i class="bi bi-${isCorrect ? 'check-circle-fill' : 'x-circle-fill'}"></i>
                    Questão ${blockIndex * 5 + index + 1}: ${isCorrect ? 'Correto!' : 'Incorreto'}
                </div>
                <div class="feedback-item-explanation">${question.explanation}</div>
            </div>
        `);
    });
    
    // Check if all answered
    if (feedbackHTML.length < 5) return;
    
    // Show feedback
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = 'block-feedback';
    feedbackDiv.innerHTML = `
        <h3>Resultado do Bloco ${blockIndex + 1}: ${blockCorrect}/5 corretas</h3>
        ${feedbackHTML.join('')}
        <button class="btn btn-primary btn-lg mt-3" id="nextBlockBtn">
            ${blockIndex < 9 ? 'Próximo Bloco' : 'Ver Resultados'}
            <i class="bi bi-arrow-right"></i>
        </button>
    `;
    
    container.appendChild(feedbackDiv);
    
    document.getElementById('submitBlockBtn').style.display = 'none';
    
    document.getElementById('nextBlockBtn').onclick = () => {
        currentBlockIndex++;
        showBlock(currentBlockIndex);
    };
}

// Show results
function showResults() {
    const percentage = Math.round((totalCorrectCount / 50) * 100);
    const level = getProficiencyLevel(percentage);
    
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('resultsScreen').style.display = 'block';
    
    document.getElementById('finalScore').textContent = percentage + '%';
    document.getElementById('correctAnswers').textContent = `${totalCorrectCount}/50`;
    document.getElementById('proficiencyLevel').textContent = level.code;
    
    document.getElementById('levelDescription').innerHTML = `
        <h3>${level.name}</h3>
        <p>${level.description}</p>
    `;
    
    generateCertificate(percentage, level);
}

// Get proficiency level
function getProficiencyLevel(percentage) {
    if (percentage >= 94) {
        return {
            code: 'C2',
            name: 'Proficient (C2)',
            description: 'Domínio quase nativo do idioma com compreensão e expressão sofisticada em todas as situações'
        };
    } else if (percentage >= 86) {
        return {
            code: 'C1',
            name: 'Advanced (C1)',
            description: 'Uso flexível e eficaz do idioma para fins acadêmicos e profissionais complexos'
        };
    } else if (percentage >= 76) {
        return {
            code: 'B2',
            name: 'Upper-Intermediate (B2)',
            description: 'Compreende textos complexos e interage fluentemente com falantes nativos'
        };
    } else if (percentage >= 64) {
        return {
            code: 'B1',
            name: 'Intermediate (B1)',
            description: 'Lida com a maioria das situações de viagem e pode expressar opiniões sobre temas conhecidos'
        };
    } else if (percentage >= 50) {
        return {
            code: 'A2',
            name: 'Elementary (A2)',
            description: 'Compreende expressões frequentes e comunica-se em tarefas simples e rotineiras'
        };
    } else {
        return {
            code: 'A1',
            name: 'Beginner (A1)',
            description: 'Compreensão básica de frases simples e expressões cotidianas comuns'
        };
    }
}

// Generate certificate
function generateCertificate(score, level) {
    const certNumber = AppUtils.generateUniqueId().toUpperCase();
    const date = AppUtils.formatDate(new Date(), 'pt-BR');
    
    document.getElementById('certName').textContent = studentName;
    document.getElementById('certDate').textContent = date;
    document.getElementById('certLevel').textContent = level.code;
    document.getElementById('certLevelName').textContent = level.name;
    document.getElementById('certScore').textContent = score + '%';
    document.getElementById('certCorrect').textContent = `(${totalCorrectCount} de 50 questões corretas)`;
    document.getElementById('certNumber').textContent = certNumber;
}

// Reset quiz
function resetQuiz() {
    currentBlockIndex = 0;
    blockAnswers = [];
    totalCorrectCount = 0;
    studentName = '';
    
    document.getElementById('studentName').value = '';
    document.getElementById('resultsScreen').style.display = 'none';
    document.getElementById('welcomeScreen').style.display = 'block';
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuiz);
} else {
    initQuiz();
}
