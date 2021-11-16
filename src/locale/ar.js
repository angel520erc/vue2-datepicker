import DatePicker from 'vue2-datepicker-auto-format';
import ar from 'date-format-parse/lib/locale/ar';

const lang = {
  formatLocale: ar,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('ar', lang);

export default lang;
