import React from 'react';
import Button from '../Button/Button';
import { IconProfileCircle } from '@allbin/icons';

const Profile: React.FC = () => {
  return (
    <div>
      <Button filled>
        <IconProfileCircle className="size-6" />
      </Button>
    </div>
  );
};

export default Profile;
