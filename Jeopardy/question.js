
function correct(){
	document.getElementById("title-question").innerHTML = "Correcto!!!";
	document.getElementById("question-space").style.background = "rgba(50, 205, 50, .9)";
}

function incorrect(){
	document.getElementById("title-question").innerHTML = "Incorrecto ";
	document.getElementById("question-space").style.background = "rgba(178, 34, 34, .9)";
}

function ques1(){
	document.getElementById("title-question").innerHTML = "Jeopardy!";
	document.getElementById("question-space").style.background = "rgba(255, 255, 255, 1)";

	var content = 	"<p>"+
						"¿Cual fuerza del CO proporciona los recursos con que la gente trabaja y afecta a las tareas que realiza?"+
					"</p>";

	document.getElementById("body-question").innerHTML = content;	

	document.getElementById("optionA").innerHTML = "<span class='letter' onclick='correct()'>  A</span><span class='answer' onclick='correct()'>  Tecnología</span>";
	document.getElementById("optionB").innerHTML = "<span class='letter' onclick='incorrect()'>B</span><span class='answer' onclick='incorrect()'>Ambiente</span>";
	document.getElementById("optionC").innerHTML = "<span class='letter' onclick='incorrect()'>C</span><span class='answer' onclick='incorrect()'>Gente</span>";
	document.getElementById("optionD").innerHTML = "<span class='letter' onclick='incorrect()'>D</span><span class='answer' onclick='incorrect()'>Estructura</span>";

	document.getElementById("question1").style.background = "rgba(0, 0, 0, .1)";
	//document.getElementById("question3").style.visibility = "hidden";
}

function ques2(){
	document.getElementById("title-question").innerHTML = "Jeopardy!";
	document.getElementById("question-space").style.background = "rgba(255, 255, 255, 1)";

	var content = 	"<p>"+
						"¿Cual es el reto del CO donde se mide la capacidad de mantener el control, conducta, liderazgo, motivación, etc. En cualquier situación en la que se encuentre la organización?"+
					"</p>";

	document.getElementById("body-question").innerHTML = content;	

	document.getElementById("optionA").innerHTML = "<span class='letter' onclick='incorrect()'>A</span><span class='answer' onclick='incorrect()'>Variación de organización</span>";
	document.getElementById("optionB").innerHTML = "<span class='letter' onclick='correct()'>B</span><span class='answer' onclick='correct()'>Variación de ambientes</span>";
	document.getElementById("optionC").innerHTML = "<span class='letter' onclick='incorrect()'>C</span><span class='answer' onclick='incorrect()'>Variación de situación</span>";
	document.getElementById("optionD").innerHTML = "<span class='letter' onclick='incorrect()'>D</span><span class='answer' onclick='incorrect()'>Variación de estrés</span>";

	document.getElementById("question2").style.background = "rgba(0, 0, 0, .1)";
	//document.getElementById("question3").style.visibility = "hidden";
}

function ques3(){
	document.getElementById("title-question").innerHTML = "Jeopardy!";
	document.getElementById("question-space").style.background = "rgba(255, 255, 255, 1)";

	var content = 	"<p>"+
						"Es el estudio y aplicación del conocimiento sobre cómo la gente actúa en las organizaciones..."+
					"</p>";

	document.getElementById("body-question").innerHTML = content;	

	document.getElementById("optionA").innerHTML = "<span class='letter' onclick='incorrect()'>A</span><span class='answer' onclick='incorrect()'>Comportamiento empresarial</span>";
	document.getElementById("optionB").innerHTML = "<span class='letter' onclick='incorrect()'>B</span><span class='answer' onclick='incorrect()'>Comportamiento institucional</span>";
	document.getElementById("optionC").innerHTML = "<span class='letter' onclick='incorrect()'>C</span><span class='answer' onclick='incorrect()'>Comportamiento humano</span>";
	document.getElementById("optionD").innerHTML = "<span class='letter' onclick='correct()'  >D</span><span class='answer' onclick='correct()  '>Comportamiento organizacional</span>";

	document.getElementById("question3").style.background = "rgba(0, 0, 0, .1)";
	//document.getElementById("question3").style.visibility = "hidden";
}	

