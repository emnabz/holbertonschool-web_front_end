function welcomeMessage(fullName) {
	return function message() {
		alert("Welcome " + fullName);
	};
};
let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");

