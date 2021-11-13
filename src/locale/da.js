import DatePicker from 'vue2-datepicker-auto-format';
import da from 'date-format-parse-roc/lib/locale/da';

const lang = {
  formatLocale: da,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('da', lang);

export default lang;
