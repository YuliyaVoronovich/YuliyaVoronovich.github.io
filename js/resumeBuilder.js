var myName="Voronovich Juliya";
var myRole="Web developer";

var formattedName=HTMLheaderName.replace("%data%",myName);
var formattedRole=HTMLheaderRole.replace("%data%",myRole);

$('#header').append(formattedName);
$('#header').append(formattedRole);