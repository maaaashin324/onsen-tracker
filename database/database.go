package config

import (
	"os"

	"github.com/go-pg/pg"
)

// DB function gives you database connection
func DB() *pg.DB {
	var _Addr string
	var _Database string
	var _Password string
	var _User string

	if os.Getenv("DATABASE_URL") != "" {
		options, getOptionErr := pg.ParseURL(os.Getenv("DATABASE_URL"))
		Err(getOptionErr)
		_Addr = options.Addr
		_Database = options.Database
		_Password = options.Password
		_User = options.User
	} else {
		_Addr = "localhost:5432"
		_Database = "onsen"
		_Password = ""
		_User = "postgres"
	}

	db := pg.Connect(&pg.Options{
		Addr:     _Addr,
		Database: _Database,
		Password: _Password,
		User:     _User,
	})
	return db
}
