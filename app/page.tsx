'use client';

import { useWeb3ModalAccount } from '@web3modal/ethers/react';

export default function Home() {
  const { address } = useWeb3ModalAccount();

  return (
    <main className="flex flex-col items-center mt-20 h-screen">
      <div className="flex flex-col justify-center items-center max-w-[723px]">
        <div className="flex justify-center items-center text-[68px] text-center">Intelligent Accuracy in Crypto
          Predictions
        </div>
        <div className="w-full relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
            </svg>
          </div>
          <input type="text" name="search" id="search" disabled={!!address}
                 className="block bg-[#0D0D0D] shadow-[0_15px_60px_-15px_rgba(0,178,255,0.5)] sha w-full rounded-2xl border-2 border-[#1045FF] my-10 py-3 px-20 text-white text-center text-[20px] placeholder:text-grey placeholder:text-center focus:outline-none"
                 placeholder="Insert the link or X account handler"/>
        </div>
        <a
          href="/user"
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#20A9F7] to-[#1045FF] hover:bg-[#20A9F7] py-3 px-8 text-[20px] font-semibold focus:outline-none">
          See Beyond the Hype
        </a>
      </div>
      <div>{address}</div>
    </main>
  );
}
