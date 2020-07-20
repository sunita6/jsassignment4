let sales=Number(prompt("enter the sales"));
let commission,compercent=null;
if(sales>0&&sales<=5000){
  compercent=2;
  commission=sales*(compercent/100);
}
else if(sales>=5001&&sales<=10000){
  compercent=5;
  commission=sales*(compercent/100);
}
else if(sales>10001&&sales<=20000){
  compercent=7;
  commission=sales*(compercent/100);
}
else{
  console.log('INVALID INPUT');
  alert("INVALID");
}
//console.log(commission.tofixed(3))
console.log(`as per total sales.${sales},ur ${compercent}% commission is ${commission}.`);
alert(`as per ur total sales:${sales},ur ${compercent}% commission is ${commission}.`);