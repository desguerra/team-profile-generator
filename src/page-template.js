function generateManager(manager) {
    return `<div class="col-sm-6 col-lg-3 my-2">
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-subtitle text-muted">
                ${manager.role}
            </h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">
                Email:
                <a
                    href="mailto:${manager.email}"
                    class="link-info"
                    target="_blank"
                    >${manager.email}</a
                >
            </li>
            <li class="list-group-item">Office #: ${manager.officeNumber}</li>
        </ul>
    </div>
</div>`
};

function isEngOrInt(employee) {
    if (!employee.role) {
        return ``;
    } else if (employee.role === 'Engineer') {
        return `Github:
        <a
            href="https://github.com/${employee.github}"
            class="link-info"
            target="_blank"
            >${employee.github}</a
        >`;
    } else if (employee.role === 'Intern') {
        return `School: ${employee.school}`
    } else {
        return ``;
    }
};

function generateNextEmployees(employeeList) {

    const employeeCards = employeeList.map((card) => {
        return `<div class="col-sm-6 col-lg-3 my-2">
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${card.name}</h2>
                <h3 class="card-subtitle text-muted">
                    ${card.role}
                </h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${card.id}</li>
                <li class="list-group-item">
                    Email:
                    <a
                        href="mailto:${card.email}"
                        class="link-info"
                        target="_blank"
                        >${card.email}</a
                    >
                </li>
                <li class="list-group-item">
                    ${isEngOrInt(card)}
                </li>
            </ul>
        </div>
    </div>`
    })
    .join('');

    return employeeCards;

};

function generateTemplate(managerData, employeeData) {
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>My Team Profile</title>
    
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
                crossorigin="anonymous"
            />
        </head>
    
        <body>
            <header
                class="container-fluid text-bg-dark p-3 text-center"
            >
                <h1 class="py-2">My Team!</h1>

                <p>
                    made with 🤍 by
                    <a
                        href="https://github.com/desguerra"
                        class="link-info"
                        target="_blank"
                        ><strong>nikki</strong></a
                    >
                </p>
            </header>
    
            <main class="container p-3">
                <div class="row d-flex justify-content-center">
                    
                    ${generateManager(managerData)}
    
                    ${generateNextEmployees(employeeData)}

                </div>
            </main>
    
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
                crossorigin="anonymous"
            ></script>
        </body>
    </html>
    
`
};

module.exports = generateTemplate;