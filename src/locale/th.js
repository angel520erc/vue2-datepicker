import DatePicker from 'vue2-datepicker-auto-format';
import th from 'date-format-parse-roc/lib/locale/th';

const lang = {
  formatLocale: th,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('th', lang);

export default lang;
