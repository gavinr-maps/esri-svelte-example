import{D as s}from"./index-XUlETPJZ.js";let i=class{constructor(t,o,r=""){this.major=t,this.minor=o,this._context=r}lessThan(t,o){return this.major<t||t===this.major&&this.minor<o}since(t,o){return!this.lessThan(t,o)}validate(t){if(this.major!==t.major){const o=this._context&&this._context+":",r=this._context&&this._context+" ";throw new s(o+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:t})}}clone(){return new i(this.major,this.minor,this._context)}static parse(t,o=""){const[r,e]=t.split("."),n=/^\s*\d+\s*$/;if(!(r!=null&&r.match)||!n.test(r))throw new s((o&&o+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:t});if(!(e!=null&&e.match)||!n.test(e))throw new s((o&&o+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:t});const a=parseInt(r,10),h=parseInt(e,10);return new i(a,h,o)}};export{i as r};