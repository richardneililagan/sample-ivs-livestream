/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */
import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'

import * as cognito from 'aws-cdk-lib/aws-cognito'

// :: ---

export type AuthxStackProps = cdk.StackProps & {
  //
}

/**
 * Creates constructs related to managing user identities
 * for client-side login and authentication.
 */
class AuthxStack extends cdk.Stack {
  readonly userpool: cognito.UserPool

  constructor(scope: Construct, id: string, props?: AuthxStackProps) {
    super(scope, id)

    this.userpool = new cognito.UserPool(this, 'ivs-demo-userpool', {
      userPoolName: 'ivs-demo-userpool',

      signInAliases: {
        username: true,
        email: true,
      },

      autoVerify: {
        email: true,
        phone: true,
      },
    })

    this.userpool.addDomain('userpool-domain', {
      cognitoDomain: {
        domainPrefix: 'ivs-demo',
      },
    })
  }
}

export default AuthxStack
