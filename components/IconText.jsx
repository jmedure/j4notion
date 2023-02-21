import React from 'react';
import Image from 'next/image';

export default function IconText(props) {
  return (
    <div className="flex items-center space-x-2 w-[50%]">
      <div className="p-3 relative">
        <Image src={props.src} alt={props.alt} fill="cover" />
      </div>
      <p className="text-[#7D7B78]">{props.text}</p>
    </div>
  );
}
