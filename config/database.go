package config

import (
	"github.com/go-pg/migrations"
	"github.com/go-pg/pg"
)

// DB function gives you database connection
func DB() migrations.DB {
	db := pg.Connect(&pg.Options{
		User:     "postgres",
		Database: "onsen",
	})
	return db
}
