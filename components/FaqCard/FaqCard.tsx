import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CardProps {
  question: string;
}

const FaqCard: React.FC<CardProps> = ({ question }) => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold text-[18px] text-[#333333]">
            {question}
          </AccordionTrigger>
          <AccordionContent className="text-[16px] text-[#4F4F4F]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
            modi ullam amet debitis libero veritatis enim repellat optio natus
            eum delectus deserunt, odit expedita eos molestiae ipsa totam
            quidem?
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqCard;
