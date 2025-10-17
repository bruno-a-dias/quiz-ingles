// ===================================
// LANGUAGE MANAGEMENT SYSTEM
// ===================================

// Translation data
const translations = {
    pt: {
        // Main page
        site_title: "English Learning Hub",
        site_subtitle: "Sua jornada para fluência em inglês começa aqui",
        hero_title: "Aprenda Inglês de Forma Inteligente",
        hero_description: "Plataforma completa com flashcards progressivos e teste de proficiência para acelerar seu aprendizado de inglês",
        
        // Badges
        badge_progressive: "Sistema Progressivo",
        badge_levels: "6 Níveis",
        badge_certificate: "Certificado",
        
        // About section
        about_title: "Sobre a Plataforma",
        about_description: "Nossa plataforma oferece duas ferramentas poderosas para o aprendizado de inglês: flashcards com repetição espaçada e teste de proficiência abrangente",
        
        // Features
        feature_progressive_title: "Aprendizado Progressivo",
        feature_progressive_desc: "Sistema de níveis que se adapta ao seu conhecimento, do básico ao avançado",
        feature_spaced_title: "Repetição Espaçada",
        feature_spaced_desc: "Algoritmo inteligente que otimiza a retenção de memória a longo prazo",
        feature_assessment_title: "Avaliação Completa",
        feature_assessment_desc: "Teste abrangente com certificado de proficiência imprimível",
        
        // Learning options
        options_title: "Escolha Sua Jornada de Aprendizado",
        options_description: "Selecione a ferramenta que melhor se adequa aos seus objetivos de aprendizado",
        
        // Flashcards card
        flashcards_title: "Flashcards Progressivos",
        flashcards_description: "Aprenda vocabulário e gramática através de um sistema progressivo de 6 níveis com repetição espaçada inteligente",
        flashcards_feature_1: "Repetição espaçada inteligente",
        flashcards_feature_2: "Progressão do básico ao avançado",
        flashcards_feature_3: "Sistema de gamificação",
        flashcards_feature_4: "Mais de 200 cartões",
        flashcards_button: "Começar Aprendizado",
        
        // Quiz card
        quiz_title: "Teste de Proficiência",
        quiz_description: "Avalie seu nível de inglês com 50 questões abrangentes e receba um certificado de proficiência imprimível",
        quiz_feature_1: "50 questões divididas em 10 blocos",
        quiz_feature_2: "Feedback imediato",
        quiz_feature_3: "Certificado imprimível",
        quiz_feature_4: "Avaliação completa A1-C2",
        quiz_button: "Fazer Teste",
        
        // Stats
        stat_levels: "Níveis",
        stat_cards: "Cartões",
        stat_cefr: "CEFR",
        stat_questions: "Questões",
        stat_blocks: "Blocos",
        stat_certificate: "Certificado",
        
        // Footer
        footer_about: "Sobre o English Learning Hub",
        footer_description: "Plataforma completa de aprendizado de inglês com metodologia cientificamente comprovada para acelerar sua fluência",
        footer_links: "Links Rápidos",
        footer_home: "Início",
        footer_flashcards: "Flashcards",
        footer_quiz: "Teste",
        footer_contact: "Contato",
        footer_rights: "Todos os direitos reservados.",
        
        // Navigation
        back_home: "Voltar ao Início",
        home: "Início",
        flashcards: "Flashcards",
        quiz: "Teste de Proficiência",
        
        // Flashcards page
        flashcards_subtitle: "Aprenda inglês de forma progressiva, do básico ao avançado",
        stat_streak: "Dias seguidos",
        stat_mastered: "Cartões dominados",
        stat_level: "Nível atual",
        stat_progress: "Progresso geral",
        
        // Levels
        level_1_title: "Palavras Básicas (A1)",
        level_1_desc: "Vocabulário essencial do dia a dia",
        level_2_title: "Gramática Básica (A1-A2)",
        level_2_desc: "Regras gramaticais simples",
        level_3_title: "Vida Cotidiana (A2)",
        level_3_desc: "Situações do dia a dia",
        level_4_title: "Gramática Intermediária (B1)",
        level_4_desc: "Estruturas gramaticais complexas",
        level_5_title: "Vocabulário Avançado (B1-B2)",
        level_5_desc: "Palavras acadêmicas e profissionais",
        level_6_title: "Construtor de Fluência (B2+)",
        level_6_desc: "Expressões complexas e idiomas",
        
        // Status
        status_unlocked: "Desbloqueado",
        status_locked: "Bloqueado",
        unlock_requirement: "Domine 80% do Nível 1 para desbloquear",
        unlock_requirement_2: "Domine 80% do Nível 2 para desbloquear",
        unlock_requirement_3: "Domine 80% do Nível 3 para desbloquear",
        unlock_requirement_4: "Domine 80% do Nível 4 para desbloquear",
        unlock_requirement_5: "Domine 80% do Nível 5 para desbloquear",
        
        // Buttons
        btn_start: "Começar",
        back_dashboard: "Voltar ao Painel",
        
        // Study
        front_label: "Frente",
        back_label: "Verso",
        tap_flip: "Toque para virar",
        need_practice: "Preciso Praticar",
        got_it: "Aprendi",
        
        // Session complete
        session_complete: "Sessão Concluída!",
        great_job: "Ótimo trabalho!",
        cards_studied: "Cartões estudados",
        accuracy: "Taxa de acerto",
        continue: "Continuar Estudando",
        
        // Quiz page
        quiz_welcome_title: "Teste de Proficiência em Inglês",
        quiz_welcome_subtitle: "Avalie seu nível de inglês com 50 questões abrangentes",
        info_questions: "Questões",
        info_blocks: "Blocos",
        info_certificate: "Certificado",
        
        // Instructions
        instructions_title: "Instruções",
        instruction_1: "O teste contém 50 questões divididas em 10 blocos de 5 questões cada",
        instruction_2: "Você receberá feedback imediato após responder cada questão",
        instruction_3: "Não é possível alterar respostas após o feedback",
        instruction_4: "Ao final, você receberá um certificado com seu nível de proficiência",
        instruction_5: "O teste avalia níveis de A1 (Iniciante) a C2 (Avançado)",
        
        start_quiz: "Começar Teste",
        block: "Bloco",
        question: "Questão",
        next: "Próxima",
        
        // Results
        congrats: "Parabéns!",
        test_complete: "Você completou o teste de proficiência em inglês",
        score: "Pontuação",
        correct: "Corretas",
        level: "Nível",
        print_certificate: "Imprimir Certificado",
        retake_quiz: "Refazer Teste",
        
        // Certificate
        cert_title: "Certificado de Proficiência em Inglês",
        cert_institution: "English Proficiency Assessment Center",
        cert_intro: "Este certificado atesta que",
        cert_body: "completou com sucesso o Teste de Proficiência em Inglês em",
        cert_achievement: "e demonstrou proficiência de nível",
        cert_score_label: "Pontuação:",
        cert_director: "Diretor de Avaliação",
        cert_number_label: "Certificado Nº",
        
        // Modal
        enter_name: "Insira seu Nome",
        name_required: "Por favor, insira seu nome completo para gerar o certificado:",
        full_name: "Nome Completo",
        name_error: "Por favor, insira um nome válido",
        cancel: "Cancelar",
        start: "Iniciar"
    },
    
    en: {
        // Main page
        site_title: "English Learning Hub",
        site_subtitle: "Your journey to English fluency starts here",
        hero_title: "Learn English the Smart Way",
        hero_description: "Complete platform with progressive flashcards and proficiency testing to accelerate your English learning",
        
        // Badges
        badge_progressive: "Progressive System",
        badge_levels: "6 Levels",
        badge_certificate: "Certificate",
        
        // About section
        about_title: "About the Platform",
        about_description: "Our platform offers two powerful tools for English learning: spaced repetition flashcards and comprehensive proficiency testing",
        
        // Features
        feature_progressive_title: "Progressive Learning",
        feature_progressive_desc: "Level system that adapts to your knowledge, from basic to advanced",
        feature_spaced_title: "Spaced Repetition",
        feature_spaced_desc: "Smart algorithm that optimizes long-term memory retention",
        feature_assessment_title: "Complete Assessment",
        feature_assessment_desc: "Comprehensive test with printable proficiency certificate",
        
        // Learning options
        options_title: "Choose Your Learning Journey",
        options_description: "Select the tool that best fits your learning goals",
        
        // Flashcards card
        flashcards_title: "Progressive Flashcards",
        flashcards_description: "Learn vocabulary and grammar through a progressive 6-level system with smart spaced repetition",
        flashcards_feature_1: "Smart spaced repetition",
        flashcards_feature_2: "Basic to advanced progression",
        flashcards_feature_3: "Gamification system",
        flashcards_feature_4: "200+ flashcards",
        flashcards_button: "Start Learning",
        
        // Quiz card
        quiz_title: "Proficiency Test",
        quiz_description: "Assess your English level with 50 comprehensive questions and receive a printable proficiency certificate",
        quiz_feature_1: "50 questions in 10 blocks",
        quiz_feature_2: "Immediate feedback",
        quiz_feature_3: "Printable certificate",
        quiz_feature_4: "Complete A1-C2 assessment",
        quiz_button: "Take Test",
        
        // Stats
        stat_levels: "Levels",
        stat_cards: "Cards",
        stat_cefr: "CEFR",
        stat_questions: "Questions",
        stat_blocks: "Blocks",
        stat_certificate: "Certificate",
        
        // Footer
        footer_about: "About English Learning Hub",
        footer_description: "Complete English learning platform with scientifically proven methodology to accelerate your fluency",
        footer_links: "Quick Links",
        footer_home: "Home",
        footer_flashcards: "Flashcards",
        footer_quiz: "Test",
        footer_contact: "Contact",
        footer_rights: "All rights reserved.",
        
        // Navigation
        back_home: "Back to Home",
        home: "Home",
        flashcards: "Flashcards",
        quiz: "Proficiency Test",
        
        // Flashcards page
        flashcards_subtitle: "Learn English progressively, from basic to advanced",
        stat_streak: "Day streak",
        stat_mastered: "Cards mastered",
        stat_level: "Current level",
        stat_progress: "Overall progress",
        
        // Levels
        level_1_title: "Basic Words (A1)",
        level_1_desc: "Essential everyday vocabulary",
        level_2_title: "Basic Grammar (A1-A2)",
        level_2_desc: "Simple grammar rules",
        level_3_title: "Daily Life (A2)",
        level_3_desc: "Everyday situations",
        level_4_title: "Intermediate Grammar (B1)",
        level_4_desc: "Complex grammar structures",
        level_5_title: "Advanced Vocabulary (B1-B2)",
        level_5_desc: "Academic and professional words",
        level_6_title: "Fluency Builder (B2+)",
        level_6_desc: "Complex expressions and idioms",
        
        // Status
        status_unlocked: "Unlocked",
        status_locked: "Locked",
        unlock_requirement: "Master 80% of Level 1 to unlock",
        unlock_requirement_2: "Master 80% of Level 2 to unlock",
        unlock_requirement_3: "Master 80% of Level 3 to unlock",
        unlock_requirement_4: "Master 80% of Level 4 to unlock",
        unlock_requirement_5: "Master 80% of Level 5 to unlock",
        
        // Buttons
        btn_start: "Start",
        back_dashboard: "Back to Dashboard",
        
        // Study
        front_label: "Front",
        back_label: "Back",
        tap_flip: "Tap to flip",
        need_practice: "Need Practice",
        got_it: "Got It",
        
        // Session complete
        session_complete: "Session Complete!",
        great_job: "Great job!",
        cards_studied: "Cards studied",
        accuracy: "Accuracy rate",
        continue: "Continue Studying",
        
        // Quiz page
        quiz_welcome_title: "English Proficiency Test",
        quiz_welcome_subtitle: "Assess your English level with 50 comprehensive questions",
        info_questions: "Questions",
        info_blocks: "Blocks",
        info_certificate: "Certificate",
        
        // Instructions
        instructions_title: "Instructions",
        instruction_1: "The test contains 50 questions divided into 10 blocks of 5 questions each",
        instruction_2: "You will receive immediate feedback after answering each question",
        instruction_3: "You cannot change answers after receiving feedback",
        instruction_4: "At the end, you will receive a certificate with your proficiency level",
        instruction_5: "The test evaluates levels from A1 (Beginner) to C2 (Advanced)",
        
        start_quiz: "Start Test",
        block: "Block",
        question: "Question",
        next: "Next",
        
        // Results
        congrats: "Congratulations!",
        test_complete: "You have completed the English proficiency test",
        score: "Score",
        correct: "Correct",
        level: "Level",
        print_certificate: "Print Certificate",
        retake_quiz: "Retake Test",
        
        // Certificate
        cert_title: "Certificate of English Language Proficiency",
        cert_institution: "English Proficiency Assessment Center",
        cert_intro: "This is to certify that",
        cert_body: "has successfully completed the English Proficiency Assessment on",
        cert_achievement: "and demonstrated proficiency level",
        cert_score_label: "Score:",
        cert_director: "Assessment Director",
        cert_number_label: "Certificate No.",
        
        // Modal
        enter_name: "Enter Your Name",
        name_required: "Please enter your full name to generate the certificate:",
        full_name: "Full Name",
        name_error: "Please enter a valid name",
        cancel: "Cancel",
        start: "Start"
    }
};

// Current language
let currentLang = localStorage.getItem('preferredLanguage') || 'pt';

// Initialize language system
function initLanguage() {
    // Set initial language
    updateLanguage(currentLang);
    
    // Add event listeners to language buttons
    const langButtons = document.querySelectorAll('.btn-language');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
}

// Change language
function changeLanguage(lang) {
    if (lang === currentLang) return;
    
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateLanguage(lang);
    updateLanguageButtons(lang);
}

// Update all text elements
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    const placeholders = document.querySelectorAll('[data-translate-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

// Update language buttons active state
function updateLanguageButtons(lang) {
    const buttons = document.querySelectorAll('.btn-language');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}
