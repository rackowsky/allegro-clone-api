const db = require("../models");
const Auction = db.auction;

exports.create = (auction) => {
  return Auction.create({
    title: auction.title,
    description: auction.description,
    price: auction.price,
  })
    .then((auction) => {
      console.log(
        ">> Created new Auction: " + JSON.stringify(auction, null, 4)
      );
      return auction;
    })
    .catch((err) => {
      console.error(">> Error while creating Auction: ", err);
    });
};

exports.findAll = () => {
  return Auction.findAll()
    .then((tutorials) => {
      return tutorials;
    })
    .catch((err) => {
      console.error(">> Error while retrieving Auction: ", err);
    });
};
