import{T as s}from"./index-e8c6bcc0.js";let n=class{constructor(t,e,o=""){this.major=t,this.minor=e,this._context=o}lessThan(t,e){return this.major<t||t===this.major&&this.minor<e}since(t,e){return!this.lessThan(t,e)}validate(t){if(this.major!==t.major){const e=this._context&&this._context+":",o=this._context&&this._context+" ";throw new s(e+"unsupported-version",`Required major ${o}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:t})}}clone(){return new n(this.major,this.minor,this._context)}static parse(t,e=""){const[o,r]=t.split("."),i=/^\s*\d+\s*$/;if(!o||!o.match||!i.test(o))throw new s((e&&e+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:t});if(!r||!r.match||!i.test(r))throw new s((e&&e+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:t});const a=parseInt(o,10),h=parseInt(r,10);return new n(a,h,e)}};export{n as r};
