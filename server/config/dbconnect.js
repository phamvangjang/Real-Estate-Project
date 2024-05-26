const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging:false, //hạn chế log ra kết quả: 'Executing (default): SELECT 1+1 AS result'
        timezone: '+07:00'
    }
)

const dbconnect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = dbconnect //mặc định của nodejs có type là module nên dùng module.export.còn type là import thì mình import như trong reactjs