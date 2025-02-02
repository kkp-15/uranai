const zodiacSigns = [
    "おひつじ座", "おうし座", "ふたご座", "かに座",
    "しし座", "おとめ座", "てんびん座", "さそり座",
    "いて座", "やぎ座", "みずがめ座", "うお座"
];

const luckyItems = ["スマホ", "ハンカチ", "本", "時計", "カフェラテ", "音楽"];
const luckyColors = ["赤", "青", "緑", "黄色", "ピンク", "オレンジ", "紫"];

function showFortune() {
    let shuffledSigns = [...zodiacSigns].sort(() => Math.random() - 0.5);

    let resultHTML = "<h2>今日の星座ランキング</h2>";
    shuffledSigns.forEach((sign, index) => {
        let luckyItem = luckyItems[Math.floor(Math.random() * luckyItems.length)];
        let luckyColor = luckyColors[Math.floor(Math.random() * luckyColors.length)];
        resultHTML += `<p>${index + 1}位: ${sign} - 🎁ラッキーアイテム: ${luckyItem} | 🎨ラッキーカラー: ${luckyColor}</p>`;
    });

    document.getElementById("result").innerHTML = resultHTML;
}
