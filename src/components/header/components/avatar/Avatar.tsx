import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    circle: {
      color: '#fff',
      backgroundColor: '#FF7C72',
      textTransform: 'uppercase',
      fontfamily: 'inherit',
    },
  }),
);

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
      <Avatar className={classes.circle} alt="avatar" src={photo}>{profileName}</Avatar>
    </div>
  );
}

export default UserAvatar;
