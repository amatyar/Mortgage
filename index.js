function Reset() {
  document.mortgage_form.amount.value="";
  document.mortgage_form.months.value="";
  document.mortgage_form.rate.value="";
  document.mortgage_form.additional.value="0";

  document.getElementById("mortgage_info").innerHTML="";
  document.getElementById("table").innerHTML="";
}
//----------------------------------------------------//
function endorse() {
  var amount = document.mortgage_form.amount.value;
  var months = document.mortgage_form.months.value;
  var rate = document.mortgage_form.rate.value;
  var additional = document.mortgage_form.additional.value;
  if(amount <= 0 || isNaN(Number(amount)) ){
    alert ("Please enter a valid amount Amount.");
    document.mortgage_form.amount.value = "";
  }
  else if (months <= 0 || parseInt(months) != months) {
    alert ("Please enter a valid months(Months).");
    document.mortgage_form.months.value = "";
  }
  else if (rate <= 0 || isNaN(Number(rate))) {
    alert("Please enter a valid rate Rate.");
    document.mortgage_form.rate.value = "";
  }
  else if (additional <= 0 || isNaN(Number(additional))) {
    alert("Please enter a valid additional Amount.");
    document.mortgage_form.additional.value="0";
  }
  else {
    calculate(parseFloat(amount), parseInt(months), parseFloat(rate), parseFloat(additional));
    alert("Validation completed");
  }
}

function calculate(amount, months, rate, additional) {
    i = rate/100;
    var installment = amount * (i/12)*Math.pow((1 + i/12), months)/(Math.pow((1+i/12),months)-1);


    var pro ="";
      pro += "<table width = '300'>";
      pro +="<tr><td>Loan Amount:</td>";
      pro +="<td align ='right'>$"+amount+"</td></tr>";
      pro +="<tr><td>Number of Months:</td>";
      pro +="<td align ='right'>"+months+"</td></tr>";

      pro +="<tr><td> Rate:</td>";
      pro +="<td align ='right'>$"+rate+"</td></tr>";

      pro +="<tr><td>Payment:</td>";
      pro +="<td align ='right'>$"+round(installment, 2)+"</td></tr>";

      pro +="<tr><td> additional Amount:</td>";
      pro +="<td align ='right'>$"+additional+"</td></tr>";

      pro +="<tr><td>Total Installment:</td>";
      pro +="<td align ='right'>$"+round(installment + additional, 2)+"</td></tr>";
      pro += "</table>";
  document.getElementById("mortgage_info").innerHTML= pro;

//-------------------------------------------------------------------------//

    var table ="";
    table +="<table cellpadding='15' border ='1' >";
    table +="<tr>";
    table +="<td width = '30'>0</td>";
    table +="<td width = '60'>&nbsp;</td>";
    table +="<td width = '60'>&nbsp;</td>";
    table +="<td width = '60'>&nbsp;</td>";
    table +="<td width = '85'>&nbsp;</td>";
    table +="<td width = '70'>"+round(amount,2)+"</td>";
    table +="</tr>";

var balance = amount;
var payCounter = 1;
var totalrate = 0;
//var additional = 0;
installment = installment + additional;
while (balance > 0 )
// create rows here
    {
      newrate= (i/12) * balance;
/*
   If (installment > balance){
        balance = installment - newrate;
      }
*/
      newBalance = installment - newrate;
      totalrate = totalrate + newrate;
      balance = balance - newBalance;

    table +="<tr>";
        table +="<td>"+payCounter+"</td>";
        table +="<td>"+round(installment,2)+"</td>";
        table +="<td>"+round(newBalance,2)+"</td>";
        table +="<td>"+round(newrate,2)+"</td>";
        table +="<td>"+round(totalrate,2)+"</td>";
        table +="<td>"+round(balance,2)+"</td>";
    table +="</tr>";

    payCounter++;
    }
    table += "</table>";
    document.getElementById("table").innerHTML = table;
}
function round(num, dec) {
  return (Math.round(num*Math.pow(10,dec))/Math.pow(10,dec)).toFixed(dec);
}
