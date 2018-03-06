package main

import (
	"os"

	R "cc3-project.polyglottal/routes"

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

	api := app.Party("/api")
	{
		api.Post("/onsens", R.CreateOnsen)
		api.Get("/onsens", R.SelectOnsen)
		api.Put("/onsens", R.UpdateOnsen)
		api.Delete("/onsens", R.DeleteOnsen)
	}

	app.Run(iris.Addr(":" + port))
}
