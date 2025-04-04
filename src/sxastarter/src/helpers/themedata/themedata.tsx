/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import { useGraphQlDataContext } from 'lib/context/GraphQlDataContext';
import React from 'react';

const StyleData = (): JSX.Element => {
  const { themeSettings } = useGraphQlDataContext();
  const styleData = themeSettings?.style;

  if (styleData === '' || styleData === undefined || styleData === null) {
    return <></>;
  }

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: styleData,
        }}
      ></div>
    </>
  );
};

export default StyleData;
