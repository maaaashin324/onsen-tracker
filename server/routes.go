package server

import "github.com/labstack/echo/v4"

func CreateRoutes(e *echo.Echo) {
	apiGroup := e.Group("/api")

	apiGroup.POST("/onsens", R.CreateOnsen)
	apiGroup.GET("/onsens", R.SelectOnsen)
	apiGroup.GET("/onsens/:id", R.SelectOneOnsen)
	apiGroup.PUT("/onsens/:id", R.UpdateOnsen)
	apiGroup.DELETE("/onsens/:id", R.DeleteOnsen)
}
