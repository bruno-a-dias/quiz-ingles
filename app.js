// Application State
let currentUser = '';
let currentBlock = 0;
let currentQuestionInBlock = 0;
let answers = [];
let blockAnswers = [];
let totalScore = 0;
let isDarkMode = false;

// Quiz Questions Database (50 questions organized in 10 blocks)
const quizQuestions = [
  // Block 1 - Basic Grammar & Vocabulary
  [
    {
      question: "Choose the correct article: ___ apple is red.",
      options: ["A", "An", "The", "No article"],
      correct: 1,
      explanation: "'An' is used before words that begin with a vowel sound."
    },
    {
      question: "What is the plural of 'child'?",
      options: ["childs", "children", "childrens", "child"],
      correct: 1,
      explanation: "'Children' is the irregular plural form of 'child'."
    },
    {
      question: "Choose the correct verb: She ___ to school every day.",
      options: ["go", "goes", "going", "gone"],
      correct: 1,
      explanation: "Third person singular present tense requires 's' ending."
    },
    {
      question: "Which word means 'happy'?",
      options: ["sad", "angry", "joyful", "tired"],
      correct: 2,
      explanation: "'Joyful' is a synonym for 'happy'."
    },
    {
      question: "Complete: I ___ a student.",
      options: ["am", "is", "are", "be"],
      correct: 0,
      explanation: "First person singular uses 'am' with the verb 'to be'."
    }
  ],
  // Block 2 - Present Tenses
  [
    {
      question: "Choose the correct form: Right now, I ___ my homework.",
      options: ["do", "am doing", "did", "will do"],
      correct: 1,
      explanation: "Present continuous tense is used for actions happening now."
    },
    {
      question: "Complete: She usually ___ coffee in the morning.",
      options: ["drink", "drinks", "drinking", "drank"],
      correct: 1,
      explanation: "Simple present tense with third person singular requires 's'."
    },
    {
      question: "Which sentence is in present perfect?",
      options: ["I eat breakfast", "I am eating breakfast", "I have eaten breakfast", "I will eat breakfast"],
      correct: 2,
      explanation: "Present perfect uses 'have/has + past participle'."
    },
    {
      question: "Choose correct: They ___ here for two hours.",
      options: ["wait", "are waiting", "have been waiting", "waited"],
      correct: 2,
      explanation: "Present perfect continuous shows action continuing from past to present."
    },
    {
      question: "Complete: How often ___ you exercise?",
      options: ["are", "do", "have", "will"],
      correct: 1,
      explanation: "'Do' is used as auxiliary verb in simple present questions."
    }
  ],
  // Block 3 - Past Tenses
  [
    {
      question: "Yesterday, I ___ to the cinema.",
      options: ["go", "went", "have gone", "am going"],
      correct: 1,
      explanation: "Simple past tense is used for completed actions in the past."
    },
    {
      question: "While I ___ TV, the phone rang.",
      options: ["watched", "was watching", "have watched", "watch"],
      correct: 1,
      explanation: "Past continuous shows an ongoing action interrupted by another event."
    },
    {
      question: "By the time I arrived, they ___ already.",
      options: ["left", "have left", "had left", "were leaving"],
      correct: 2,
      explanation: "Past perfect shows an action completed before another past action."
    },
    {
      question: "Choose the correct past participle of 'write':",
      options: ["wrote", "writing", "written", "writes"],
      correct: 2,
      explanation: "'Written' is the past participle of the irregular verb 'write'."
    },
    {
      question: "Last week, she ___ her keys.",
      options: ["lose", "lost", "has lost", "is losing"],
      correct: 1,
      explanation: "Simple past tense is used for completed actions at a specific past time."
    }
  ],
  // Block 4 - Future Tenses & Modal Verbs
  [
    {
      question: "Tomorrow, I ___ visit my grandmother.",
      options: ["will", "am going to", "might", "All are correct"],
      correct: 3,
      explanation: "All three forms can express future plans or intentions."
    },
    {
      question: "You ___ finish your homework before playing.",
      options: ["can", "must", "might", "would"],
      correct: 1,
      explanation: "'Must' expresses strong obligation or necessity."
    },
    {
      question: "___ you help me with this problem?",
      options: ["Can", "Must", "Should", "Will"],
      correct: 0,
      explanation: "'Can' is used to ask for ability or permission politely."
    },
    {
      question: "It ___ rain tomorrow according to the weather forecast.",
      options: ["will", "might", "must", "should"],
      correct: 0,
      explanation: "'Will' expresses certainty about future events."
    },
    {
      question: "Students ___ wear uniforms in this school.",
      options: ["can", "may", "have to", "might"],
      correct: 2,
      explanation: "'Have to' expresses external obligation or rules."
    }
  ],
  // Block 5 - Questions & Negatives
  [
    {
      question: "___ does this book belong to?",
      options: ["Who", "Whom", "Whose", "Which"],
      correct: 0,
      explanation: "'Who' is used as the subject of the question."
    },
    {
      question: "She doesn't like coffee, ___?",
      options: ["does she", "doesn't she", "is she", "isn't she"],
      correct: 0,
      explanation: "Tag questions use opposite polarity: negative statement + positive tag."
    },
    {
      question: "___ students are in your class?",
      options: ["How much", "How many", "How long", "How often"],
      correct: 1,
      explanation: "'How many' is used with countable nouns."
    },
    {
      question: "I haven't seen him ___.",
      options: ["already", "yet", "just", "still"],
      correct: 1,
      explanation: "'Yet' is used in negative sentences and questions."
    },
    {
      question: "___ you ever been to Paris?",
      options: ["Did", "Have", "Are", "Will"],
      correct: 1,
      explanation: "Present perfect questions use 'have/has' as auxiliary."
    }
  ],
  // Block 6 - Conditionals & Subjunctive
  [
    {
      question: "If it rains, I ___ stay home.",
      options: ["will", "would", "might", "could"],
      correct: 0,
      explanation: "First conditional uses 'will' in the main clause."
    },
    {
      question: "If I were rich, I ___ travel around the world.",
      options: ["will", "would", "can", "must"],
      correct: 1,
      explanation: "Second conditional uses 'would' in the main clause."
    },
    {
      question: "If she had studied harder, she ___ passed the exam.",
      options: ["will have", "would have", "had", "has"],
      correct: 1,
      explanation: "Third conditional uses 'would have + past participle'."
    },
    {
      question: "I wish I ___ speak French fluently.",
      options: ["can", "could", "will", "am able to"],
      correct: 1,
      explanation: "'Wish' is followed by past tense to express unreal situations."
    },
    {
      question: "Unless you hurry, you ___ miss the train.",
      options: ["will", "would", "can", "must"],
      correct: 0,
      explanation: "'Unless' means 'if not' and is followed by 'will' in the main clause."
    }
  ],
  // Block 7 - Passive Voice & Advanced Grammar
  [
    {
      question: "The book ___ by millions of people.",
      options: ["reads", "is read", "has read", "was reading"],
      correct: 1,
      explanation: "Passive voice uses 'be + past participle'."
    },
    {
      question: "The house ___ built in 1850.",
      options: ["is", "was", "has been", "will be"],
      correct: 1,
      explanation: "Past passive voice uses 'was/were + past participle'."
    },
    {
      question: "___ having finished the work, he went home.",
      options: ["After", "Before", "Since", "While"],
      correct: 0,
      explanation: "'After having + past participle' shows completed action before another."
    },
    {
      question: "The manager, ___ office is on the top floor, is very kind.",
      options: ["who", "whom", "whose", "which"],
      correct: 2,
      explanation: "'Whose' shows possession in relative clauses."
    },
    {
      question: "Neither John nor Mary ___ coming to the party.",
      options: ["are", "is", "were", "have"],
      correct: 1,
      explanation: "With 'neither...nor', verb agrees with the nearest subject."
    }
  ],
  // Block 8 - Advanced Vocabulary & Idioms
  [
    {
      question: "What does 'break the ice' mean?",
      options: ["To destroy ice", "To start a conversation", "To be cold", "To make noise"],
      correct: 1,
      explanation: "'Break the ice' means to initiate conversation in a social situation."
    },
    {
      question: "Choose the word that means 'to postpone':",
      options: ["cancel", "delay", "advance", "confirm"],
      correct: 1,
      explanation: "'Delay' means to postpone or put off until later."
    },
    {
      question: "She's feeling under the ___.",
      options: ["weather", "cloud", "sky", "rain"],
      correct: 0,
      explanation: "'Under the weather' means feeling slightly ill or unwell."
    },
    {
      question: "The word 'ubiquitous' means:",
      options: ["rare", "everywhere", "ancient", "expensive"],
      correct: 1,
      explanation: "'Ubiquitous' means present everywhere or very common."
    },
    {
      question: "To 'pull someone's leg' means to:",
      options: ["help them walk", "tease or joke with them", "trip them", "support them"],
      correct: 1,
      explanation: "'Pull someone's leg' means to tease or joke with someone."
    }
  ],
  // Block 9 - Reading Comprehension & Context
  [
    {
      question: "In the sentence 'The novel's protagonist faces insurmountable challenges,' what does 'insurmountable' mean?",
      options: ["easy", "impossible to overcome", "temporary", "small"],
      correct: 1,
      explanation: "'Insurmountable' means too great to be overcome or dealt with successfully."
    },
    {
      question: "Choose the best synonym for 'meticulous':",
      options: ["careless", "detailed", "quick", "lazy"],
      correct: 1,
      explanation: "'Meticulous' means showing great attention to detail; very careful and precise."
    },
    {
      question: "What does 'reading between the lines' mean?",
      options: ["Reading every other line", "Understanding implied meaning", "Reading slowly", "Skipping parts"],
      correct: 1,
      explanation: "'Reading between the lines' means understanding the implied or hidden meaning."
    },
    {
      question: "In academic writing, which transition word shows contrast?",
      options: ["Furthermore", "However", "Therefore", "Additionally"],
      correct: 1,
      explanation: "'However' is used to introduce a statement that contrasts with previous information."
    },
    {
      question: "The phrase 'a double-edged sword' refers to something that:",
      options: ["is very sharp", "has both advantages and disadvantages", "is dangerous", "cuts both ways literally"],
      correct: 1,
      explanation: "'A double-edged sword' means having both positive and negative consequences."
    }
  ],
  // Block 10 - Advanced Communication & Professional English
  [
    {
      question: "In a formal business email, which greeting is most appropriate?",
      options: ["Hey there!", "Dear Sir/Madam,", "What's up?", "Hi buddy!"],
      correct: 1,
      explanation: "'Dear Sir/Madam' is the most formal and appropriate business greeting."
    },
    {
      question: "Choose the most diplomatic way to disagree:",
      options: ["You're wrong", "I see your point, however...", "That's stupid", "No way!"],
      correct: 1,
      explanation: "'I see your point, however...' acknowledges the other person while expressing disagreement politely."
    },
    {
      question: "What does 'cutting-edge technology' mean?",
      options: ["Sharp tools", "Latest and most advanced", "Dangerous equipment", "Old technology"],
      correct: 1,
      explanation: "'Cutting-edge' means the latest or most advanced stage in development."
    },
    {
      question: "In professional contexts, 'streamline' means to:",
      options: ["make water flow", "make more efficient", "draw lines", "create streams"],
      correct: 1,
      explanation: "'Streamline' means to make more efficient by simplifying or eliminating unnecessary elements."
    },
    {
      question: "The phrase 'think outside the box' encourages:",
      options: ["avoiding containers", "creative thinking", "staying indoors", "organizing things"],
      correct: 1,
      explanation: "'Think outside the box' means to think creatively and unconventionally."
    }
  ]
];

