
import { model, Schema } from "mongoose";
import { TMassege } from "./message.interface";

const messageSchema = new Schema<TMassege>({
    message: {type: String, required: true},
    from: {type: Schema.Types.ObjectId, ref: "user"},
    to: {type: Schema.Types.ObjectId, ref: "user"},

},
{
    timestamps: true
}
)


export const message = model('message',messageSchema)