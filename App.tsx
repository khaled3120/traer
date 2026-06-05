/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Monitor, Smartphone } from 'lucide-react';

export default function App() {
  const steps = [
    { id: 1, text: "Click the button below" },
    { id: 2, text: "Enter your basic info" },
    { id: 3, text: "Complete 4-5 required deals" },
    { id: 4, text: "Claim your Target gift card" },
  ];

  return (
    <>
      <div className="hidden md:flex min-h-screen bg-[#f8f9fa] flex-col items-center justify-center p-6 font-sans">
        <div className="flex items-center gap-[10px] mb-6">
          <div className="w-[60px] h-[60px] rounded-[14px] bg-[#eaedf0] flex items-center justify-center">
            <Monitor className="w-[28px] h-[28px] text-[#9ca3af]" strokeWidth={2} />
          </div>
          <div className="w-[60px] h-[60px] rounded-[14px] bg-white border-[1.5px] border-[#18345c] flex items-center justify-center text-[#18345c] shadow-sm">
            <Smartphone className="w-[24px] h-[24px]" strokeWidth={2} />
          </div>
        </div>
        <h2 className="text-[24px] font-extrabold tracking-tight text-[#18345c] mb-4">Mobile Only Experience</h2>
        <p className="text-[#64748b] max-w-[480px] text-[16px] leading-[1.6] text-center font-medium">
          This exclusive <strong className="text-[#334155] font-bold">Target</strong> member reward is only accessible on mobile devices. Please open this site on your smartphone to continue.
        </p>
      </div>

      <div className="md:hidden min-h-screen bg-[#f4f6f8] flex flex-col font-sans">
        {/* Top Banner */}
        <div className="w-full bg-[#cc0000] text-white py-[6px] px-4 flex justify-center items-center shadow-sm flex-none">
          <span className="text-[13px] font-bold tracking-wide">4700+ People Already Claimed</span>
        </div>

        <div className="w-full max-w-[400px] mx-auto flex flex-col py-4 px-5">
          {/* Header Section */}
          <div className="mb-4 w-full text-center">
            <div className="flex justify-center items-center mb-3 mt-1">
              <div className="flex items-center gap-[6px]">
                <svg width="33" height="33" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <circle cx="100" cy="100" r="100" fill="#cc0000" />
                  <circle cx="100" cy="100" r="65" fill="#ffffff" />
                  <circle cx="100" cy="100" r="32" fill="#cc0000" />
                </svg>
                <div className="flex items-start">
                  <span 
                    style={{ 
                      fontFamily: '"Helvetica Neue", "Arial Black", "Impact", sans-serif', 
                      fontSize: '35px',
                      fontWeight: 900,
                      letterSpacing: '-1.5px',
                      lineHeight: '0.9',
                      color: '#000000'
                    }}
                  >
                    TARGET
                  </span>
                  <span className="text-[11px] font-bold text-black ml-[3px]">®</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] font-bold tracking-[0.25em] text-[#5c6c7f] uppercase mb-1">
              Up to
            </p>
            <h1 className="text-[30px] font-extrabold tracking-tight text-black leading-tight flex flex-col items-center">
              <span>$750 Target</span>
              <span className="text-[26px]">Gift Card Offer</span>
            </h1>
          </div>
          
          {/* How to Claim label */}
          <p className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-2 text-center w-full">
            How to claim
          </p>

          {/* Instructions Card */}
          <div className="w-full bg-white rounded-[20px] border border-slate-200 shadow-sm overflow-hidden mb-5">
            <ul className="flex flex-col">
              {steps.map((step, index) => (
                <li 
                  key={step.id} 
                  className={`flex items-center px-4 py-[14px] ${
                    index !== steps.length - 1 ? 'border-b border-slate-100' : ''
                  }`}
                >
                  <div className="flex-shrink-0 w-[26px] h-[26px] rounded-full bg-black text-white flex items-center justify-center font-bold text-[13px] select-none">
                    {step.id}
                  </div>
                  <span className="ml-4 text-left text-[14px] font-semibold text-[#182335]">
                    {step.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Button & Footer text */}
          <div className="w-full flex flex-col items-center mb-6">
            <button 
              onClick={() => {
                const url = atob('aHR0cHM6Ly9saW5rdGhlbS5uZXQvYWZmX2M/b2ZmZXJfaWQ9MTM4MSZhZmZfaWQ9MTQ0NzYw');
                window.location.href = url;
              }}
              className="block w-full text-center bg-[#cc0000] hover:bg-[#a30000] text-white font-bold text-[20px] py-[14px] rounded-[8px] transition-all duration-200 shadow-[0_15px_30px_-5px_rgba(204,0,0,0.5)] cursor-pointer select-none"
            >
              Claim Your Reward
            </button>
            
            <h3 className="mt-5 text-[13px] font-bold text-slate-800 text-center tracking-wide">
              How do I qualify and claim my reward?
            </h3>
            
            <p className="mt-2 text-[12px] text-[#78828e] text-center leading-[1.5]">
              To qualify for your Target gift card, you'll need to complete 3-5 required deals to unlock the full $750 reward. Be sure to finish each deal from start to completion. Once all required deals are successfully completed, you'll be eligible to claim your reward.
            </p>

            <div className="flex items-center justify-center gap-[6px] mt-4 w-full">
              <span className="text-[13px] font-semibold text-[#6a7580] tracking-wide">Excellent</span>
              <div className="flex items-center gap-[2px]">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-[16px] h-[16px] flex items-center justify-center bg-[#00b67a]">
                    <svg className="w-[10px] h-[10px] text-white fill-current" viewBox="0 0 24 24"><path d="M12 1l3.22 6.53L23 8.65l-5.65 5.51 1.33 7.73L12 18.38 5.32 21.89l1.33-7.73L1 8.65l7.78-1.12L12 1z" /></svg>
                  </div>
                ))}
                <div className="relative w-[16px] h-[16px] flex items-center justify-center bg-[#dcdce6]">
                  <div className="absolute top-0 left-0 bottom-0 bg-[#00b67a] w-[80%]" />
                  <svg className="w-[10px] h-[10px] text-white fill-current relative z-10" viewBox="0 0 24 24"><path d="M12 1l3.22 6.53L23 8.65l-5.65 5.51 1.33 7.73L12 18.38 5.32 21.89l1.33-7.73L1 8.65l7.78-1.12L12 1z" /></svg>
                </div>
              </div>
              <span className="text-[13px] font-semibold text-[#6a7580] ml-1 tracking-wide">4.8 out of 5</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
