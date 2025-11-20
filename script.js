// Dados das redações: títulos, resumo curto, texto completo e caminho de imagem
const essays = [
   {
    id: 1,
    title: 'POR QUE OS PROCEDIMENTOS ESTÉTICOS ESTÃO AUMENTANDO ENTRE OS JOVENS?',
    summary: 'O aumento da busca por procedimentos estéticos entre jovens cresce devido à pressão das redes sociais e à baixa autoestima, causando riscos à saúde e reforçando a necessidade de valorização da beleza natural.',
    image: 'img/estetica.png',
    full: `A buscar pela perfeição entre os jovens cresce ainda mais nos dias atuais pois, a comparação com outras pessoas, principalmente no meio da internet como as redes sociais, onde é imposto um "padrão de beleza ideal". Deixando com quem os jovens busquem mudar até o que e não é realmente necessário.
Tendo então, o aumento na buscar para realizar procedimentos estéticos entre grande parte dos jovens. Muitas vezes os responsáveis por esse aumento são propagandas falsas, postagens feitas por influenciadores digitais, preconceitos e bullying dentro de ambiente de trabalho e escolar, causando então baixa estima e frustrações entre grande parte dos jovens.
Resultando também no aumento de oportunidades de emprego na área da saúde e estética tem um aumento significativo, sendo um ponto positivo até então. Pois, nem todos que dizem ser "profissionais" de confiança realmente são. Isso trás casos graves, como as complicações cirúrgicas, resultados insatisfatórios e até problemas psicológicos entre jovens.
Com tudo, e necessários promover companhias, propagandas, palestras e aulas práticas sobre valorização da beleza natural e a autoestima, principalmente nos ambientes de escolares e de trabalho. Realizando então a quebra de padrões imposta pela sociedade.                                                                                                                  :             `
  },
  {
    id: 2,
    title: 'ACESSIBILIDADE E INCLUSÃO DE PESSOAS COM DEFICIÊNCIA NO BRASIL',
    summary: 'A inclusão de pessoas com deficiência ainda enfrenta barreiras estruturais e preconceito, mostrando que leis não bastam sem conscientização, acessibilidade e mudanças culturais reais.',
    image: 'img/ACESSIBILIDADE.jpg',
    full: `A inclusão de pessoas com deficiência na sociedade é um assunto complexo, mas ainda assim muito importante de ser tratado. A busca por igualdade no Brasil é algo decorrente, mesmo com as leis assegurando o direitos fundamentais, as pessoas com deficiência ainda sofrem desafios estruturais e sociais.
Com isso, o número de pessoas com deficiência no mercado de trabalho e nos ambientes escolares chega a ser muito baixo comparado com as pessoas sem deficiência, essa diferença e causada tanto pela falta de estrutura adequada para receber essas pessoas quanto pelo preconceito estrutural feito nesses ambientes ou até mesmo fora dele.
O preconceito estrutural capacitismo, reforça que as pessoas com deficiência são "inferiores" as outras pessoas e "incapazes" de realizar atividades cotidianas. Muitas empresas só contratam pessoas com deficiência para cumprir cotas obrigatórias, sem nem sequer ter ambientes acessíveis de trabalho. No livro "Vigiar e Punir" de Michel Foucault - aborda coerentemente como a sociedade estabelece padrões e exclui aqueles que não se encaixam, incluindo pessoas com deficiência.
Diante desses cenários, a forma de acabar com exclusão de pessoas com deficiência seria, promovendo campanhas de conscientização, educação inclusiva para todos e infraestrutura adequada dentro das escolas e nos locais de trabalho, garantindo então que todos tenham oportunidade iguais. Dessa forma, a inclusão e acessibilidade precisa ir além de leis obrigatórias, e sim fazer parte da cultura organizacional do país.`
  },
  {
    id: 3,
    title: 'PRINCIPAIS FATORES QUE INFLUENCIAM NA QUALIDADE DE VIDA E NO BEM-ESTAR DA POPULAÇÃO',
    summary: 'A qualidade de vida depende de cuidados físicos, emocionais e ambientais, exigindo hábitos saudáveis e boas condições sociais para garantir saúde e bem-estar.', 
    image: 'images/PRINCIPAIS_FATORES.jpg',
    full: `A saúde e o bem-estar são muito importantes na vida das pessoas, porque sem eles não conseguimos ter uma boa qualidade de vida. Não é só não ficar doente, mas também se sentir bem fisicamente e mentalmente.
Para isso, é preciso ter alguns cuidados. Uma boa alimentação faz diferença, porque dá energia e ajuda a prevenir doenças. Também é importante praticar exercícios, já que eles deixam o corpo mais forte e dão mais disposição no dia a dia.
Outro ponto é cuidar da mente. Muitas vezes as pessoas ficam estressadas ou tristes, e isso também prejudica a saúde.
Por isso, ter momentos de lazer, conviver com amigos e família e descansar bem são coisas que ajudam bastante. Além disso, o lugar onde a gente vive influencia. Ter acesso a água limpa, médicos, escola e um ambiente saudável faz toda a diferença para a vida de qualquer pessoa.
Em resumo, saúde e bem-estar dependem de vários fatores juntos. Cada um pode fazer sua parte cuidando de si mesmo, mas também é importante que a sociedade ofereça boas condições para todo mundo viver melhor.`
  },
  {
    id: 4,
    title: 'AS MUDANÇAS CLIMÁTICAS NO BRASIL E SEUS DESAFIOS',
    summary: 'As mudanças climáticas intensificam fenômenos extremos e ampliam desigualdades no Brasil, exigindo ações sustentáveis, educação ambiental e políticas públicas eficazes.',
    image: 'img/mudancas_climaticas.jpg',
    full: `As mudanças climáticas estão cada vez visíveis no dia a dia, junto vem os desafios que acabam afetando o meio ambiente e a vida das pessoas. No Brasil, essas mudanças se tornando um problema, pois é um país que depende muito dos recursos naturais.
Um dos principais desafios é os fenômenos naturais, porém extremos, como enchentes, secas e as fortes ondas de calor. Esses fenômenos prejudicam a agricultura, aumentam o risco de desastres e também afetam a saúde da população. Além disso, a poluição e o desmatamento contribuem para essa situação.
Visto isso, a desigualdade social também entra nessa situação, pois, faz com que as comunidades mais pobres sofram com os impactos climáticos, já que em vários lugares não têm infraestrutura ou recursos suficientes para proteger as pessoas nessas comunidades.
Portanto, tudo isso mostra que os problemas não são só climáticos mas também econômicos e sociais. O governo precisa investir em soluções para acabar com esse desafios, como energias renováveis, educação ambiental, etc. Enfrentar as mudanças climáticas é um desafio, mas só com a conscientização e apoio de todos é possível superar os desafios.`
  },
  {
    id: 5,
    title: 'AS CONSEQUÊNCIAS DO DESCARTE DE LIXO ELETRÔNICO',
    summary: 'O descarte incorreto de lixo eletrônico agrava a poluição e prejudica a saúde humana, tornando urgente a conscientização e práticas adequadas de coleta e reciclagem.',
    image: 'img/AS_CONSEQUENCIAS_DO_DESCARTE_DE_LIXO_ELETRONICO.jpg',
    full: `O descarte incorreto de lixos eletrônicos podem ser muito prejudicial para meio ambiente e para a saúde dos seres humanos. O aquecimento global está entre umas das consequências, esse problema pode estar relacionado com o aumento e o avanço da tecnologia. Para evitar esses impactos é preciso adotar práticas de consumo consciente.
Nesse sentido, os lixos eletrônicos e a queima deles podem contaminar a água e o solo, podendo também gerar doenças, como, afetar a saúde do pulmão, provocar asma, irritação nos olhos, etc. Levando em conta também, o tempo estimado para a decomposição dos materiais eletrônicos, que são em média de 100 a 500 anos. Tempo suficiente para causar os impactos ambiental e aumentar a poluição.
Com o aumento da tecnologia e alto consumo de aparelhos eletrônicos, influenciou muito no aumento significativo desses lixos eletrônicos, fazendo com que o aquecimento global cresça ainda mais, e com isso os impactos a saúde venha junto.
Com tudo, é necessário promover campanhas eficazes para a conscientização do
descarte de materiais eletrônicos, uma forma de combater ou diminuir esses descarte incorreto
seria implantar carros de coleta para esses tipo específico de lixo, assim seria uma forma acessível
e prática para todos.`
  },
  {
    id: 6,
    title: 'O CONSUMO DE ULTRAPROCESSADOS E SUAS CONSEQUÊNCIAS À SAÚDE',
    summary: 'O consumo excessivo de ultraprocessados prejudica a saúde e substitui alimentos naturais, tornando essencial repensar hábitos alimentares e priorizar escolhas mais saudáveis.',
    image: 'img/O_CONSUMO_DE_ULTRAPROCESSADOS_E_SUAS_CONSEQUENCIAS_A_SAUDE.jpg',
    full: `Nos dias de hoje, o consumo de alimentos ultraprocessados tem aumentado bastante, principalmente entre os jovens. Isso acontece porque esses produtos, como refrigerantes, salgadinhos, biscoitos recheados e fastfood, são fáceis de encontrar, práticos e muitas vezes mais baratos do que alimentos naturais. Porém, apesar de parecerem vantajosos, eles trazem grandes riscos para a saúde.
Os ultraprocessados possuem excesso de açúcar, sal, gorduras ruins e conservantes. O
consumo frequente desses produtos pode causar problemas sérios, como obesidade, diabetes, hipertensão e doenças do coração. Além disso, muitas vezes eles substituem frutas, verduras e alimentos frescos, que são essenciais para uma boa alimentação e para fortalecer o coгрo.
Outro ponto importante é que esses alimentos são muito divulgados pela mídia, com
propagandas que chamam a atenção das crianças e adolescentes. Isso acaba incentivando ainda mais o consumo, fazendo com que as pessoas prefiram algo industrializado ao invés de opções mais saudáveis.
Portanto, é fundamental que cada pessoa repense seus hábitos alimentares. Escolher alimentos naturais, como frutas, legumes, cereais e carnes magras, pode melhorar a qualidade de vida e evitar doenças no futuro. O consumo de ultraprocessados deve ser feito com moderação, pois a saúde é o bem mais importante que temos.`
  },
  {
    id: 7,
    title: 'FATORES E EFEITOS DA DEPENDÊNCIA EM JOGOS DE APOSTAS NA WEB',
    summary: 'Os jogos de aposta online atraem jovens e podem causar vício, levando a dívidas e problemas emocionais, o que torna necessária a conscientização sobre seus riscos.',
    image: 'img/jogos_de_apostas.jpg',
    full: `Com o crescimento da internet, os jogos de aposta online se tornaram muito populares, atraindo principalmente jovens que buscam diversão ou dinheiro rápido. Apesar de parecerem inofensivos, esses jogos podem levar à dependência, trazendo sérias consequências para a vida dos jogadores.
Entre os fatores que levam ao vício estão a facilidade de acesso, já que basta um celular para jogar, e as propagandas chamativas que prometem lucros fáceis. Além disso, a emoção de apostar e a esperança de recuperar o dinheiro perdido fazem com que a pessoa volte a jogar repetidamente.
Os efeitos dessa dependência são preocupantes. Muitas pessoas acabam se endividando, prejudicando sua vida financeira. Também surgem problemas emocionais, como ansiedade e estresse, além de conflitos familiares causados pelo comportamento compulsivo.
Portanto, é essencial conscientizar a população, principalmente os jovens, sobre os riscos dos jogos de aposta na web. Campanhas educativas e orientações nas escolas podem ajudar a evitar que o lazer se transforme em vício e traga prejuízos para a vida social e pessoal.`
  },
  {
    id: 8,
    title: 'A IMPORTÂNCIA DO TRABALHO VOLUNTÁRIO NO COMBATE ÀS DESIGUALDADES SOCIAIS',
    summary: 'O trabalho voluntário reduz desigualdades e fortalece valores de solidariedade, mostrando que pequenas ações podem transformar vidas e comunidades.',
    image: 'img/voluntariado.jpg',
    full: `O trabalho voluntário é uma forma de solidariedade que tem grande importância na luta contra as desigualdades sociais. Muitas pessoas vivem em situações de vulnerabilidade, sem acesso adequado à educação, saúde, alimentação e moradia. Nesse cenário, o voluntariado se torna um meio de apoio e transformação.
Por meio de ações voluntárias, como doações, reforço escolar, atendimento comunitário e projetos sociais, é possível oferecer oportunidades a quem mais precisa. Essas atitudes ajudam a reduzir diferenças e a promover inclusão, mostrando que pequenas ações podem gerar grandes impactos.
Além disso, o trabalho voluntário desperta no voluntário valores como empatia, cidadania e responsabilidade social. Ele aprende a olhar para o outro com mais respeito e compreensão, fortalecendo os laços de solidariedade na sociedade.
Portanto, o voluntariado é fundamental no combate às desigualdades sociais, pois promove justiça, solidariedade e esperança. Quando cada pessoa contribui de alguma forma, é possível construir uma sociedade mais justa e igualitária`
  },
  {
    id: 9,
    title: 'ADULTIZAÇÃO INFANTIL – CONSEQUÊNCIAS DA PERDA IRREPARÁVEL DA INFÂNCIA',
    summary: 'A adultização infantil faz crianças pularem fases importantes por influência da mídia, prejudicando o desenvolvimento emocional e reforçando a necessidade de proteger a infância.',
    image: 'img/adultizacao.jpg',
    full: `A infância é uma fase muito importante da vida, pois é o momento de brincar, aprender e descobrir o mundo. Porém, muitas crianças hoje em dia estão perdendo essa fase por querer agir como adultos. Esse comportamento é chamado de adultização infantil.
Isso acontece porque as crianças estão cada vez mais expostas à internet, às redes sociais e até a programas de TV que mostram estilos de vida adultos. Muitas vezes, elas querem copiar o que veem, seja nas roupas, nas atitudes ou no modo de falar.
O problema é que essa pressa para crescer traz consequências ruins. A criança pode ficar mais ansiosa, triste e acabar deixando de viver experiências próprias da idade, como brincar e se divertir com outras crianças.
Por isso, é importante que pais, professores e a sociedade em geral ajudem a proteger a infância. Deixar as crianças viverem essa fase sem pressa é essencial para que cresçam felizes, seguras e com uma boa formação emocional.`
  },
  {
    id: 10,
    title: 'CAMINHOS PARA COMBATER O ETARISMO NAS RELAÇÕES SOCIAIS',
    summary: 'O etarismo desvaloriza pessoas pela idade e prejudica a convivência, sendo essencial promover respeito, diálogo e igualdade entre gerações.',
    image: 'img/etarismo.jpg',
    full: `O etarismo é o preconceito baseado na idade, que afeta tanto jovens quanto idosos. Ele aparece em atitudes que desvalorizam a capacidade das pessoas por serem muito novas ou muito velhas, prejudicando o respeito e a convivência entre as gerações.
Esse tipo de discriminação pode ser visto em diferentes lugares, como no ambiente de trabalho, nas escolas e até dentro das famílias. Idosos são muitas vezes considerados incapazes, enquanto jovens têm suas opiniões ignoradas, o que impede uma convivência saudável e justa.
Para combater o etarismo, é importante incentivar o diálogo e a empatia entre pessoas de diferentes idades. A educação e as campanhas de conscientização também ajudam a mostrar que todos têm algo a ensinar e aprender, independentemente da idade.
Portanto, o caminho para vencer o etarismo é valorizar cada fase da vida e construir relações sociais baseadas no respeito, na inclusão e na igualdade. Só assim será possível viver em uma sociedade mais justa e humana.`
  },
  {
    id: 11,
    title: 'A IMPORTÂNCIA DA EDUCAÇÃO FINANCEIRA PARA OS JOVENS',
    summary: 'A educação financeira ajuda jovens a evitar dívidas e planejar o futuro, reforçando a importância de ensinar hábitos de consumo consciente desde cedo.',
    image: 'img/educacao_financeira.jpg',
    full: `A educação financeira é um tema essencial nos dias atuais, especialmente para os jovens que estão começando a lidar com dinheiro. Saber administrar gastos, economizar e planejar o futuro é uma forma de garantir mais segurança e equilíbrio na vida adulta. No entanto, esse assunto ainda é pouco discutido nas escolas e entre as famílias.
Muitos jovens acabam gastando seu dinheiro de forma impulsiva, sem pensar nas consequências. O consumo exagerado e o uso fácil de crédito podem gerar dívidas e dificuldades no futuro. Por isso, é importante que desde cedo se aprenda a ter responsabilidade com o dinheiro, entendendo a diferença entre necessidade e desejo.
A escola tem papel fundamental nesse processo, pois pode ensinar noções básicas de economia, orçamento e planejamento financeiro. Além disso, a família também deve incentivar hábitos saudáveis, como guardar parte da mesada ou buscar formas conscientes de consumo.
Portanto, a educação financeira é essencial para formar cidadãos mais responsáveis e preparados para o futuro. Quando o jovem aprende a lidar bem com o dinheiro, ele tem mais chances de alcançar estabilidade e realizar seus sonhos de forma planejada.`
  },
  {
    id: 12,
    title: 'DESAFIOS PARA A VALORIZAÇÃO DA CULTURA POPULAR BRASILEIRA',
    summary: 'A educação financeira ajuda jovens a evitar dívidas e planejar o futuro, reforçando a importância de ensinar hábitos de consumo consciente desde cedo.',
    image: 'img/DESAFIOS_PARA_A_VALORIZACAO_DA_CULTURA_POPULAR_BRASILEIRA.jpg',
    full: `A cultura popular brasileira vai além das tradições e costumes que formam a identidade do nosso povo. Ela está presente em músicas, danças, festas e artes que mostram a diversidade do país. Cada parte ou região do Brasil tem suas próprias manifestações, o que torna nossa cultura ainda mais importante.
Alguns dos desafios da desvalorização é o preconceito e a falta de interesse, especialmente entre os jovens, que muitas vezes preferem costumes estrangeiros. Isso faz com que as tradições brasileiras sejam esquecidas e deixada de lado. É importante mostrar que a cultura nacional também pode ser moderna e inspiradora.
Outro grande problema é a falta de apoio do governo e da mídia, que não dão o espaço necessário para os artistas populares e falta também de oportunidades para muitos "artistas" mostrarem seus talentos. Com isso entra alguns fatores necessários para esse problema, como projetos em escolas ou comunidades para mostrar os talentos e buscar oportunidade para as pessoas.
Com tudo, é mais que necessário valorizar a cultura popular é ter orgulho das nossas raízes e reconhecer a importância das tradições que herdamos. É importante manter sempre vivas as festas, músicas e costumes que fazem parte da nossa história. Assim, garantimos que a identidade brasileira continue forte, respeitada e jamais esquecida.`
  },
  {
    id: 13,
    title: 'CAMINHOS PARA A UNIVERSALIZAÇÃO DO SANEAMENTO BÁSICO NO BRASIL',
    summary: 'A falta de saneamento básico no Brasil gera doenças e desigualdade, e só será superada com investimentos, fiscalização e educação ambiental.',
    image: 'img/saneamento_basico.jpg',
    full: `O saneamento básico é essencial para garantir saúde e qualidade de vida à população.
No entanto, no Brasil, milhões de pessoas ainda vivem sem acesso à água tratada e à coleta de esgoto. Essa falta de estrutura causa doenças e poluição, principalmente nas áreas mais pobres, mostrando que ainda há muito a ser feito para mudar essa realidade.
Um dos principais caminhos para melhorar essa situação é o investimento público e
privado em obras de infraestrutura. O governo precisa destinar mais recursos para ampliar o acesso ao saneamento, especialmente nas regiões mais afastadas e nas comunidades carentes.
Além disso, é importante fiscalizar o uso correto do dinheiro, evitando desperdícios e corrupção.
Outro ponto essencial é a conscientização da população. Muitas pessoas ainda não entendem a importância do saneamento para a saúde e para o meio ambiente. Campanhas educativas nas escolas e nas comunidades podem ajudar a mudar hábitos, como jogar lixo nas ruas e desperdiçar água.
Portanto, para alcançar a universalização do saneamento básico no Brasil, é preciso unir investimentos, políticas públicas e educação ambiental. Mas só é possível com a contribuição de todos (governo, empresas e os próprios cidadãos), então assim será possível garantir um futuro mais limpo, saudável e digno para toda a população.`
  },
  {
    id: 14,
    title: 'O PAPEL DO ESPORTE COMO FERRAMENTA DE TRANSFORMAÇÃO SOCIAL',
    summary:'O esporte transforma realidades ao promover inclusão, disciplina e oportunidades, sendo essencial em projetos sociais que fortalecem comunidades e jovens.',
    full: `O esporte, presente no dia a dia de muitos jovens, vai além da atividade física. Ele cria espaços de convivência positiva e se torna uma alternativa importante diante da violência e das desigualdades, especialmente em comunidades vulneráveis.
Além dos benefícios para o corpo e a mente, o esporte desenvolve valores como
disciplina, respeito e trabalho em equipe. Em projetos sociais, essas práticas ajudam jovens a
descobrir talentos, fortalecer a autoestima e enxergar novas possibilidades de futuro.
As iniciativas esportivas também aproximam pessoas e fortalecem o sentido de
comunidade. Quadras e centros esportivos funcionam como lugares de encontro, onde diferentes grupos convivem e aprendem a respeitar as diferenças. Além disso, o esporte afasta muitos jovens de situações de risco ao ocupar o tempo com atividades educativas. Com isso, ele se torna uma alternativa segura que estimula responsabilidade e foco nos estudos.
Por isso, o esporte deve ser visto como um instrumento importante para transformar realidades. Investir em projetos e políticas públicas esportivas significa promover inclusão, cidadania e oportunidades que podem mudar a vida de muitos.`
  },
  {
    id: 15,
    title: 'Crônica',
    summary:'A procrastinação faz com que promessas pessoais sejam adiadas, mostrando que pequenos esforços diários já representam um começo rumo às mudanças desejadas.',
    full: `Sempre falo que amanhã eu começo. Amanhã eu estudo, treino, respondo as mensagens e coloco minha vida em ordem. Mas o amanhã chega, e eu continuo enrolando do mesmo jeito. Acho que todo mundo tem um pouco disso. A gente promete mil coisas pra si mesmo, mas quando chega a hora, aparece o cansaço, a preguiça ou simplesmente a vontade de deixar pra depois. É mais fácil planejar do que agir, e a gente sempre acha que vai ter tempo de sobra. No fundo, não é a falta de vontade, e sim a rotina cansativa, e às vezes a gente precisa respirar antes de tentar de novo. Mesmo assim, continuo acreditando que um dia vou cumprir todas essas promessas — talvez não amanhã, mas em algum dia que eu finalmente leve a sério o que digo pra mim mesma.
Enquanto isso, sigo prometendo e tentando, porque no fundo, mesmo sem perceber, cada tentativa já é um pequeno começo.`
  }
];

