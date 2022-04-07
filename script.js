function getExtraMemoryCost() {
    let extraMemoryCost = document.getElementById('extraMemoryCost');
    let extraMemoryCostText = extraMemoryCost.innerText;
    let extraMemoryCostNumber = parseInt(extraMemoryCostText);
    return extraMemoryCostNumber;
}
function getExtraStorageCost() {
    let extraStorageCost = document.getElementById('extraStorageCost');
    let extraStorageCostText = extraStorageCost.innerText;
    let extraStorageCostNumber = parseInt(extraStorageCostText);

    return extraStorageCostNumber;
}
function getExtraDeliveryCost() {
    let extraDeliveryCost = document.getElementById('extraDeliveryCost');
    let extraDeliveryCostText = extraDeliveryCost.innerText;
    let extraDeliveryCostNumber = parseInt(extraDeliveryCostText);
    return extraDeliveryCostNumber;
}
function getBasePriceValue() {
    let basePrice = document.getElementById('basePrice');
    let basePriceText = basePrice.innerText;
    let basePriceNumber = parseInt(basePriceText);
    return basePriceNumber;
}
function getTotalPrice() {
    let extraMemoryCost = getExtraMemoryCost();
    let extraStorageCost = getExtraStorageCost();
    let extraDeliveryCost = getExtraDeliveryCost();
    let basePrice = getBasePriceValue();



    let totalPrice = document.getElementById('totalPrice');
    let totalPriceText = totalPrice.innerText;
    let totalPriceNumber = parseInt(totalPriceText);
    let totalCost = totalPrice.innerText = extraMemoryCost + extraStorageCost + extraDeliveryCost + basePrice;
    return totalCost;
}
function getFinalPrice() {
    let extraMemoryCost = getExtraMemoryCost();
    let extraStorageCost = getExtraStorageCost();
    let extraDeliveryCost = getExtraDeliveryCost();
    let basePrice = getBasePriceValue();

    let finalPrice = document.getElementById('finalPrice');
    let finalPriceText = finalPrice.innerText;
    let finalPriceNumber = parseInt(finalPriceText);
    let finalCost = finalPrice.innerText = extraMemoryCost + extraStorageCost + extraDeliveryCost + basePrice;
    return finalCost;
}




function updateBalance(extraProductCost, price, isConfig) {

    // get extra memory and delivery cost
    let extraProuctCost = document.getElementById(extraProductCost);
    let extraProductCostText = extraProuctCost.innerText;
    let extraProductCostNumber = parseInt(extraProductCostText);
    if (extraProductCostNumber == 0 && isConfig == true) {
        extraProductCostNumber = extraProuctCost.innerText = extraProductCostNumber + price;
    }

    else if (extraProductCostNumber > 0 && isConfig == false) {
        extraProductCostNumber = extraProuctCost.innerText = extraProductCostNumber - price;
    }



    getTotalPrice();
    getFinalPrice()

    // // get extra storage cost value


    // let extraStorageCost = getExtraStorageCost();


    // // get best price value

    // let basePrice = getBasePriceValue();



    // // get total price value
    // let totalCost = getTotalPrice();



    // // get final price value

    // let x = getFinalPrice();
    // console.log(x);





    // // console.log(extraProductCostNumber);
    // return extraProductCostNumber;
}



// function getExtraStorageCost() {
//     let extraStorageCost = document.getElementById('extraStorageCost');
//     let extraStorageCostText = extraStorageCost.innerText;
//     let extraStorageCostNumber = parseInt(extraStorageCostText);

//     return extraStorageCostNumber;
// }



