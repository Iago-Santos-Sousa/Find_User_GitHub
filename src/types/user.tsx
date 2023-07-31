export type UserProps = {
  name: string;
  avatar_url: string;
  login: string;
  followers: number | string;
  following: number | string;
  public_repos: number | string;
};

export type LogicalProps = {
  error: boolean | string;
};
