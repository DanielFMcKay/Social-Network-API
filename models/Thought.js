const { Schema, model } = require('mongoose');

const reactionSchema = require('./Reaction');

format_date = require('../utils/helpers');


const thoughtSchema = new Schema(
    {
        thought_text: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 500,
        },
        date_created: {
            type: Date,
            default: Date.now,
            allowNull: false,
        },
        username: {
            type: String,
            required: true,
            ref: 'User',
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    },
);


const Thought = model('Thought', thoughtSchema);
module.exports = Thought;
