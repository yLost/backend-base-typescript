import { BadRequest } from "@/errors/BadRequest";
import { User } from "@/models/UserModel";
import { TCreateUserSchema } from "@/schemes/UserScheme";

export class UsersService {
  async createUser(data: TCreateUserSchema) {
    console.log(data);

    const userModel = new User({
      name: data.name,
      email: data.email,
      age: data.age,
      password: data.password,
    });

    const user = await userModel.save();

    return user;
  }

  async getUserById({ userId }: { userId: string }) {
    const user = await User.findById(userId);

    if (!user) {
      throw new BadRequest("User not found");
    }

    return user;
  }
}
