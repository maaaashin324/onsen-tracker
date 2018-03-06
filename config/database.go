package config

import (
	"github.com/go-pg/pg"
)

// DB function gives you database connection
func DB() *pg.DB {
	db := pg.Connect(&pg.Options{
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
