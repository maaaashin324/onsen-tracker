package routes

import (
	CO "cc3-project.polyglottal/config"
	"github.com/kataras/iris"
)

// Onsen structure
type Onsen struct {
	ID      int
	Name    string
	Address string
	Rating  int
}

// CreateOnsen function for POST method
func CreateOnsen(ctx iris.Context) {

	_name := ctx.PostValueTrim("name")
	_address := ctx.PostValueTrim("address")
	_rating, _ := ctx.PostValueInt("rating")
	onsen1 := Onsen{
		Name:    _name,
		Address: _address,
		Rating:  _rating,
	}

	db := CO.DB()

	err := db.Insert(&onsen1)
	CO.Err(err)

	resp := map[string]interface{}{
		"postID": onsen1.ID,
		"result": "Created Successfully!",
	}
	json(ctx, resp)
}
