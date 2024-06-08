import UrlCard from "@/components/UrlCard/UrlCard";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";


export default function Shorter(){
    const [originUrl, setOriginUrl] = useState("");
    const [shortenUrl, setShortenUrl] = useState("");
    const [shorten, setShorten] = useState(false);

  const handleShorten = async (e) => {
    e.preventDefault()
    
    if(originUrl){
        let shortId = nanoid(5);

        const newShortLink = await axios.post("/api/shorter", {
            originUrl,
            shortId
        });

        setShortenUrl(newShortLink.data)
        console.log(shortenUrl)
        setShorten(true); 
    }
  }



    return <section className="mr-auto mb-5 ml-auto max-w-3xl shadow rounded-md pt-2.5 pr-7 pb-1 pl-7 text-center bg-white">
        <h2 className="font-semibold text-xl">Copy and paste the URL that you want to be shorter :)</h2>
        <form className="flex gap-1 pt-2" onSubmit={handleShorten}>
            <Input placeholder="Place your link here..." value={originUrl} onChange={(e) => setOriginUrl(e.target.value)} />
            <Button text="Shorten" type="submit"/>
        </form>
        {shorten && <UrlCard shortenUrl={shortenUrl}/> }
    </section>
}