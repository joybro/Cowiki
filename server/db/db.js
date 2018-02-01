// @Flow

import loki from './loki';
import dynamoDB from './dynamoDB';

import type {
  CreateArticle,
  ReadArticle,
  UpdateArticle,
  Article,
  CreateUser,
  ReadUser,
  User,
} from './db.flow';

let useLoki = false;

const init = (useLokiDB: boolean, awsRegion: string): void => {
  useLoki = useLokiDB;

  if (!useLoki) {
    dynamoDB.init(awsRegion);
  }
};

const createArticle = async (doc: CreateArticle): Promise<Article> =>
  useLoki ? loki.createArticle(doc) : dynamoDB.createArticle(doc);

const readArticle = async (doc: ReadArticle): Promise<Article> =>
  useLoki ? loki.readArticle(doc) : dynamoDB.readArticle(doc);

const updateArticle = async (doc: UpdateArticle): Promise<Article> =>
  useLoki ? loki.updateArticle(doc) : dynamoDB.updateArticle(doc);

const createUser = async (doc: CreateUser): Promise<User> =>
  useLoki ? loki.createUser(doc) : dynamoDB.createUser(doc);

const readUser = async (doc: ReadUser): Promise<User> =>
  useLoki ? loki.readUser(doc) : dynamoDB.readUser(doc);

export default {
  init,
  createArticle,
  readArticle,
  updateArticle,
  createUser,
  readUser,
};
