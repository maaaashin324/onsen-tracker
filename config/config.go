package config

import (
	"log"
)

// Err function
func Err(err interface{}) {
	if err != nil {
		log.Fatal(err)
	}
}
