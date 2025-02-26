"use client";
import { DeviceSettings, VideoPreview, useCall } from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ({setIsSetupComplete}:{setIsSetupComplete:(value:boolean)=>void}) => {
  const [isMicCamToggledOn, setisMicCamToggledOn] = useState(false);

  // now we can use call here because we provided it

  const call = useCall();

  if (!call)
    throw new Error("use call must be used within stream call componenet");

  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamToggledOn}
            onChange={(e) => setisMicCamToggledOn(e.target.checked)}
          ></input>
          Join with mic and camera off
        </label>
        <DeviceSettings/>
      </div>
      <Button className="rounded-md px-5 py-2.5 bg-green-500" onClick={()=>{call.join();setIsSetupComplete(true)}}>
       Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
