'use strict'

/**
 * covid19-kr
 * 
 * @author LimeOrangePie <ji5489@gmail.com>
 * @author qwlake <qwlake@gmail.com>
 * @license GPLv3
 */

const axios = require('axios')
const moment = require('moment')

module.exports = {
    Covid19KR: function(options) {
        return new Covid19(options)
    }
} 

class Covid19 {
    static RequestInfo = Object.freeze({
        Path: {
            getCovid19InfStateJson: "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson",
            getCovid19SidoInfStateJson: "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson"
        }
    })

    constructor(options) {
        this.apiKey = options.apiKey
        this.numOfRows = 10
    }

    async getCovidKRStatus(rows = 10, pageNo = 1, startDate = moment().subtract(1, 'month').format('yyyyMMDD'),
        endDate = moment().format('yyyyMMDD')) {

        return this.requestCovid(
            Covid19.RequestInfo.Path.getCovid19InfStateJson,
            rows,
            pageNo,
            startDate,
            endDate
        )
    }

    async getCovidKRByState(rows = 10, pageNo = 1, startDate = moment().subtract(1, 'month').format('yyyyMMDD'),
        endDate = moment().format('yyyyMMDD')) {
            
        return this.requestCovid(Covid19.RequestInfo.Path.getCovid19SidoInfStateJson,
            rows,
            pageNo,
            startDate,
            endDate
        )
    }
    async getCovidKRData(rows = 10, pageNo = 1, startDate = moment().subtract(1, 'month').format('yyyyMMDD'),
        endDate = moment().format('yyyyMMDD'),select = 0) {
        
        return this.requestCovid(
            Covid19.RequestInfo.Path.getCovid19InfStateJson,
            rows,
            pageNo,
            startDate,
            endDate
        ).then(
            function(response) {
                let resultValue = 0;
                let dataCnt = response.totalCount;
                switch(select){ //0 확진자수 1 완치자수 2 사망수
                    case 0:
                        resultValue = response.items.item[0].decideCnt - response.items.item[dataCnt-1].decideCnt;
                        break;
                    case 1:
                        resultValue = response.items.item[0].clearCnt - response.items.item[dataCnt-1].clearCnt;
                        break;
                    case 2:
                        resultValue = response.items.item[0].deathCnt - response.items.item[dataCnt-1].deathCnt;
                        break;
                }
                return resultValue;
            }
        )
    }

    async requestCovid(requestBaseURL, rows, pageNo, startDate, endDate) {
        const requestURL = requestBaseURL +
            `?serviceKey=${this.apiKey}&numOfRows=${rows}` + 
            `&pageNo=${pageNo}&startCreateDt=${startDate}&endCreateDt=${endDate}`

        const response = await axios.get(requestURL)
        const responseHeader = response.data.response.header
        if (responseHeader.resultCode != '00')
            throw new Error(`Got invalid response(${responseHeader.resultCode}): ${responseHeader.resultMsg}`)

        if (!(response.data && response.data.response && response.data.response.body &&
            response.data.response.body.totalCount != undefined && response.data.response.body.items)) {
            this.__errorBody__ = response.data
            throw new Error(`No valid response body found - check response data with Covid19.__errorBody__ !`)
        }
        const responseBody = response.data.response.body

        // const itemCount = responseBody.totalCount
        // const itemList = responseBody.items.item

        return responseBody
    }
}