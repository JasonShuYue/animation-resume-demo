let domCode = document.querySelector("#domCode");
var result = `/*
    * 面试官你好，我叫舒越
    * 我将以动画的形式来介绍自己
    * 只用文字的形式太单调
    * 我就用代码来介绍吧
    * 首先准备一些样式
*/

* {
    transition: all 1s;
}

html {
    background: rgb(222, 222, 222);
    font-size: 16px;
}

#domCode {
    border: 1px solid red;
    padding: 16px;
}

/*
    我需要一点高亮
*/
.token.selector {
 color: #690;
}

.token.property {
    color: #905;
}

.token.function {
    color: #DD4A68;
}

/*
    加点3D效果
*/
#domCode {
    transform: rotate(360deg);
}

/*好了，开始正式介绍自己，我需要一张白纸,左右布局*/

#domCode {
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
}



`;

var result2 = `
#paper {
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
}

#paper > #content {
    width: 100%;
    height: 100%;
    background: white;
}
`;

var md = `
#自我介绍
我叫舒越
1995年5月出生
武汉理工大学毕业
自学前端半年
希望应聘前端工程师岗位

#技能介绍
熟悉Javascript，CSS，

#项目介绍
1.轮播
2.简历
3.canvas画板

`;


writeCode(domCode, '', result, () => {
    createPaper(() => {
        writeCode(domCode, result, result2, () => {
            let paper = document.querySelector("#paper > #content");
            writeMarkdown(paper, md)
        });
    });
})

//  添加html
function createPaper(callback) {
    let paper = document.createElement("div");
    let content = document.createElement("pre");
    paper.id = "paper";
    content.id = "content";
    document.body.appendChild(paper);
    paper.appendChild(content);

    callback && callback();
}


function writeCode(node, preCode, newCode, callback) {
    let n = 0;

    let id = setInterval(function() {
        n = n + 1;
        node.innerHTML = Prism.highlight(preCode + newCode.substring(0, n), Prism.languages.css);
        styleTag.innerHTML = preCode + newCode.substring(0, n);
        node.scrollTop = node.scrollHeight;
        if(n >= newCode.length) {
            clearInterval(id);
            callback && callback();
        }
    }, 10);
}

function writeMarkdown(node, markdown, callback) {
    let n = 0;

    let id = setInterval(function() {
        n = n + 1;
        node.innerHTML = markdown.substring(0, n);
        node.scrollTop = node.scrollHeight;
        if(n >= markdown.length) {
            clearInterval(id);
            callback && callback();
        }
    }, 100);
}







