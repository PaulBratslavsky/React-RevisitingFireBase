import styles from "./app.module.css";
import FooterNav from "./components/footer-nav";
import HeaderNav from "./components/header-nav";
import Form from "./components/form";
import View from "./components/view";
import Card from "./components/card";

import { useGetCollection } from "./hooks/useGetCollection";
import { toDateTimeString } from "./utils/toDateTimeString";

// const isAuthed = false;
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
              <h1>{item.action}</h1>
              <p>{item.behavior}</p>
              <p>{item.consequence}</p>
              <p>{item.mood}</p>
              <p>{toDateTimeString(item.createdAt)}</p>
            </Card>))
        }
        <Form />
      </View>
      <FooterNav />
    </div>
  );
}

export default App;
