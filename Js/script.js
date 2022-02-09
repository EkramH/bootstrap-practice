//Chnanging all h2 calor
let lightBlueH2 = document.getElementsByTagName('h2');
for(const h2 of lightBlueH2){
    h2.style.color = ('lightblue');
}

//Bakcgorund change with getElementById
document.getElementById('backpack-section').style.backgroundColor = ('tomato');

//Set card radious 30px with getElementsByClassName
let cardRadious = document.getElementsByClassName('card');
for(const card of cardRadious){
    card.style.borderRadius = ('30px');
}