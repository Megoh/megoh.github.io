const multiplier = 1.15;

var stolenRp = 0;

const base = {
  bronzeCost: 50,
  silverCost: 100,
  goldCost: 300,
  platinumCost: 1200,
  diamondCost: 6000,
  masterCost: 36000,
  challengerCost: 252000
};

var save = {
  introduction: true,
  rpEarned: 0,
  rpPerSec: 0,
  rpPerClick: 1,
  rpPerBronze: 0,
  rpPerSilver: 0,
  rpPerGold: 0,
  rpPerPlatinum: 0,
  rpPerDiamond: 0,
  rpPerMaster: 0,
  rpPerChallenger: 0,
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
  var output = input;
  return output;
}

function fadeBoris() {
  var target = document.getElementById("boris");
  var fadeEffect = setInterval(function() {
    if (!target.style.opacity) {
      target.style.opacity = 1;
    }
    if (target.style.opacity > 0) {
      target.style.opacity -= 0.01;
    } else {
      target.style.display = "none";
      target.style.opacity = 1;
      clearInterval(fadeEffect);
    }
  }, 30);
}

function increaseRpButton() {
  document.getElementById("rpButton").className =
    "button is-warning is-medium is-rounded";
}

function decreaseRpButton() {
  document.getElementById("rpButton").className =
    "button is-warning is-rounded";
}

function randomImage() {
  var elem = document.getElementById("boris");
  elem.style.position = "absolute";
  elem.style.display = "";

  elem.style.left =
    75 + Math.round(Math.random() * (document.body.scrollWidth - 200)) + "px";
  elem.style.top =
    75 + Math.round(Math.random() * (document.body.scrollHeight - 150)) + "px";

  document.body.appendChild(elem);
  stolenRp = parseInt(document.getElementById("rp-earned").innerHTML) / 2;
  document.getElementById("rp-earned").innerHTML = prettify(
    parseInt(document.getElementById("rp-earned").innerHTML) - stolenRp
  );
  setTimeout(fadeBoris, 13000);
  setTimeout(randomImage, 30000 + Math.random() * 60000);
}

function incrementByOne() {
  document.getElementById("rp-earned").innerHTML = (
    parseInt(document.getElementById("rp-earned").innerHTML) + save.rpPerClick
  ).toFixed(2);
}

