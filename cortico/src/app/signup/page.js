import Button from "@/components/ui/Button/Button";
import Header from "@/components/ui/Header/Header";
import Input from "@/components/ui/Input/Input";

export default function SignupPage(){
    return <div>
        <Header />
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-2 ">
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm password"/>

                <div className="flex justify-center pt-2">
                <Button text="Register"/>
                </div>
            </div>
        </div>
    </div>
}
