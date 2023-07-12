// Types needed because of the ObjectId type for the 16-character, hexadecimal string that is the unique identifier for each document created by MongoDB.
// Thank you coPilot for the verbose explanation of what I was thinking in my head somehow, probably.
const { Schema, Types } = require('mongoose');
const { format_date } = require('../utils/helpers');


const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reaction_text: {
            type: String,
            required: true,
            max_length: 240,
        },
        username: {
            type: String,
            required: true,
            ref: 'User',
        },
        date_created: {
            type: Date,
            default: Date.now,
            get: (timestamp) => format_date(timestamp),
            allowNull: false,
        },
    },
    {
            toJSON: {
                virtuals: true,
                getters: true,
            },
            id: false,
    },
);

module.exports = reactionSchema;