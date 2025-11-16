import {bestSellingTv, inventory} from "../constants/inventory.js";

function purchasedTVs() {
    let stock = 0;

    for (let i = 0; i < inventory.length; i++) {
         stock += inventory[i].originalStock;
    }

    const purchasedTVs= stock + bestSellingTv.originalStock;
    return purchasedTVs;
}



export default purchasedTVs;