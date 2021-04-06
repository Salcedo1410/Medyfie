/* Modules */
import dateNow from '../components/modules/dateNow';

let x = new Date(),
  nameDay = dateNow.getDate(x, 'dddd'),
  dd = dateNow.getTypeDate(x.getDate()),
  nameMonth = dateNow.getDate(x, 'MMMM'),
  mm = dateNow.getTypeDate(x.getMonth()),
  yyyy = dateNow.getFullYear(x);

const initialState = {
  nameDay: nameDay,
  numberDay: dd,
  nameMonth: nameMonth,
  numberMonth: mm,
  year: yyyy,
  opening: `${nameDay}, ${dd} de ${nameMonth} - ${yyyy}`,
},

  getDate = (state = initialState, action) => {
    const {
      nameDay,
      numberDay,
      nameMonth,
      numberMonth,
      year,
      opening
    } = action;
    switch (action.type) {
      case 'Get Date Now':
        return {
          nameDay: nameDay,
          numberDay: numberDay,
          nameMonth: nameMonth,
          numberMonth: numberMonth,
          year: year,
          opening: opening
        }
      default:
        return state
    }
  };

export default getDate;
