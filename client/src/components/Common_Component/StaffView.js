import React from "react";
import SideBar from "./HeroNew/SideBar";
import HeaderRightStaff from "./HeroNew/HeaderRightStaff";

export function StaffView() {
  return (
    <main
      class="relative w-full h-[97vh] overflow-hidden rounded-2xl"
      data-theme="night"
    >
      <div class="flex items-start justify-between">
        <SideBar />
        <HeaderRightStaff />
      </div>
    </main>
  );
}
