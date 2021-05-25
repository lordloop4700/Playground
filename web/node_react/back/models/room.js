module.exports = (sequelize, DataTypes) => {
  const room = sequelize.define('room', {
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING(13),
      allowNull: false,
    }
  }, {})
  return room
}