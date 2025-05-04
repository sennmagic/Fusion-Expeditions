import React from 'react';
import Marquee from 'react-fast-marquee';
import TextHeader from '@/components/atoms/headings';
const partnerLogos = [
  { name: 'Partner 1', url: '#', logo: 'https://via.placeholder.com/120x60?text=Logo+1' },
  { name: 'Partner 2', url: '#', logo: 'https://via.placeholder.com/120x60?text=Logo+2' },
  { name: 'Partner 3', url: '#', logo: 'https://via.placeholder.com/120x60?text=Logo+3' },
  { name: 'Partner 4', url: '#', logo: 'https://via.placeholder.com/120x60?text=Logo+4' },
  { name: 'Partner 5', url: '#', logo: 'https://via.placeholder.com/120x60?text=Logo+5' },
  { name: 'Partner 6', url: '#', logo: 'https://via.placeholder.com/120x60?text=Logo+6' },
];

const PartnerSection = () => {
  return (
    <section className="py-10 ">
   
       <TextHeader text='Proudly Partnered With' specialWordsIndices='1' align='center' />
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={true}
        className="overflow-hidden"
      >
        {partnerLogos.map((partner, idx) => (
          <a
            key={idx}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-6 inline-block"
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </a>
        ))}
      </Marquee>
    </section>
  );
};

export default PartnerSection;
