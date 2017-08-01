
$(function(){ 

  $('#btn').click(function(){
    var fbase = firebase.database().ref().push();
    var ibx = $('#ibx'); 
    var msg = {
      name: $('#tag').val(),
      mess: $('#msg').val()
    }
    fbase.set(msg);
  });
  
  firebase.database().ref().on('child_added', snap => {
      var name = snap.child('name').val();
      var mess = snap.child('mess').val();
      console.log(name + ':' + mess);
      $('#ibx').append(name + ':' + mess + '<br>');
  });
  
  

});