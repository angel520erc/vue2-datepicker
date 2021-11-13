import DatePicker from 'vue2-datepicker-auto-format';
import pt from 'date-format-parse-roc/lib/locale/pt';

const lang = {
  formatLocale: pt,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('pt', lang);

export default lang;
