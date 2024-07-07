'use client';

import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react';
import { useCallback, useState } from 'react';
import { Button } from '@headlessui/react';
import TypingSpinner from '@/components/TypingSpinner';
import Spinner from '@/components/Spinner';
//import { useRouter } from 'next/navigation'
import { BrowserProvider, Contract } from 'ethers';
import { AbiAgentOne } from '@/services/abiAgentOne'

export default function Home() {
  const { address } = useWeb3ModalAccount();
  const [userName, setUserName] = useState('');
  const [showAnimation, setShowAnimation] = useState(false);
  const { walletProvider} = useWeb3ModalProvider();
  const [txId, setTxId] = useState(null);
  //const router = useRouter();

  const getAgentOneData = useCallback(async (input: string) => {
    if (!walletProvider || !input) return;
    setShowAnimation(true);
    try {
      const ethersProvider = new BrowserProvider(walletProvider)
      const signer = await ethersProvider.getSigner()
      const contract = new Contract(process.env.NEXT_PUBLIC_AGENT_ONE_ADDRESS || "", AbiAgentOne, signer)
      const tx = await contract.runAgent(input)
      const receipt = await tx.wait();
      setTxId(receipt.hash);
      console.log(receipt);
      console.log(`Tx: ${receipt.hash}`);
      console.log(`Run Id: ${receipt.logs[1].args[0]}`);
    } catch(e) {
      console.log('Error Get Data - AgentOne', e)
    }
    setShowAnimation(false);
  }, [walletProvider])

  //useAgentOne();

  const buttonHandler = () => {
    // TODO need check if user name is wrong and show notify or error
    getAgentOneData(userName)
  }

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
          <input
            type="text"
            name="search"
            autoComplete="off"
            id="search"
            disabled={false}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="block bg-[#0D0D0D] shadow-[0_15px_60px_-15px_rgba(0,178,255,0.5)] sha w-full rounded-2xl border-2 border-[#1045FF] my-10 py-3 px-20 text-white text-center text-[20px] placeholder:text-grey placeholder:text-center focus:outline-none"
            placeholder="Insert the link or X account handler"
          />
        </div>
        {showAnimation ?
          <Spinner /> :
        <Button
          onClick={buttonHandler}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#20A9F7] to-[#1045FF] hover:bg-[#20A9F7] py-3 px-8 text-[20px] font-semibold focus:outline-none">
          See Beyond the Hype
        </Button>}
        {txId && <div>txId: {txId}</div>}
      </div>
      <div className="mt-20">
        {showAnimation && <TypingSpinner />}
      </div>
    </main>
  );
}
