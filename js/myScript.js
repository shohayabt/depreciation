var submitButton = document.getElementById("submit-button");
var purchaseValue = document.getElementById('purchase-money');
var wreckageValue = document.getElementById('wreckage-value');
var lifeSpan = document.getElementById('life-span');
var result = document.getElementById('display-result');
submitButton = submitButton.addEventListener("click", function(){
    purchaseValue = purchaseValue.value;
    purchaseValue = parseFloat(purchaseValue);
    // console.log(purchaseValue);
    wreckageValue = wreckageValue.value;
    wreckageValue = parseFloat(wreckageValue);
    // console.log(wreckageValue)
    obochoyJoggoMullo = purchaseValue-wreckageValue;
    // console.log(obochoyJoggoMullo);
    lifeSpan = lifeSpan.value;
    lifeSpan = parseFloat(lifeSpan);
    // console.log(lifeSpan);
    var mathResult = obochoyJoggoMullo / lifeSpan;
    // console.log(typeof mathResult);
    // console.log(mathResult);
    result.innerHTML = mathResult;
})
