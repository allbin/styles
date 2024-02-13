import React from 'react';
import Slider from './Slider';

const GallerySlider: React.FC = () => {
  const [value, setValue] = React.useState<number[]>([30]);
  const [smallValue, setSmallValue] = React.useState<number[]>([0.5]);
  const [doubleValue, setDoubleValue] = React.useState<number[]>([10, 70]);
  const [tripleValue, setTripleValue] = React.useState<number[]>([10, 40, 70]);

  return (
    <>
      <div className="mb-4 flex flex-col gap-2">
        <h3>Value: {value}</h3>
        <h3>Small Value: {smallValue}</h3>
        <h3>
          Double Value: [{doubleValue[0]} : {doubleValue[1]}]
        </h3>
        <h3>
          Triple Value: [{tripleValue[0]} : {tripleValue[1]} : {tripleValue[2]}]
        </h3>
      </div>
      <div>
        <p>Slider (0-100)</p>
        <Slider
          id="slider-1"
          value={value}
          onChange={(value) => setValue(value)}
          min={0}
          max={100}
          className="mb-4"
        />
        <p>Slider with label (0-1) (steps 0.1)</p>
        <Slider
          id="slider-2"
          value={smallValue}
          onChange={(value) => setSmallValue(value)}
          min={0}
          max={1}
          step={0.1}
          className="mb-4"
          label="Slider Label"
        />
        <p>
          Slider with only tooltip (doesnt work as tooltip is shown on label
          hover) (steps 0.01)
        </p>
        <Slider
          id="slider-3"
          value={smallValue}
          onChange={(value) => setSmallValue(value)}
          min={0}
          max={1}
          step={0.01}
          className="mb-4"
          tooltip="Tooltip"
        />
        <p>Slider with label and tooltip (steps 0.001)</p>
        <Slider
          id="slider-4"
          value={smallValue}
          onChange={(value) => setSmallValue(value)}
          min={0}
          max={1}
          step={0.001}
          className="mb-4"
          label="Slider Label"
          tooltip="This is a tooltip for the slider value goes between 0 and 1"
        />
        <p>Slider with two values (minimum steps between thumbs = 5)</p>
        <Slider
          id="slider-5"
          className="mb-4"
          value={doubleValue}
          onChange={(value) => setDoubleValue(value)}
          min={0}
          max={100}
          minStepsBetweenThumbs={5}
        />
        <p>Slider with three values (minimum steps between thumbs = 2)</p>
        <Slider
          id="slider-6"
          className="mb-4"
          value={tripleValue}
          onChange={(value) => setTripleValue(value)}
          min={0}
          max={100}
          minStepsBetweenThumbs={2}
        />
        <p>Disabled slider</p>
        <Slider
          id="slider-7"
          value={smallValue}
          onChange={(value) => setSmallValue(value)}
          min={0}
          max={1}
          step={0.01}
          className="mb-4"
          label="Slider Label"
          tooltip="This is a tooltip for the slider"
          disabled
        />
      </div>
    </>
  );
};

export default GallerySlider;
