const multiplier = 1.35;

var stolenRp = 0;

const base = {
   bronzeCost: 50,
   silverCost: 100,
   goldCost: 300,
   platinumCost: 1200,
   diamondCost: 6000,
   masterCost: 36000,
   challengerCost: 252000,
}

var save = {
   rpEarned: 0,
   rpPerSec: 0,
   rpPerClick: 1,
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


function increaseRpButton() {
   document.getElementById('rpButton').className = 'button is-warning is-rounded';
}

function decreaseRpButton() {
   document.getElementById('rpButton').className = 'button is-warning is-small is-rounded';
}

function randomImage() {
   var elem = document.getElementById('boris');
   elem.style.position = 'absolute';
   elem.style.display = '';

   elem.style.left = 75 + Math.round(Math.random() * (document.body.scrollWidth - 200)) + 'px';
   elem.style.top = 75 + Math.round(Math.random() * (document.body.scrollHeight - 150)) + 'px';

   document.body.appendChild(elem);
   stolenRp = parseInt(document.getElementById('rp-earned').innerHTML) / 2;
   document.getElementById('rp-earned').innerHTML = prettify(parseInt(document.getElementById('rp-earned').innerHTML) - stolenRp);
   setTimeout(fadeBoris, 13000);
   setTimeout(randomImage, 30000 + Math.random() * 60000);
}

function prettify(input) {
   var output = Math.trunc(input);
   return output;
}

function incrementByOne() {
   document.getElementById("rp-earned").innerHTML = parseInt(document.getElementById('rp-earned').innerHTML) + save.rpPerClick;
}

function incrementInterval() {
   document.getElementById('rp-earned').innerHTML = prettify(parseInt(document.getElementById('rp-earned').innerHTML) + save.rpPerSec);
   document.getElementById('rp-persec').innerHTML = prettify(save.rpPerSec);

   document.getElementById('bronzeColumns').style.visibility = 'visible';

   if (document.getElementById('rp-earned').innerHTML >= base.bronzeCost) {
      document.getElementById('silverColumns').style.visibility = 'visible';
   }
   if (document.getElementById('rp-earned').innerHTML >= save.bronzeCost) {
      document.getElementById('bronzeButton').className = 'button is-small is-success';
   }

   else if (document.getElementById('rp-earned').innerHTML < save.bronzeCost) {
      document.getElementById('bronzeButton').className = 'button is-small is-light';
   }

   if (document.getElementById('rp-earned').innerHTML >= base.silverCost) {
      document.getElementById('goldColumns').style.visibility = 'visible';
   }
   if (document.getElementById('rp-earned').innerHTML >= save.silverCost) {
      document.getElementById('silverButton').className = 'button is-small is-success';
   }

   else if (document.getElementById('rp-earned').innerHTML < save.silverCost) {
      document.getElementById('silverButton').className = 'button is-small is-light';
   }

   if (document.getElementById('rp-earned').innerHTML >= base.goldCost) {
      document.getElementById('platinumColumns').style.visibility = 'visible';
   }

   if (document.getElementById('rp-earned').innerHTML >= save.goldCost) {
      document.getElementById('goldButton').className = 'button is-small is-success';
   }

   else if (document.getElementById('rp-earned').innerHTML < save.goldCost) {
      document.getElementById('goldButton').className = 'button is-small is-light';
   }

   if (document.getElementById('rp-earned').innerHTML >= base.platinumCost) {
      document.getElementById('diamondColumns').style.visibility = 'visible';
   }
   if (document.getElementById('rp-earned').innerHTML >= save.platinumCost) {
      document.getElementById('platinumButton').className = 'button is-small is-success';
   }

   else if (document.getElementById('rp-earned').innerHTML < save.platinumCost) {
      document.getElementById('platinumButton').className = 'button is-small is-light';
   }

   if (document.getElementById('rp-earned').innerHTML >= base.diamondCost) {
      document.getElementById('masterColumns').style.visibility = 'visible';
   }

   if (document.getElementById('rp-earned').innerHTML >= save.diamondCost) {
      document.getElementById('diamondButton').className = 'button is-small is-success';
   }

   else if (document.getElementById('rp-earned').innerHTML < save.diamondCost) {
      document.getElementById('diamondButton').className = 'button is-small is-light';
   }

   if (document.getElementById('rp-earned').innerHTML >= base.masterCost) {
      document.getElementById('challengerColumns').style.visibility = 'visible';
   }

   if (document.getElementById('rp-earned').innerHTML >= save.masterCost) {
      document.getElementById('masterButton').className = 'button is-small is-success';
   }

   else if (document.getElementById('rp-earned').innerHTML < save.masterCost) {
      document.getElementById('masterButton').className = 'button is-small is-light';
   }

   if (document.getElementById('rp-earned').innerHTML >= save.challengerCost) {
      document.getElementById('challengerButton').className = 'button is-small is-success';
   }

   else if (document.getElementById('rp-earned').innerHTML < save.challengerCost) {
      document.getElementById('challengerButton').className = 'button is-small is-light';
   }
}

window.onload = function () {
   loadGame();
   setInterval(incrementInterval, 1000);
   setInterval(saveGame, 300000);
   setTimeout(randomImage, 30000 + Math.random() * 60000);
};

function bronze() {
   if (document.getElementById('rp-earned').innerHTML >= save.bronzeCost) {
      save.rpPerSec += 1;
      document.getElementById('rp-earned').innerHTML = Math.trunc(document.getElementById('rp-earned').innerHTML - save.bronzeCost);
      document.getElementById('bronzes').innerHTML = parseInt(document.getElementById('bronzes').innerHTML) + 1;
      document.getElementById('bronzeCost').innerHTML = prettify(parseInt(document.getElementById('bronzeCost').innerHTML) * multiplier);
      save.bronzeCost *= multiplier;
      save.bronzes += 1;
      save.rpPerClick += 1;
   }
}

function silver() {
   if (document.getElementById('rp-earned').innerHTML >= save.silverCost) {
      save.rpPerSec += 2;
      document.getElementById('rp-earned').innerHTML = Math.trunc(document.getElementById('rp-earned').innerHTML - save.silverCost);
      document.getElementById('silvers').innerHTML = parseInt(document.getElementById('silvers').innerHTML) + 1;
      document.getElementById('silverCost').innerHTML = prettify(parseInt(document.getElementById('silverCost').innerHTML) * multiplier);
      save.silverCost *= multiplier;
      save.silvers += 1;
      save.rpPerClick += 1;
   }
}

function gold() {
   if (document.getElementById('rp-earned').innerHTML >= save.goldCost) {
      save.rpPerSec += 6;
      document.getElementById('rp-earned').innerHTML = Math.trunc(document.getElementById('rp-earned').innerHTML - save.goldCost);
      document.getElementById('golds').innerHTML = parseInt(document.getElementById('golds').innerHTML) + 1;
      document.getElementById('goldCost').innerHTML = prettify(parseInt(document.getElementById('goldCost').innerHTML) * multiplier);
      save.goldCost *= multiplier;
      save.golds += 1;
      save.rpPerClick += 1;
   }
}

function platinum() {
   if (document.getElementById('rp-earned').innerHTML >= save.platinumCost) {
      save.rpPerSec += 24;
      document.getElementById('rp-earned').innerHTML = Math.trunc(document.getElementById('rp-earned').innerHTML - save.platinumCost);
      document.getElementById('platinums').innerHTML = parseInt(document.getElementById('platinums').innerHTML) + 1;
      document.getElementById('platinumCost').innerHTML = prettify(parseInt(document.getElementById('platinumCost').innerHTML) * multiplier);
      save.platinumCost *= multiplier;
      save.platinums += 1;
      save.rpPerClick += 1;
   }
}

function diamond() {
   if (document.getElementById('rp-earned').innerHTML >= save.diamondCost) {
      save.rpPerSec += 120;
      document.getElementById('rp-earned').innerHTML = Math.trunc(document.getElementById('rp-earned').innerHTML - save.diamondCost);
      document.getElementById('diamonds').innerHTML = parseInt(document.getElementById('diamonds').innerHTML) + 1;
      document.getElementById('diamondCost').innerHTML = prettify(parseInt(document.getElementById('diamondCost').innerHTML) * multiplier);
      save.diamondCost *= multiplier;
      save.diamonds += 1;
      save.rpPerClick += 1;
   }
}

function master() {
   if (document.getElementById('rp-earned').innerHTML >= save.masterCost) {
      save.rpPerSec += 720;
      document.getElementById('rp-earned').innerHTML = Math.trunc(document.getElementById('rp-earned').innerHTML - save.masterCost);
      document.getElementById('masters').innerHTML = parseInt(document.getElementById('masters').innerHTML) + 1;
      document.getElementById('masterCost').innerHTML = prettify(parseInt(document.getElementById('masterCost').innerHTML) * multiplier);
      save.masterCost *= multiplier;
      save.masters += 1;
      save.rpPerClick += 1;
   }
}

function challenger() {
   if (document.getElementById('rp-earned').innerHTML >= save.challengerCost) {
      save.rpPerSec += 5040;
      document.getElementById('rp-earned').innerHTML = Math.trunc(document.getElementById('rp-earned').innerHTML - save.challengerCost);
      document.getElementById('challengers').innerHTML = parseInt(document.getElementById('challengers').innerHTML) + 1;
      document.getElementById('challengerCost').innerHTML = prettify(parseInt(document.getElementById('challengerCost').innerHTML) * multiplier);
      save.challengerCost *= multiplier;
      save.challengers += 1;
      save.rpPerClick += 1;

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

   save.rpEarned = Math.trunc(load.rpEarned);
   save.rpPerSec = Math.trunc(load.rpPerSec);
   save.rpPerClick = load.rpPerClick;
   save.bronzes = load.bronzes;
   save.silvers = load.silvers;
   save.golds = load.golds;
   save.platinums = load.platinums;
   save.diamonds = load.diamonds;
   save.masters = load.masters;
   save.challengers = load.challengers;
   save.bronzeCost = Math.trunc(load.bronzeCost);
   save.silverCost = Math.trunc(load.silverCost);
   save.goldCost = Math.trunc(load.goldCost);
   save.platinumCost = Math.trunc(load.platinumCost);
   save.diamondCost = Math.trunc(load.diamondCost);
   save.masterCost = Math.trunc(load.masterCost);
   save.challengerCost = Math.trunc(load.challengerCost);

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

function deleteGame() {
   if (window.confirm("Do you REALLY want to reset the progress?")) { 
      localStorage.removeItem('save');

      document.getElementById('rp-earned').innerHTML = '0';
      document.getElementById('rp-persec').innerHTML = '0';
      document.getElementById('bronzes').innerHTML = '0';
      document.getElementById('silvers').innerHTML = '0';
      document.getElementById('golds').innerHTML = '0';
      document.getElementById('platinums').innerHTML = '0';
      document.getElementById('diamonds').innerHTML = '0';
      document.getElementById('masters').innerHTML = '0';
      document.getElementById('challengers').innerHTML = '0';
      document.getElementById('bronzeCost').innerHTML = '50';
      document.getElementById('silverCost').innerHTML = '100';
      document.getElementById('goldCost').innerHTML = '300';
      document.getElementById('platinumCost').innerHTML = '1200';
      document.getElementById('diamondCost').innerHTML = '6000';
      document.getElementById('masterCost').innerHTML = '36000';
      document.getElementById('challengerCost').innerHTML = '252000';

      save.rpPerClick = 1;
      save.rpEarned = parseInt(document.getElementById('rp-earned').innerHTML);
      save.rpPerSec = parseInt(document.getElementById('rp-persec').innerHTML);
      save.bronzes = parseInt(document.getElementById('bronzes').innerHTML);
      save.silvers = parseInt(document.getElementById('silvers').innerHTML);
      save.golds = parseInt(document.getElementById('golds').innerHTML);
      save.platinums = parseInt(document.getElementById('platinums').innerHTML);
      save.diamonds = parseInt(document.getElementById('diamonds').innerHTML);
      save.masters = parseInt(document.getElementById('masters').innerHTML);
      save.challengers = parseInt(document.getElementById('challengers').innerHTML);
      save.bronzeCost = parseInt(document.getElementById('bronzeCost').innerHTML);
      save.silverCost = parseInt(document.getElementById('silverCost').innerHTML);
      save.goldCost = parseInt(document.getElementById('goldCost').innerHTML);
      save.platinumCost = parseInt(document.getElementById('platinumCost').innerHTML);
      save.diamondCost = parseInt(document.getElementById('diamondCost').innerHTML);
      save.masterCost = parseInt(document.getElementById('masterCost').innerHTML);
      save.challengerCost = parseInt(document.getElementById('challengerCost').innerHTML);
      
      document.getElementById('silverColumns').style.visibility = 'hidden';
      document.getElementById('goldColumns').style.visibility = 'hidden';
      document.getElementById('platinumColumns').style.visibility = 'hidden';
      document.getElementById('diamondColumns').style.visibility = 'hidden';
      document.getElementById('masterColumns').style.visibility = 'hidden';
      document.getElementById('challengerColumns').style.visibility = 'hidden';
   }
}

function removeBoris() {
   document.getElementById('boris').style.display = 'none';
   document.getElementById('rp-earned').innerHTML = prettify(parseInt(document.getElementById('rp-earned').innerHTML) + stolenRp);
}

function lowerOpacityOfBoris() {
   document.getElementById('boris').style.opacity = (parseInt(document.getElementById('boris').style.opacity) - 0.01).toString();
}

function fadeBoris() {
   var target = document.getElementById("boris");
   var fadeEffect = setInterval(function () {
      if (!target.style.opacity) {
         target.style.opacity = 1;
      }
      if (target.style.opacity > 0) {
         target.style.opacity -= 0.01;
      } else {
         target.style.display = 'none';
         target.style.opacity = 1;
         clearInterval(fadeEffect);
      }
   }, 30);
}

window.onbeforeunload = function(e) {
   saveGame();
};
