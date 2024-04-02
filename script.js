// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

// function onReady() {
//     console.log("Ready to go!")
    
//     // Make sure you check the index.html file! 
//     // There are lots of buttons and things ready for you to hook into here!
    
    
//     // 🧠 Remember
//     // - Handle events that ->
//     // - Updates state which is ->
//     // - Rendered to the DOM
// }


// onReady()


// check to see if script is sourced and working.
console.log('Js');
//Global Variables
let apMeter=document.getElementById("ap-meter").value

let hpMeter=document.getElementById("hp-meter").value

//create a funciton for each button and 
//assign them AP cost & HP damage

function arcaneScepterAtk(event){
    //set Variable values to the Attack Cost and the HP Dmg
    event.preventDefault()
    let attackCostPoints= 12;
    // attackCost-=12;
    let apMeter= Number(document.getElementById("ap-meter").textContent);
    let hpDmg= 14;
    


    //test to see if arcaneScepterAc works when clicked 
    console.log('Arcane Scepter Attack Cost:',attackCostPoints);
    //test to see if arcaneScepterHpDmg works when clicked
    console.log('Arcane Scepter HP Damage:',hpDmg);
    // console.log('Fungus Health:', (hpDmg,hpMeter));
    attackCost(attackCostPoints,apMeter)
    hpCost(hpDmg,hpMeter)
}


function entangleAtk(event){
    //set Variable values to the Attack Cost and the HP Dmg
    event.preventDefault()
    let attackCostPoints= 23;
    let hpDmg=9;

    
    //test to see if entanglerAC works when Clicked
    console.log('Entangler Attack Cost:',attackCostPoints);
    //test to see if entanglerHpDmg works when clicked
    console.log('Entangler HP Damage:',hpDmg);
    attackCost(attackCostPoints,apMeter)
    hpCost(hpDmg,hpMeter)

    
}


function dragonBladeAtk(event){
    //set Variable values to the Attack Cost and the HP Dmg
    event.preventDefault()
    let attackCostPoints= 38;
    let hpDmg=47;


    //test to see if dragonBladeAc works when Clicked
    console.log('Dragon Blade Attack Cost:',attackCostPoints);
    //test to see if dragonBladeHpDmg works when clicked
    console.log('Dragon Blade HP Damage:',hpDmg);
    attackCost(attackCostPoints,apMeter)
    hpCost(hpDmg,hpMeter)
}


function starFireAtk(event){
    //set Variable values to the Attack Cost and the HP Dmg
    event.preventDefault()
    let attackCostPoints= 33;
    let hpDmg=25;


    //test to see if starfireAC works when clicked 
    console.log('Star Fire Attack Cost:',attackCostPoints);
    //test to see if starFireHpDmg works when clicked
    console.log('Star Fire HP Damage:',hpDmg);
    attackCost(attackCostPoints,apMeter)
    hpCost(hpDmg,hpMeter)
}

//create a function to subtract attack cost from the AP meter
function attackCost(attackCostPoints,apMeter){
  if (attackCostPoints>=apMeter){
    apMeter-=attackCostPoints;
    document.getElementById("ap-meter").value = apMeter;
    console.log('Attack Points are being taken away!',apMeter);
    return apMeter;
} else {
    console.log('Not Enough Attack Points :(',apMeter)

}

}
function hpCost(hpDmg,hpMeter){
    if (hpDmg<=hpMeter){
      hpMeter-=hpDmg;
      document.getElementById("hp-meter").value = hpMeter;
      console.log('Health Points are being taken away!',hpMeter);
      return hpMeter;
  } else {
      console.log('Not Enough Strong Enough :(',hpMeter)
  
  }
  
  }
  
