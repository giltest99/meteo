function getMeteo(){
    let city = document.querySelector('#city').value;
    let meteoZone = document.querySelector('#meteoZone')
    console.log(city)
    let url = 'https://api.openweathermap.org/data/2.5/weather?q='+ city +'&APPID=7e63adf81d37f4a9c41a5a85b4ab7304&units=metric&lang=fr';
  
    fetch(url)
        .then(res => res.json())
    .then(data => {
        if(data.cod === '400' || data.cod === '401' || data.cod === '404'){
            console.log('Error : ' + data.cod)
            meteoZone.innerHTML = 'Données non disponibles...'
        } 
        else {
            console.log(data)
            console.log(data.name)
            console.log(data.weather[0].description)      	
            console.log('Température : ' + data.main.temp.toFixed() + '°')
            console.log('Température ressentie : ' + data.main.feels_like.toFixed() + '°')
            console.log('Lat : ' + data.coord.lat)
            console.log('Lon : ' + data.coord.lon)
            console.log('icon : ' + data.weather[0].icon)
            console.log('Vent : ' + data.wind.speed + ' m/s soit ' + (data.wind.speed * 3600 / 1000).toFixed() + ' km/h')
    
    
            
                meteoZone.innerHTML = `
    
            <h2>${data.name.toUpperCase()}</<h2>
            <h1>${data.main.temp.toFixed()}°</h1>
            <!--<h1>${data.main.temp.toFixed()}° / ${data.main.feels_like.toFixed()}°</h1> -->
            <h4>${data.weather[0].description.toUpperCase()}</h4>
            <h4>${(data.wind.speed * 3600 / 1000).toFixed()} km/h</h4>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="${data.weather[0].description}">
            
            `;
        }
    })
    raz()   
}

function defaultLoading(){
    let city = 'canejan';
    let meteoZone = document.querySelector('#meteoZone')
    console.log(city)
    let url = 'https://api.openweathermap.org/data/2.5/weather?q='+ city +'&APPID=7e63adf81d37f4a9c41a5a85b4ab7304&units=metric&lang=fr';
  
    fetch(url)
        .then(res => res.json())
    .then(data => {
        if(data.cod === '400' || data.cod === '401' || data.cod === '404'){
            console.log('Error : ' + data.cod)
            meteoZone.innerHTML = 'Données non disponibles...'
        } 
        else {
            console.log(data)
            console.log(data.name)
            console.log(data.weather[0].description)      	
            console.log('Température : ' + data.main.temp.toFixed() + '°')
            console.log('Température ressentie : ' + data.main.feels_like.toFixed() + '°')
            console.log('Lat : ' + data.coord.lat)
            console.log('Lon : ' + data.coord.lon)
            console.log('icon : ' + data.weather[0].icon)
            console.log('Vent : ' + data.wind.speed + ' m/s soit ' + (data.wind.speed * 3600 / 1000).toFixed() + ' km/h')
    
    
            
                meteoZone.innerHTML = `
    
            <h2>${data.name.toUpperCase()}</<h2>
            <h1>${data.main.temp.toFixed()}°</h1>
            <!--<h1>${data.main.temp.toFixed()}° / ${data.main.feels_like.toFixed()}°</h1> -->
            <h4>${data.weather[0].description.toUpperCase()}</h4>
            <h4>${(data.wind.speed * 3600 / 1000).toFixed()} km/h</h4>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png">
            
            `;
        }
    })
    raz()
}

function raz(){
    document.querySelector('#city').value = '';
    document.querySelector('#city').focus();
}