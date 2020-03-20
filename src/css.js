const string=`
.skin{
    position: relative;
}
.san{
    position: relative;
    border: 10px solid;
    border-color: #000 transparent;
    border-bottom: none;
    top:100px;
    left:50%;
    height: 0px;
    width: 0px;
    margin-left: -10px;
    z-index: 4;
}
.yuan{
    position: absolute;
    border  : 1px  ;
    top: -18px;
    width: 20px;
    height: 8px;
    transform: translateX(-50%);
    border-radius: 10px 10px 0 0;
    background: #000;
}
.eye{
    border: 3px solid #000   ;
    width: 64px;
    height: 64px;
    position: absolute;
    left:50%;
    margin-left: -32px;
    top:50px;
    background: #2e2e2e;
}
.eye::before{
    content: "";
    border: 3px solid #000;
    background: #fff;
    width: 25px;
    height: 25px;
    display: block;
    border-radius: 50%;
    position: absolute;
    left: 9px;
    top: 1px;
}
.eye.left{
    transform: translateX(-140px);
    border-radius: 50%;
}
.eye.right{
    transform: translateX(140px);
    border-radius: 50%;
}
.mouth{
    width: 200px;
    height: 200px;
    position: absolute;
    top: 70px;
    left: 50%;
    margin-left: -100px;
}
.mouth .up{
    position: relative;
    z-index: 5 ;
}
.lip.left{
    position: absolute;
    border: 3px solid #000;
    height: 30px;
    width: 100px;
    top: 46px;
    border-radius: 0 50px 0 50px ;
    border-color: transparent transparent black transparent;
    border-right: none; 
    transform: rotate(-15deg);
    background: #ffe600;
    
}
.lip.right{
    position: absolute;
    border: 3px solid #000;
    height: 30px;
    width: 100px;
    right:0px;
    top: 46px;
    border-radius: 50px 0 50px 0 ;
    border-color: transparent transparent black transparent;
    border-left: none;
    transform: rotate(15deg);
    background: #ffe600;
}
.mouth .down{
    left: 50%;
    position: relative;
    width: 100%;
    margin-left: -100px;
    height: 250px;
    top: 60px;
    overflow: hidden;
   
}
.yuan1{
    border: 3px solid black;
    width: 180px;
    position: absolute;
    bottom:50px;  
    left: 0;
    height: 1000px;
    transform: translateX(6%);
    border-radius: 100px/395px;
    background: #a3081d;
    overflow: hidden;   
}
.yuan2{
    width: 200px;
    height: 250px;
    background: #ff485f;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    bottom:-90px;
    border-radius: 100%;
}
.face.face_left{
    border: 3px solid ;
    width: 100px ;
    height: 100px;
    border-radius: 100%;
    position:absolute;
    left: 50%;
    top: 174px;
    background: red;
    transform: translateX(-231px);
    z-index: 5;
}
.face.face_right{
    border: 3px solid ;
    width: 100px ;
    height: 100px;
    border-radius: 100%;
    position:absolute;
    right: 50%;
    top: 174px;
    background: red;
    transform: translateX(231px);
    z-index: 5;
}
`
export default string
//把这部分导出，然后被其他文件导入，模块化