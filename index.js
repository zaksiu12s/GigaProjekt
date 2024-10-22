function updateData() {
    const dayCountContainer = document.querySelector("[data-id='dayContainer']").querySelector("td");
    const hourCountContainer = document.querySelector("[data-id='hourContainer']").querySelector("td");
    const minuteCountContainer = document.querySelector("[data-id='minuteContainer']").querySelector("td");
    const secondCountContainer = document.querySelector("[data-id='secondContainer']").querySelector("td");
    
    const currentDate = new Date();
    const incidentDate = currentDate.getTime();
    const diff = incidentDate - 1728843904000;

    console.log(diff);

    dayCountContainer.innerText = (Math.round(diff / 1000 / 60 / 60 / 24 * 100) / 100).toFixed(2);
    hourCountContainer.innerText = (Math.round(diff / 1000 / 60 / 60 * 100) / 100).toFixed(2);
    minuteCountContainer.innerText = (Math.round((diff / 1000 / 60) * 100) / 100).toFixed(2);
    secondCountContainer.innerText = (Math.round((diff / 1000) * 1000) / 1000).toFixed(3);
    return setInterval(updateData, 1000);
}

updateData();
