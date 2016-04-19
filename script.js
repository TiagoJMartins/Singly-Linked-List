window.addEventListener('load', function() {
  var target = document.getElementById('list');
  var addBtn = document.getElementById('addNode');
  var remBtn = document.getElementById('removeNode');
  var list = new LinkedList();

  list.add(10);
  list.add(20);
  list.add(30);
  list.add(40);
  list.add(50);

  target.innerHTML = list.print();

  addBtn.addEventListener('click', function(e) {
    list.add(document.getElementById('data').value);
    target.innerHTML = list.print();
  });

  remBtn.addEventListener('click', function(e) {
    list.remove(document.getElementById('data').value);
    target.innerHTML = list.print();
  });
});
