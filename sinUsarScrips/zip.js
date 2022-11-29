 import { conbert64 } from "./conbertArch.js";


 const fileInput = document.querySelector('#fileInput');
 const conbert = document.querySelector('#conbert');
 const desconvert = document.querySelector('#desconvert');


 conbert.addEventListener('click', async(e) => {
     console.log(desconvert.innerText);
     const mycovert = fileInput.files[0];
     const mycovert64 = await conbert64(mycovert)
     console.log(mycovert64)
 });


 desconvert.addEventListener('click', async(e) => {
     console.log(desconvert.innerText);
 });


 function exportar(data, fileName) {
     const a = document.createElement("a");
     const contenido = data,
         blob = new Blob([contenido], { type: "octet/stream" }),
         url = window.URL.createObjectURL(blob);
     a.href = url;
     a.download = fileName;
     a.click();
     window.URL.revokeObjectURL(url);

 };

 document.querySelector('#ab').onclick = function() {
     const data = document.querySelector('#y').value;
     const nombreArchivo = 'manifest.json'
     const zips = 'you.zip'
     exportar(data, nombreArchivo, zips);

 }