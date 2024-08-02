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

interface linksData {
  name: string;
  logo: string;
  color: string;
  textColor: string;
}

interface LinkBoxFormikInitialValuesOBJ {
  url: string;
  platform: string;
}
interface LinkBoxFormikInitialValuesARR {
  linkArr: LinkBoxFormikInitialValuesOBJ[] | [];
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
interface customUploadBtn {
  url : string;
  setFieldValue: (field: string, value: any) => void;
  name: string;
}
interface BtnDisableFormikErrors {
  firstName: string;
  lastName: string;
  email: string;
  url?: string;
}

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}
interface Field {
  width: number;
  CustomTextField: any;
  touched: any;
  errors: any;
  resLabel: string;
  name: string;
  label: string;
}
interface MainHeader {
  links: boolean;
  infos: boolean;
  setLinks: React.Dispatch<React.SetStateAction<boolean>>;
  setInfos: React.Dispatch<React.SetStateAction<boolean>>;
}
interface Addlinks {
  width: number;
  LinksArr: any;
}
interface MainPageInfo {
  LinksArr: any;
  width: number;
}
