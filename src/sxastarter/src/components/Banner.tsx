import React from 'react';
import {
  LinkField,
  Text,
  RichTextField,
  Field,
  ImageField,
  Link,
  RichText,
  Image,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface BannerProps {
  fields: {
    BannerCTA: LinkField; // Sitecore link field
    BannerDesc: RichTextField; // Rich text or plain text field
    BannerTitle: Field<string>; // Single line text field
    BannerImage: ImageField; // Banner image field
  };
}

const Banner = ({ fields }: BannerProps) => {
  const { BannerCTA, BannerTitle } = fields;

  return (
    <section className="w-full flex items-center justify-center py-12  bg-white">
      <div className="max-w-[1280px] w-full flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        {/* Left side: Title, Description, CTA */}
        <div className="w-full md:w-[40%] px-6">
          <Text
            field={BannerTitle}
            tag="h1"
            className="text-6xl font-semibold text-gray-900 mb-6 font-monteserrate leading-[48px]"
          />

          <RichText
            field={fields?.BannerDesc}
            tag="span"
            className="text-md text-gray-700 text-justify tracking-normal font-monteserrate"
          />

          <Link
            field={BannerCTA}
            className="inline-block px-6 py-6 no-underline mt-12 font-monteserrate text-[16px] font-normal text-white bg-[#350078] rounded-md hover:bg-gray-600 transition duration-300"
          />
        </div>

        {/* Right side: Banner Image */}
        <div className="relative w-[100%] md:block md:w-[60%] md:px-6 px-0">
          {/* Banner Image */}
          <Image field={fields?.BannerImage} className=" md:h-[80vh] h-[30vh] object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Banner;

