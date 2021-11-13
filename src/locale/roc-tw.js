import DatePicker from 'vue2-datepicker-auto-format';
import zhTW from 'date-format-parse-roc/lib/locale/zh-tw';

const lang = {
  formatLocale: zhTW,
  yearFormat: '民國YYY年',
  monthFormat: 'MMM',
  monthBeforeYear: false,
};

DatePicker.locale('roc-tw', lang);

export default lang;
