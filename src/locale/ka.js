import DatePicker from 'vue2-datepicker-auto-format';
import ka from 'date-format-parse-roc/lib/locale/ka';

const lang = {
  formatLocale: ka,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('ka', lang);

export default lang;
