module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Team", {
        id: {type: DataTypes.BIGINT, primaryKey: true},
        name: {type: DataTypes.STRING, allowNull: false},
        nation: {type: DataTypes.STRING, allowNull: false},
        game_type: {type: DataTypes.STRING, allowNull: false},
        description: {type: DataTypes.STRING, allowNull: false},
        birthday: {type: DataTypes.DATE, allowNull: false},
        comment: DataTypes.STRING,
        image_path: {type: DataTypes.STRING}
    }, {
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        tableName: 'team'
    });
};
