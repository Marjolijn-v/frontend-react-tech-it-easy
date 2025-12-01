import {bestSellingTv, inventory} from "../constants/inventory.js";

function totalSoldTVs() {
    let soldTVs = 0;

    for (let i = 0; i < inventory.length; i++) {
        soldTVs += inventory[i].sold;
    }

    const totalSoldTVs = soldTVs + bestSellingTv.sold;
    return totalSoldTVs;
}



export default totalSoldTVs;