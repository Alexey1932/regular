import Validator from '../src/validator';

test('valid usernames', () => {
	expect(Validator.validateUsername('valid-User')).toBe(true);
	expect(Validator.validateUsername('valid_User')).toBe(true);
	expect(Validator.validateUsername('user-123_name')).toBe(true);
});

test('invalid usernames with special characters', () => {
	expect(Validator.validateUsername('invalid user')).toBe(false);
	expect(Validator.validateUsername('invalid@user')).toBe(false);
});

test('invalid usernames with consecutive digits', () => {
	expect(Validator.validateUsername('user1234name')).toBe(false);
	expect(Validator.validateUsername('1234username')).toBe(false);
});

test('invalid usernames starting or ending with forbidden characters', () => {
	expect(Validator.validateUsername('-username')).toBe(false);
	expect(Validator.validateUsername('username-')).toBe(false);
	expect(Validator.validateUsername('_username')).toBe(false);
	expect(Validator.validateUsername('username_')).toBe(false);
	expect(Validator.validateUsername('1username')).toBe(false);
	expect(Validator.validateUsername('username1')).toBe(false);
});