import { useRef, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import { UserProps } from "./types/user";
import Loader from "./components/Loader";
import ViewUser from "./components/ViewUser";
const API: string = "https://api.github.com/users";
// const myUserName: string = "Iago-Santos-Sousa";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | string>(false);
  console.log(user);

  const loaderUser = async (userName: string) => {
    if (userName.trim() === "") {
      setError("Informe um login de usuário!");
      setUser(null);
      inputRef.current?.focus();
      return;
    }
    setLoading(true);
    const res = await fetch(`${API}/${userName}`);
    const data = await res.json();
    console.log({ data });
    if (
      data.message ===
        "You have sent an invalid request. Please do not send this request again." ||
      data.message === "Not Found"
    ) {
      setLoading(false);
      setError("Usuário não encontrado");
      setUser(null);
      console.log(user);
      inputRef.current?.focus();
      return;
    }
    const {
      name,
      avatar_url,
      login,
      location,
      followers,
      following,
      public_repos,
    } = data;
    const userData: UserProps = {
      name,
      avatar_url,
      login,
      location,
      followers,
      following,
      public_repos,
    };

    setUser(userData);
    setLoading(false);
    inputRef.current?.focus();
  };

  return (
    <div className="app">
      <Search loadUser={loaderUser} inputRef={inputRef} />
      {loading ? <Loader /> : null}

      <ViewUser
        name={user?.name ? user.name : ""}
        avatar_url={user?.avatar_url ? user?.avatar_url : ""}
        login={user?.login ? user?.login : ""}
        location={user?.location ? user?.location : ""}
        followers={user?.followers ? user?.followers : 0}
        following={user?.following ? user?.following : 0}
        public_repos={user?.public_repos ? user.public_repos : 0}
        error={error}
      />
    </div>
  );
}

export default App;
