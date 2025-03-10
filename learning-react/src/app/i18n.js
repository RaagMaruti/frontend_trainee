import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// for big websites store in separate JSON
await i18n.use(initReactI18next).init({
	lng: "en",
	resources: {
		en: {
			translation: {
				hello: "{{name}} - Hello, how are you?",
				nested: {
					key: "actual nested key",
				},
				error: {
					unspecific: "Something went wrong.",
					404: "The page was not found.",
				},
				cash: "{{value, number(minimumFractionDigits: 2)}} USD",
				count_one: "{{count}} item",
				count: "{{count}} items",

				msg1: "1",
				msg2: "2",
				msgs: "$(msg1), $(msg2)",
			},
		},
		gu: {
			translation: {
				namste: "{{name}} - નમસ્તે, કેમ છો?",
				cash: "INR {{value, number(minimumFractionDigits: 2)}}",
				count_one: "{{count}} item",
				count: "{{count}} items",
			},
		},
	},
});

export default i18n;
