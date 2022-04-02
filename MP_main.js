// ダイスロール
let count;
let $id = function(id){ return document.getElementById(id); };
function role(){
    let dice1 = Math.floor(Math.random() * 6) + 1;
    dice1a = "dice" + dice1 + ".png";
    $id("dice1").innerHTML = "<img src='" + dice1a + "' width='60%' height='60%'>";
    let dice2 = Math.floor(Math.random() * 6) + 1;
    dice2a = "dice" + dice2 + ".png";
    $id("dice2").innerHTML = "<img src='" + dice2a + "' width='60%' height='60%'>";
    $id("dice_total").innerHTML = dice1 + dice2;
}
function anime(){
  if(count > 20) {
      count = 0;
      $id("btn1").disabled = "";
      return 0;
    }
  role();
  count++;
  setTimeout(anime, 30);
}
function dice_roller(){
    count = 0;
    $id("btn1").disabled = "true";
    anime();
}
window.onload = function(){
      role();
}

// チャンスカード要素
$(function(){
  $('#btn2').click(function(){
    var overlay = $("<div>").addClass("modal-overlay").fadeIn(300);
  $('body').append(overlay);
    var content = $("<div>").addClass("modal-content").fadeIn(300);
    var box = $(".chancecard");
    var r = Math.floor(Math.random() * box.length);
    content.html(box.eq(r).html());
    overlay.append(content);
    var dw = $(window).width();
    var dh = $(window).height();
    var x = (dw - content.outerWidth(true)) / 2;
    var y = (dh - content.outerHeight(true)) / 2;
    content.css({'left': x + 'px','top': y + 'px'});
    overlay.click(function(){
    overlay.fadeOut(300, function(){
    content.remove();
    overlay.remove();
      });
    });
  });
});
 // 共同基金要素
$(function(){
  $('#btn3').click(function(){
    var overlay = $("<div>").addClass("modal-overlay").fadeIn(300);
  $('body').append(overlay);
    var content = $("<div>").addClass("modal-content").fadeIn(300);
    var box = $(".community_chest");
    var r = Math.floor(Math.random() * box.length);
    content.html(box.eq(r).html());
    overlay.append(content);
    var dw = $(window).width();
    var dh = $(window).height();
    var x = (dw - content.outerWidth(true)) / 2;
    var y = (dh - content.outerHeight(true)) / 2;
    content.css({'left': x + 'px','top': y + 'px'});
    overlay.click(function(){
    overlay.fadeOut(300, function(){
    content.remove();
    overlay.remove();
      });
    });
  });
});
