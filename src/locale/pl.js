import DatePicker from 'vue2-datepicker-auto-format';
import pl from 'date-format-parse-roc/lib/locale/pl';

const lang = {
  formatLocale: pl,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('pl', lang);

export default lang;
