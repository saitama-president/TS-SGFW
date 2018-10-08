
export namespace DB{
  export abstract class PK<T>
    extends Array<string>{
    


  }
  
  export abstract class Table<T>{ 
    public get PK():PK<T>{
      return [
        "id"
      ];
    }

    public findPK<T>(pk:PK<T>):Record<T>{
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
  
    public collection<NM>():Array<T>{

      
      return [
  
      ];
    }
  }

  export abstract class Record<T>{
    

  }

  export class Column{

  }
}


export default DB;