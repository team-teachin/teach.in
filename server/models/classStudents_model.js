const Sequelize = require('../database.js').Sequelize;

const sequelize = require('../database.js').sequelize;

const ClassStudents = sequelize.define('classStudents', {
	grade: Sequelize.CHAR,
	percent: Sequelize.DECIMAL,
	points: Sequelize.INTEGER,
}, {
	timestamp: false
});

module.exports = ClassStudents;
