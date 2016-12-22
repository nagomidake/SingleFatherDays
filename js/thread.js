/*
$('#method-answer').on('click', function(){
  console.log('回答を入力！');
  var answer_text = document.answerFm.answer_text.value;
  var dom = '  <div class="anotherUser"><div class="threadBorder"></div><div class="threadUser"><img src="images/icon_Hitode.png" alt="" class="icon"/><font class="threadUserName">ヒトデさん</font></div><div class="threadText">'+answer_text+'</div<div class="threadDate">2016/10/09/18:10:42</div></div>'
  var $target = $(dmy_answer).next();
  $target.append(dom);
});
*/

function answerAppend(){
  console.log('回答を入力！');
  var answer_text = document.answerFm.answer_text.value;
  var anotherUser = document.createElement('div');
  anotherUser.className = 'anotherUser';
  var threadBorder = document.createElement('div');
  threadBorder.className = 'threadBorder';
  var threadUser = document.createElement('div');
  threadUser.className = 'threadUSer';
  var userIcon= document.createElement('img');
  userIcon.className = 'icon';
  userIcon.src = 'images/icon_takahashi.png';
  var threadUserName = document.createElement('font');
  threadUserName.className = 'threadUserName';
  threadUserName.innerText = '高橋純一';
  var threadText = document.createElement('div');
  threadText.className = 'threadText';
  threadText.innerText = answer_text;
  var threadDate = document.createElement('div');
  threadDate.className = 'threadDate';
  var DD = new Date();
  var year = DD.getYear() + 1900;
  var month = DD.getMonth() + 1;
  var time = year + '/' + month + '/' + DD.getDate() + '/' + DD.getHours() + ':' + DD.getMinutes() + ':' + DD.getSeconds();
  threadDate.innerText = time;

  var target = document.getElementById('dmy-answer');
  target.appendChild(anotherUser);
  anotherUser.appendChild(threadBorder);
  anotherUser.appendChild(threadUser);
  threadUser.appendChild(userIcon);
  threadUser.appendChild(threadUserName);
  anotherUser.appendChild(threadText);
  anotherUser.appendChild(threadDate);

}