function incrementInterval() {
  document.getElementById("rp-earned").innerHTML = prettify(
    parseFloat(document.getElementById("rp-earned").innerHTML) +
      save.rpPerSec / 40
  ).toFixed(2);
  document.getElementById("rp-persec").innerHTML = prettify(save.rpPerSec);

  if (document.getElementById("rp-earned").innerHTML >= save.bronzeCost) {
    document.getElementById("bronzeButton").className =
      "button is-small is-success";
  } else if (document.getElementById("rp-earned").innerHTML < save.bronzeCost) {
    document.getElementById("bronzeButton").className =
      "button is-small is-light";
  }

  if (document.getElementById("rp-earned").innerHTML >= base.bronzeCost) {
    document.getElementById("silverColumns").style.display = "flex";
  }

  if (
    document.getElementById("rp-earned").innerHTML >=
    costTimesTen(save.bronzeCost)
  ) {
    document.getElementById("bronzeButtonTimesTen").className =
      "button is-small is-success";
  } else if (
    document.getElementById("rp-earned").innerHTML <
    costTimesTen(save.bronzeCost)
  ) {
    document.getElementById("bronzeButtonTimesTen").className =
      "button is-small is-light";
  }

  if (document.getElementById("rp-earned").innerHTML >= save.silverCost) {
    document.getElementById("silverButton").className =
      "button is-small is-success";
  } else if (document.getElementById("rp-earned").innerHTML < save.silverCost) {
    document.getElementById("silverButton").className =
      "button is-small is-light";
  }

  if (document.getElementById("rp-earned").innerHTML >= base.silverCost) {
    document.getElementById("goldColumns").style.display = "flex";
  }

  if (
    document.getElementById("rp-earned").innerHTML >=
    costTimesTen(save.silverCost)
  ) {
    document.getElementById("silverButtonTimesTen").className =
      "button is-small is-success";
  } else if (
    document.getElementById("rp-earned").innerHTML <
    save.silverCost * multiplier ** 10
  ) {
    document.getElementById("silverButtonTimesTen").className =
      "button is-small is-light";
  }

  if (document.getElementById("rp-earned").innerHTML >= save.goldCost) {
    document.getElementById("goldButton").className =
      "button is-small is-success";
  } else if (document.getElementById("rp-earned").innerHTML < save.goldCost) {
    document.getElementById("goldButton").className =
      "button is-small is-light";
  }

  if (document.getElementById("rp-earned").innerHTML >= base.goldCost) {
    document.getElementById("platinumColumns").style.display = "flex";
  }

  if (
    document.getElementById("rp-earned").innerHTML >=
    costTimesTen(save.goldCost)
  ) {
    document.getElementById("goldButtonTimesTen").className =
      "button is-small is-success";
  } else if (
    document.getElementById("rp-earned").innerHTML <
    save.goldCost * multiplier ** 10
  ) {
    document.getElementById("goldButtonTimesTen").className =
      "button is-small is-light";
  }

  if (document.getElementById("rp-earned").innerHTML >= base.platinumCost) {
    document.getElementById("diamondColumns").style.display = "flex";
  }

  if (document.getElementById("rp-earned").innerHTML >= save.platinumCost) {
    document.getElementById("platinumButton").className =
      "button is-small is-success";
  } else if (
    document.getElementById("rp-earned").innerHTML < save.platinumCost
  ) {
    document.getElementById("platinumButton").className =
      "button is-small is-light";
  }

  if (
    document.getElementById("rp-earned").innerHTML >=
    costTimesTen(save.platinumCost)
  ) {
    document.getElementById("platinumButtonTimesTen").className =
      "button is-small is-success";
  } else if (
    document.getElementById("rp-earned").innerHTML <
    save.platinumCost * multiplier ** 10
  ) {
    document.getElementById("platinumButtonTimesTen").className =
      "button is-small is-light";
  }

  if (document.getElementById("rp-earned").innerHTML >= base.diamondCost) {
    document.getElementById("masterColumns").style.display = "flex";
  }

  if (document.getElementById("rp-earned").innerHTML >= save.diamondCost) {
    document.getElementById("diamondButton").className =
      "button is-small is-success";
  } else if (
    document.getElementById("rp-earned").innerHTML < save.diamondCost
  ) {
    document.getElementById("diamondButton").className =
      "button is-small is-light";
  }

  if (
    document.getElementById("rp-earned").innerHTML >=
    costTimesTen(save.diamondCost)
  ) {
    document.getElementById("diamondButtonTimesTen").className =
      "button is-small is-success";
  } else if (
    document.getElementById("rp-earned").innerHTML <
    save.diamondCost * multiplier ** 10
  ) {
    document.getElementById("diamondButtonTimesTen").className =
      "button is-small is-light";
  }

  if (document.getElementById("rp-earned").innerHTML >= base.masterCost) {
    document.getElementById("challengerColumns").style.display = "flex";
  }

  if (document.getElementById("rp-earned").innerHTML >= save.masterCost) {
    document.getElementById("masterButton").className =
      "button is-small is-success";
  } else if (document.getElementById("rp-earned").innerHTML < save.masterCost) {
    document.getElementById("masterButton").className =
      "button is-small is-light";
  }

  if (
    document.getElementById("rp-earned").innerHTML >=
    costTimesTen(save.masterCost)
  ) {
    document.getElementById("masterButtonTimesTen").className =
      "button is-small is-success";
  } else if (
    document.getElementById("rp-earned").innerHTML <
    save.masterCost * multiplier ** 10
  ) {
    document.getElementById("masterButtonTimesTen").className =
      "button is-small is-light";
  }

  if (document.getElementById("rp-earned").innerHTML >= save.challengerCost) {
    document.getElementById("challengerButton").className =
      "button is-small is-success";
  } else if (
    document.getElementById("rp-earned").innerHTML < save.challengerCost
  ) {
    document.getElementById("challengerButton").className =
      "button is-small is-light";
  }

  if (
    document.getElementById("rp-earned").innerHTML >=
    costTimesTen(save.challengerCost)
  ) {
    document.getElementById("challengerButtonTimesTen").className =
      "button is-small is-success";
  } else if (
    document.getElementById("rp-earned").innerHTML <
    save.challengerCost * multiplier ** 10
  ) {
    document.getElementById("challengerButtonTimesTen").className =
      "button is-small is-light";
  }
}

