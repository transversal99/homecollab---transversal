import React from 'react'
import Footer from '../Components/Footer'
import HeaderLogin from '../Components/HeaderLogin'
import styled from 'styled-components'
// import '../styles/css/reset.css'
import '../styles/css/style.css'
import Productivité from '../Assets/img/productivité.png'
import Carlson from '../Assets/img/Article-Loi-de-Carlson.png'
import Illich from '../Assets/img/illich.png'
import Decroi from '../Assets/img/decroi.png'

function firstarticles() {
    return (
        <>
            <HeaderLogin />
            <Container>
                <h1>Productivité : 5 lois à connaître pour être plus efficace au travail </h1>
                <div class="partie1">
                    <div class="partie1_image">
                        <img src={Productivité} alt="productivité" />
                    </div>
                    <div class="partie_txt">
                        <p>Très connue, cette loi stipule que s’il est possible que quelque chose tourne mal, cela tournera forcément mal. Autrement dit, il faut toujours s’attendre au pire.</p> 
                        <blockquote> 
                            <p>« Tout ce qui peut mal tourner va mal tourner »</p> 
                        </blockquote>
                        <p>Pour l’éviter il n’y a pas de solution miracle, il faut simplement envisager que cela puisse mal tourner et prendre des mesures préventives en conséquence : c’est l’anticipation qui est la clé. Il faut réussir à envisager une parade au pire scénario possible, pour être capable de le parer rapidement s’il se produit.</p>
                    </div>
                </div>
                <div class="partie2">
                    <blockquote>« 80% des effets sont le produit de 20% des causes »</blockquote>
                    <p>Dans beaucoup de domaines, 80% des résultats obtenus découlent de seulement 20% du travail fourni. En d’autres termes, une majeure partie des efforts ne donne qu’une mineure partie des résultats. </p>
                    <p>Il est important de réussir à identifier ces 20% qui fonctionnent vraiment, pour s’y investir le plus possible et augmenter la productivité. Cela permet aussi de réduire le temps passé à de tâches moins importantes.</p>
                </div>
                <div class="partie3">
                    <div class="partie_txt">
                        <blockquote>« Un travail réalisé en continu prend moins de temps et d’énergie que lorsqu’il est réalisé en plusieurs fois »</blockquote> 
                        <p>Un travail réalisé d’une seule traite sera plus vite réalisé qu’un travail découpé dans le temps. Les interruptions nuisent à la productivité et font durer des travaux qui pourraient être plus rapidement terminés. L’idéal pour éviter de perdre du temps en réalisant un travail est de s’isoler, et de ne pas s’autoriser de distraction, avant que ce dernier soit entièrement terminé. Mais cette loi doit être contrebalancée par celle d’Illich : dans certains cas, des pauses permettent aussi d’éviter l’accumulation de la fatigue.</p> 
                    </div>
                    <div class="partie_image">
                        <img src={Carlson} alt="loi_de_carlson" />
                    </div>
                </div>
                <div class="partie4">
                    <div class="partie_image">
                        <img src={Illich} alt="loi_de_illich" />
                    </div>
                    <div class="partie_txt">
                        <blockquote>« Après un certain temps, la productivité tend à décroitre, voire atteindre des valeurs négatives »</blockquote> 
                        <p>La fatigue et le travail en continu altèrent notre concentration, et nous rendent moins productif si l’on ne se repose pas suffisamment. Autrement dit notre productivité diminue au fur et à mesure que l’on travaille. La fatigue peut nous amener à faire des erreurs, qui feront potentiellement perdre du temps au projet. Pour rester productif sur la durée, il est important de faire des pauses régulières, et d’effectuer notre tâche la plus importante en début de journée, pour être efficace. Les pauses doivent toutefois être utiles, et il ne faut pas en abuser.</p>
                    </div>
                </div>
                <div class="partie5">
                    <img src={Decroi} alt="productivite2" />
                    <blockquote>« Après un certain temps, la productivité tend à décroitre, voire atteindre des valeurs négatives »</blockquote>
                    <p>Cette loi indique que nous cherchons prioritairement à réaliser les tâches que nous aimons, car elles nous procurent une satisfaction rapide, voire immédiate. Pour lutter contre ce phénomène, il faut plutôt s’atteler aux tâches difficiles en début de journée, lorsque notre concentration est au maximum. On évitera ainsi de délaisser les tâches que l’on apprécie moins. </p>
                </div>
            </Container>
            <Footer />
        </>
    )
}
const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin-left: 200px;
margin-right: 200px;
`
export default firstarticles
