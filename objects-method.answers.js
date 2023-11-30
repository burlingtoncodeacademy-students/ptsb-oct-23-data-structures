// Challenge #1:
// - Build a method that will look for an item in a particular list and only remove that item.
// - Log the current items list and remove one item
// - Log the updated list again with the removed item gone

// Answer
const cartItems = {
  items: ['apples', 'mangos', 'dogs', 'iphone'],
  remove(item) {
    console.log('removing item');
    return (this.items = this.items.filter(function (currentItem) {
      return currentItem !== item;
    }));
  },
};

console.log(cartItems.items);
cartItems.remove('ipad');
console.log(cartItems.items);

// Challenge #2:
// - Create an object with a boolean "status" property and a default value
// - Add a custom method to get the status that can be chained
// - Log the status boolean value when the method is called
// - Check the object property "status" exists and then call your custom get status method using chaining
//
// - Create a picture object with a status (default false)
// - Add two custom methods for getting the download status and another for changing it
// - Getting the status logs the current status and is chainable method
// - Changing the status logs it is changing and is chainable method
// - Check that the picture has the status property
// - If it has the property log that it does
// - Call your pictures custom methods and change the status to true + get the latest status using chaining

// Answer
const picture = {
  status: false,
  getDownloadStatus: function () {
    console.log(this.status);
    return this;
  },
  changeDownloadStatus: function (status) {
    console.log('changing status');
    this.status = status;
    return this;
  },
};

if (picture.hasOwnProperty('status')) {
  console.log('has status property');
  picture.changeDownloadStatus(true).getDownloadStatus();
}
