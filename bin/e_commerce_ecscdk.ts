#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { EcrStack } from '../lib/ecr-stack';
import { VpcStack } from '../lib/vpc-stack';

const app = new cdk.App();

const env: cdk.Environment = {
  account: process.env.CDK_ACCOUNT_ID,
  region: process.env.CDK_REGION
}

const tagsInfra = {
  cost: "ECommerceInfra",
  team: "ViniDev"
}

const ecrStack = new EcrStack(app, "Ecr", {
  env: env,
  tags: tagsInfra
})

const vpcStack = new VpcStack(app, "Vpc", {
  env: env,
  tags: tagsInfra
})