package main

import (
	"os"

	R "github.com/maaaashin324/onsen-tracker/routes"

	"github.com/kataras/iris"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	app := iris.New()
	app.Favicon("./view/assets/image/onsenIcon.ico")
	app.StaticWeb("/", "./view")

	app.Get("/", func(ctx iris.Context) {
		ctx.ServeFile("./view/index.html", false)
	})

	api := app.Party("/api")
	{
		api.Post("/onsens", R.CreateOnsen)
		api.Get("/onsens", R.SelectOnsen)
		api.Get("/onsens/:id", R.SelectOneOnsen)
		api.Put("/onsens/:id", R.UpdateOnsen)
		api.Delete("/onsens/:id", R.DeleteOnsen)
	}

	app.Run(iris.Addr(":" + port))
}
