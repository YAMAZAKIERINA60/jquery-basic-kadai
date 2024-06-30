$(function() {
  // ボタンがクリックされた場合
  $('#change-color').on('click', function(){
    $('#target').addClass('colorred');
  });
});
$(function() {
  // ボタンがクリックされた場合
  $('#change-text').on('click', function(){
    $('#target').text('Hello!');
  });
});
$(function () {
  // id属性がfadeOutの要素がクリックされたら
  $('#fade-out').on('click', function() {
    // フェードアウトする
    $('#target').fadeOut();
  });
});
$(function () {
    // id属性がfadeInの要素がクリックされたら
    $('#fade-in').on('click', function() {
      // フェードインする
      $('#target').fadeIn();
    });
 });
 