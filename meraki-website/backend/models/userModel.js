import mongoose from "mongoose";

// Simple counter collection to provide auto-incrementing numeric IDs
const counterSchema = new mongoose.Schema({ _id: String, seq: { type: Number, default: 0 } });
const Counter = mongoose.models.Counter || mongoose.model("Counter", counterSchema);

const userSchema = new mongoose.Schema({
  user_id: { type: Number, unique: true },
  user_role: {
    type: String,
    enum: ["Admin", "Client", "Artist", "Programmer", "Craftsman"],
    default: "Client",
  },
  // allow multiple roles if provided (array of role strings)
  user_roles: [{ type: String, enum: ["Admin", "Client", "Artist", "Programmer", "Craftsman"] }],
  user_username: { type: String, required: true, maxlength: 50, trim: true },
  user_email_address: { type: String, required: true, unique: true, maxlength: 50, lowercase: true, trim: true },
  user_password: { type: String, required: true },
  user_bios: { type: String, maxlength: 100, default: "" },
  user_social_links: { type: String, maxlength: 100, default: "" },
  // store profile picture as a file path or URL; storing binary in DB is possible but not recommended here
  user_profile_picture: { type: String, default: "" },
}, {
  timestamps: { createdAt: 'user_created_at', updatedAt: 'user_updated_at' },
});

// Pre-save hook to auto-increment `user_id` for new documents
userSchema.pre("save", async function (next) {
  const doc = this;
  if (doc.isNew) {
    try {
      const counter = await Counter.findByIdAndUpdate(
        { _id: "user_id" },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
      );
      doc.user_id = counter.seq;
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next();
  }
});

// Hide password when converting to JSON
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.user_password;
  return obj;
};

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
