# Add To Cart Info

Component that allows you to view the products added to the cart as soon as a product is added

![image](../assets/info-modal.png)

## Configuration

### Step 1 - Cloning the repository

Clone this [repository](https://github.com/jhonortizgomez/itgloberspartnercl-add-to-cart-info.git) on your computer.

### Step 2 - Editing the `Manifest.json`

Once in the repository directory, it is time to edit the `manifest.json` file.

Once you are in the file, you must replace the `vendor` value. `vendor` is the account name you are working on, if you want yo can modify name, titel, and description. For example:

```json
{
  "vendor": "vtexvendor",
  "name": "custom-component"
}
```

You should also check the `package.json` file globar and the file in react folder, verify the name and the version.

### Step 3 - Installing node-modules

In your terminal enter in react folder, command (cd react), then put yarn in the terminal, this commad install node-modules folder, close your editor and open again
the project in your editor, you should have install and funtional the modules in react folder.

### Step 4- Run and preview your component

Then time has come to upload all the changes you made in your local files to the platform. For that, use the `vtex link` command. If the process runs without any  
errors, the following message will be displayed: `App linked successfully`.

To use the component in a store you should this in your "dependencies" in `manifest.json` file, "vendorName.componentName" : "version", for example:

```json
{
  "dependencies": {
    "itgloberspartnercl.add-to-cart-info": "0.x"
  }
}
```

Then put the component where ever you need.

This will enable you to see the applied changes in real time, through the account and workspace in which you are working.

## Dependencies

1. "vtex.order-manager": "0.x",
2. vtex.product-context": "0.x",
3. "vtex.css-handles": "0.x"
4. "vtex.checkout-resources": "0.x"

## Contributors

1. Jhon Ortiz Gómez
