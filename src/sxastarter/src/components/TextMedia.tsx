import React from 'react';
import {
  Field,
  ImageField,
  LinkField,
  RichTextField,
  Text,
  RichText,
  Image,
  Link,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface TextMediaBannerProps {
  fields: {
    TextMediaImage: ImageField;
    WelcomeTitle: Field<string>;
    TextMediaTitle: Field<string>;
    TextMediaDesc: RichTextField;
    TextMediaCTA: LinkField;
    TextMediaBusiness: Field<string>;
    TextMediaMision: Field<string>;
    TextMediaVision: Field<string>;
  };
}

const TextMediaBanner = ({ fields }: TextMediaBannerProps) => {
  const {
    TextMediaImage,
    WelcomeTitle,
    TextMediaTitle,
    TextMediaDesc,
    TextMediaCTA,
    TextMediaBusiness,
    TextMediaMision,
    TextMediaVision,
  } = fields;

  return (
    <section className="w-full bg-white py-8 sm:py-12">
      <div className="mx-auto flex flex-col lg:flex-row w-full">
        {/* Left: Image */}
        <div className="w-full lg:w-1/3">
          <Image
            field={TextMediaImage}
            className="w-full max-h-[300px] sm:max-h-[400px] lg:max-h-[500px] object-cover object-left-top"
          />
        </div>

        {/* Center: Main Content */}
        <div className="w-full lg:w-1/3 px-4 sm:px-6 py-6 sm:py-8 space-y-4 sm:space-y-5 bg-gray-300">
          <Text
            field={WelcomeTitle}
            tag="p"
            className="text-lg sm:text-sm font-monteserrate uppercase tracking-widest text-gray-500"
          />
          <Text
            field={TextMediaTitle}
            tag="h2"
            className="text-4xl sm:text-3xl lg:text-5xl font-monteserrate font-semibold leading-tight text-gray-900"
          />
          <div className="text-base sm:text-lg font-monteserrate text-gray-700">
            <RichText field={TextMediaDesc} />
          </div>
          <Link
            field={TextMediaCTA}
            className="inline-block px-6 py-2 no-underline text-white bg-black rounded-full hover:opacity-80 transition duration-300 text-sm sm:text-base"
          />
        </div>

        {/* Right: Business/Mission/Vision */}
        <div className="w-full lg:w-1/3 px-4 sm:px-6 py-6 sm:py-8 border-t lg:border-t-0 lg:border-l bg-gray-200 border-gray-200 space-y-6 sm:space-y-8">
          {/* Business Block */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-black">1+</h2>
            <Text
              field={TextMediaBusiness}
              tag="h2"
              className="text-xl sm:text-2xl font-monteserrate uppercase tracking-wider text-gray-500 mt-1"
            />
          </div>

          {/* Mission Block */}
          <div>
            <Text
              tag="p"
              field={TextMediaMision}
              className="text-xl sm:text-2xl font-semibold text-black mb-1 font-monteserrate"
            />

            <Text
              field={TextMediaVision}
              tag="p"
              className="text-base sm:text-lg text-gray-700 font-monteserrate"
            />
          </div>

          {/* Vision Block */}
          <div>
            <Text
              tag="p"
              field={TextMediaMision}
              className="text-xl sm:text-2xl font-semibold text-black mb-1 font-monteserrate"
            />
            <Text
              field={TextMediaVision}
              tag="p"
              className="text-base sm:text-lg text-gray-700 font-monteserrate"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextMediaBanner;

