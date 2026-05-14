describe('CT-001 - Registrar usuário com dados válidos', () => {
  const apiUrl = 'http://localhost:3000'; // Ajuste a URL conforme necessário
  const user = {
    name: 'João Silva',
    email: `joao.silva+${Date.now()}@teste.com`,
    password: '@Valida123'
  };

  let token;

  it('Passo 1: Enviar requisição POST para registrar usuário', () => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}/api/auth/register`,
      body: user,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.email).to.eq(user.email);
      cy.wrap(response.body.id).as('usuarioId');
    });
  });

  it('Passo 2: Autenticar com as credenciais criadas', () => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}/api/auth/login`,
      body: {
        email: user.email,
        password: user.password
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
      expect(response.body.user.email).to.eq(user.email);
      token = response.body.token;
      cy.wrap(token).as('authToken');
    });
  });

  it('Passo 3: Verificar rota protegida usando o token gerado', () => {
    expect(token, 'token should be set after login').to.exist;

    cy.request({
      method: 'GET',
      url: `${apiUrl}/api/users/me`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('userId');
    });
  });
});