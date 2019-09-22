module.exports = {
  host:process.env.DBHOST || '127.0.0.1',
  username:process.env.DBUSER || 'root',
  password: process.env.DBPASS || 'docker',
  database:'nodeauth',
  dialect:'mysql',
  logging:true,
  define:{
    timestamps:true,
    underscored:true,
    underscoredAll:true
  }
}