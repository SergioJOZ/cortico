import Link from "next/link";
import Button from "../Button/Button";

export default function Header(){
    return <header className="flex justify-around bg-white">
        <div className="flex gap-2 pt-4 font-medium">
            <Link href={"/links"}>Links</Link>
            <Link href={"/qr"}>QR Codes</Link>
        </div>
        <Link href={"/"}>
            <h1 className="font-extrabold text-4xl text-green-400">CORTICO!</h1>
            <p className="font-semibold text-center">An URL Shortener</p>
        </Link>
        <div className="pt-4">
            <Link href={"/signup"}>Sign up</Link>
            <Link href={"/login"} className="ml-2"><Button text={"Log in"}/></Link>
        </div>
    </header>
}