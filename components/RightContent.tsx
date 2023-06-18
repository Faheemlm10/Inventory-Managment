"use client";
import Image from "next/image";
import emailIcon from "../images/codicon_mail.svg";
import passwordIcon from "../images/passwordIcon.svg";

const RightContent = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col justify-center items-center w-[50%]">
      <div>
        <div className="font-bold text-[26px] justify-self-start">
          Hello Again!
        </div>
        <div className="text-[18px]">Welcome Back</div>
        <form onSubmit={() => onSubmit} className="mt-[2rem]">
          <div className="relative">
            <input
              type="email"
              id="email"
              className="w-[18rem] h-[3rem] rounded-[2rem] border-[#EEEEEE] border-[0.1rem] pl-[3rem] text-[0.9rem] p-[1.6rem]"
              placeholder="Email Address"
            />
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <Image
                src={emailIcon}
                alt="Email Icon"
                className="w-6 h-6 ml-2"
              />
            </div>
          </div>
          <div className="relative mt-[1.5rem]">
            <input
              type="password"
              id="password"
              className="w-[18rem] h-[3rem] rounded-[2rem] border-[#EEEEEE] border-[0.1rem] pl-[3rem] text-[0.9rem] p-[1.6rem]"
              placeholder="Password"
            />
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <Image
                src={passwordIcon}
                alt="Email Icon"
                className="w-6 h-6 ml-2"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-[18rem] mt-[1.5rem] rounded-[2rem] border-[#EEEEEE] border-[0.1rem]  text-[0.9rem] p-[1rem] bg-[#0575E6] text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default RightContent;
