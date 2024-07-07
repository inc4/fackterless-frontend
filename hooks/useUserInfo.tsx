import { useEffect, useState } from 'react';
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react';
import { BrowserProvider, Contract, ethers } from 'ethers';
import { Abi } from '@/services/abi'
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '';

export const useUserInfo = () => {
  const [user, setUser] = useState(null);
  const { walletProvider} = useWeb3ModalProvider();
  const { address, chainId} = useWeb3ModalAccount()

  useEffect(() => {
    getUserInfo()
  }, [chainId])


  const getUserInfo = async () => {
    if (!walletProvider || !address) return;

    const ethersProvider = new BrowserProvider(walletProvider)
    const signer = await ethersProvider.getSigner()

    const contract = new ethers.Contract(CONTRACT_ADDRESS, Abi, signer);

    try {
      const user = await contract.user();
      setUser(user[2])
    } catch(e) {
      console.log('Error get user data from contract', e)
    }

  }

  return user;
}
