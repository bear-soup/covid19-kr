# covid19-kr
KR COVID-19 Informative Repository (Kangwon National University, CSE)

# 개요
- Node.js에서 손쉽게 사용가능한 COVID-19(코로나바이러스-19) API 패키지
- 강원대학교 SW학습공동체 오픈소스 프로젝트 팀 **Bear Soup**

# 목차
- 설치방법
- 사용법
- 함수
- 라이선스
- 기여

# 설치방법
작성중

# 사용법
```javascript
var covid = require('covid19-kr'); // 또는 require('.')으로 현재 폴더 내 파일 불러오기

var options =  {
    apiKey: "<base64 apiKey>"
};

var covidInstance = covid.Covid19KR(options);
```
- COVID-19 인스턴스 생성 후 getCovidKRStatus와 getCovidKRByState로 데이터 Fetch

# 라이선스
[GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt)

# 기여
- [jungin500](https://github.com/jungin500): [Node.js 및 npm 레지스트리 스터디 및 연구](https://github.com/jungin500/covid19-packaging-study)
- [qwlake](https://github.com/qwlake): [Node.js 및 npm 레지스트리 스터디 및 연구](https://github.com/qwlake/study-covid-npm)
- [mukailee](https://github.com/mukailee): [COVID-19 API 분석 및 서칭](https://github.com/mukailee/api-pakage-study.git)
- [DeerGum](https://github.com/DeerGum): [Git 사용법 스터디 및 연구](https://github.com/DeerGum/opensource_study)
- [nelomo](https://github.com/nelomo): [Markdown 사용법 및 GitHub Integration 연구](https://github.com/nelomo/Nodejs)
