//keyAPI= dabc6765d886817541a5cc898b76483b 
//key= eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYWJjNjc2NWQ4ODY4MTc1NDFhNWNjODk4Yjc2NDgzYiIsInN1YiI6IjVmZmI2OTliMjBhZjc3MDAzZDFiYzc2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4xWxlONQDvHKf0Ql3BWD8orLZxpE2VuR1xzyMkIRAyM



// fetch("https://api.themoviedb.org/3/search/movie?api_key=dabc6765d886817541a5cc898b76483b&language=en-US&query=love&page=1&include_adult=false")

// // fetch("https://api.themoviedb.org/3/search/movie?api_key=dabc6765d886817541a5cc898b76483b&language=en-US&query=love&page=2&include_adult=false")

// // fetch("https://api.themoviedb.org/3/search/movie?api_key=dabc6765d886817541a5cc898b76483b&language=en-US&query=love&page=3&include_adult=false")
// .then(function (response) {
//     return response.json();
    
// })
// .then(function (myJson) {
//     console.log(JSON.stringify(myJson));
    
// })


// (function() {
// 	window.tmdb = {
// 		"api_key": "dabc6765d886817541a5cc898b76483b",
// 		"base_uri": "http://api.themoviedb.org/3",
// 		"images_uri": "http://image.tmdb.org/t/p",
// 		"timeout": 5000,
// 		call: function(url, params, success, error){
// 			var params_str ="api_key="+tmdb.api_key;
// 			for (var key in params) {
// 				if (params.hasOwnProperty(key)) {
// 					params_str+="&"+key+"="+encodeURIComponent(params[key]);
// 				}
// 			}
// 			var xhr = new XMLHttpRequest();
// 			xhr.timeout = tmdb.timeout;
// 			xhr.ontimeout = function () {
// 				throw("Request timed out: " + url +" "+ params_str);
// 			};
// 			xhr.open("GET", tmdb.base_uri + url + "?" + params_str, true);
// 			xhr.setRequestHeader('Accept', 'application/json');
// 			xhr.responseType = "text";
// 			xhr.onreadystatechange = function () {
// 				if (this.readyState === 4) {
// 					if (this.status === 200){
// 						if (typeof success == "function") {
// 							success(JSON.parse(this.response));	
// 						}else{
// 							throw('No success callback, but the request gave results')
// 						}
// 					}else{
// 						if (typeof error == "function") {
// 							error(JSON.parse(this.response));
// 						}else{
// 							throw('No error callback')
// 						}
// 					}
// 				}
// 			};
// 			xhr.send();
// 		}
// 	}
// })()

// let url = "/search";
// let params = {
//     "query": "love",
//     include_adult: false
    
//   }
// let success;
// let error = ""; 
// let result = tmdb.call(url, params, success, error);
// console.log(result);