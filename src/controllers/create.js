/**
 * This will create a series of middleware functions to execute common tasks
 * based on the options provided.
 *
 * @param {*} cb A middleware which is to be executed
 */
const route = (controller) => {
  const middlewareArray = [];

  const customController = async function (req, res, next) {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };

  middlewareArray.push(customController);
  return middlewareArray;
};

module.exports = route;
