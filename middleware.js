export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "For Love";
  next();
};
