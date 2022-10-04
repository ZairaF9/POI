function Actualizar_Tarea(archivo)
{
	var filename = archivo.files[0].name;   
	document.getElementById('Tarea_Ent').innerHTML = filename;
}

function Borrar_Tarea()
{
	document.getElementById('Tarea_Ent').innerHTML = "No se entregó tarea";
}