function ques4(){
	document.getElementById("title-question").innerHTML = "Jeopardy!";
	document.getElementById("question-space").style.background = "rgba(255, 255, 255, 1)";

	var content = 	"<p>"+
						"Tipo de arreglo que busca la empresa cuando fija planes a corto plazo para los programas organizacionales."+
					"</p>";

	document.getElementById("body-question").innerHTML = content;	

	document.getElementById("optionA").innerHTML = "<span class='letter' onclick='correct()'>A</span><span class='answer' onclick='correct()'>Arreglos rápidos</span>";
	document.getElementById("optionB").innerHTML = "<span class='letter' onclick='incorrect()'>B</span><span class='answer' onclick='incorrect()'>Arreglos express</span>";
	document.getElementById("optionC").innerHTML = "<span class='letter' onclick='incorrect()'>C</span><span class='answer' onclick='incorrect()'>Arreglos sobre la marcha</span>";
	document.getElementById("optionD").innerHTML = "<span class='letter' onclick='incorrect()'>D</span><span class='answer' onclick='incorrect()'>Ninguna de las anteriores</span>";

	document.getElementById("question4").style.background = "rgba(0, 0, 0, .1)";
	//document.getElementById("question4").style.visibility = "hidden";
}

function ques7(){
	document.getElementById("title-question").innerHTML = "Jeopardy!";
	document.getElementById("question-space").style.background = "rgba(255, 255, 255, 1)";

	var content = 	"<p>"+
						"Completa la frase: <br> Los planes a __________________ representan planes estrategicos más realistas para "+
						"la administración de recuersos humanos como activo productivo."+
					"</p>";

	document.getElementById("body-question").innerHTML = content;	

	document.getElementById("optionA").innerHTML = "<span class='letter' onclick='incorrect()'>A</span><span class='answer' onclick='incorrect()'>Corto plazo</span>";
	document.getElementById("optionB").innerHTML = "<span class='letter' onclick='incorrect()'>B</span><span class='answer' onclick='incorrect()'>Futuro</span>";
	document.getElementById("optionC").innerHTML = "<span class='letter' onclick='incorrect()'>C</span><span class='answer' onclick='incorrect()'>Horizontes cortos</span>";
	document.getElementById("optionD").innerHTML = "<span class='letter' onclick='correct()'>D</span><span class='answer' onclick='correct()'>Largo plazo</span>";

	document.getElementById("question7").style.background = "rgba(0, 0, 0, .1)";
	//document.getElementById("question7").style.visibility = "hidden";
}

function ques11(){
	document.getElementById("title-question").innerHTML = "Jeopardy!";
	document.getElementById("question-space").style.background = "rgba(255, 255, 255, 1)";

	var content = 	"<p>"+
						"¿Cuáles son las 4 fuerzas que afectan a las organizaciones?"+
					"</p>";

	document.getElementById("body-question").innerHTML = content;	

	document.getElementById("optionA").innerHTML = "<span class='letter' onclick='incorrect()'>A</span><span class='answer' onclick='incorrect()'>Estructura, tiempo, tecnología y salarios</span>";
	document.getElementById("optionB").innerHTML = "<span class='letter' onclick='correct()'>  B</span><span class='answer' onclick='correct()'>  Gente, estructura, tecnología y ambiente</span>";
	document.getElementById("optionC").innerHTML = "<span class='letter' onclick='incorrect()'>C</span><span class='answer' onclick='incorrect()'>Personas, tiempo, tecnología y ubicación</span>";
	document.getElementById("optionD").innerHTML = "<span class='letter' onclick='incorrect()'>D</span><span class='answer' onclick='incorrect()'>Gente, estructuras, tecnología y tiempo</span>";

	document.getElementById("question11").style.background = "rgba(0, 0, 0, .1)";
	//document.getElementById("question3").style.visibility = "hidden";
}