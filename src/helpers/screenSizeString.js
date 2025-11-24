import {bestSellingTv} from "../constants/inventory.js";


function screenSizeString() {
    let screenSizesString = "";
    const screenSizeArray = bestSellingTv.availableSizes;

    for (let i = 0; i < screenSizeArray.length; i++) {
        const sizeInCm = screenSizeArray[i] * 2.54;

        if (screenSizeArray.length === 1 || i === screenSizeArray.length - 1) {
            screenSizesString += screenSizeArray[i] + " inches (" + Math.round(sizeInCm) + " cm)";
        } else {
            screenSizesString += screenSizeArray[i] + " inches (" + Math.round(sizeInCm) + " cm) | ";
        }
    }
    return screenSizesString;
}




export default screenSizeString;