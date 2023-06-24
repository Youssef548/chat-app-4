function isAuthedMiddleware(req, res, next) {
    if (!req.isAuthenticated()) {
        res.status(401).send({ isAuthenticated: req.isAuthenticated() });
        return;
    }
    next();
}
export default isAuthedMiddleware;
