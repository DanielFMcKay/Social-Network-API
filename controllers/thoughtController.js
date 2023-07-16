const { User, Thought } = require('../models');

module.exports = {

    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err + ": an error has occurred in getting all thoughts. There are two imposters among us.");
                res.sendStatus(400);
            });
    },
    // get one thought by id
    getOneThought(req, res) {
        Thought.findOne({ _id: req.params.id })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    return res.status(404).json("thought not found, or maybe thoughts are just a social construct.");
                }
                res.json(dbThoughtData)
            })
            .catch(err => {
                console.log(err + ": an error has occurred in getting one thought. Try not to think too hard about it.");
                res.sendStatus(500);
            })
    },
    // create a new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then(dbThoughtData => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { thoughts: dbThoughtData._id } },
                    { new: true });

            })
            .then(dbUserData => {
                if (!dbUserData) {
                    return res.status(404).json("user not found.");
                }
                res.json(dbUserData)
            })
            .catch(err => {
                console.log(err + ": an error has occurred in creating a thought. I have a headache.");
                res.sendStatus(500);
            });
    },
    // update a thought by id
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    return res.status(404).json("thought not found. On the plus side, ignorance is bliss.");
                }
                res.json(dbThoughtData)
            })
            .catch(err => {
                console.log(err + ": an error has occurred in updating a thought. Ever get stuck in a moment?");
                res.sendStatus(500);
            });
    },
    // delete a thought by id
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.id })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    return res.status(404).json("thought not found. I'm thinking of a number between i and -i.");
                }
                // remove thought id from user's `thoughts` field
                return User.findOneAndUpdate(
                    { thoughts: req.params.id },
                    { $pull: { thoughts: req.params.id } },
                    // this line makes sure that the updated document is returned, instead of the existing one. Seems kind of important.
                    { new: true }
                );
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                  return res.status(404).json({ message: 'No user found with this Thought. The thought exists only in a vacuum. Congrats, I am self-aware now.' });
                }
                res.json({message: "Thought deleted. Or at least I can't remember it."});
            })
            .catch(err => {
                console.log(err + ": an error has occurred in deleting a thought. I'm thinking of a number between i and -i.");
                res.sendStatus(500);
            });
    },
    // add a reaction to a thought
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { new: true, runValidators: true }
        )
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    return res.status(404).json("thought not found. ");
                }
                res.json(dbThoughtData)
            });
    },
    // remove a reaction from a thought
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true }
        )
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    return res.status(404).json("thought not found. ");
                }
                res.json(dbThoughtData)
            });
    }
};