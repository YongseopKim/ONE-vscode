/*
 * Copyright (c) 2021 Samsung Electronics Co., Ltd. All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class FakeQuantOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): FakeQuantOptions {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsFakeQuantOptions(bb: flatbuffers.ByteBuffer, obj?: FakeQuantOptions):
      FakeQuantOptions {
    return (obj || new FakeQuantOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsFakeQuantOptions(bb: flatbuffers.ByteBuffer, obj?: FakeQuantOptions):
      FakeQuantOptions {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new FakeQuantOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  min(): number {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
  }

  max(): number {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
  }

  numBits(): number {
    const offset = this.bb!.__offset(this.bb_pos, 8);
    return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
  }

  narrowRange(): boolean {
    const offset = this.bb!.__offset(this.bb_pos, 10);
    return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
  }

  static startFakeQuantOptions(builder: flatbuffers.Builder) {
    builder.startObject(4);
  }

  static addMin(builder: flatbuffers.Builder, min: number) {
    builder.addFieldFloat32(0, min, 0.0);
  }

  static addMax(builder: flatbuffers.Builder, max: number) {
    builder.addFieldFloat32(1, max, 0.0);
  }

  static addNumBits(builder: flatbuffers.Builder, numBits: number) {
    builder.addFieldInt32(2, numBits, 0);
  }

  static addNarrowRange(builder: flatbuffers.Builder, narrowRange: boolean) {
    builder.addFieldInt8(3, +narrowRange, +false);
  }

  static endFakeQuantOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createFakeQuantOptions(
      builder: flatbuffers.Builder, min: number, max: number, numBits: number,
      narrowRange: boolean): flatbuffers.Offset {
    FakeQuantOptions.startFakeQuantOptions(builder);
    FakeQuantOptions.addMin(builder, min);
    FakeQuantOptions.addMax(builder, max);
    FakeQuantOptions.addNumBits(builder, numBits);
    FakeQuantOptions.addNarrowRange(builder, narrowRange);
    return FakeQuantOptions.endFakeQuantOptions(builder);
  }
}
