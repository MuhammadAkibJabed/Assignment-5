


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





    // get extra storage cost value

    let extraStorageCost = document.getElementById('extraStorageCost');
    let extraStorageCostText = extraStorageCost.innerText;
    let extraStorageCostNumber = parseInt(extraStorageCostText);


    // get best price value
    let basePrice = document.getElementById('basePrice');
    let basePriceText = basePrice.innerText;
    let basePriceNumber = parseInt(basePriceText);




    // get total price value
    let totalPrice = document.getElementById('totalPrice');
    let totalPriceText = totalPrice.innerText;
    let totalPriceNumber = parseInt(totalPriceText);
    let totalCost = totalPrice.innerText = basePriceNumber + extraProductCostNumber + extraStorageCostNumber;



    // get final price value
    let finalPrice = document.getElementById('finalPrice');
    let finalPriceText = finalPrice.innerText;
    let finalPriceNumber = parseInt(finalPriceText);

    finalPrice.innerText = totalCost;
    finalPriceNumber = totalCost;






    console.log(extraProductCostNumber);

}


function calculateTotal() {
    let basePrice = document.getElementById('basePrice');
    let basePriceText = basePrice.innerText;
    let basePriceNumber = parseInt(basePriceText);
    let extraProductCost = extraCost;

    // let extraMemoryCost = document.getElementById('extraMemoryCost');
    // let extraMemoryCostText = extraMemoryCost.innerText;
    // let extraMemoryCostNumber = parseInt(extraMemoryCostText);

    // let extraStorageCost = document.getElementById('extraStorageCost');
    // let extraStorageCostText = extraStorageCost.innerText;
    // let extraStorageCostNumber = parseInt(extraStorageCostText);

    // let extraDeliveryCost = document.getElementById('extraDeliveryCost');
    // let extraDeliveryCostText = extraDeliveryCost.innerText;
    // let extraDeliveryCostNumber = parseInt(extraDeliveryCostText);

    let totalPrice = document.getElementById('totalPrice');
    let totalPriceText = totalPrice.innerText;


    let totalPriceNumber = totalPrice.innerText = baseprice + extraProductCost;





}
function lowStorageCalculation() {
    let extraStorageCost = document.getElementById('extraStorageCost');
    let extraStorageCostText = extraStorageCost.innerText;
    let extraStorageCostNumber = parseInt(extraStorageCostText);
    if (extraStorageCostNumber > 0) {
        extraStorageCostNumber = 0;
    }
    extraStorageCost.innerText = extraStorageCostNumber;







    // hire  base price for calculating total price against 256gb storage click
    let basePrice = document.getElementById('basePrice');
    let basePriceText = basePrice.innerText;
    let basePriceNumber = parseInt(basePriceText);



    // hire  extra Memory cost for calculating total price against 256gb storage click
    let extraMemoryCost = document.getElementById('extraMemoryCost');
    let extraMemoryCostText = extraMemoryCost.innerText;
    let extraMemoryCostNumber = parseInt(extraMemoryCostText);


    // hire  extra Delivery cost for calculating total price against 256gb storage click

    let extraDeliveryCost = document.getElementById('extraDeliveryCost');
    let extraDeliveryCostText = extraDeliveryCost.innerText;
    let extraDeliveryCostNumber = parseInt(extraDeliveryCostText);




    // hire  total price for calculating total price against 256gb storage click
    let totalPrice = document.getElementById('totalPrice');
    let totalPriceText = totalPrice.innerText;
    let totalPriceNumber = parseInt(totalPriceText);
    let totalCost = totalPrice.innerText = basePriceNumber + extraMemoryCostNumber + extraDeliveryCostNumber + extraStorageCostNumber;

    // hire  final price for calculating total price against 256gb storage click
    let finalPrice = document.getElementById('finalPrice');
    let finalPriceText = finalPrice.innerText;
    let finalPriceNumber = parseInt(finalPriceText);

    finalPrice.innerText = totalCost;
    finalPriceNumber = totalCost;




    console.log(extraMemoryCostNumber);
    console.log(basePriceNumber);
    console.log(extraDeliveryCostNumber);
    console.log(totalCost);
    console.log(finalPriceNumber);













    console.log(extraStorageCostNumber)
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


    // hire  base price for calculating total price against 512 storage click
    let basePrice = document.getElementById('basePrice');
    let basePriceText = basePrice.innerText;
    let basePriceNumber = parseInt(basePriceText);



    // hire  extra Memory cost for calculating total price against 512 storage click
    let extraMemoryCost = document.getElementById('extraMemoryCost');
    let extraMemoryCostText = extraMemoryCost.innerText;
    let extraMemoryCostNumber = parseInt(extraMemoryCostText);


    // hire  extra Delivery cost for calculating total price against 512 storage click

    let extraDeliveryCost = document.getElementById('extraDeliveryCost');
    let extraDeliveryCostText = extraDeliveryCost.innerText;
    let extraDeliveryCostNumber = parseInt(extraDeliveryCostText);




    // hire  total price for calculating total price against 512 storage click
    let totalPrice = document.getElementById('totalPrice');
    let totalPriceText = totalPrice.innerText;
    let totalPriceNumber = parseInt(totalPriceText);
    let totalCost = totalPrice.innerText = basePriceNumber + extraMemoryCostNumber + extraDeliveryCostNumber + extraStorageCostNumber;

    // hire  final price for calculating total price against 512 storage click
    let finalPrice = document.getElementById('finalPrice');
    let finalPriceText = finalPrice.innerText;
    let finalPriceNumber = parseInt(finalPriceText);

    finalPrice.innerText = totalCost;
    finalPriceNumber = totalCost;




    console.log(extraMemoryCostNumber);
    console.log(basePriceNumber);
    console.log(extraDeliveryCostNumber);
    console.log(totalCost);
    console.log(finalPriceNumber);
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










    // hire  base price for calculating total price against 256gb storage click
    let basePrice = document.getElementById('basePrice');
    let basePriceText = basePrice.innerText;
    let basePriceNumber = parseInt(basePriceText);



    // hire  extra Memory cost for calculating total price against 1tb storage click
    let extraMemoryCost = document.getElementById('extraMemoryCost');
    let extraMemoryCostText = extraMemoryCost.innerText;
    let extraMemoryCostNumber = parseInt(extraMemoryCostText);


    // hire  extra Delivery cost for calculating total price against 1tb storage click

    let extraDeliveryCost = document.getElementById('extraDeliveryCost');
    let extraDeliveryCostText = extraDeliveryCost.innerText;
    let extraDeliveryCostNumber = parseInt(extraDeliveryCostText);




    // hire  total price for calculating total price against 1tb storage click
    let totalPrice = document.getElementById('totalPrice');
    let totalPriceText = totalPrice.innerText;
    let totalPriceNumber = parseInt(totalPriceText);
    let totalCost = totalPrice.innerText = basePriceNumber + extraMemoryCostNumber + extraDeliveryCostNumber + extraStorageCostNumber;

    // hire  final price for calculating total price against 1tb storage click
    let finalPrice = document.getElementById('finalPrice');
    let finalPriceText = finalPrice.innerText;
    let finalPriceNumber = parseInt(finalPriceText);

    finalPrice.innerText = totalCost;
    finalPriceNumber = totalCost;




    console.log(extraMemoryCostNumber);
    console.log(basePriceNumber);
    console.log(extraDeliveryCostNumber);
    console.log(totalCost);
    console.log(finalPriceNumber);















    console.log(extraStorageCostNumber)
}




