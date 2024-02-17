console.log('this is js');

function makeBlue() {
    document.body.style.backgroundColor = 'steelblue';
}

const makeGolden = document.getElementById("goldenRod");
makeGolden.onclick = goldRod;
function goldRod() {
    document.body.style.backgroundColor = "goldenrod";
}

const makePurple = document.getElementById("purple");
makePurple.onclick = function () {
    document.body.style.backgroundColor = "purple";
};