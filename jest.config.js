module.exports = {
	testEnvironment: 'node',
	moduleFileExtensions: ['js'],
	testMatch: ['**/test/**/*.test.js'],
	transform: {
		'^.+\\.js$': 'babel-jest',
	},
};