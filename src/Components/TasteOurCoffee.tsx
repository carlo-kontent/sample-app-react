import React from 'react';

import Link from '../Components/LowerCaseUrlLink';
import { useIntl } from 'react-intl';
import { Cafe } from '../Models/cafe';

interface TestOurCoffeeProps {
  cafes: Cafe[],
  language: string
}

const TasteOurCoffee: React.FC<TestOurCoffeeProps> = props => {
  const { formatMessage } = useIntl();
  let cafes = props.cafes.map((cafe: Cafe, index: number) => {
    let name = cafe.system.name;
    let imageLink = cafe.elements.photo.value[0].url;

    return (
      <div className="col-xs-6 col-md-3" key={index}>
        <div>
          <Link to={`/${props.language}/cafes`} className="ourcoffee-tile-link">
            <h2 className="ourcoffee-tile-text center-text">{name}</h2>
            <span className="cafe-overlay"> </span>
            <img
              alt={name}
              className="ourcoffee-tile-image"
              src={imageLink}
              title={name}
            />
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="row">
      <div>
        <h1 className="title-tab">{formatMessage({id: 'TasteOurCoffee.title'})}</h1>
      </div>
      {cafes}
    </div>
  );
};

export default TasteOurCoffee;
