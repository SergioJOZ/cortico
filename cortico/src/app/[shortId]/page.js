'use client'
import Header from "@/components/ui/Header/Header";
import { useEffect } from "react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";


export default function RedirectPage(params){
    
    useEffect(() => {
        const {shortId} = params.params
        async function getData(){
            const url = await axios.get("/api/shorter?shortId=" + shortId)
        }
        getData()

        
    }, [])
return <div>
        <Header />

    </div>
}