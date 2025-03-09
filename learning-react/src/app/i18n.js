import i18n from "i18next";
import { initReactI18next } from "react-i18next";


// for big websites store in separate JSON
await i18n.use(initReactI18next).init({
	lng: "gu",
	resources: {
		en: {
			translation: {
				hello: "Hello, how are you?",
			},
		},
		gu: {
			translation: {
				hello: "નમસ્તે, કેમ છો?",
			},
		},
	},
});

export default i18n;