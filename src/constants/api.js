export const API = {
  AUTH: {
    LOGIN: '/auth/login',
    SIGN_UP: '/auth/signup',
    REFRESH_TOKEN: '/auth/refresh-token',
    FORGOT_PASSWORD: '/auth/forgot-password',
    VERIFY_TOKEN: '/auth/verify-token',
    RESET_PASSWORD: '/auth/reset-password',
  },
  PACKAGE: {
    LIST: '/packages',
    DETAIL: '/packages/:id',
    SUBSCRIBE: 'packages/subscribe'
  },
  SUBSCRIPTION: {
    CURRENT: '/subscriptions/current'
  },
  TRANSACTION: {
    INDEX: '/transactions',
    UPLOAD_SLIP: '/transactions/:id/upload-payment-slip',
    DETAIL: '/transactions/:id'
  },
  SMS_MANAGERMENT: {
    SEND_USING_FILE: {
      INDEX: '/sms/batch',
      VALIDATE: '/sms/validate-batch',
      CREATE: '/sms/batch',
    },
    SENDER: {
      INDEX: '/sms/senders',
      CREATE: '/sms/senders',
    },
    SMS_TEMPLATE: {
      INDEX: '/sms/templates',
      CREATE: '/sms/templates',
      UPDATE: '/sms/templates/:id',
    },
    SEND_SMS: '/sms/send',
  },
  PROFILE: {
    GET_PROFILE: '/auth/profile',
    UPDATE_PROFILE: '/auth/account/change',
    UPDATE_AVATAR: '/auth/account/change-avatar',
    CHANGE_PASSWORD: '/auth/account/change-password',
    GET_TIMEZONE: '/auth/account/timezones',
    GET_LANGUAGE: '/auth/account/languages',
    GET_COUNTRY: '/auth/account/countries',
    GET_PROVINCE: '/auth/account/provinces',
    GET_DISTRICT: '/auth/account/districts',
    GET_WARD: '/auth/account/wards',
    GET_BILLING_INFO: '/auth/profile/default-billing-info'
  },
  DASHBOARD: {
    TRANSACTION_SUMMARY: '/dashboard/transaction-payment-summary',
    CREDIT_SUMMARY: '/dashboard/credit-summary',
    SMS_INSIGHT: '/dashboard/sms-insight',
    CREDIT_LOG: '/dashboard/credit-logs'
  },
  DIRECT_UPLOAD: {
    GET_SIGNATURE: '/upload/signature',
  },
  REPORT: {
    GET_REPORT: '/sms/report'
  },
  AUTHENTICATE: {
    LIST_IPS: '/auth/account/whitelist-ips',
    GENERATE_KEY: '/auth/account/generate-api-key'
  }
};
