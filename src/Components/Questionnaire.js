import React from 'react'
import * as Survey from "survey-react";
import "survey-react/survey.css";
import '../styles/questionnaire.css'

function Questionnaire() {
    let surveyJSON = {
        "locale": "fr",
        "logoPosition": "top",
        "pages": [
         {
          "name": "Questionnaire",
          "elements": [
           {
            "type": "radiogroup",
            "name": "question1",
            "title": "Comment estimez-vous votre charge de travail cette semaine :",
            "hasComment": true,
            "commentText": "Vous souhaitez développer ou apporter des subjections...",
            "choices": [
             {
              "value": "Correcte",
              "text": "Correcte"
             },
             {
              "value": "descMoyennement élevéription",
              "text": "Moyennement élevé"
             },
             {
              "value": "Elevé",
              "text": "Elevé"
             }
            ]
           }
          ],
          "title": "Questionnaire",
          "description": "Bonjour, nous vous mettons à disposition ce petit questionnaire dans lequel vous pouvez à votre bon désir nous partager votre expérience par rapport au télétravail. Ce questionnaire à pour objectif de savoir comment se déroule le travail de notre personnel en c'est temps difficile, il laisse la possibilité de développer un commentaire qui sera lu et prit en compte par nos équipe afin de faire notre maximum pour nous améliorer. Il est évident que le questionnaire restera anonyme nous vous  invitons donc à rester le plus respectueux et mature possible.  Merci de nous accorder votre temps, et n'oubliez pas vous êtes important !  "
         },
         {
          "name": "page1",
          "elements": [
           {
            "type": "radiogroup",
            "name": "question2",
            "title": "Avez-vous réussi à vous organiser correctement cette semaine :",
            "hasComment": true,
            "commentText": "Vous souhaitez développer ou apporter des subjections...",
            "choices": [
             {
              "value": "Oui",
              "text": "Oui"
             },
             {
              "value": "Non",
              "text": "Non"
             },
             {
              "value": "Plus ou moins",
              "text": "Plus ou moins"
             }
            ]
           }
          ],
          "title": {
           "fr": "Questionnaire"
          },
          "description": {
           "fr": "Bonjour, nous vous mettons à disposition ce petit questionnaire dans lequel vous pouvez à votre bon désir nous partager votre expérience par rapport au télétravail. Ce questionnaire à pour objectif de savoir comment se déroule le travail de notre personnel en c'est temps difficile, il laisse la possibilité de développer un commentaire qui sera lu et prit en compte par nos équipe afin de faire notre maximum pour nous améliorer. Il est évident que le questionnaire restera anonyme nous vous  invitons donc à rester le plus respectueux et mature possible.  Merci de nous accorder votre temps, et n'oubliez pas vous êtes important !  "
          }
         },
         {
          "name": "page2",
          "elements": [
           {
            "type": "radiogroup",
            "name": "question3",
            "title": "Avez-vous réussi à concilier votre vie professionnelle et votre vie personnelle cette semaine :",
            "hasComment": true,
            "commentText": "Vous souhaitez développer ou apporter des subjections...",
            "choices": [
             {
              "value": "Oui",
              "text": "Oui"
             },
             {
              "value": "Non",
              "text": "Non"
             },
             {
              "value": "Plus ou moins",
              "text": "Plus ou moins"
             }
            ]
           }
          ],
          "title": {
           "fr": "Questionnaire"
          },
          "description": {
           "fr": "Bonjour, nous vous mettons à disposition ce petit questionnaire dans lequel vous pouvez à votre bon désir nous partager votre expérience par rapport au télétravail. Ce questionnaire à pour objectif de savoir comment se déroule le travail de notre personnel en c'est temps difficile, il laisse la possibilité de développer un commentaire qui sera lu et prit en compte par nos équipe afin de faire notre maximum pour nous améliorer. Il est évident que le questionnaire restera anonyme nous vous  invitons donc à rester le plus respectueux et mature possible.  Merci de nous accorder votre temps, et n'oubliez pas vous êtes important !  "
          }
         },
         {
          "name": "page3",
          "elements": [
           {
            "type": "radiogroup",
            "name": "question4",
            "title": "Votre état de fatigue :",
            "hasComment": true,
            "commentText": "Vous souhaitez développer ou apporter des subjections...",
            "choices": [
             {
              "value": " Je ne me sens pas fatigué(e)",
              "text": " Je ne me sens pas fatigué(e)"
             },
             {
              "value": " Je me sens un peu fatigué(e)",
              "text": " Je me sens un peu fatigué(e)"
             },
             {
              "value": "Je suis très fatigué(e) ",
              "text": "Je suis très fatigué(e) "
             }
            ]
           }
          ],
          "title": {
           "fr": "Questionnaire"
          },
          "description": {
           "fr": "Bonjour, nous vous mettons à disposition ce petit questionnaire dans lequel vous pouvez à votre bon désir nous partager votre expérience par rapport au télétravail. Ce questionnaire à pour objectif de savoir comment se déroule le travail de notre personnel en c'est temps difficile, il laisse la possibilité de développer un commentaire qui sera lu et prit en compte par nos équipe afin de faire notre maximum pour nous améliorer. Il est évident que le questionnaire restera anonyme nous vous  invitons donc à rester le plus respectueux et mature possible.  Merci de nous accorder votre temps, et n'oubliez pas vous êtes important !  "
          }
         },
         {
          "name": "page4",
          "elements": [
           {
            "type": "radiogroup",
            "name": "question5",
            "title": "Votre état de stress :",
            "hasComment": true,
            "commentText": "Vous souhaitez développer ou apporter des subjections...",
            "choices": [
             {
              "value": "Mon état de stress n’a pas changé",
              "text": "Mon état de stress n’a pas changé"
             },
             {
              "value": "Je me sens un peu stressé(e)",
              "text": "Je me sens un peu stressé(e)"
             },
             {
              "value": "Je me sens stressé(e)",
              "text": "Je me sens stressé(e)"
             }
            ],
            "otherText": "Je me sens stressé(e)"
           }
          ],
          "title": {
           "fr": "Questionnaire"
          },
          "description": {
           "fr": "Bonjour, nous vous mettons à disposition ce petit questionnaire dans lequel vous pouvez à votre bon désir nous partager votre expérience par rapport au télétravail. Ce questionnaire à pour objectif de savoir comment se déroule le travail de notre personnel en c'est temps difficile, il laisse la possibilité de développer un commentaire qui sera lu et prit en compte par nos équipe afin de faire notre maximum pour nous améliorer. Il est évident que le questionnaire restera anonyme nous vous  invitons donc à rester le plus respectueux et mature possible.  Merci de nous accorder votre temps, et n'oubliez pas vous êtes important !  "
          }
         },
         {
          "name": "page5",
          "elements": [
           {
            "type": "radiogroup",
            "name": "question6Cette semaine vous vous êtes senti :",
            "title": "Cette semaine vous vous êtes senti :",
            "hasComment": true,
            "commentText": "Vous souhaitez développer ou apporter des subjections...",
            "choices": [
             {
              "value": "Productif/Productive",
              "text": "Productif/Productive"
             },
             {
              "value": "Peu productif/productive",
              "text": "Peu productif/productive"
             },
             {
              "value": "Pas productif/productive",
              "text": "Pas productif/productive"
             }
            ],
            "otherText": "Je me sens stressé(e)"
           }
          ],
          "title": {
           "fr": "Questionnaire"
          },
          "description": {
           "fr": "Bonjour, nous vous mettons à disposition ce petit questionnaire dans lequel vous pouvez à votre bon désir nous partager votre expérience par rapport au télétravail. Ce questionnaire à pour objectif de savoir comment se déroule le travail de notre personnel en c'est temps difficile, il laisse la possibilité de développer un commentaire qui sera lu et prit en compte par nos équipe afin de faire notre maximum pour nous améliorer. Il est évident que le questionnaire restera anonyme nous vous  invitons donc à rester le plus respectueux et mature possible.  Merci de nous accorder votre temps, et n'oubliez pas vous êtes important !  "
          }
         },
         {
          "name": "page6",
          "elements": [
           {
            "type": "radiogroup",
            "name": "question6",
            "title": "Vos liens avec vos collaborateurs/ collègues se sont t’ils détériorés :",
            "hasComment": true,
            "commentText": "Vous souhaitez développer ou apporter des subjections...",
            "choices": [
             {
              "value": "Oui",
              "text": "Oui"
             },
             {
              "value": "Non",
              "text": "Non"
             }
            ],
            "otherText": "Je me sens stressé(e)"
           }
          ],
          "title": {
           "fr": "Questionnaire"
          },
          "description": {
           "fr": "Bonjour, nous vous mettons à disposition ce petit questionnaire dans lequel vous pouvez à votre bon désir nous partager votre expérience par rapport au télétravail. Ce questionnaire à pour objectif de savoir comment se déroule le travail de notre personnel en c'est temps difficile, il laisse la possibilité de développer un commentaire qui sera lu et prit en compte par nos équipe afin de faire notre maximum pour nous améliorer. Il est évident que le questionnaire restera anonyme nous vous  invitons donc à rester le plus respectueux et mature possible.  Merci de nous accorder votre temps, et n'oubliez pas vous êtes important !  "
          }
         }
        ]
    }

    function sendDataToServer(survey) {
        //send Ajax request to your web server.
        console.log("The results are:" + JSON.stringify(survey.data));
        console.log(survey.data)
    }
    let model = new Survey.Model(surveyJSON)
    return (
        <div>
            {/* // eslint-disable-next-line */}
            <Survey.Survey model={ model } onComplete={ sendDataToServer }/>
        </div>
    )
}

export default Questionnaire
