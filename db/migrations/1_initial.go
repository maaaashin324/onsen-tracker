package main

import (
	"fmt"

	"github.com/go-pg/pg/orm"

	CO "github.com/maaaashin324/cc3-project.polyglottal/config"

	"github.com/go-pg/migrations"
)

func init() {
	migrations.Register(func(db migrations.DB) error {
		fmt.Printf("Creating table onsen...")
		err := db.CreateTable(&CO.Onsen{}, &orm.CreateTableOptions{
			Temp:          false,
			IfNotExists:   true,
			Varchar:       100,
			FKConstraints: true,
		})
		return err
	}, func(db migrations.DB) error {
		fmt.Printf("Dropping table onsen...")
		err := db.DropTable(&CO.Onsen{}, &orm.DropTableOptions{
			IfExists: true,
			Cascade:  true,
		})
		return err
	})
}
