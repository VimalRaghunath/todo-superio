const mongoose = require("mongoose")

const TodoSchema = mongoose.Schema({

    task: { type: String },
    done: {
        type: Boolean,
        default: false
    }
})


const TodoModel = mongoose.model("todo", TodoSchema)
module.exports = TodoModel;
