require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

console.log(process.env.DIALECT);
module.exports = {
  host:process.env.DBHOST || '127.0.0.1',
  username:process.env.DB_USER || 'root',
  password:process.env.DB_PASS || 'docker',
  database:process.env.DB_NAME,
  dialect:process.env.DIALECT || 'mysql',
  storage: process.cwd()+'/__test__/database.db',
  define:{
    timestamps:true,
    underscored:true,
    underscoredAll:true
  }
}