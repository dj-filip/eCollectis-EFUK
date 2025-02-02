# eCollectis FUK
![efuk](https://github.com/user-attachments/assets/b40e1a41-31d3-4cfc-8b37-4ce7a2babf92)

# HOW TO RUN INSTALLATION

## Development version

## Prerequisite installation
1) Install Python 3.10.4 
2) Install Node.js v16.14.2
3) Install Mariadb 10.6

## Database
1) open database and create "electususers" database
2) open database and create "medijana" database
3) from project's root find "database" folder, and load electususers.sql and medijana.sql in the database

## Backend
1) Go to "backend" folder and run "python -m venv venv"
2) Type in "venv/Scripts/activate" to activate virtualenv (on Windows); or "source venv/bin/activate" (on Linux)
3) Install the requirements with "pip install -r requirements.txt" or "pip3 install -r requirements.txt"
4) Prepare migrations with "python manage.py makemigrations"
5) Configure "electus.cnf" and "fuk.cnf" files to target your database
6) Migrate data to "electususers" database with "python manage.py migrate --database=default" 
7) Migrate data to "medijana" database with "python manage.py migrate --database=fuk_db"
8) Run "py manage.py runserver" every time you want to run development version of Django


## Frontend
1) Open new command line
2) From repo folder go to "frontend" folder
3) Run "npm install" for the first time
4) Run "npm start" every time you want to start development version of Reactjs


## RUNNING APPLICATION ON DEFAULT PORT
1) Repeat steps 1-7 from Backend section
2) In step 8 in Backend section run instead "py manage.py runserver:port", where `port` is your default port number
3) Before running step 4 from frontend, navigate to `frontend/package.json` and assign value of port to `proxy` field that matches `port` from previous step
4) Now you can run frontend as described in Frontend section


## Docker settings
1. Install & run docker
2. From command line/terminal of main directory of this project appropriate Docker command

## Development environment
Only build docker containers:
```docker-compose -f docker-compose-dev.yml build```
Only run built docker containers:
```docker-compose -f docker-compose-dev.yml up```
Build and run docker containers:
```docker-compose -f docker-compose-dev.yml up --build```
Stop running docker containers:
```docker-compose -f docker-compose-dev.yml down```

## Production environment
Only build docker containers:
```docker-compose build```
Only run built docker containers:
```docker-compose up```
Build and run docker containers:
```docker-compose up --build```
Stop running docker containers:
```docker-compose down```


# HOW TO START APPLICATION

## Database start
1) mysql.server start

## Backend start
1) Type in "venv/Scripts/activate" to activate virtualenv (on Windows); or "source venv/bin/activate" (on Linux)
2) Run "py manage.py runserver" or "python3 manage.py runserver" every time you want to run development version of Django

## Frontend start
1) Run "npm start" every time you want to start development version of Reactjs
