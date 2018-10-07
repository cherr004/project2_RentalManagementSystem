var db = require("../models");

module.exports = function(app) {

  app.post("/api/clients/new", function(req, res) {
    var client = req.body;

    db.Clients.create({
      client_name: client.name,
      client_company: client.company,
      client_email: client.email,
      client_phone: client.phone,
      client_address1: client.address1,
      client_address2: client.address2,
      client_city: client.city,
      client_state: client.state,
      client_zip: client.zip,
      user: client.user
    }).then(function(dbClient) {
      res.json(dbClient);
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  app.post("/api/inventory/new", function(req, res) {
    var inventory = req.body;

    db.Inventory.create({
      product_name: inventory.product_name,
      inventory_qty: inventory.inventory_qty,
      available_inventory: inventory.available_inventory,
      product_image: inventory.product_image,
      rentalPrice_day: inventory.rentalPrice_day,
      user: inventory.user
    }).then(function(dbInventory) {
      res.json(dbInventory);
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  //This Rout will work to display an item details nor create a new rental order.
  app.get("api/inventory:id", function(req, res) {
    db.Inventory.findOne({
      product_id: req.params.id
    }).then(function(result) {
      return res.json(result);
    });
  });

  //This Rout will work to display an client details nor create a new rental order.
  app.get("api/client:id", function(req, res) {
    db.Inventory.findOne({
      client_id: req.params.id
    }).then(function(result) {
      return res.json(result);
    });


  });

  app.post("/api/rental/new", function(req, res) {
    var order = req.body;
    // console.log(order);
    db.Rentals.create({
      client_id: order.client,
      date_start: order.date_start,
      date_finish: order.date_finish,
      rental_days: order.rental_days,
      orderTotal: order.orderTotal,
      user: order.user,
      type: order.type
    }).then(function(dbRental) {
      // console.log(dbRental);
      res.json(dbRental);
    }).catch(function(err) {
      // console.log(err);
      res.json(err);
    })
  });

  app.post("/api/rental/newDetail", function(req, res) {
    var orDetail = req.body;
    db.RentalsDetails.create({
      rentalId: orDetail.rentalId,
      productId: orDetail.productId,
      productQty: orDetail.qty,
      productName: orDetail.productName,
      productPrice: orDetail.productPrice,
      productTotal: orDetail.priceTotal,
      user: orDetail.user
    }).then(function(dbRental) {
      console.log(dbRental);
      res.json(dbRental);
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    })
  })

};
