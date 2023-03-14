const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {

			colors : {
				"primary": "var(--primary-color)",
				"secondary": "var(--secondary-color)",
				"background": "var(--background-color)",
				"transparent": "var(--transparent-color)",
			}
			
		}
	},

	plugins: []
};

module.exports = config;
