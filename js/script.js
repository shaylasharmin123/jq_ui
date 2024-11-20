// draggble
$( function() {
    $( "#drag" ).draggable();
    // sortable
    $( "#sortable" ).sortable();
    // accordian
     $( "#accordion" ).accordion({
      collapsible: true
    });

     var data = [
     	"HTML",
     	"CSS",
     	"JAVASCRIPT"

     ];
      $( "#c_name" ).autocomplete({
      source: data
    });
      // datepicker
       $( "#date" ).datepicker({
        changeMonth: true,
        changeYear: true
       });
       // selectmenu
     $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();

     // tooltip
     $( document ).tooltip();
     



 });




