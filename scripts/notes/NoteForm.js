import { saveNote } from "./NoteDataProvider.js"
import { getCriminals, useCriminals } from "./../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

export const NoteForm = () => {
    getCriminals()
        .then(() => {
            const arrayOfCriminals = useCriminals()
            render(arrayOfCriminals)
        }
        )
}

const render = (criminalsArray) => {
    contentTarget.innerHTML = `
    <h2>Notes</h2>    
    <form action="">
        <fieldset>
            <label for="note-criminalId">Suspect: </label>
            <select name="note-criminalId" id="note-criminalId">
                <option value="0">Please select a criminal...</option>
                ${criminalsArray.map(criminal => `<option value="${criminal.id}">${criminal.name}</option>`).join("")
                }
            </select>
        </fieldset>
        <fieldset>
            <label for="note-author">Author: </label>
            <input type="text" id="note-author">
        </fieldset>
        <fieldset>
            <label for="note-date">Date: </label>
            <input type="date" id="note-date">
        </fieldset>
        <fieldset>
            <label for="note-intuition">Intuition: </label>
            <input type="text" id="note-intuition">
        </fieldset>
        <fieldset>
            <label for="note-text">Note: </label>
            <input type="text" id="note-text">
        </fieldset>
        <button id="saveNote">Save Note</button>
    </form>
`
}


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    clickEvent.preventDefault()
    if (clickEvent.target.id === "saveNote") {
        const criminalId = document.getElementById("note-criminalId").value
        const author = document.getElementById("note-author").value
        const date = document.getElementById("note-date").value
        const intuition = document.getElementById("note-intuition").value
        const text = document.getElementById("note-text").value
        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            "text": text,
            "criminalId": parseInt(criminalId),
            "date": date,
            "author": author,
            "intuition": intuition
        }
        // debugger
        // Change API state and application state
        saveNote(newNote)
    }
})

