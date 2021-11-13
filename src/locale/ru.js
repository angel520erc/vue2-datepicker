import DatePicker from 'vue2-datepicker-auto-format';
import ru from 'date-format-parse-roc/lib/locale/ru';

const lang = {
  formatLocale: ru,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('ru', lang);

export default lang;
