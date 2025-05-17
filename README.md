# Flashcard System

This project is a web-based Flashcard System that allows users to create, store, and retrieve flashcards associated with a student ID. A key feature is the automatic classification of flashcards into subjects based on keywords found in the question. The application is built using HTML for structure, CSS for styling, and vanilla JavaScript for all client-side logic and interactivity.

## Table of Contents
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Project Structure](#project-structure)
* [Setup](#setup)
* [Usage](#usage)
* [How Subject Classification Works](#how-subject-classification-works)
* [Future Enhancements (Ideas)](#future-enhancements-ideas)
* [Contributing](#contributing)
* [License](#license)

## Features
*   **Add Flashcards:** Users can input a Student ID, a question, and an answer to create a new flashcard.
*   **Automatic Subject Classification:** Questions are automatically categorized into subjects (e.g., Biology, Physics, Math, Computer Science, etc.) based on predefined keywords.
*   **Fetch and Display Flashcards:** Users can retrieve and display flashcards for a specific Student ID, with an option to limit the number of cards shown.
*   **Responsive Design:** The interface is styled to be usable across different screen sizes.
*   **Client-Side Storage:** Flashcards are currently stored in an in-memory JavaScript array (data will be lost on page refresh).

## Technologies Used
*   **HTML5:** For the semantic structure of the web page.
*   **CSS3:** For styling, layout (including Flexbox and CSS Grid for flashcard display), and responsive design.
*   **JavaScript (ES6+):** For all client-side logic, including DOM manipulation, event handling, flashcard management, and subject classification.
*   **Git & GitHub:** For version control and remote repository hosting.

## Project Structure
The project is organized as follows:

/ (Project Root: D:/WD/TASK/)
├── CSS/
│   └── style.css         # Contains all custom styles for the application.
├── HTML/
│   └── index.html        # The main entry point and structure of the web application.
├── JS/
│   └── script.js         # Handles all JavaScript logic, including flashcard operations and subject classification.
├── README.md             # This file, providing information about the project.
└── .gitignore            # (Recommended) Specifies intentionally untracked files.
# --- Optional Folders ---
# If 'Git/' or 'Task/' are part of your project and tracked, describe them.
# Otherwise, they should ideally be in your .gitignore file.
# ├── Git/                  # [Description of Git/ folder if relevant and tracked]
# └── Task/                 # [Description of Task/ folder if relevant and tracked]


## Setup
To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/TilakVemana/Task.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd Task  # Or whatever you named your root project folder
    ```
3.  **Open the application:**
    Open the `HTML/index.html` file in your preferred web browser (e.g., Chrome, Firefox, Edge).
    *   You can typically just double-click the file.
    *   Alternatively, if you are using VS Code with the "Live Server" extension, you can right-click `index.html` in the explorer and select "Open with Live Server".

## Usage
Once `HTML/index.html` is open in your browser:

1.  **Adding a Flashcard:**
    *   In the "Add Flashcard" section, enter a Student ID, the question, and the answer in the respective input fields.
    *   Click the "Add" button. An alert will confirm the flashcard has been added and its classified subject.
2.  **Fetching Flashcards:**
    *   In the "Get Flashcards" section, enter the Student ID for whom you want to retrieve flashcards.
    *   Enter a numerical limit for the maximum number of flashcards to display.
    *   Click the "Show" button. The flashcards will be displayed below, categorized by their auto-detected subject.

**Important Note:** Since the flashcards are stored in a JavaScript array in memory, all added flashcards will be lost when the browser page is refreshed or closed.

## How Subject Classification Works
The `classifySubject` function in `JS/script.js` attempts to categorize a question into a predefined subject based on the presence of keywords. It iterates through a list of subjects and their associated keywords. If a keyword is found (case-insensitive) within the question, the question is assigned to that subject. If no keywords match, it defaults to "General".

The current keyword list is quite comprehensive and covers a range of academic subjects.

## Future Enhancements (Ideas)
*   **Persistent Storage:** Implement local storage (browser's localStorage) or a backend with a database (e.g., Node.js with MongoDB/PostgreSQL, or Firebase) to save flashcards persistently.
*   **Edit/Delete Flashcards:** Add functionality to modify or remove existing flashcards.
*   **User Accounts/Authentication:** If multiple users are intended, implement user accounts.
*   **Improved UI/UX:** Enhance the user interface, perhaps with better visual feedback or a more interactive flashcard viewing experience (e.g., flipping cards).
*   **Advanced Search/Filter:** Allow searching flashcards by keywords or filtering by multiple criteria.
*   **Spaced Repetition System (SRS):** Integrate an SRS algorithm for more effective learning.
*   **Import/Export Flashcards:** Allow users to import flashcards from or export them to common formats (e.g., CSV, JSON).

## Contributing
Contributions are welcome! If you have suggestions or want to improve the project:
1.  Fork the Project (`https://github.com/TilakVemana/Task/fork`)
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request.
