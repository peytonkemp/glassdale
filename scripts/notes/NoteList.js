import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";


// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".notesContainer")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

let allNotes = []
let allCriminals = []

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
    .then(getCriminals)
        .then(() => {
            allNotes = useNotes()
            allCriminals = useCriminals()
            render()
        })
}

const render = (noteArray, criminalArray) => {
    const allNotesConvertedToStrings = noteArray.map(noteObject => {
    const relatedCriminalObject = criminalArray.find(criminal => criminal.id === noteObject.criminalId)
    return NoteHTMLConverter(noteObject, relatedCriminalObject)

    }).join("")

    contentTarget.innerHTML = `
        <h3>Case Notes</h3>
        <section class="notesList">
        ${allNotesConvertedToStrings}
        </section>
        `
}


eventHub.addEventListener("noteStateChanged", event => {
    if (contentTarget.innerHTML !== "") {
      NoteList()
    }
  })



//   const render = (noteCollection, criminalCollection) => {
//     contentTarget.innerHTML = noteCollection.map(note => {
//         // Find the related criminal
//         const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)

//         return `
//             <section class="note">
//                 <h2>Note about ${relatedCriminal.name}</h2>
//                 ${note.noteText}
//             </section>
//         `
//     })
// }

// const NoteList = () => {
//     getNotes()
//         .then(getCriminals)
//         .then(() => {
//             const notes = useNotes()
//             const criminals = useCriminals()

//             render(notes, criminals)
//         })
// }