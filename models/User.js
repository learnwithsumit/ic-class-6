import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 2,
        max: 100,
    },
    email: {
        type: String,
    },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
