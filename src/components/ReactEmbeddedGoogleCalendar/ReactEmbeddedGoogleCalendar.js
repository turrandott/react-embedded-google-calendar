import React from 'react';
//const publicUrl = "https://calendar.google.com/calendar/u/0/embed?ctz=Europe/Rome&src=cnZ0djUzcTlicDdsMmRwbXZkbnMyMHVucDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ";

const ReactEmbeddedGoogleCalendar = ({ 
publicUrl = '',
width = `100%`,
height = `400`
}) => { 
    if (publicUrl === '') return (<p>Please, provide public URL of your Google calendar</p>);
    return ( 
        <iframe src={publicUrl} style={{borderWidth:0, resize: "both", overflowX: "scroll"}}
            width={width} height={height}
            frameBorder="0" scrolling="no">
        </iframe>
    )
};

export default ReactEmbeddedGoogleCalendar;