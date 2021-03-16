import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from './Avatar.style';

interface IUserAvatar {
  profile: {
    name: string
    photo?: string
  }
}

const UserAvatar: React.FC<IUserAvatar> = ({ profile }) => {
  const { name, photo } = profile;
  const classes = useStyles();
  const profileName = name.charAt(0);
  return (
    <div className={classes.root}>
      <Avatar className={classes.circle} alt='avatar' src={photo}>{profileName}</Avatar>
    </div>
  );
};

export default UserAvatar;
