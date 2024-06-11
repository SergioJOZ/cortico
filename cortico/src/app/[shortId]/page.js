'use client'
import { useEffect } from "react";
import { redirect } from "./actions";
import Header from "@/components/ui/Header/Header";


export default async function RedirectPage(params){
    useEffect(() => {
        redirect(params)
    }, [])

    
    return <div>
        <Header />
        <h1 className="text-center text-4xl">Redirecting...</h1>
    </div>
}