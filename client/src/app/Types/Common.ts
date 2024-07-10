interface LoginInput {
    type:string,
    label:string,
    placeholder:string,
    value:string,
    onChange:React.ChangeEventHandler,
    onBlur:React.ChangeEventHandler,
    name:string,
    errorsEmail:any,
    touchedEmail:any
}
interface GlobalContext {
    state:string,
    sum:string
}
interface formikInitialValue {
  
}