import DatePicker from 'vue2-datepicker-auto-format';
import ja from 'date-format-parse/lib/locale/ja';

const lang = {
  formatLocale: ja,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: false,
};

DatePicker.locale('ja', lang);

export default lang;
