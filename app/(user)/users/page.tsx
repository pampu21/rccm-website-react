'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'
import { useState } from "react";

export default function Users() {
    const router = useRouter();
    const [type, setType] = useState('Budoy')
    const toUser = () => { 
        router.push('/users/2')
    }

    const toAbnoy = () => { 
        setType('Abnoy')
        alert('congrats isa kanang abnoy')
    }

    return (
        <div className="place-self-center"> 
            Hellow User {type} World Yehey
            <div>
                <Button variant={'default'} size={"lg"} onClick={() => toUser()}> To User</Button>
                <Button variant={'destructive'} size={"lg"} onClick={() => alert('hello guys')}> To User alert</Button>
                <Button variant={'destructive'} size={"lg"} onClick={() => toAbnoy()}> Change type to abnoy</Button>
                <Button variant={'destructive'} size={"lg"} onClick={() => setType('Budoy')}> Change type to budoy</Button>
            </div>
        </div>
    )
}