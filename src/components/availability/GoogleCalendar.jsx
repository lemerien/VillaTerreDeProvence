// Composant du formulaire de contact
import React from 'react';

export const GoogleCalendar = () => {
   return (
    <section className="mb-12">
        <div className="flex justify-center">
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=dmlsbGF0ZXJyZWRlcHJvdmVuY2VAZ21haWwuY29t&amp&src=YThiYXJzczlxZTJxbmhudDRlZGhydmdsdWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp&color=%23D50000&amp&color=%2333B679&amp&showTitle=1&amp&showNav=1&amp&showDate=1&amp&showPrint=0&amp&showTabs=0&amp&showCalendars=0&amp&showTz=0&amp&mode=MONTH&amp&dates=20250601/20250630&amp&title=Villa%20Terre%20de%20Provence" // Replace with your calendar ID
            style={{ border: 0, width: '100%', height: '600px' }} 
            frameBorder="0"
            scrolling="no"
            title="Availability Calendar Villa Terre de Provence"
          />
        
        </div>
        </section>
  );
};