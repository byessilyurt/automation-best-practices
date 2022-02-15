const sauceOptions = {
	build: `WebdriverIO local build-${new Date().getTime()}`,
};

exports.config = {
	runner: 'local',
	user: process.env.SAUCE_USERNAME,
	key: process.env.SAUCE_ACCESS_KEY,
	region: 'us',
	services: [
		[
			'sauce',
			{
				sauceConnect: true,
			},
		],
	],
	specs: ['./test/specs/**/localhost.spec.js'],
	// Patterns to exclude.
	exclude: ['./test/specs/**/sanity.spec.js'],
	//
	// ============
	// Capabilities
	// ============
	maxInstances: 100,
	capabilities: [
		//Desktop A 28%: https://www.w3schools.com/browsers/browsers_display.asp
		{
			browserName: 'chrome',
			platformName: 'windows 10',
			browserVersion: 'latest',
			// needed if you want to run with sauce connect
			'sauce:options': {
				...sauceOptions,
			},
		},
	],
	// Level of logging verbosity: trace | debug | info | warn | error | silent
	logLevel: 'error',
	// bail (default is 0 - don't bail, run all tests).
	bail: 0,
	baseUrl: 'http://localhost:3000',
	//
	// Default timeout for all waitFor* commands.
	waitforTimeout: 10000,
	//
	// Default timeout in milliseconds for request
	// if browser driver or grid doesn't send response
	connectionRetryTimeout: 120000,
	//
	// Default request retries count
	connectionRetryCount: 3,

	framework: 'jasmine',
	reporters: ['spec'],
	jasmineOpts: {
		defaultTimeoutInterval: 120000,
	},
};
