import DatePicker from 'vue2-datepicker-auto-format';
import az from 'date-format-parse/lib/locale/az';

const lang = {
  formatLocale: az,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('az', lang);

export default lang;
