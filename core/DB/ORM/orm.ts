

namespace SaitamaTec.ORM{

  export class Keys:string[]{
    
  }

  export class Field{
    private $name:string;

    public get ColumnName():string{
    }
  }

  export class Table<
    PK,
    ROW
  >{

    public PrimaryKey:PK;
    public TableName:string;
    public Fields:Field[];
    public Find(k:Keys)
    
  }
  
  export class Record{
  }

  export class PrimaryKey{
  }
  
  export class IndexKey{
  }
  

}
