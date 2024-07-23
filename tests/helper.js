// Login helper function
exports.loginWith = async (page, username, password) => {
	await page.getByRole("button", { name: "log in" }).click();
	await page.getByTestId("username").fill(username);
	await page.getByTestId("password").fill(password);
	await page.getByRole("button", { name: "login" }).click();
};

// Note creation helper function
exports.createNote = async (page, content) => {
	await page.getByRole("button", { name: "new note" }).click();
	await page.getByRole("textbox").fill(content);
	await page.getByRole("button", { name: "save" }).click();
};