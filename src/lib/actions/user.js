import User from "../models/user.model";
 import { connect } from '../mongodb/mongoose';


 export const createOrUpdateUser = (
    id,
    first_name,
    last_name,
    image_url,
    email_adresses
 ) => {
    try{
        await connect();
        const user = await User.f
    }
 }