import DatePicker from 'vue2-datepicker-auto-format';
import el from 'date-format-parse-roc/lib/locale/el';

const lang = {
  formatLocale: el,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('el', lang);

export default lang;
