const express = require("express");
const path = require("path");
const requireContext = require("require-context");
const router = express.Router(); // eslint-disable-line new-cap

  // do not expose all routes if running unit test
  const allRoutes = requireContext(
    path.join(__dirname, "./modules"),
    true,
    /route\.js$/
  );
  allRoutes.keys().forEach((route) => {
    const curRoute = require("./modules/" + route);
    router.use(curRoute.prefix, curRoute.routes);
  });

module.exports = router;
