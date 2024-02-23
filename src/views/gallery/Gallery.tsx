import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Btn from '../../components/Button/GalleryButton';
import GalleryLink from './GalleryLink';
import GalleryCheckbox from '../../components/Checkbox/GalleryCheckbox';
import GalleryPositionPad from '../../components/PositionPad/GalleryPositionPad';
import GallerySlider from '../../components/Slider/GallerySlider';
import GalleryInput from '../../components/Input/GalleryInput';
import GalleryToggleButtonGroup from '../../components/GalleryToggleButtonGroup';
import GalleryToggleButton from '../../components/GalleyToggleButton';
import GalleryTextArea from '../../components/TextArea/GalleryTextArea';

const gallery = [
  { path: 'btn', label: 'Button', component: <Btn /> },
  { path: 'input', label: 'Input', component: <GalleryInput /> },
  { path: 'checkbox', label: 'Checkbox', component: <GalleryCheckbox /> },
  { path: 'slider', label: 'Slider', component: <GallerySlider /> },
  { path: 'textarea', label: 'Textarea', component: <GalleryTextArea /> },
  {
    path: 'positionpad',
    label: 'PositionPad',
    component: <GalleryPositionPad />,
  },
  {
    path: 'togglebutton',
    label: 'ToggleButton',
    component: <GalleryToggleButton />,
  },
  {
    path: 'togglebuttongroup',
    label: 'ToggleButtonGroup',
    component: <GalleryToggleButtonGroup />,
  },
];

const Gallery: React.FC = () => {
  return (
    <div className="flex gap-6">
      <div className="grow">
        <div>
          <Routes>
            {gallery.map(({ component, path }) => (
              <Route key={path} path={path} element={component} />
            ))}
            <Route
              path="*"
              element={
                <p>Select the component you want to preview on the right.</p>
              }
            />
          </Routes>
        </div>
      </div>
      <div className="shrink-0 grow-0 basis-60">
        {gallery.map(({ label, path }) => (
          <GalleryLink key={path} to={path}>
            {label}
          </GalleryLink>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
