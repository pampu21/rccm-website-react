'use client'

import { useParams } from 'next/navigation';

export default function ViewUser() {
    const params = useParams()
    const text = `hello ${params.user_id} world`
    return (
        <>
            <div className='flex'>
                <div className='flex-1'>Hellow User {params.user_id} World</div>
                <div className='flex-2'> galing ng text : {text}</div>
            </div>
        </>
    )
}