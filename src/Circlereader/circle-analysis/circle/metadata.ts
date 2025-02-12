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

export class Metadata {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): Metadata {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsMetadata(bb: flatbuffers.ByteBuffer, obj?: Metadata): Metadata {
    return (obj || new Metadata()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsMetadata(bb: flatbuffers.ByteBuffer, obj?: Metadata): Metadata {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Metadata()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  name(): string|null
  name(optionalEncoding: flatbuffers.Encoding): string|Uint8Array|null
  name(optionalEncoding?: any): string|Uint8Array|null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
  }

  buffer(): number {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
  }

  static startMetadata(builder: flatbuffers.Builder) {
    builder.startObject(2);
  }

  static addName(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset) {
    builder.addFieldOffset(0, nameOffset, 0);
  }

  static addBuffer(builder: flatbuffers.Builder, buffer: number) {
    builder.addFieldInt32(1, buffer, 0);
  }

  static endMetadata(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createMetadata(
      builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset,
      buffer: number): flatbuffers.Offset {
    Metadata.startMetadata(builder);
    Metadata.addName(builder, nameOffset);
    Metadata.addBuffer(builder, buffer);
    return Metadata.endMetadata(builder);
  }
}
