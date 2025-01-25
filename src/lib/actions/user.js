import User from "../models/user.model";
import { connect } from '../mongodb/mongoose';

export const createOrUpdateUser = async (
   id,
   first_name,
   last_name,
   image_url,
   email_adresses
) => {
   try {
      await connect();
      const user = await User.findOneAndUpdate(
         { clerkId: id },
         {
            $set: {
               firstName: first_name,
               lastName: last_name,
               profilePicture: image_url,
               email: email_adresses[0].email_address,
            }
         },
         { upsert: true, new: true }
      );
      return user;
   } catch (error) {
      console.log("error: could not create or update user", error);
   }
};

export const deleteUser = async (id) => {
   try {
      await connect();
      await User.findOneAndDelete({ clerkId: id });
   } catch (error) {
      console.log("error: could not delete the user", error);
   }
};
