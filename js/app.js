// JS for Caden Kraft's Startpagelog

// Stock Ticker API ###############################

var resultCache = {};
async function stockTicker(stock){
	try{
		var stocks = new Stocks(stock_API_keys[Math.floor(Math.random()*stock_API_keys.length)]);
		var options = {
				symbol: stock,
				interval: '60min',
				amount: '2'
			};
		result = await stocks.timeSeries(options);
		var delta = result[0].close-result[1].close;
		if (debug_mode==true) {console.log("Using latest result for " + stock)};
	} catch {
		var stored = localStorage['resultCache'];
		if (stored) resultObj = JSON.parse(stored);
		if (debug_mode==true) {console.log("Using cached result for " + stock)};
		result = resultObj[stock];
		var delta = result[0].close-result[1].close;
	}
	
	var delta = result[0].close-result[1].close;
	var perc = ((result[0].close/result[1].close)*100)-100;
	var price = result[0].close;
	price = price.toFixed(2);
	delta = delta.toFixed(2);
	perc = perc.toFixed(2);
	var update = result[0].date
	if (debug_mode==true) {console.log(result)};
	if (Math.abs(delta) != delta) {
		var output = ["$" + stock +": " + price + "\xa0",delta + " (▼" + Math.abs(perc) + "%)"];
	} else {
		var output = ["$" + stock +": " + price + "\xa0","+" + delta + " (▲" + perc + "%)"];
	}
	output[2] = update;
	$(document).ready(function() {
			jQuery("<div/>", {
				class: "ticker__item "+stock,
				style: "position: relative;"
			}).appendTo(".ticker-scroll");
			// jQuery("<div/>", {
			// 	class: "ticker__item "+stock,
			// 	style: "position: relative;"
			// }).appendTo(".mirror");
			jQuery("<div/>", {
				text: output[0],
				style: "position: relative; float: left;"
			}).appendTo("."+stock);
			if(output[1].indexOf("▼")>0){
				jQuery("<div/>", {
					text: output[1],
					style: "float: right; color: #BF616A;"
				}).appendTo("."+stock);
			} else {
				jQuery("<div/>", {
					text: output[1],
					style: "float: right; color: #A3BE8C;"
				}).appendTo("."+stock);
			}
		});
	resultCache[stock] = result;
	return output;
}

for (var i = 0; i<stocks.length; i++) {
	var stnum = 1;
	var output = Promise.resolve(stockTicker(stocks[i]));
		output.then(function(v) {
			
			date = String(v[2]);
			subDate = date.split(" ");
			updated = "Last Updated: " + subDate[0] + " " + subDate[1] + " " + subDate[2] + " " + subDate[3] + " at " + subDate[4] + " CST";
			if(updated.indexOf("undefined")>0){
				document.getElementsByClassName("update")[0].innerHTML = "using cached data";
			} else{
				document.getElementsByClassName("update")[0].innerHTML = updated;
			}
			
			if(stnum==stocks.length){
				localStorage['resultCache'] = JSON.stringify(resultCache);
			}
			stnum++;
		})
	
}

// Search #########################################

function search(e) {
    if (e.keyCode == 13) {
        var val = document.getElementById("search-field").value;
        window.open("https://google.com/search?q=" + val);
    }
}
document.addEventListener("keydown", event => {
    if (event.keyCode == 32) {          // Spacebar code to open search
        document.getElementById('search').style.display = 'flex';
        var divsToHide = document.getElementsByClassName("container"); //divsToHide is an array
            for(var i = 0; i < divsToHide.length; i++){
                divsToHide[i].style.visibility = "hidden"; // or
        }
        var stockHide = document.getElementsByClassName("ticker__item"); //divsToHide is an array
            for(var i = 0; i < stockHide.length; i++){
                stockHide[i].style.visibility = "hidden"; // or
        }
        
        document.getElementById('search-field').focus();
    } else if (event.keyCode == 27) {   // Esc to close search
        document.getElementById('search-field').value = '';
        document.getElementById('search-field').blur();
        document.getElementById('search').style.display = 'none';
        var divsToHide = document.getElementsByClassName("container"); //divsToHide is an array	
            for(var i = 0; i < divsToHide.length; i++){
                divsToHide[i].style.visibility = "visible"; // or
        }
        var stockHide = document.getElementsByClassName("ticker__item"); //divsToHide is an array
            for(var i = 0; i < stockHide.length; i++){
                stockHide[i].style.visibility = "visible"; // or
        }
    }
});

