import { inventory } from './inventory.js';


const oneA = inventory.map((stock) => {
    return stock.name
})


const oneB = inventory.filter((stock) => {
    return stock.originalStock === stock.sold;
})


const oneC = inventory.find((stock) => {
    return stock.type === "NH3216SMART";
})


const oneD = inventory.map((stock) => {
    if (stock.refreshRate >= 100) {
        return stock.name + ", " + stock.type + " suitable: true"
    } else {
        return stock.name + ", " + stock.type + " suitable: false"
    }
});


const oneE = inventory.filter((stock) => {
    for (let i = 0; i < stock.availableSizes.length; i++) {
        if (stock.availableSizes[i] >= 65) {
            return stock;
        }
    }
})


const oneF = inventory.filter((stock) => {
    const hasAmbiLight = stock.options.some(option => option.name === "ambilight" && option.applicable === true);
    return hasAmbiLight
})




function showOutcomeInConsole() {
    // console.log("opdracht 1a");
    // console.log(oneA);
    // console.log("opdracht 1b");
    // console.log(oneB);
    // console.log("opdracht 1c");
    // console.log(oneC);
    // console.log("opdracht 1d");
    // console.log(oneD);
    // console.log("opdracht 1e");
    // console.log(oneE);
    // console.log("opdracht 1f");
    // console.log(oneF);

}

export default showOutcomeInConsole;