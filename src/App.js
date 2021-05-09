import View from "./components/view";

import Login from "./components/view/Login/Login";
const isAuth = false;
function App() {
  return (
      <View>
        { isAuth ? <h1>app</h1> : <Login /> }
      </View>
  );
}

export default App;
/**
 * 
 { isAuthed ? <h2>Router</h2> : <h2>Login Screen</h2> }
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
 */
