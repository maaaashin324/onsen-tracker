package config

import (
	"database/sql"
	"os"

	// for postgres
	_ "github.com/lib/pq"
)

// DB function
func DB() *sql.DB {
	host := os.Getenv("DATABASE_URL")
	DATABASE := "onsen_log"

	connStr := "host=" + host + " DATABASE=" + DATABASE

	db, _ := sql.Open("postgres", connStr)
	err := db.Ping()
	if err != nil {
		panic(err)
	}

	return db
}
