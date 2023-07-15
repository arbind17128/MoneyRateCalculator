var currencyOne=document.getElementById('currency-one');
var currencyTwo=document.getElementById('currency-two');
var amountOne=document.getElementById('amount-one');
var amountTwo=document.getElementById('amount-two');
var rate_El=document.getElementById('rate');
var swap=document.getElementById('swap');

// add event listener

currencyOne.addEventListener('change', cal);
currencyTwo.addEventListener('change', cal);
amountOne.addEventListener('input', cal);
amountTwo.addEventListener('input', cal);
swap.addEventListener('click', swapCurrency);


function cal() {
    var valueOfCurrencyOne = currencyOne.value;
    var valueOfCurrencyTwo = currencyTwo.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${valueOfCurrencyOne}` ).then(res => res.json())
    .then(data => {
        // console.log(data);
        rate=data.rates[valueOfCurrencyTwo];
        rate_El.innerText=`1 ${valueOfCurrencyOne}= ${rate} ${valueOfCurrencyTwo}`;
        amountTwo.value=(rate*amountOne.value).toFixed(2);
       

    })
}

function swapCurrency() {
    var tep= currencyOne.value;
    currencyOne.value=currencyTwo.value;
    currencyTwo.value=tep;
    cal();
}
