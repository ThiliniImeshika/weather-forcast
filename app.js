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

//call back hell method

setTimeout(() => {
    console.log("nagitinawa");
    setTimeout(() => {
        console.log("muna sodanawa");
        setTimeout(() => {
            console.log("badu list eka hadanawa");
            setTimeout(() => {
                console.log("ADUM ADINAWA");
                setTimeout(() => {
                    console.log("KADETA YANAWA");
                    setTimeout(() => {
                        console.log("YALUWAT EKKA KATA KARANAWA ");
                        setTimeout(() => {
                            console.log("KADETA AWA");
                            setTimeout(() => {
                                console.log("polime innewa");
                                setTimeout(() => {
                                    console.log("bill karanawa");
                                    setTimeout(() => {
                                        console.log("gedr enawa");
                                        setTimeout(() => {
                                            console.log("ammata badu tika denawa");
                                            setTimeout(() => {
                                                console.log("end.....");
                                            }, 2000);
                                        }, 5000);
                                    }, 10000);
                                }, 5000);
                            }, 9000);
                        }, 5000);
                    }, 6000);
                }, 50000);
            }, 7500);
        }, 8000);
    }, 10000);
}, 5000);
// console.log();


