axios.get('https://eoi.wiremockapi.cloud/clientes')
    .then(response => {
        const clientes = response.data.UserListData;
        console.log(clientes);

        const tableBody = document.getElementById('clientes-table-body');
        clientes.forEach(cliente => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${cliente.id}</td>
                <td>${cliente.username}</td>
                <td>${cliente.nombre}</td>
                <td>${cliente.email}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });

axios.get('https://eoi.wiremockapi.cloud/users')
    .then(response => {
        const usuario = response.data.arrayUsuarios[0];
        console.log(usuario);

        document.getElementById('user-name').textContent = `${usuario.nombre} ${usuario.apellidos}`;

        const tableBody = document.querySelector("#address-table tbody");
        usuario.direcciones.forEach(direccion => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${direccion.direccion}</td>
                <td>${direccion.cpostal}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });
