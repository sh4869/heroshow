var comments = document.querySelectorAll(".footnote-ref");
var footnotes = document.querySelectorAll(".footnotes li");
for(var i = 0;i < comments.length;i++){
      // comment の方のidをmodify
      comments[i].id = comments[i].id + i.toString();
      comments[i].querySelector("a").href = comments[i].querySelector("a").href + i.toString()
      // footnote の方をmodify
      footnotes[i].id = footnotes[i].id + i.toString();
      footnotes[i].querySelector("a").href = footnotes[i].querySelector("a").href + i.toString()

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