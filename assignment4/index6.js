let userprompt=true;
let userinput=null;
let check=null;
let condition=null;
let userinput=Number(prompt("enter the number"));
console.log(userinput);
while(userprompt){
	check=userinput=null?true:false;
	userinput=Number(userinput);
	condition=(userinput>100 ||check)?userprompt=false:userinput=Number(prompt("enter a number again"));
}