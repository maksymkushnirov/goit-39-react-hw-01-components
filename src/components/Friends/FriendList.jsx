import styles from './FriendList.module.css'

export function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

export function FriendList({ friends }) {
    return (
<ul className={StyleSheet.friendList}>
{friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
</ul>
    )
}