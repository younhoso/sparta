# 🔥sparta
스파르타 온라인 강의에서 진행한 코드 정리\
웹 / 앱 종합반

## ✅app-basic-study 설치 (React Native)
- (Windows & Mac 사용자 모두) 안드로이드 스튜디오 **[(다운로드 링크)](https://developer.android.com/studio/)**
- (Mac 사용자만) XCode **[(다운로드 링크)](https://apps.apple.com/kr/app/xcode/id497799835?mt=12)**
- (Windows 사용자) node, npm 설치 **[(다운로드 링크)](https://nodejs.org/download/release/v12.19.1/node-v12.19.1-x64.msi)**
- (Mac 사용자) node, npm 설치 **[(다운로드 링크)](https://nodejs.org/download/release/v12.19.1/node-v12.19.1.pkg)**

## ✅app-basic-study 초기 세팅
### 1) Expo 명령어 도구 설치
```Bash
npm install -g expo-cli
# or
sudo npm install -g expo-cli
```
### 2) 로컬에 Expo 계정 세팅
```Bash
expo login --username "Expo 사이트 가입당시 입력한 name"
...
expo 패스워드 입력란이 차례로 나오고, 차례대로 입력하면 로그인 성공!
```
### 3) expo init 명령어로 기본 앱 생성
```Bash
# 완전 처음부터 프로젝트 만들경우
expo init <프로젝트 이름>
```
```Bash
# 로컬에 어느 정도 package.json 파일이 세팅되어 있는 경우
yarn install
```
### 4) expo start로 Expo 앱 실행
```Bash
# Expo 앱 실행 하기
expo start
```
### 5) 휴대폰에 설치한 Expo 클라이언트 앱으로 Expo 앱 실행