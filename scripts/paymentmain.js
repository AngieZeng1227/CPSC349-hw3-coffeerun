(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-payment-order="form"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler
    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;

    var formHandler = new FormHandler(FORM_SELECTOR);


    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
      
    });
    console.log(formHandler);

})(window);