const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Auction = sequelize.define("auction", {
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
  });

  return Auction;
};
