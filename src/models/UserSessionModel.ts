import mongoose, { Schema } from "mongoose";

export interface IUserSession {
  _id: string;

  userId: string;

  token: string;

  address: string;
  state?: string;
  city?: string;
  zip?: string;

  createdAt: Date;
  updatedAt: Date;
}

export const UserSessionSchema: Schema = new Schema<IUserSession>({
  userId: { type: String, required: true },
  token: { type: String, required: true },
  address: { type: String, required: true },
  state: { type: String },
  city: { type: String },
  zip: { type: String },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

UserSessionSchema.index({ token: 1 }, { unique: true });

UserSessionSchema.pre("updateOne", function (next) {
  this.set({ updatedAt: Date.now() });
  next();
});

export const UserSessionModel = mongoose.model<IUserSession>(
  "UserSession",
  UserSessionSchema
);