// Proficiency Levels Configuration
const proficiencyLevels = {
  'A1': { name: 'Beginner', range: '0-49%', description: 'Basic understanding of simple phrases and everyday expressions', color: 'A1' },
  'A2': { name: 'Elementary', range: '50-59%', description: 'Can understand frequently used expressions and communicate in simple tasks', color: 'A2' },
  'B1': { name: 'Pre-Intermediate', range: '60-69%', description: 'Can deal with most situations likely to arise whilst travelling', color: 'B1' },
  'B2': { name: 'Intermediate', range: '70-79%', description: 'Can understand complex texts and interact with native speakers', color: 'B2' },
  'C1': { name: 'Upper-Intermediate', range: '80-89%', description: 'Can use language flexibly and effectively for social and professional purposes', color: 'C1' },
  'C2': { name: 'Advanced', range: '90-100%', description: 'Near-native proficiency with sophisticated language use', color: 'C2' }
};

// DOM Elements
const screens = {
  welcome: document.getElementById('welcomeScreen'),
  quiz: document.getElementById('quizScreen'),
  results: document.getElementById('resultsScreen')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  // Theme toggle functionality
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('change', toggleTheme);
  
  // Apply default theme (no persistence in sandboxed environment)
  isDarkMode = false;
  applyTheme();
  
  // Name form submission
  document.getElementById('nameForm').addEventListener('submit', startQuiz);
  
  // Navigation buttons
  document.getElementById('nextBlockBtn').addEventListener('click', nextBlock);
  document.getElementById('retakeTestBtn').addEventListener('click', retakeTest);
  document.getElementById('viewCertificateBtn').addEventListener('click', showCertificate);
  document.getElementById('printCertificateBtn').addEventListener('click', printCertificate);
  
  showScreen('welcome');
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  applyTheme();
}

