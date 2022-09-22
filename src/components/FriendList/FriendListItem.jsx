import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendListItem.module.css';
export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <span className={clsx('status', isOnline ? 'online' : 'offline')}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
