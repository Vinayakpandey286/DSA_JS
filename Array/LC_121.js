/**
 * @param {number[]} prices
 * @return {number}
 */

// Best time to Buy a Stock
var maxProfit = function (prices) { //[7,1,5,3,6,4]
  let profit = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    // can i sell?
    if (prices[i] > min) {
      // you can sell but check if it better profit than previous one
      profit = Math.max(profit, prices[i] - min);
    }
    // can i buy?
    if (prices[i] < min) {
      min = prices[i];
    }
  }

  // while(i<prices.length){
  //     if(prices[i]-min>profit){
  //         profit=prices[i]-min
  //     }
  //     if(prices[i]<min){
  //         min=prices[i]
  //     }
  //     i++
  // }
  return profit;
};
