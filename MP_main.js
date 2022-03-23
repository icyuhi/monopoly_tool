let count;
let $id = function(id){ return document.getElementById(id); };

function role(){
    let dice1 = Math.floor(Math.random() * 6) + 1;
    dice1a = "dice" + dice1 + ".png";
    $id("dice1").innerHTML = "<img src='" + dice1a + "' width='100' height='100'>";
    let dice2 = Math.floor(Math.random() * 6) + 1;
    dice2a = "dice" + dice2 + ".png";
    $id("dice2").innerHTML = "<img src='" + dice2a + "' width='100' height='100'>";
    $id("dice_total").innerHTML = dice1 + dice2
}

function anime(){
    if(count > 20)
    {
        count = 0;
        $id("btn").disabled = "";
        return 0;
    }
    role();
    count++;
    setTimeout(anime, 30);
}

function dice_roller(){
    count = 0;
    $id("btn").disabled = "true";
    anime();
}

window.onload = function(){
    role();
}
