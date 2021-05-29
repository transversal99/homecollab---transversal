import React from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import '../styles/agenda.css'

function AgendaCtrl({Tasks, setPopup}) {
    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            allDaySlot={false}
            events=
            {Tasks}
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