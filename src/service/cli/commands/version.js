'use strict';

const {logger} = require(`../../../utils`);
const {ExitCode, Command} = require(`../../../constants`);

const {version} = require(`../../../../package`);

module.exports = {
  name: Command.VERSION,
  run() {
    logger.showVersion(`v${version}`);
    process.exit(ExitCode.SUCCESS);
  },
};
