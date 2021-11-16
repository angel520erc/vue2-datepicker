import DatePicker from 'vue2-datepicker-auto-format';
import hi from 'date-format-parse/lib/locale/hi';

const lang = {
  formatLocale: hi,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('hi', lang);

export default lang;
