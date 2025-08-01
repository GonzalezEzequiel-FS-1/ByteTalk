import { TextInput } from '@mantine/core';
import React from 'react';
import { CiCamera, CiMicrophoneOn, CiCirclePlus } from "react-icons/ci";
import { LuSend } from "react-icons/lu";

const TypeArea = () => {
  const icon = <LuSend size={24} />;
  
  return (
    <div className="rounded-xl bg-stone-700 bg-opacity-75 p-2 flex w-full justify-around gap-4 items-center text-3xl text-stone-200">
      <CiCirclePlus />
      <div className="w-full">
        <TextInput
          rightSection={icon}
          rightSectionWidth={40}
          radius="md"
        />
      </div>
      <CiCamera />
      <CiMicrophoneOn />
    </div>
  );
};

export default TypeArea;
