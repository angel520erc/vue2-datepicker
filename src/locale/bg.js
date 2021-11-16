import DatePicker from 'vue2-datepicker-auto-format';
import bg from 'date-format-parse/lib/locale/bg';

const lang = {
  formatLocale: bg,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('bg', lang);

export default lang;
