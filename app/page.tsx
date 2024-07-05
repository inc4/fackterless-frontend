'use client';

import { useWeb3ModalAccount } from '@web3modal/ethers/react';

export default function Home() {
  const { address } = useWeb3ModalAccount();

  return (
    <main className="flex flex-col justify-center items-center mt-5">
      <div>Facterless Front App</div>
      <div>{address}</div>
    </main>
  );
}
