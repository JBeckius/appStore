module.exports = (browser, url) => {
	return browser
		.url(url)
		.waitForElementVisible('body', 1000)
		.setValue('input[id="username"]', 'jbeckius-test')
		.setValue('input[id="password"]', 'jbJD2018!')
		.click('button');
}
