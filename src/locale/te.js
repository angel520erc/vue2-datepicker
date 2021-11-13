import DatePicker from 'vue2-datepicker-auto-format';
import te from 'date-format-parse-roc/lib/locale/te';

const lang = {
  formatLocale: te,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('te', lang);

export default lang;
