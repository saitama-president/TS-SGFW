import * as SEQ from "sequelize-typescript"
import * as Models from "./app/models/models"
import { Sequelize } from "sequelize-typescript/lib/models/Sequelize";

const seq=new Sequelize('sqlite:./test.db');

seq.addModels([
    Models.User,
    Models.UserItem,
    Models.UserUniqueCharacter,

    Models.MasterItem,
    Models.MasterItemTag,
    Models.MasterTaggedItem,
    Models.MasterCharacter,
]);
console.log("OK");

seq.sync({})
  .then(
    () => {
      return Models.User.create({
        name: 'nuuul',
        birthday: '2000-01-02',
      })
        ;
    }
  )
  .then(
    $p => Models.MasterItem.create({
      n: 144,
      user_id: $p.id
    })
    .then(
      $n => Models.MasterItem.create({
        n: 145,
        user_id: $p.id
      })
    )
    .then(
      $n => Models.MasterItem.create({
        n: 146,
        user_id: $p.id
      })
    )
  )
  .then(
    $n => Models.User.findOne({include: [Models.UserItem]})
  )
  .then(
    $p=>{
      console.log(`N:${$p.name} P: ${$p.items}`);
      $p.items.forEach($n=>{
        console.log(`${$p.name} N= ${$n.id}`);
      })
    }
  )
  .then(
    ()=>{
      Models.UserUniqueCharacter.create(
        {
          user_id:1,
          character_id:2,
          
        }
      );

    }

  )

