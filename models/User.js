const {
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// create User model
class User extends Model {

    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init({
    // define id column
    id: {
       
        type: DataTypes.INTEGER,

        allowNull: false,

        primaryKey: true,

        autoIncrement: true
    },
    // define an email column
    email: {
        type: DataTypes.STRING,
        allowNull: false,

        unique: true,
       
        validate: {
            isEmail: true
        }
    },
    // define a token column
    last_used_token: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
 
    hooks: {
    
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
        }
    },

    sequelize,

    timestamps: false,

    freezeTableName: true,

    underscored: true,

    modelName: 'user'
});

module.exports = User;