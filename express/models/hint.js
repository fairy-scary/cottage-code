'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hint = sequelize.define('Hint', {
    exercise_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    test: DataTypes.STRING
  }, {});
  Hint.associate = function(models) {
    Hint.hasOne(models.Exercise, { foreignKey: 'exercise_id'});
  };
  return Hint;
};