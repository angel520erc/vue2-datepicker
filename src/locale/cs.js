import DatePicker from 'vue2-datepicker-auto-format';
import cs from 'date-format-parse/lib/locale/cs';

const lang = {
  formatLocale: cs,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('cs', lang);

export default lang;
