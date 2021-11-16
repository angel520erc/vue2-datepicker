import DatePicker from 'vue2-datepicker-auto-format';
import de from 'date-format-parse/lib/locale/de';

const lang = {
  formatLocale: de,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('de', lang);

export default lang;
