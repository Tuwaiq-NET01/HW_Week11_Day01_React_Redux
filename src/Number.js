import React from 'react'
import { useState } from 'react'


export default function Number(props) {
    const [phone, setPhone] = useState(props.myContact)
    return (
        <li>
           name {phone.name} number {phone.number}
        </li>
    )
}
