// speed detector
const carSpeed = Number(prompt("Please enter your car speed:")); //ensures only numbers as inputs

function speedDetector(carSpeed) {
    const speedLimit = 70; //setting the speed limit
    let demeritPoint;
    if (carSpeed < 70) {
        console.log("Ok");
    }
    else{
        demeritPoint = ((carSpeed - speedLimit) / 5) * 1; //calculates demerits points
        if (demeritPoint < 12){
            console.log(`Points: ${demeritPoint}`);
        }
        else{
            console.log("License suspended"); //License suspension for points above 12
        }
    }
    return demeritPoint;
}

speedDetector(carSpeed); //invokes the function