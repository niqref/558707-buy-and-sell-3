"use strict";

const express = require(`express`);

const {Command, HttpCode} = require(`../../../constants`);
const {logger} = require(`../../../utils`);

const offersRoutes = require(`./routes/offers`);

const DEFAULT_PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(`/offers`, offersRoutes);

app.use((req, res) => res
    .status(HttpCode.NOT_FOUND)
    .send(`Not found`));

module.exports = {
  name: Command.SERVER,
  run(port) {
    const formattedPort = parseInt(port, 10) || DEFAULT_PORT;

    app.listen(formattedPort, (err) => err ? logger.showError(`Ошибка при создании сервера`, err) : logger.showSuccess(`Ожидаю соединений на ${formattedPort}`));
  },
};
