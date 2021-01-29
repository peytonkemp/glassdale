import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"
import { useConvictions } from "./../convictions/ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const criminalsContainer = document.querySelector(".criminalsContainer")

const renderToDom = (criminalCollection) => {
    let criminalsHTMLRepresentations = ""
    for (const criminal of criminalCollection) {
        criminalsHTMLRepresentations += Criminal(criminal)
    }

    criminalsContainer.innerHTML = `
    <h3>Criminals</h3>
    <section class="criminalsList">
    ${criminalsHTMLRepresentations}
    </section>`
}


export const CriminalList = () => {
    getCriminals()
    .then(() => {
        const criminalsArray = useCriminals()
        renderToDom(criminalsArray)

    })
}

// Listen for the "crimeChosen" custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", crimeChosenEvent => {
    if (crimeChosenEvent.detail.crimeThatWasChosen !== "0") {
      // debugger
      /* 
        We have the the id of the conviction that the user selected from the drop down (crimeChosenEvent.target.crimeThatWasChosen). But each criminal object has the name of the crime they were convicted for. So we need to get the name of the conviction associated with the unique identifier. To get the name, we get the conviction object which has the property for name. 
      */
  
      // Get a copy of the array of convictions from the data provider
      const convictionsArray = useConvictions()
  
      // Use the find method to get the first object in the convictions array that has the same id as the id of the chosen crime
      const chosenConvictionObject = convictionsArray.find(convictionObj => {
        // console.log("currently checking", convictionObj)
        return convictionObj.id === parseInt(crimeChosenEvent.detail.crimeThatWasChosen)
      })
      // debugger
      console.log(chosenConvictionObject.name)
  
      /*
          Filter the criminals application state down to the people that committed the crime
      */
  
      // Get a copy of the array of criminals from the data provider
      const criminalsArray = useCriminals()
  
      /*
        Now that we have the name of the chosen crime, filter the criminals data down to the people that committed the crime
      */
    //  debugger
      const filteredCriminalsArray = criminalsArray.filter(criminalObj => criminalObj.conviction === chosenConvictionObject.name)
  
  
      /*
          Then invoke render() and pass the filtered collection as
          an argument
      */
      renderToDom(filteredCriminalsArray)
    }
  })

  eventHub.addEventListener("officerSelected", event => {
      // console.log(event)
    
    //how can you access the officer name that was selected by the user?
      const officerName = event.detail.officer;

      //how can you get the criminals that were arrested by that officer?
      const criminals = useCriminals()
      const filteredCriminalsArray = criminals.filter(criminalObj => {
          if (criminalObj.arrestingOfficer === officerName) {
              return true;
          }
      })
      //render filtered criminals to DOM
      renderToDom(filteredCriminalsArray)
  })