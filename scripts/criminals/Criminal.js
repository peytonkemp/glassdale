  import { ShowAssociatesButton } from "../associates/ShowAssociatesButton.js"
  
  export const Criminal = (criminal, facilitiesArray) => {
    return `
        <div class="criminal">
            <h3${criminal.name}</h3>
            <p class="age">Age: ${criminal.age}</p>
            <p class="crime">Crime: ${criminal.conviction}</p>
            <p class="start">Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
            <p class="end">Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
            <div>
                <h4>Facilities</h4>
                <ul>
                    ${facilitiesArray.map(f => `<li>${f.facilitiesArray}</li>`).join("")}
                </ul>
            </div>
            ${ShowAssociatesButton(criminal)}
        </div>
    `
  } 
  // <p>${criminal.id}</p>