//@ts-nocheck
'use client';

import Image from 'next/image';
import ReactSpeedometer from "react-d3-speedometer"
import { Tweet } from 'react-tweet'
import { getUserTwitterInfo } from '@/services/twitter';
import { useEffect, useState } from 'react';
//import { useSearchParams } from 'next/navigation';

export default function User() {
  const [loading, setLoading] = useState(false);
  const [twitterData, setTwitterData] = useState(null);
  // const searchParams = useSearchParams()
  const userId = '';//searchParams.get('id');

  useEffect(() => {
    if(!userId) return;

    const fetchUserInfo = async() => {
      setLoading(true);
      const data = await getUserTwitterInfo(userId);
      setTwitterData(data);
      setLoading(false)
    }
    fetchUserInfo();
  }, [userId]);


  return !twitterData ?
    <div className="flex justify-center items-center">
      <div className="text-[30px]">Loading data...</div>
    </div> :
    <div className="flex flex-col w-full mt-20 pb-20 h-full">
      <div className="flex flex-row w-full px-40">
        <div className="felx flex-col w-full">
          <div className="flex flex-row w-full">
            <Image className="rounded-full h-[100px]" src={twitterData?.profile_image_url} alt="vitalik" width={100} height={100}/>
            <div className="flex flex-col ml-10">
              <div className="text-[30px]">{twitterData?.name}</div>
              <div className="text-[20px]">@{twitterData?.username}</div>
            </div>
          </div>
          <div className="flex w-full mt-10 justify-center">
            {twitterData?.description}
          </div>
        </div>

        <div className="flex w-full justify-end">
          <ReactSpeedometer
            height={200}
            maxValue={100}
            value={50}
            startColor="red"
            segments={5}
            endColor="green"
            currentValueText="Nice!"
          />
        </div>
      </div>
      <div className="text-[30px] my-10 ">X Feed Posts Analytics</div>
      <div className="w-full justify-center items-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="rounded-xl border-2 border-green-400 bg-green-400 h-[300px] overflow-auto">
          <Tweet id="1807867269554528679"/>
        </div>
        <div className="rounded-xl border-2 border-green-400 bg-green-400  h-[300px] overflow-auto">
          <Tweet id="1807800648273977604"/>
        </div>
        <div className="rounded-xl border-2 border-red-500 bg-red-500  h-[300px] overflow-auto">
          <Tweet id="1807735283854536965"/>
        </div>
        <div className="rounded-xl border-2 border-green-400 bg-green-400  h-[300px] overflow-auto">
          <Tweet id="1807662164934578290"/>
        </div>
        <div className="rounded-xl border-2 border-green-400 bg-green-400  h-[300px] overflow-auto">
          <Tweet id="1807444483690353078"/>
        </div>
        <div className="rounded-xl border-2 border-red-500 bg-red-500  h-[300px] overflow-auto">
          <Tweet id="1807347342036611270"/>
        </div>
        <div className="rounded-xl border-2 border-red-500 bg-red-500  h-[300px] overflow-auto">
          <Tweet id="1806387519090577473"/>
        </div>
        <div className="rounded-xl border-2 border-green-400 bg-green-400  h-[300px] overflow-auto">
          <Tweet id="1805964733209837965"/>
        </div>
        <div className="rounded-xl border-2 border-red-500 bg-red-500  h-[300px] overflow-auto">
          <Tweet id="1805187880966377533"/>
        </div>
        <div className="rounded-xl border-2 border-red-500 bg-red-500  h-[300px] overflow-auto">
          <Tweet id="1804847370896572726"/>
        </div>
        {/*{[...Array(10).keys()].map((item, index) => {*/}
        {/*  return (*/}
        {/*    <div key={index} className="rounded-xl border-1 border-green-400 bg-green-400">*/}
        {/*      <Tweet id="1809291629091500487"/>*/}
        {/*    </div>*/}
        {/*  )*/}
        {/*})}*/}
      </div>
    </div>
}
