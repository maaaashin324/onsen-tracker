package main

import (
	"fmt"

	"github.com/go-pg/migrations"
)

func init() {
	insertSeedsSQL := "INSERT INTO onsen (name, address, rating) VALUES ('Kusatsu', '28 Kusatsu, Kusatsu-machi, Agatsuma-gun, Gunma-ken 377-1711', 5)"
	truncateSQL := "TRUNCATE onsen"

	migrations.Register(func(db migrations.DB) error {
		fmt.Printf("Seeding table onsen...")
		_, err := db.Exec(insertSeedsSQL)
		return err
	}, func(db migrations.DB) error {
		fmt.Printf("Truncating table onsen...")
		_, err := db.Exec(truncateSQL)
		return err
	})
}
