module.exports = (sequelize, DataTypes) => {
    const BookModel = sequelize.define('book', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        current_chapter: {
            type: DataTypes.STRING,
            allowNull: false
        },
        progress: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
        {
            tableName: 'books',

        }
    );
    return BookModel;
};





