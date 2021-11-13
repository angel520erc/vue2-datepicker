import DatePicker from 'vue2-datepicker-auto-format';
import nlBE from 'date-format-parse-roc/lib/locale/nl-be';

const lang = {
  formatLocale: nlBE,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('nl-be', lang);

export default lang;
