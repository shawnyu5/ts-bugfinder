export default interface IError {
   default: {
      compiler: string;
      parser: Function;
   };
   parseError: Function;
}
