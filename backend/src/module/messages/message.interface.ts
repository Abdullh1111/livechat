import { Types } from "mongoose"

export type TMassege = {
    message: string;
    from: Types.ObjectId;
    to: Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date
}