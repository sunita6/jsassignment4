function ask(question,yes,no){
if(confirm(question))yes()
else no();
}
ask(
  "Do yo agree?",
  () => alert("you agreed."),
  () => alert("you canceled the execution.")
);