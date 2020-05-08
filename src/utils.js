'use strict';

const chalk = require(`chalk`);
const {resolve} = require(`path`);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (someArray) => {
  for (let i = someArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  }

  return someArray;
};

const logger = {
  showError: (msg) => console.error(chalk.red(msg)),
  showSuccess: (msg) => console.info(chalk.green(msg)),
  showHelp: (msg) => console.info(chalk.grey(msg)),
  showVersion: (msg) => console.info(chalk.blue(msg)),
};

const logsPath = resolve(__dirname, `service`, `logs.log`);
const pinoLogger = require(`pino`)({
  name: `pino-and-express`,
  level: process.env.LOG_LEVEL || `info`
}, logsPath);

module.exports = {
  getRandomInt,
  shuffle,
  logger,
  pinoLogger,
};
