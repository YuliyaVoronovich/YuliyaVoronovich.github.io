var myName="Voronovich Juliya";
var myRole="Web developer";
var myContact="8 (029) 762 40 18";
var myPictureUrl="https://pp.userapi.com/c623829/v623829246/49459/bQNU9UX4rWI.jpg";
var mySkills=['php','js','mathematics','html','css'];

var bio={
	name:myName,
	role:myRole,
	contact:myContact,
	pictureUrl:myPictureUrl,
	welcomeMessage:"Hello! I am Juliya",
	skills:mySkills
}

var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);

$('#header').append(formattedName);
$('#header').append(formattedRole);