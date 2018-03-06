package config

import (
	"os"

	"github.com/go-pg/pg"
)

// DB function gives you database connection
func DB() *pg.DB {
	var _Addr string
	if os.Getenv("DATABASE_URL") != "" {
		_Addr = os.Getenv("DATABASE_URL")
	} else {
		_Addr = "localhost"
	}

	db := pg.Connect(&pg.Options{
		Addr:     _Addr,
		User:     "postgres",
		Database: "onsen",
	})
	return db
}

// Onsen structure
type Onsen struct {
	ID      int
	Name    string
	Address string
	Rating  int
}