// Clock ##########################################

function getTime() {
    let date = new Date(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        hour = date.getHours();

    return "" + 
        (hour < 10 ? ("0" + hour) : hour) + ":" + 
        (min < 10 ? ("0" + min) : min) + ":" + 
        (sec < 10 ? ("0" + sec) : sec);
}
	document.getElementById("clock").innerHTML = getTime();
    // Set clock interval to tick clock
    setInterval( () => {
        document.getElementById("clock").innerHTML = getTime();
	},100);


// Weather API ####################################

	document.getElementById("weather").innerHTML = localStorage['weather'];
	let xhr = new XMLHttpRequest();
	// Request to open weather map
	navigator.geolocation.getCurrentPosition((position) => {
		var cacheLat = localStorage['lat'];
		var cacheLong = localStorage['long'];
		xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat='+cacheLat+'&lon='+cacheLong+'&units=imperial&appid='+weather_API_key);
		xhr.onload = () => {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					let json = JSON.parse(xhr.responseText);
					if (debug_mode==true) {console.log(json)};
					let location = json.name; 
					if(location.indexOf(' ')>-1){
						let locationArr = location.split(" ");
						if (debug_mode==true) {console.log(locationArr)};
						location = locationArr[0]+" "+locationArr[1];
					}
					document.getElementById("weather").innerHTML = json.weather[0].description + ", ";
					document.getElementById("weather").innerHTML += json.main.temp.toFixed(0) + "°F in " + location;
					localStorage['weather'] = document.getElementById("weather").innerHTML;
					document.getElementById("weather").setAttribute("href", "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat="+cacheLat+"&lon="+cacheLong+"&zoom=12");
				} else {
					console.log('weather error msg: ' + xhr.status);
				}
			}
		}
		let lat = position.coords.latitude.toFixed(2);
		let long = position.coords.longitude.toFixed(2);
		localStorage['lat'] = lat.toString();
		localStorage['long'] = long.toString();
		xhr.send();
	});
	
// Color Palette ##################################

	//set color
	if (typeof localStorage.palette == 'undefined'){
		localStorage.setItem('palette', 'rainbow');
	}

	document.querySelector('body').dataset.palette = localStorage.getItem('palette');
	var palette_spans = document.querySelectorAll('.palette span');
	for (let j=0; j<palette_spans.length; j++){
		if (palette_spans[j].parentElement.dataset.color == localStorage.getItem('palette')){
			palette_spans[j].parentElement.classList.add('selected');
		}
	}


	//palette
	document.querySelector('.palette').addEventListener('mouseenter', function(){
		document.querySelector('.palette-content').style.opacity = '1';
	})
	document.querySelector('.palette').addEventListener('mouseleave', function(){
		document.querySelector('.palette-content').style.opacity = '0';
	})

	for (let i=0; i<palette_spans.length; i++){
		palette_spans[i].addEventListener('click', function(){
			for (let j=0; j<palette_spans.length; j++){
				palette_spans[j].parentElement.classList.remove('selected');
			}
			palette_spans[i].parentElement.classList.add('selected');
			document.querySelector('body').dataset.palette = palette_spans[i].parentElement.dataset.color;
			localStorage.setItem('palette', palette_spans[i].parentElement.dataset.color);
		})
	}

	//random color
	var temp_random = Math.floor((Math.random() * 360) + 1);
	document.documentElement.style.setProperty('--random-color', 'hsl(' + temp_random + 'deg 41% 46%)');
	document.querySelector('.palette div[data-color="random"').addEventListener('click', function(){
		var temp_random = Math.floor((Math.random() * 360) + 1);
		document.documentElement.style.setProperty('--random-color', 'hsl(' + temp_random + 'deg 41% 46%)');
	})


