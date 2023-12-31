const { Schema, model } = require("mongoose");
const { createTokenForUser } = require("../services/authentication");

const googleuserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        fullname: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);
googleuserSchema.static(
    "GenerateToken",
    async function (fullname, email) {
      const user = await this.findOne({ email });
      const token = createTokenForUser(user);
      return token;
    }
  );
  
const GoogleUser = model("Googleuser", googleuserSchema);
module.exports = GoogleUser;