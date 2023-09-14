import React from "react";

const Article = () => {
  return (
    <div className="mt-[40%] p-6 ">
        <h2 className="text-4xl text-center mb-12">Latest Articles</h2>
      <div className="bg-GrayishBlue rounded-md">
        <div className="">
          <img className="rounded-md" src="./public/images/image-currency.jpg" alt="" />
        </div>
        <h4>By Claire Robinson</h4>
        <h2>Receive money in any currency with no fees</h2>
        <p>
          The world is getting smaller and we're becoming more mobile. So why
          should you be forced to only receive money in a single...
        </p>
      </div>

      <div>
        <div>
          <img src="./public/images/image-restaurant.jpg" alt="" />
        </div>
        <h4>By Wilson Hutton</h4>
        <h2>Treat yourself without worrying abour money</h2>
        <p>
          Our simple budgeting teature allows you to separate out your spending
          and set realistic limits each month. That means you
        </p>
      </div>

      <div>
        <div>
          <img src="./public/images/image-plane.jpg" alt="" />
        </div>
        <h4>By Wilson Hutton</h4>
        <h2>Take your Easybank card wherever you go</h2>
        <p>
         We want you to enjoy your travels. This is why we don't change any fees on purchases while you're abroad. We'll even show you ...
        </p>
      </div>

      <div>

        <div>
          <img src="./public/images/image-confetti.jpg" alt="" />
        </div>
        <h4>By Claire Robinson</h4>
        <h2>Our invite-only Beta accounts are now live!</h2>
        <p>
          After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite throung the site..
        </p>
      </div>
    </div>
  );
};

export default Article;
