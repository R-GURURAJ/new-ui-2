import React from 'react'
import SideBar from "./HeroNew/SideBar"
import HeaderRightStudent from "./HeroNew/HeaderRightStudent"
import CardHover from '../../CardHover'
export function StudentView() {
    return (
        <main class="relative w-full h-[97vh] overflow-hidden rounded-2xl" data-theme="night">
            <div class="flex items-start justify-between">
                <SideBar />
                <HeaderRightStudent />
                {/* <CardHover/> */}
            </div>
        </main>
    )
}
