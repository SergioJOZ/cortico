"use server"

import { permanentRedirect } from "next/navigation";
import { mongooseConnect } from "../../../lib/mongoose";
import { ShortLink } from "../../../models/ShortLink";

export async function redirect(params){
    "use server"
    
    //get short id data for long url
    await mongooseConnect();
    const shortId = params.params.shortId
    const url = await ShortLink.findOne({shortId: shortId})
    
    //redirect
    permanentRedirect(url.originUrl)
}