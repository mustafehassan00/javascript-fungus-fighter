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
let HP=100;
let apMeter=document.getElementById("ap-meter").value

let hpMeter=document.getElementById("hp-meter").value

//create a funciton for each button and 
//assign them AP cost & HP damage

function arcaneScepterAtk(event){
    event.preventDefault()
    let arcaneScepterAc= 12;
    let arcaneScepterHpDmg= 14;


    //test to see if arcaneScepterAc works when clicked 
    console.log('Arcane Scepter Attack Cost:',arcaneScepterAc);
    //test to see if arcaneScepterHpDmg works when clicked
    console.log('Arcane Scepter HP Damage:',arcaneScepterHpDmg);
}


function entangleAtk(event){
    event.preventDefault()
    let entanglerAc= 23;
    let entanglerHpDmg=9;

    
    //test to see if entanglerAC works when Clicked
    console.log('Entangler Attack Cost:',entanglerAc);
    //test to see if entanglerHpDmg works when clicked
    console.log('Entangler HP Damage:',entanglerHpDmg);
}


function dragonBladeAtk(event){
    event.preventDefault()
    let dragonBladeAc= 38;
    let dragonBladeHpDmg=47;


    //test to see if dragonBladeAc works when Clicked
    console.log('Dragon Blade Attack Cost:',dragonBladeAc);
    //test to see if dragonBladeHpDmg works when clicked
    console.log('Dragon Blade HP Damage:',dragonBladeHpDmg);
}


function starFireAtk(event){
    event.preventDefault()
    let starFireAc= 33;
    let starFireHpDmg=25;


    //test to see if starfireAC works when clicked 
    console.log('Star Fire Attack Cost:',starFireAc);
    //test to see if starFireHpDmg works when clicked
    console.log('Star Fire HP Damage:',starFireHpDmg);
}
