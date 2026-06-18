module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'stepDefinitions/**/*.ts',
      'hooks/**/*.ts'
    ],
    format: [
      'progress',
      'allure-cucumberjs/reporter'
    ],
    formatOptions: {
      resultsDir: 'allure-results'
    }
  }
};