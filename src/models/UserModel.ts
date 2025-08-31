import * as bcrypt from "bcrypt";
import mongoose, { Schema } from "mongoose";

export interface IUser {
  _id: string;

  name: string;
  email: string;
  avatar?: string;

  createdAt: Date;
  updatedAt: Date;
}

export const UserSchema: Schema = new Schema<IUser & { password: string }>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String },

  password: { type: String, required: true },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

UserSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    const salts = bcrypt.genSaltSync(14);
    this.password = bcrypt.hashSync(this.password as string, salts);
  }
  next();
});

UserSchema.pre("updateOne", function (next) {
  this.set({ updatedAt: Date.now() });
  next();
});

export const UserModel = mongoose.model<IUser>("User", UserSchema);
