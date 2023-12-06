import React, { FC } from 'react';

interface InfoSectionProps {}

export const InfoSection: FC<InfoSectionProps> = ({}) => {
  return (
    <div className="container mb-8 mt-8">
      <h2 className="text-3xl font-semibold mb-5 mt-5 text-center">
        Services & Checkers
      </h2>
      <div className="grid-cols-3 gap-4 grid">
        <div>
          <img src="https://placehold.co/400x300" alt="" />
          <div className="bg-gray-200 px-2 py-2 min-h-[100px]">
            <div className="text-xl font-semibold">
              Free Service Charge Checker
            </div>
            <div>Sample Description</div>
          </div>
        </div>
        <div>
          <img src="https://placehold.co/400x300" alt="" />
          <div className="bg-gray-200 px-2 py-2 min-h-[100px]">
            <div className="text-xl font-semibold">
              Free surface Water & Flooding Checker
            </div>
            <div>Sample Description</div>
          </div>
        </div>
        <div>
          <img src="https://placehold.co/400x300" alt="" />
          <div className="bg-gray-200 px-2 py-2 min-h-[100px]">
            <div className="text-xl font-semibold">
              Property Management info
            </div>
            <div>Sample Description</div>
          </div>
        </div>
      </div>
    </div>
  );
};
