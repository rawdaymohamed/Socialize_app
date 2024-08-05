import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter your name",
  },
  email: {
    type: String,
    trim: true,
    unique: "Please enter another email. This one already exists",
    match: [/.+\@.+\..+/, "Please enter a correct email address"],
    required: "Your email is required",
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: { type: Date },
  hashedPassword: {
    type: String,
    required: "Your password is required",
  },
  salt: String,
});
UserSchema.virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });
UserSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashedPassword;
  },
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
};
UserSchema.path("hashedPassword").validate(function (v) {
  if (this._password && this._password.length < 6) {
    this.invalidate(
      "password",
      "Your password needs to be at least 6 characters"
    );
  }
  if (this.isNew && !this._password) {
    this.invalidate("password", "password is required");
  }
}, null);
export default mongoose.model("User", UserSchema);