document.getElementById('8Gb-memory-product').addEventListener('click', function () {
    // let extraProuctCost = document.getElementById('extraMemoryCost');
    // let extraProductCostText = extraProuctCost.innerText;
    // let extraProductCostNumber = parseInt(extraProductCostText);
    // let basePrice = document.getElementById('basePrice');
    // let basePriceText = basePrice.innerText;
    // let basePriceNumber = parseInt(basePriceText);
    // let totalPrice = document.getElementById('totalPrice');
    // let totalPriceText = totalPrice.innerText;
    // let totalPriceNumber = parseInt(totalPriceText);

    // let finalPrice = document.getElementById('finalPrice');
    // let finalPriceText = finalPrice.innerText;
    // let finalPriceNumber = parseInt(finalPriceText);
    // if (extraProuctCost.innerText > 0) {
    //     extraProuctCost.innerText = extraProductCostNumber - 180;
    //     basePrice.innerText = basePriceNumber - 180;
    //     totalPrice.innerText = totalPriceNumber - 180;
    //     finalPrice.innerText = finalPriceNumber - 180;
    // }



    updateBalance('extraMemoryCost', 180, false);

})
document.getElementById('16Gb-memory-product').addEventListener('click', function () {
    // let extraProuctCost = document.getElementById('extraMemoryCost');
    // let extraProductCostText = extraProuctCost.innerText;
    // let extraProductCostNumber = parseInt(extraProductCostText);

    // let basePrice = document.getElementById('basePrice');
    // let basePriceText = basePrice.innerText;
    // let basePriceNumber = parseInt(basePriceText);

    // let totalPrice = document.getElementById('totalPrice');
    // let totalPriceText = totalPrice.innerText;
    // let totalPriceNumber = parseInt(totalPriceText);


    // let finalPrice = document.getElementById('finalPrice');
    // let finalPriceText = finalPrice.innerText;
    // let finalPriceNumber = parseInt(finalPriceText);
    // if (extraProuctCost.innerText == 0) {
    //     extraProuctCost.innerText = extraProductCostNumber + 180;
    //     basePrice.innerText = basePriceNumber + 180;
    //     totalPrice.innerText = totalPriceNumber + 180;
    //     finalPrice.innerText = finalPriceNumber + 180;
    // }


    updateBalance('extraMemoryCost', 180, true);



})

document.getElementById('256Gb-storage-product').addEventListener('click', function () {
    lowStorageCalculation();

})
// document.getElementById('256Gb-storage-product').addEventListener('click', function () {
//     updateBalance('extraStorageCost', 180, true, true, true);

// })
document.getElementById('512Gb-storage-product').addEventListener('click', function () {
    middleStorageCalculation();
})
document.getElementById('1TB-storage-product').addEventListener('click', function () {
    highStorageCalculation();
})

document.getElementById('late-delivery-product').addEventListener('click', function () {
    updateBalance('extraDeliveryCost', 20, false);

})
document.getElementById('fast-delivery-product').addEventListener('click', function () {
    updateBalance('extraDeliveryCost', 20, true);

})