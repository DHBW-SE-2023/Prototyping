from fastapi import FastAPI, Request, Form
from fastapi.templating import Jinja2Templates

app = FastAPI()
templates = Jinja2Templates(directory="templates/")


@app.get('/')
def read_form():
    return 'hello world'


@app.get("/form")
def form_post(request: Request):
    result = "Say hello"
    return templates.TemplateResponse('form.html', context={'request': request, 'result': result})


@app.post("/form")
def form_post(request: Request, txt: str = Form(...)):
    result = "Rude!"
    if txt.lower() == "hello":
        result = "hi"
    return templates.TemplateResponse('form.html', context={'request': request, 'result': result})
