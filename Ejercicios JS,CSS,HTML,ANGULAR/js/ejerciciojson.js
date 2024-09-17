document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const dataRequest = {
            name: formData.get("name"),
            description: formData.get("description"),
            assignedTo: formData.get("assignedTo")
        };

      
        const url = "http://192.168.1.219:3000/user";

        axios.post(url, dataRequest)
            .then(response => {
                console.log("Datos enviados exitosamente:", response.data);
                alert("Datos enviados exitosamente");
                form.reset();
            })
            .catch(error => {
                console.error("Error al enviar los datos:", error);
                alert("Error al enviar los datos");
            });
    });
});