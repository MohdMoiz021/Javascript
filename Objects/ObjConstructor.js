function Mobile(){
    this.width=50;
    this.height=70;
    this.length=5;

    this.print=function(){
        console.log('Prinitng',this.length,this.height)
    }
}
Mobile()