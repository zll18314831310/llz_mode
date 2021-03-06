var LazyLoadImage = (function(){
    return {
        setSrc: function(ele,eleUrl) {
            const oImg = document.createElement("img");
            oImg.style.display = 'none';
            document.body.appendChild(oImg);
            oImg.src=eleUrl;
            oImg.onload = function() {
                ele.style.backgroundImage = `url(${eleUrl})`;
                document.body.removeChild(this);
                // 不会立即执行
                // 后执行
            }
        },
        
        replaceSrc: function (ele,eleUrl) {
            
            const oImg = document.createElement("img");
            
            oImg.style.display = 'none';
            document.body.appendChild(oImg);
            oImg.src=eleUrl;
            oImg.onload = function() {
                ele.src = eleUrl;
                document.body.removeChild(this);
            }
        }
    }
 })();

 function showSection(eleId) {
     var sections = document.getElementsByTagName("section");
     for(var i=0;i<sections.length;i++) {
        sections[i].style.display = "none";
        if(sections[i].id != eleId) {
            sections[i].style.display = "none";
        }else {
            sections[i].style.display = "block";
        }
     }
 }
function prepareLink() {
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    var articles = document.getElementsByTagName("article");
    if(articles.length == 0) return false;
    var navs = articles[0].getElementsByTagName("nav");
    if(navs.length == 0) return false;
    var nav = navs[0];
    var links = nav.getElementsByTagName("a");
    for(var i = 0;i<links.length;i++) {
        var section = links[i].href.split("#")[1];
        links[i].tar = section;
        // console.log(section);
        links[i].onclick = function() {
            showSection(this.tar);
        }
    }
    var sum = document.getElementById("sum");
    sum.onmouseover = function() {
        this.style.cursor = "pointer";
    }
    sum.onmouseout = function() {
        this.style.cursor = "default";
    }
    sum.onclick = function() {
        var sections = document.getElementsByTagName("section");
        for(var i=0;i<sections.length;i++) {
            sections[i].style.display = "block";
        }
    }
}


function showPic() {
    var description = document.createElement("p");
    var pageHd = document.getElementsByClassName("page_hd");
    var oImg = document.createElement("img");
    oImg.id = "addpic";
    pageHd[0].appendChild(description);
    pageHd[0].appendChild(oImg);
    function preparePic(ele) {
        description.innerText = ele.title;
        oImg.src= ele.href;
    }
    var imagegallery = document.querySelector("#imagegallery");
    var links = imagegallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++) {
        links[i].onclick = function(event) {
            event.preventDefault();
            preparePic(this);
        }
    }    
}

function highlightRows() {
    if(!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("td");
    var thead = document.getElementsByTagName("th");
    // console.log(rows);
    // console.log(thead);
    for(var i =0;i<rows.length;i++) {
        rows[i].onmouseover = function() {
            this.style.fontWeight = "800";
            this.style.backgroundColor = "green";
        }
        rows[i].onmouseout = function() {
            this.style.fontWeight = "normal";
            this.style.backgroundColor = "#eb6";
        }
    }
    for(var i = 0;i<thead.length;i++) {
        thead[i].onmouseover = function() {
            this.style.fontWeight = "800";
        }
        thead[i].onmouseout = function() {
            this.style.fontWeight = "normal";
        }
    }
}


