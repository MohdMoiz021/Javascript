// If else if ladder

function calagg(agg){
    var agg;
    if(agg>=70){
        console.log("Excellent!");
    }else if(agg>50 && agg<70){
        console.log("Very Good");
    }else if(agg>49 && agg<60){
        console.log("Good Job");
    }else if(agg>39 && agg<50){
        console.log("Passed");
    }
    else{
        console.log("Failed")
    }
}
calagg(50);