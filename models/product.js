const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Product = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    precio: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description_simple: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description_html: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    initialAutoIncrement: 101000,
  }
);

module.exports = Product;
