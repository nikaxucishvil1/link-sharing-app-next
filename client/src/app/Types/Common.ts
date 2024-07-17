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
  linksArr: never[];
  setLinkArr: React.Dispatch<React.SetStateAction<never[]>>;
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

interface linksData {
  name: string;
  logo: string;
}

interface LinkBoxFormikInitialValuesOBJ {
  url: string;
  platform: string;
}
interface LinkBoxFormikInitialValuesARR {
  linkArr: LinkBoxFormikInitialValuesOBJ[];
}

interface AddLinkBtn {
  push: (OBJ: LinkBoxFormikInitialValuesOBJ) => void;
}

interface LinksGetStarted {
  linkExample: string;
}
interface LinkBoxHeader {
  remove: (index: number) => void;
  index: number;
}

interface touched {
  platform?: boolean;
  url?: boolean;
}
interface FormControlComponent {
  touched: touched;
}