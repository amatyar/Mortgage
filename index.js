
function reset() {
  document.mortgage_form.principle.value="";
  document.mortgage_form.periods.value="";
  document.mortgage_form.interest.value="";
  document.mortgage_form.additional.value="0";

  document.getElementById("mortgage_info").innerHTML="";
  document.getElementById("table").innerHTML="";
}
//----------------------------------------------------//
function endorse() {
  var principle = document.mortgage_form.principle.value;
  var periods = document.mortgage_form.periods.value;
  var interest = document.mortgage_form.interest.value;
  var additional = document.mortgage_form.additional.value;
  if(principle <= 0 || isNaN(Number(principle)) ){
    alert ("Please enter a valid Principle Amount.");
    document.mortgage_form.principle.value = "";
  }
  else if (periods <= 0 || parseInt(periods) != periods) {
    alert ("Please enter a valid Periods(Months).");
    document.mortgage_form.periods.value = "";
  }
  else if (interest <= 0 || isNaN(Number(interest))) {
    alert("Please enter a valid Interest Rate.");
    document.mortgage_form.interest.value = "";
  }
  else if (additional <= 0 || isNaN(Number(additional))) {
    alert("Please enter a valid Additional Amount.");
    document.mortgage_form.additional.value="0";
  }
  else {
    calculate(parseFloat(principle), parseInt(periods), parseFloat(interest), parseFloat(additional));
    alert("Validation completed");
  }
}

function calculate(principle, periods, interest, additional) {
    i = interest/100;
    var installment = principle * (i/12)*Math.pow((1 + i/12), periods)/(Math.pow((1+i/12),periods)-1);


    var pro ="";
      pro += "<table width = '250'>";
      pro +="<tr><td>Principle Amount:</td>";
      pro +="<td align ='right'>$"+principle+"</td></tr>";
      pro +="<tr><td>Number of Months:</td>";
      pro +="<td align ='right'>"+periods+"</td></tr>";

      pro +="<tr><td>Interest Rate:</td>";
      pro +="<td align ='right'>$"+interest+"</td></tr>";

      pro +="<tr><td>Installment:</td>";
      pro +="<td align ='right'>$"+round(installment, 2)+"</td></tr>";

      pro +="<tr><td> Additional Amount:</td>";
      pro +="<td align ='right'>$"+additional+"</td></tr>";

      pro +="<tr><td>Total Payment:</td>";
      pro +="<td align ='right'>$"+round(installment+additional, 2)+"</td></tr>";
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
    table +="<td width = '70'>"+round(loan_amt,2)+"</td>";
    table +="</tr>";

var balance = principle;
var payCounter = 1;
var totalInterest = 0;
installment = installment + additional;
while (balance > 0 )
// create rows here
    {
      newInterest= (i/12) * balance;
/*     If (monthly_payment > current_balance){
        monthly_payment = current_balance + towards_interest;
      } */
      newBalance = installment - newInterest;
      totalInterest = totalInterest + newInterest;
      balance = balance - newBalance;

    table +="<tr>";
        table +="<td>"+payCounter+"</td>";
        table +="<td>"+round(installment,2)+"</td>";
        table +="<td>"+round(newBalance,2)+"</td>";
        table +="<td>"+round(newInterest,2)+"</td>";
        table +="<td>"+round(totalInterest,2)+"</td>";
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
