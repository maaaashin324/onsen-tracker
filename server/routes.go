package server

import "github.com/labstack/echo/v4"

func CreateRoutes(e *echo.Echo) {
	apiGroup := e.Group("/api/onsens")

	apiGroup.POST("/", CreateOnsen)
	apiGroup.GET("/", SelectOnsen)
	apiGroup.GET("/:id", SelectOneOnsen)
	apiGroup.PUT("/:id", UpdateOnsen)
	apiGroup.DELETE("/:id", DeleteOnsen)
}
