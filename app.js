// console.log("hii");
const apiKey ="00ff774056ad4f8197655512262609"

const baseUrl= "http://api.weatherapi.com/v1";

fetch(`${baseUrl}/current.json?key=${apiKey}&q=panadura`).then(res=>res.json()).then(data=>
{
    console.log(data);
}
)