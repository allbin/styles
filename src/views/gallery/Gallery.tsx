import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Btn from './Btn';
import GalleryLink from './GalleryLink';
import GalleryCheckbox from '../../components/Checkbox/GalleryCheckbox';
import GalleryPositionPad from '../../components/PositionPad/GalleryPositionPad';

const gallery = [
  { path: 'btn', label: 'Button', component: <Btn /> },
  { path: 'checkbox', label: 'Checkbox', component: <GalleryCheckbox /> },
  { path: 'btn3', label: 'Button', component: <Btn /> },
  {
    path: 'positionpad',
    label: 'PositionPad',
    component: <GalleryPositionPad />,
  },
];

const Gallery: React.FC = () => {
  return (
    <div className="ml-6 mt-6 flex">
      <div className="mr-6 grow">
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
