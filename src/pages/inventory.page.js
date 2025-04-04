const { BasePage } = require('../pages/base.page.js');

class InventoryPage extends BasePage {
    constructor (page) {
        super(page);
        this.title = '.title';
    }

    async verifyOnInventoryPage () {
        const currentUrl = await this.getUrl();
        return currentUrl.includes('/inventory.html');
    }

    async getPageTitle () {
        return await this.getText(this.title);
    }
}

module.exports = { InventoryPage };