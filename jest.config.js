module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.js', // Exclude index file
    '!src/serviceWorker.js', // Exclude service worker file
  ],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
};
