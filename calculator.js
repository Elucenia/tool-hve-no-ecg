/* tool-hve-no-ecg · ELUCENIA · https://github.com/Elucenia/tool-hve-no-ecg
   Copyright (c) 2026 ELUCENIA · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"hve-no-ecg","title":"Hipertrofia ventricular esquerda no ECG","fields":[["sexo","Sexo","radio",{"opts":{"F":"Feminino","M":"Masculino"}}],["sv1","Onda S em V1","num",{"min":0,"max":60,"step":0.5,"unit":"mm","ph":"12"}],["rv5","Onda R em V5","num",{"min":0,"max":60,"step":0.5,"unit":"mm","ph":"20"}],["rv6","Onda R em V6","num",{"min":0,"max":60,"step":0.5,"unit":"mm","ph":"18"}],["ravl","Onda R em aVL","num",{"min":0,"max":40,"step":0.5,"unit":"mm","ph":"8"}],["sv3","Onda S em V3","num",{"min":0,"max":60,"step":0.5,"unit":"mm","ph":"15"}],["qrs","Duração do QRS (para o produto de Cornell)","num",{"min":60,"max":250,"unit":"ms","ph":"100","opt":true}]],"config":null,"reviewStatus":"restricted","clinicalValidation":"not-performed"});
function calculate(){return {error:'Cálculo suspenso: consulte a revisão e a fonte oficial.',code:'REVIEW_REQUIRED',id:TOOL.id};}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
