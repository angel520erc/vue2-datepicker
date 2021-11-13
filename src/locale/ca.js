import DatePicker from 'vue2-datepicker-auto-format';
import ca from 'date-format-parse-roc/lib/locale/ca';

const lang = {
  formatLocale: ca,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('ca', lang);

export default lang;
