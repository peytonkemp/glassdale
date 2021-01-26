import { getOfficers, useOfficers } from "./OfficerProvider.js"
import { Officer } from "./Officer.js"

const officersContatiner = document.querySelector(".officersContainer")

export const OfficerList = () => {
    getOfficers()
    .then(() => {
        const officerArray = useOfficers()

        let officersHTMLRepresentations = ""

        for (const officer of officerArray) {
            officersHTMLRepresentations += Officer(officer)
        }

        officersContatiner.innerHTML = `
        <h3>Glassdale Officers</h3>
        <section class="officersList">
        ${officersHTMLRepresentations}
        </section>`
    } )
}