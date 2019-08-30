module.exports = {
    getUsers: (req, res) => {
        req.app.get('db').get_users()
        .then(users => res.status(200).send(users))
        .catch(err => res.status(500).send(err))
    }
}