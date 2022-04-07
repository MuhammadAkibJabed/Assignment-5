
// Get extra Memory cost
function getExtraMemoryCost() {
    let extraMemoryCost = document.getElementById('extraMemoryCost');
    let extraMemoryCostText = extraMemoryCost.innerText;
    let extraMemoryCostNumber = parseInt(extraMemoryCostText);
    return extraMemoryCostNumber;
}

// Get Extra Storage Cost
function getExtraStorageCost() {
    let extraStorageCost = document.getElementById('extraStorageCost');
    let extraStorageCostText = extraStorageCost.innerText;
    let extraStorageCostNumber = parseInt(extraStorageCostText);

    return extraStorageCostNumber;
}


// Get extra deliverly cost
function getExtraDeliveryCost() {
    let extraDeliveryCost = document.getElementById('extraDeliveryCost');
    let extraDeliveryCostText = extraDeliveryCost.innerText;
    let extraDeliveryCostNumber = parseInt(extraDeliveryCostText);
    return extraDeliveryCostNumber;
}

//  Get Base price
function getBasePriceValue() {
    let basePrice = document.getElementById('basePrice');
    let basePriceText = basePrice.innerText;
    let basePriceNumber = parseInt(basePriceText);
    return basePriceNumber;
}


// Get total price
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


// Get final Price
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



// Calculate extra Memory and delivery cost
function updateBalance(extraProductCost, price, isConfig) {

    // get extra memory and delivery cost
    let extraProuctCost = document.getElementById(extraProductCost);
    let extraProductCostText = extraProuctCost.innerText;
    let extraProductCostNumber = parseInt(extraProductCostText);


    // Calculate extra memory and delivery cost
    if (extraProductCostNumber == 0 && isConfig == true) {
        extraProductCostNumber = extraProuctCost.innerText = extraProductCostNumber + price;
    }

    else if (extraProductCostNumber > 0 && isConfig == false) {
        extraProductCostNumber = extraProuctCost.innerText = extraProductCostNumber - price;
    }
    getTotalPrice();
    getFinalPrice()

}





// Calculate extra storage cost for 256gb storage button
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

}



// Calculate extra storage cost for 512gb storage
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

    getTotalPrice();
    getFinalPrice();

}




// calculate extra storage cost for 1tb button
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

    getTotalPrice();
    getFinalPrice();

}



// 8gb memory  event handeler button
document.getElementById('8Gb-memory-product').addEventListener('click', function () {

    updateBalance('extraMemoryCost', 180, false);
})

// 16gb memory  event handeler button
document.getElementById('16Gb-memory-product').addEventListener('click', function () {

    updateBalance('extraMemoryCost', 180, true);
})


// 256gb storage  event handeler button
document.getElementById('256Gb-storage-product').addEventListener('click', function () {
    lowStorageCalculation();
})
// 512gb storage  event handeler button
document.getElementById('512Gb-storage-product').addEventListener('click', function () {
    middleStorageCalculation();
})


// 1tb storage  event handeler button
document.getElementById('1TB-storage-product').addEventListener('click', function () {
    highStorageCalculation();
})



// late delivery event handeler button
document.getElementById('late-delivery-product').addEventListener('click', function () {
    updateBalance('extraDeliveryCost', 20, false);
})



// first delivery event handeler button
document.getElementById('fast-delivery-product').addEventListener('click', function () {
    updateBalance('extraDeliveryCost', 20, true);
})




// discountButton work 
document.getElementById('discountButton').addEventListener('click', function () {
    let finalPrice = document.getElementById('finalPrice');
    let finalPriceText = finalPrice.innerText;
    let finalPriceNumber = parseInt(finalPriceText);
    let promoCodeInput = document.getElementById('discountFill');
    let promoCode = promoCodeInput.value;


    if (promoCodeInput.value == 'stevekaku') {
        finalCost = finalPriceNumber - finalPriceNumber * 0.2;
    }
    finalPrice.innerText = finalCost;


    promoCodeInput.value = '';
})