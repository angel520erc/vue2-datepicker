import DatePicker from 'vue2-datepicker-auto-format';
import ptBR from 'date-format-parse-roc/lib/locale/pt-br';

const lang = {
  formatLocale: ptBR,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('pt-br', lang);

export default lang;
