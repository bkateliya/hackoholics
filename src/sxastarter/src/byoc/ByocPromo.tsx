import React from 'react';
import * as FEAAS from '@sitecore-feaas/clientside/react';

interface ByocPromoProps {
  imageUrl: string;
  text: string;
  url: string;
  urlText: string;
}

export const ByocPromo = (props: ByocPromoProps): JSX.Element => {
  return (
    <div className="component promo col-12 link-button">
      <div className="component-content">
        <div className="field-promoicon">
          {props.imageUrl && <img alt="" width="2000" height="1116" src={props.imageUrl} />}
        </div>
        <div className="promo-text">
          <div>
            <div className="field-promotext">
              <div>
                <p>{props.text}</p>
              </div>
            </div>
          </div>
          {props.url && (
            <div className="field-promolink">
              <a href={props.url} title={props.urlText} target="_blank">
                {props.urlText}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

FEAAS.External.registerComponent(ByocPromo, {
  name: 'ByocPromo',
  title: 'BYOC Promo',
  description: 'BYOC Promo',
  thumbnail:
    'https://th.bing.com/th/id/OIP.GtEO3W6g2fsOjc_mSmYbcQAAAA?pid=ImgDet&w=139&h=139&c=7&dpr=1.5',
  group: 'BYOC - Promos',
  required: ['text', 'imageUrl', 'url'],
  properties: {
    imageUrl: {
      type: 'string',
    },
    text: {
      type: 'string',
    },
    url: {
      type: 'string',
    },
    urlText: {
      type: 'string',
    },
  },
  ui: {
    text: {
      'ui:autofocus': true,
      'ui:emptyValue': '',
      'ui:placeholder': 'Write a great Promo text 2',
    },
  },
});
