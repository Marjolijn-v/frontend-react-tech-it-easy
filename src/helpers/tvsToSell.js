import purchasedTVs from "./purchasedTVs.js";
import totalSoldTVs from "./soldTVs.js";


function tvsToSell() {
    const stock = purchasedTVs();
    const sold = totalSoldTVs();
    const toSell = stock - sold;
    return toSell;
}

export default tvsToSell;