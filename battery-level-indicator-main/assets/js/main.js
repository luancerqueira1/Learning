/*=============== BATTERY ===============*/

initBattery();

function initBattery() {
    const batteryLiquid = document.querySelector(".battery__liquid"),
        batteryStatus = document.querySelector(".battery__status"),
        batteryPercentage = document.querySelector(".battery__percentage");
    
    navigator.getBattery().then((batt) => {
      updateBattery = () => {
        /*1 we update the number level pf battery*/
        let level = Math.floor(batt.level * 100);
        batteryPercentage.innerHTML = level + "%";

        /*2 we update the background*/
        batteryLiquid.style.height = `${parseInt(batt.level * 100)}%`;

        /* we validate full batter , low if it is charging */
        if (level == 100) {
          /* we validate if the battery is full */
          batteryStatus.innerHTML = `Full Battery <i class="ri-battery-2-fill green-color"></i>`;
          batteryLiquid.style.height = "103%";
        } else if ((level <= 20) & !batt.charging) {
          /* We validate if the battery is low */
          batteryStatus.innerHTML = `Low battery <i class="ri-plug-line animated-red"></i>`;
        } else if (batt.charging) {
          batteryStatus.innerHTML =
            'charging... <i class="ri-flashlight-line animated-green"></i> ';
        } else {
          batteryStatus.innerHTML = "";
        }

        /* we change the colors of the battery and remove the others colors */
        if (level <= 20) {
          batteryLiquid.classList.add("gradient-color-red");
          batteryLiquid.classList.remove(
            "gradient-color-orange",
            "gradient-color-yellow",
            "gradient-color-green"
          );
        } else if (level <= 40) {
          batteryLiquid.classList.add("gradient-color-orange");
          batteryLiquid.classList.remove(
            "gradient-color-red",
            "gradient-color-yellow",
            "gradient-color-green"
          );
        } else if (level <= 80) {
          batteryLiquid.classList.add("gradient-color-yellow");
          batteryLiquid.classList.remove(
            "gradient-color-red",
            "gradient-color-orange",
            "gradient-color-green"
          );
        } else {
          batteryLiquid.classList.add("gradient-color-green");
          batteryLiquid.classList.remove(
            "gradient-color-red",
            "gradient-color-orange",
            "gradient-color-yellow"
          );
        }
      };
      updateBattery();

        /*batery status events  */
        batt.addEventListener('chargingchange', (updateBattery) => {

        })
        batt.addEventListener('levelchange', (updateBattery) => {

        })
    }) 
}