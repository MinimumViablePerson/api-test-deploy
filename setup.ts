import Database from 'better-sqlite3'

const db = new Database('./data.db', { verbose: console.log })

db.exec(`
DROP TABLE IF EXISTS djs;

CREATE TABLE djs (
  id INTEGER NOT NULL,
  name TEXT NOT NULL,
  PRIMARY KEY (id)
);
`)

const createDj = db.prepare(`
INSERT INTO djs (name) VALUES (?);
`)

const djs = [
  {
    name: 'Adriancito Porvafor'
  },
  {
    name: 'Dj PM'
  },
  {
    name: 'Dj Dagz'
  },
  {
    name: 'Zhu'
  },
  {
    name: 'Peggy Gou'
  },
  {
    name: 'Nina Kraviz'
  },
  {
    name: 'Hardwell'
  },
  {
    name: 'Ledio'
  },
  {
    name: 'Tiesto'
  },
  {
    name: 'Armin Van Buuren'
  },
  {
    name: 'David Guetta'
  },
  {
    name: 'Skrillex'
  }
]

for (const dj of djs) {
  createDj.run(dj.name)
}
