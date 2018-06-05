const multiplier = 1.35;

var save = {
   rpEarned: 0,
   rpPerSec: 0,
   bronzeCost: 50,
   silverCost: 100,
   goldCost: 300,
   platinumCost: 1200,
   diamondCost: 6000,
   masterCost: 36000,
   challengerCost: 252000,
   bronzes: 0,
   silvers: 0,
   golds: 0,
   platinums: 0,
   diamonds: 0,
   masters: 0,
   challengers: 0
};

function prettify(input) {
   var output = Math.round(input * 1000000) / 1000000;
   return output;
}

function incrementByOne() {
   document.getElementById("rp-earned").innerHTML = parseInt(document.getElementById('rp-earned').innerHTML) + 1;
}

function incrementInterval() {
   document.getElementById('rp-earned').innerHTML = prettify(parseInt(document.getElementById('rp-earned').innerHTML) + save.rpPerSec);
   document.getElementById('rp-persec').innerHTML = prettify(save.rpPerSec);
}

window.onload = function () {
   setInterval(incrementInterval, 1000);
};

function bronze() {
   if (document.getElementById('rp-earned').innerHTML >= save.bronzeCost) {
      save.rpPerSec += 1;
      document.getElementById('rp-earned').innerHTML -= save.bronzeCost;
      document.getElementById('bronzes').innerHTML = parseInt(document.getElementById('bronzes').innerHTML) + 1;
      document.getElementById('bronzeCost').innerHTML = prettify(parseInt(document.getElementById('bronzeCost').innerHTML) * multiplier);
      save.bronzeCost *= multiplier;
      save.bronzes += 1;
   }
}

function silver() {
   if (document.getElementById('rp-earned').innerHTML >= save.silverCost) {
      save.rpPerSec += 2;
      document.getElementById('rp-earned').innerHTML -= save.silverCost;
      document.getElementById('silvers').innerHTML = parseInt(document.getElementById('silvers').innerHTML) + 1;
      document.getElementById('silverCost').innerHTML = prettify(parseInt(document.getElementById('silverCost').innerHTML) * multiplier);
      save.silverCost *= multiplier;
      save.silvers += 1;
   }
}

function gold() {
   if (document.getElementById('rp-earned').innerHTML >= save.goldCost) {
      save.rpPerSec += 6;
      document.getElementById('rp-earned').innerHTML -= save.goldCost;
      document.getElementById('golds').innerHTML = parseInt(document.getElementById('golds').innerHTML) + 1;
      document.getElementById('goldCost').innerHTML = prettify(parseInt(document.getElementById('goldCost').innerHTML) * multiplier);
      save.goldCost *= multiplier;
      save.golds += 1;
   }
}

function platinum() {
   if (document.getElementById('rp-earned').innerHTML >= save.platinumCost) {
      save.rpPerSec += 24;
      document.getElementById('rp-earned').innerHTML -= save.platinumCost;
      document.getElementById('platinums').innerHTML = parseInt(document.getElementById('platinums').innerHTML) + 1;
      document.getElementById('platinumCost').innerHTML = prettify(parseInt(document.getElementById('platinumCost').innerHTML) * multiplier);
      save.platinumCost *= multiplier;
      save.platinums += 1;
   }
}

function diamond() {
   if (document.getElementById('rp-earned').innerHTML >= save.diamondCost) {
      save.rpPerSec += 120;
      document.getElementById('rp-earned').innerHTML -= save.diamondCost;
      document.getElementById('diamonds').innerHTML = parseInt(document.getElementById('diamonds').innerHTML) + 1;
      document.getElementById('diamondCost').innerHTML = prettify(parseInt(document.getElementById('diamondCost').innerHTML) * multiplier);
      save.diamondCost *= multiplier;
      save.diamonds += 1;
   }
}

function master() {
   if (document.getElementById('rp-earned').innerHTML >= save.masterCost) {
      save.rpPerSec += 720;
      document.getElementById('rp-earned').innerHTML -= save.masterCost;
      document.getElementById('masters').innerHTML = parseInt(document.getElementById('masters').innerHTML) + 1;
      document.getElementById('masterCost').innerHTML = prettify(parseInt(document.getElementById('masterCost').innerHTML) * multiplier);
      save.masterCost *= multiplier;
      save.masters += 1;
   }
}

function challenger() {
   if (document.getElementById('rp-earned').innerHTML >= save.challengerCost) {
      save.rpPerSec += 5040;
      document.getElementById('rp-earned').innerHTML -= save.challengerCost;
      document.getElementById('challengers').innerHTML = parseInt(document.getElementById('challengers').innerHTML) + 1;
      document.getElementById('challengerCost').innerHTML = prettify(parseInt(document.getElementById('challengerCost').innerHTML) * multiplier);
      save.challengerCost *= multiplier;
      save.challengers += 1;
      
      if (save.challengers == 1) {
         alert('Congratulations! You won the game.');
      }
   }
}

function saveGame() {
   save.rpEarned = document.getElementById('rp-earned').innerHTML;
   localStorage.setItem("save",JSON.stringify(save));
}

function loadGame(){
   var load = JSON.parse(localStorage.getItem("save"));

   save.rpEarned = load.rpEarned
   save.rpPerSec = load.rpPerSec;
   save.bronzes = load.bronzes;
   save.silvers = load.silvers;
   save.golds = load.golds;
   save.platinums = load.platinums;
   save.diamonds = load.diamonds;
   save.masters = load.masters;
   save.challengers = load.challengers;
   save.bronzeCost = load.bronzeCost;
   save.silverCost = load.silverCost;
   save.goldCost = load.goldCost;
   save.platinumCost = load.platinumCost;
   save.diamondCost = load.diamondCost;
   save.masterCost = load.masterCost;
   save.challengerCost = load.challengerCost;

   document.getElementById('rp-earned').innerHTML = save.rpEarned;
   document.getElementById('rp-persec').innerHTML = save.rpPerSec;
   document.getElementById('bronzes').innerHTML = save.bronzes;
   document.getElementById('silvers').innerHTML = save.silvers;
   document.getElementById('golds').innerHTML = save.golds;
   document.getElementById('platinums').innerHTML = save.platinums;
   document.getElementById('diamonds').innerHTML = save.diamonds;
   document.getElementById('masters').innerHTML = save.masters;
   document.getElementById('challengers').innerHTML = save.challengers;
   document.getElementById('bronzeCost').innerHTML = save.bronzeCost;
   document.getElementById('silverCost').innerHTML = save.silverCost;
   document.getElementById('goldCost').innerHTML = save.goldCost;
   document.getElementById('platinumCost').innerHTML = save.platinumCost;
   document.getElementById('diamondCost').innerHTML = save.diamondCost;
   document.getElementById('masterCost').innerHTML = save.masterCost;
   document.getElementById('challengerCost').innerHTML = save.challengerCost;

}