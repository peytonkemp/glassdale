  export const Criminal = (criminal) => {
    return `
        <div class="Criminal">
            <p class="name">${criminal.name}</p>
            <p class="age">Age: ${criminal.age}</p>
            <p class="crime">Crime: ${criminal.conviction}</p>
            <p class="start">Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
            <p class="end">Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
        </div>
    `
  } 
  // <p>${criminal.id}</p>