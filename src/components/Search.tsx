import { useState } from "react";
import { BsSearch } from "react-icons/bs";

type SearchProps = {
  loadUser: (username: string) => Promise<void>;
  inputRef: React.RefObject<HTMLInputElement>;
};

const Search = ({ loadUser, inputRef }: SearchProps): JSX.Element => {
  const [userName, setUserName] = useState<string>("");

  return (
    <>
      <h2>Busque por um usuário</h2>
      <div className="search-area">
        <input
          ref={inputRef}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            e.key == "Enter" ? loadUser(userName) : null
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserName(e.target.value)
          }
          type="text"
          placeholder="seu usuário"
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </>
  );
};

export default Search;
