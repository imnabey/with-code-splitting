export interface ICard {
  pic: string,
  name: string,
  location: string,
  key: number,
  id: string
  // company: string,
  // handleToggle: (param: any, e: any) => void,
  // favorite: number[],
  // username: string,
  // onClick: () => void
}
export interface IPagination {
  onChange: (page: number, pageSize: number) => void,
  current: number,
  totalData: number
}