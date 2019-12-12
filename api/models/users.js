module.exports = (sequelize, type) => {
  return sequelize.define('user', {
    id:{
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: type.STRING,
    },
    name: {
      type: type.STRING,
      allowNull: false,
      defaultValue: "default",
    },
    email:{
      type: type.STRING,
      allowNull: true,
      defaultValue: " ",
    },
    createdAt: type.DATE,
    updatedAt: type.DATE,
  })
};

