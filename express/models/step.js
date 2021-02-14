'use strict';
module.exports = (sequelize, DataTypes) => {
  const Step = sequelize.define('Step', {
    walkthru_id: DataTypes.INTEGER,
    step_number: DataTypes.INTEGER,
    text: DataTypes.TEXT
  }, {});
  Step.associate = function(models) {
    Step.hasOne(models.Walkthru, { foreignKey: 'walkthru_id' });
  };
  return Step;
};