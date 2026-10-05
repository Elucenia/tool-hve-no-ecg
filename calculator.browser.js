/* ELUCENIA per-tool fixed module bundle. Preserve all original and method-code notices. */
(function(){"use strict";const factories={"tool-code/hve-no-ecg/calculator.js":function(module,exports,require){
'use strict';
// Own versioned method. Arithmetic evidence is not clinical approval.
const methods=require('../../restored-methods.cjs');
const definition=methods.definitions["hve-no-ecg"];
const metadata=Object.freeze({id:definition.id,title:definition.title,fields:definition.fields,methodVersion:definition.version,reviewStatus:'needs-review',clinicalValidation:'not-performed'});
module.exports=Object.freeze({metadata,calculate:input=>methods.calculate("hve-no-ecg",input)});

},
"restored-methods.cjs":function(module,exports,require){
'use strict';
// Own implementations of explicitly versioned methods. Scientific and language
// review remain unsigned. No treatment, referral or diagnostic verdict is emitted.
// This archived, read-only source inventory is independent of generated public
// metadata. Re-running the content migration must never duplicate input fields.
const original=require('./restoration-original-tools.json');
const definitions={};
const num=(id,label,min,max,unit,extra={})=>[id,label,'num',{min,max,unit,...extra}];
const select=(id,label,opts)=>[id,label,'sel',{opts}];
const yesno=(id,label)=>select(id,label,{'0':'Não','1':'Sim'});
const adult=num('idade','Idade',18,110,'anos');
const context=label=>yesno('contexto',label);
const ok=(a)=>{if(a.contexto!=='1')throw new DomainError('contexto','Confirme a população e as condições de aplicação da versão selecionada.');};
class DomainError extends Error{constructor(field,message){super(message);this.field=field;}}
const f=(value,places=2)=>value.toLocaleString('pt-BR',{minimumFractionDigits:places,maximumFractionDigits:places});
const out=(value,unit,label,raw,places=2)=>({main:[typeof value==='number'?f(value,places):value,unit],label,raw});
function define(id,version,fields,formula,limits,calculate,additionalSources=[]){
 const source=original.find(t=>t.id===id);if(!source)throw Error('Unknown method '+id);
 definitions[id]={id,title:source.title,fields,version,formula,limits,sources:[...source.sources,...additionalSources],calculate};
}
const fields=id=>structuredClone(original.find(t=>t.id===id).fields);
const omit=(id,names)=>fields(id).filter(field=>!names.includes(field[0]));
const cite=(title,url)=>[title,url];

const waterFields=id=>omit(id,['meta']).map(row=>row[0]==='peso'?[...row.slice(0,3),{...row[3],min:30}]:row[0]==='grupo'?[row[0],'Fração estimada de água corporal total','sel',{opts:{'0.6':'0,60','0.5':'0,50','0.45':'0,45'}}]:row);

define('hve-no-ecg','Sokolow–Lyon 1949; Cornell 1987; produto de Cornell (LIFE)',
 [...fields('hve-no-ecg'),context('ECG com calibração de 10 mm/mV e medidas conferidas?')],
 'Sokolow–Lyon: SV1 + max(RV5,RV6) ≥ 35 mm. R aVL ≥ 11 mm. Cornell: RaVL + SV3 > 28 mm em homens ou > 20 mm em mulheres. Produto de Cornell: (Cornell + 6 mm em mulheres) × QRS > 2440 mm·ms.',
 'Saída é número de critérios positivos, sem diagnóstico de HVE ou declaração de ausência de HVE. Produto usa convenção LIFE de +6 mm em mulheres; outras versões usam convenções distintas.',
 a=>{ok(a);const sl=a.sv1+Math.max(a.rv5,a.rv6),cv=a.ravl+a.sv3,cp=a.qrs==null?null:(cv+(a.sexo==='F'?6:0))*a.qrs,n=Number(sl>=35)+Number(a.ravl>=11)+Number(cv>(a.sexo==='F'?20:28))+Number(cp!==null&&cp>2440);return out(n,'critérios','Critérios eletrocardiográficos positivos',{sl,cv,cp,n},0);},
 [cite('Okin et al. · LIFE 2004 · convenção do produto de Cornell','https://jamanetwork.com/journals/jama/fullarticle/199807')]);

function calculate(id,input){
 const method=definitions[id];if(!method)return {error:'Método inexistente.',code:'TOOL_NOT_FOUND'};
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe os campos.',code:'INVALID_INPUT'};
 const values={};
 for(const [name,,kind,options={}] of method.fields){const value=input[name];
  if(kind==='chk'){if(typeof value!=='boolean')return {error:'Responda sim ou não.',code:'MISSING_BOOLEAN',field:name};values[name]=value;continue;}
  if(value==null||value===''){if(!options.opt)return {error:'Preencha o campo obrigatório.',code:'REQUIRED_FIELD',field:name};values[name]=null;continue;}
  if(kind==='num'){if(typeof value!=='number'||!Number.isFinite(value))return {error:'Número inválido.',code:'INVALID_INPUT',field:name};if(value<options.min||value>options.max)return {error:'Valor fora do intervalo.',code:'OUT_OF_RANGE',field:name};if(options.integer&&!Number.isInteger(value))return {error:'Informe um número inteiro.',code:'INTEGER_REQUIRED',field:name};}
  else if(typeof value!=='string'||!Object.hasOwn(options.opts||{},value))return {error:'Opção inválida.',code:'INVALID_OPTION',field:name};
  values[name]=value;
 }
 try{const result=method.calculate(values);if(Object.values(result.raw).some(v=>typeof v==='number'&&!Number.isFinite(v)))throw new DomainError('', 'Resultado fora do domínio.');return {id,...result,methodVersion:method.version,clinicalValidation:'not-performed'};}
 catch(error){return {error:error instanceof DomainError?error.message:'Confira o domínio do método.',code:'METHOD_SCOPE',...(error.field?{field:error.field}:{})};}
}
module.exports={definitions,calculate};
},
"restoration-original-tools.json":function(module,exports,require){
module.exports=[{"id":"hve-no-ecg","title":"Hipertrofia ventricular esquerda no ECG","fields":[["sexo","Sexo","radio",{"opts":{"F":"Feminino","M":"Masculino"}}],["sv1","Onda S em V1","num",{"min":0,"max":60,"step":0.5,"unit":"mm","ph":"12"}],["rv5","Onda R em V5","num",{"min":0,"max":60,"step":0.5,"unit":"mm","ph":"20"}],["rv6","Onda R em V6","num",{"min":0,"max":60,"step":0.5,"unit":"mm","ph":"18"}],["ravl","Onda R em aVL","num",{"min":0,"max":40,"step":0.5,"unit":"mm","ph":"8"}],["sv3","Onda S em V3","num",{"min":0,"max":60,"step":0.5,"unit":"mm","ph":"15"}],["qrs","Duração do QRS (para o produto de Cornell)","num",{"min":60,"max":250,"unit":"ms","ph":"100","opt":true}]],"sources":[["Sokolow M, Lyon TP. The ventricular complex in left ventricular hypertrophy as obtained by unipolar precordial and limb leads. Am Heart J, 1949.","https://doi.org/10.1016/0002-8703(49)90562-1"],["Casale PN et al. Improved sex-specific criteria of left ventricular hypertrophy for clinical and computer interpretation of electrocardiograms: validation with autopsy findings. Circulation, 1987.","https://doi.org/10.1161/01.CIR.75.3.565"],["Okin PM et al. Electrocardiographic identification of increased left ventricular mass by simple voltage-duration products. J Am Coll Cardiol, 1995.","https://doi.org/10.1016/0735-1097(94)00371-V"]]}];
}},deps={"tool-code/hve-no-ecg/calculator.js":{"../../restored-methods.cjs":"restored-methods.cjs"},"restored-methods.cjs":{"./restoration-original-tools.json":"restoration-original-tools.json"},"restoration-original-tools.json":{}},cache={};function load(id){if(cache[id])return cache[id].exports;if(!Object.hasOwn(factories,id))throw Error("Unknown fixed module");const m={exports:{}};cache[id]=m;factories[id](m,m.exports,r=>{const target=deps[id]?.[r];if(!target)throw Error("Unsupported fixed import "+r);return load(target);});return m.exports;}globalThis.EluceniaTool=load("tool-code/hve-no-ecg/calculator.js");})();