function lowStorageCalculation() {
    let extraStorageCost = document.getElementById('extraStorageCost');
    let extraStorageCostText = extraStorageCost.innerText;
    let extraStorageCostNumber = parseInt(extraStorageCostText);
    if (extraStorageCostNumber > 0) {
        extraStorageCostNumber = 0;
    }
    extraStorageCost.innerText = extraStorageCostNumber;




    getTotalPrice();
    getFinalPrice()


    // // hire  base price for calculating total price against 256gb storage click
    // let basePrice = document.getElementById('basePrice');
    // let basePriceText = basePrice.innerText;
    // let basePriceNumber = parseInt(basePriceText);



    // // hire  extra Memory cost for calculating total price against 256gb storage click
    // let extraMemoryCost = document.getElementById('extraMemoryCost');
    // let extraMemoryCostText = extraMemoryCost.innerText;
    // let extraMemoryCostNumber = parseInt(extraMemoryCostText);


    // // hire  extra Delivery cost for calculating total price against 256gb storage click






    // // hire  total price for calculating total price against 256gb storage click
    // let totalPrice = document.getElementById('totalPrice');
    // let totalPriceText = totalPrice.innerText;
    // let totalPriceNumber = parseInt(totalPriceText);
    // let totalCost = totalPrice.innerText = basePriceNumber + extraMemoryCostNumber + extraDeliveryCostNumber + extraStorageCostNumber;

    // // hire  final price for calculating total price against 256gb storage click
    // let finalPrice = document.getElementById('finalPrice');
    // let finalPriceText = finalPrice.innerText;
    // let finalPriceNumber = parseInt(finalPriceText);

    // finalPrice.innerText = totalCost;
    // finalPriceNumber = totalCost;




    // // console.log(extraMemoryCostNumber);
    // // console.log(basePriceNumber);
    // // console.log(extraDeliveryCostNumber);
    // // console.log(totalCost);
    // // console.log(finalPriceNumber);













    // // console.log(extraStorageCostNumber)
}
function middleStorageCalculation() {
    let extraStorageCost = document.getElementById('extraStorageCost');
    let extraStorageCostText = extraStorageCost.innerText;
    let extraStorageCostNumber = parseInt(extraStorageCostText);
    if (extraStorageCostNumber == 0) {
        extraStorageCostNumber = extraStorageCostNumber + 100;
    }
    else if (extraStorageCostNumber == 180) {
        extraStorageCostNumber = 100;
    }

    extraStorageCost.innerText = extraStorageCostNumber;


    // // hire  base price for calculating total price against 512 storage click
    // let basePrice = document.getElementById('basePrice');
    // let basePriceText = basePrice.innerText;
    // let basePriceNumber = parseInt(basePriceText);



    // // hire  extra Memory cost for calculating total price against 512 storage click
    // let extraMemoryCost = document.getElementById('extraMemoryCost');
    // let extraMemoryCostText = extraMemoryCost.innerText;
    // let extraMemoryCostNumber = parseInt(extraMemoryCostText);


    // // hire  extra Delivery cost for calculating total price against 512 storage click

    // let extraDeliveryCost = document.getElementById('extraDeliveryCost');
    // let extraDeliveryCostText = extraDeliveryCost.innerText;
    // let extraDeliveryCostNumber = parseInt(extraDeliveryCostText);




    // // hire  total price for calculating total price against 512 storage click
    // let totalPrice = document.getElementById('totalPrice');
    // let totalPriceText = totalPrice.innerText;
    // let totalPriceNumber = parseInt(totalPriceText);
    // let totalCost = totalPrice.innerText = basePriceNumber + extraMemoryCostNumber + extraDeliveryCostNumber + extraStorageCostNumber;

    // // hire  final price for calculating total price against 512 storage click
    // let finalPrice = document.getElementById('finalPrice');
    // let finalPriceText = finalPrice.innerText;
    // let finalPriceNumber = parseInt(finalPriceText);

    // finalPrice.innerText = totalCost;
    // finalPriceNumber = totalCost;




    // // console.log(extraMemoryCostNumber);
    // // console.log(basePriceNumber);
    // // console.log(extraDeliveryCostNumber);
    // // console.log(totalCost);
    // // console.log(finalPriceNumber);

    getTotalPrice();
    getFinalPrice();

}





function highStorageCalculation() {
    let extraStorageCost = document.getElementById('extraStorageCost');
    let extraStorageCostText = extraStorageCost.innerText;
    let extraStorageCostNumber = parseInt(extraStorageCostText);
    if (extraStorageCostNumber == 0) {
        extraStorageCostNumber = 180;
    }
    else if (extraStorageCostNumber == 100) {
        extraStorageCostNumber = 180;
    }
    extraStorageCost.innerText = extraStorageCostNumber;










    // // hire  base price for calculating total price against 256gb storage click
    // let basePrice = document.getElementById('basePrice');
    // let basePriceText = basePrice.innerText;
    // let basePriceNumber = parseInt(basePriceText);



    // // hire  extra Memory cost for calculating total price against 1tb storage click
    // let extraMemoryCost = document.getElementById('extraMemoryCost');
    // let extraMemoryCostText = extraMemoryCost.innerText;
    // let extraMemoryCostNumber = parseInt(extraMemoryCostText);


    // // hire  extra Delivery cost for calculating total price against 1tb storage click

    // let extraDeliveryCost = document.getElementById('extraDeliveryCost');
    // let extraDeliveryCostText = extraDeliveryCost.innerText;
    // let extraDeliveryCostNumber = parseInt(extraDeliveryCostText);




    // // hire  total price for calculating total price against 1tb storage click
    // let totalPrice = document.getElementById('totalPrice');
    // let totalPriceText = totalPrice.innerText;
    // let totalPriceNumber = parseInt(totalPriceText);
    // let totalCost = totalPrice.innerText = basePriceNumber + extraMemoryCostNumber + extraDeliveryCostNumber + extraStorageCostNumber;

    // // hire  final price for calculating total price against 1tb storage click
    // let finalPrice = document.getElementById('finalPrice');
    // let finalPriceText = finalPrice.innerText;
    // let finalPriceNumber = parseInt(finalPriceText);

    // finalPrice.innerText = totalCost;
    // finalPriceNumber = totalCost;




    // // console.log(extraMemoryCostNumber);
    // // console.log(basePriceNumber);
    // // console.log(extraDeliveryCostNumber);
    // // console.log(totalCost);
    // // console.log(finalPriceNumber);















    // // console.log(extraStorageCostNumber)



    getTotalPrice();
    getFinalPrice();

}




document.getElementById('8Gb-memory-product').addEventListener('click', function () {

    updateBalance('extraMemoryCost', 180, false);




})
document.getElementById('16Gb-memory-product').addEventListener('click', function () {

    updateBalance('extraMemoryCost', 180, true);


})

document.getElementById('256Gb-storage-product').addEventListener('click', function () {
    lowStorageCalculation();

})

document.getElementById('512Gb-storage-product').addEventListener('click', function () {
    middleStorageCalculation();


})
document.getElementById('1TB-storage-product').addEventListener('click', function () {
    highStorageCalculation();


})

document.getElementById('late-delivery-product').addEventListener('click', function () {
    updateBalance('extraDeliveryCost', 20, false);
    getTotalPrice();


})
document.getElementById('fast-delivery-product').addEventListener('click', function () {
    updateBalance('extraDeliveryCost', 20, true);
    getTotalPrice();

})