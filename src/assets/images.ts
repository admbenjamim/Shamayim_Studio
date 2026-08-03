// src/assets/images.ts
//
// ==========================================================================
// COMO FUNCIONA
// ==========================================================================
// Há dois tipos de ficheiros aqui, dentro de "src/assets/images/":
//
// 1) OBRIGATÓRIOS — importados directamente. Se um destes faltar, o Vite
//    para com erro. Nomes exactos (extensão incluída):
//      logo_white_background_black.png
//      foto_hero1.jpg ... foto_hero6.jpg
//      cena1.png ... cena4.png
//      showreel_video.mp4
//      work_silencio_oceanico.jpg
//      work_a_presenca.jpg
//      work_tabernaculo_moderno.jpg
//      work_energia_vazia.jpg
//
// 2) OPCIONAIS — foto de "Sobre", vídeo de cada projeto, fotos de galeria
//    de cada projeto. Não dão erro se faltarem, e aceitam tanto .jpg como
//    .jpeg (algumas das tuas fotos de galeria estão em .jpeg — o código já
//    procura nas duas extensões automaticamente):
//      foto_sobre
//      video_silencio_oceanico.mp4 / video_a_presenca.mp4 /
//        video_tabernaculo_moderno.mp4 / video_energia_vazia.mp4
//      work_silencio_oceanico_galeria1 ... galeria4
//      work_a_presenca_galeria1 ... galeria4
//      work_tabernaculo_moderno_galeria1 ... galeria4
//      work_energia_vazia_galeria1 ... galeria4
// ==========================================================================

// --- Ficheiros obrigatórios (import directo) ---
import logo from './images/logo_white_background_black.png';

import fotoHero1 from './images/foto_hero1.jpg';
import fotoHero2 from './images/foto_hero2.jpg';
import fotoHero3 from './images/foto_hero3.jpg';
import fotoHero4 from './images/foto_hero4.jpg';
import fotoHero5 from './images/foto_hero5.jpg';
import fotoHero6 from './images/foto_hero6.jpg';

import cena1 from './images/cena1.png';
import cena2 from './images/cena2.png';
import cena3 from './images/cena3.png';
import cena4 from './images/cena4.png';

import showreelVideo from './images/showreel_video.mp4';

import workSilencioOceanico from './images/work_silencio_oceanico.jpg';
import workAPresenca from './images/work_a_presenca.jpg';
import workTabernaculoModerno from './images/work_tabernaculo_moderno.jpg';
import workEnergiaVazia from './images/work_energia_vazia.jpg';

