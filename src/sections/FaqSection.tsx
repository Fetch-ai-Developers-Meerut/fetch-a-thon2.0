import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const FaqSection = () => {
  const faqs = [
    {
      question: "How do I register for Fetch-a-thon?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ipsam.",
    },
    {
      question: "How many team members do I need Fetch-A-Thon?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ipsam.",
    },
    {
      question: "Will the Hackathon be in person or online?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ipsam.",
    },
    {
      question: "What is the venue for Fetch-A-Thon?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ipsam.",
    },
    {
      question: "If you have any queries? Please connect with the team.",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ipsam.",
    },
  ];
  return (
    <section className="text-white flex flex-col justify-center items-center">
      <div className="w-full flex flex-col gap-3 sm:gap-4 lg:gap-5">
        <h1 className="text-3xl sm:text-5xl font-lexendexa 2xl:text-7xl leading-[32.4px] sm:leading-[53.76px] 2xl:leading-[80.64px] text-left">
          Frequently <br /> Asked <br /> Question&apos;s
        </h1>
        <h4 className="mb-5 text-sm lg:text-lg 2xl:text-xl text-left">
          Questions? Look here.
        </h4>
      </div>
      <div className="w-full">
        {faqs.map((faq) => (
          <Disclosure
            key={faq.question}
            as="div"
            className="p-6 bg-glasseffect mb-3 rounded-lg"
          >
            <dt>
              <DisclosureButton className="group flex flex-row w-full items-center sm:items-start justify-between gap-5 font-lexendexa text-left text-white">
                <span className="leading-4 font-light text-xs">{faq.question}</span>
                <span className="sm:ml-6 flex h-7 items-center">
                  <SlArrowDown
                    aria-hidden="true"
                    className="h-4 w-4 sm:h-6 sm:w-6 group-data-[open]:hidden"
                  />
                  <SlArrowUp
                    aria-hidden="true"
                    className="h-4 w-4 sm:h-6 sm:w-6 [.group:not([data-open])_&]:hidden"
                  />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" className="mt-2 sm:pr-12 text-left">
              <p className="leading-4 text-xs text-gray-300">{faq.answer}</p>
            </DisclosurePanel>
          </Disclosure>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
