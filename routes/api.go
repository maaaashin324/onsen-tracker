package routes

import (
	CO "cc3-project.polyglottal/config"
	"github.com/kataras/iris"
)

// CreateOnsen function for POST method
func CreateOnsen(ctx iris.Context) {

	_name := ctx.PostValueTrim("name")
	_address := ctx.PostValueTrim("address")
	_rating, _ := ctx.PostValueInt("rating")
	onsen1 := CO.Onsen{
		Name:    _name,
		Address: _address,
		Rating:  _rating,
	}

	db := CO.DB()

	err := db.Insert(&onsen1)
	CO.Err(err)

	resp := map[string]interface{}{
		"postID": onsen1.ID,
		"result": "Created successfully!",
	}
	json(ctx, resp)
}

// SelectOnsen func for GET method
func SelectOnsen(ctx iris.Context) {
	db := CO.DB()

	var onsens []CO.Onsen
	_, err := db.Query(&onsens, "SELECT * FROM onsen ORDER BY ID")
	CO.Err(err)

	resp := map[string]interface{}{
		"data":   &onsens,
		"result": "Selected successfully!",
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
		"data":   &onsen,
		"result": "selected successfully",
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
		"data":   &onsen,
		"result": "Selected successfully",
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
		"result": "Deleted suceessfully",
	}
	json(ctx, resp)
}
