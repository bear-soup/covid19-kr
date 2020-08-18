# covid19-kr
KR COVID-19 Informative Repository (Kangwon National University, CSE)

# 개요
> Node.js에서 손쉽게 사용가능한 COVID-19(코로나바이러스-19) API 패키지 <br>
> 강원대학교 SW학습공동체 오픈소스 프로젝트 팀 **Bear Soup**

# 설치방법
```bash
$ npm install covid19-kr
```

# 사용법
```javascript
var covid = require('covid19-kr'); // 또는 require('.')으로 현재 폴더 내 파일 불러오기

var options =  {
    apiKey: "<base64 apiKey>"
};

var covidInstance = covid.Covid19KR(options);
// 이후에 아래함수들을 사용해 데이터 Fetch
```

# 함수
```javascript
async getCovidStatisticsBetweenClear(begin, end)
//begin(날짜 yyyymmdd) 와 end(날짜 yyyymmdd) 사이에 발생한 완치자 수를 알 수 있습니다.

async getCovidStatisticsBetweenSick(begin, end)
// begin(날짜 yyyymmdd) 와 end(날짜 yyyymmdd) 사이에 발생한 확진자 수를 알 수 있습니다.

async getCovidStatisticsBetweenDeath(begin, end)
// begin(날짜 yyyymmdd) 와 end(날짜 yyyymmdd) 사이에 발생한 사망자 수를 알 수 있습니다.

async getCovidStatisticsDayClear(day)
// day(날짜 yyyymmdd) 당일동안 발생한 완치자 수를 알 수 있습니다.

async getCovidStatisticsDaySick(day)
// day(날짜 yyyymmdd) 당일동안 발생한 확진자 수를 알 수 있습니다.

async getCovidStatisticsDayDeath(day)
// day(날짜 yyyymmdd) 당일동안 발생한 사망자 수를 알 수 있습니다.
```


# 라이선스
- [GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt)

# 기여
- [jungin500](https://github.com/jungin500): [Node.js 및 npm 레지스트리 스터디 및 연구](https://github.com/jungin500/covid19-packaging-study)
- [qwlake](https://github.com/qwlake): [Node.js 및 npm 레지스트리 스터디 및 연구](https://github.com/qwlake/study-covid-npm)
- [mukailee](https://github.com/mukailee): [COVID-19 API 분석 및 서칭](https://github.com/mukailee/api-pakage-study.git)
- [DeerGum](https://github.com/DeerGum): [Git 사용법 스터디 및 연구](https://github.com/DeerGum/opensource_study)
- [nelomo](https://github.com/nelomo): [Markdown 사용법 및 GitHub Integration 연구](https://github.com/nelomo/Nodejs)