function applyTheme() {
  document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
}

function showScreen(screenName) {
  Object.keys(screens).forEach(key => {
    screens[key].classList.remove('active');
  });
  screens[screenName].classList.add('active');
}

function startQuiz(e) {
  e.preventDefault();
  const nameInput = document.getElementById('userName');
  const name = nameInput.value.trim();
  
  if (!name) {
    nameInput.classList.add('is-invalid');
    return;
  }
  
  currentUser = name;
  resetQuiz();
  displayUserName();
  loadBlock(0);
  showScreen('quiz');
}

function resetQuiz() {
  currentBlock = 0;
  currentQuestionInBlock = 0;
  answers = [];
  blockAnswers = [];
  totalScore = 0;
  updateProgress();
}

function displayUserName() {
  document.getElementById('displayName').textContent = currentUser;
}

function loadBlock(blockIndex) {
  const block = quizQuestions[blockIndex];
  const container = document.getElementById('questionContainer');
  blockAnswers = [];
  
  let html = `<div class="question-block">`;
  html += `<h3>Block ${blockIndex + 1} of 10</h3>`;
  
  block.forEach((question, qIndex) => {
    html += `
      <div class="question-item" data-question="${qIndex}">
        <div class="question-text">
          <strong>Question ${qIndex + 1}:</strong> ${question.question}
        </div>
        <div class="options" data-question="${qIndex}">
          ${question.options.map((option, oIndex) => 
            `<div class="option" data-option="${oIndex}" onclick="selectOption(${blockIndex}, ${qIndex}, ${oIndex})">
              ${option}
            </div>`
          ).join('')}
        </div>
        <div class="feedback" id="feedback-${qIndex}"></div>
      </div>
    `;
  });
  
  html += `</div>`;
  container.innerHTML = html;
  
  updateBlockProgress();
}

