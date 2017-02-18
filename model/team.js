module.exports = (sequelize, DataTypes) => {
    // TBD
    return sequelize.define("Team", {
        username: DataTypes.STRING
    });
};
