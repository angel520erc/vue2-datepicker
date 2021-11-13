import DatePicker from 'vue2-datepicker-auto-format';
import vi from 'date-format-parse-roc/lib/locale/vi';

const lang = {
  formatLocale: vi,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: false,
};

DatePicker.locale('vi', lang);

export default lang;
