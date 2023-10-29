#[macro_use] extern crate rocket;


use rocket::{fs::NamedFile, response::Redirect};
use std::path::{Path, PathBuf};
use rocket::form::Form;

#[derive(FromForm)]
struct FormData {
    result: String,
    id: String,
}

#[post("/home", data = "<form_data>")]
fn submit(form_data: Form<FormData>) -> String {
    let data = form_data.into_inner();
    format!("Received form data: id = {}", data.id)
}

#[get("/")]
fn index() -> Redirect {
    let redirect = Redirect::to(uri!("/home"));
    redirect
}

#[get("/home")]
async fn home () -> Option<NamedFile> {
    NamedFile::open("templates/form.html").await.ok()
}


#[get("/<file..>")]
async fn files(file: PathBuf) -> Option<NamedFile> {
    NamedFile::open(Path::new("client").join(file)).await.ok()
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index, home, files])
}