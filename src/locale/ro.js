import DatePicker from 'vue2-datepicker-auto-format';
import ro from 'date-format-parse/lib/locale/ro';

const lang = {
  formatLocale: ro,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('ro', lang);

export default lang;
