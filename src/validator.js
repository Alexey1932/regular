export default class Validator {
	static validateUsername(username) {
		const validCharacters = /^[a-zA-Z0-9-_]+$/;
		if (!validCharacters.test(username)) {
			return false;
		}

		const consecutiveDigits = /\d{4,}/;
		if (consecutiveDigits.test(username)) {
			return false;
		}

		const validStartEnd = /^(?![-_\d])[a-zA-Z0-9-_]*(?<![-_\d])$/;
		if (!validStartEnd.test(username)) {
			return false;
		}

		return true;
	}
}