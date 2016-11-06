(function() {
  'use strict';



  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
 var toBuy = this;
 toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

 toBuy.removeItem = function (itemIndex) {
  ShoppingListCheckOffService.removeItem(itemIndex);
};
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

var bought = this;
bought.items = ShoppingListCheckOffService.getItemsBought();

// if ((bought === undefined || bought !== undefined) && bought.items.length === 0)
// {
//  throw new Error("Nothing bought yet.");
// }

}

var shoppingList = [
  { name: "Milk", quantity: "4 bottles"},
  { name: "Donuts", quantity:"10 Nos."},
  { name: "Cookies", quantity:"5 Packs"},
  { name: "Chocolate", quantity:"10 Nos."},
  { name: "Peanut Butter", quantity: "2 Nos." }
];

function ShoppingListCheckOffService() {
  var service = this;

  var itemsToBuy = shoppingList;

  service.removeItem = function (index) {
    var item = {
      name: itemsToBuy[index].name,
      quantity: itemsToBuy[index].quantity
    };
    itemsBought.push(item);

    itemsToBuy.splice(index, 1);
  };

  var itemsBought = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    itemsBought.push(item);
  };

service.getItemsToBuy = function() {
  return itemsToBuy;
};

service.getItemsBought = function() {
  return itemsBought;
};

}

})();
