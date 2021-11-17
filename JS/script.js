

/*TRENDING*/


function findTrack(track_id) {
var req = new XMLHttpRequest();
//req.open("GET", "https://api.deezer.com/track/"+track_id, true);
req.open("GET", "https://api.deezer.com/album/"+track_id, true);
  req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  
  req.onreadystatechange = function() {

    if (req.readyState == 4 && req.status == 200) {
      	var r = JSON.parse(req.responseText);

      	 sendTRY(r, TRY) ;
      	 TRY = 1 + TRY ;
       	
    }
   
};
  req.send();
}


function loading(playList){

var def =1363560485 ;
var requestPlaylist = new XMLHttpRequest() ;
requestPlaylist.open('GET', 'https://api.deezer.com/playlist/'+playList) ;
requestPlaylist.setRequestHeader("Content-type","application/x-www-form-urlencoded");
requestPlaylist.onreadystatechange = function(){
	if (requestPlaylist.readyState == 4 && requestPlaylist.status == 200) {
      	var playDataJson = JSON.parse(requestPlaylist.responseText);
      	//callback(json);
      	console.log(playDataJson.tracks) ;
      	populateFirstPage(playDataJson.tracks) ;

    }

};

requestPlaylist.send() ;

}





function populateFirstPage(PL){
		TRY = 0 ;
    	console.log("here1") ;
    		var albums = [] ;
	   		for(k=0; k<10;k++){
	   			//track_id = PL.data[k].id;
				//findTrack(track_id) ;
				track_id = PL.data[k].album.id;
				findTrack(track_id) ;
	   		}
	   }
	    	
function populateSearch(PL){
	TRY = 0 ;
    	console.log("here1") ;
    		var albums = [] ;
	   		for(k=0; k<20;k++){
	   			//track_id = PL.data[k].id;
				//findTrack(track_id) ;
				track_id = PL.data[k].album.id;
				findTrack(track_id) ;
	   		}
	
}	

	
	
 

function sendTRY(theTrack, index){
	var SB = "#songbox"+ index ;
	console.log("logging track"); 
	console.log(theTrack) ;
	document.querySelector(SB+" .title").innerHTML = theTrack.title;
	document.querySelector(SB+" .relDate").innerHTML = theTrack.release_date;
	document.querySelector(SB+" .recLabel").innerHTML = theTrack.label;
	document.querySelector(SB+" .cover").src = theTrack.cover_xl;
	document.querySelector(SB+" .artist").innerHTML = theTrack.artist.name;
	document.querySelector(SB+" .rating").innerHTML = theTrack.rating ;
	if(theTrack.genres.data[0] != null){
		document.querySelector(SB+" .genre").innerHTML =theTrack.genres.data[0].name;
	}
	else{
		document.querySelector(SB+" .genre").innerHTML ="Alternative" ;
	}
	
	document.querySelector(SB+" .album").innerHTML = theTrack.title ;
	/*document.querySelector(SB+" .title").innerHTML = theTrack.title;
	document.querySelector(SB+" .relDate").innerHTML = theTrack.release_date;
	document.querySelector(SB+" .artist").innerHTML = theTrack.artist.name;
	document.querySelector(SB+" .cover").src = theTrack.album.cover_medium;
	document.querySelector(SB+" .recLabel").innerHTML = theTrack.album.label;*/
	//document.querySelector(SB+" .cover").innerHTML = theTrack.cover_xl;
	//document.querySelector(SB+" .genre").innerHTML = theTrack.genres.data[0].name;
	//document.querySelector(SB+" .artist").innerHTML = theTrack.artist.name;

body.style.position = "static";
load.style.display="none";
block1.style.visibility="visible";

//document.getElementsByClassName("titleFilt").addEventListener("click", oldTitles);	
//document.getElementById("moodFilter").addEventListener("click", showMoods); 
//document.getElementById("ReleaseD").addEventListener("click", showRelease);   
}



function populateSongs(count)
			{

			
			console.log("entered");
			var i;	
			for(i = 0; i < count; i++)	
			{

				//var songContainer = document.getElementById("hideWhileLoad");
		
				var songContainer = document.getElementById("trendingData");
				//figure
				var fig  = document.createElement("DIV");
				fig.setAttribute("class", "songbox");
				fig.setAttribute("id", "songbox"+i);
				songContainer.appendChild(fig);
				//figure

				var figur = document.createElement("FIGURE");
				fig.appendChild(figur) ;
				

				fig.innerHTML = '<img class="cover" src="images/july.jpg" alt="Trulli" ><div class="figc"><b>Title:</b><span class="title"></span></div><div class="figc"><b>Artist:</b><span class="artist"></span></div><div class="figc"><b>Album:</b><span class="album"></span></div><div class="figc"><b>Genre:</b><span class="genre"></span></div><div class="figc"><b>Release date:</b><span class="relDate"></span></div><div class="figc"><b>Record label:</b><span class="recLabel"></span></div><div class="figc"><b>Rating:</b><span class="rating"></span></div>';

				
				
				}
if(searched==false){
	loading(1363560485) ;
}

}





