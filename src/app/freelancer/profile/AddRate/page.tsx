'use client';

import React, { useState, useEffect } from 'react';
import { FooterProfile } from "@/app/freelancer/profile/components/FooterProfile";
import { NavbarProfile } from "@/app/freelancer/profile/components/NavbarProfile";
import { Button } from '@/app/shared/components/ui/button';

export default function AddRatePage() {
  const [baseRate, setBaseRate] = useState<string>('1000000');
  const [serviceFee, setServiceFee] = useState<number>(25000);
  const [youllGet, setYoullGet] = useState<number>(975000);

  // Calculate service fee and you'll get amount based on base rate
  useEffect(() => {
    const rate = parseFloat(baseRate.replace(/\./g, '')) || 0;
    const fee = rate * 0.025; // 2.5% service fee
    const net = rate - fee;
    
    setServiceFee(fee);
    setYoullGet(net);
  }, [baseRate]);

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('id-ID').format(num);
  };

  const handleBaseRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove non-numeric characters and format
    const value = e.target.value.replace(/[^\d]/g, '');
    setBaseRate(value);
  };

  const formatDisplayValue = (value: string): string => {
    if (!value) return '';
    return new Intl.NumberFormat('id-ID').format(parseInt(value));
  };

  const handleFinish = () => {
    console.log('Base Rate:', baseRate);
    console.log('Service Fee:', serviceFee);
    console.log("You'll Get:", youllGet);
    // Logic untuk menyelesaikan setup
  };

  return (
    <>
      <NavbarProfile />
      
      <div className="min-h-screen pb-24">
        <div className="mx-auto px-[92px] py-12">
          {/* Content Grid */}
          <div className="grid grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-[51px] font-bold text-text-primary leading-tight mb-6">
                Final step!<br />
                Set your <span className="text-blue-500">base rate</span><br />
                to get started.
              </h1>
              
              <div className="mb-6">
                <p className="text-[25px] text-text_primary font-semibold mb-2 leading-tight">
                  Clients will see this on your profile and in search results. Don't worry, you can adjust it for each new project.
                </p>
                <a href="#" className="text-blue-500 text-[16px] underline hover:text-blue-600">
                  learn more
                </a>
              </div>
            </div>

            {/* Right Column - Rate Form */}
            <div className="flex flex-col justify-center">
              {/* Enter your base rate */}
              <div className="mb-8">
                <h2 className="text-[22px] font-semibold text-text-primary mb-[20px]">
                  Enter your base rate
                </h2>
                <div className="flex items-center">
                  <div className="relative flex-1">
                    <span className="absolute left-6 top-1/2 transform -translate-y-1/2 text-[18px] text-gray-500">
                      Rp
                    </span>
                    <input
                      type="text"
                      value={formatDisplayValue(baseRate)}
                      onChange={handleBaseRateChange}
                      placeholder="1.000.000"
                      className="w-full bg-white pl-14 pr-6 py-4 text-[18px] text-right border border-gray-300 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                    />
                  </div>
                  <span className="ml-4 text-[18px] text-gray-700 font-medium">
                    /project
                  </span>
                </div>
              </div>

              {/* Service Fee */}
              <div className="mb-8">
                <h2 className="text-[22px] font-semibold text-gray-900 mb-4">
                  Service Fee
                </h2>
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="w-full px-6 py-4 text-[18px] text-right border border-gray-300 rounded-[15px] bg-gray-50">
                      <span className="text-gray-700">
                        Rp {formatNumber(serviceFee)}
                      </span>
                    </div>
                  </div>
                  <span className="ml-4 text-[18px] text-gray-700 font-medium">
                    /project
                  </span>
                </div>
              </div>

              {/* You'll get */}
              <div className="mb-8">
                <h2 className="text-[22px] font-semibold text-gray-900 mb-4">
                  You'll get
                </h2>
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="w-full px-6 py-4 text-[18px] text-right border border-gray-300 rounded-[15px] bg-gray-50">
                      <span className="text-gray-700">
                        Rp {formatNumber(youllGet)}
                      </span>
                    </div>
                  </div>
                  <span className="ml-4 text-[18px] text-gray-700 font-medium">
                    /project
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 w-full">
        <FooterProfile
          rightContent={
          <Button 
          className="text-base" 
          size='lg'
          >Profile review</Button>
        }
        />
      </div>
    </>
  );
}