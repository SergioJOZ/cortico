import { redirect } from "next/dist/server/api-utils";
import { mongooseConnect } from "../../../../lib/mongoose";
import { ShortLink } from "../../../../models/ShortLink";

export async function POST(req,res){
    await mongooseConnect();
    const data = await req.json()
    const newShortLink = await ShortLink.create(data)
    return Response.json(newShortLink)
}

export async function GET(req,res){
    await mongooseConnect();
    const searchParams = req.nextUrl.searchParams
    const shortId = searchParams.get('shortId')

    const url = await ShortLink.findOne({shortId: shortId})
    console.log(url)
    
    return Response.json(url)
}