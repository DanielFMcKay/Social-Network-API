const { User, Thought } = require('../models');

module.exports = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err + ": an error has occurred in getting all users. There are two imposters among us.");
                res.sendStatus(400);
            });
    },
    // get one user by id
    getOneUser(req, res) {
        User.findOne({ _id: req.params.id })
            .populate('thoughts')
            .populate('friends')
            .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                    return res.status(404).json(err + ": user not found, or maybe THAT'S JUST WHAT THEY WANT YOU TO THINK!!!");
                }
                res.json(dbUserData)
            })
            .catch(err => {
                console.log(err + ": an error has occurred in getting one user. This was probably our fault.");
                res.sendStatus(500);
            })
    },
    // update a user by id
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    return res.status(404).json(err + ": user not found, or maybe THAT'S JUST WHAT THEY WANT YOU TO THINK!!!");
                }
                res.json(dbUserData)
            })
            .catch(err => {
                console.log(err + ": an error has occurred in updating a user.");
                res.sendStatus(500);
            });
    },
    // delete a user by id
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    return res.status(404).json(err + ": user not found.");
                }
                res.json(dbUserData)
            })
            .catch(err => {
                console.log(err + ": an error has occurred in deleting a user.");
                res.sendStatus(500);
            });
    },
    // create a new user
    createUser(req, res) {
        User.create(req.body)
            .then(dbUserData => {
                if (!dbUserData) {
                    return res.status(404).json(err + ": user not found, or maybe THAT'S JUST WHAT THEY WANT YOU TO THINK!!!");
                }
                res.json(dbUserData)
            })
            .catch(err => {
                console.log(err + ": an error has occurred in creating a user.");
                res.sendStatus(500);
            });
    },
    // add a friend to a user's friend list
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.id },
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        )
            .then(dbUserData => {
                if (!dbUserData) {
                    return res.status(404).json(err + ": friend not found. Or possibly doesn't exist. Does anything really exist? How do you know?");
                }
                res.json(dbUserData)
            })
            .catch(err => {
                console.log(err + ": an error has occurred in adding a friend.");
                res.sendStatus(500);
            });
    },
    // remove a friend from a user's friend list
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        )
            .then(dbUserData => {
                if (!dbUserData) {
                    return res.status(404).json(err + ": friend not found. I feel jokes would be cruel at this point.");
                }
                res.json(dbUserData)
            })
            .catch(err => {
                console.log(err + ": an error has occurred in removing a friend.");
                res.sendStatus(500);
            });
    },
};
