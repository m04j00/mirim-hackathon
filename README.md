# Mirim Tech Talk Hackathon

## API 환경구성
- Node.js   14.17.3
- MySQL   14.14 Distrib 5.7.7-rc

## API 실행 가이드

1. code Download
2. mysql > folder 내 table.sql로 table 생성
3. /app/mysql.js에 주석에 맞춰 자신의 정보 넣기
4. terminal > npm install 
5. terminal > node app/app.js
6. url > http://localhost:3000

## API 
#### < CREATE >  
**URL** /boards  
**METHOD** post  

#### < READ >  
**URL** /boards  
**METHOD** get  

#### < UPDATE >  
**URL**  /boards/:id  
**METHOD**  post  
**PARAMETER**  id  
**QUERY**  title, destription  

#### < DELETE >  
**URL**  /boards/:id  
**METHOD**  delete  
**PARAMETER**  id  
