/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */
import * as cdk from 'aws-cdk-lib'

import AuthxStack from '@/stacks/authx/authx'

// :: ---

const app = new cdk.App()
cdk.Tags.of(app).add('x-application', 'IVS Livestream and Chat Demo')

new AuthxStack(app, 'authx')
