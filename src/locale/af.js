import DatePicker from 'vue2-datepicker-auto-format';
import af from 'date-format-parse-roc/lib/locale/af';

const lang = {
  formatLocale: af,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('af', lang);

export default lang;
