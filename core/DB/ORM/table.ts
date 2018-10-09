
export namespace LORM{

  export abstract class PrimaryKey
    extends Array<string>{
    

      constructor(){
        super()
      }
  }
  
  export abstract class Table
    <PK extends PrimaryKey>{
      
    protected abstract initPK():PK;

    public findPK(pk:PK):Record{
      return [];
    }

    public findIndex(column_name:string,needle:any){

    }


  
    public get Columns():Array<string>{
      return [];
    }
  
    public get TableName():string{
      return this.constructor.name;
    }
  
    public collection():Array<string>{

      
      return [
  
      ];
    }
  }

  export abstract class Record{
    

  }

  export class Column{

  }
}


export default DB;