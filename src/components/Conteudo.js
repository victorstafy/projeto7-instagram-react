import React from "react";

const story_img_list=[{img:"img/9gag.svg",text:"9gag"},{img:"img/meowed.svg",text:"meowed"},
                      {img:"img/barked.svg",text:"barked"},{img:"img/nathanwpylestrangeplanet.svg",text:"nathanwpylestrangeplanet"},
                      {img:"img/wawawicomics.svg",text:"wawawicomics"},{img:"img/respondeai.svg",text:"respondeai"},        
                      {img:"img/filomoderna.svg",text:"memeriagourmet"},{img:"img/memeriagourmet.svg",text:"memeriagourmet"}];

const post_info=[{title:"meowed",img_1:"img/meowed.svg",img_2:"img/gato-telefone.svg",img_3:"img/respondeai.svg",
text1:"Curtido por ",text2:"respondeai",text3:" e ",text4:"outras 101.523 pessoas"},
{title:"barked",img_1:"img/barked.svg",img_2:"img/dog.svg",img_3:"img/adorable_animals.svg",
text1:"Curtido por ",text2:"adorable_animals",text3:" e ",text4:"outras 99.159 pessoas"}]

const follow_sug_info=[{img:"img/bad.vibes.memes.svg",name:"bad.vibes.memes",reason:"Segue você"},
{img:"img/chibirdart.svg",name:"chibirdart",reason:"Segue você"},
{img:"img/razoesparaacreditar.svg",name:"razoesparaacreditar",reason:"Novo no Instagram"},
{img:"img/adorable_animals.svg",name:"adorable_animals",reason:"Segue você"},
{img:"img/smallcutecats.svg",name:"smallcutecats",reason:"Segue você"}]

let icon_name="heart-outline";

function Story(props) {
  return (
    <div className="story">
        <div className="imagem">
          <img src={props.img} />
        </div>
        <div className="usuario">
          {props.user_text}
        </div>
        
    </div>
  );
}

function Post(props) {
  const [like, setLike] = React.useState("");

  function reset_state(){
    if (like !== "selecionado"){
      setLike("selecionado"); icon_name=props.icon_2_selected;
    }
    else { setLike(""); icon_name=props.icon_2; }  
  }

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.img_1} />
          {props.title}
        </div>
        <div className="acoes">
          <ion-icon name={props.icon_1}></ion-icon>
        </div>
      </div>

      <div className="conteudo" 
          onClick={() => {reset_state()}}>
        <img src={props.img_2} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            
            <ion-icon name={icon_name}
             onClick={() => {reset_state()}}></ion-icon> 

            <ion-icon name={props.icon_3}></ion-icon>
            <ion-icon name={props.icon_4}></ion-icon>
          </div>
          <div>
            <ion-icon name={props.icon_5}></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.img_3} />
          <div className="texto">
          {props.text1}<strong>{props.text2}</strong> {props.text3} <strong>{props.text4}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function User(props){
  return (
  <div className="usuario">
        <img src={props.img} />
        <div className="texto">
          <strong>{props.text1}</strong>
          {props.text2}
        </div>
      </div>
  )
}

function Suggestion(props){
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={props.img} />
        <div className="texto">
          <div className="nome">{props.name}</div>
          <div className="razao">{props.reason}</div>
        </div>
      </div>

      <div className="seguir">{props.option}</div>
    </div>
  )
}

export default function Conteudo() {
  
  return (
    <div className="corpo">
      <div className="esquerda">
        <div className="stories">
          
        {story_img_list.map((my_imgs) => (
          <Story
          img={my_imgs.img}
          alt=""
          user_text={my_imgs.text}
          />
        ))}

          <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>

        
        <div className="posts">   
          {post_info.map((post) => (
            <Post 
            title={post.title}
            img_1={post.img_1}
            img_2={post.img_2}
            img_3={post.img_3}
            icon_1="ellipsis-horizontal"
            icon_2="heart-outline"
            icon_2_selected="heart"
            icon_3="chatbubble-outline"
            icon_4="paper-plane-outline"
            icon_5="bookmark-outline"
            text1={post.text1}
            text2={post.text2}
            text3={post.text3}
            text4={post.text4}
            />
            ))}
        </div>
      </div>

    <div className="sidebar">
      
      <User 
      img="img/catanacomics.svg"
      text1="catanacomics"
      text2="Catana"
      />

      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {follow_sug_info.map((suggestion) => (    
          <Suggestion 
          img={suggestion.img}
          name={suggestion.name}
          reason={suggestion.reason}
          option="Seguir"
          />
        ))}

      </div>

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  </div>
  );
}