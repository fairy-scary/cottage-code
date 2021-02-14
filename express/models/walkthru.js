'use strict';
module.exports = (sequelize, DataTypes) => {
  const Walkthru = sequelize.define('Walkthru', {
    exercise_id: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  Walkthru.associate = function(models) {
    Walkthru.hasMany(models.Step, { foreignKey: 'walkthru_id' });
    Walkthru.hasOne(models.Exercise, { foreignKey: 'exercise_id' });
  };
  return Walkthru;
};