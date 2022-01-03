import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((item) => (
        <FriendListItem
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
          key={item.id}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
