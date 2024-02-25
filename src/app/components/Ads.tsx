import React, { FC } from 'react';

interface AdsProps {}

export const Ads: FC<AdsProps> = ({}) => {
  return (
    <div className="container">
      <div className="bg-light h-[145px] text-lightGreen text-5xl sm:text-lg flex items-center justify-center uppercase rounded-md">
        google adsense
      </div>
    </div>
  );
};
