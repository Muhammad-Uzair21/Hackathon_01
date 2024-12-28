import FaqCard from "@/components/FaqCard/FaqCard";
import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] m-auto my-24">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-6 text-center">
            <h2 className="md:text-5xl text-3xl font-bold text-[#333333]">FREQUENTLY ASKED QUESTIONS!</h2>
            <p className="text-xs md:text-sm text-[#4F4F4F]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the{" "}
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <FaqCard
              question="What types of chairs do you offer?"
            />
            <FaqCard
              question="How can we get in touch with you?"
            />
            <FaqCard
              question="Do your chairs come with a warranty?"
            />
            <FaqCard
              question="What will be delivered? And When?"
            />
            <FaqCard
              question="Can I try a chair before purchasing?"
            />
            <FaqCard
              question="How do I clean and maintain my Comforty chair?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
