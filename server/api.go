package server

import (
	"errors"
	"net/http"

	"github.com/imdario/mergo"
	"github.com/labstack/echo/v4"
	"github.com/maaaashin324/onsen-tracker/database"
	"github.com/maaaashin324/onsen-tracker/models"
	"gorm.io/gorm"
)

// CreateOnsen function for POST method
func CreateOnsen(ctx echo.Context) (err error) {
	var onsen models.Onsen
	if err = ctx.Bind(onsen); err != nil {
		return err
	}

	db := database.DBManager()
	result := db.Create(&onsen)
	if result.Error != nil {
		return result.Error
	}
	return ctx.JSON(http.StatusOK, onsen)
}

// SelectOnsen func for GET method
func SelectOnsen(ctx echo.Context) (err error) {
	districtParam := ctx.QueryParam("district")

	var onsens []models.Onsen

	db := database.DBManager()
	var result *gorm.DB
	if districtParam == "" {
		result = db.Find(&onsens).Order("id")
	} else {
		result = db.Find(&onsens).Where("district = ?", districtParam).Order("id")
	}
	if result.Error != nil {
		return result.Error
	}

	return ctx.JSON(http.StatusOK, onsens)
}

// SelectOneOnsen func for GET with id
func SelectOneOnsen(ctx echo.Context) (err error) {
	id := ctx.Param("id")
	if id == "" {
		return errors.New("id is missing")
	}

	var onsen models.Onsen
	db := database.DBManager()
	if result := db.First(&onsen, id); result.Error != nil {
		return result.Error
	}

	return ctx.JSON(http.StatusOK, onsen)
}

// UpdateOnsen func for PUT with id
func UpdateOnsen(ctx echo.Context) (err error) {
	id := ctx.Param("id")
	if id == "" {
		return errors.New("id is missing")
	}

	var currentOnsen models.Onsen
	db := database.DBManager()
	if result := db.First(&currentOnsen, id); result.Error != nil {
		return result.Error
	}

	var updatedOnsen models.Onsen
	if err = ctx.Bind(&updatedOnsen); err != nil {
		return err
	}

	if err = mergo.Merge(&currentOnsen, updatedOnsen, mergo.WithOverride); err != nil {
		return err
	}

	if result := db.Save(&currentOnsen); result.Error != nil {
		return result.Error
	}

	return ctx.JSON(http.StatusOK, currentOnsen)
}

// DeleteOnsen func for DELETE method
func DeleteOnsen(ctx echo.Context) (err error) {
	id := ctx.Param("id")
	if id == "" {
		return errors.New("id is missing")
	}

	db := database.DBManager()
	db.Delete(&models.Onsen{}, id)

	return ctx.JSON(http.StatusOK, nil)
}
