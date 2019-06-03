module.exports = {
    getSession: (req, res) => { //used for linking to login if try to add to cart
        res.status(200).json(req.session)
    }
}