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
    if(count > 20)
    {
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

function chance() {
	rand = Math.floor(Math.random()*15);
	if (rand == 0) msg = "スピード違反で15ドル支払う";
	if (rand == 1) msg = "委員会の委員長に選任され各プレイヤーに50ドル支払う";
	if (rand == 2) msg = "銀行より利息50ドル受取る";
	if (rand == 3) msg = "建物ローンの満期で150ドル受取る";
	if (rand == 4) msg = "GOのマスへ進み200ドル受取る";
  if (rand == 5) msg = "次の鉄道会社まで進む。所有者がいなければ買うことができる。所有者が いたら通常の2倍のレンタル料を支払う";
	if (rand == 6) msg = "リーディング鉄道に進む。もしGOを通ったら200ドル受取る";
	if (rand == 7) msg = "セントチャールズプレースへ進む。もしGOを通ったら200ドル受取る";
	if (rand == 8) msg = "イリノイ通りへ進む。もしGOを通ったら200ドル受取る";
	if (rand == 9) msg = "ボードウォークへ進む";
  if (rand == 10) msg = "次の水道会社か電力会社に進む。所有者がいなければ買うことができる。所有者がいたらサイコロの目の10倍を支払う";
	if (rand == 11) msg = "3マス戻る";
	if (rand == 12) msg = "刑務所から釈放される。このカードは必要になるまで持っていても売却してもよい";
	if (rand == 13) msg = "刑務所に行く。GOを通っても200ドルは受取れない";
	if (rand == 14) msg = "全財産の修理費、家1軒当たり25ドル、ホテル1軒当たり100ドル支払う";
	alert(msg);
}

function community_chest() {
	rand = Math.floor(Math.random()*16);
	if (rand == 0) msg = "治療費として50ドル支払う";
	if (rand == 1) msg = "教育費として50ドル支払う";
	if (rand == 2) msg = "入院費100ドル支払う";
	if (rand == 3) msg = "誕生日祝いとしてすべてのプレイヤーから10ドル受取る";
	if (rand == 4) msg = "ビューティーコンテスト準優勝。10ドル受取る";
  if (rand == 5) msg = "所得税の払い戻し金20ドル受取る";
	if (rand == 6) msg = "コンサルタント料金として25ドル受取る";
	if (rand == 7) msg = "株式売却により50ドル受取る";
	if (rand == 8) msg = "遺産100ドル受取る";
	if (rand == 9) msg = "休日基金の満期により100ドル受取る";
  if (rand == 10) msg = "生命保険満期により100ドル受取る";
	if (rand == 11) msg = "銀行の手違いで200ドル受取る";
	if (rand == 12) msg = "GOのマスへ進み200ドル受取る";
	if (rand == 13) msg = "刑務所から釈放される。このカードは必要になるまで持っていても又売却してもよい";
	if (rand == 14) msg = "刑務所に行く。GOを通っても200ドルは受取れない";
  if (rand == 15) msg = "道路の修理費として家1軒当たり40ドル、ホテル1軒当たり115ドル支払う";
	alert(msg);
}
