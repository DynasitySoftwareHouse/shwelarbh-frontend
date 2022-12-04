import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from "./en.json";
import mu from "./mu.json";
import mz from "./mz.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

i18n.use(initReactI18next).init({
lng: 'en',
fallbackLng: 'en',
resources: {
	en: en,
    mu: mu,
    mz: mz
},
interpolation: {
	escapeValue: false // react already safes from xss
}
});

export default i18n;
