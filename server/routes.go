package server

import "github.com/labstack/echo/v4"

func CreateRoutes(e *echo.Echo) {
	apiGroup := e.Group("/api")

	apiGroup.POST("/onsens", CreateOnsen)
	apiGroup.GET("/onsens", SelectOnsen)
	apiGroup.GET("/onsens/:id", SelectOneOnsen)
	apiGroup.PUT("/onsens/:id", UpdateOnsen)
	apiGroup.DELETE("/onsens/:id", DeleteOnsen)
}
