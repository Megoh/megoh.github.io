var rpPerSec = 0;
var bronzeCost = 50;
var silverCost = 100;
var goldCost = 300;
var platinumCost = 1200;
var diamondCost = 6000;
var masterCost = 36000;
var challengerCost = 252000;

function rpClick(){
   incrementByOne();
}

function incrementByOne(){
   document.getElementById("rp-earned").innerHTML = parseInt(document.getElementById('rp-earned').innerHTML) + 1;
}

window.onload = function() {
   setInterval(incrementInterval, 1000);
};

function incrementInterval(){
   document.getElementById('rp-earned').innerHTML = parseInt(document.getElementById('rp-earned').innerHTML) + rpPerSec;
   document.getElementById('rp-persec').innerHTML = rpPerSec;
}

function bronze(){
   if(document.getElementById('rp-earned').innerHTML >= bronzeCost){
      rpPerSec += 1;
      document.getElementById('rp-earned').innerHTML -= bronzeCost;
      document.getElementById('bronzes').innerHTML = parseInt(document.getElementById('bronzes').innerHTML) + 1;
      document.getElementById('bronzeCost').innerHTML = parseInt(document.getElementById('bronzeCost').innerHTML) * 1.25;
      bronzeCost *= 1.25;
   }
}

function silver(){
   if(document.getElementById('rp-earned').innerHTML >= silverCost){
      rpPerSec += 2;
      document.getElementById('rp-earned').innerHTML -= silverCost;
      document.getElementById('silvers').innerHTML = parseInt(document.getElementById('silvers').innerHTML) + 1;
      document.getElementById('silverCost').innerHTML = parseInt(document.getElementById('silverCost').innerHTML) * 1.25;
      silverCost *= 1.25;
   }
}

function gold(){
   if(document.getElementById('rp-earned').innerHTML >= goldCost){
      rpPerSec += 6;
      document.getElementById('rp-earned').innerHTML -= goldCost;
      document.getElementById('golds').innerHTML = parseInt(document.getElementById('golds').innerHTML) + 1;
      document.getElementById('goldCost').innerHTML = parseInt(document.getElementById('goldCost').innerHTML) * 1.25;
      goldCost *= 1.25;
   }
}

function platinum(){
   if(document.getElementById('rp-earned').innerHTML >= platinumCost){
      rpPerSec += 24;
      document.getElementById('rp-earned').innerHTML -= platinumCost;
      document.getElementById('platinums').innerHTML = parseInt(document.getElementById('platinums').innerHTML) + 1;
      document.getElementById('platinumCost').innerHTML = parseInt(document.getElementById('platinumCost').innerHTML) * 1.25;
      platinumCost *= 1.25;
   }
}

function diamond(){
   if(document.getElementById('rp-earned').innerHTML >= diamondCost){
      rpPerSec += 120;
      document.getElementById('rp-earned').innerHTML -= diamondCost;
      document.getElementById('diamonds').innerHTML = parseInt(document.getElementById('diamonds').innerHTML) + 1;
      document.getElementById('diamondCost').innerHTML = parseInt(document.getElementById('diamondCost').innerHTML) * 1.25;
      diamondCost *= 1.25;
   }
}

function master(){
   if(document.getElementById('rp-earned').innerHTML >= masterCost){
      rpPerSec += 720;
      document.getElementById('rp-earned').innerHTML -= masterCost;
      document.getElementById('masters').innerHTML = parseInt(document.getElementById('masters').innerHTML) + 1;
      document.getElementById('masterCost').innerHTML = parseInt(document.getElementById('masterCost').innerHTML) * 1.25;
      masterCost *= 1.25;
   }
}

function challenger(){
   if(document.getElementById('rp-earned').innerHTML >= challengerCost){
      rpPerSec += 5040;
      document.getElementById('rp-earned').innerHTML -= challengerCost;
      document.getElementById('challengers').innerHTML = parseInt(document.getElementById('challengers').innerHTML) + 1;
      document.getElementById('challengerCost').innerHTML = parseInt(document.getElementById('challengerCost').innerHTML) * 1.25;
      challengerCost *= 1.25;
   }
}

