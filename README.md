# ๐ฅsparta
์คํ๋ฅดํ ์จ๋ผ์ธ ๊ฐ์์์ ์งํํ ์ฝ๋ ์ ๋ฆฌ\
์น / ์ฑ ์ขํฉ๋ฐ

## โapp-basic-study ์ค์น (React Native)
- (Windows & Mac ์ฌ์ฉ์ ๋ชจ๋) ์๋๋ก์ด๋ ์คํ๋์ค **[(๋ค์ด๋ก๋ ๋งํฌ)](https://developer.android.com/studio/)**
- (Mac ์ฌ์ฉ์๋ง) XCode **[(๋ค์ด๋ก๋ ๋งํฌ)](https://apps.apple.com/kr/app/xcode/id497799835?mt=12)**
- (Windows ์ฌ์ฉ์) node, npm ์ค์น **[(๋ค์ด๋ก๋ ๋งํฌ)](https://nodejs.org/download/release/v12.19.1/node-v12.19.1-x64.msi)**
- (Mac ์ฌ์ฉ์) node, npm ์ค์น **[(๋ค์ด๋ก๋ ๋งํฌ)](https://nodejs.org/download/release/v12.19.1/node-v12.19.1.pkg)**

## โapp-basic-study ์ด๊ธฐ ์ธํ
### 1) Expo ๋ช๋ น์ด ๋๊ตฌ ์ค์น
```Bash
npm install -g expo-cli
# or
sudo npm install -g expo-cli
```
### 2) ๋ก์ปฌ์ Expo ๊ณ์  ์ธํ
```Bash
expo login --username "Expo ์ฌ์ดํธ ๊ฐ์๋น์ ์๋ ฅํ name"
...
expo ํจ์ค์๋ ์๋ ฅ๋์ด ์ฐจ๋ก๋ก ๋์ค๊ณ , ์ฐจ๋ก๋๋ก ์๋ ฅํ๋ฉด ๋ก๊ทธ์ธ ์ฑ๊ณต!
```
### 3) expo init ๋ช๋ น์ด๋ก ๊ธฐ๋ณธ ์ฑ ์์ฑ
```Bash
# ์์  ์ฒ์๋ถํฐ ํ๋ก์ ํธ ๋ง๋ค๊ฒฝ์ฐ
expo init <ํ๋ก์ ํธ ์ด๋ฆ>
```
```Bash
# ๋ก์ปฌ์ ์ด๋ ์ ๋ package.json ํ์ผ์ด ์ธํ๋์ด ์๋ ๊ฒฝ์ฐ
yarn install
```
### 4) expo start๋ก Expo ์ฑ ์คํ
```Bash
# Expo ์ฑ ์คํ ํ๊ธฐ
expo start
```
### 5) ํด๋ํฐ์ ์ค์นํ Expo ํด๋ผ์ด์ธํธ ์ฑ์ผ๋ก Expo ์ฑ ์คํ