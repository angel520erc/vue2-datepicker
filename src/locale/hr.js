import DatePicker from 'vue2-datepicker-auto-format';
import hr from 'date-format-parse-roc/lib/locale/hr';

const lang = {
  formatLocale: hr,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('hr', lang);

export default lang;
