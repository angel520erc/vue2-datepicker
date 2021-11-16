import DatePicker from 'vue2-datepicker-auto-format';
import sl from 'date-format-parse/lib/locale/sl';

const lang = {
  formatLocale: sl,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('sl', lang);

export default lang;
