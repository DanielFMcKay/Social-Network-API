const { Schema, model } = require('mongoose');

const reactionSchema = require('./Reaction');

const { format_date } = require('../utils/helpers');


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
            get: (timestamp) => format_date(timestamp),
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
