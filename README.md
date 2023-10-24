# Prototyping
A repository for NSFW's various protottypes

# Installation
```shell
curl -sSL https://install.python-poetry.org | python3 -
poetry init
```
# Execution
```shell
poetry run uvicorn src.helloworld:app --reload
```
The command uvicorn main:app refers to:

    main: the file main.py (the Python "module").
    app: the object created inside of main.py with the line app = FastAPI().
    --reload: make the server restart after code changes. Only do this for development.


https://eugeneyan.com/writing/how-to-set-up-html-app-with-fastapi-jinja-forms-templates/