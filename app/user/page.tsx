'use client';

import Image from 'next/image';
import ReactSpeedometer from "react-d3-speedometer"
import { Tweet } from 'react-tweet'

const imgUrl = 'https://s3-alpha-sig.figma.com/img/f3ac/8d09/ba10708a9130b62a39b1aa0da8907508?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=blZpKgtk-Gx~DuLTbYFRtki8Ox2R19ChgfAvakRvKTZZ2VRP5RXDQIa-rOUDxuj1qe3ErfkRwwVw~04ZODZQYCCVfMnepddG8II3MQw75gWOsQi18QCwJAOn3bn750GoGS1kVd7d9Lc~ZGfeKSaGqtcoED27OygrE3KUl-7~uKuNpJetWriTihiBk2AwY24vBJbPjLHkuia-7Tu51NjMfDcP-MrPEKELJVxvv8LJi8QQvhujETixtPxj4UfKVViN7tsPURvRm8JReJqbx9HCV7BHvVKQscUHUiwGrd9V0yHCyASXHlyh5n3IGccOGRJQpPd7s2njNO8UM~praU~fbw__';

export default function User() {
  return (
    <div className="flex flex-col w-full mt-20">
      <div className="flex flex-row w-full px-40">
        <div className="felx flex-col ">
          <div className="flex flex-row w-full">
            <Image className="rounded-full h-[100px]" src={imgUrl} alt="vitalik" width={100} height={100}/>
            <div className="flex flex-col ml-10">
              <div className="text-[30px]">Vitali.eth</div>
              <div className="text-[20px]">@VitalikButerin</div>
            </div>
          </div>
          <div className="flex w-full mt-10 justify-center">additional info about profile</div>
        </div>

        <div className="flex w-full justify-end">
          <ReactSpeedometer
            height={200}
            maxValue={100}
            value={30}
            startColor="red"
            segments={5}
            endColor="green"
            currentValueText="Not good!"
          />
        </div>
      </div>
      <div className="text-[30px] my-10">X Feed Posts Analytics</div>
      <div className="w-full justify-center items-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(10).keys()].map(() => {
          return (
            <div className="rounded-xl border-1 border-green-400 bg-green-400">
              <Tweet id="1806614218931687491" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
