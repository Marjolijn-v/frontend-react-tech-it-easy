import {bestSellingTv} from "../constants/inventory.js";

function productName() {
    const tvBrand = bestSellingTv.brand;
    const tvType = bestSellingTv.type;
    const tvName = bestSellingTv.name;
    const outcome = tvBrand + " " + tvType + " - " + tvName;
    return outcome;
}

export default productName;