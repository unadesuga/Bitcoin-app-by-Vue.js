var app = new Vue({
  el: '#app',
  data: { //この３つはプロパティ
    bpi: null,
    hasError: false,
    loading: true
  },
  mounted: function() { //axiosとはVue.jsのライブラリ
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(function(response) { //responseにAPIの戻り値が入っている
        //console.log(response.data.bpi)
        /* console.log(response.data.bpi.USD.rate_foat) */
        this.bpi = response.data.bpi　　　 //bpiにresponse.data.bpiを入れる
      }.bind(this)) //APIからbitcoin価格を取得しbpiプロパティにデータ入れる
      .catch(function(error) {
        console.log(error)
        this.hasError = true //この行だけだとhasErrorにアクセスできないので、下のbind(this)要
      }.bind(this))
      .finally(function() { //このfinallyは通信が終わった最後に読まれる
        this.loading = false
      }.bind(this))
  },
  filters: {
    currencyDecimal(value) {
      return value.toFixed(2) //数を固定した小数点表記にする 小数点第２まで
    }
  }
})
