/*=============== BATTERY ===============*/

initBattery();

function initBattery() {
    const batteryLiquid = document.querySelector(".battery__liquid"),
        batteryStatus = document.querySelector(".battery__status"),
        batteryPercentage = document.querySelector(".battery__percentage");
    
    navigator.getBattery().then((batt) => {
        updateBattery = () => {
            
        }
    })
    
    
}