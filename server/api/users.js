import sqlite3 from 'sqlite3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const user = {...body}

  const data = {
    error: null,
    message: "",
    user: null
  };

  function setData(err, mess, user) {
    data.error = err;
    data.message = mess;
    data.user = user
  }

  async function db_get(query, params){
    return new Promise(function(resolve, reject) {
        db.get(query, params, function(err, rows) {
           if (err) { return reject(err); }
           resolve(rows);
         });
    });
  }

  let db = new sqlite3.Database(
    `./db/${process.env.DATABASE}.db`,
    sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
          setData(1, "Ошибка логина", null);
          // console.error(err.message);
          return { data }
      }
  });

  const row = await db_get(
    "SELECT id, name, surname, email, scope FROM users WHERE email=? AND password=? AND status=1",
    [user.email, user.password]
  );

  if (!row) {
    setData(1, "Нет такого пользователя и/или пароля!", null);
    // console.log("Нет такого пользователя и/или пароля!");
    return { data }

  } else {
    setData(0, "Успешный логин", row);
    // console.log("Успешный логин: ", data);
    return { data }
  }
});