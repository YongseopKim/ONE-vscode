/*
 * Copyright (c) 2022 Samsung Electronics Co., Ltd. All Rights Reserved
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

import {assert} from 'chai';
import {Job} from '../../Project/Job';
import {JobQuantize} from '../../Project/JobQuantize';

suite('Project', function() {
  suite('JobQuantize', function() {
    suite('#contructor()', function() {
      test('is contructed with jobtype', function() {
        let job = new JobQuantize();
        assert.equal(job.jobType, Job.Type.tQuantize);
      });
    });
    suite('#valid()', function() {
      test('returns true always', function() {
        let job = new JobQuantize();
        assert.isTrue(job.valid);
      });
    });
    suite('#tool()', function() {
      test('returns toolname as string', function() {
        let job = new JobQuantize();
        let toolName = 'quantize';
        assert.strictEqual(job.tool, toolName);
      });
    });
    suite('#toolArgs()', function() {
      test('returns args as ToolArgs', function() {
        // string args not null
        let inputPath = 'input_path';
        let outputPath = 'output_path';

        let job = new JobQuantize();
        // mandatory
        job.inputPath = inputPath;
        job.outputPath = outputPath;
        assert.isTrue(job.valid);
        // TODO quantize options

        let expected: Array<string> = ['--input_path', inputPath, '--output_path', outputPath];
        let args = job.toolArgs;
        assert.includeOrderedMembers(args, expected);
      });
    });
  });
});
