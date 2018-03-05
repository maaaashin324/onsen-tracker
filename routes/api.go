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

	stmt, sErr := db.Prepare("INSERT INTO onsen(name, address, rating, createdAt) VALUES (?, ?, ?, ?)")
	CO.Err(sErr)

	rs, iErr := stmt.Exec(name, address, rating, time.Now())
	CO.Err(iErr)

	insertID, _ := rs.LastInsertId()
	resp := map[string]interface{}{
		"postID": insertID,
		"result": "Created Successfully!",
	}
	json(ctx, resp)
}

func SelectOnsen(ctx iris.Context) {
	db := CO.DB()

	stmt, sErr := db.Prepare("SELECT * FROM onsen ORDER BY id")
	CO.Err(sErr)

	rows, getErr := stmt.Query()
	CO.Err(getErr)

	resp := map[string]interface{}{
		"id": 
	}
}
