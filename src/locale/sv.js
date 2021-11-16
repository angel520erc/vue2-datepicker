import DatePicker from 'vue2-datepicker-auto-format';
import sv from 'date-format-parse/lib/locale/sv';

const lang = {
  formatLocale: sv,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('sv', lang);

export default lang;
