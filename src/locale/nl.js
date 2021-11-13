import DatePicker from 'vue2-datepicker-auto-format';
import nl from 'date-format-parse-roc/lib/locale/nl';

const lang = {
  formatLocale: nl,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('nl', lang);

export default lang;
