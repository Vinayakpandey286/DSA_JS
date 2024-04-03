/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit =0
    let i =1
    let min= prices[0]

    while(i<prices.length){
        if(prices[i]-min>profit){
            profit=prices[i]-min
        }
        if(prices[i]<min){
            min=prices[i]
        }
        i++
    }
    return profit
};