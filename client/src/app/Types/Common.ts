interface LoginInput {
  type: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler;
  onBlur: React.ChangeEventHandler;
  name: string;
  errorsEmail: any;
  touchedEmail: any;
}
interface GlobalContext {
  state: string;
  sum: string;
}
interface MainPageLayout {
  children: React.ReactNode;
  link: boolean;
  profile: boolean;
  className: string;
}
interface MainHeader {
  link: boolean;
  profile: boolean;
}
interface Linkbox {
  linkIndex: number;
}
interface linksData {
  name: string;
  logo: string;
}
interface CustomSelect {
  links: linksData[];
  selectedLink: string;
  setSelectedLink: React.SetStateAction<string>;
}

interface CustomSelectProps {
  links: linksData[];
  selectedLink: linksData | null;
  setSelectedLink: React.Dispatch<React.SetStateAction<null | any>>;
}
