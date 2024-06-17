import Button from "@/components/ui/Button/Button";
import Header from "@/components/ui/Header/Header";
import Input from "@/components/ui/Input/Input";

export default function SignupPage(){
    return <div>
        <Header />
        <div className="flex items-center justify-center h-screen">
            
            <div className="bg-white p-2 ">
            <h1 className="text-2xl font-bold text-center mb-2">Sign up</h1>
                <Input placeholder="Email" type="email"/>
                <Input placeholder="Password" type="password"/>
                <Input placeholder="Confirm password" type="password"/>

                <div className="flex justify-center pt-2">
                <Button text="Register"/>
                </div>
            </div>
        </div>
    </div>
}
