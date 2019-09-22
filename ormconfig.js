module.exports = {
  type: 'mysql',
  username: 'root',
  password: '',
  database: 'attendance_kal',
  host: 'localhost',
  port: 3306,
  synchronize: false,
  logging: false,
  entities: [__dirname + '/src/**/*-entity{.ts,.js}'],
  migrationsTableName: "kal_skills_academie",
  migrations: ["migration/*.ts"],
  cli: {
    "entitiesDir": ["src/**/*.ts"],
    "migrationsDir": "migration"
  }
};