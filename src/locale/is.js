import DatePicker from 'vue2-datepicker-auto-format';
import is from 'date-format-parse-roc/lib/locale/is';

const lang = {
  formatLocale: is,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('is', lang);

export default lang;
