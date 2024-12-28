import moment from 'moment';

export const parseDateTime = (date) => moment(new Date(date)).format('MMM DD, YYYY HH:mm');

export const parseDateYear = (date) => moment(new Date(date)).format('MMM, YYYY');
