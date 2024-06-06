import Image from "next/image";
import Button from "../ui/Button/Button";
import Link from "next/link";

export default function UrlCard(){
    return <div className="flex flex-col bg-green-200 rounded-lg mt-2 gap-1 pt-1 mb-2">
        <div className="flex justify-around">
            <p className="font-semibold">c.rt/link <br/> yutu.com</p>
            <div className="flex flex-col items-center">
            <Image src={"/images/qrprueba.png"} alt="qr de prueba" width={50} height={50}/>

            <p className="text-sm">
            <Link href={"/signup"} className="bg-blue-300 rounded-lg pl-1 pr-1 font-bold hover:bg-blue-200">Sign up</Link> or <Link href={"/login"} className="bg-blue-300 rounded-lg pl-1 pr-1 font-bold hover:bg-blue-200">Log in</Link> to see stats about your link
            </p>

            </div>
        </div>   
            <Button text={"Copy link"} /> 
        </div>
}