function saveGame() {
  save.rpEarned = document.getElementById("rp-earned").innerHTML;
  localStorage.setItem("save", JSON.stringify(save));
}

window.onbeforeunload = function(e) {
  saveGame();
};

function loadGame() {
  var load = JSON.parse(localStorage.getItem("save"));

  save.introduction = load.introduction;
  save.rpEarned = Math.round(load.rpEarned);
  save.rpPerSec = Math.round(load.rpPerSec);
  save.rpPerClick = load.rpPerClick;
  save.rpPerBronze = load.rpPerBronze;
  save.rpPerSilver = load.rpPerSilver;
  save.rpPerGold = load.rpPerGold;
  save.rpPerPlatinum = load.rpPerPlatinum;
  save.rpPerDiamond = load.rpPerDiamond;
  save.rpPerMaster = load.rpPerMaster;
  save.rpPerChallenger = load.rpPerChallenger;
  save.bronzes = load.bronzes;
  save.silvers = load.silvers;
  save.golds = load.golds;
  save.platinums = load.platinums;
  save.diamonds = load.diamonds;
  save.masters = load.masters;
  save.challengers = load.challengers;
  save.bronzeCost = Math.round(load.bronzeCost);
  save.silverCost = Math.round(load.silverCost);
  save.goldCost = Math.round(load.goldCost);
  save.platinumCost = Math.round(load.platinumCost);
  save.diamondCost = Math.round(load.diamondCost);
  save.masterCost = Math.round(load.masterCost);
  save.challengerCost = Math.round(load.challengerCost);

  document.getElementById("rp-earned").innerHTML = save.rpEarned;
  document.getElementById("rp-persec").innerHTML = save.rpPerSec;
  document.getElementById("rpPerBronze").innerHTML = save.rpPerBronze;
  document.getElementById("rpPerSilver").innerHTML = save.rpPerSilver;
  document.getElementById("rpPerGold").innerHTML = save.rpPerGold;
  document.getElementById("rpPerPlatinum").innerHTML = save.rpPerPlatinum;
  document.getElementById("rpPerDiamond").innerHTML = save.rpPerDiamond;
  document.getElementById("rpPerMaster").innerHTML = save.rpPerMaster;
  document.getElementById("rpPerChallenger").innerHTML = save.rpPerChallenger;
  document.getElementById("bronzes").innerHTML = save.bronzes;
  document.getElementById("silvers").innerHTML = save.silvers;
  document.getElementById("golds").innerHTML = save.golds;
  document.getElementById("platinums").innerHTML = save.platinums;
  document.getElementById("diamonds").innerHTML = save.diamonds;
  document.getElementById("masters").innerHTML = save.masters;
  document.getElementById("challengers").innerHTML = save.challengers;
  document.getElementById("bronzeCost").innerHTML = save.bronzeCost;
  document.getElementById("silverCost").innerHTML = save.silverCost;
  document.getElementById("goldCost").innerHTML = save.goldCost;
  document.getElementById("platinumCost").innerHTML = save.platinumCost;
  document.getElementById("diamondCost").innerHTML = save.diamondCost;
  document.getElementById("masterCost").innerHTML = save.masterCost;
  document.getElementById("challengerCost").innerHTML = save.challengerCost;

  if (save.introduction) {
    document.getElementById("introduction").style.display = "block";
  }
}

function bronze() {
  if (document.getElementById("rp-earned").innerHTML >= save.bronzeCost) {
    save.rpPerSec += 1;
    save.bronzes += 1;
    save.rpPerClick += 1;
    save.rpPerBronze += 1;
    document.getElementById("rp-earned").innerHTML = Math.round(
      document.getElementById("rp-earned").innerHTML - save.bronzeCost
    );
    save.bronzeCost = Math.round((save.bronzeCost * multiplier).toFixed(3));
    document.getElementById("bronzeCost").innerHTML = save.bronzeCost;
    document.getElementById("bronzes").innerHTML =
      parseInt(document.getElementById("bronzes").innerHTML) + 1;
    document.getElementById("rpPerBronze").innerHTML = prettify(
      parseInt(document.getElementById("rpPerBronze").innerHTML) + 1
    );
  }
}

