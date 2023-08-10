export interface TableColumn {
  dataKey:string,
  dataTransform?:(value: any)=>any ,
}
