package main

import (
	"fmt"

	"github.com/go-pg/migrations"
)

func init() {
	crtTblSQL := "CREATE TABLE onsen (id serial PRIMARY KEY, name VARCHAR(50) UNIQUE NOT NULL, address VARCHAR(100) UNIQUE NOT NULL, rating DECIMAL NOT NULL)"
	drpTblSQL := "DROP TABLE IF EXISTS onsen"

	migrations.Register(func(db migrations.DB) error {
		fmt.Printf("Creating table onsen...")
		_, err := db.Exec(crtTblSQL)
		return err
	}, func(db migrations.DB) error {
		fmt.Printf("Dropping table onsen...")
		_, err := db.Exec(drpTblSQL)
		return err
	})
}
