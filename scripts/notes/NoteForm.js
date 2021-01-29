import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
        <form action="">
        <label for="note-suspect">Suspect: </label>
        <input type="text" id="note-suspect">
        <label for="note-author">Author: </label>
        <input type="text" id="note-author">
        <label for="note-date">Date: </label>
        <input type="date" id="note-date">
        <label for="note-intuition">Intuition: </label>
        <input type="text" id="note-intuition">
        <label for="note-text">Note: </label>
        <input type="text" id="note-text">
        <button id="saveNote">Save Note</button>
  </form>
`
}

export const NoteForm = () => {
    render()
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    clickEvent.preventDefault()
    if (clickEvent.target.id === "saveNote") {
        const suspect = document.getElementById("note-suspect").value
        const author = document.getElementById("note-author").value
        const date = document.getElementById("note-date").value
        const intuition = document.getElementById("note-intuition").value
        const text = document.getElementById("note-text").value
        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            "text": text,
            "suspect": suspect,
            "date": date,
            "author": author,
            "intuition": intuition
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

