window.addEventListener('load', function() {
  var target = document.getElementById('list');
  var addBtn = document.getElementById('addNode');
  var remBtn = document.getElementById('removeNode');
  var inputVal = document.getElementById('data').value;
  var list = new LinkedList();

  list.add(10);
  list.add(20);
  list.add(30);
  list.add(40);
  list.add(50);

  target.innerHTML = list.print();

  console.log(inputVal);

  addBtn.addEventListener('click', function(inputVal) {
    console.log(inputVal);
    list.add(inputVal);
    target.innerHTML = list.print();
  });

  remBtn.onclick = function(data) {
    list.remove(data);
    target.innerHTML = list.print();
    return false;
  };
});
