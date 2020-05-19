const StockSpanner = () => {
  this.prices = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = (price) => {
  let weight = 1;
  const yesterdayIndex = this.prices.length - 1;
  const yesterdayPrice = this.prices[yesterdayIndex][0];

  while (this.prices.length && price >= yesterdayPrice) {
    weight += this.prices[yesterdayIndex][1];
    this.prices.pop();
  }

  this.prices.push([price, weight]);

  return weight;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
