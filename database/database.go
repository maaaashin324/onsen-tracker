package database

import (
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var db *gorm.DB

func Init() {
	dsn := os.Getenv("DSN")
	dbConnection, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("DATABASE CONNECTION FAILED")
	}
	db = dbConnection
}

func DBManager() *gorm.DB {
	return db
}
