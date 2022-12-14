const Aleatorio = (max) => {
    // Checking if max variable is null or false
    if (!max) {
        return false;
    }
    
    return Math.floor(Math.random() * max);
}

const MusicPlay = () => document.getElementById('music').play();

const AvisoClickNaTela = (gatilho) => {

    let boxClick = document.getElementById('box-click');
    if (!gatilho) { 
        boxClick.style.opacity = "0%";
        boxClick.style.zIndex = "-1";
        return;
    } 

    boxClick.style.opacity = "100%";
    boxClick.style.zIndex = "3";
}

const linksImgBack = [
    './src/back/football1',
    './src/back/neve_rosa.gif',
    './src/back/coracoes1.gif',
    './src/back/cafematica.gif',
    './src/back/poortugal.gif',
    './src/back/spain_flag.gif',
    './src/back/england_flag.gif',
    './src/back/95.gif',
    './src/back/catAscii.gif',
    './src/back/aimrain.gif',
    './src/back/argentina.gif',
    './src/back/aus.gif',
    './src/back/blinds.gif',
    './src/back/boxes.gif',
    './src/back/bunnies.gif',
    './src/back/cccp.gif',
    './src/back/china.gif',
    './src/back/colorbox.gif',
    './src/back/cube.gif',
    './src/back/cubes.gif',
    './src/back/drumstick.gif',
    './src/back/email.gif',
    './src/back/german.gif',
    './src/back/gif_cube.gif',
    './src/back/korea.gif',
    './src/back/link.gif',
    './src/back/mariocloud.gif',
    './src/back/MoneyNotesFlying.gif',
    './src/back/netscap.gif',
    './src/back/opart.gif',
    './src/back/pc.gif',
    './src/back/point.gif',
    './src/back/rats.gif',
    './src/back/risingsun.gif',
    './src/back/segway.gif',
    './src/back/squirm.gif',
    './src/back/taiwan.gif',
    './src/back/twist.gif',
    './src/back/uk.gif',
    './src/back/us_left.gif',
    './src/back/walker.gif',
    './src/back/wave.gif',
    './src/back/winflag.gif',
    './src/back/wolf.gif',
    './src/back/xp.gif',
]

const linksImgFore = [
    './src/fore/fore_football1.gif',
    './src/fore/wine-loading.gif',
    './src/fore/14_4.gif',
    './src/fore/40oz.gif',
    './src/fore/bike.gif',
    './src/fore/bird.gif',
    './src/fore/blackcat.gif',
    './src/fore/cat.gif',
    './src/fore/cd.gif',
    './src/fore/chill.gif',
    './src/fore/chip.gif',
    './src/fore/croak.gif',
    './src/fore/cyberpunk.gif',
    './src/fore/deer.gif',
    './src/fore/disc.gif',
    './src/fore/doge.gif',
    './src/fore/donut.gif',
    './src/fore/error.gif',
    './src/fore/finish.gif',
    './src/fore/flipphone.gif',
    './src/fore/float.gif',
    './src/fore/gucci.gif',
    './src/fore/jog.gif',
    './src/fore/key.gif',
    './src/fore/lap.gif',
    './src/fore/limewire.gif',
    './src/fore/miley.gif',
    './src/fore/n.gif',
    './src/fore/nacho.gif',
    './src/fore/newport.gif',
    './src/fore/palace.gif',
    './src/fore/penguin.gif',
    './src/fore/pepsi.gif',
    './src/fore/pills.gif',
    './src/fore/pop.gif',
    './src/fore/pow.gif',
    './src/fore/pyramid.gif',
    './src/fore/run.gif',
    './src/fore/sadweb.gif',
    './src/fore/shark.gif',
    './src/fore/sharkcube.gif',
    './src/fore/shiba.gif',
    './src/fore/sink.gif',
    './src/fore/sonywalk.gif',
    './src/fore/sperm.gif',
    './src/fore/stab.gif',
    './src/fore/swinger.gif',
    './src/fore/uzi.gif',
    './src/fore/vhs.gif',
    './src/fore/walkman.gif',
    './src/fore/wifi.gif',
    './src/fore/windowspaint.gif',
    './src/fore/wolfwalk.gif',
    './src/fore/wolfy.gif',
]

// AUTOR DAS FRASES: Tain?? Ariozi
// SITE: https://www.42frases.com.br/frases-curtas-e-engracadas/
const frases = [
    'Com o tempo eu aprendi o significado de amor ao pr??ximo. N??o me ama? Pr??ximo!',
    'J?? vi muito amor eterno acabar em poucos segundos.',
    'Disseram que era inferno astral mas j?? faz uns meses que minha vida t?? ruim.',
    'O melhor final feliz que existe ?? o final de semana.',
    'Se errar ?? humano, acertar deve ser coisa de extraterrestre.',
    'O amor est?? mesmo cego, pois n??o me v?? de jeito nenhum.',
    'Deus ajuda quem cedo ganha na loteria.',
    'N??o me jogue indiretas. Me jogue dinheiro.',
    'Se a vida estiver muito amarga, d?? uma rebolada. ??s vezes o a????car t?? no fundo.',
    'Larguei a cerveja, s?? n??o lembro onde!',
    'Se estiver entediado lave a lou??a, e se n??o estiver lave mesmo assim. Assinado, M??e.',
    'Sua mensagem foi recebida, visualizada e ignorada com sucesso.',
    'N??o acho nem a ponta do durex, imagine o amor da minha vida.',
    'Houve boatos de que eu estava na pior... Podem confirmar os boatos!',
    'O mundo d?? voltas. Isso explica tanta gente tonta!',
    'Adorei a indireta que voc?? me mandou. Vou at?? curtir pra te irritar mais',
    'S?? n??o namoro voc?? porque n??o sei se voc?? aguentaria tanta felicidade na sua vida.',
    'Eu n??o acordo de mau humor. S?? acordo com pregui??a de ser legal.',
    'Sabe aquele gelo que voc?? me deu? Fiz um iglu.',
    'Estado Civil: Curtindo carreira solo com participa????es especiais.',
    'Se a vida fosse f??cil, beb?? n??o nascia chorando.',
    'Procura-se um relacionamento engra??ado, porque s??rio eu estou desistindo!',
    'Diga-me com quem andas e eu direi se vou junto ou n??o.',
    'Depois da tempestade, vem a gripe.',
    'Tudo na vida passa, menos a vontade de ganhar dinheiro dormindo.',
    'Voc?? ca??a um milh??o de vagalumes pela pessoa, e ela n??o ca??a um mosquito por voc??.',
    'Muitas coisas s??o resolvidas com gentilezas, outras, com cafun?? e algumas s?? com bolo de chocolate.',
    'Antes de definir meu abd??men, eu tenho que definir a minha vida.',
    'O que seria da humanidade se n??o existisse o print?',
    'O melhor m??s do ano ?? aquele chamado f??rias!',
    'S?? saio de casa com a roupa amassada, porque a vida passa e a gente nem v??.',
    '"A vida ?? feita de escolhas". Engra??ado, eu escolhi ser rico e at?? agora nada!',
    'N??o tomo ju??zo porque j?? tomo vinho e n??o sou de misturar.',
]