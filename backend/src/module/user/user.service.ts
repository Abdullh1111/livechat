import { NextFunction, Request } from "express";
import { appError } from "../../errorfolder/appError";
import { TUser } from "./user.interface";
import { user } from "./user.model";
import bcrypt from "bcrypt";

const addUser = async (payload: TUser) => {
  // console.log(payload);

  try {
    const result = await user.create(payload);
    return result;
  } catch (err: any) {
    throw new appError(err.message, 400);
  }
};

const loginUser = async (payload: TUser) => {
  // console.log(payload);

  try {
    const { email, password } = payload;
    const result = await user.findOne({ email });
    if (!result) {
      throw new appError("User does't exists", 400);
    }
    const isMatch = await bcrypt.compare(password, result.password);
    // console.log(isMatch);

    if (!isMatch) {
      throw new appError("Invalid password", 400);
    }
    return result;
  } catch (err: any) {
    throw new appError(err.message, 400);
  }
};

const getAllPeople = async (payload: TUser) => {
  // console.log(payload);

  try {
    const { email } = payload;

    const result = await user.find({}, { password: 0 });
    if (!result) {
      throw new appError("There is no user", 400);
    }

    return result;
  } catch (err: any) {
    throw new appError(err.message, 400);
  }
};

const userData = async (payload: TUser) => {
  // console.log(payload);

  try {
    const { email } = payload;

    const result = await user.findOne({ email }, { password: 0 });
    if (!result) {
      throw new appError("There is no user", 400);
    }

    return result;
  } catch (err: any) {
    throw new appError(err.message, 400);
  }
};

const editUser = async (req: Request) => {
  // console.log(req.body);
  // console.log(req.body);

  try {
    const { name, email, profileImg } = req.body;
    console.log(profileImg);
    
    if (profileImg !== "undefined") {
      const result = await user.updateOne({ email }, { name, profileImg });
      return result;
    } else {
      const result = await user.updateOne({ email }, { name });
      return result;
    }
    // console.log(result);
  } catch (err: any) {
    throw new appError(err.message, 400);
  }
};

export default {
  addUser,
  loginUser,
  getAllPeople,
  editUser,
  userData,
};
