import DatePicker from 'vue2-datepicker-auto-format';
import mk from 'date-format-parse/lib/locale/mk';

const lang = {
  formatLocale: mk,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('mk', lang);

export default lang;
