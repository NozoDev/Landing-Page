import React from "react";

const HeaderMain = () => {
  return (
    <main className="grid md:grid-cols-2 max-w-[1200px] mx-auto md:h-[400px] ">
      {/* Columna izquierda para el texto en dispositivos grandes */}
      <div className="order-2 h-[320px] md:order-1 flex justify-center items-center text-center ">
        <div className="md:first-letter:py-4 md:flex md:flex-col md:items-start  ">
          <h2 className="text-4xl my-0  tracking-wide font-semibold text-black">
            Next generation
          </h2>
          <h2 className="text-4xl my-0  tracking-wide font-semibold text-black">
            digital banking
          </h2>
          <div className="mt-3 text-md">
            <p className="md:my-0 pt-4 text-GrayishBlue">
              Take your financial life online. Your Easybank
            </p>
            <p className="md:my-0  text-GrayishBlue">
              account will be a one-stop-shop for spending,
            </p>
            <p className="md:my-0  text-GrayishBlue">
              saving, budgeting, investing, and much more
            </p>
          </div>
          <div className="mt-8 text-center  md:text-left">
            <button
              type="submit"
              className="bg-gradient-to-r from-LimeGreen to-BrightCyan h-12 w-44 rounded-3xl text-white font-semibold"
            >
              Request Invite
            </button>
          </div>
        </div>
      </div>

      {/* Columna derecha para las imágenes en dispositivos grandes */}
      <div className="order-1 md:order-2 md:flex md:flex-col md:items-start">
        <div className="h-[420px] w-auto">
          {/* Imagen de desktop */}
          <img
            className="md:block hidden md:w-full md:h-[470px] lg:h-[650px]"
            src="./images/bg-intro-desktop.svg"
            alt=""
          />

          {/* Imagen de mobile */}
          <div className=" bottom-0">
            <img
              className="relative block md:hidden w-[100%] md:550px"
              src="./images/bg-intro-mobile.svg"
              alt=""
            />

            {/* Otras imágenes de desktop */}
            <img
              className="absolute top-0 w-auto h-auto md:w-[390px] md:h-[590px] lg:w-[460px] lg:h-[780px]"
              src="./images/image-mockups.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
