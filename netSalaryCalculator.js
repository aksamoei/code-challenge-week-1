// calculating Net Pay from Gross Pay
// use four functions to handle each section

const basicSalary = Number(prompt("Please input your Gross Salary:")); //ensures user prompts are numbers
let grossSalary = basicSalary; //assumption is that we don't have bonuses, allowances

// nssf calculator (uses the updated figures from feb 2024)
function nssfCalculator(basicSalary) {
    let tier1 = 7000;
    let tier2 = 36000;
    let nssfRate = 0.06;
    let nssf;
    let tier1Nssf; //nssf is paid in two tiers
    let tier2Nssf;
     if (basicSalary <= tier1){
        tier1Nssf = tier1 * nssfRate;
        nssf = tier1Nssf //salary below 7000 only pay one tier
     }
     else if (basicSalary < tier2){
        tier1Nssf = tier1 * nssfRate;
        tier2Nssf = (basicSalary - tier1) * nssfRate;
        nssf = tier1Nssf + tier2Nssf; //two tiers to get the total nssf
     }
     else{
        tier1Nssf = tier1 * nssfRate;
        tier2Nssf = (tier2 - tier1) * nssfRate; // nssf payments are same for above 36000 salary
        nssf = tier1Nssf + tier2Nssf;
     }
    return nssf;
}


// nhif calculator 
function nhifCalculator(basicSalary) {
    let nhif;
    // compare the basic salary to the nhif limit and assign nhif amount
    if (basicSalary <= 5999){
        nhif = 150;
    }
    else if (basicSalary < 8000){
        nhif = 300;
    }
    else if (basicSalary < 12000){
        nhif = 400;
    }
    else if (basicSalary < 15000){
        nhif = 500;
    }
    else if (basicSalary < 20000){
        nhif = 600;
    }
    else if (basicSalary < 25000){
        nhif = 750;
    }
    else if (basicSalary < 30000){
        nhif = 850;
    }
    else if (basicSalary < 35000){
        nhif = 900;
    }
    else if (basicSalary < 40000){
        nhif = 950;
    }
    else if (basicSalary < 45000){
        nhif = 1000;
    }
    else if (basicSalary < 50000){
        nhif = 1100;
    }
    else if (basicSalary < 60000){
        nhif = 1200;
    }
    else if (basicSalary < 70000){
        nhif = 1300;
    }
    else if (basicSalary < 80000){
        nhif = 1400;
    }
    else if (basicSalary < 90000){
        nhif = 1500;
    }
    else if (basicSalary < 100000){
        nhif = 1600;
    }
    else{
        nhif = 1700;
    }
    return nhif;
}

// Payee calculator (excludes minor(optional) deductions)
function payeeCalculator(basicSalary) {
    let contributionBenefit = nssfCalculator(basicSalary); //nssf relief
    let personalRelief = 2400;
    let insuranceRelief = (15 / 100) * nhifCalculator(basicSalary); // nhif relief
    let taxrate;
    let taxPay;
    let payee;
    let taxBrackets = [24000, 32333, 500000, 800000]; //stores the taxable income limits
    let taxableIncome = basicSalary - contributionBenefit; 
    let firstPay = taxBrackets[0] * (10 / 100);
    let secondPay = (taxBrackets[1] - taxBrackets[0]) * (25 / 100);
    let thirdPay = (taxBrackets[2] - taxBrackets[1]) * (30 / 100);
    let fourthPay = (taxBrackets[3] - taxBrackets[2]) * (32.5 / 100);
    
    //taxrate is appliable on the taxableincome. Each tax bracket is handled.
    if (taxableIncome <= taxBrackets[0]){
        taxrate = 10 / 100;
        taxPay = taxrate * taxableIncome;
    }
    else if (taxableIncome <= taxBrackets[1]){
        taxrate = 25 / 100;
        taxPay = firstPay + ((taxableIncome - taxBrackets[0]) * taxrate);
    }
    else if (taxableIncome <= taxBrackets[2]){
        taxrate = 30 / 100;
        taxPay = (firstPay + secondPay) + ((taxableIncome - taxBrackets[1]) * taxrate);
    }
    else if (taxableIncome <= taxBrackets[3]){
        taxrate = 32.5 / 100;
        taxPay = firstPay + secondPay + thirdPay + ((taxableIncome - taxBrackets[2]) * taxrate);
    }
    else{
        taxrate = 35 / 100;
        taxPay = firstPay + secondPay + thirdPay + fourthPay + ((taxableIncome - taxBrackets[3]) * taxrate);
    }
    // subtract the reliefs from taxpay to get payee
    payee = taxPay - (personalRelief + insuranceRelief);
    // payee is 0 for earnings below 24000
    if (payee < 0){
        payee = 0;
    }
    return payee;
}

//net pay calculator
function netPayCalculator(basicSalary){
    let netPay;
    let deductions;
    let myNssf = nssfCalculator(basicSalary);
    let myNhif = nhifCalculator(basicSalary);
    let myPayee = payeeCalculator(basicSalary);
    deductions = myNhif + myPayee + myNssf;
    

    //net pay is gross minus deductions
    netPay = grossSalary - deductions;
    return netPay
}

console.log(netPayCalculator(basicSalary)); //invokes the function and prints to console