function silver() {
  if (document.getElementById("rp-earned").innerHTML >= save.silverCost) {
    save.rpPerSec += 2;
    save.silvers += 1;
    save.rpPerClick += 1;
    save.rpPerSilver += 2;
    document.getElementById("rp-earned").innerHTML = Math.round(
      document.getElementById("rp-earned").innerHTML - save.silverCost
    );
    save.silverCost = Math.round((save.silverCost * multiplier).toFixed(3));
    document.getElementById("silverCost").innerHTML = Math.round(
      prettify(
        parseInt(document.getElementById("silverCost").innerHTML) * multiplier
      )
    );
    document.getElementById("silvers").innerHTML =
      parseInt(document.getElementById("silvers").innerHTML) + 1;
    document.getElementById("rpPerSilver").innerHTML = prettify(
      parseInt(document.getElementById("rpPerSilver").innerHTML) + 2
    );
  }
}

function gold() {
  if (document.getElementById("rp-earned").innerHTML >= save.goldCost) {
    save.rpPerSec += 6;
    save.golds += 1;
    save.rpPerClick += 1;
    save.rpPerGold += 6;
    document.getElementById("rp-earned").innerHTML = Math.round(
      document.getElementById("rp-earned").innerHTML - save.goldCost
    );
    save.goldCost = Math.round((save.goldCost * multiplier).toFixed(3));
    document.getElementById("goldCost").innerHTML = Math.round(
      prettify(
        parseInt(document.getElementById("goldCost").innerHTML) * multiplier
      )
    );
    document.getElementById("golds").innerHTML =
      parseInt(document.getElementById("golds").innerHTML) + 1;
    document.getElementById("rpPerGold").innerHTML = prettify(
      parseInt(document.getElementById("rpPerGold").innerHTML) + 6
    );
  }
}

function platinum() {
  if (document.getElementById("rp-earned").innerHTML >= save.platinumCost) {
    save.rpPerSec += 24;
    save.platinums += 1;
    save.rpPerClick += 1;
    save.rpPerPlatinum += 24;
    document.getElementById("rp-earned").innerHTML = Math.round(
      document.getElementById("rp-earned").innerHTML - save.platinumCost
    );
    save.platinumCost = Math.round((save.platinumCost * multiplier).toFixed(3));
    document.getElementById("platinumCost").innerHTML = Math.round(
      prettify(
        parseInt(document.getElementById("platinumCost").innerHTML) * multiplier
      )
    );
    document.getElementById("platinums").innerHTML =
      parseInt(document.getElementById("platinums").innerHTML) + 1;
    document.getElementById("rpPerPlatinum").innerHTML = prettify(
      parseInt(document.getElementById("rpPerPlatinum").innerHTML) + 24
    );
  }
}

function diamond() {
  if (document.getElementById("rp-earned").innerHTML >= save.diamondCost) {
    save.rpPerSec += 120;
    save.diamonds += 1;
    save.rpPerClick += 1;
    save.rpPerDiamond += 120;
    document.getElementById("rp-earned").innerHTML = Math.round(
      document.getElementById("rp-earned").innerHTML - save.diamondCost
    );
    save.diamondCost = Math.round((save.diamondCost * multiplier).toFixed(3));
    document.getElementById("diamondCost").innerHTML = Math.round(
      prettify(
        parseInt(document.getElementById("diamondCost").innerHTML) * multiplier
      )
    );
    document.getElementById("diamonds").innerHTML =
      parseInt(document.getElementById("diamonds").innerHTML) + 1;
    document.getElementById("rpPerDiamond").innerHTML = prettify(
      parseInt(document.getElementById("rpPerDiamond").innerHTML) + 120
    );
  }
}

function master() {
  if (document.getElementById("rp-earned").innerHTML >= save.masterCost) {
    save.rpPerSec += 720;
    save.masters += 1;
    save.rpPerClick += 1;
    save.rpPerMaster += 720;
    document.getElementById("rp-earned").innerHTML = Math.round(
      document.getElementById("rp-earned").innerHTML - save.masterCost
    );
    save.masterCost = Math.round((save.masterCost * multiplier).toFixed(3));
    document.getElementById("masterCost").innerHTML = Math.round(
      prettify(
        parseInt(document.getElementById("masterCost").innerHTML) * multiplier
      )
    );
    document.getElementById("masters").innerHTML =
      parseInt(document.getElementById("masters").innerHTML) + 1;
    document.getElementById("rpPerMaster").innerHTML = prettify(
      parseInt(document.getElementById("rpPerMaster").innerHTML) + 720
    );
  }
}

