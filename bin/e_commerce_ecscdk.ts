#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { EcrStack } from '../lib/ecr-stack';

const app = new cdk.App();

const env: cdk.Environment = {
  account: process.env.CDK_ACCOUNT_ID,
  region: process.env.CDK_REGION
}

const tagsInfra = {
  cost: "ECommerceInfra",
  team: "SiecolaCode"
}

const ecrStack = new EcrStack(app, "Ecr", {
  env: env,
  tags: tagsInfra
})