select: function(start, end, allDay) {

    var title = prompt('Event Title:');
    if (title) {
        calendar.fullCalendar('renderEvent',
            {
              header: {
              right: 'prev,next today',
              center: 'title',
              left: 'month, agendaWeek, agendaDay'
                          },
               selectable: true,
               selectHelper: true,
               editable: true,
               eventLimit: true,
               events: '/events.json',


                title: title,
                description: description
                start_date: start_date,
                end_date: end_date,
                // allDay: allDay
            },
            true // make the event "stick"
        );
        /**
         * ajax call to store event in DB
         */
        jQuery.post(
            "event/new" // your url
            , { // re-use event's data
                title: title,
                description: description
                start_date: start_date,
                end_date: end_date,
            }
        );
    }
    calendar.fullCalendar('select');
}













// var initialize_calendar;
// initialize_calendar = function() {
// 	$('.calendar').each(function(){
// 		var calendar = $(this)
// 		calendar.fullCalendar({
// 			header: {
// 				right: 'prev,next today',
// 				center: 'title',
// 				left: 'month, agendaWeek, agendaDay'
// 			},
// 			selectable: true,
// 			selectHelper: true,
// 			editable: true,
// 			eventLimit: true,
// 			events: '/events.json',

// 			select: function(start, end) {
// 				$.getScript('/events/new', function() {
// 					$('#event_date_range').val(moment(start).format("MM/DD/YY HH:mm") + ' - ' + moment(end).format("MM/DD/YY HH:mm")date_range_picker();
// 						$('.start_hidden').val(moment(start).format('YYYY-MM-DD HH:mm'));
// 						$('.end_hidden').val(moment(end).format('YYYY-MM-DD HH:mm'));
// 				});

// 				calendar.fullCalendar('unselect')	
// 			}
// 		});
// 	})
// };
// $(document).on('turbolinks:load', initialize_calendar);
