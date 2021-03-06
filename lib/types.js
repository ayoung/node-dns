// Copyright 2011 Timothy J Fontaine <tjfontaine@gmail.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE

'use strict';

/*
var ednsFields = [
  fields.Label('name'),
  fields.Struct('type', 'H'),
  fields.Struct('udpSize', 'H'),
  fields.Struct('rcode', 'B'),
  fields.Struct('version', 'B'),
  fields.Struct('bitfields', 'H'),
  fields.BufferField('rdata', 'H')
];

var bitFields = [fields.SubField('do', 'bitfields', 15, 0x8000)];

var OptField = function() {
  this._fields = [
    fields.Struct('code', 'H'),
    fields.BufferField('data', 'H')
  ];
  Message.call(this);
};
util.inherits(OptField, Message);

var OPT = function(vals) {
  this._fields = ednsFields;
  this._sub_fields = bitFields;
  Message.call(this);

  this.type = consts.NAME_TO_QTYPE.OPT;
  this.options = [];

  this.initialize(vals);
};
util.inherits(OPT, Message);

types.map[consts.NAME_TO_QTYPE.OPT] = OPT;
types.exported['OPT'] = OPT;

OPT.prototype.initialize = ResourceRecord.prototype.initialize;

OPT.prototype.pack = function(buff, pos) {
  var spos = pos;

  this.options.forEach(function(field) {
    pos += field.pack(buff, pos);
  });

  this.rdata = buff.slice(spos, pos);

  return Message.prototype.pack.call(this, buff, pos);
};

OPT.prototype.unpackRData = function() {
  var field, offset, rdata_pos;

  offset = 0;
  rdata_pos = this._fields[4].position;

  while (offset !== this.rdata.length) {
    field = new OptField();
    offset += field.unpack(this.raw_, rdata_pos + offset);
    this.options.push(field);
  }
};

OPT.prototype.estimateSize = function() {
  return this.estimateSizeFields(this._fields.slice(0, 6)) +
         this.estimateSizeFields(this.options) + 1;
};

OPT.prototype.toString = function() {
  return Message.prototype.toString.call(this) +
         '\t' + this.fieldsToString(this.options);
};
*/
