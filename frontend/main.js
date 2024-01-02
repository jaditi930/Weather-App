async function getWeather(){

    var weather=[]
    var city=document.getElementById("cities").value.split(",")
    console.log(city)

    await fetch("http://127.0.0.1:5000/api/getWeather",{
        method:"POST",
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body:JSON.stringify({
            city:city
        }),
        
    })
    .then((res)=>res.json())
    .then((data)=>weather=data.weather)

    console.log(weather)

    
}