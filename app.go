package main

import (
	"os"

	"github.com/kataras/iris"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	app := iris.New()
	app.RegisterView(iris.HTML("./view", ".html"))

	app.Get("/", func(ctx iris.Context) {
		ctx.ViewData("message", "Hello world!")
		ctx.View("index.html")
	})

	app.Run(iris.Addr(":" + port))
}
