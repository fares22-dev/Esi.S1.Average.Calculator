// if(window.innerWidth>=600){
// document.body.style.zoom = "115%"}else {document.body.style.zoom = "100%"}

let module ={
    mid:10,
    final:10,
    td:10,
    coeff :3, 
avrg:function () {
    return (this.mid+this.final+this.td)*this.coeff/3;
},

}

btn=document.getElementById("sub");
  btn.onclick=function (){
//!CREATION PART

let archi={
    mid:10,
    final:10,
    td:10,
    coeff :4,
avrg:function () {
    return (this.mid*0.2+this.final*0.3+this.td*0.5)*this.coeff;
}
}

let algo={
mid:10,
final:10,
td:10,
tp:10,
coeff :5,  
avrg:function () {
    return (((this.tp+this.td)/2)+this.mid+this.final)*this.coeff/3;
}
}

    let algebre= Object.create(module);

    let system=Object.create(archi);
    system.coeff=3;
    
    let elec=Object.create(module);
    
    let analyse=Object.create(module);
    analyse.coeff=5;
    
    let fr=Object.create(module);
    fr.coeff=2;
    
    let web=Object.create(module);
    web.coeff=1;


let modules=[analyse,algebre,algo,archi,system,elec,fr,web]
let mids=document.querySelectorAll(".mid");
let finals=document.querySelectorAll(".final");
let tds=document.querySelectorAll(".td");
   
for (let i=0;i<8;i++){
    modules[i].mid=parseInt(mids[i].value);
    modules[i].final=parseInt(finals[i].value);
    modules[i].td=parseInt(tds[i].value);

}
algo.tp=parseInt(document.getElementById("tp").value);

calcAvrg=function(){
    return (algo.avrg()+archi.avrg()+analyse.avrg()+algebre.avrg()+system.avrg()+elec.avrg()+web.avrg()+fr.avrg())/26
    }

let popup=document.querySelector(".popup");
document.querySelector(".maincontainer").style.visibility="hidden";
popup.style.transform="translate(-50%,-50%)";
let avrgplace=document.querySelector(".avrg");





if (calcAvrg()){
    avrgplace.style.fontSize="40px";
    avrgplace.style.color="#4fcdb9";
    avrgplace.style.top="50%" ;
    document.querySelector("h2").textContent="Your Average is"
    avrgplace.textContent=calcAvrg().toFixed(2);

    

} else{
    avrgplace.style.fontSize="14px";
    document.querySelector("h2").textContent=""
    document.querySelector(".avrgcontainer").style.transform="translate(-50%,-70%)"
    avrgplace.style.color="#ef5350";
    avrgplace.style.top="100%" ;
    avrgplace.textContent="Please Make Sure To Fill All The Fields Correctly";
}



let restart=document.querySelector(".restart");
restart.onclick= function () {
    document.querySelector(".maincontainer").style.visibility="visible";
    popup.style.transform="translate(-50%,-400%)";
    

}
 }


 var cleanup=document.querySelector(".cleanup");
 cleanup.onclick= function (){
    let anyinput=document.querySelectorAll("input")
console.log(anyinput.length)  
for (let i=0;i<=25;i++){
    anyinput[i].value=""
}



}





  













































// getmodinfo=function(obj,id){
// obj.mid=document.getElementById(id+"mid").value;
// obj.final=document.getElementById(id+"final").value;
// obj.td=document.getElementById(id+"td").value;
// if (id="algo") {
//     obj.tp=document.getElementById("algotp").value;
// }
// }



// modules=[analyse,algebre,algo,system,elec,archi,web,fr]