import Link from "next/link";
import Button from "../Button/Button";

export default function Header(){
    return <header className="flex justify-around items-center bg-white">
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