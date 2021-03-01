import React from 'react';
import { storiesOf } from '@storybook/react';

import { ReactEmbeddedGoogleCalendar } from '../components/ReactEmbeddedGoogleCalendar';
const stories = storiesOf('Test', module);

const publicUrl = "https://calendar.google.com/calendar/u/0/embed?ctz=Europe/Rome&src=cnZ0djUzcTlicDdsMmRwbXZkbnMyMHVucDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ";
//const publicUrl = "https://calendar.google.com/calendar/embed?src=tarzhakova%40gmail.com&ctz=Europe%2FRome";

stories.add('Embedded Google Calendar', () => {
    return (<ReactEmbeddedGoogleCalendar publicUrl={publicUrl}/>);
});