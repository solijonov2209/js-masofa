let elForm = document.querySelector(".js-form")
let elInput = document.querySelector(".js-input")
let elButton = document.querySelector(".js-btn")
let elPiyoda = document.querySelector(".js-strongP")
let elVelosiped = document.querySelector(".js-strongV")
let elMashina = document.querySelector(".js-strongM")
let elSamalyot = document.querySelector(".js-strongS")

let tezlikP = 3.6
let tezlikV = 20.1
let tezlikM = 70
let tezlikS = 800


elForm.addEventListener( "submit", function(evt){
evt.preventDefault();
let inputValue = +elInput.value;
let piyoda = inputValue / tezlikP;
let velosiped = inputValue / tezlikV;
let mashina = inputValue / tezlikM;
let samalyot = inputValue / tezlikS;

let piyodaMinut = ((piyoda%1)*60).toFixed(0)
let velosipedMinut = ((velosiped%1)*60).toFixed(0)
let mashinaMinut = ((mashina%1)*60).toFixed(0)
let samalyotMinut = ((samalyot%1)*60).toFixed(0)

elPiyoda.textContent=`${(piyoda).toFixed(0)}  soat ${piyodaMinut} daqiqa`
elVelosiped.textContent=`${(velosiped).toFixed(0)}  soat ${velosipedMinut} daqiqa`
elMashina.textContent=`${(mashina).toFixed(0)}  soat ${mashinaMinut} daqiqa`
elSamalyot.textContent=`${(samalyot).toFixed(0)}  soat ${samalyotMinut} daqiqa`




})



