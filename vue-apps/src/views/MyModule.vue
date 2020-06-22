
<template>
  <div style="font-size:12px;font-family:Calibri;margin:0px"><div id="text_2363200850856" style="font-size:inherit;font-family:inherit;box-sizing:border-box;width:auto;text-align:left" class="cssdivnoborder"></div>
<button data-count="0" id="button_2363200851920" style="font-size:12px" class="cssbuttonbasic">This is a test</button></div>
</template>


<script>
import { Text } from './mymodule.js'

export default {
  name: 'mymodule',
  mounted: function() {Text(document.getElementById('text_2363200850856'), "#This is a text", {reset: false,markdown: true,'showdown': {},maxlength: null});document.getElementById('button_2363200851920').addEventListener('click', function(event){window.alert("test")})}
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
::-webkit-scrollbar {width: 10px ;}
::-webkit-scrollbar-thumb {border-radius: 10px ;background-color: #2e7d32 ;}
::-webkit-scrollbar-track {border-radius: 10px ;background-color: #e8f5e9 ;}
::selection {background-color: #c8e6c9 ;}
::-moz-selection {background-color: #c8e6c9 ;}
.cssdivnoborder {margin: 0 ;clear: both ;padding: 0 ;border: 0 ;}
.cssbuttonbasic {font-weight: bold ;padding: 2px 20px ;margin: 2px 0 2px 0 ;text-decoration: none ;border-radius: 4px ;white-space: nowrap ;display: inline-block ;line-height: 30px ;-webkit-appearance: none ;-moz-appearance: none ;border: 1px solid #bdbdbd ;color: #1b5e20 ;background-color: #FFFFFF ;}
.cssbuttonbasic:hover {text-decoration: none ;cursor: pointer ;background-color: #e8f5e9 ;color: #1b5e20 ;}
.cssbuttonbasic:focus {outline: 0 ;}
.cssbuttonbasic:disabled {cursor: none ;background-color: #1b5e20 ;color: #43a047 ;font-style: italic ;}

@import "https://use.fontawesome.com/releases/v5.13.0/css/all.css"
@import "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css"
</style>
