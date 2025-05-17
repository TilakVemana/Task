function fetchFlashcards() {
    const studentId = document.getElementById("fetchStudentId").value;
    const limit = parseInt(document.getElementById("limit").value);

    if (!studentId || !limit) {
        alert("Enter student ID and limit!");
        return;
    }

    let studentFlashcards = flashcards.filter(card => card.studentId === studentId).slice(0, limit);

    displayFlashcards(studentFlashcards); // Ensure this is executed
}const flashcards = []; // Store flashcards

// Rule-based subject classification
function classifySubject(question) {
    const rules = {
    'Biology': ['photosynthesis', 'mitosis', 'cell', 'enzyme', 'organism', 'DNA', 'genetics', 'ecosystem', 'bacteria', 'virus', 'mutation', 'evolution', 'protein', 'chromosome', 'anatomy', 'photosynthetic', 'heredity', 'hormone'],
    'Physics': ['gravity', 'force', 'velocity', 'energy', 'magnetism', 'thermodynamics', 'optics', 'motion', 'quantum', 'electricity', 'wave', 'magnetic field', 'resistance', 'friction', 'momentum', 'acceleration', 'radiation', 'pressure', 'kinetic', 'mechanics', 'entropy'],
    'Chemistry': ['acid', 'base', 'reaction', 'molecule', 'compound', 'element', 'catalyst', 'bond', 'organic', 'polymer', 'chemical formula', 'oxidation', 'pH', 'valence', 'isotope', 'chemical reaction', 'nucleus', 'solution', 'electron', 'ionic', 'covalent', 'solvent'],
    'Math': ['integral', 'derivative', 'matrix', 'algebra', 'geometry', 'calculus', 'probability', 'logarithm', 'equation', 'function', 'ratio', '+', '-', '*', '/', '%', 'square root', 'trigonometry', 'angle', 'polygon', 'prime number', 'factorial', 'parabola', 'exponent', 'vector'],
    'Computer Science': ['algorithm', 'programming', 'data structure', 'binary', 'AI', 'machine learning', 'network', 'database', 'loop', 'function', 'object', 'compiler', 'code', 'variable', 'recursion', 'array', 'hashmap', 'encryption', 'debugging', 'iteration', 'runtime'],
    'History': ['revolution', 'dynasty', 'war', 'civilization', 'empire', 'treaty', 'historical event', 'constitution', 'colonization', 'Renaissance', 'World War', 'Cold War', 'monarchy', 'feudalism', 'declaration', 'industrial revolution', 'treaty', 'imperialism', 'protest', 'annexation'],
    'Geography': ['continent', 'climate', 'ocean', 'mountain', 'latitude', 'longitude', 'terrain', 'natural disaster', 'river', 'plate tectonics', 'earthquake', 'tsunami', 'volcano', 'rainforest', 'biodiversity', 'desert', 'glacier', 'ecosystem', 'altitude', 'weather'],
    'Literature': ['poetry', 'novel', 'character', 'plot', 'metaphor', 'theme', 'prose', 'drama', 'genre', 'fiction', 'symbolism', 'narrator', 'imagery', 'alliteration', 'sonnet', 'epic', 'personification', 'irony', 'tragedy', 'comedy', 'satire', 'mythology'],
    'Economics': ['inflation', 'GDP', 'market', 'trade', 'investment', 'capital', 'supply', 'demand', 'tax', 'monopoly', 'currency', 'interest rate', 'recession', 'budget', 'subsidy', 'profit', 'tariff', 'credit', 'debt', 'dividend', 'banking', 'globalization'],
    'Psychology': ['behavior', 'cognition', 'emotion', 'mental health', 'therapy', 'personality', 'memory', 'stress', 'perception', 'motivation', 'unconscious', 'neuroscience', 'subconscious', 'counseling', 'addiction', 'intelligence', 'reflex', 'phobia', 'psychoanalysis'],
    'Politics': ['democracy', 'election', 'policy', 'government', 'constitution', 'law', 'parliament', 'campaign', 'vote', 'political party', 'judiciary', 'legislation', 'referendum', 'diplomacy', 'sanctions', 'executive', 'bipartisan', 'reform', 'coalition', 'corruption'],
    'General': [] // Default category
}

    for (const [subject, keywords] of Object.entries(rules)) {
        if (keywords.some(keyword => question.toLowerCase().includes(keyword))) {
            return subject;
        }
    }
    return 'General'; // Default category
}

// Function to add flashcard
function addFlashcard() {
    const studentId = document.getElementById("studentId").value;
    const question = document.getElementById("question").value;
    const answer = document.getElementById("answer").value;

    if (!studentId || !question || !answer) {
        alert("Fill all fields!");
        return;
    }

    const subject = classifySubject(question);
    const flashcard = { studentId, question, answer, subject };
    flashcards.push(flashcard);

    alert(`Flashcard Added! Subject: ${subject}`);
}

// Function to fetch flashcards with limit
function fetchFlashcards() {
    const studentId = document.getElementById("fetchStudentId").value;
    const limit = parseInt(document.getElementById("limit").value);

    if (!studentId || !limit) {
        alert("Enter student ID and limit!");
        return;
    }

    let studentFlashcards = flashcards.filter(card => card.studentId === studentId).slice(0, limit);

    displayFlashcards(studentFlashcards);
}

// Function to display flashcards
function displayFlashcards(flashcards) {
    const flashcardList = document.getElementById("flashcardList");
    flashcardList.innerHTML = "";

    flashcards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("flashcard");
        cardElement.innerHTML = `
            <strong>${card.subject}</strong>
            <p><b>Q:</b> ${card.question}</p>
            <p><b>A:</b> ${card.answer}</p>
        `;
        flashcardList.appendChild(cardElement);
    });
}