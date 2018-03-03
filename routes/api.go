package routes

import (
	"time"

	CO "cc3-project.polyglottal/config"
	"github.com/kataras/iris"
)

// CreateOnsen function for POST method
func CreateOnsen(ctx iris.Context) {
	name := ctx.PostValueTrim("name")
	address := ctx.PostValueTrim("address")
	rating := ctx.PostValueTrim("rating")

	db := CO.DB()

	stmt, _ := db.Prepare("INSERT INTO onsen(name, address, rating, createdAt) VALUES (?, ?, ?, ?)")
	rs, iErr := stmt.Exec(name, address, rating, time.Now())
	CO.Err(iErr)

	insertID, _ := rs.LastInsertId()
	resp := map[string]interface{}{
		"postID": insertID,
		"result": "Created Successfully!",
	}
	json(ctx, resp)
}
