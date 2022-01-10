import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
import { UlFriendList } from "./FriendList.styled";

export default function FriendList({ friends }) {
  return (
    <UlFriendList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </UlFriendList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
