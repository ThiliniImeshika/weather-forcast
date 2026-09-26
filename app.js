// console.log("hii");
const apiKey = "00ff774056ad4f8197655512262609"

const baseUrl = "http://api.weatherapi.com/v1";

fetch(`${baseUrl}/current.json?key=${apiKey}&q=panadura`).then(res => res.json()).then(data => {
    console.log(data);

    document.getElementById("contentsection").innerHTML=`

    <div>
        <h1>${data.current.condition.text}</h1>
        <h1>${data.location.name}</h1>
        <img src="${data.current.condition.icon}" alt>
        <p>${data.location.country}</p>
        <p>${data.current.temp_c}</p>


    </div>
    `
}
)

function btnSearchOnAction(){

    let txtUserSearchValue = document.getElementById("txtSearch").value;
    fetch(`${baseUrl}/current.json?key=${apiKey}&q=${txtUserSearchValue}`).then(res => res.json()).then(data => {
    console.log(data);

    document.getElementById("contentsection").innerHTML=`

    <div>
        <h1>${data.current.condition.text}</h1>
        <h1>${data.location.name}</h1>
        <img src="${data.current.condition.icon}" alt>
        <p>${data.location.country}</p>
        <p>${data.current.temp_c}</p>


    </div>
    `
}
)
}

navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
});

// console.log();


