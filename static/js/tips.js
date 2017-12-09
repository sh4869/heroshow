var comments = document.querySelectorAll(".footnote-ref");
var i = 0;
for(i = 0;i < comments.length;i++){
      var id = comments[i].id.split("fnref:").pop();
      var text = document.querySelector("#fn\\:" + id).innerText.replace("[return]","");
      comments[i].title = text;
      tippy(comments[i],{
            arrow: 'small',
            stickyDuration: 100,
            distance: 9,
            size: "small"
      })
}