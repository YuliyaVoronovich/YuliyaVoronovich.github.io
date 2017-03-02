var myName="Voronovich Yuliya";
var myRole="Web developer";
var myContact={
	mobile:"8 (029) 762 40 18",
	email:"Y-1306@mail.ru",
	github:"YuliyaVoronovich",
	location:"Minsk"
}
var myPictureUrl="https://pp.userapi.com/c623829/v623829246/49459/bQNU9UX4rWI.jpg";
var mySkills=['php','js','mathematics','html','css'];

var bio={
	name:myName,
	role:myRole,
	contact:myContact,
	pictureUrl:myPictureUrl,
	welcomeMessage:"Hello! I am "+myName,
	skills:mySkills
}
var education={
	"shools":[
		{
			"name":"Cymnasium №2",
			"city":"Polotsk",
			"year":2007
		},
		{
			"name":"BSUIR",
			"city":"Minsk",
			"year":2012
		}
	],
	"onlineCurses":[
		{
			"title":"JavaScript Basics",
			"school":"Udacity",
			"year":2017
		}
	]
}
var work={
	"jobs":[
		{
			"employer":"OOO Belan technologies",
			"city":"Minsk",
			"dates": "Avg 2012-Future",
			"position": IT Engineer
		}
		
	]
}

var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);

$('#header').append(formattedName);
$('#header').append(formattedRole);