function challenger() {
  if (document.getElementById("rp-earned").innerHTML >= save.challengerCost) {
    save.rpPerSec += 5040;
    save.challengers += 1;
    save.rpPerClick += 1;
    save.rpPerChallenger += 5040;
    document.getElementById("rp-earned").innerHTML = Math.round(
      document.getElementById("rp-earned").innerHTML - save.challengerCost
    );
    save.challengerCost = Math.round(
      (save.challengerCost * multiplier).toFixed(3)
    );
    document.getElementById("challengerCost").innerHTML = Math.round(
      prettify(
        parseInt(document.getElementById("challengerCost").innerHTML) *
          multiplier
      )
    );
    document.getElementById("challengers").innerHTML =
      parseInt(document.getElementById("challengers").innerHTML) + 1;
    document.getElementById("rpPerChallenger").innerHTML = prettify(
      parseInt(document.getElementById("rpPerChallenger").innerHTML) + 5040
    );

    if (save.challengers == 1) {
      alert("Congratulations! You won the game.");
    }
  }
}

function costAfterTimesTen(cost) {
  for (var i = 0; i < 10; i++) {
    cost *= 1.15;
    cost = cost.toFixed(3);
    cost = Math.round(cost);
  }
  return cost;
}

function costTimesTen(cost) {
  var sum = 0;
  for (var i = 0; i < 10; i++) {
    cost *= 1.15;
    cost = cost.toFixed(3);
    cost = Math.round(cost);
    sum += cost;
  }
  return sum;
}

function bronzeTimesTen() {
  if (
    document.getElementById("rp-earned").innerHTML >=
    costTimesTen(save.bronzeCost)
  ) {
    save.rpPerSec += 10;
    document.getElementById("rp-earned").innerHTML = Math.round(
      document.getElementById("rp-earned").innerHTML -
        costTimesTen(save.bronzeCost)
    );
    document.getElementById("bronzes").innerHTML =
      parseInt(document.getElementById("bronzes").innerHTML) + 10;
    document.getElementById("bronzeCost").innerHTML = costAfterTimesTen(
      Math.round(
        prettify(parseInt(document.getElementById("bronzeCost").innerHTML))
      )
    );
    document.getElementById("rpPerBronze").innerHTML = prettify(
      parseInt(document.getElementById("rpPerBronze").innerHTML) + 10
    );
    save.bronzeCost = costAfterTimesTen(save.bronzeCost);
    save.bronzes += 10;
    save.rpPerClick += 10;
    save.rpPerBronze += 10;
  }
}

function silverTimesTen() {
  if (
    document.getElementById("rp-earned").innerHTML >=
    costTimesTen(save.silverCost)
  ) {
    save.rpPerSec += 20;
    document.getElementById("rp-earned").innerHTML = Math.round(
      document.getElementById("rp-earned").innerHTML -
        costTimesTen(save.silverCost)
    );
    document.getElementById("silvers").innerHTML =
      parseInt(document.getElementById("silvers").innerHTML) + 10;
    document.getElementById("silverCost").innerHTML = costAfterTimesTen(
      Math.round(
        prettify(parseInt(document.getElementById("silverCost").innerHTML))
      )
    );
    document.getElementById("rpPerSilver").innerHTML = prettify(
      parseInt(document.getElementById("rpPerSilver").innerHTML) + 20
    );
    save.silverCost = save.silverCost * multiplier ** 10;
    save.silvers += 10;
    save.rpPerClick += 10;
    save.rpPerSilver += 20;
  }
}

function goldTimesTen() {
  if (
    document.getElementById("rp-earned").innerHTML >=
    costTimesTen(save.bronzeCost)
  ) {
    save.rpPerSec += 60;
    document.getElementById("rp-earned").innerHTML = Math.round(
      document.getElementById("rp-earned").innerHTML -
        costTimesTen(save.goldCost)
    );
    document.getElementById("golds").innerHTML =
      parseInt(document.getElementById("golds").innerHTML) + 10;
    document.getElementById("goldCost").innerHTML = costAfterTimesTen(
      Math.round(
        prettify(parseInt(document.getElementById("goldCost").innerHTML))
      )
    );
    document.getElementById("rpPerGold").innerHTML = prettify(
      parseInt(document.getElementById("rpPerGold").innerHTML) + 60
    );
    save.goldCost = save.goldCost * multiplier ** 10;
    save.golds += 10;
    save.rpPerClick += 10;
    save.rpPerGold += 60;
  }
}

