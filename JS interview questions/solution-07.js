// The Local Storage Manager:
// You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

function saveNoteToLocalStorage(note) {
  
    const noteKey = `note_${Date.now()}`;

    const noteString = JSON.stringify(note);

    localStorage.setItem(noteKey, noteString);
}

const note = {
    title: "Meeting Notes",
    content: "Discuss project updates and deadlines.",
    date: new Date().toISOString()
};

saveNoteToLocalStorage(note);