// --- Ficheiros opcionais: procurados na pasta em tempo de build. ---
// Se o ficheiro não existir, fica "undefined" (sem erro nenhum).
const mediaOpcional = import.meta.glob('./images/*.{jpg,jpeg,png,mp4}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

// Procura uma imagem opcional testando .jpg, depois .jpeg, depois .png
function imagemOpcional(nomeSemExtensao: string): string | undefined {
  return (
    mediaOpcional[`./images/${nomeSemExtensao}.jpg`] ??
    mediaOpcional[`./images/${nomeSemExtensao}.jpeg`] ??
    mediaOpcional[`./images/${nomeSemExtensao}.png`]
  );
}

function videoOpcional(nomeSemExtensao: string): string | undefined {
  return mediaOpcional[`./images/${nomeSemExtensao}.mp4`];
}

export const LOGO = logo;

export const ABOUT_IMAGE = imagemOpcional('foto_sobre') ?? workSilencioOceanico;

export const HERO_GALLERY = [
  fotoHero1,
  fotoHero2,
  fotoHero3,
  fotoHero4,
  fotoHero5,
  fotoHero6,
];

export interface ProjectDetailData {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  client: string;
  year: string;
  role: string;
  duration: string;
  image: string;
  videoUrl?: string;
  overview: string;
  concept: string;
  challenge: string;
  solution: string;
  gallery: string[];
  results: { label: string; value: string }[];
}

// Junta o vídeo opcional + as 4 fotos de galeria opcionais de um projeto
function montarMediaDoProjeto(prefixo: string) {
  const galeria = [1, 2, 3, 4]
    .map((n) => imagemOpcional(`${prefixo}_galeria${n}`))
    .filter((src): src is string => Boolean(src));

  return {
    videoUrl: videoOpcional(`video_${prefixo}`),
    gallery: galeria,
  };
}

const mediaCelebracaoAtmosfera = montarMediaDoProjeto('silencio_oceanico');
const mediaAPresenca = montarMediaDoProjeto('a_presenca');
const mediaTabernaculoModerno = montarMediaDoProjeto('tabernaculo_moderno');
const mediaEnergiaVazia = montarMediaDoProjeto('energia_vazia');

export const PROJECTS_DATA: ProjectDetailData[] = [
  {
    id: "celebracao-atmosfera",
    title: "CELEBRAÇÃO ATMOSFERA",
    category: "CONCERTO / WORSHIP",
    subtitle: "Uma experiência audiovisual imersiva gravada ao vivo para a noite de celebração divina.",
    client: "Ministério Atmosfera Divina",
    year: "2024",
    role: "Direção Geral, Edição & Color Grading",
    duration: "4K Cinema / Live Experience",
    image: workSilencioOceanico,
    videoUrl: mediaCelebracaoAtmosfera.videoUrl,
    overview: "O projeto 'Celebração Atmosfera' foi concebido para capturar a essência da adoração ao vivo com iluminação dramática, enquadramentos de lente anamórfica e gradação de cor cinematográfica inspirada no alto padrão internacional.",
    concept: "Trazer a sensação de presença espiritual através da manipulação precisa de luz, sombra e dinamismo de câmara lenta nos momentos de clímax musical.",
    challenge: "Capturar 12 câmaras sincronizadas em ambiente com luzes estroboscópicas de altíssimo contraste mantendo tons de pele naturais e uma paleta dourada atemporal.",
    solution: "Desenvolvemos uma pipeline de pós-produção personalizada no DaVinci Resolve com LUTs proprietários criados pelo SHAMAYIM STUDIO para unificar todas as câmaras em um visual coerente de cinema.",
    gallery: mediaCelebracaoAtmosfera.gallery,
    results: [
      { label: "ALCANÇADOS", value: "+1.2M Visualizações" },
      { label: "QUALIDADE", value: "4K Master HDR" },
      { label: "SATISFAÇÃO", value: "100% Excelência" }
    ]
  },
  {
    id: "a-presenca",
    title: "A Presença",
    category: "IDENTIDADE DE MARCA",
    subtitle: "Construção de ecossistema visual minimalista para liderança espiritual e artística.",
    client: "Conferência A Presença",
    year: "2024",
    role: "Branding, Tipografia & Direção de Arte",
    duration: "Identidade Completa + Teasers",
    image: workAPresenca,
    videoUrl: mediaAPresenca.videoUrl,
    overview: "A Presença é um projeto de redefinição de marca visual que funde o sagrado e o contemporâneo em uma linguagem limpa, impactante e refinada.",
    concept: "Menos ruído visual, mais significado. Utilizando tipografia expressiva e paleta de cores monocráticas com toques de âmbar radiante.",
    challenge: "Criar uma identidade visual que ressoasse tanto com a comunidade jovem quanto com públicos institucionais mais conservadores.",
    solution: "Criamos um sistema modular flexível com regras de contraste tipográfico e motion design elegante para redes sociais, outdoors digitais e vinhetas de abertura.",
    gallery: mediaAPresenca.gallery,
    results: [
      { label: "PRESENÇA DIGITAL", value: "300% Crescimento" },
      { label: "ASSETS ENTREGUES", value: "45+ Peças" },
      { label: "IMPACTO", value: "Reconhecimento Global" }
    ]
  },
  {
    id: "tabernaculo-moderno",
    title: "Tabernáculo Moderno",
    category: "VISUAIS MINIMALISTAS",
    subtitle: "Cenografia virtual e motion graphics para palcos e exibições imersivas de grande escala.",
    client: "Tabernáculo Movimento",
    year: "2024",
    role: "3D Motion Design & Visuals de Palco",
    duration: "Loops 8K / Mapeamento LED",
    image: workTabernaculoModerno,
    videoUrl: mediaTabernaculoModerno.videoUrl,
    overview: "Projeto de conteúdos de vídeo imersivo desenvolvidos para telas gigantes de LED e projeções mapeadas, transformando espaços em ambientes de profunda reflexão.",
    concept: "Geometria sacra combinada com elementos da natureza em câmara lenta, simbolizando a união entre o terreno e o celestial.",
    challenge: "Produzir renders pesados em altíssima resolução sem perda de detalhes em ambientes de iluminação ao vivo variáveis.",
    solution: "Desenvolvimento de shaders arquitetónicos modernos e loops perfeitos otimizados para servidores de mídia de alta performance.",
    gallery: mediaTabernaculoModerno.gallery,
    results: [
      { label: "PAINÉIS LED", value: "Telas de 20 metros" },
      { label: "RESOLUÇÃO", value: "Render 8K Nativo" },
      { label: "AUDIÊNCIA", value: "10.000+ Presentes" }
    ]
  },
  {
    id: "energia-vazia",
    title: "Energia Vazia",
    category: "EDIÇÃO / PÓS",
    subtitle: "Curta cinematográfico e videoclipe conceitual com ritmos dinâmicos e montagem de elite.",
    client: "Selo Artístico Elite",
    year: "2024",
    role: "Pós-Produção, Sound Design & VFX",
    duration: "4K Master Sound",
    image: workEnergiaVazia,
    videoUrl: mediaEnergiaVazia.videoUrl,
    overview: "Uma exploração visual audaciosa sobre contraste de emoções através de transições imperceptíveis e desenho de som atmosférico.",
    concept: "Criar uma cadência rítmica rápida acompanhada por momentos de silêncio absoluto para maximizar a carga emocional da mensagem.",
    challenge: "Harmonizar material gravado em diferentes locações e iluminações com tonalidade consistente e polida.",
    solution: "Processamento cromático refinado e efeitos de transição artesanais em combinação com sound design surround.",
    gallery: mediaEnergiaVazia.gallery,
    results: [
      { label: "PREMIAÇÕES", value: "Seleção Oficial" },
      { label: "RECURSOS", value: "Dolby Atmos Audio" },
      { label: "PADRÃO", value: "Cinema Internacional" }
    ]
  }
];

export const WORKS = {
  silencioOceanico: PROJECTS_DATA[0].image,
  aPresenca: PROJECTS_DATA[1].image,
  tabernaculoModerno: PROJECTS_DATA[2].image,
  energiaVazia: PROJECTS_DATA[3].image,
};

export const SHOWREEL = {
  video: showreelVideo,
  scenes: [
    cena1,
    cena2,
    cena3,
    cena4,
  ],
};
