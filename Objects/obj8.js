// Inheriting the properties using Object.Create()
var absMobile={
    print:function(){
        console.log('printing');
    }
};

var m1=Object.create(absMobile,{
    width:{
        value:5,
       
    },
    height:{
        value:8
    }
});
m1.print=function(){
    console.log('new fun')
}
m1.print()
console.log(m1['height']) // printing 54