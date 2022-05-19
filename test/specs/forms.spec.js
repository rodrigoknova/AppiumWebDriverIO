const homeScreen = require("../screens/home.screen");

describe("Deve preencher os campos com sucesso", () => {
  it("Deve preencher o formulário", async () => {
    await homeScreen.goToForms();
    await homeScreen.type();
    await homeScreen.dropDown();
    await homeScreen.webDrive();
  });
});
