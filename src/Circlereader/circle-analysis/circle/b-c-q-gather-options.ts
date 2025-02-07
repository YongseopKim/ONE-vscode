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

export class BCQGatherOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): BCQGatherOptions {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsBCQGatherOptions(bb: flatbuffers.ByteBuffer, obj?: BCQGatherOptions):
      BCQGatherOptions {
    return (obj || new BCQGatherOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsBCQGatherOptions(bb: flatbuffers.ByteBuffer, obj?: BCQGatherOptions):
      BCQGatherOptions {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new BCQGatherOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  inputHiddenSize(): number {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
  }

  axis(): number {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
  }

  static startBCQGatherOptions(builder: flatbuffers.Builder) {
    builder.startObject(2);
  }

  static addInputHiddenSize(builder: flatbuffers.Builder, inputHiddenSize: number) {
    builder.addFieldInt32(0, inputHiddenSize, 0);
  }

  static addAxis(builder: flatbuffers.Builder, axis: number) {
    builder.addFieldInt32(1, axis, 0);
  }

  static endBCQGatherOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createBCQGatherOptions(
      builder: flatbuffers.Builder, inputHiddenSize: number, axis: number): flatbuffers.Offset {
    BCQGatherOptions.startBCQGatherOptions(builder);
    BCQGatherOptions.addInputHiddenSize(builder, inputHiddenSize);
    BCQGatherOptions.addAxis(builder, axis);
    return BCQGatherOptions.endBCQGatherOptions(builder);
  }
}
