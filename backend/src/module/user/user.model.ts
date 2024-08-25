import { model, Schema } from "mongoose";
import { TToken, TUser, TUserModel } from "./user.interface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config";
import { appError } from "../../errorfolder/appError";
const userSchema = new Schema<TUser, TUserModel, TToken>({
  name: { type: String, minlength: [2, "Name must contain 2 character"] },
  email: { type: String },
  password: {
    type: String,
    minlength: [8, "Password must contain 8 character"],
  },
  profileImg: { type: String, required: false },
});
userSchema.pre("save", async function () {
  try {
    const salt = Number(config.hash);
    const newPass = await bcrypt.hash(this.password, salt);
    this.password = newPass;
  } catch (err) {
    console.log(err);
  }
});

userSchema.method("Token", function () {
  if (config.jwt_secret) {
    const token = jwt.sign(
      {
        id: this._id.toString(),
        email: this.email,
        name: this.name,
      },
      config.jwt_secret,
      { expiresIn: "30d" }
    );
    return token;
  } else {
    throw new appError("jwt_secret is not defined", 400);
  }
});
export const user = model<TUser, TUserModel>("user", userSchema);
