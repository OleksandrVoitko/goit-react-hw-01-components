import user from "../../data/user.json";
import data from "../../data/data.json";
import friends from "../../data/friends.json";
import transactions from "../../data/transactions.json";
import Profile from "../SocialProfile/Profile";
import Statistics from "../Statistics/Statistics";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import { Container } from "./App.styled";

export default function App() {
  const { username, tag, location, avatar, stats } = user;
  return (
    <Container>
      <Profile
        userName={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
