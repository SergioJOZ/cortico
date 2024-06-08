import { mongooseConnect } from "../../../../lib/mongoose";
import { ShortLink } from "../../../../models/ShortLink";

export async function POST(req,res){
    await mongooseConnect();
    const data = await req.json()
    const newShortLink = await ShortLink.create(data)
    return Response.json(newShortLink)
}