export type HeaderProps = {
  documentType: string;
  user: User;
};

//NOTE: this type currently doesn't export (it's just used in HeaderProps)
export type User = {
  userName: string;
  userId: string;
  userPhoto: string;
};

//Basically, a user with a documentType
export type UserInfoProps = {
  headerProps: {
    documentType: string;
    user: User;
  };
};

export type ColItemContainerProps = {
  items: {
    headline?: string;
    items: {
      icon: JSX.Element;
      text: string;
    }[];
  }[];
};
