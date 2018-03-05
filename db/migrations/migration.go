package main

import (
	"flag"
	"fmt"
	"os"

	"github.com/go-pg/migrations"
	"github.com/go-pg/pg"
)

const usageText = `This program runs command on the database. Supported commands are:
	- up - runs all the migrations
	- down - reverts last migration
	- reset - reverts all migrations
	- version - show the current migration version

Usage:
	go run *.go <command> [args]
`

func main() {
	flag.Usage = usage
	flag.Parse()

	db := pg.Connect(&pg.Options{
		User:     "postgres",
		Database: "onsen",
	})

	oldVersion, newVersion, err := migrations.Run(db, flag.Args()...)
	if err != nil {
		exitf(err.Error())
	}

	if newVersion != oldVersion {
		fmt.Printf("migrated from %d to %d\n", oldVersion, newVersion)
	} else {
		fmt.Printf("Version is %d\n", newVersion)
	}
}

func usage() {
	fmt.Printf(usageText)
	flag.PrintDefaults()
	os.Exit(2)
}

func errorf(s string, args ...interface{}) {
	fmt.Fprintf(os.Stderr, s+"\n", args...)
}

func exitf(s string, args ...interface{}) {
	errorf(s, args)
	os.Exit(1)
}
