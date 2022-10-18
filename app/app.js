const port = process.env.PORT || 3000;

const init = async (app) => {
  app.get("/healthcheck", async (req, res) => {
    try {
      return res.status(200).send(`Nix-be is running`);
    } catch (error) {
      return res.status(400).send(`error`);
    }
  });
  process.on("uncaughtException", function (err) {
    console.log(err);
  });
  app.listen(port, () => {
    console.info(`API server started on port ${port}`);
  });
  return app;
};

module.exports = init;
