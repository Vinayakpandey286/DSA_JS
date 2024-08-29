function getProfitablePairs(profit, implementationCost) {
    let profitablePairs = 0;
    let sortedProfit = profit.map((val, index) => [val - implementationCost[index], index]).sort((a, b) => a[0] - b[0]);

    let left = 0;
    let right = sortedProfit.length - 1;

    while (left < right) {
        if (sortedProfit[left][0] + sortedProfit[right][0] > 0) {
            profitablePairs += right - left;
            right--;
        } else {
            left++;
        }
    }

    return profitablePairs;
}
