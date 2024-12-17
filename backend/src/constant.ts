const DB_NAME: string = "mukt";
export default DB_NAME;

const credentials = {
  username: process.env.ADMIN_USERNAME,
  password: process.env.ADMIN_PASSWORD,
};

export { credentials };
