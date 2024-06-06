import Button from "@/components/ui/Button/Button";
import Header from "@/components/ui/Header/Header";
import Input from "@/components/ui/Input/Input";

export default function SignupPage(){
    return <div>
        <Header />
        <div className="flex items-center justify-center h-screen">
            <form className="flex bg-white p-2 ">
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <div className="flex justify-center pt-2">
                <Button text="Log in"/>
                </div>
            </form>
        </div>
    </div>
}