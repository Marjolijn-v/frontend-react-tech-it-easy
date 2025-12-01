

function productName(tv) {
    const tvBrand = tv.brand;
    const tvType = tv.type;
    const tvName = tv.name;
    return `${tvBrand} ${tvType} - ${tvName}`;
}


export default productName;