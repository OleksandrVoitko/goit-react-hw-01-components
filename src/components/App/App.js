import user from "../social-profile/user.json";
import data from "../statistics/data.json";
import friends from "../friend-list/friends.json";
import transactions from "../transaction-history/transactions.json";
import Profile from "../social-profile/Profile";
import Statistics from "../statistics/Statistics";
import FriendList from "../friend-list/FriendList";
import TransactionHistory from "../transaction-history/TransactionHistory";
import { Container } from "./App.styled";

export default function App() {
  return (
    <Container>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
