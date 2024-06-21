    let txt=document.getElementById('corpo1');
    let txt2=document.getElementById('corpo2');
    let txt3=document.getElementById('corpo3');
    let txt4=document.getElementById('corpo4');
    var imagem1=document.getElementById('imagem1');
    var imagem2=document.getElementById('imagem2');
    var imagem3=document.getElementById('imagem3');
    var image4=document.getElementById('imagem4');
function abrirTxt1(){
    
    if(txt.style.height=="0px"){
      txt.style.height="100px";
      txt2.style.height="0px";
      txt3.style.height="0px";
      txt4.style.height="0px";
      imagem1.src=("assets/images/icon-minus.svg");
      imagem2.src=("assets/images/icon-plus.svg");
      imagem3.src=("assets/images/icon-plus.svg");
      imagem4.src=("assets/images/icon-plus.svg");

    }else{
      txt.style.height="0px";
      imagem1.src=("assets/images/icon-plus.svg");
    };
  }
  function abrirTxt2(){
    if(txt2.style.height=="0px"){
      txt2.style.height="100px";
      txt.style.height="0px";
      txt3.style.height="0px";
      txt4.style.height="0px";
      imagem2.src=("assets/images/icon-minus.svg");
      imagem1.src=("assets/images/icon-plus.svg");
      imagem3.src=("assets/images/icon-plus.svg");
      imagem4.src=("assets/images/icon-plus.svg");

    }else{
      txt2.style.height="0px";
      imagem2.src=("assets/images/icon-plus.svg");
    };
  }
  function abrirTxt3(){
    if(txt3.style.height=="0px"){
      txt3.style.height="90px";
      txt2.style.height="0px";
      txt.style.height="0px";
      txt4.style.height="0px";
      imagem3.src=("assets/images/icon-minus.svg");
      imagem2.src=("assets/images/icon-plus.svg");
      imagem1.src=("assets/images/icon-plus.svg");
      imagem4.src=("assets/images/icon-plus.svg");

    }else{
      txt3.style.height="0px";
      imagem3.src=("assets/images/icon-plus.svg");
    };
  }
  function abrirTxt4(){
    if(txt4.style.height=="0px"){
      txt4.style.height="100px";
      txt2.style.height="0px";
      txt.style.height="0px";
      txt3.style.height="0px";
      imagem4.src=("assets/images/icon-minus.svg");
      imagem2.src=("assets/images/icon-plus.svg");
      imagem3.src=("assets/images/icon-plus.svg");
      imagem1.src=("assets/images/icon-plus.svg");

    }else{
      txt4.style.height="0px";
      imagem4.src=("assets/images/icon-plus.svg");
    };
  }