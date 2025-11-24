import {bestSellingTv} from "../constants/inventory.js";

// function productName() {
//     const tvBrand = bestSellingTv.brand;
//     const tvType = bestSellingTv.type;
//     const tvName = bestSellingTv.name;
//     return `${tvBrand} ${tvType} - ${tvName}`;
// }

function productName(product) {
    let tvNames = '';

    for (let i = 0; i < product.length ; i++) {
        tvNames += `${product[i].brand} ${product[i].type} - ${product[i].name}`;

    }

    return tvNames;
}

// export function productNamesInventory() {
//
//     return `${inventory.brand} ${inventory.type} - ${inventory.name}`;
// }


export default productName;