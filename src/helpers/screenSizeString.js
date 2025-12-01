
function screenSizeString(screenSizes) {
    let screenSizesString = "";

    for (let i = 0; i < screenSizes.length; i++) {
        const sizeInCm = screenSizes[i] * 2.54;

        if (screenSizes.length === 1 || i === screenSizes.length - 1) {
            screenSizesString += screenSizes[i] + " inches (" + Math.round(sizeInCm) + " cm)";
        } else {
            screenSizesString += screenSizes[i] + " inches (" + Math.round(sizeInCm) + " cm) | ";
        }
    }
    return screenSizesString;
}




export default screenSizeString;