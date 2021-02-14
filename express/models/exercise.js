'use strict';
module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
    name: DataTypes.STRING,
    prompt: DataTypes.TEXT,
    solution: DataTypes.TEXT,
    level: DataTypes.INTEGER
  }, {});
  Exercise.associate = function(models) {
    Exercise.hasMany(models.Hint, { foreignKey: 'exercise_id'});
    Exercise.hasMany(models.Walkthru, { foreignKey: 'exercise_id'});
  };
  return Exercise;
};