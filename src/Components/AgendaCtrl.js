import React from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import '../styles/agenda.css'

function AgendaCtrl({Tasks, setPopup}) {
    // console.log(Tasks)
    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            allDaySlot={false}
            events=
            {Tasks}
            // {[{ id: '2', title: 'event 1', start: '2021-05-18T21:11:02', end: '2021-05-22T21:11:02.000Z', color: 'green'}]}
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            customButtons={{
                addEventButton: {
                    text: 'Ajouter une tâche',
                    click: function() {
                        setPopup(true)
                    }
                }
            }}
            footerToolbar={{center: 'addEventButton'}}
            weekends={false}
        />
    )
}

export default AgendaCtrl