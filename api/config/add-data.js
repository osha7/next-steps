const { getClient } = require('./get-client');

(async () => {
  const client = await getClient();
  const name = process.argv[2] ?? 'osha';
  let insertRow = await client.query(
    'INSERT INTO my_table(name) VALUES($1);',
    [`${name}`]
  );
  console.log(
    `Inserted ${insertRow.rowCount} row`, name
  );
  await client.end();
})();

// run this file (with/without extra arg as <name>)
// node ./add-data.js <name>
// process.argv[2] -----> becomes 'name'