import React from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Button from "../components/Button";
import CarouselLarge from "../components/CarouselLarge";
import CarouselSmall from "../components/CarouselSmall";
import { ButtonType } from "../types";

const Home: React.FC = () => {
  return (
    <div className="pt-[44px]">
      {" "}
      {/* Offset for fixed navbar */}
      {/* Main Hero 1: iPhone */}
      <Hero
        title="iPhone 17 Pro"
        subhead="Innovative design for ultimate
performance and battery life."
        ctaText="Learn more"
        ctaLink="/iphone"
        imageUrl="https://4kwallpapers.com/images/walls/packs/379.jpg"
        textColor="light"
      />
      {/* Main Hero 2: iPhone 15 */}
      <div className="mt-3">
        <Hero
          title="iPhone 17 Air"
          subhead="Thinner. Faster. Effortless."
          ctaText="Learn more"
          ctaLink="/iphone"
          imageUrl="https://i.pinimg.com/736x/95/db/00/95db0095aa2215edd541a48e04da6176.jpg"
          textColor="dark"
        />
      </div>
      {/* Main Hero 3: Watch */}
      <div className="mt-3">
        <Hero
          title="WATCH"
          subhead="Smarter. Brighter. Mightier."
          ctaText="Learn more"
          ctaLink="/watch"
          imageUrl="https://i.pinimg.com/1200x/fd/4f/18/fd4f1898d045b7852113a7dcfd4984d7.jpg"
          textColor="light"
          position="bottom"
        />
      </div>
      {/* Product Grid - 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3">
        <Section className="relative h-[580px] bg-[#fbfbfd] flex flex-col items-center justify-start pt-12 overflow-hidden group cursor-pointer">
          <h3 className="text-4xl font-bold mb-2">MacBook Air</h3>
          <p className="text-xl mb-4">Lean. Mean. M3 machine.</p>
          <div className="flex gap-4 mb-8 z-10">
            <Button type={ButtonType.Primary} label="Learn more" to="/mac" />
            <Button type={ButtonType.Primary} label="Buy" to="/buy" />
          </div>
          <div
            className="absolute bottom-0 w-[80%] h-[60%] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/1200x/8b/05/68/8b056865403f84701b882f9682656518.jpg",
            }}
          ></div>
        </Section>

        <Section className="relative h-[580px] bg-black text-white flex flex-col items-center justify-start pt-12 overflow-hidden group cursor-pointer">
          <h3 className="text-4xl font-bold mb-2">iPad Pro</h3>
          <p className="text-xl mb-4">Supercharged by M2.</p>
          <div className="flex gap-4 mb-8 z-10">
            <Button
              type={ButtonType.Primary}
              label="Learn more"
              to="/ipad"
              className="text-blue-400"
            />
            <Button
              type={ButtonType.Primary}
              label="Buy"
              to="/buy"
              className="text-blue-400"
            />
          </div>
          <div
            className="absolute bottom-0 w-[95%] h-[68%] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/1200x/81/f6/0b/81f60b410e04dfba4c78662bd662288d.jpg",
            }}
          ></div>
        </Section>

        <Section className="relative h-[580px] bg-[#fbfbfd] flex flex-col items-center justify-end pb-12 overflow-hidden group cursor-pointer">
          <div
            className="absolute top-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/736x/08/50/47/0850476509d686f921a59f41a781237e.jpg",
            }}
          ></div>
          <div className="relative z-10 text-center">
            <h3 className="text-4xl font-bold mb-2">AirPods Pro</h3>
            <p className="text-xl mb-4">Adaptive Audio. Now playing.</p>
            <div className="flex gap-4 justify-center">
              <Button
                type={ButtonType.Filled}
                label="Learn more"
                to="/airpods"
              />
            </div>
          </div>
        </Section>

        <Section className="relative h-[580px] bg-[#fbfbfd] flex flex-col items-center justify-start pt-12 overflow-hidden group cursor-pointer">
          <h3 className="text-4xl font-bold mb-2 z-10 text-white">
            Vision Pro
          </h3>
          <p className="text-xl mb-4 z-10 text-white">
            Welcome to the era of spatial computing.
          </p>

          <div className="flex gap-4 mb-8 z-10">
            <Button type={ButtonType.Primary} label="Learn more" to="/mac" />
            <Button type={ButtonType.Primary} label="Buy" to="/buy" />
          </div>

          <div
            className="absolute bottom-10 w-[100%] h-[100%] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/1200x/b9/2c/db/b92cdb55394a607846a951de8fe27f3e.jpg)",
            }}
          ></div>
        </Section>
      </div>
      {/* Entertainment Section */}
      <CarouselLarge />
      <CarouselSmall />
    </div>
  );
};

export default Home;
