let input=document.getElementById("input-field");
let btn=document.getElementById("btn-generator");
btn.addEventListener("click",function(){
    JsBarcode("#barcode",input.value,{
        lineColor:"#0aa",
        width:4,
        height:40,
        displayValue:true
    });

});
window.onload=(event)=>{
    input.value="";
}