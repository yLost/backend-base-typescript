// const Points = {
//   teamId: "123",
//   userId: "123",
//   points: {
//     unit: {
//       goal: 0,
//       current: 0,
//     },
//     money: {
//       goal: 0,
//       current: 0,
//     },
//   },
// };

// const Competition = {
//   id: "123",
//   name: "Competição #1",

//   participants: [
//     {
//       entityType: "USER",
//       entityId: "123",
//     },
//     {
//       entityType: "TEAM",
//       entityId: "456",
//     },
//   ],
// };

// const totalUsersPoints = points.find((point) => point.teamId == "456");
// const points = totalUsersPoints.reduce((acc, point) => acc + point.points, 0);

import * as bcrypt from "bcrypt";
import mongoose, { Schema } from "mongoose";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  age?: number;
  createdAt: Date;
}

export const UserSchema: Schema = new Schema<IUser & { password: string }>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0 },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

UserSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    const salts = bcrypt.genSaltSync(14);
    this.password = bcrypt.hashSync(this.password as string, salts);
  }
  next();
});

export const User = mongoose.model<IUser>("User", UserSchema);
