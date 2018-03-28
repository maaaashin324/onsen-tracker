package routes

import (
	"github.com/kataras/iris"
	CO "github.com/maaaashin324/cc3-project.polyglottal/config"
)

// CreateOnsen function for POST method
func CreateOnsen(ctx iris.Context) {
	var onsen CO.Onsen

	if err := ctx.ReadJSON(&onsen); err != nil {
		CO.Err(err)
	}

	db := CO.DB()
	err := db.Insert(&onsen)
	CO.Err(err)

	resp := map[string]interface{}{
		"postData": onsen,
		"result":   true,
	}
	json(ctx, resp)
}

// SelectOnsen func for GET method
func SelectOnsen(ctx iris.Context) {
	districtParam := ctx.URLParam("district")

	var onsens []CO.Onsen
	var err error

	db := CO.DB()
	if districtParam == "" {
		err = db.Model(&onsens).Order("id").Select()
	} else {
		err = db.Model(&onsens).Where("district = ?", districtParam).Order("id").Select()
	}
	CO.Err(err)

	resp := map[string]interface{}{
		"data":   onsens,
		"result": true,
	}
	json(ctx, resp)
}

// SelectOneOnsen func for GET with id
func SelectOneOnsen(ctx iris.Context) {
	_ID, paramsErr := ctx.Params().GetInt("id")
	CO.Err(paramsErr)

	onsen := CO.Onsen{
		ID: _ID,
	}

	db := CO.DB()
	selectErr := db.Select(&onsen)
	CO.Err(selectErr)

	resp := map[string]interface{}{
		"data":   onsen,
		"result": true,
	}
	json(ctx, resp)
}

// UpdateOnsen func for PUT with id
func UpdateOnsen(ctx iris.Context) {
	_ID, paramsErr := ctx.Params().GetInt("id")
	CO.Err(paramsErr)

	onsen := CO.Onsen{
		ID: _ID,
	}
	db := CO.DB()
	selectErr := db.Select(&onsen)
	CO.Err(selectErr)

	_name := ctx.PostValueTrim("name")
	_address := ctx.PostValueTrim("address")
	_rating, ratingErr := ctx.PostValueInt("rating")
	CO.Err(ratingErr)

	onsen.Name = _name
	onsen.Address = _address
	onsen.Rating = _rating

	updateErr := db.Update(&onsen)
	CO.Err(updateErr)

	checkSelectErr := db.Select(&onsen)
	CO.Err(checkSelectErr)

	resp := map[string]interface{}{
		"data":   onsen,
		"result": true,
	}
	json(ctx, resp)
}

// DeleteOnsen func for DELETE method
func DeleteOnsen(ctx iris.Context) {
	_ID, paramsErr := ctx.Params().GetInt("id")
	CO.Err(paramsErr)

	onsen := CO.Onsen{
		ID: _ID,
	}

	db := CO.DB()
	deleteErr := db.Delete(&onsen)
	CO.Err(deleteErr)

	resp := map[string]interface{}{
		"result": true,
	}
	json(ctx, resp)
}
