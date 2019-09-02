
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

function ques5(){
	document.getElementById("title-question").innerHTML = "Jeopardy!";
	document.getElementById("question-space").style.background = "rgba(255, 255, 255, 1)";

	var content = 	"<p>"+
						"Los conceptos básicos del comportamiento organizacional se agrepan en dos, referentes a la organización y referentes a ..."+
					"</p>";

	document.getElementById("body-question").innerHTML = content;	

	document.getElementById("optionA").innerHTML = "<span class='letter' onclick='incorrect()'>A</span><span class='answer' onclick='incorrect()'> La estructura social</span>";
	document.getElementById("optionB").innerHTML = "<span class='letter' onclick='correct()'>B</span><span class='answer' onclick='correct()'> La naturaleza de la gente</span>";
	document.getElementById("optionC").innerHTML = "<span class='letter' onclick='incorrect()'>C</span><span class='answer' onclick='incorrect()'> La ética profesional </span>";
	document.getElementById("optionD").innerHTML = "<span class='letter' onclick='incorrect()'>D</span><span class='answer' onclick='incorrect()'> Comportamiento social</span>";

	document.getElementById("question5").style.background = "rgba(0, 0, 0, .1)";
	//document.getElementById("question3").style.visibility = "hidden";
}

function ques6(){
	document.getElementById("title-question").innerHTML = "Jeopardy!";
	document.getElementById("question-space").style.background = "rgba(255, 255, 255, 1)";

	var content = 	"<p>"+
						"¿Cuál es el significado de ética?"+
					"</p>";

	document.getElementById("body-question").innerHTML = content;	

	document.getElementById("optionA").innerHTML = "<span class='letter' onclick='correct()'>A</span><span class='answer' onclick='correct()'>“Carácter” o “perteneciente al carácter”</span>";
	document.getElementById("optionB").innerHTML = "<span class='letter' onclick='incorrect()'>B</span><span class='answer' onclick='incorrect()'>Primer conocimiento de una cosa</span>";
	document.getElementById("optionC").innerHTML = "<span class='letter' onclick='incorrect()'>C</span><span class='answer' onclick='incorrect()'>Código de leyes sociales y psicológicas</span>";
	document.getElementById("optionD").innerHTML = "<span class='letter' onclick='incorrect()'>D</span><span class='answer' onclick='incorrect()'>Experiencias individuales después del nacimiento</span>";

	document.getElementById("question6").style.background = "rgba(0, 0, 0, .1)";
	//document.getElementById("question3").style.visibility = "hidden";
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

function ques8(){
	document.getElementById("title-question").innerHTML = "Jeopardy!";
	document.getElementById("question-space").style.background = "rgba(255, 255, 255, 1)";

	var content = 	"<p>"+
						"¿Para  qué fines se utiliza la  manipulación no ética de la gente?"+
					"</p>";

	document.getElementById("body-question").innerHTML = content;	

	document.getElementById("optionA").innerHTML = "<span class='letter' onclick='incorrect()'>A</span><span class='answer' onclick='incorrect()'>Por el bien de la empresa</span>";
	document.getElementById("optionB").innerHTML = "<span class='letter' onclick='incorrect()'>B</span><span class='answer' onclick='incorrect()'>Por el bienestar del empleado.</span>";
	document.getElementById("optionC").innerHTML = "<span class='letter' onclick='correct()'>C</span><span class='answer' onclick='correct()'>Con fines egoístas.</span>";
	document.getElementById("optionD").innerHTML = "<span class='letter' onclick='incorrect()'>D</span><span class='answer' onclick='incorrect()'>Para beneficiar a las organizaciones.</span>";

	document.getElementById("question8").style.background = "rgba(0, 0, 0, .1)";
	//document.getElementById("question3").style.visibility = "hidden";
}

function ques9(){
	document.getElementById("title-question").innerHTML = "Jeopardy!";
	document.getElementById("question-space").style.background = "rgba(255, 255, 255, 1)";

	var content = 	"<p>"+
						"¿ Qué parámetro puede ser útil para medir el impacto de los resultados obtenidos en una organización?"+
					"</p>";

	document.getElementById("body-question").innerHTML = content;	

	document.getElementById("optionA").innerHTML = "<span class='letter' onclick='incorrect()'>A</span><span class='answer' onclick='incorrect()'>Velocidad de producción</span>";
	document.getElementById("optionB").innerHTML = "<span class='letter' onclick='incorrect()'>B</span><span class='answer' onclick='incorrect()'>Horas extra trabajadas </span>";
	document.getElementById("optionC").innerHTML = "<span class='letter' onclick='incorrect()'>C</span><span class='answer' onclick='incorrect()'>Agotamiento de insumos</span>";
	document.getElementById("optionD").innerHTML = "<span class='letter' onclick='correct()'>D</span><span class='answer' onclick='correct()'>Productividad</span>";

	document.getElementById("question9").style.background = "rgba(0, 0, 0, .1)";
	//document.getElementById("question3").style.visibility = "hidden";
}

function ques10(){
	document.getElementById("title-question").innerHTML = "Jeopardy!";
	document.getElementById("question-space").style.background = "rgba(255, 255, 255, 1)";

	var content = 	"<p>"+
						"¿Qué pasa por alto el sesgo conductual?"+
					"</p>";

	document.getElementById("body-question").innerHTML = content;	

	document.getElementById("optionA").innerHTML = "<span class='letter' onclick='correct()'>A</span><span class='answer' onclick='correct()'>Las necesidades humanas</span>";
	document.getElementById("optionB").innerHTML = "<span class='letter' onclick='incorrect()'>B</span><span class='answer' onclick='incorrect()'>La satisfacción personal</span>";
	document.getElementById("optionC").innerHTML = "<span class='letter' onclick='incorrect()'>C</span><span class='answer' onclick='incorrect()'>La integridad de la persona</span>";
	document.getElementById("optionD").innerHTML = "<span class='letter' onclick='incorrect()'>D</span><span class='answer' onclick='incorrect()'>La preocupación por los empleados</span>";

	document.getElementById("question10").style.background = "rgba(0, 0, 0, .1)";
	//document.getElementById("question3").style.visibility = "hidden";
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

function ques12(){
	document.getElementById("title-question").innerHTML = "Jeopardy!";
	document.getElementById("question-space").style.background = "rgba(255, 255, 255, 1)";

	var content = 	"<p>"+
						" ¿Cuál es el principal interés del enfoque de apoyo en el marco organizacional?"+
					"</p>";

	document.getElementById("body-question").innerHTML = content;	

	document.getElementById("optionA").innerHTML = "<span class='letter' onclick='correct()'>A</span><span class='answer' onclick='correct()'>El desarrollo y crecimiento de los empleados</span>";
	document.getElementById("optionB").innerHTML = "<span class='letter' onclick='incorrect()'>B</span><span class='answer' onclick='incorrect()'>La integración de distintos enfoques organizacionales</span>";
	document.getElementById("optionC").innerHTML = "<span class='letter' onclick='incorrect()'>C</span><span class='answer' onclick='incorrect()'>La importancia de trabajar en ambientes especializados</span>";
	document.getElementById("optionD").innerHTML = "<span class='letter' onclick='incorrect()'>D</span><span class='answer' onclick='incorrect()'>Mantener a los empleados en un estado de inestabilidad laboral </span>";

	document.getElementById("question12").style.background = "rgba(0, 0, 0, .1)";
	//document.getElementById("question3").style.visibility = "hidden";
}

function ques13(){
	document.getElementById("title-question").innerHTML = "Jeopardy!";
	document.getElementById("question-space").style.background = "rgba(255, 255, 255, 1)";

	var content = 	"<p>"+
						"Es cuando una persona solo pone atención a los rasgos de su ambiente que refuerzan su visión del mundo."+
					"</p>";

	document.getElementById("body-question").innerHTML = content;	

	document.getElementById("optionA").innerHTML = "<span class='letter' onclick='incorrect()'>A</span><span class='answer' onclick='incorrect()'>Auto conocimiento</span>";
	document.getElementById("optionB").innerHTML = "<span class='letter' onclick='incorrect()'>B</span><span class='answer' onclick='incorrect()'>Visión parcial</span>";
	document.getElementById("optionC").innerHTML = "<span class='letter' onclick='incorrect()'>C</span><span class='answer' onclick='incorrect()'>Conveniencia organizacional</span>";
	document.getElementById("optionD").innerHTML = "<span class='letter' onclick='correct()'>D</span><span class='answer' onclick='correct()'>Percepción selectiva</span>";

	document.getElementById("question13").style.background = "rgba(0, 0, 0, .1)";
	//document.getElementById("question3").style.visibility = "hidden";
}

function ques14(){
	document.getElementById("title-question").innerHTML = "Jeopardy!";
	document.getElementById("question-space").style.background = "rgba(255, 255, 255, 1)";

	var content = 	"<p>"+
						"¿Cual de las siguientes no es una limitación del comportamiento organizacional?"+
					"</p>";

	document.getElementById("body-question").innerHTML = content;	

	document.getElementById("optionA").innerHTML = "<span class='letter' onclick='incorrect()'>A</span><span class='answer' onclick='incorrect()'>Sesgo conductual</span>";
	document.getElementById("optionB").innerHTML = "<span class='letter' onclick='incorrect()'>B</span><span class='answer' onclick='incorrect()'>Ley de los rendimientos decrecientes</span>";
	document.getElementById("optionC").innerHTML = "<span class='letter' onclick='incorrect()'>C</span><span class='answer' onclick='incorrect()'>Manipulación no ética de la gente</span>";
	document.getElementById("optionD").innerHTML = "<span class='letter' onclick='correct()'>D</span><span class='answer' onclick='correct()'>Naturaleza de la gente</span>";

	document.getElementById("question14").style.background = "rgba(0, 0, 0, .1)";
	//document.getElementById("question3").style.visibility = "hidden";
}

function ques15(){
	document.getElementById("title-question").innerHTML = "Jeopardy!";
	document.getElementById("question-space").style.background = "rgba(255, 255, 255, 1)";

	var content = 	"<p>"+
						"Cuando no existe __________________ en una organización carece de sentido integrar un grupo y desarrollar su cooperación ya que no hay una base en común. <br>Complete la frase:"+
					"</p>";

	document.getElementById("body-question").innerHTML = content;	

	document.getElementById("optionA").innerHTML = "<span class='letter' onclick='incorrect()'>A</span><span class='answer' onclick='incorrect()'>Interes</span>";
	document.getElementById("optionB").innerHTML = "<span class='letter' onclick='correct()'>B</span><span class='answer' onclick='correct()'>Mutualidad</span>";
	document.getElementById("optionC").innerHTML = "<span class='letter' onclick='incorrect()'>C</span><span class='answer' onclick='incorrect()'>Respeto</span>";
	document.getElementById("optionD").innerHTML = "<span class='letter' onclick='incorrect()'>D</span><span class='answer' onclick='incorrect()'>Metas</span>";

	document.getElementById("question#").style.background = "rgba(0, 0, 0, .1)";
	//document.getElementById("question3").style.visibility = "hidden";
}


function quesSecreta(){
	document.getElementById("title-question").innerHTML = "Jeopardy!";
	document.getElementById("question-space").style.background = "rgba(255, 255, 255, 1)";

	var content = 	"<p style='font-size: 40px; display: flex; justify-content: center; text-align: center;'>"+
						"POR 1,000 PUNTOS!! <br> Nombre 4 de los 6 integrantes del equipo:"+
					"</p>";

	document.getElementById("body-question").innerHTML = content;	

	document.getElementById("optionA").style.visibility = "hidden";
	document.getElementById("optionB").style.visibility = "hidden";
	document.getElementById("optionC").style.visibility = "hidden";
	document.getElementById("optionD").style.visibility = "hidden";

	document.getElementById("questionsecreta").style.background = "rgba(0, 0, 0, .1)";
	//document.getElementById("question3").style.visibility = "hidden";
}
