import "./AssociatesList.js";

export const ShowAssociatesButton = (criminalObj) => {
    return ` <button id="associates--${criminalObj.id}">Associate Alibis</button>`
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("associates--")) {
        const [prefix, criminalId] = event.target.id.split("--")
        const customEvent = new CustomEvent("AssociatesClicked", {
            detail: {
                criminalId: parseInt(criminalId)
            }
        })
        eventHub.dispatchEvent(customEvent)
    }

})