function platinumTimesTen() {
  if (
    document.getElementById("rp-earned").innerHTML >=
    costTimesTen(save.platinumCost)
  ) {
    save.rpPerSec += 240;
    document.getElementById("rp-earned").innerHTML = Math.round(
      document.getElementById("rp-earned").innerHTML -
        costTimesTen(save.platinumCost)
    );
    document.getElementById("platinums").innerHTML =
      parseInt(document.getElementById("platinums").innerHTML) + 10;
    document.getElementById("platinumCost").innerHTML = costAfterTimesTen(
      Math.round(
        prettify(parseInt(document.getElementById("platinumCost").innerHTML))
      )
    );
    document.getElementById("rpPerPlatinum").innerHTML = prettify(
      parseInt(document.getElementById("rpPerPlatinum").innerHTML) + 240
    );
    save.platinumCost *= multiplier ** 10;
    save.platinums += 10;
    save.rpPerClick += 10;
    save.rpPerPlatinum += 240;
  }
}

function diamondTimesTen() {
  if (
    document.getElementById("rp-earned").innerHTML >=
    costTimesTen(save.diamondCost)
  ) {
    save.rpPerSec += 1200;
    document.getElementById("rp-earned").innerHTML = Math.round(
      document.getElementById("rp-earned").innerHTML -
        costTimesTen(save.diamondCost)
    );
    document.getElementById("diamonds").innerHTML =
      parseInt(document.getElementById("diamonds").innerHTML) + 10;
    document.getElementById("diamondCost").innerHTML = costAfterTimesTen(
      Math.round(
        prettify(parseInt(document.getElementById("diamondCost").innerHTML))
      )
    );
    document.getElementById("rpPerDiamond").innerHTML = prettify(
      parseInt(document.getElementById("rpPerDiamond").innerHTML) + 1200
    );
    save.diamondCost = save.diamondCost * multiplier ** 10;
    save.diamonds += 10;
    save.rpPerClick += 10;
    save.rpPerDiamond += 1200;
  }
}

function masterTimesTen() {
  if (
    document.getElementById("rp-earned").innerHTML >=
    costTimesTen(save.masterCost)
  ) {
    save.rpPerSec += 7200;
    document.getElementById("rp-earned").innerHTML = Math.round(
      document.getElementById("rp-earned").innerHTML -
        costTimesTen(save.masterCost)
    );
    document.getElementById("masters").innerHTML =
      parseInt(document.getElementById("masters").innerHTML) + 10;
    document.getElementById("masterCost").innerHTML = costAfterTimesTen(
      Math.round(
        prettify(parseInt(document.getElementById("masterCost").innerHTML))
      )
    );
    document.getElementById("rpPerMaster").innerHTML = prettify(
      parseInt(document.getElementById("rpPerMaster").innerHTML) + 7200
    );
    save.masterCost = save.diamondCost * multiplier ** 10;
    save.masters += 10;
    save.rpPerClick += 10;
    save.rpPerMaster += 7200;
  }
}

function challengerTimesTen() {
  if (
    document.getElementById("rp-earned").innerHTML >=
    costTimesTen(save.challengerCost)
  ) {
    save.rpPerSec += 50400;
    document.getElementById("rp-earned").innerHTML = Math.round(
      document.getElementById("rp-earned").innerHTML -
        costTimesTen(save.challengerCost)
    );
    document.getElementById("challengers").innerHTML =
      parseInt(document.getElementById("challengers").innerHTML) + 10;
    document.getElementById("challengerCost").innerHTML = costAfterTimesTen(
      Math.round(
        prettify(parseInt(document.getElementById("challengerCost").innerHTML))
      )
    );
    document.getElementById("rpPerChallenger").innerHTML = prettify(
      parseInt(document.getElementById("rpPerChallenger").innerHTML) + 50400
    );
    save.challengerCost = save.diamondCost * multiplier ** 10;
    save.challengers += 10;
    save.rpPerClick += 10;
    save.rpPerChallenger += 50400;
  }
}

