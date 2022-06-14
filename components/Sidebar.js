import Image from 'next/image'
import React from 'react'
import SidebarMenuItem from './SidebarMenuItem'
import { DotsHorizontalIcon, HomeIcon } from "@heroicons/react/solid"
import { BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxIcon, InboxInIcon, UserIcon } from "@heroicons/react/outline"
export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">

        {/*Twitter LOgo*/}
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1 flex items-center justify-center ">
            <Image width="35" height="35" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png">

            </Image>
        </div>



        <div className="mt-4 mb-2.5 xl:items-start ">
            <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
            <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
            <SidebarMenuItem text="Notificatons" Icon={BellIcon} />
            <SidebarMenuItem text="Messeges" Icon={InboxIcon} />
            <SidebarMenuItem text="Bookmark" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
        </div>
        {/*Tweeet Button*/}
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>

        {/*User photo*/}
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQEm4KkcTR06oA/profile-displayphoto-shrink_200_200/0/1640081576137?e=1655337600&v=beta&t=NKvXdWGIeiphxv-1tWzq1pHnjpuorA980uYg8oSFHJI" alt="user-img" 
            className="h-10 w-10 rounded-full xl:mr-2" />

            <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold">Abinas Behera</h4>
                <p className="text-gray-500">@abinascodes</p>
            </div>

            <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>

        </div>


    </div>
  )
}
