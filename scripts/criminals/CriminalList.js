import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"

const criminalsContatiner = document.querySelector(".criminalsContainer")

export const CriminalList = () => {
    getCriminals()
    .then(() => {
        const criminalArray = useCriminals()

        let criminalsHTMLRepresentations = ""

        for (const criminalObj of criminalArray) {
            criminalsHTMLRepresentations += Criminal(criminalObj)
        }

        criminalsContatiner.innerHTML = `
        <h3>Glassdale Criminals</h3>
        <section class="criminalsList">
        ${criminalsHTMLRepresentations}
        </section>`
    })
}