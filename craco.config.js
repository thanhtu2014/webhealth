const path = require('path');

const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);

module.exports = {
  plugins: [

  ],
  babel: {
    plugins: [],
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
};
