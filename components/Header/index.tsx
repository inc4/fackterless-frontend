'use client';
import Image from 'next/image';
import {
  Button,
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useWeb3Modal } from '@web3modal/scaffold-react';
import { useDisconnect, useWeb3ModalAccount } from '@web3modal/ethers/react';

const Header = () => {
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect()
  const { address } = useWeb3ModalAccount()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-transparent">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-6" aria-label="Global">
        <div className="hidden sm:flex md:flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="text-[25px] font-light">FACTERLESS</span>
          </a>
        </div>
        <div className="flex sm:hidden md:hidden lg:hidden">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">FACTERLESS</span>
          </a>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-[16px] tracking-[.25em] hover:text-[#20A9F7]">
            Search
          </a>
          <a href="#" className="text-[16px] tracking-[.25em] hover:text-[#20A9F7]">
            Top Influencers
          </a>
          <a href="#" className="text-[16px] tracking-[.25em] hover:text-[#20A9F7]">
            About Us
          </a>
        </PopoverGroup>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          {!address ? (
              <Button
                onClick={() => open()}
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#20A9F7] to-[#1045FF] py-3 px-6 text-[16px] font-semibold focus:outline-none">
                  Connect Wallet
              </Button>
          ) : (
            <Button
              onClick={() => disconnect()}
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#20A9F7] to-[#1045FF] py-3 px-6 text-[16px] font-semibold focus:outline-none">
                Disconnect
            </Button>
          )}

        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
          </button>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10"/>
        <DialogPanel
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-8 w-auto"
                width={273}
                height={51}
                src="/logo.svg"
                alt="logo"/>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  How it Works
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Telegram
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Twitter X
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Header;
