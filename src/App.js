import styles from "./app.module.css";
import FooterNav from "./components/footer-nav";
import HeaderNav from "./components/header-nav";
import View from "./components/view";
import Card from "./components/card";

import { useGetCollection } from "./hooks/useGetCollection";
import { toDateTimeString } from "./utils/toDateTimeString";

const isAuthed = false;
function App() {
  const { status, data, error } = useGetCollection("dailyAction");
  console.log(status, data, error, "FROM HOOK");
  return (
    <div className={styles.app}>
      <HeaderNav />
      <View>
        {/* { isAuthed ? <h2>Router</h2> : <h2>Login Screen</h2> } */}
        {data &&
          data.map((item) => (
            <Card key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <p>{item.actionScore}</p>
              <p>{item.mood}</p>
              <p>{toDateTimeString(item.timestamp.seconds)}</p>
            </Card>
          ))}
      </View>
      <FooterNav />
    </div>
  );
}

export default App;
