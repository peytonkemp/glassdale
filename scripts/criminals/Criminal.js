  import { ShowAssociatesButton } from "../associates/ShowAssociatesButton.js"
  
  export const Criminal = (criminal) => {
    return `
        <div class="criminal">
            <h4${criminal.name}</h4>
            <p class="age">Age: ${criminal.age}</p>
            <p class="crime">Crime: ${criminal.conviction}</p>
            <p class="start">Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
            <p class="end">Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
            ${ShowAssociatesButton(criminal)}
        </div>
    `
  } 
  // <p>${criminal.id}</p>