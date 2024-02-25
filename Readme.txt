# Finance App

Simple Finance App/web application on 3 docker containers and API service:
- :3456  - MySQL image.
- :8000  - Backend - Python- fastapi.
- :3000  - Frontend - html,css,React/JavaScript.
- EODHD API (finance data -articles,stocks data)


# video
[Youtube Link]()


#  instalation [bash]
1. Clone the repository to your local machine:
```
git clone https://github.com/EASS-HIT-PART-A-2024-CLASS-IV/finance_articles_fast_api.git
```
2. Make sure Docker is installed.
```
docker --version
```
3. Run from the directory:
```
cd app

docker-compose up -d
```
4. Go to http://localhost:3000 for enter this app


# Requirements
- Docker 
# Design Diagram:
<img src="./IO-API.drawio.jpg"></img>

# Author
itay marlinsky
