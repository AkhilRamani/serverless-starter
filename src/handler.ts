import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import serverless from 'serverless-http'
import awsServerless from 'aws-serverless-express';
import { app } from './app';
import { res } from './common/response';

export const hello: APIGatewayProxyHandler = async (event, _context) => res({
  message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
  input: event,
})._200()

const server = awsServerless.createServer(app)

export const express: APIGatewayProxyHandler = (event, context) => {
  awsServerless.proxy(server, event, context)
}