// good credit score
// good credit score above 6-10
// bad credit score 1-5
// pending 5
// income
// high income >=50,000
// low income <50,000
// criminal record  yes or no
 
let User = prompt ("Enter Your FullName");
let Age = prompt ("What is your Age");

if(Age < 18){
    console.log("Not Eligible");
}else if(Age >= 18){
    console.log("Eligible to Apply");
}
let Income = prompt ("Enter Your Income");
if(Income < 50000){
    console.log("Sorry You Don't Qualify For a Loan RIght Now");
}else if (Age => 50000){
    console.log("You Qualify For a loan");
}
let Purpose= prompt("What is the Purpose For Your Loan")

let creditScore = 5;
if(creditScore < 5){
    console.log("Sorry you have a low Credit Score");
}else if ( creditScore{
    console.log("You Qualify For a loan");
}
let CriminalRecord = No;
if(CriminalRecord = Yes){
    console.log("Sorry you  don't qualify");
}else if (CriminalRecord= No){
    console.log("You Qualify For a loan");
}