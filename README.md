# QuickNotes

QuickNotes is a small note-taking web app built with plain HTML, CSS and JavaScript. You can write short notes, put each one in a category (Personal, Work or Study), search through them as you type and delete the ones you no longer need. Notes are saved in the browser with localStorage, so they are still there after you refresh or reopen the page.

## Features

- Add notes with a category: Personal, Work or Study
- Each note card shows the text, a category label, the date and time it was created and a Delete button
- Different colour for each category
- Validation: empty notes and notes over 200 characters show an error message
- Live search that is not case-sensitive, with a "No notes match your search." message
- Note counter: "You have no notes yet.", "You have 1 note." or "You have N notes."
- Notes are saved to localStorage and loaded when the page opens
- "Clear all" button with a confirmation prompt
- Responsive layout: the form stacks vertically on screens 600px or narrower

## How to run locally

1. Clone the repository:
   ```
   git clone https://github.com/eunynyambura03-ux/QuickNotes-app.git
   ```
2. Open the `QuickNotes-app` folder.
3. Double-click `index.html` to open it in your browser (or use the Live Server extension in VS Code).

No installation or build step is needed.

## What I learned

- How to select elements with `querySelector` and respond to `submit` and `input` events.
- How to build the page from an array of objects with `createElement` and `textContent`, which is safer than `innerHTML` for user text.
- How to save and load data with `localStorage`, `JSON.stringify` and `JSON.parse`.
- How to use Flexbox and a `@media` query to make a layout work on both desktop and phone screens.
- How to make small, meaningful Git commits for each step of a project.
