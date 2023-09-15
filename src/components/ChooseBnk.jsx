import React from "react";

const ChooseBnk = () => {
  return (
    <div className="mt-24 xl:flex">
      <div className="p-2 text-center">
        <div className="md:flex md:gap-4 md:pl-12">
          <h2 className="text-4xl">Why choose</h2>
          <span className="text-4xl">Easybank?</span>
        </div>
        <div className="mt-4 text-GrayishBlue">
          <p className="px-12 md:text-left md:w-[560px]">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
      </div>

      <div className="bg-LightGrayish p-8 lg:flex  text-center">
        <div className="mt-12">
          <div className="flex items-center justify-center">
            <img src="./images/icon-online.svg" alt="" />
          </div>
          <h2 className="text-xl mt-4">Online Banking</h2>
          <p className="mt-4 text-sm px-14 md:px-44">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world
          </p>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-center">
            <img src="./images/icon-onboarding.svg" alt="" />
          </div>
          <h2 className="text-xl mt-4">Fast Onboarding</h2>
          <p className="mt-4 text-sm px-12 md:px-44">
            We don't do branches. Open yout account in minutes online and start
            taking control of your finances right away
          </p>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-center">
            <img src="./images/icon-api.svg" alt="" />
          </div>
          <h2 className="text-xl mt-4">Open API</h2>
          <p className="mt-4 text-sm px-14 md:px-44">
            Manage yout savings, investments, pension, and much more from one
            account. Tracking your money has never been easier
          </p>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-center">
            <img src="./images/icon-api.svg" alt="" />
          </div>
          <h2 className="text-xl mt-4">Open API</h2>
          <p className="mt-4 text-sm px-14 md:px-44">
            Manage yout savings, investments, pension, and much more from one
            account. Tracking your money has never been easier
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseBnk;