function selectOption(blockIndex, questionIndex, optionIndex) {
  // Prevent multiple selections for the same question
  if (blockAnswers[questionIndex] !== undefined) return;
  
  const question = quizQuestions[blockIndex][questionIndex];
  const isCorrect = optionIndex === question.correct;
  
  // Store the answer
  blockAnswers[questionIndex] = {
    selected: optionIndex,
    correct: question.correct,
    isCorrect: isCorrect
  };
  
  // Update UI
  const optionsContainer = document.querySelector(`[data-question="${questionIndex}"] .options`);
  const selectedOption = optionsContainer.querySelector(`[data-option="${optionIndex}"]`);
  
  // Disable all options for this question
  const allOptions = optionsContainer.querySelectorAll('.option');
  allOptions.forEach(option => {
    option.classList.add('disabled');
    const oIndex = parseInt(option.getAttribute('data-option'));
    if (oIndex === question.correct) {
      option.style.backgroundColor = 'var(--success-color)';
      option.style.color = 'white';
      option.style.borderColor = 'var(--success-color)';
    } else if (oIndex === optionIndex && !isCorrect) {
      option.style.backgroundColor = 'var(--danger-color)';
      option.style.color = 'white';
      option.style.borderColor = 'var(--danger-color)';
    }
  });
  
  // Show feedback
  showFeedback(questionIndex, isCorrect, question.explanation);
  
  // Check if block is complete
  if (blockAnswers.filter(a => a !== undefined).length === 5) {
    document.getElementById('nextBlockBtn').disabled = false;
  }
}

function showFeedback(questionIndex, isCorrect, explanation) {
  const feedbackEl = document.getElementById(`feedback-${questionIndex}`);
  feedbackEl.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
  feedbackEl.innerHTML = `
    <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
    <strong>${isCorrect ? 'Correct!' : 'Incorrect'}</strong> ${explanation}
  `;
  feedbackEl.style.display = 'block';
}

function nextBlock() {
  // Calculate block score
  const blockScore = blockAnswers.filter(a => a && a.isCorrect).length;
  totalScore += blockScore;
  
  // Store answers for this block
  answers.push(blockAnswers);
  
  currentBlock++;
  
  if (currentBlock >= 10) {
    showResults();
  } else {
    loadBlock(currentBlock);
    document.getElementById('nextBlockBtn').disabled = true;
  }
  
  updateProgress();
}

