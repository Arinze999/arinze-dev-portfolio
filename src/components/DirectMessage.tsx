import React, { useState, FormEvent } from 'react';

interface DirectMessageProps {
  phoneNumber: string; // Your WhatsApp number in international format without any symbols, e.g., "1234567890"
}

const DirectMessage: React.FC<DirectMessageProps> = ({ phoneNumber }) => {
  const [message, setMessage] = useState('Hi, I would like to chat with you!');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Create the WhatsApp URL with the pre-filled message.
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    console.log(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-4">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
        className="p-2 bg-myWhite text-black text-[14px] h-[10rem] rounded-md focus:outline-none focus:ring-1 focus:ring-dullGreen"
      />
      <button
        type="submit"
        className="flex justify-around w-fit gap-5 items-center bg-dullGreen text-white px-4 py-2 rounded-md hover:bg-myGreen transition-colors"
      >
        Direct Message
        <img src="/wazap.png" alt="wazap" />
      </button>
    </form>
  );
};

export default DirectMessage;
