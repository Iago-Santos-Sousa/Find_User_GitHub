import { UserProps, LogicalProps } from "../types/user";
import userSvg from "../assets/user.svg";

const ViewUser = ({
  name,
  avatar_url,
  login,
  followers,
  following,
  public_repos,
  error,
}: UserProps & LogicalProps): JSX.Element => {
  return (
    <div className="container-informations">
      <p>Login: {login ? login : error}</p>
      <div className="avatar-image">
        <img src={avatar_url ? avatar_url : userSvg} alt="Imagem do usuário" />
      </div>
      <p>Nome: {name}</p>
      <div className="informations">
        <span>Seguidores: {followers}</span>
        <span>Repositórios: {public_repos}</span>
        <span>Seguindo: {following}</span>
      </div>
      <p className="description-author">
        Criado por:
        <a href="https://github.com/Iago-Santos-Sousa" target="_blank">
          {" "}
          Iago Dos Santos
        </a>
      </p>
    </div>
  );
};

export default ViewUser;
