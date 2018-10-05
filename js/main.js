var app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function(event) {
      //alert()
      //もしnewItemが空ならば、return以降の処理は実行されない
      if (this.newItem === '') return;
      var todo = { //HTMLのtodo.itemに連携している
        item: this.newItem,
        isDone: false
      };

      this.todos.push(todo);
      this.newItem = '';
    },
    //deleteボタンは複数の場合があるため、どのdeleteボタンか判断をする必要あり
    //indexはtodos[]の配列のもの
    deleteItem: function(index) {
      //alert();

      //配列から要素を削除するにはsplice-methodsを利用
      //第一引数が削除を始める配列のインデックス　第二引数は削除する長さ（length）
      this.todos.splice(index, 1)
    }
  }
})
