import React from 'react'
import { useState } from 'react';

export default function Home() {

const [noCount, setNoCount] = useState(0);
const [yesPressed, setYesPressed] = useState(false);
const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };
  return (
    <div className='Container'>

        {yesPressed?(
            <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className='text-1'>Oh okay Yes!</div>
            </>
        ):(
            <>

          <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />
          <h1 className="text-4xl my-4">Will you be my Valentine?</h1>
          <div>
            <button className='btn-1' onClick={() => setYesPressed(true)}>
                 yes
            </button>

            <button className='btn-2' onClick={handleNoClick}>{noCount === 0 ? "No" : getNoButtonText()}</button>
          </div>
            </>
        )}


      
    </div>
  )
}
