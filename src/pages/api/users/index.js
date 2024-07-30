// get all sites of a user
import DbConnect from "@/Config/dbConfig";
import User from "@/Models/User";
import { withAuth } from "../auth/adminAuth";

const handler = async (req, res) => {
  await DbConnect();
  try {
    const users = await User.find();

    return res.status(200).json({ sucess: true, users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

export default withAuth(handler);
