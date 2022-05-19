class homeScreen {
  get formsButton() {
    return $("~Forms");
  }

  async goToForms() {
    await this.formsButton.click();
  }

  get typeForms() {
    return $("~text-input");
  }

  get closeForm() {
    return $("~input-text-result");
  }

  async type() {
    await this.typeForms.click();
    await this.typeForms.addValue("Rodrigo");
    await this.closeForm.click();
  }

  get DropDown() {
    return $("~Dropdown");
  }

  async dropDown() {
    await this.DropDown.click();
  }

  get webDriver() {
    return $("id:android:id/text1");
  }

  async webDrive() {
    await this.webDriver.click();
  }
}

module.exports = new homeScreen();