function searchSongs(parameter)
{
console.log("entered") ;	
    var data = null;
    var url = "https://api.deezer.com/search/track?q=";
    url += parameter;

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
    	if (this.readyState === this.DONE) {
    	   
    	    var search = JSON.parse(this.responseText);
    	    var img = "";
    	    console.log(search) ;
    	    populateSearch(search);
    		}
    });

    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send();

		
}



//
//document.getElementById("RatingD").addEventListener("click", showRating);

function showGenres(){
   // .style.transform = "rotate(7deg)";
    
    var main = document.querySelector("#mainFilt") ;
    var genres = document.querySelector("#genres") ;
    
     main.style.display ='none';
     genres.style.display ='flex' ;
     
     document.querySelector("#genres .One").addEventListener("click", function(){loading(1963962142);}) ;
     document.querySelector("#genres .Two").addEventListener("click", function(){loading(3513080202);}) ;
     document.querySelector("#genres .Three").addEventListener("click", function(){loading(1514808481);}) ;
      document.querySelector("#genres .Four").addEventListener("click", function(){loading(1595684095);}) ;
     //addEventListener.document.querySelector("#genres .One",function(){loading(5551253842) ;}) ;
}

function oldTitles(){
   // .style.transform = "rotate(7deg)";
   console.log("ENTERED IT");
    var main = document.querySelector("#mainFilt") ;
    var genres = document.querySelector("#genres") ;
    var moods = document.querySelector("#moods") ;
    var releases = document.querySelector("#releases") ;

     main.style.display ='flex';
     genres.style.display ='none' ;
     moods.style.display ='none' ;
     releases.style.display ='none' ;
    
}


function showMoods(){
   // .style.transform = "rotate(7deg)";
   var main = document.querySelector("#mainFilt") ;
    var moods = document.querySelector("#moods") ;

     main.style.display ='none';
     moods.style.display ='flex' ;

     document.querySelector("#moods .One").addEventListener("click", function(){loading(1976454162);}) ;
     document.querySelector("#moods .Two").addEventListener("click", function(){loading(6745867884);}) ;
     document.querySelector("#moods .Three").addEventListener("click", function(){loading(5409641982);}) ;
      document.querySelector("#moods .Four").addEventListener("click", function(){loading(1911334042);}) ;
   
}

function showRelease(){
   // .style.transform = "rotate(7deg)";
  var main = document.querySelector("#mainFilt") ;
    var releases = document.querySelector("#releases") ;

     main.style.display ='none';
     releases.style.display ='flex' ;
     
     document.querySelector("#releases .One").addEventListener("click", function(){loading(5218910964);}) ;
     document.querySelector("#releases .Two").addEventListener("click", function(){loading(5339620562);}) ;
     document.querySelector("#releases .Three").addEventListener("click", function(){loading(1283499335);}) ;
      document.querySelector("#releases .Four").addEventListener("click", function(){loading(7061318604);}) ;
}


/*TOP RATED*/


      function populatetopRatedFrames()
      {
      console.log("TOPRATED") ;
      for(i = 0; i < 10; i++) 
      {

        //var songContainer = document.getElementById("hideWhileLoad");
    
        var olList = document.getElementById("orderedList");
        var listIt = document.createElement("LI");
		listIt.setAttribute("id", "top"+i);
        olList.appendChild(listIt) ;
        
        listIt.innerHTML = '<img class="topImg" src="images/feelMe.jpg" alt="Trulli" ><div class="extraInfTop"><div><b class="topName">This is us</b><span class="topArt"> - Noah Cyrus, Jimmie Allen</span></div><div><span class="topGenre">Alternative/Indie</span> | <span class="recordL">Records Columbia</span></div></div>';
        

      } 
      populatetopRatedSongs() ;
  }

var playListData 
 var myObjectTopTracks ;

//working
 /* function populatetopRatedSongs(){
 

  	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     playListData = JSON.parse(this.responseText);
     console.log(playListData) ;
    // myObjectTopTracks = playListData ;
     populatetopRatedSongsStep2(playListData) ;
     
    }
  };
  xhttp.open("GET", "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=88b5282a2e8ba9aaa1f0116644da3049&format=json", true);

  xhttp.send();
}*/


//working
/*function populatetopRatedSongsStep2(plData){
	var names = [];
	

	for(i=0; i<10 ;i++){
		var SB = "#top"+ i ;
		//names[i] = plData.tracks.track[i].name ;
		//console.log(plData.tracks.track[i].name) ;
	document.querySelector(SB+" .topName").innerHTML = plData.tracks.track[i].name ;
	document.querySelector(SB+" .topArt").innerHTML = " -" + plData.tracks.track[i].artist.name  ;
	document.querySelector(SB+" .topImg").src = plData.tracks.track[i].image[2]['#text'] ;
	}

}*/