// Link Manipulation ##################################
window.onload = () => {
	var tabs = document.querySelectorAll('.tab:not(.space):not(.extra)');
		for (let i=0; i<tabs.length; i++){
			for (let j=0; j<links_var[i].length; j++){
				var k = 0;
				var a_element = document.createElement('a');
				a_element.setAttribute('data-id', 'i' + i + '_j' + j);
				a_element.setAttribute('class', 'linksel');
				a_element.innerHTML = links_var[i][j][0];
				pingStatus = links_var[i][j][2];
				if(pingStatus.indexOf('true')>-1){
					ping(links_var[i][j][1]).then(function(delta) {
						if (debug_mode==true) {console.log(links_var[i][j][1]+ ' Ping time was ' + String(delta) + ' ms')};
						var b_element = document.createElement('span');
						b_element.setAttribute('ping-id', 'i' + i + '_j' + j);
						b_element.setAttribute('class', 'linksel');
						b_element.setAttribute('class', 'linksel tab'+(i+1));
						b_element.style.position="relative";
						b_element.style.marginLeft="auto";
						b_element.style.float="right";
						b_element.style.justifyContent="right";
						b_element.style.color="#A3BE8C";
						b_element.innerHTML = "Online ("+String(delta)+"ms) ⬤";
						document.querySelector('a[data-id="i' + i + '_j' + j + '"]').insertAdjacentElement('beforeend', b_element)
						

					}).catch(function(err) {
						var b_element = document.createElement('span');
						b_element.setAttribute('ping-id', 'i' + i + '_j' + j);
						b_element.setAttribute('class', 'linksel tab'+(i+1));
						b_element.style.position="relative";
						b_element.style.marginLeft="auto";
						b_element.style.float="right";
						b_element.style.justifyContent="right";
						b_element.style.color="#BF616A";
						b_element.innerHTML = "Offline ⬤";
						document.querySelector('a[data-id="i' + i + '_j' + j + '"]').insertAdjacentElement('beforeend', b_element)
						console.error(links_var[i][j][1]+ 'Could not ping remote URL', err);
					});
				}
				//a_element = a_element.style.display = 'none';	
				if (typeof links_var[i][j][1] == 'string'){
					a_element.href = links_var[i][j][1];
					a_element.classList.add("tab"+(i+1));
					document.getElementsByClassName("content")[0].appendChild(a_element);
					a_element = a_element.style.display = 'none';	
				}
				else {
					a_element.classList.add("tab"+(i+1));
					document.getElementsByClassName("content")[0].appendChild(a_element);
					a_element = a_element.style.display = 'none';
					for (let k=0; k<links_var[i][j][1].length; k++){
						document.querySelector('a[data-id="i' + i + '_j' + j + '"]').setAttribute('data-link_' + k, links_var[i][j][1][k][1]);
					}
					document.querySelector('a[data-id="i' + i + '_j' + j + '"]').addEventListener('click', function(event){
						for (let k=0; k<links_var[i][j][1].length; k++){
							event.preventDefault();
							window.open(document.querySelector('a[data-id="i' + i + '_j' + j + '"]').getAttribute('data-link_' + k));
						}
					})
				}
			}
		}
	
// Color Changing #################################

	var color = document.querySelectorAll('.color');
	var tabs = document.querySelectorAll('.tab:not(.space):not(.extra)');
	var contents = document.querySelectorAll('.content');
	document.querySelectorAll('.tab1').forEach(element => {
		element.style.display = 'flex';
	});
	for (let i=0; i<tabs.length; i++){
		tabs[i].addEventListener('mouseenter', function(){
			document.querySelectorAll('.linksel').forEach(element => {
				element.style.display = 'none';
			});
			document.querySelectorAll('.tab'+(i+1)).forEach(element => {
				element.style.display = 'flex';
			});
			color.forEach(element => {
				b=i+1;
				if(b>=7 && b<=12){b = b-6};
				if(b>=13 && b<=18){b = b-12};
				element.setAttribute('data-color', b);
			});
			for (let j=0; j<tabs.length; j++){
				tabs[j].classList.remove('active');
			}
			tabs[i].classList.add('active');
		})
	}

	// // Extra Pages ####################################
	// function show_page(x){
	// 	for (let i=0; i<tabs.length; i++){
	// 		tabs[i].classList.add('notVisible');
	// 		tabs[i].classList.remove('active');
	// 		contents[i].classList.remove('active');
	// 	}
	// 	var pageTabs = document.querySelectorAll('.tab.page' + x);
	// 	for (let i=0; i<pageTabs.length; i++){
	// 		pageTabs[i].classList.remove('notVisible');
	// 	}
	// 	document.querySelector('.tab.page' + x).classList.add('active');
	// 	document.querySelector('.content.page' + x).classList.add('active');
	// 	document.querySelector('body').dataset.page = x;
	// }
}