function deleteGame() {
  if (window.confirm("Do you REALLY want to reset the progress?")) {
    localStorage.removeItem("save");

    document.getElementById("rp-earned").innerHTML = "0";
    document.getElementById("rp-persec").innerHTML = "0";
    document.getElementById("rpPerBronze").innerHTML = "0";
    document.getElementById("rpPerSilver").innerHTML = "0";
    document.getElementById("rpPerGold").innerHTML = "0";
    document.getElementById("rpPerPlatinum").innerHTML = "0";
    document.getElementById("rpPerDiamond").innerHTML = "0";
    document.getElementById("rpPerMaster").innerHTML = "0";
    document.getElementById("rpPerChallenger").innerHTML = "0";
    document.getElementById("bronzes").innerHTML = "0";
    document.getElementById("silvers").innerHTML = "0";
    document.getElementById("golds").innerHTML = "0";
    document.getElementById("platinums").innerHTML = "0";
    document.getElementById("diamonds").innerHTML = "0";
    document.getElementById("masters").innerHTML = "0";
    document.getElementById("challengers").innerHTML = "0";
    document.getElementById("bronzeCost").innerHTML = "50";
    document.getElementById("silverCost").innerHTML = "100";
    document.getElementById("goldCost").innerHTML = "300";
    document.getElementById("platinumCost").innerHTML = "1200";
    document.getElementById("diamondCost").innerHTML = "6000";
    document.getElementById("masterCost").innerHTML = "36000";
    document.getElementById("challengerCost").innerHTML = "252000";

    save.introduction = true;
    save.rpPerClick = 1;
    save.rpEarned = parseInt(document.getElementById("rp-earned").innerHTML);
    save.rpPerSec = parseInt(document.getElementById("rp-persec").innerHTML);
    save.rpPerBronze = parseInt(
      document.getElementById("rpPerBronze").innerHTML
    );
    save.rpPerSilver = parseInt(
      document.getElementById("rpPerSilver").innerHTML
    );
    save.rpPerGold = parseInt(document.getElementById("rpPerGold").innerHTML);
    save.rpPerPlatinum = parseInt(
      document.getElementById("rpPerPlatinum").innerHTML
    );
    save.rpPerDiamond = parseInt(
      document.getElementById("rpPerDiamond").innerHTML
    );
    save.rpPerMaster = parseInt(
      document.getElementById("rpPerMaster").innerHTML
    );
    save.rpPerChallenger = parseInt(
      document.getElementById("rpPerChallenger").innerHTML
    );
    save.bronzes = parseInt(document.getElementById("bronzes").innerHTML);
    save.silvers = parseInt(document.getElementById("silvers").innerHTML);
    save.golds = parseInt(document.getElementById("golds").innerHTML);
    save.platinums = parseInt(document.getElementById("platinums").innerHTML);
    save.diamonds = parseInt(document.getElementById("diamonds").innerHTML);
    save.masters = parseInt(document.getElementById("masters").innerHTML);
    save.challengers = parseInt(
      document.getElementById("challengers").innerHTML
    );
    save.bronzeCost = parseInt(document.getElementById("bronzeCost").innerHTML);
    save.silverCost = parseInt(document.getElementById("silverCost").innerHTML);
    save.goldCost = parseInt(document.getElementById("goldCost").innerHTML);
    save.platinumCost = parseInt(
      document.getElementById("platinumCost").innerHTML
    );
    save.diamondCost = parseInt(
      document.getElementById("diamondCost").innerHTML
    );
    save.masterCost = parseInt(document.getElementById("masterCost").innerHTML);
    save.challengerCost = parseInt(
      document.getElementById("challengerCost").innerHTML
    );

    document.getElementById("silverColumns").style.display = "none";
    document.getElementById("goldColumns").style.display = "none";
    document.getElementById("platinumColumns").style.display = "none";
    document.getElementById("diamondColumns").style.display = "none";
    document.getElementById("masterColumns").style.display = "none";
    document.getElementById("challengerColumns").style.display = "none";

    //document.getElementById('introduction').style.display = 'none';
  }
}

function removeBoris() {
  document.getElementById("boris").style.display = "none";
  document.getElementById("rp-earned").innerHTML = prettify(
    parseInt(document.getElementById("rp-earned").innerHTML) + stolenRp
  );
}

function deleteIntroduction() {
  document.getElementById("introduction").remove();
  save.introduction = false;
}

document.addEventListener("DOMContentLoaded", function(event) {
  loadGame();
  setInterval(incrementInterval, 25);
  setInterval(saveGame, 300000);
  setTimeout(randomImage, 30000 + Math.random() * 60000);
});
