function authMiddleware(req, res, next) {
    res.send("this is authMiddleware");
    next();
}
export default authMiddleware;
