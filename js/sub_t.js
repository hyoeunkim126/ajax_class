$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "미움받을 용기" },
  headers: { Authorization: "KakoAK 4a0aae40607d76e7c911ecd56083360e" }
})
  .done(function (msg) {
    console.log(msg.documents[1].title);
    console.log(msg.documents[1].thumbnail);
  })
$(".sub_box").append("<h3>" + msg.documents[0].title + "</h3>");
$(".sub_box").append("<img src='" + msg.documents[0].thumbnail + "'/>");
$(".contextbox").append("<h6>" + msg.documents[0].authors[0] + "</h6>");
$(".pricenum").append(msg.documents[0].price + "원");

var str = msg.documents[0].contents;
var str2 = str.substring(0, 600);

$(".contextbox").append("<p>" + str2 + "</p>");
$(".contextbox").append("<span>" + "자세히 보기" + "</span>");

$(function () {
  $.get("./sub_txt/txt1.txt", function (data) {
    $("#tmpBox").html(data);
  });
});
