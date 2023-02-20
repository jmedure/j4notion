import react from 'react';
import Emoji from './Emoji';

export default function Header() {
  return (
    <div className="flex bg-white w-full p-4 space-x-2 justify-between flex-row border-b border-[#EDEDEC] sticky top-0">
      <div className="text-lg font-sans flex space-x-2">
        <p>
          <Emoji label="hand-wave" symbol="👋" />
        </p>
        <p>Jacob for Notion</p>
      </div>
      <p className="button-primary py-1 rounded-md px-2">Email Jake</p>
    </div>
  );
}
