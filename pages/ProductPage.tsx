import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCT_DATA } from '../constants';
import Button from '../components/Button';
import { ButtonType } from '../types';
import Section from '../components/Section';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  // Fallback to 'mac' if ID not found or undefined
  const data = productId && PRODUCT_DATA[productId] ? PRODUCT_DATA[productId] : PRODUCT_DATA['mac'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!productId || !PRODUCT_DATA[productId]) {
     // In a real app, might show 404, but here we render default or redirect
     // For this demo, we just let it render the fallback 'mac' data
     // but visually we can keep it consistent
  }

  return (
    <div className="pt-[44px] bg-white">
      {/* Sticky Sub-nav */}
      <div className="sticky top-[44px] z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[1024px] mx-auto px-4 h-[52px] flex justify-between items-center">
          <h1 className="text-xl font-semibold text-[#1d1d1f]">{data.title}</h1>
          <div className="flex gap-4 text-xs items-center">
            <a href="#overview" className="hover:text-[#0066cc] hidden md:block">Overview</a>
            <a href="#specs" className="hover:text-[#0066cc] hidden md:block">Tech Specs</a>
            <Button type={ButtonType.Filled} label="Buy" className="px-3 py-1 text-xs" />
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <div className={`relative h-[80vh] w-full overflow-hidden flex flex-col items-center justify-start pt-16 text-center ${data.darkHero ? 'bg-black text-white' : 'bg-[#f5f5f7] text-[#1d1d1f]'}`}>
         <Section className="z-10">
            <p className="font-semibold text-xl mb-2 text-orange-500">New</p>
            <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">{data.title}</h2>
            <p className="text-2xl md:text-3xl font-medium max-w-2xl mx-auto">{data.tagline}</p>
            <div className="mt-8 flex justify-center gap-6">
               <Button type={ButtonType.Filled} label="Buy" />
               <Button type={ButtonType.Primary} label="Watch the film" className={data.darkHero ? "text-blue-400" : ""} />
            </div>
         </Section>
         <div 
            className="absolute bottom-0 w-full h-[60%] bg-contain bg-no-repeat bg-bottom transition-transform duration-1000 hover:scale-105"
            style={{ backgroundImage: `url(${data.heroImage})` }}
         ></div>
      </div>

      {/* Feature Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
           <Section className="mb-16">
              <h3 className="text-4xl md:text-6xl font-bold text-[#1d1d1f] text-center">Get the highlights.</h3>
           </Section>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.features.map((feature, idx) => (
                 <Section key={idx} className={`relative h-[600px] rounded-3xl overflow-hidden group ${feature.dark ? 'bg-black text-white' : 'bg-[#f5f5f7] text-[#1d1d1f]'}`}>
                    <div className="absolute inset-0 p-10 z-20 flex flex-col items-center text-center">
                       <h4 className="text-2xl md:text-3xl font-bold mb-2">{feature.title}</h4>
                       <p className="text-lg font-medium text-gray-500">{feature.description}</p>
                    </div>
                    <div 
                       className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                       style={{ backgroundImage: `url(${feature.image})` }}
                    ></div>
                 </Section>
              ))}
              
              {/* Static Promo Card to fill space if odd features */}
              {data.features.length % 2 !== 0 && (
                 <Section className="relative h-[600px] rounded-3xl overflow-hidden bg-[#f5f5f7] flex items-center justify-center text-center p-10">
                    <div>
                       <h4 className="text-3xl font-bold mb-4">Use AR to see it.</h4>
                       <p className="mb-6 text-gray-500">Open this page using Safari on your iPhone or iPad.</p>
                    </div>
                 </Section>
              )}
           </div>
        </div>
      </div>

      {/* Generic Bottom Banner */}
      <div className="bg-[#f5f5f7] py-24 text-center">
         <Section>
            <h3 className="text-4xl font-bold mb-4">Apple Intelligence.</h3>
            <p className="text-xl mb-8">Personal. Private. Powerful.</p>
            <Button type={ButtonType.Primary} label="Learn about Apple Intelligence" />
         </Section>
      </div>

    </div>
  );
};

export default ProductPage;