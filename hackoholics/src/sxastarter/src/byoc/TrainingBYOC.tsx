import React from 'react';
import * as FEAAS from '@sitecore-feaas/clientside/react';

interface TrainingBYOCProps {
  PromoTitle: string;
  PromoDescription: string;
  PromoLink: string;
  LinkText: string;
  PromoImage: string;
}

export const TrainingBYOC = (props: TrainingBYOCProps): JSX.Element => {
  console.log(JSON.stringify(props));
  return (
    <div className="component promo col-12 link-button">
      <div className="component-content">
        <div className="field-promoicon">
          {props.PromoImage && <img alt="" width="2000" height="1116" src={props.PromoImage} />}
        </div>
        <div className="promo-text">
          <div>
            <div className="field-promotext">
              <div>
                <h3>{props.PromoTitle}</h3>
                <p>{props.PromoDescription}</p>
              </div>
            </div>
          </div>
          {props.PromoLink && (
            <div className="field-promolink">
              <a href={props.PromoLink} title={props.LinkText} target="_blank">
                {props.LinkText}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

FEAAS.External.registerComponent(TrainingBYOC, {
  name: 'TrainingBYOC',
  title: 'This is BYOC promo for training',
  description: 'This is BYOC promo for training',
  thumbnail:
    'https://th.bing.com/th/id/OIP.GtEO3W6g2fsOjc_mSmYbcQAAAA?pid=ImgDet&w=139&h=139&c=7&dpr=1.5',
  group: 'Training Demos',
  required: ['PromoTitle', 'PromoImage', 'PromoLink'],
  properties: {
    PromoTitle: {
      type: 'string',
    },
    PromoDescription: {
      type: 'string',
    },
    PromoLink: {
      type: 'string',
    },
    LinkText: {
      type: 'string',
    },
    PromoImage: {
      type: 'string',
    },
  },
  ui: {
    PromoTitle: {
      'ui:autofocus': true,
      'ui:emptyValue': '',
      'ui:placeholder': 'Enter your promo title here',
    },
    PromoLink: {
      'ui:autofocus': true,
      'ui:emptyValue': '',
      'ui:placeholder': 'Paste any site link here',
    },
    LinkText: {
      'ui:autofocus': true,
      'ui:emptyValue': '',
      'ui:placeholder': 'Enter the text for the link',
    },
    Description: {
      'ui:autofocus': true,
      'ui:emptyValue': '',
      'ui:placeholder': 'Enter the description of this promo',
    },
  },
});
