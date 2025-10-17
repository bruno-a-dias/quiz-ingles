// ===================================
// NAVIGATION MANAGEMENT
// ===================================

// Track current page
let currentPage = getCurrentPage();

// Get current page from URL
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    
    // Remove .html extension for comparison
    return page.replace('.html', '') || 'index';
}

// Initialize navigation
function initNavigation() {
    updateActiveNavLinks();
    setupNavigationListeners();
    handleBackNavigation();
}

// Update active navigation links
function updateActiveNavLinks() {
    const navLinks = document.querySelectorAll('.navbar-brand, .footer-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        
        // Check if link matches current page
        const linkPage = href.replace('.html', '').replace('/', '');
        
        if (linkPage === currentPage || 
            (currentPage === 'index' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Setup navigation event listeners
function setupNavigationListeners() {
    // Handle internal navigation
    const internalLinks = document.querySelectorAll('a[href^="index.html"], a[href^="flashcards.html"], a[href^="quiz.html"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Check if there's unsaved progress
            if (shouldWarnBeforeLeaving()) {
                if (!confirm('Você tem progresso não salvo. Deseja realmente sair?')) {
                    e.preventDefault();
                    return;
                }
            }
            
            // Save current state before navigation
            saveNavigationState();
        });
    });
}

// Check if user should be warned before leaving
function shouldWarnBeforeLeaving() {
    // Check if quiz is in progress
    if (currentPage === 'quiz') {
        const quizScreen = document.getElementById('quizScreen');
        if (quizScreen && quizScreen.style.display !== 'none') {
            return true;
        }
    }
    
    // Check if flashcard session is active
    if (currentPage === 'flashcards') {
        const studyView = document.getElementById('studyView');
        if (studyView && studyView.style.display !== 'none') {
            return true;
        }
    }
    
    return false;
}

// Save navigation state
function saveNavigationState() {
    const navigationState = {
        from: currentPage,
        timestamp: Date.now(),
        theme: document.body.classList.contains('dark-theme') ? 'dark' : 'light',
        language: localStorage.getItem('preferredLanguage') || 'pt'
    };
    
    sessionStorage.setItem('navigationState', JSON.stringify(navigationState));
}

// Load navigation state
function loadNavigationState() {
    const stateStr = sessionStorage.getItem('navigationState');
    if (!stateStr) return null;
    
    try {
        return JSON.parse(stateStr);
    } catch (e) {
        console.error('Error parsing navigation state:', e);
        return null;
    }
}

// Handle back navigation
function handleBackNavigation() {
    // Listen for popstate (browser back/forward)
    window.addEventListener('popstate', (event) => {
        if (event.state) {
            currentPage = getCurrentPage();
            updateActiveNavLinks();
        }
    });
    
    // Warn before closing tab/window if there's active progress
    window.addEventListener('beforeunload', (event) => {
        if (shouldWarnBeforeLeaving()) {
            event.preventDefault();
            event.returnValue = '';
            return '';
        }
    });
}

// Navigate to page programmatically
function navigateTo(page, saveState = true) {
    if (saveState) {
        saveNavigationState();
    }
    
    window.location.href = page + '.html';
}

// Get page title
function getPageTitle(page) {
    const titles = {
        'index': 'English Learning Hub',
        'flashcards': 'Flashcards Progressivos - English Learning Hub',
        'quiz': 'Teste de Proficiência - English Learning Hub'
    };
    
    return titles[page] || 'English Learning Hub';
}

// Update page title
function updatePageTitle() {
    document.title = getPageTitle(currentPage);
}

// Breadcrumb management
function updateBreadcrumb() {
    const breadcrumb = document.querySelector('.breadcrumb');
    if (!breadcrumb) return;
    
    const breadcrumbData = {
        'index': [],
        'flashcards': [
            { text: 'Início', href: 'index.html' },
            { text: 'Flashcards', href: null }
        ],
        'quiz': [
            { text: 'Início', href: 'index.html' },
            { text: 'Teste de Proficiência', href: null }
        ]
    };
    
    const items = breadcrumbData[currentPage] || [];
    
    if (items.length === 0) {
        breadcrumb.style.display = 'none';
        return;
    }
    
    breadcrumb.innerHTML = '<ol class="breadcrumb"></ol>';
    const ol = breadcrumb.querySelector('ol');
    
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'breadcrumb-item';
        
        if (item.href) {
            const link = document.createElement('a');
            link.href = item.href;
            link.textContent = item.text;
            link.setAttribute('data-translate', item.text.toLowerCase().replace(' ', '_'));
            li.appendChild(link);
        } else {
            li.textContent = item.text;
            li.className += ' active';
            li.setAttribute('aria-current', 'page');
            li.setAttribute('data-translate', item.text.toLowerCase().replace(' ', '_'));
        }
        
        ol.appendChild(li);
    });
}

// Scroll to top on navigation
function scrollToTop(smooth = true) {
    window.scrollTo({
        top: 0,
        behavior: smooth ? 'smooth' : 'auto'
    });
}

// Check if coming from specific page
function isComingFrom(page) {
    const state = loadNavigationState();
    return state && state.from === page;
}

// Navigation history
const NavigationHistory = {
    stack: [],
    
    push: function(page) {
        this.stack.push({
            page: page,
            timestamp: Date.now(),
            scrollPosition: window.scrollY
        });
        
        // Keep only last 10 entries
        if (this.stack.length > 10) {
            this.stack.shift();
        }
        
        this.save();
    },
    
    pop: function() {
        const entry = this.stack.pop();
        this.save();
        return entry;
    },
    
    peek: function() {
        return this.stack[this.stack.length - 1];
    },
    
    clear: function() {
        this.stack = [];
        this.save();
    },
    
    save: function() {
        sessionStorage.setItem('navigationHistory', JSON.stringify(this.stack));
    },
    
    load: function() {
        const historyStr = sessionStorage.getItem('navigationHistory');
        if (historyStr) {
            try {
                this.stack = JSON.parse(historyStr);
            } catch (e) {
                console.error('Error loading navigation history:', e);
                this.stack = [];
            }
        }
    }
};

// Restore scroll position if returning to page
function restoreScrollPosition() {
    const state = loadNavigationState();
    if (state && state.scrollPosition) {
        setTimeout(() => {
            window.scrollTo({
                top: state.scrollPosition,
                behavior: 'auto'
            });
        }, 100);
    }
}

// Page transition effects
function transitionToPage(page, transition = 'fade') {
    const body = document.body;
    
    if (transition === 'fade') {
        body.style.opacity = '0';
        setTimeout(() => {
            navigateTo(page);
        }, 300);
    } else {
        navigateTo(page);
    }
}

// Initialize when DOM is ready
function initNavigationSystem() {
    initNavigation();
    updatePageTitle();
    updateBreadcrumb();
    NavigationHistory.load();
    
    // Add current page to history
    NavigationHistory.push(currentPage);
    
    // Restore scroll position if needed
    if (sessionStorage.getItem('restoreScroll') === 'true') {
        restoreScrollPosition();
        sessionStorage.removeItem('restoreScroll');
    }
}

// Export navigation utilities
window.Navigation = {
    navigateTo,
    getCurrentPage,
    transitionToPage,
    scrollToTop,
    isComingFrom,
    history: NavigationHistory
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigationSystem);
} else {
    initNavigationSystem();
}
