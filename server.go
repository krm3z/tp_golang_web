package main

import (
	"html/template"
	"log"
	"net/http"
)

type Student struct {
	Name  string
	Age   string
	Quote string
	Hobby string
}

func main() {
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		tpl := template.Must(template.ParseFiles("index.html"))
		tpl.Execute(w, nil)
	})

	http.HandleFunc("/idcard", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Redirect(w, r, "/", http.StatusSeeOther)
			return
		}

		r.ParseForm()
		data := Student{
			Name:  r.FormValue("Name"),
			Age:   r.FormValue("Age"),
			Quote: r.FormValue("Quote"),
			Hobby: r.FormValue("Hobby"),
		}

		tpl := template.Must(template.ParseFiles("idCard.html"))
		tpl.Execute(w, data)
	})

	log.Println("✅ Serveur lancé sur : http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
