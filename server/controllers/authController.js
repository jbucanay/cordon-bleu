module.exports = {
    getSession: (req, res) => { //used for linking to login if try to add to cart
        console.log("GETSESSION ", req.session)
        res.status(200).json(req.session)
    },
    addToSession: (req, res) => {
        req.session.user.email = req.body.firebaseEmail
        console.log("ADDTOSESSION: ", req.session)
        res.sendStatus(200);
    }
}