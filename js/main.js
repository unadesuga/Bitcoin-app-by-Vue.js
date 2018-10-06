var app = new Vue({
    el: '#app',
    data: {
      items: null,
      keyword: '',
      message: '',
    },
    watch: {

    },
    created: function() {    //mountedでも可能 DOMにアクセスしない場合createdの方が処理速度速い
      this.keyword = 'JavaScript'
      this.getAnswer()
    },
    methods: {
      getAnswer: function() {
        if(this.keyword === '') {
           this.items = null
           return
        }

        this.message = 'Loading....'
        var vm = this
                     //ページは１ページ表示 1pageあたり２０件表示 queryに検索ワードを渡す
        var params = { page: 1, per_page: 20, query: this.keyword }
        axios.get('https //qiita.com/api/v2/items', {params})
          .then(function(response){
             console.log(response)
             vm.items = response.data
          })
          .catch(function(error) {
            vm.message = 'Error!' + error
          })
          .finally(function() {
             vm.message = ''
          })
      }
    }
})
