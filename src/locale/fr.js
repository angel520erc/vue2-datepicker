import DatePicker from 'vue2-datepicker-auto-format';
import fr from 'date-format-parse-roc/lib/locale/fr';

const lang = {
  formatLocale: fr,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('fr', lang);

export default lang;
