/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
import { useConvictions, getConvictions } from "./ConvictionProvider.js"

const contentTarget = document.querySelector(".filters__crime")

// On the event hub, listen for a "change" event.
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

