import {bestSellingTv} from "../constants/inventory.js";


function FormattedPrice(price) {
    return ("€" + price + ",-");
}

const priceTV= bestSellingTv.price;
FormattedPrice(priceTV);

export default FormattedPrice;