function updateProgress() {
  const progress = (currentBlock / 10) * 100;
  document.getElementById('progressBar').style.width = `${progress}%`;
}

function updateBlockProgress() {
  document.getElementById('blockProgress').textContent = `Block ${currentBlock + 1} of 10`;
}

function showResults() {
  const percentage = Math.round((totalScore / 50) * 100);
  const level = getProficiencyLevel(percentage);
  
  // Update results display
  document.getElementById('finalScore').innerHTML = `
    <span class="display-4 fw-bold text-primary">${percentage}%</span><br>
    <span class="fs-5">${totalScore} out of 50 questions correct</span>
  `;
  
  const badge = document.getElementById('proficiencyBadge');
  badge.innerHTML = `${level.name} (${level.range})`;
  badge.className = `proficiency-badge ${level.color}`;
  
  // Results details
  const detailsEl = document.getElementById('resultsDetails');
  detailsEl.innerHTML = `
    <div class="row">
      <div class="col-md-6">
        <h5 class="text-primary">Performance Breakdown:</h5>
        <ul class="list-unstyled">
          <li><strong>Total Questions:</strong> 50</li>
          <li><strong>Correct Answers:</strong> ${totalScore}</li>
          <li><strong>Incorrect Answers:</strong> ${50 - totalScore}</li>
          <li><strong>Accuracy Rate:</strong> ${percentage}%</li>
        </ul>
      </div>
      <div class="col-md-6">
        <h5 class="text-primary">Proficiency Level:</h5>
        <p><strong>${level.name}</strong></p>
        <p class="text-muted">${level.description}</p>
        <p><strong>Score Range:</strong> ${level.range}</p>
      </div>
    </div>
  `;
  
  showScreen('results');
}

function getProficiencyLevel(percentage) {
  if (percentage >= 90) return proficiencyLevels['C2'];
  if (percentage >= 80) return proficiencyLevels['C1'];
  if (percentage >= 70) return proficiencyLevels['B2'];
  if (percentage >= 60) return proficiencyLevels['B1'];
  if (percentage >= 50) return proficiencyLevels['A2'];
  return proficiencyLevels['A1'];
}

function showCertificate() {
  generateCertificate();
  const modal = new bootstrap.Modal(document.getElementById('certificateModal'));
  modal.show();
}

function generateCertificate() {
  const percentage = Math.round((totalScore / 50) * 100);
  const level = getProficiencyLevel(percentage);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const certificateNumber = `EPA-${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`;
  
  const certificateHTML = `
    <div class="certificate">
      <div class="certificate-header">
        <div class="certificate-title">Certificate of English Language Proficiency</div>
        <div class="certificate-subtitle">English Proficiency Assessment Center</div>
      </div>
      
      <div class="certificate-body">
        <div class="certificate-text">This is to certify that</div>
        <div class="participant-name-cert">${currentUser}</div>
        <div class="certificate-text">has successfully completed the English Proficiency Assessment</div>
        <div class="certificate-text">and demonstrated</div>
        
        <div class="achievement-details">
          <div class="proficiency-level">${level.name} Level Proficiency</div>
          <div class="score-details">Score: ${percentage}% (${totalScore}/50 questions correct)</div>
          <div class="level-description">${level.description}</div>
        </div>
        
        <div class="certificate-text">in the English language</div>
      </div>
      
      <div class="certificate-footer">
        <div class="date-section">
          <div class="certificate-date"><strong>Date of Completion:</strong><br>${formattedDate}</div>
          <div class="certificate-number">Certificate No: ${certificateNumber}</div>
        </div>
        <div class="signature-section">
          <div class="signature-line"></div>
          <div class="signature-title">Assessment Director</div>
        </div>
      </div>
      
      <div class="official-seal">
        <div>OFFICIAL<br>SEAL</div>
      </div>
    </div>
  `;
  
  // Update both modal and print containers
  document.getElementById('certificateContainer').innerHTML = certificateHTML;
  document.getElementById('printCertificate').innerHTML = certificateHTML;
}

function printCertificate() {
  generateCertificate();
  window.print();
}

function retakeTest() {
  // Keep the user name but reset everything else
  const nameInput = document.getElementById('userName');
  nameInput.value = currentUser;
  
  resetQuiz();
  showScreen('welcome');
}