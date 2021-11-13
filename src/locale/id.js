import DatePicker from 'vue2-datepicker-auto-format';
import id from 'date-format-parse-roc/lib/locale/id';

const lang = {
  formatLocale: id,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('id', lang);

export default lang;
