const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {

			colors : {
				"primary": {
					DEFAULT : "var(--primary-color)",
					transparent : "var(--primary-color-transparent)",
					100 : "var(--primary-color-100)",
					200 : "var(--primary-color-200)",
					300 : "var(--primary-color-300)",
					400 : "var(--primary-color-400)",
					500 : "var(--primary-color-500)",
					600 : "var(--primary-color-600)",
					700 : "var(--primary-color-700)",
					800 : "var(--primary-color-800)",
					900 : "var(--primary-color-900)",
				},
				"secondary": {
					DEFAULT : "var(--secondary-color)",
					100 : "var(--secondary-color-100)",
					200 : "var(--secondary-color-200)",
					300 : "var(--secondary-color-300)",
					400 : "var(--secondary-color-400)",
					500 : "var(--secondary-color-500)",
					600 : "var(--secondary-color-600)",
					700 : "var(--secondary-color-700)",
					800 : "var(--secondary-color-800)",
					900 : "var(--secondary-color-900)",
				},
				"tertiary": {
					DEFAULT : "var(--tertiary-color)",
					100 : "var(--tertiary-color-100)",
					200 : "var(--tertiary-color-200)",
					300 : "var(--tertiary-color-300)",
					400 : "var(--tertiary-color-400)",
					500 : "var(--tertiary-color-500)",
					600 : "var(--tertiary-color-600)",
					700 : "var(--tertiary-color-700)",
					800 : "var(--tertiary-color-800)",
					900 : "var(--tertiary-color-900)",
				},
				"background": "var(--background-color)",
				"transparent": "var(--transparent-color)",
			}
			
		}
	},

	plugins: []
};

module.exports = config;
