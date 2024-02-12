function calcGrad(agg){
    if(agg>=70){
        return 'distinction';
    }
    else if(agg>59 && agg<50){
        return 'first class';
    }else if(agg>49 && agg<40){
        return 'second class';
    }else if(agg>39 && agg<30){
        return 'Third Class'
    }else return  'Fail';
}

function calcAgg(marks){
    var markssecured=0;
    var totalmarks=marks.length*100
    for(var i=0;i<marks.length;i++){
        markssecured=markssecured+marks[i]
    }
    var agg=(markssecured/totalmarks)* 100
    return calcGrad(agg)
}
var res=calcAgg([50,60,70,80,65,82])
console.log("The aggregate is "+res);