const { Schema, model } = require("mongoose");
//Importing reaction schema to allow me to reference it in thoughtSchema
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date, 
            default: Date.now
        },
        username: {
            type: String, 
            required: true
        },
        //Using our reactionSchema in the thoughSchema
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

//Creating virtual that retrieves the length of the reactions array withing the thoughtSchema
thoughtSchema.virtual("reactionCount").get(function() {
    return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;