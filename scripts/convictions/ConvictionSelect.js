import { useConvictions, getConvictions } from "./ConvictionProvider.js"
/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", changeEvent => {
    // Only do this if the `crimeSelect` element was changed
    if (changeEvent.target.id === "crimeSelect") {
        // debugger
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: changeEvent.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})


export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}


const render = convictionsCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="crimeSelect">
    <option value="0">Please select a crime...</option>
    ${convictionsCollection.map(conviction => `<option value="${conviction.id}">${conviction.name}</option>`).join("")
}
</select>
`
}

eventHub.addEventListener("officerSelected", crimeChosenEvent => document.querySelector("#crimeSelect").value = 0)