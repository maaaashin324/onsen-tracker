package main

import (
	"os"

	"github.com/labstack/echo/v4"
)

var port string

func Init() {
	port = os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}
}

func main() {
	e := echo.New()
	e.File("/favicon.ico", "./view/assets/image/onsenIcon.ico")
	e.File("/", "./view")

	e.Logger.Fatal(e.Start(":" + port))
}
