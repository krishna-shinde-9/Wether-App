let input =  document.querySelector('#cityInput')
let btn = document.querySelector('#searchBtn')
let cityname =  document.querySelector('#cityName')
let t =  document.querySelector('#temperature')
let c = document.querySelector('#condition')
let h = document.querySelector('#humidity')
let icon = document.querySelector('.weather-icon')
let apiKey =  "817d5f9a4c224c0bbbf132814251805"

btn.addEventListener('click',(e)=>{
    let  city =  input.value
    let url =`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`

if(city===""){

    alert("Enter the City name ")

}

cityname.textContent = city.toUpperCase()

fetch(url)
.then((res)=> 
    {return res.json()})
.then((data)=>{

icon.src = "https:"+data.current.condition.icon
t.textContent =  `Temperature: ${data.current.temp_c} °C `
t.textContent = `Condition : ${data.current.condition.text}`
t.textContent = `Humidity: ${data.current.humidity } %`
console.log(data)
})



e.stopPropagation()

})

