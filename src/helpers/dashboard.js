import { momentLocale } from '@/utils/formatter';
import { sumBy } from 'lodash';
import moment from 'moment';

const GetXAxisDataWeekly = (data, startDate, endDate) => {
  const startDateClone = startDate.clone();
  const dates = [];

  while (startDateClone.isSameOrBefore(endDate)) {
    dates.push(startDateClone.format('YYYY-MM-DD'));
    startDateClone.add(1, 'week').startOf('isoWeek');
  }
  return dates;
};

// startDate, endDate is a moment value
// group: [day, week, month]
const GetXAxisData = (data, startDate, endDate, group) => {
  const startDateClone = startDate.clone();
  let dates = [];
  while (startDateClone.isSameOrBefore(endDate)) {
    dates.push(startDateClone.format('YYYY-MM-DD'));
    startDateClone.add(1, group);
  }
  if (group === 'week') {
    dates = GetXAxisDataWeekly(data, startDate, endDate);
  }
  return dates;
};

export const parsePIChartData = ({ data, groupBy }) => {
  const minDateBaseOnData = data[0]?.date;
  const maxDateBaseOnData = data[data.length - 1]?.date;
  const startDate = moment(minDateBaseOnData);
  const endDate = moment(maxDateBaseOnData);
  const dateList = GetXAxisData(data, startDate, endDate, groupBy);
  return dateList.map((date, index) => {
    const name = momentLocale(date).format('MMM DD');
    let obj;
    if (groupBy === 'week') {
      const matchedData = data.filter(
        (item) => {
          if (index + 1 < dateList.length) {
            return moment(item.date) >= moment(date) && moment(item.date) < moment(dateList[index + 1]);
          }
          return moment(item.date) >= moment(date);
        }
      );

      obj = {
        value: sumBy(matchedData, (item) => item.value)
      };
    } else {
      obj = data.find(item => item.date === date);
    }

    return {
      name,
      sms: obj?.value || 0,
    };
  });
};

export const calculateCreditSummaryByKindPercent = (data) => {
  const minDefaultPercent = 0.05; // 10%
  const numberOfStatus = 5;

  const {
    usedCredit,
    blockingCredit,
    confirmPendingCredit,
    paymentPendingCredit,
    creditBalance
  } = data;

  const arr = [
    usedCredit,
    blockingCredit,
    confirmPendingCredit,
    paymentPendingCredit,
    creditBalance
  ];
  const areEqual = arr.every(element => element === arr[0]);

  const totalCredit = usedCredit + blockingCredit + confirmPendingCredit + paymentPendingCredit + creditBalance;

  if (areEqual) {
    const percentage = 100 / 5;
    return ({
      usedCredit: percentage,
      blockingCredit: percentage,
      confirmPendingCredit: percentage,
      paymentPendingCredit: percentage,
      creditBalance: percentage,
    });
  }

  const numberOfItemValueEqualZero = arr.filter(item => item === 0).length;

  const calculatePercent = (amount) => {
    if (amount === 0) {
      return minDefaultPercent * 100;
    }
    // eslint-disable-next-line max-len
    let percent = (amount / totalCredit - numberOfItemValueEqualZero * minDefaultPercent / (numberOfStatus - numberOfItemValueEqualZero)) * 100;

    if (percent < 0) {
      return minDefaultPercent * 100;
    }

    if (percent < minDefaultPercent * 100) {
      percent += minDefaultPercent * 100;
    }

    return percent;
  };
  return ({
    usedCredit: calculatePercent(usedCredit),
    blockingCredit: calculatePercent(blockingCredit),
    confirmPendingCredit: calculatePercent(confirmPendingCredit),
    paymentPendingCredit: calculatePercent(paymentPendingCredit),
    creditBalance: calculatePercent(creditBalance),
  });
};
