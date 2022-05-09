const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary text-white">
                <h2>${engineer.name}</h2>
                <h4>Engineer</h4><i class="fas fa-glasses mr-2"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
};

const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary text-white">
                <h2>${intern.name}</h2>
                <h4>Intern</h4><i class="fas fa-user-graduate mr-2"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `;
};

const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary-text-white">
                <h2>${manager.name}</h2>
                <h4>Manager</h4><i class="fas fa-mug-hot mr-2"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};

generateHTML = (data) => {

   teamArray = []; 

    for (let i = 0; i < data.length; i++) {
        const member = data[i];
        const job = member.getJob(); 

        
        if (job === 'Engineer') {
            const engineerCard = generateEngineer(member);
           teamArray.push(engineerCard);
        }

       
        if (job === 'Intern') {
            const internCard = generateIntern(member);
           teamArray.push(internCard);
        }

        if (job === 'Manager') {
            const managerCard = generateManager(member);
           teamArray.push(managerCard);
        }
        
    }

     
    const memberCards =teamArray.join('')


    const generateTeam = generateTeamPage(memberCards); 
    return generateTeam;

}

const generateTeamPage = function (memberCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team-Profile-Generator</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  <body>
      <header>
      <div class="container-fluid">
      <div class="row">
          <div class="col-12 jumbotron mb-3 team-heading bg-danger">
              <h1 class="text-center text-white">Team Profile Generator</h1>
          </div>
      </div>
  </div>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  ${memberCards}
              </div>
          </div>
      </main>
      
  </body>
  </html>
`;
}

module.exports = generateHTML; 

  