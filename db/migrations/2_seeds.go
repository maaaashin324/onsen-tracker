package main

import (
	"fmt"

	CO "github.com/maaaashin324/cc3-project.polyglottal/config"

	"github.com/go-pg/migrations"
)

func init() {
	onsen1 := CO.Onsen{
		Name:      "Kusatsu",
		Address:   "28 Kusatsu, Kusatsu-machi, Agatsuma-gun, Gunma-ken 377-1711",
		District:  "Kantou",
		Rating:    5,
		Latitude:  36.6228396,
		Longitude: 138.5945222,
	}
	onsen2 := CO.Onsen{
		Name:      "Beppu",
		Address:   "874-0000 Oita Prefecture, Beppu, Motomachi, 16-23",
		District:  "Kyushu",
		Rating:    5,
		Latitude:  33.2774601,
		Longitude: 131.5038007,
	}
	truncateSQL := "TRUNCATE onsens"

	migrations.Register(func(db migrations.DB) error {
		fmt.Printf("Seeding table onsen...")
		err := db.Insert(&onsen1, &onsen2)
		return err
	}, func(db migrations.DB) error {
		fmt.Printf("Truncating table onsen...")
		_, err := db.Exec(truncateSQL)
		return err
	})
}
