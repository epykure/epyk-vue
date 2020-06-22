
![](https://raw.githubusercontent.com/epykure/epyk-vue/master/static/images/logo.ico)


# Epyk on Vue.Js!


Presentation
================================

This project is to demonstrate the use of Epyk to push sophisticated views to a Vue.js framework without having to 
fully change the code.

This can also be an opportunity to share the UI implementation between JavaScript and Python developers by creating rich components.

Lot of components are already available in Epyk but feel free to bring news ideas !

The architecture of this kind of set up the as below:



Quickstart
================================


> pip install epyk

Install nodeJs from the [official website](https://nodejs.org/en/)

Then install Vue.js CLI from the [Official website](https://cli.vuejs.org/)

Then control your environment directly from Epyk by using the mapped CLI.


```py
from epyk.web import vue

# Define the path of your nodeJs configuration
node_app = vue.VueJs(r"C:\VueJs")
vue_name = "vue-apps-new"

# Create the vue application from the NodeJs server
node_app.create(vue_name)

# Change the linter to remove erros with not used variables and semicolons
node_app.cli(vue_name).linter()

# Install some packages and also the router in order to automatically mapped the transpiled views
node_app.cli(vue_name).npm(["jquery", "jquery-ui-dist"])
node_app.cli(vue_name).add_router()

# Start the server
node_app.serve(vue_name)
```


Then you can create a similar setup to your environment with the reports and views folders.
By running the transpile.py your reports will be automatically transpiled to code compatible with Vue.

It will also mention the missing packages on the app during the conversion to .vue files

<div align="center" >
    <img width=300 src="https://github.com/epykure/epyk-vue/blob/master/static/images/missing_modules.PNG?raw=true">
</div>


Benefits
================================

Code will be always in Python and it can be transpiled to any required output. 
It can obviously be part of a full python stack but without any changes can be also used to a VueJs environment.

Routing and file structure will be automatically done from the Epyk Components

<div align="center" >
    <img width=300 src="https://github.com/epykure/epyk-vue/blob/master/static/images/routing.PNG?raw=true">
</div>

This can allow you to map your ML or IA algorithm to reports visible in Jupyter Notebook and in the same way to more 
moderne web plateform.

<div align="center" >
    <img width=300 src="https://github.com/epykure/epyk-vue/blob/master/static/images/vues.PNG?raw=true">
</div>


Compatibility
================================

This has been tested on Vue2.

More examples of reports are available on Github or in [Jupyter](https://nbviewer.jupyter.org/github/epykure/epyk-templates-notebooks/blob/master/index.ipynb)

Please get in touch if there is any feature you feel Epyk-UI needs