const harvest = require('../config').harvest;



module.exports = function HarvestService() {

  this.run = function() {
    harvest.company
      .get()
      .then((response) => {
        const company = response;
        console.log(company)
      });
  };

};
