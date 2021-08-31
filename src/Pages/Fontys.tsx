import React from 'react'
import  Sidebar  from "../Components/Sidebar/Sidebar"
import AuthCheck from "../Components/Authentication/AuthCheck"

export default function Fontys() {
    return (
        <div>
            <AuthCheck>
            <Sidebar>Fontys</Sidebar>
            </AuthCheck>
        </div>
    )
}
