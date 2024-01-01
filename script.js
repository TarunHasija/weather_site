function weather() {
	let cityy = document.getElementById('city');
	let temprature = document.getElementById('temp');
	let description = document.getElementById('desc')
	let search = document.getElementById('search').value;

	const url="https://api.openweathermap.org/data/2.5/weather?q="+search+",india,usa,uk&APPID=2dc37dc7aaa0e20b43b30a07bfb7fb4d"

	fetch(url).then((xyz)=>{
		return xyz.json();

	})
	.then((result)=>{
			cityy.innerHTML=result.name;
			temprature.innerHTML ="Temprature: "+Math.floor(result.main.temp-272.15)+"°C";
			description.innerHTML="Description: "+result.weather[0].description;
	})
	.catch((err)=>{
		cityy.innerHTML ="<span class='error'>Enter a valid City Name</span>";
	})
}