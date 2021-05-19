const merlin = document.querySelector('.F9-engine-section');
const text = document.querySelector('.F9-merlin-notes');
const thurstkN =document.querySelector('#thrust-kN');
const thurstlbf =document.querySelector('#thrust-lbf');
const sealevelBtn = document.querySelector('#sea-level');
const vacuumBtn = document.querySelector('#vacuum');

//event listners

sealevelBtn.addEventListener('click', (e)=>{
    merlin.style.background='url(./images/Merlin.webp) no-repeat center top/cover'
    text.innerText='Merlin is a family of rocket engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse.';
    thurstkN.innerText='845kN / 190,000 lbf';
});

vacuumBtn.addEventListener('click',(e)=>{
    merlin.style.background='url(./images/MerlinVac.webp) no-repeat center top/cover'
    text.innerText='Merlin Vacuum features a larger exhaust section and a significantly larger expansion nozzle to maximize the engine’s efficiency in the vacuum of space. Its combustion chamber is regeneratively cooled, while the expansion nozzle is radiatively cooled. At full power, the Merlin Vacuum engine operates with the greatest efficiency ever for an American-made hydrocarbon rocket engine.';
    thurstkN.innerText='981kN / 220,500 lbf';
});