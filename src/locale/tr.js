import DatePicker from 'vue2-datepicker-auto-format';
import tr from 'date-format-parse-roc/lib/locale/tr';

const lang = {
  formatLocale: tr,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('tr', lang);

export default lang;