// Render os cards na página
const container = document.getElementById('cards');
essays.forEach(e => {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <h2>${e.title}</h2>
    <p class="summary">${e.summary}</p>
    <div class="meta">
      <div style="display:flex;gap:8px;align-items:center">
        <div class="icon" aria-hidden>📄</div>
        <div style="color:var(--muted);font-size:13px">Redação ${e.id}</div>
      </div>
      <div class="actions">
        <button class="btn" data-id="${e.id}" title="Abrir redação">Abrir</button>
        <button class="btn" data-id-print="${e.id}" title="Baixar texto">Baixar</button>
      </div>
    </div>
  `;
  container.appendChild(card);
});

// Controles do modal
const overlay = document.getElementById('overlay');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.getElementById('closeBtn');

function openModal(id) {
  const item = essays.find(x => x.id === Number(id));
  if (!item) return;
  modalTitle.textContent = item.title;
  modalContent.innerHTML = '';

  // imagem
  const img = document.createElement('img');
  img.src = item.image;
  img.alt = item.title + ' — imagem representativa';
  modalContent.appendChild(img);

  // texto completo, respeitando parágrafos
  item.full.split('\n\n').forEach(p => {
    const pNode = document.createElement('p');
    pNode.textContent = p.trim();
    modalContent.appendChild(pNode);
  });

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  closeBtn.focus();
}

function closeModal() {
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
}

// Eventos de clique
document.addEventListener('click', ev => {
  const open = ev.target.closest('[data-id]');
  if (open) {
    openModal(open.getAttribute('data-id'));
    return;
  }

  const down = ev.target.closest('[data-id-print]');
  if (down) {
    const id = down.getAttribute('data-id-print');
    const item = essays.find(x => x.id === Number(id));
    if (item) {
      const blob = new Blob([item.title + "\n\n" + item.full], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = item.title.replace(/[^a-z0-9\-]/gi, '_') + '.txt';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    }
    return;
  }

  if (ev.target === overlay || ev.target === closeBtn) {
    closeModal();
  }
});

// Suporte ao teclado
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
