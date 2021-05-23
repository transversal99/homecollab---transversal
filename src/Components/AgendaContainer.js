import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form';
import styled from 'styled-components'
import AgendaLogoActive from '../Assets/Groupe 48Active.png'
import QuestionnaireLogo from '../Assets/Groupe 49Off.png'
import AgendaLogo from '../Assets/Groupe 48Off.png'
import QuestionnaireLogoActive from '../Assets/Groupe 49Active.png'
import Questionnaire from './Questionnaire'
import AgendaCtrl from '../Components/AgendaCtrl'

function AgendaContainer() {
    const [tasks, setTasks] = useState([])
    const [popup, setPopup] = useState(false)
    let storedMail = localStorage.getItem("mail")
    useEffect(() => {
        if(localStorage.getItem("mail") !== null){
            fetch(`http://localhost:9000/users/email/${storedMail}`).then((data) => data.json())
            .then((user) => {
                let id = user.data
                fetch(`http://localhost:9000/tasks/user/${id}`).then((data) => data.json())
                .then((response => setTasks(response.data)))
            })
            .catch(error => {
                console.error("Error fetching data : ", error)
            })
        }
    }, [storedMail])
    const [boxSelected, setBoxSelected] = useState(false)
    let handleSelection = (value) => {
        setBoxSelected(value)
    }
    const {
        register,
        handleSubmit,
      } = useForm();
    const onSubmit = (data) =>{
        setPopup(false)
        let start = `${data.date}T${data.start}:00.000Z`
        let end = `${data.date}T${data.end}:00.000Z`
        fetch(`http://localhost:9000/users/email/${storedMail}`).then((data) => data.json())
        .then((user) => {
            let id = user.data
            fetch(`http://localhost:9000/tasks`, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded',
                  },
                body: `title=${data.name}&start=${start}&end=${end}&color=${data.color}&userId=${id}`
            }).then((data) => data.json())
            .then((response => setTasks([...tasks, response.data])))
        })
        .catch(error => {
            console.error("Error fetching data : ", error)
        })
    }
    return (
        <Container>
            {popup === true && <Overlay />}
            <Top>
                <ButtonF className={!boxSelected ? "active_bg" : ""} onClick={() => boxSelected !== false && handleSelection(false)}><Item src={!boxSelected ? AgendaLogoActive : AgendaLogo}/>Agenda</ButtonF>
                <ButtonS className={boxSelected ? "active_bg" : ""} onClick={() => boxSelected !== true &&handleSelection(true)}><Item src={boxSelected ? QuestionnaireLogoActive : QuestionnaireLogo}/>Questionnaire</ButtonS>
            </Top>
            {boxSelected === true && <Questionnaire />}
            {boxSelected === false && 
            <Agenda>
                <AgendaCtrl Tasks={tasks} setPopup={setPopup}/>
                {popup === true && 
                    <PopUpForm onSubmit={handleSubmit(onSubmit)} id="haha">
                        <SubContainer>
                            <Title>Ajoutez une nouvelle tâche à votre Agenda de la semaine</Title>
                            <Divide>
                                <Div>
                                    <Input placeholder="Jour" type="date" {...register('date', { required: true })} />
                                    <Span>de</Span> 
                                    <Input placeholder="00:00" type="time" {...register('start', { required: true })} />
                                    <Span>à</Span>
                                    <Input placeholder="00:00" type="time" {...register('end', { required: true })} />
                                    <Select {...register('color', { required: true })}>
                                        <option value="blue">Bleu</option>
                                        <option value="green">Vert</option>
                                        <option value="violet">Violet</option>
                                        <option value="pink">Rose</option>
                                        <option value="yellow">Jaune</option>
                                    </Select>
                                </Div>
                                <InputBottom placeholder="Ecrivez ce que vous devez faire ici..." type="text" {...register('name', { required: true })} />
                                <Btn type="submit"/>
                            </Divide>
                        </SubContainer>
                    </PopUpForm>
                }
                <Message>Bravo vous avez accompli tout vos objectif aujourd'hui !</Message>
            </Agenda>}
        </Container>
    )
}

const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
grid-area: 1 / 2 / 4 / 5;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
width: 50%;
margin-top: 0.5rem;
margin-bottom: 0.5rem;
`
const ButtonF = styled.button`
background-color: white;
border-radius: 0.5rem 0.1rem 0.1rem 0.5rem;
color: black;
width: 50%;
padding: 0.4rem 0rem;
border: 1px solid #163791;
display: flex;
align-items: center;
justify-content: center;
transition: 0.4s;
cursor: pointer;
`
const ButtonS = styled.button`
justify-content: center;
display: flex;
align-items: center;
background-color: #FFFFFF;
border-radius: 0.1rem 0.5rem 0.5rem 0.1rem;
color: black;
width: 50%;
padding: 0.4rem 0rem;
border: 1px solid black;
transition: 0.4s;
cursor: pointer;
`
const Agenda = styled.div`
width: 100%;
height: 100%;
display:flex;
align-items: center;
flex-direction: column;
justify-content: space-between;
`
const Message = styled.p`
font-size: 1.25rem;
color: black;
`
const Item = styled.img`
width: 25px;
height: 25px;
object-fit: contain;
margin-right: 0.4rem;
`
const PopUpForm = styled.form`
background-color: white;
box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.53);
-webkit-box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.53);
-moz-box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.53);
grid-area: 2 / 4 / 3 / 6;
border-radius: 1.2rem;
min-width: 450px;
position: absolute;
top: 50%;
left: 50%;
z-index: 99;
transform: translate(-50%,50%);
`
const Div = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
`
const Divide = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
const Title = styled.h3`
font-size: 1.3rem;
color: black;
font-weight: normal;
`
const Input = styled.input`
padding: 0.3rem;
font-size: 1.1rem;
color: black;
margin-bottom: 1.5rem;
margin-top: 1.5rem;
margin-right: 0.5rem;
border: 1px solid black;
border-radius: 0.3rem;
font-family: 'Jost', sans-serif;
`
const InputBottom = styled.input`
padding: 0.3rem;
font-size: 1.1rem;
color: black;
margin-bottom: 1.5rem;
padding-bottom: 2rem;
margin-top: 1.5rem;
margin-right: 0.5rem;
border: 1px solid black;
border-radius: 0.3rem;
font-family: 'Jost', sans-serif;
width: 100%;
`
const Btn = styled.input`
padding: 0.5rem 1.8rem;
background-color: #163791;
border-radius: 1.5rem;
color: white;
font-family: 'Jost', sans-serif;
border: none;
`
const SubContainer = styled.div`
display: flex;
flex-direction: column;
padding: 4.5rem;
align-items: left;
width: 100%;
`
const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 210%;
z-index: 98;
backdrop-filter: blur(1.5rem);
background-color: black;
opacity: 0.6;
`
const Select = styled.select`
padding: 0.3rem;
border-radius: 0.5rem;
border: 1px solid black;
`
const Span = styled.span`
padding: 0.1rem;
margin-right: 1rem;
font-size: 1.2rem;
`
export default AgendaContainer
