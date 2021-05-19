// move too the next async

module.exports = func => {
    return (req, res, next) => {
        func(req, res, next).catch(next);
    }
}