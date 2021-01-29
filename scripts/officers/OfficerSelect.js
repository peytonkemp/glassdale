import { useOfficers, getOfficers } from "./OfficerProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(officerSelectedCustomEvent)
    }
})

export const OfficerSelect = () => {
    getOfficers()
        .then(() => {
            const officers = useOfficers()
            render(officers)
        })
}

const render = officerCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${officerCollection.map(officer => `<option value="${officer.name}">${officer.name}</option>`).join("")
        }
        </select>
    `
}

eventHub.addEventListener("crimeChosen", crimeChosenEvent => document.querySelector("#officerSelect").value = 0)