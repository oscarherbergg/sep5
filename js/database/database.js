const {Client} = require('pg');

const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"OscarHerberg",
    database:"postgres"
})

client.connect();

client.query('SET search_path = toogoodtothrow_db', (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Schema: "toogoodtothrow_db"');
      
      // Aquí puedes ejecutar tus consultas en el esquema 'toogoodtothrow_db'
      client.query('SELECT * FROM user_tb', (err, res) => {
        if (!err) {
          console.log(res.rows);
        } else {
          console.error(err.message);
        }
        // Cierra la conexión cuando hayas terminado
        client.end();
      });
    }
  });
  
  
  
  