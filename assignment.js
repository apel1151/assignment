///////////////// Assignment no1>>> kilometer to meter/////////////////////////
// function kilometerToMeter(kilometer) {


//     if (kilometer < 0) {

//         return "Distance can't be negative.";

//     } else {
//         var meter = kilometer * 1000;
//         return meter;
//     }

// }

// var result1 = kilometerToMeter(-2);
// var result2 = kilometerToMeter(10);


// console.log(result1);
// console.log(result2);


//////////////////////// assignment no2>>>> budget calculator////////////////////////


// function budgetCalculator(watch, phone, laptop) {

//     if (watch < 0 || phone < 0 || laptop < 0) {
//         console.log("not a valid digit");

//     } else {
//         var watchPrice = watch * 50;
//         var phonePrice = phone * 100;
//         var laptopPrice = laptop * 500;
//     }


//     var totalPrice = watchPrice + phonePrice + laptopPrice;
//     return totalPrice;
// }

// var totalCost = budgetCalculator(1, 1, 1);
// console.log(totalCost, "$");

////////////////////////////////////////// assignment no3>>>> hotelCost///////////////////////////


// function hotelCost(day) {
//     var totalCost = 0;

//     if (day < 0) {
//         return "Staying in hotel can't be negative";
//     } else if (day <= 0 && day <= 10) {

//         totalCost = day * 100;
//     } else if (day > 10 && day <= 20) {
//         var firstCost = 10 * 100;
//         var extraDays = day - 10;
//         var secondCost = extraDays * 80;
//         totalCost = firstCost + secondCost;
//     } else {

//         var firstCost = 10 * 100;
//         var secondCost = 20 * 80;
//         var moreExtraDays = day - 20;
//         var thirdCost = moreExtraDays * 50;
//         totalCost = firstCost + secondCost + thirdCost;
//     }

//     return totalCost;

// }


// var totalRent = hotelCost(12);
// console.log(totalRent);


//////////////////////////////////// assignment no04>>>> megaFriends///////////////////////////


// friendsName = ["kamal", "jamal", "rahim", "apel"];

// function megaFriends(friendsName) {

//     var largetName = friendsName[0];
//     for (i = 0; i < friendsName.length; i++) {

//         var element = friendsName[i];

//         if (element > largetName) {
//             largetName = element;
//         }

//     }

//     return largetName;

// }

// var result = megaFriends(friendsName);
// console.log(result);