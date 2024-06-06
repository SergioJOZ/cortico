import UrlCard from "@/components/UrlCard/UrlCard";
import Button from "../Button/Button";
import Input from "../Input/Input";


export default function Shorter({shorten, handleShorten}){
    return <section className="mr-auto mb-5 ml-auto max-w-3xl shadow rounded-md pt-2.5 pr-7 pb-1 pl-7 text-center bg-white">
        <h2 className="font-semibold text-xl">Copy and paste the URL that you want to be shorter :)</h2>
        <div className="flex gap-1 pt-2">
            <Input placeholder="Place your link here..." />
            <Button text="Shorten" handleButton={handleShorten}/>
        </div>
        {shorten && <UrlCard/> }
    </section>
}