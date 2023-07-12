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
                    return res.status(404).json(err + ": thought not found, or maybe thoughts are just a social construct.");
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
                if (!dbThoughtData) {
                    return res.status(404).json(err + ": thought not found.");
                }
                res.json(dbThoughtData)
            })
            .catch(err => {
                console.log(err + ": an error has occurred in creating a thought. I have a headache.");
                res.sendStatus(500);
            });
    },
    // update a thought by id
    updateThought(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.id })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    return res.status(404).json(err + ": thought not found. On the plus side, ignorance is bliss.");
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
                    return res.status(404).json(err + ": thought not found. I'm thinking of a number between i and -i.");
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err + ": an error has occurred in deleting a thought. I'm thinking of a number between i and -i.");
                res.sendStatus(500);
            });
    },
    // add a reaction to a thought
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.id },
            { $addToSet: { reactions: req.body } },
            { new: true, runValidators: true }
        )
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    return res.status(404).json(err + ": thought not found. ");
                }
                res.json(dbThoughtData)
            });
    },
    // remove a reaction from a thought
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true }
        )
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    return res.status(404).json(err + ": thought not found. ");
                }
                res.json(dbThoughtData)
            });
    }
};