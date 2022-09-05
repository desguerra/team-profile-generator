function generateTemplate() {
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>My Team</title>
    
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
                crossorigin="anonymous"
            />
        </head>
    
        <body>
            <header
                class="container-fluid text-bg-dark p-3 d-flex justify-content-center"
            >
                <h1>My Team!</h1>
            </header>
    
            <section class="container-fluid text-bg-dark p-1 d-flex justify-content-center">
                <p>
                    made with 🤍 by
                    <a
                        href="https://github.com/desguerra"
                        class="link-info"
                        target="_blank"
                        ><strong>nikki</strong></a
                    >
                </p>
            </section>
    
            <section class="container p-3">
                <div class="row d-flex justify-content-center">
                    <div class="col-sm-6 col-lg-3 my-2">
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title">Manager Name</h2>
                                <h3 class="card-subtitle text-muted">
                                    Manager Role
                                </h3>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: 1</li>
                                <li class="list-group-item">
                                    Email:
                                    <a
                                        href="mailto:manager@fakemail.com"
                                        class="link-info"
                                        target="_blank"
                                        >manager@fakemail.com</a
                                    >
                                </li>
                                <li class="list-group-item">Office #: 100</li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="col-sm-6 col-lg-3 my-2">
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title">Engineer Name</h2>
                                <h3 class="card-subtitle text-muted">
                                    Engineer Role
                                </h3>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: 2</li>
                                <li class="list-group-item">
                                    Email:
                                    <a
                                        href="mailto:eng@fakemail.com"
                                        class="link-info"
                                        target="_blank"
                                        >eng@fakemail.com</a
                                    >
                                </li>
                                <li class="list-group-item">
                                    Github:
                                    <a
                                        href="https://github.com/octocat"
                                        class="link-info"
                                        target="_blank"
                                        >octocat</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="col-sm-6 col-lg-3 my-2">
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title">Intern Name</h2>
                                <h3 class="card-subtitle text-muted">
                                    Intern Role
                                </h3>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: 14</li>
                                <li class="list-group-item">
                                    Email:
                                    <a
                                        href="mailto:manager@fakemail.com"
                                        class="link-info"
                                        target="_blank"
                                        >intern@fakemail.com</a
                                    >
                                </li>
                                <li class="list-group-item">School: UCD</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
    
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