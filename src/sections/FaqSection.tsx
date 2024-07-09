import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { SlArrowDown,SlArrowUp } from "react-icons/sl";

const FaqSection = () => {
  const faqs=[
    {
      question: 'How do I register for Fetch-a-thon?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ipsam.'
    },
    {
      question: 'How many team members do I need Fetch-A-Thon?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ipsam.'
    },
    {
      question: 'Will the Hackathon be in person or online?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ipsam.'
    },
    {
      question: 'What is the venue for Fetch-A-Thon?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ipsam.'
    },
    {
      question: 'If you have any queries? Please connect with the team.',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ipsam.'
    },

  ];
  return (
    <section className='min-h-screen  text-white flex flex-col justify-center items-center'>
      <div className='w-10/12'>
        <h1 className='text-xl md:text-3xl lg:text-4xl xl:text-5xl my-5 text-center sm:text-left'>Frequently <br /> Asked <br /> Question's</h1>
        <h4 className='mb-5 text-center sm:text-left'>Questions? Look here.</h4>
      </div>
      <div className='w-10/12' >
        {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="p-6 bg-bl mb-3 rounded-lg">
                <dt>
                  <DisclosureButton className="group flex flex-col sm:flex-row w-full items-center sm:items-start justify center sm:justify-between text-center sm:text-left text-white">
                    <span className="leading-7">{faq.question}</span>
                    <span className="sm:ml-6 flex h-7 items-center">
                      <SlArrowDown aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
                      <SlArrowUp aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 sm:pr-12 text-center sm:text-left">
                  <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
      </div>
    </section>
  )
}

export default FaqSection