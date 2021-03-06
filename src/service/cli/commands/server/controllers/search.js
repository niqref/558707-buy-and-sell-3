"use strict";

const {join} = require(`path`);

const handlers = require(`../utils`);
const pinoLogger = require(`../../../../../pino-logger`);
const {FILE_NAME, HttpCode} = require(`../../../../../constants`);

const FILE_PATH = join(__dirname, `..`, `..`, `..`, `..`, `..`, `..`, FILE_NAME);

const getIndex = async (req, res) => {
  try {
    const fileContent = await handlers.getContent(FILE_PATH);
    const offers = fileContent.filter((offer) => new RegExp(decodeURI(req.query.query).toLowerCase()).test(offer.title.toLowerCase()));

    res.status(HttpCode.OK).json(offers);
  } catch (err) {
    res.status(HttpCode.BAD_REQUEST).send(err.message);
    pinoLogger.error(`Error: ${err.message}`);
  }
};

module.exports = getIndex;
