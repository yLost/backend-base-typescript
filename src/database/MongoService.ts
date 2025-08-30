import { FastifyInstance } from "fastify";
import { connect } from "mongoose";

export class MongoService {
  constructor(private readonly app: FastifyInstance) {}

  async connect() {
    if (!process.env.MONGODB_URI) {
      this.app.log.error("MONGODB_URI is not defined");
      return;
    }

    try {
      await connect(process.env.MONGODB_URI || "");

      this.app.log.info("MongoDB connected successfully!");
    } catch (err) {
      this.app.log.error("Error connecting to MongoDB: " + err);
    }
  }
}
