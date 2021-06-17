const axios = require('axios')

    <script>
    let numberfloat = 0.000000000000000001;

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    }

    function upBitApiBtc() {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.upbit.com/v1/ticker?markets=KRW-BTC');
      xhr.onload = function () {
        if (xhr.status === 200 || xhr.status === 201) {
          let parsing_data = xhr.response
          parsing_data = JSON.parse(parsing_data)
          $('#bit').html("<h3>" + numberWithCommas(parsing_data[0].trade_price) + "원</h3>")
        }
      }
      xhr.send();
    }

    let gCoinPrice = 0;

    function coinMarketApi() {
      let xhr = new XMLHttpRequest()
      xhr.open('GET', 'https://api.coingecko.com/api/v3/simple/price?ids=filecoin&vs_currencies=krw')
      xhr.onload = function () {
        if (xhr.status === 200) {
          let parsing_data = xhr.response
          parsing_data = JSON.parse(parsing_data)

          gCoinPrice = parsing_data.filecoin.krw
          $('#fil').html("<h3>" + numberWithCommas(gCoinPrice) + "원</h3>")
        }
      }
      xhr.send();
    }

    upBitApiBtc()
    coinMarketApi()

    const a = setTimeout(() => {
      $('#AllMoney').html("<h3>" + numberWithCommas(Math.floor(gCoinPrice * gMyFil)) + "원</h3>")
    }, 1500)()
  </script>

  <script>
        let numberfloat = 0.000000000000000001;
        function numberWithCommas(x) { return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ','); }

        $(document).ready(function () {
            setInterval(() => { 
                getWorldTime(+9, kortime)
                getWorldTime(-5, newyork)
            }, 1000)
        })

        function leadingZeros(n, digits) {
            var zero = '';
            n = n.toString();

            if (n.length < digits) {
                for (i = 0; i < digits - n.length; i++) zero += '0';
            }
            return zero + n;
        }

        function getWorldTime(tzOffset, place) { // 24시간제
            var now = new Date();
            var tz = now.getTime() + (now.getTimezoneOffset() * 60000) + (tzOffset * 3600000);
            now.setTime(tz);

            var s = 
                ' ' + leadingZeros(now.getHours(), 2) +
                ':' + leadingZeros(now.getMinutes(), 2) +
                ':' + leadingZeros(now.getSeconds(), 2);
        
            place.innerHTML = s;
        }

        function upBitApiBtc() {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api.upbit.com/v1/ticker?markets=KRW-BTC');
            xhr.onload = function () {
                if (xhr.status === 200 || xhr.status === 201) {
                    let parsing_data = xhr.response
                    parsing_data = JSON.parse(parsing_data)
                    $('#upbtc').html("<div class='price'>" + numberWithCommas(parsing_data[0].trade_price) + "원</div>")
                }
            }
            xhr.send();
        }
      
        function upBitApiRvn() {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api.upbit.com/v1/ticker?markets=BTC-RVN');
            xhr.onload = function () {
                if (xhr.status === 200 || xhr.status === 201) {
                    let parsing_data = xhr.response
                    parsing_data = JSON.parse(parsing_data)
                    // $(document).ready().innerHTML(numberWithCommas(parsing_data[0].trade_price))
                    $('#uprvn').html("<div class='price'>" + numberWithCommas(parsing_data[0].trade_price) + "BTC</div>")
                }
            }
            xhr.send();
        }

        function coinMarketApi() {
            let xhr = new XMLHttpRequest()
            xhr.open('GET', 'https://api.coingecko.com/api/v3/simple/price?ids=filecoin&vs_currencies=krw')
            xhr.onload = function () {
                if (xhr.status === 200) {
                let parsing_data = xhr.response
                parsing_data = JSON.parse(parsing_data)

                gCoinPrice = parsing_data.filecoin.krw
                $('#cofil').html("<div class='price'>" + numberWithCommas(gCoinPrice) + "원</div>")
                }
            }
            xhr.send();
        }

        function binanceBtc() {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api.binance.com/api/v1/ticker/price?symbol=BTCUSDT');
            xhr.onload = function () {
                if (xhr.status === 200 || xhr.status === 201) {
                    let parsing_data = xhr.response
                    parsing_data = JSON.parse(parsing_data)
                    $('#bibtc').html("<div class='price'>" + numberWithCommas(Math.floor(parsing_data.price))+ "달러</div>")
                }
            }
            xhr.send();
        }

        function binanceFil() {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api.binance.com/api/v1/ticker/price?symbol=FILUSDT');
            xhr.onload = function () {
                if (xhr.status === 200 || xhr.status === 201) {
                    let parsing_data = xhr.response
                    parsing_data = JSON.parse(parsing_data)
                    $('#bifil').html("<div class='price'>" + numberWithCommas(Number(parsing_data.price).toFixed(2)) + "달러</div>")
                }
            }
            xhr.send();
        }

        function filfoxMain() {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://filfox.info/api/v1/overview');
            xhr.onload = function () {
                if (xhr.status === 200 || xhr.status === 201) {
                    let parsing_data = xhr.response
                    parsing_data = JSON.parse(parsing_data)
                    
                    $('#foxHeight').html("<div class='value'>" + numberWithCommas(parsing_data.height) + "</div>")
                    $('#foxAM').html("<div class='value'>" + numberWithCommas(parsing_data.activeMiners) + "명</div>")
                    $('#foxBR').html("<div class='value'>" + numberWithCommas((parsing_data.blockReward * numberfloat).toFixed(4)) + "FIL</div>")
                    $('#foxTPC').html("<div class='value'>" + numberWithCommas(Math.ceil(parsing_data.totalPledgeCollateral * numberfloat)) + "FIL</div>")
                    $('#foxDM').html("<div class='value'>" + numberWithCommas(parsing_data.dailyMessages) + "개</div>")
                    
                }
            }
            xhr.send();
        }

        upBitApiBtc();
        upBitApiRvn();
        coinMarketApi();
        binanceBtc();
        binanceFil();
        filfoxMain();
    </script>


