//.........cost for api key........//

const apiKey =   '70f75687c801bbbd2c8d10d28c75277b';//Replace your api key

async function getWeather()
{
     const city = document.getElementById('cityInput').value;
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


     try{
        //-------Await and fetch------//
       const response = await fetch(url);
       if(!response.ok){
        //......Throw in async/await context.....//
        throw new error(`HTTP error! Status: ${response.status}`);

       }
       //.........Destructuring Json response........//
       const data = await response.json();
       displayWeather(data);
        
     }catch(error)
     {
        console.error(`Failed to fetch weather data:`, error);
        alert(`Failed to fetch weather data.`)
     }

      function displayWeather(data)
      {
           //........Destructuring for Easier Acess to Nested Data......//

           const { main:{temp, humidity} , weather, wind: {speed},sys:{country},name} = data;
           const  [{main: weatherMain,description, icon}] = weather;//Nested destructuring

           //.....const for DOM Manipulation

           const weatherDisplay = document.getElementById('weatherDisplay');
           if(data.cod !== 200){
            weatherDisplay.innerHTML = `<p>Error: ${data.message}</p>`;
            return;
           }

           //Template Literals for HTML Generation//
           const weatherHTML = `
           <h2> ${name},${country}</h2>
           <p> Tempreture : ${temp} °C</p>
           <p> Weather : ${weatherMain} (${description})</p>
           <p>Humidity : ${humidity} °C</p>
           <p> Wind : ${speed}</p>
           <img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`;
           weatherDisplay.innerHTML=weatherHTML;


           // Your existing code to fetch and display the weather would go here
     
         // Make the weather display fully visible
         document.getElementById("weatherDisplay").style.filter = "opacity(100%)";
          

      }

     

     
}



