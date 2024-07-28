import React from 'react';
import IconButton from '../core/IconButton';
import { IconProfileCircle } from '@allbin/icons';

const Profile: React.FC = () => {
  return (
    <div>
      <IconButton variant="filled" icon={<IconProfileCircle />} />
    </div>
  );
};

export default Profile;
