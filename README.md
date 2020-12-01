# 使用者登入系統
  實現使用者登入與註冊功能，將資料存儲於資料庫。
---
- ## 運行環境需求:
  Node.js

- ## 資料庫需求:
  MongoDB

- ## 插件需求 :
1. npm
2. Express
3. Express-handlebars
4. Mongoose
5. Body-parser
6. Nodemon

- ## 功能 :
1. 登入現有帳號。
2. 在登入頁輸入新帳號可跳轉至註冊頁面。
3. 防止相同的email被註冊。
4. 密碼確認系統。

- ## 使用者測試帳號/密碼：
1. tony@stark.com / iamironman
2. captain@hotmail.com / icandothisallday
3. peter@parker.com / enajyram
4. natasha@gamil.com / parol#@$!
5. nick@shield.com / password

- ## 應用程式安裝前導 :
1. ### 請用 Mac users: 終端機 / Windows users: Git Bash 輸入以下內容：

2. 將專案從GitHub複製到你的本機中：
```
git clone https://github.com/etheriuman/user-login.git
```
3. 進入到該資料夾中：
```
cd user-login
```
4. 安裝npm：
```
npm init -y
```
5. 用npm指令安裝所有所需的插件：
```
npm i
```
6. 啟動你的資料庫
7. 產生種子資料到資料庫中：
```
npm run seed
```
8. 開始運行伺服器：
```
npm run dev
```
9. 將回傳的網址貼到瀏覽器中：
```
the express server is listening on http://localhost:3000/login
```