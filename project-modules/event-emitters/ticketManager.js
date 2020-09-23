const events = require("events");

class TicketManager extends events.EventEmitter {
  /**
   * 
   * @param {number} supply 
   */
  constructor(supply) {
    super();
    this.supply = supply;
  }

  /**
   * 
   * @param {string} email 
   * @param {number} price 
   */
  buy(email, price) {

    if (this.supply > 0) {
      this.supply--;
      this.emit("buy", email, price, Date.now());

      return;

    }

    this.emit("error", new Error("There are no more tickets left to purchase"));
  }
}

module.exports = TicketManager;