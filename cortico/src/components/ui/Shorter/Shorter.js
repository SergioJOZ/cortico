import UrlCard from "@/components/UrlCard/UrlCard";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";
import QRCode from "qrcode"
import isURL from "validator/lib/isURL";

export default function Shorter(){
    const [originUrl, setOriginUrl] = useState("");
    const [shortenUrl, setShortenUrl] = useState("");
    const [shorten, setShorten] = useState(false);
    const [error, setError] = useState(false)

  const handleShorten = async (e) => {
    e.preventDefault()

    //Validate if origin url is a valid url
    if(isURL(originUrl)){

        //generate short id for link
        let shortId = nanoid(5);
        
        //generate qr code for link
        const urlQR = 'http://' + process.env.NEXT_PUBLIC_URL + shortId;
        const generateQR = async urlQR => {
            try {
              return await QRCode.toDataURL(urlQR)
            } catch (err) {
              console.error(err)
            }
          }
        
        const qrCode =  await generateQR(urlQR)

        //Post data to db
        const newShortLink = await axios.post("/api/shorter", {
            originUrl,
            shortId,
            qrCode
        });

        //Set data to state to show it to the user
        setShortenUrl(newShortLink.data)
        setError(false)
        setShorten(true); 
    }else{
      setError(true)
    }
  }



    return <section className="mr-auto mb-5 ml-auto max-w-3xl shadow rounded-md pt-2.5 pr-7 pb-1 pl-7 text-center bg-white">
        <h2 className="font-semibold text-xl">Copy and paste the URL that you want to be shorter :)</h2>
        <form className="flex gap-1 pt-2" onSubmit={handleShorten}>
            <Input placeholder="Place your link here..." value={originUrl} onChange={(e) => setOriginUrl(e.target.value)} />
            <Button text="Shorten" type="submit"/>
        </form>
        {error && <div className="bg-red-300 rounded-lg mt-2">
          There has been an error, please check if you're passing a valid url</div>}
        {shorten && <UrlCard shortenUrl={shortenUrl}/> }
    </section>
}