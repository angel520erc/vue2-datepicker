import DatePicker from 'vue2-datepicker-auto-format';
import bn from 'date-format-parse/lib/locale/bn';

const lang = {
  formatLocale: bn,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('bn', lang);

export default lang;
