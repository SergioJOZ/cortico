import Image from "next/image";
import Button from "../ui/Button/Button";
import Link from "next/link";

export default function UrlCard({shortenUrl}){
    return <div className="flex flex-col bg-green-200 rounded-lg mt-2 gap-1 pt-1 mb-2">
        <div className="flex justify-around">
            <Link href={process.env.NEXT_PUBLIC_URL + shortenUrl.shortId} className="font-semibold">{process.env.NEXT_PUBLIC_URL + shortenUrl.shortId}</Link> <br/> {shortenUrl.originUrl}
            <div className="flex flex-col items-center">
            <Image src={shortenUrl.qrCode} alt="prueba" width={100} height={100}/>
            <p className="text-sm">
            <Link href={"/signup"} className="bg-blue-300 rounded-lg pl-1 pr-1 font-bold hover:bg-blue-200">Sign up</Link> or <Link href={"/login"} className="bg-blue-300 rounded-lg pl-1 pr-1 font-bold hover:bg-blue-200">Log in</Link> to see stats about your link
            </p>

            </div>
        </div>   
            <Button text={"Copy link"} /> 
        </div>
}