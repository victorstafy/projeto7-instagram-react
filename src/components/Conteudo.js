const story_img_list=[{img:"img/9gag.svg",text:"9gag"},{img:"img/meowed.svg",text:"meowed"},
                      {img:"img/barked.svg",text:"barked"},{img:"img/nathanwpylestrangeplanet.svg",text:"nathanwpylestrangeplanet"},
                      {img:"img/wawawicomics.svg",text:"wawawicomics"},{img:"img/respondeai.svg",text:"respondeai"},        
                      {img:"img/filomoderna.svg",text:"memeriagourmet"},{img:"img/memeriagourmet.svg",text:"memeriagourmet"}];
const post_info=[{title:"meowed",img_1:"img/meowed.svg",img_2:"img/gato-telefone.svg",img_3:"img/respondeai.svg",
text:"Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>"},
{title:"barked",img_1:"img/barked.svg",img_2:"img/dog.svg",img_3:"img/adorable_animals.svg",
text:"Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>"}]


function Story(props) {
  return (
    <div class="story">
        <div class="imagem">
          <img src={props.img} />
        </div>
        <div class="usuario">
          {props.user_text}
        </div>
        
    </div>
  );
}

function Post(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.img_1} />
          {props.title}
        </div>
        <div class="acoes">
          <ion-icon name={props.icon_1}></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.img_2} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name={props.icon_2}></ion-icon>
            <ion-icon name={props.icon_3}></ion-icon>
            <ion-icon name={props.icon_4}></ion-icon>
          </div>
          <div>
            <ion-icon name={props.icon_5}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.img_3} />
          <div class="texto">
            {props.text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Conteudo() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <div class="stories">
          
        {story_img_list.map((my_imgs) => (
          <Story
          img={my_imgs.img}
          alt=""
          user_text={my_imgs.text}
          />
        ))}

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>

        
        <div class="posts">
          
          {post_info.map((post) => (
            <Post 
            title={post.title}
            img_1={post.img_1}
            img_2={post.img_2}
            img_3={post.img_3}
            icon_1="ellipsis-horizontal"
            icon_2="heart-outline"
            icon_3="chatbubble-outline"
            icon_4="paper-plane-outline"
            icon_5="bookmark-outline"
            text={post.text}
            />
            ))}
          
          
        </div>
      </div>

    <div class="sidebar">
      <div class="usuario">
        <img src="img/catanacomics.svg" />
        <div class="texto">
          <strong>catanacomics</strong>
          Catana
        </div>
      </div>

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        <div class="sugestao">
          <div class="usuario">
            <img src="img/bad.vibes.memes.svg" />
            <div class="texto">
              <div class="nome">bad.vibes.memes</div>
              <div class="razao">Segue você</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>

        <div class="sugestao">
          <div class="usuario">
            <img src="img/chibirdart.svg" />
            <div class="texto">
              <div class="nome">chibirdart</div>
              <div class="razao">Segue você</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>

        <div class="sugestao">
          <div class="usuario">
            <img src="img/razoesparaacreditar.svg" />
            <div class="texto">
              <div class="nome">razoesparaacreditar</div>
              <div class="razao">Novo no Instagram</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>

        <div class="sugestao">
          <div class="usuario">
            <img src="img/adorable_animals.svg" />
            <div class="texto">
              <div class="nome">adorable_animals</div>
              <div class="razao">Segue você</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>

        <div class="sugestao">
          <div class="usuario">
            <img src="img/smallcutecats.svg" />
            <div class="texto">
              <div class="nome">smallcutecats</div>
              <div class="razao">Segue você</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>
      </div>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  </div>
  );
}