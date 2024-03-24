// student grade generator

let marks = prompt("Please enter your marks:");
marks = Number(marks); // ensures all marks are numbers

function gradeCalculator(marks) {
    let grade;
    //if else and logical operators to compare grades and assign grades
    if ((marks < 0) || (marks > 100)){
        return `Enter a value between ${0} and ${100}`; //negative marks and marks above 100 are invalid
    }
    else{
        if (marks > 79) {
            grade = "A";
        }
        else if ((marks <= 79) && (marks > 59)) {
            grade = "B";
        }
        else if ((marks <= 59) && (marks > 49)) {
            grade = "C";
        }
        else if ((marks <= 49) && (marks >= 40)){
            grade = "D"
        }
        else{
            grade = "E"
        }
    }
    return grade
}
console.log(gradeCalculator(marks)); // invoking the function and printing the grade